const { Schema, model, Types } = require('mongoose');
const thoughtSchema = require ('./thought')

const userSchema = new Schema(
    {
        username : {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email : {
            type: String,
            required: [true, 'User email address required'],
            unique: true,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
            // Must match a valid email address (look into Mongoose's matching validation)
        },
        thoughtsId: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Thought',
            },
          ],
        friendsId: [
                {
                  type: Schema.Types.ObjectId,
                  ref: 'User',
                },
              ],
    },
    { toJSON: {
        virtuals: true,
        getters: true
      },
      id: false,
    }
);
userSchema
  .virtual('friendCount')
  // Getter
  .get(function () {
    return this.friendsId.length;
  });

const User = model('user', userSchema);
module.exports = User;