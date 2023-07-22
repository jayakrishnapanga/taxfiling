
 import './index.css';


import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';
import HomePage from './components/homepage';


import RegistrationForm from './components/registration';





import '@fortawesome/fontawesome-svg-core/styles.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserInterface from './components/userinterface';
import ITR from './components/ITR';
// import Submissions from './components/submissions';
import Profile from './components/profile';
// import Submissions2 from './components/submission2';
import Success from './components/success';
import UserDetails from './components/urprofile';
import ITRupdate from './components/updateITR';
import Submission from './components/sud';
import Aadhar from './components/aadhar';
import Pancard from './components/pancard';
import Formc from './components/formc';
import Formd from './components/formd';
import Submissiond from './components/sud2';

const Root = () => {
  return (
    <BrowserRouter>
      {/* Your other components and content can be included here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signUp" element={<RegistrationForm />} />
        <Route path="/user" element={<UserInterface />} />
        {/* <Route path="/app" element={<App/>}/> */}
        <Route path="/user/itr" element={<ITR/>}/>
        {/* <Route path="/submissionmain" element={<Submissions/>}/> */}
        <Route path='/profile' element={<Profile/>}/>
        {/* <Route path='/submissionss' element={<Submissions2/>}/> */}
        <Route path="/success" element={<Success/>}/>
        <Route path="/userprofile" element={<UserDetails/>}/>
        <Route path="/updatesubmission" element={<ITRupdate/>}/>
        <Route path="/submission" element={<Submission/>}/>
        <Route path="/adharupdate" element={<Aadhar/>}/>
        <Route path="/pancardupdate" element={<Pancard/>}/>
        <Route path="/formcupdate" element={<Formc/>}/>
        <Route path="/formdupdate" element={<Formd/>}/>
        <Route path="/submissions" element={<Submissiond/>}/>
      </Routes>
    </BrowserRouter>
  );
};

// Render your Root component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
