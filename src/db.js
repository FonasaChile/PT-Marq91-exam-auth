import mongoose from 'mongoose'

//  mongodb://localhost:27017/

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/fonasadb')
    console.log(">>> DB is connected")
  } catch (error) {
    console.error(error)
  }
}