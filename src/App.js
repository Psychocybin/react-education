// import TodoList from './components/TodoList.js';
// import Purposes from './components/Purposes.js';
// import Counter from './components/Counter.js';
// import ArrayNumbers from './components/ArrayNumbers';
import Footer from './components/Footer.js';
import TodoList2 from './components/TodoList2.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo App</h1>
      </header>

      <main>
        {/* <ArrayNumbers />
        <TodoList />
        <Purposes />
        <Counter /> */}
        <TodoList2 />
      </main>
      <footer>
        <Footer color="green">All rights reserved &copy;</Footer>
      </footer>
    </div>
  );
}

export default App;
