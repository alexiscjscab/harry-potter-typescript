import React from 'react';
import Home from './pages/Home';

interface Props {
  title?: string
}

const App = (props: Props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <Home />
    </div>
  );
};

export default App;
