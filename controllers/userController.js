const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    async getUsers(req, res) {
        try {
            const users = await User.find()
            .populate({ path:'thoughtsId', select:'-__v' })
            .populate({path: 'friendsId', select:'-__v' });

            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // get a single user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
            .populate({ path:'thoughtsId', select:'-__v' })
            .populate({path: 'friendsId', select:'-__v' });

            if (!user) {
                return res.status(404).json({ message: 'No user with that ID' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // create a user
    async createUser(req, res) {
        try {
            const user = await User.create(req.body);
            res.json(user);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    // delete a user
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: req.params.userId });

            if (!user) {
                res.status(404).json({ message: 'No user with that ID' });
            }
            Thought.deleteMany({ _id: { $in: User.thoughtsId } })
            res.json({ message: 'User and thoughts deleted!' })
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    // update a user
    async updateUser(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!user) {
                res.status(404).json({ message: 'No user with this id!' });
            }

            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};