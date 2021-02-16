const {ApolloServer, gql } = require('apollo-server');
const fs = require('fs')
let comicsDatabase = {}

fs.readFile('./comicData.json', 'utf8', (err, data) => {
    if(err) {
        console.log(`error fetching data ==> ${err}`)
    }
    comicsDatabase = JSON.parse(data);
})

const typeDefs = gql`
    type Urls { 
        type: String 
        url: String 
    }

    type Events { 
        available: Int
        collectionURI: String
        returned: Int
        items: [Items ] 
    }

    type Items { 
        resourceURI: String 
        name: String 
        type: String 
    }

    type Stories { 
        available: Int
        collectionURI: String
        returned: Int
        items: [Items ] 
    }

    type Series { 
        available: Int
        collectionURI: String
        returned: Int
        items: [Items ] 
    }

    type Comics { 
        available: Int
        collectionURI: String
        returned: Int
        items: [Items ] 
    }

    type Thumbnail { 
        path: String 
        extension: String 
    }

    type Result { 
        id: Int
        name: String
        description: String
        modified: String
        resourceURI: String
        urls: [Urls ]
        events: Events
        stories: Stories
        series: Series
        comics: Comics
        thumbnail: Thumbnail 
    }

    type Query {
        results: [Result] 
    }


`;

const resolvers = {
    Query: {
        results: () => { 
            return comicsDatabase.data.results;
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers})

server.listen().then(({ url }) => {
    console.log(`Server us up and running at ${url}`)
});