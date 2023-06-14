import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Card, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import classes from "./inbox.module.css"
import Message from "./message";
import { mailaction } from "../store/mailitemslice";
import { sentMailAction } from "../store/sentMailslice";
const Inbox = (props) => {
    
    const isshow = useSelector(state => state.mail.isshow)
    const sentisshow = useSelector(state => state.sentmail.sentinbox)
    const dispatch=useDispatch()
    const changeinbox = (obj) => {
       props.open(obj)
    }

    const sentclose=() => {
        dispatch(sentMailAction.closeitem())
    }
    const deletesent = (sentisshow) => {
      dispatch(sentMailAction.deletemail(sentisshow))  
    }

    const closehandler = () => {
        dispatch(mailaction.delmailitem())
    }
    
    const deletehandler = (sentisshow) => {
        dispatch(mailaction.deleteitem(sentisshow))
    }
   
    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Subject</th>
                        <th>Text</th>
                    </tr>
                </thead>
                <tbody>
                    {props.item.map((val) => (
                        <tr key={val.id} id={val.id} onClick={changeinbox.bind(null, val)}>
                            <td><div className={val.tic?classes.dot:""}></div></td>
                            <td>{val.user_id}</td>
                            <td>{val.subject}</td>
                            <td>{val.text}</td>
                        </tr>
                    ))}
                </tbody>
                </Table>
            {isshow && <Message item={isshow} close={closehandler} delete={deletehandler}></Message>}   
            {sentisshow && <Message item={sentisshow} close={sentclose} delete={deletesent}></Message>}
    </div>
  );
};

export default Inbox;
