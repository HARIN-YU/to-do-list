import React from 'react';
import GlobalStyles from './GlobalStyle';
import Layout from './components/Layout';
import Todo from './components/Todo';

function App() {
  return (
    <>
    <GlobalStyles />
    <Layout>
        <Todo />
    </Layout>
      {/* TODO: Layout안에 구현하기 */}
    </>
  );
}

export default App;
