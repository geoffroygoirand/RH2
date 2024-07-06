import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || '');
    
    console.log('MongoDB connecté');
  } catch (err: any) {
    console.error(err?.message || 'Connection to MongoDB is failed');
    process.exit(1);
  }
};
