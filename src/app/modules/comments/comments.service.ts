import { TComments } from './comments.interface';
import { Comments } from './comments.model';

const createCommentsIntoDB = async (blog: TComments) => {
  const result = await Comments.create(blog);
  return result;
};
const getAllCommentsFromDB = async () => {
  const result = await Comments.find();
  return result;
};
const getSinglecommentFromDB = async (id: string) => {
  const result = await Comments.findOne({ id });
  return result;
};
const deleteSingleCommentFromDB = async (id: string) => {
  const result = await Comments.deleteOne({ id });
  return result;
};

export const CommentServices = {
  createCommentsIntoDB,
  getAllCommentsFromDB,
  getSinglecommentFromDB,
  deleteSingleCommentFromDB,
};
