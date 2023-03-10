import React from 'react';
import Layout from './pages/Layout';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouters from './AppRouters';

function App() {
  return (
    <Router>
      <Layout>
        <AppRouters />
      </Layout>
    </Router>
  );
}

export default App;
