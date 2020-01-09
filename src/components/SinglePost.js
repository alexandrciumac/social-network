import React from 'react';
import Card from 'react-bootstrap/Card';

const SinglePost = props => {
  return (
    <Card>
      <Card.Header>{props.name} / <a className="font-weight-bold">{props.date} /</a> {props.likes} ♥</Card.Header>
      <Card.Body>
          <blockquote className="blockquote mb-0">
          <p>
          {props.message} 
          </p>
          </blockquote>
      </Card.Body>
    </Card>
  );
}

export default SinglePost;
