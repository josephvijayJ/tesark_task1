import './App.css';
import MasterForm from './pages/MasterForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MasterForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
