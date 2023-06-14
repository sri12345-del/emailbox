import { Route } from "react-router-dom";
import Login from "./pages/auth";
import Layout from "./Layout/layout";
import Home from "./pages/home";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import EmailCompose from "./Compose";
import axios from "axios";
import { mailaction } from "./store/mailitemslice";
import { sentMailAction } from "./store/sentMailslice";

let inital=true
function App() {
  const dispatch = useDispatch()
  const item=useSelector(state=>state.sentmail)
  useEffect(() => {
    const email=localStorage.getItem("email")
    function fetch() {
      axios.get(`https://react-http-735b2-default-rtdb.firebaseio.com/items.json`)
        .then(res => {
          if (res.data) {
            res.data.map(val=>dispatch(mailaction.addapiitem(val)))
          }
        })
        .catch(err => console.log(err))
    }
    const interval = setInterval(() => {
      fetch()
    }, 2000)
    return (()=>clearInterval(interval))
  }, [])

   useEffect(() => {
        if (inital) {
            inital = false
             return
         }
         const email=localStorage.getItem("email")
       axios.put(`https://react-http-735b2-default-rtdb.firebaseio.com/${email}.json`,JSON.stringify(item.item))
       .then(res=>console.log(res)).catch(err=>console.log(err))
    },[item])
  
  useEffect(() => {
    const email = localStorage.getItem("email")
    axios.get(`https://react-http-735b2-default-rtdb.firebaseio.com/${email}.json`)
      .then(res => {
        if (res.data) {
        res.data.map(val=>dispatch(sentMailAction.addmail(val)))
      }
    }).catch(err=>console.log(err))
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
