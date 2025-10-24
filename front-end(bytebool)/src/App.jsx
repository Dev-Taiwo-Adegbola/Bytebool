import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import BootCamp_Home from "./Pages/BootCamp_Home";
import BootCamp_Registration from "./Pages/BootCamp_Registration";
import Header from "./Components/Header";
import SuccessPage from "./Components/SuccessPage";


function App() {
  const [count, setCount] = useState(0);
  const [registeredUser, setRegisteredUser] = useState('');

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<BootCamp_Home />} />
          <Route path="/register-for-bootcamp" element={<BootCamp_Registration onSetUser = {setRegisteredUser} />} />
          <Route path="/registration-successful" element={<SuccessPage User = {registeredUser} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
