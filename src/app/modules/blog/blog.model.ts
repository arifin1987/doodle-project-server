import { Schema, model } from 'mongoose';
import { TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog>({
  userId: { type: Number },
  id: { type: Number },
  title: { type: String, required: true },
  body: { type: String, required: true },
});

export const Blog = model<TBlog>('Blog', blogSchema);
