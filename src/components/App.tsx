import {HashRouter as Router, Route} from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

import { render } from 'react-dom';
import { ApolloProvider } from '@apollo/client';
import { gql } from '@apollo/client';


const client = client.query({
    query: gql`      
      query GetRates {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));


function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
          <Route eact path = "/" components = {Home} />
          <Route eact path = "/:id" components = {Detail} />
        </Router>
    </ApolloProvider>
  
  );
}

export default App;
