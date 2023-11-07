const { User, Thought } = require('../models');

module.exports = {
    // Get all users
    async getUsers(req, res) {
        try {
            const users = await User.find()
           .populate({ path:'thoughts', select:'-__v' })
           .populate({path: 'friends', select:'-__v' });
            console.log ("working");
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
            console.log ('no route');
        }
    },
    // get a single user
    async getSingleUser(req, res) {
        try {
            const user = await User.findOne({ _id: req.params.userId })
           .populate({ path:'thoughts', select:'-__v' })
            .populate({path: 'friends', select:'-__v' });

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
            console.log(req.body)
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
                { _id: req.params.userId },
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
    async addFriend(req, res) {
        try {
            console.log(req.params);
        const user = await User.findOneAndUpdate(
          { _id: req.params.userId },
          { $push: { friends: req.params.friendId } },
          { runValidators: true, 
            new: true 
        }
        )
           if(!user) {
           res.status(404).json({ message: 'No user with this id!' });
           }
        res.json(user)
        }
        catch(err) {
            res.status(500).json(err);
      }
    },
      // Remove Friend from a Friend List
      async deleteFriend(req, res) {
        try {
        const user = await  User.findOneAndUpdate(
          { _id: req.params.userId },
          { $pull: { friends: { friends: req.params.friendsId } } },
          { runValidators: true, new: true }
        )
         if (!user) {
        res.status(404).json({ message: 'No user found with that ID' })
         }
        res.json(user)
        }
        catch(err) {
            res.status(500).json(err);
      }
    }
};