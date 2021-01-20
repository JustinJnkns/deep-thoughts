import React from 'react';
// provides data to all the other components
import {ApolloProvider} from '@apollo/react-hooks'
// gets data when its ready to be used
import ApolloClient from 'apollo-boost'
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
// establishes new connection to graghQL server using apollo
const client = new ApolloClient({
  // uniform resource identifier
  uri:'/graphql'
})

function App() {
  return (
<ApolloProvider client={client}>
    <div className='flex-column justify-flex-start min-100-vh'>
      <Header />
      <div className='container'>
        <Home />
      </div>
      <Footer />
    </div>

  </ApolloProvider>
  );
}

export default App;
