const express = require('express');
const postController = require('../controllers/postController');
const viewController = require('../controllers/viewController');
const postRouter = express.Router();

postRouter.get('/main', postController.index, viewController.showAll, viewController.show404);
  // .post(postController.create, viewController.create, viewController.show404);

// postRouter.get('/', postController.index, viewController.showAll, viewController.show404);


postRouter.get('/uploadpage/:id', viewController.create, viewController.show404)
  // .post(postController.create, viewController.show404);

postRouter.get('/:id', postController.findOne, viewController.showOne, viewController.show404);
// postRouter.put('/:id', postController.findOne, viewController.show404);




module.exports = postRouter;