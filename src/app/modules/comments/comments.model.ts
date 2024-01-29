import { Schema, model } from 'mongoose';
import { TComments } from './comments.interface';

const commentsSchema = new Schema<TComments>({
  blogId: { type: Number },
  id: { type: Number },
  name: { type: String, required: true },
  email: { type: String, required: true },
  body: { type: String, required: true },
});

export const Comments = model<TComments>('Comments', commentsSchema);
