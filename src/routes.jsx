import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './contexts/MyContext';
import Home from "./pages/Home";
import Book from "./pages/Book";


export default function MyRoutes() {
    return (
        <ContextProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Book" element={<Book />} />
            </Routes>
        </ContextProvider>
    );
}