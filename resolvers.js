const UserModel = require('./user.model')

const resolvers = {
  Query: {
    greetings: () => 'Gretting is Awesome',
    welcome: (_, { name }) => `Hello ${name}`,
    getAllUsers: async () => await UserModel.find(),
    users: async () => await UserModel.find({}),
    user: async (_, { id }) => await UserModel.findById(id)
  },
  Mutation: {
    createUser: async (_, { name, age }) => {
      const newUser = new UserModel({ name, age })
      return await newUser.save()
    },
    updateUser: async (_, { id, name, age}) => await UserModel.findByIdAndUpdate(id, { id, name, age}),
    deleteUser: async (_, { id }) => {
      const deleteUser = await UserModel.findByIdAndDelete(id)
      if (!deleteUser) {
        throw new Error(`User with ID ${id} not found`)
      }
      return deleteUser
    }
  }
}

module.exports = resolvers