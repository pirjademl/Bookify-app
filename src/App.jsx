import Header from "./components/Header";
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import Bookgallery from './components/Bookgallery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          {/* <Route path="/search" element={<SearchBook />} /> */}

          <Route path="/top-books" element={< Bookgallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;