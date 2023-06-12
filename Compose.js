import React, { useState } from "react";
import { convertToRaw, ContentState, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button, Card, Container, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { mailaction } from "./store/mailitemslice";

const EmailCompose = () => {

    const dispatch=useDispatch()
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [subject, setSubject] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleEditorChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleRecipientChange = (event) => {
    setRecipient(event.target.value);
  };

  const handleSend = () => {
    // Get the raw content state to send or process it
    const content = convertToRaw(editorState.getCurrentContent());
    console.log("Subject:", subject);
    console.log("Recipient:", recipient);
      console.log("Content:", content.blocks[0].text);
      let obj = {
          id:recipient,
          email: recipient,
          subject: subject,
          content:content.blocks[0].text
      }
      fetch("https://react-http-735b2-default-rtdb.firebaseio.com/message_list.json", {
          method: "POST",
          body: JSON.stringify({
              recipient: recipient,
              subject:subject,
              message:content.blocks[0].text
          })
      }).then(res => {
          if (!res.ok) {
              throw new Error("somthing is wrong")
          } else {
              return res.json()
          }
      }).then(data => {
          console.log(data)
      }).catch(err=>console.log(err.message))
      dispatch(mailaction.additem(obj))

      
  };

  return (
    <div>
          <Container>
              <Card>
        <label>Recipient:</label>
        <input type="text" value={recipient} onChange={handleRecipientChange} />

        <label>Subject:</label>
        <input type="text" value={subject} onChange={handleSubjectChange} />

        <Editor
          editorState={editorState}
                      onEditorStateChange={handleEditorChange}
        />
                  <button onClick={handleSend}>Send</button>
                  </Card>
      </Container>
    </div>
  );
};

export default EmailCompose;
