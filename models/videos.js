const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Populate = require("../utils/autopopulate");

const VideoSchema = new Schema({
  title: { type: String, required: true },
  author : { type: Schema.Types.ObjectId, ref: "User", required: true },
  url: { type: String, required: true },
  summary: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  upVotesYacht : [{ type: Number}],
  downVotesYacht : [{ type: Number}],
  voteScoreYacht : {type: Number},
  upVotesRocker : [{ type: Number}],
  downVotesRocker : [{ type: Number}],
  voteScoreRocker : {type: Number},
}, {timestamps: {createdAt: 'created_at'}
    });
    
    // Always populate the author field
    VideoSchema
    .pre('findOne', Populate('author'))
    .pre('find', Populate('author'))

module.exports = mongoose.model("Video", VideoSchema);