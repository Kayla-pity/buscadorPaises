import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from './components/Navbar';
import styles from './App.module.css';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';
import Favorite from './pages/Favorite';


function App() {
    return (
        <Router>
            <Navbar />
            <div className='container'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pais/:code" element={<CountryDetails />} />
                    <Route path="/favoritos" element={<Favorite />} />
                </Routes>


            </div>

        </Router>
    );
}
    export default App;