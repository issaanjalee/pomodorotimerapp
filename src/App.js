import React from 'react';
import Timer from './components/Timer';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="app">
      <h1>Pomodoro Timer</h1>
      <Timer />
      <TaskList />
    </div>
  );
}

export default App;
