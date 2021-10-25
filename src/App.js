import { HashRouter as Router, Route, Switch } from "react-router-dom";

import "antd/dist/antd.css";
import TableList from "./components/Table/TableList";
import Header from "./components/Header";
import Create from "./components/CreateForm/Create";
import Edit from "./components/EditForm/Edit";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={TableList} />
            <Route path="/create" component={Create} />
            <Route path="/edit/:slug" component={Edit} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
