const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction,
  } = require('../../controllers/thoughtController.js');

//   /api/thoughts
  router.route('/').get(getAllThoughts).post(createThought)

  router.route('/:thoughtId').get(getOneThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions

router.route('/:thoughtId/reactions').post(createReaction).delete(deleteReaction);

module.exports = router;