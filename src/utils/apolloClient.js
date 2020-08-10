import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: process.env.REACT_APP_BACKEND_URL + "/graphql",
});
const client = new ApolloClient({
  cache,
  link,
});

// Connect Strapi with GraphQL to the react frontend.

export default client;
