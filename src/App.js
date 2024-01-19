import {TodoList} from './TodoList';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
	<div className="App">
      	<header className="App-header">
        <h1>Meine Todo-Liste</h1>
        <TodoList />
      </header>
    </div>
  );

}

export default App;
