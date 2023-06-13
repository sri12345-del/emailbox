import { Button, Card } from "react-bootstrap"

const Message = (props) => {
    return (
        <Card>
            <Card.Title>Text Message</Card.Title>
            <Card.Body>
                <div>from:{props.item.user_id}</div>
                <div>{ props.item.subject}</div>
                <div>{props.item.text }</div>
            </Card.Body>
            <Button onClick={props.close}>Close</Button>
        </Card>
    )
}

export default Message