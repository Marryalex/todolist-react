import logo from './logo.svg';
import './App.css';
import FormToDo from './componets/FormToDo/FormToDo';
import ToDo from './componets/ToDo/ToDo';
import ToDoList from './componets/ToDoList/ToDoList';

let x = (1 && 2 && 4) ?? 3;;
console.log(x);

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <ToDoList />
    </div>
  );
}

export default App;
