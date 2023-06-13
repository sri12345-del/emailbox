import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "./message";
import { mailaction } from "../store/mailitemslice";
const Inbox = () => {
    
    const [isshow, setisshow] = useState("")
    const item = useSelector(state => state.mail.data)
    const dispatch=useDispatch()
    const changehandler = (obj) => {
        setisshow(obj)
       dispatch(mailaction.readdata(obj))
    }
    const closehandler = () => {
        setisshow("")
    }
    return (
        <Card style={{ padding: "0 0.5rem" }}>
            {!isshow && <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Text</th>
                    </tr>
                </thead>
                <tbody>
                    {item.map((val) => (
                        <tr key={val.id} id={val.id} onClick={changehandler.bind(null, val)}>
                            <td style={{ color: val.tic ? "blue" : "" }}>0</td>
                            <td>{val.user_id}</td>
                            <td>{val.subject}</td>
                            <td>{val.text}</td>
                        </tr>
                    ))}
                </tbody>
                </Table>}
            {isshow && <Message item={isshow} close={closehandler}></Message>}
    </Card>
  );
};

export default Inbox;
