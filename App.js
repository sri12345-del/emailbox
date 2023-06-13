import { Route } from "react-router-dom";
import Login from "./pages/auth";
import Layout from "./Layout/layout";
import Home from "./pages/home";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import EmailCompose from "./Compose";
import axios from "axios";
import { mailaction } from "./store/mailitemslice";


function App() {
  const dispatch=useDispatch()
  useEffect(() => {
    const email=localStorage.getItem("email")
    axios.get(`https://react-http-735b2-default-rtdb.firebaseio.com/${email}.json`)
      .then(res => {
        for (let key in res.data) {
          dispatch(mailaction.additem(res.data[key]))
        }
      })
  .catch(err=>console.log(err))
  },[])
 
  return (
    <div>
      <Layout>
        <Route path="/auth">
          <Login></Login>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/compose">
          <EmailCompose></EmailCompose>
        </Route>
      </Layout>
    </div>
  
  );
}

export default App;
