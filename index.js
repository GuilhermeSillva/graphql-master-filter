const { GraphQLServer } = require('graphql-yoga')
const { importSchema } = require('graphql-import')


const resolvers = {
	Query:{
		teste(){
			return `teste`
		}
	}

}

const server = new GraphQLServer({
	typeDefs: importSchema('./schema/index.graphql'),
	resolvers
})

server.start(() => console.log('Server is running on localhost:4000'))
