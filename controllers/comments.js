const Comment = require('../models/comment');
const Video = require('../models/videos');

module.exports = function(app) {
    // CREATE Comment
    app.post("/videos/:videoId/comments", function(req, res) {
        // INSTANTIATE INSTANCE OF MODEL
        const comment = new Comment(req.body);
        comment.author = req.user._id;
        // SAVE INSTANCE OF Comment MODEL TO DB
        comment
            .save()
            .then(comment => {
                return Promise.all([
                    Video.findById(req.params.videoId)
                ]);
            })
            .then(([video, user]) => {
                video.comments.unshift(comment);
                return Promise.all([
                    video.save()
                ]);
        })
            .then(video => {
                res.redirect(`/videos/${req.params.videoId}`);
        })
            .catch(err => {
                console.log(err);
        });
    });

};