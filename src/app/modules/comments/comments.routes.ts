import express from 'express';
import { CommentsControllers } from './comments.controller';

const router = express.Router();

router.post('/create-comment', CommentsControllers.createComments);
router.get('/', CommentsControllers.getAllComments);
router.get('/:commentId', CommentsControllers.getSingleComment);
router.delete('/:commentId', CommentsControllers.deleteSingleComment);

export const CommentsRoutes = router;
