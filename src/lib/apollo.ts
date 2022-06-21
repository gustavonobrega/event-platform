import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ofnr8y03d801z4hvj1f6wu/master',
  cache: new InMemoryCache()
})