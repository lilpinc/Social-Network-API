const { User, Thought } = require('../models');

module.exports = {
    // Get all thoughts
    async getAllThoughts(req, res) {
        try {
            const thoughts = await Thought.find()
            .populate({ path: 'reactions', select: '-__v' });

            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get a single thought
    async getOneThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId })
            .populate({ path: 'reactions', select: '-__v' });

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }
            res.json(course);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a thought
    async createThought(req, res) {
        try {
            const thought = await Thought.create(req.body);
            return User.findOneAndUpdate(
                { _id: req.body.userId },
                { $addToSet: { thoughts: Thought._id } },
                { new: true }
            );
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // delete a thought
    async deleteThought(req, res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

            if (!thought) {
                res.status(404).json({ message: 'No thought with that ID' });
            }
            Thought.deleteMany({ _id: { $in: Thought.thoughts } })
            res.json({ message: 'Thought and thoughts deleted!' })
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    // update a thought
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!thought) {
                res.status(404).json({ message: 'No thought with this id!' });
            }

            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a reaction to a thought
    async createReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            )
            if (!thought) {
                res.status(404).json({ message: 'No thought with this id!' });
            }
            res.json(thought);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // delete a reaction to a thought
    async deleteReaction(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { Reaction: { ReactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            )

            if (!thought) {
                res.status(404).json({ message: 'No thought with that ID' });
            }
            res.json(thought);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

};