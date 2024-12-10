import mongoose from 'mongoose';

export const conectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`>>Conectado a Mongo<<`);
  } catch (error) {
    console.error(`Error de conexión: ${error.message}`);
    process.exit(1);
  }
};


