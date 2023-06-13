import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { authaction } from "../store/authslice";
import Inbox from "./inbox";
import EmailCompose from "../Compose";
import { useState } from "react";

const Home = () => {
  const [inbox, setinbox] = useState(false);
  const [compose, setcompose] = useState(false);

  const inboxhandler = () => {
    setcompose(false);
    setinbox(true);
  };
  const composehandler = () => {
    setinbox(false);
    setcompose(true);
  };

  return (
    <Card style={{ display: "flex", justifyContent: "space-between" }}>
      <Col>
        <Card style={{ marginRight: "90%"}}>
                  <Button onClick={composehandler} style={{ marginTop:"1rem"}}>Compose</Button>
          <Button onClick={inboxhandler} style={{ marginTop:"1rem"}}>Inbox</Button>
        </Card>
        <Card style={{ marginLeft: "15%" ,marginTop:"-3rem"}}>
          {inbox && <Inbox></Inbox>}
          {compose && <EmailCompose></EmailCompose>}
        </Card>
      </Col>
    </Card>
  );
};

export default Home;
