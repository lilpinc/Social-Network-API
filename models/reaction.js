const { Schema, model, Types } = require('mongoose');
const moment = require("moment");

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId, 
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (currentDate) => moment(currentDate).toDate(),
        }
    },
    {
        toJSON: {
            getters: true,
        },
        id: false
    }
)
// const Reaction = model('reaction', reactionSchema)
module.exports = reactionSchema;