import { Button, Card } from "react-bootstrap";


const Message = (props) => {
  
  return (
    <div>
      <Card>
        <Card.Title><div>Text Message</div></Card.Title>
        <Card.Body>
          <div>from:{props.item.user_id}</div>
          <div>{props.item.subject}</div>
          <div>{props.item.text}</div>
        </Card.Body>
        <Button onClick={props.close}>Close</Button>
        <Button onClick={props.delete}>Delete</Button>
      </Card>
    </div>
  );
};

export default Message;
