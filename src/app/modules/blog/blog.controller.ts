import { Request, Response } from 'express';
import { BlogServices } from './blog.service';

const createBlog = async (req: Request, res: Response) => {
  try {
    const blogData = req.body;

    const result = await BlogServices.createBlogIntoDB(blogData);
    res.status(200).json({
      success: true,
      message: 'Blog is created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const result = await BlogServices.getAllBlogsFromDB();
    res.status(200).json({
      success: true,
      message: 'Blogs are retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const getSingleBlog = async (req: Request, res: Response) => {
  try {
    const { blogId } = req.params;
    const result = await BlogServices.getSingleBlogFromDB(blogId);
    res.status(200).json({
      success: true,
      message: 'Blog is retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const deleteSingleBlog = async (req: Request, res: Response) => {
  try {
    const { blogId } = req.params;
    const result = await BlogServices.deleteSingleBlogFromDB(blogId);
    res.status(200).json({
      success: true,
      message: 'Blog is deleted successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const BlogControllers = {
  createBlog,
  getAllBlogs,
  getSingleBlog,
  deleteSingleBlog,
};
