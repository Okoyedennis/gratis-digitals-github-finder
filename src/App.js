import './App.css';
import PageOne from './pages/PageOne';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import PageTwo from './pages/PageTwo';
import Navbar from './component/Navbar';

function App() {
 
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/"  element={<PageOne />} />
          <Route path="/two" element={<PageTwo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
