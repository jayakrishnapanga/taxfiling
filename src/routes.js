// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import UserInterface from './UserInterface';
// import Login from './Login';

// const Routes = () => {
//   return (
//     <Switch>
//       {/* <Route exact path="/" component={Login} /> */}
//       <Route path="/user-interface" component={UserInterface} />
//     </Switch>
//   );
// };

// export default Routes;



import React from 'react';
import { Route} from 'react-router-dom';
import HomePage from './components/homepage';
import UserInterface from './components/userinterface';
import RegistrationForm from './components/registration';
import ITR from './components/ITR';
import Submissions from './components/submissions';

const Routes = () => {
  return (
    <Routes>
      <Route exact path="/" component={HomePage} />
      <Route path="/signUp" component={RegistrationForm} />
      <Route path="/user" component={UserInterface} />
      <Route path="/user/itr" component={ITR} />
      <Route path="/submissions" component={Submissions}/>
      </Routes>
  );
};

export default Routes;
