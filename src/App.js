import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import UserLanding from "./components/UserLanding";
import AdminLanding from "./components/AdminLanding";
import NotFound from "./components/NotFound";
import SearchLanding from "./components/SearchLanding";
import AddBooks from "./components/AddBooks";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <Landing />
          </Route>
          <Route path='/user'>
            <UserLanding />
          </Route>
          <Route path='/admin'>
            <AdminLanding />
          </Route>
          <Route path='/search/:usertype'>
            <SearchLanding />
          </Route>
          <Route path='/add'>
            <AddBooks />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
