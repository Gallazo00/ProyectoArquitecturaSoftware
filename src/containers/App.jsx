import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Login from "../pages/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;