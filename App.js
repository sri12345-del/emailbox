import { Route } from "react-router-dom";
import Login from "./pages/auth";
import Layout from "./Layout/layout";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <Layout>
        <Route path="/auth">
          <Login></Login>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
      </Layout>
    </div>
  
  );
}

export default App;
