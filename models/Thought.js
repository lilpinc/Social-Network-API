const { Schema, model } = require('mongoose');
const moment = require('moment');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1 
            // Must be between 1 and 280 characters
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // Set default value to the current timestamp
            // Use a getter method to format the timestamp on query 
            get: (currentDate) => moment(currentDate).toDate(),
            // moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);
thoughtSchema
    .virtual('reactionCount')
    // Getter
    .get(function () {
        return this.reactions.length;
    });

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;
