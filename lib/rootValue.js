const UserModel = require('./UserModel')
const users = []
users.push(new UserModel({
  name: 'Username',
  surname: 'Surname',
  company: 'Company',
  mail: 'mail@mail.com'
}))

module.exports = {
  user: ({ id }) => {
    return users.find(x => x.id === id)
  },
  createUser: ({ input }) => {
    const newuser = new UserModel(input)
    users.push(newuser)
    return newuser
  },
  users: () => {
    return users
  }
}
