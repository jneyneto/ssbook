import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { BrowserRouter } from "react-router-dom";
import './styles.css';
import MyRoutes from './routes';

const client = new ApolloClient({
  uri: "https://us-central1-ss-devops.cloudfunctions.net/GraphQL",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <MyRoutes />
    </BrowserRouter>
  </ApolloProvider>
);
