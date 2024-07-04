import React from 'react';
import Message from './components/Message';
import CommentsList from './components/comments';

function App() {
  return (
    <div>
      <Message text="Hello, World!" />
      <CommentsList />
    </div>
  );
}

export default App;
