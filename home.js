import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authaction } from "../store/authslice";
import Inbox from "../components/inbox";
import EmailCompose from "../Compose";
import { useState } from "react";
import { mailaction } from "../store/mailitemslice";
import { sentMailAction } from "../store/sentMailslice";

const Home = () => {
  const dispatch=useDispatch()
  const unread = useSelector((state) => state.mail.unreadmsg);
  const [inbox, setinbox] = useState(false);
  const [compose, setcompose] = useState(false);
  const [sent, setsent] = useState(false)
  
  const item = useSelector(state => state.mail.data)
  const sentitem=useSelector(state=>state.sentmail.item)

  const inboxhandler = () => {
    setcompose(false);
    setsent(false)
    setinbox(true);
  };
  const composehandler = () => {
    setinbox(false);
    setsent(false)
    setcompose(true);
  };
  const sentinboxhandler = () => {
    setinbox(false)
    setcompose(false)
    setsent(true)
  }
  const opensentmail = (val) => {
    dispatch(sentMailAction.readsent(val))
  }
  const openinboxmail = (val) => {
    dispatch(mailaction.readdata(val))
    dispatch(mailaction.mailitem(val))
  }

  return (
    <div>
      <Container>
        <Row>
          <Col sm={2}>
            <Button onClick={composehandler} style={{ marginTop: "1rem" }}>
              Compose
            </Button>
            <Button
              onClick={inboxhandler}
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>Inbox-  </div>
              <div>{unread}</div>
            </Button>
            <Button style={{ marginTop: "1rem" }} onClick={sentinboxhandler}>
              Sent--
            </Button>
          </Col>
          <Col sm={10}>
            {inbox && <Inbox item={ item} open={openinboxmail}></Inbox>}
            {sent && <Inbox item={sentitem} open={opensentmail}></Inbox>}
            {compose && <EmailCompose></EmailCompose>}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
