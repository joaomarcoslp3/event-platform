import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4osdcvm0xa201z49n44gt33/master',
  cache: new InMemoryCache()
})
