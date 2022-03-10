import mongoose from 'mongoose';

const modelName = 'TaskNext';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  responsible: {
    type: String,
    /* type: mongoose.Types.ObjectId,
    ref: 'User', */
  },
  isCompleted: Boolean,
});

taskSchema.set('toJSON', {
  transform: (document: any, returnedObject: any) => {
    delete returnedObject.__v;
  },
});

/* export let Task: mongoose.Model<any>;
if (mongoose.models[modelName]) {
  Task = mongoose.model(modelName);
} else {
  Task = mongoose.model(modelName, taskSchema);
}
 */

export const Task =
  mongoose.models[modelName] || mongoose.model(modelName, taskSchema);
