
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/UI/appRouter/AppRouter";
import { Navbar } from "./components/UI/navbar/Navbar";
import { AuthContext } from "./context";
import { useState } from "react";

import './styles/App.css';


function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }} >
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>


  )
}

export default App;
