const mongoose = require('mongoose')

async function connectToDatabase() {
  try {
    await mongoose.connect('mongodb+srv://username:password@cluster0.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0')
    console.log('Successfully connected to MongoDB')
  } catch (error) {
    console.error('Error connectiong to MongoDB', error)
  }
}

module.exports = connectToDatabase