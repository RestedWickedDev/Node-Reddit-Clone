const Post = require('../models/post');

module.exports = (app) => {
    // CREATE
    app.post('/posts/new', (req, res) => {  //
        // INSTANTIATE INSTANCE OF POST MODEL
        const post = new Post(req.body);

        // SAVE INSTANCE OF POST MODEL TO DB AND REDIRECT TO THE ROOT
        post.save(() => res.redirect('/'));
    });

    // NEW
    app.get('/posts/new', (req, res) => {
        const currentUser = req.user;
        
        res.render('posts-new', {currentUser});
    });

    // VIEW POSTS
    app.get('/', (req, res) => {
        const currentUser = req.user;

        Post.find({}).lean()
          .then((posts) => res.render('posts-index', { posts, currentUser }))
          .catch((err) => {
            console.log(err.message);
        })
    })

    // LOOK UP THE POST
    app.get('/posts/:id', (req, res) => {
        const currentUser = req.user;

        Post.findById(req.params.id).lean().populate('comments')
        .then((post) => res.render('posts-show', { post, currentUser }))
        .catch((err) => {
            console.log(err.message);
        });
    });

    // SUBREDDIT
    app.get('/n/:subreddit', (req, res) => {
        const currentUser = req.user;

        Post.find({ subreddit: req.params.subreddit }).lean()
        .then((posts) => res.render('posts-index', { posts, currentUser }))
        .catch((err) => {
            console.log(err);
        });
    });
  
};

  