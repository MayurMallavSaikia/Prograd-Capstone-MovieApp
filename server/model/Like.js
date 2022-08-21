const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const likeSchema = mongoose.Schema({
   userId: {
       type: Schema.Types.ObjectId,
       ref: 'User'
   },
   commentId: {
       type: Schema.Types.ObjectId,
       ref: 'Comment'
   },
   videoId: {
       type: String,
   }

}, { timestamps: true })


mongoose.model('likes', likeSchema);
