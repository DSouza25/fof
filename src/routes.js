import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import Login from "./components/Login";


export default function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Login/>}/>
                <Route path="/dashboard"  element={<Dashboard/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    );
}