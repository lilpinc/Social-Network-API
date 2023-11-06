const connection = require('../config/connection');
const { Thoughts, Users } = require('../models');
// Import functions for seed data
const { users, thoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log ('connected');
    // Delete entries in collection
    await Thoughts.deleteMany({});
    await Users.deleteMany({});
  
    // create Empty arrays to hold Thoughts and Users
    const users = [];
    const thoughts = [];
  
    // Add users to the database and await the results
    await Users.collection.insertMany(users);
  
    // Add thoughts to the database and await the results
    await Thoughts.collection.insertMany(thoughts);
  
    // Log out the seed data to indicate what should appear in the database
    console.table(users);
    console.table(thoughts, ['published', 'users', '_id']);
    console.timeEnd('seeding');
    console.info('Seeding complete! 🌱');
    process.exit(0);
  });