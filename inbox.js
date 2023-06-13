import { Card, Table } from "react-bootstrap";
import { useSelector } from "react-redux";

const Inbox = () => {
    const item = useSelector((state) => state.mail.data);
  
  return (
      <Card>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {item.map((val) => (
              <tr key={val.id} id={val.id}>
              <td>{val.user_id}</td>
              <td>{val.subject}</td>
              <td>{val.text}</td>
            </tr>
          ))}
        </tbody>
              </Table>
    </Card>
  );
};

export default Inbox;
