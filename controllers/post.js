const Post = require('../models/post');

module.exports = (app) => {

app.get('/', (req, res) => {
    Post.find({}).lean()
      .then(posts => {
        res.render('posts-index', { posts });
      })
      .catch(err => {
        console.log(err.message);
      })
  })    

app.post('/posts/new', (req, res) => {
    console.log(req)
    // INSTANTIATE INSTANCE OF POST MODEL
    const post = new Post(req.body);
    console.log(req.body)
    // SAVE INSTANCE OF POST MODEL TO DB
    post.save((err, post) => {
    //   REDIRECT TO THE ROOT
        return res.redirect(`/`);
    })
}); 

app.get('/posts/new', (req, res) => {
  res.render('post-new')
})

app.get("/posts/:id", function(req, res) {
    // LOOK UP THE POST
    Post.findById(req.params.id).lean()
      .then(post => {
        res.render("posts-show", { post });
      })
      .catch(err => {
        console.log(err.message);
      });
  });
};