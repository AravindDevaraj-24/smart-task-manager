import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Tasks from "./pages/Tasks/Tasks";
import Layout from "./components/layout/Layout";
import CreateTask from "./pages/CreateTask/CreateTask";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />

          <Route path="/tasks" element={<Tasks/>} />

          <Route path="/create-task" element={<CreateTask/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;