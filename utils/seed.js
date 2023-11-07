// const connection = require('../config/connection');
// const { Thoughts, Users } = require('../models');
// // Import functions for seed data
// const { getRandomUser, createRandomThought } = require('./data');

// connection.on('error', (err) => err);

// connection.once('open', async () => {
//     console.log ('connected');
//     // Delete entries in collection
//     await Thoughts.deleteMany({});
//     await Users.deleteMany({});
  
//     // create Empty arrays to hold Thoughts and Users
//     const users = [];
//     const thoughts = [];
  
//     for (let i = 0; i < 20; i++) {
//       // Get some random assignment objects using a helper function that we imported from ./data
//       const newthought = createRandomThought(20);

//       const fullName = getRandomName();
//     const first = fullName.split(' ')[0];
//     const last = fullName.split(' ')[1];
//     const github = `${first}${Math.floor(Math.random() * (99 - 18 + 1) + 18)}`;

//     users.push({
//       first,
//       last,
//       github
//     });

//     thoughts.push({ newthought})
//   }

//     // Add users to the database and await the results
//     await Users.collection.insertMany(users);
  
//     // Add thoughts to the database and await the results
//     await Thoughts.collection.insertMany(thoughts);
  
//     // Log out the seed data to indicate what should appear in the database
//     console.table(users);
//     console.table(thoughts, ['published', 'users', '_id']);
//     // console.timeEnd('seeding');
//     console.info('Seeding complete! 🌱');
//     process.exit(0);
//   });