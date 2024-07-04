import React from 'react';
import Message from './components/Message';
import Comments from './components/comments';

function App() {
  return (
    <div>
      <Message text="Hello, World!" />
      <Comments />
    </div>
  );
}

export default App;
