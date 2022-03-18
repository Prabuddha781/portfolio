import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Tech from './pages/Tech';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    < BrowserRouter >
        <main className="bg-dark h-100 text-light">
            < NavBar />
            <Routes>
                <Route path="/" element={ <Home /> } />
                <Route path="/tech" element={ < Tech /> } />
            </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
