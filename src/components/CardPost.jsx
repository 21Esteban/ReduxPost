import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { deletepost } from "../Redux/postSlice";

export const CardPost = (props) => {
  return (
    <Card
      style={{
        width: "18rem",
        marginTop: "2rem",
      }}
    >
      <Card.Img variant="top" src={props.post.img} />
      <Card.Body>
        <Card.Title>{props.post.title}</Card.Title>
        <Card.Text>{props.post.description}</Card.Text>
        <div className="d-flex justify-content-around">
          <Button
            variant="danger"
            onClick={() => props.dispatch(deletepost(props.post.id))}
          >
            Delete
          </Button>
          <Button variant="warning" onClick={() => props.ClickUpdate(props.post)}>
            Edit
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};
