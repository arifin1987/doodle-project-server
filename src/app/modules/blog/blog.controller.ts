import { Request, Response } from 'express';
import { BlogServices } from './blog.service';

const createBlog = async (req: Request, res: Response) => {
  try {
    const { blog: blogData } = req.body;

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

export const BlogControllers = {
  createBlog,
  getAllBlogs,
};
