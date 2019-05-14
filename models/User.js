const { Schema } = require('mongoose')

const userSchema = new Schema({
  name: String,
  surname: String,
  company: String,
  mail: String
})