import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import PageError from './pages/PageError.jsx'
import HomePage from './pages/HomePage.jsx'
function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route exact path = "/" element={<HomePage/>}></Route>

          <Route path="*" element={<PageError/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
