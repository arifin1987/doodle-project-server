import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

const createBlogIntoDB = async (blog: TBlog) => {
  const result = await Blog.create(blog);
  return result;
};
const getAllBlogsFromDB = async () => {
  const result = await Blog.find();
  return result;
};
const getSingleBlogFromDB = async (id: string) => {
  const result = await Blog.findOne({ id });
  return result;
};
const deleteSingleBlogFromDB = async (id: string) => {
  const result = await Blog.deleteOne({ id });
  return result;
};

export const BlogServices = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  getSingleBlogFromDB,
  deleteSingleBlogFromDB,
};
