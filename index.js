const {ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
	#API entry point
	type Query {
		teste: String

	}
`

const resolvers = {
	Query:{
		teste(){
			return `teste`
		}
	}

}

const server = new ApolloServer({
	typeDefs,
	resolvers
})

server.listen().then(({ url }) => {

})
