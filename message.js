import { Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { mailaction } from "../store/mailitemslice"

const Message = (props) => {
    const dispatch = useDispatch()
    const deletehandler = (val) => {
        dispatch(mailaction.delmailitem(val))
        dispatch(mailaction.deleteitem(val))
    }
    const closehandler = (val) => {
        dispatch(mailaction.delmailitem(val))
    }
    return (
        <Card>
            <Card.Title>Text Message</Card.Title>
            <Card.Body>
                <div>from:{props.item.user_id}</div>
                <div>{ props.item.subject}</div>
                <div>{props.item.text }</div>
            </Card.Body>
            <Button onClick={closehandler.bind(null,props.item)}>Close</Button>
            <Button onClick={deletehandler.bind(null,props.item)}>Delete</Button>
        </Card>
    )
}

export default Message