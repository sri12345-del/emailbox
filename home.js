import { Button, Card, Form, Row } from "react-bootstrap";
import Compose from "../Compose";
import EmailCompose from "../Compose";

const Home = () => {
  return (
    <div>
          <h1>welcome to emailbox</h1>
          <EmailCompose></EmailCompose>
    </div>
  );
};

export default Home;
