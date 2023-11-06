const users = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
];
const thoughts = [
    'Before the camera was invented, no one had seen themselves with their eyes closed.',
    'How can our body feel and experience the scene when we fall off a cliff in a nightmare, if we have never fallen off a cliff before?',
    'What is the purpose of life?',
    'Do aliens exist and if so, do they also study and send their beings to our planet, as we go to theirs?',
    'What is a person? Is the person mind or body?',
    'Why do people hurt others if they do not want them to be hurt?',
    'If God created the world, who created God?',
    "What if we go to a parallel universe every time we go to sleep?",
    "The skeleton is not in us. We are the brain. So we’re in a skeleton.",
    "Each person has a different image of us and tailors a version of us that we do not know.",
    "Children with an imaginary friend are creative, while adults with an imaginary friend are schizophrenics.",
    "Because you’re blinking, you’ve never seen the whole movie in your life.",
    "What if you passed a missing person and you didn’t know she was missing?",
    "Who taught the first teacher? Who cut the first hairdresser’s hair?",
    'When you wait for a waiter, you become a waiter.',
    "What if we met someone in a dream and had the same dream, but we will never find out?",
    "We all have three voices in us. One that we hear in our head, one that we hear when we speak, and one that other people hear.",
    "Why can’t we invent a new color?",
    "The letter x is used more in mathematics than in grammar and sentences.",
    "Do animals think we are aliens because we don’t look like them?",
    "If we were called differently, would we behave like a different person?"
];



const getRandomThought = () => `${lorum[getRandomArrItem(thoughts)]}`;

const createRandomThought = (words) => {
  let thought = '';
  for (let i = 0; i < words; i++) {
    thought += ` ${getRandomThought()}`;
  }
  return thought;
};
// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomUser = () =>
    `${getRandomArrItem(users)} ${getRandomArrItem(users)}`;



module.exports = { getRandomUser, createRandomThought };