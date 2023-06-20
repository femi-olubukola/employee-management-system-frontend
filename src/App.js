import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";

function App() {
  return (

      <div>

          <Router>
              <div>

                  <HeaderComponent/>

                  <div className="container">
                      <Switch> http://localhost:3000/
                          <Route path = "/" component = {ListEmployeeComponent}></Route>
                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee" component = {CreateEmployeeComponent}></Route>
                          <ListEmployeeComponent/>
                      </Switch>
                  </div>

                  <FooterComponent/>

              </div>
          </Router>

      </div>
  );
}

export default App;
