import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <h1>Dashboard</h1>
          <Dashboard />
        </Route>

        <Route path="/tasks">
          <h1>Tasks Page</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;