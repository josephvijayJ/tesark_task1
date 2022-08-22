import './App.css';
import MasterForm from './pages/MasterForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkcomponent from './components/Checkcomponent';

function App() {
  return (
    <>
      <Router data-testId="check">
        <Routes>
          <Route path="/" element={<MasterForm />} />
          <Route path="/new" element={<Checkcomponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
