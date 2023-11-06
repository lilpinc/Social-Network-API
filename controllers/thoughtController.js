const { User, Thought } = require('../models');

module.exports = {
    // Get all thoughts
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(courses);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get a single thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({_id: req.params.})
        }
    }
}