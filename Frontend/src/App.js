import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Home from './Home';
import Todo from './todo';
import Todo2 from './Test';
import Weather from './Weather';
import TestBackend from './TestBackend';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/todo2" element={<Todo2 />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="*" element={<Home />} />
          <Route path='/test-backend' element={<TestBackend />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;