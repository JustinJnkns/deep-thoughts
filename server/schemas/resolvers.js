const {User,Thought} =require('../models')
const resolvers = {
    Query:{
        // Methods are named after the query or mutation they are resolvers for
        users: async () => {
            return User.find()
              .select('-__v -password')
              .populate('friends')
              .populate('thoughts');
          },
          // get a user by username
          user: async (parent, { username }) => {
            return User.findOne({ username })
              .select('-__v -password')
              .populate('friends')
              .populate('thoughts');
          },    
        thoughts: async(parent,{username}) =>{
                // checks if username exists, if so params turns into a object with the username key set to username value
                const params = username ? {username} :{}
            return Thought.find(params).sort({createdAt:-1})
            },
            thought: async (parent, { _id }) => {
                return Thought.findOne({ _id });
            }
        }
    }
module.exports = resolvers