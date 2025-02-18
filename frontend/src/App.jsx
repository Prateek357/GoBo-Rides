import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Importing the Home component
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import CaptainLogin from './pages/CaptainLogin';
import CaptainSignup from './pages/CaptainSignup';
import UserLogout from './pages/UserLogout';
import UserProtectWrapper from './pages/UserProtectWrapper';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectWrapper from './pages/CaptainProtectWrapper';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/signup" element={<UserSignup />} />
          <Route path="/captain-login" element={<CaptainLogin />} />
          <Route path="/captain-signup" element={<CaptainSignup />} />
          <Route path="/home" element={<UserProtectWrapper><Home /></UserProtectWrapper>} />
          <Route path="/captain-home" element={<CaptainProtectWrapper><CaptainHome /></CaptainProtectWrapper>}></Route>
          <Route path="/user-logout" element={<UserProtectWrapper><UserLogout /></UserProtectWrapper>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
