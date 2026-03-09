import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Tasks from "./pages/Tasks/Tasks";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Dashboard} />

          <Route path="/tasks" component={Tasks} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;