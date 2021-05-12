var Video = require("../models/videos");
var Comment = require("../models/comment");
var User = require("../models/user");

module.exports = app => {
  // NEW REPLY
  app.get("/videos/:videoId/comments/:commentId/replies/new", (req, res) => {
    let video;
    Video.findById(req.params.videoId)
      .then(p => {
        video = p;
        return Comment.findById(req.params.commentId);
      })
      .then(comment => {
        res.render("replies-new", { video, comment });
      })
      .catch(err => {
        console.log(err.message);
      });
  });

// CREATE REPLY
app.post("/videos/:videoId/comments/:commentId/replies", (req, res) => {
  if (req.user) {
    // TURN REPLY INTO A COMMENT OBJECT
    const reply = new Comment(req.body);
    reply.author = req.user._id
    // LOOKUP THE PARENT video
    Video.findById(req.params.videoId)
        .then(video => {
            // FIND THE CHILD COMMENT
            Promise.all([
                reply.save(),
                Comment.findById(req.params.commentId),
            ])
                .then(([reply, comment]) => {
                    // ADD THE REPLY
                    comment.comments.unshift(reply._id);

                    return Promise.all([
                        comment.save(),
                    ]);
                })
                .then(() => {
                    res.redirect(`/videos/${req.params.videoId}`);
                })
                .catch(console.error);
            // SAVE THE CHANGE TO THE PARENT DOCUMENT
            return video.save();
        })
      } else {
        return res.status(401); // UNAUTHORIZED
    }
});
};