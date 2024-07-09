import React from 'react';
import TemperatureConverter from './components/TemperatureConverter';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <TodoList />
      <TemperatureConverter />
    </div>
  );
}

export default App;
