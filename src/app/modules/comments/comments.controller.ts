import { Request, Response } from 'express';
import { CommentServices } from './comments.service';

const createComments = async (req: Request, res: Response) => {
  try {
    const { comments: commentsData } = req.body;

    const result = await CommentServices.createCommentsIntoDB(commentsData);
    res.status(200).json({
      success: true,
      message: 'Comment is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllComments = async (req: Request, res: Response) => {
  try {
    const result = await CommentServices.getAllCommentsFromDB();
    res.status(200).json({
      success: true,
      message: 'comments are retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleComment = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params;
    const result = await CommentServices.getSinglecommentFromDB(commentId);
    res.status(200).json({
      success: true,
      message: 'comment is retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const deleteSingleComment = async (req: Request, res: Response) => {
  try {
    const { commentId } = req.params;
    const result = await CommentServices.deleteSingleCommentFromDB(commentId);
    res.status(200).json({
      success: true,
      message: 'comment is deleted successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const CommentsControllers = {
  createComments,
  getAllComments,
  getSingleComment,
  deleteSingleComment,
};
