import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Veiculos from './components/Veiculos';
import '@coreui/coreui/dist/css/coreui.min.css';
import Financas from "./components/Financas";
import Calendario from "./components/Calendario";
import { mockAlugueis } from './data/mockAlugueis';
import Registro from "./components/registro/Registro";


function App() {
    const mainContentStyle = {
        marginLeft: '250px',
        padding: '1rem',
    };

    return (
        <Router>
            <div className="App">
                <Sidebar />
                <div style={mainContentStyle}>
                    <Routes>
                        <Route path="/veiculos" element={<Veiculos />} />
                        <Route path="/financas" element={<Financas />} />
                        <Route path="/calendario" element={<Calendario alugueis={mockAlugueis} />} />
                        <Route path="/registro" element={<Registro />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
