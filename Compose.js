import React, { useState } from "react";
import { convertToRaw, ContentState, EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button, Card, Container, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { mailaction } from "./store/mailitemslice";

const EmailCompose = () => {
  const dispatch = useDispatch();
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
    const content = convertToRaw(editorState.getCurrentContent());
      const obj = {
          id:Math.random().toString(),
          user_id: recipient,
          subject: subject,
          text: content.blocks[0].text,
      };
      dispatch(mailaction.additem(obj))
  };

  return (
    <div>
      <Container>
        <Card>
          <label>Recipient:</label>
          <input
            type="text"
            value={recipient}
            onChange={handleRecipientChange}
          />

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
