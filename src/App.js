import TodoList from './components/TodoList.js';
import Purposes from './components/Purposes.js';
import Footer from './components/Footer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo App</h1>
      </header>

      <main>
        <TodoList />
        <Purposes />
      </main>
      <footer>
        <Footer color="green">All rights reserved &copy;</Footer>
      </footer>
    </div>
  );
}

export default App;
