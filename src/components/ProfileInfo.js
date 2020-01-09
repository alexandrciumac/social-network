import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Posts from "./Posts";


const ProfileInfo = (props) => {



    return (
        <Container className="pt-4">
            <Row>
                <Col sm={4}>
                    <Card style={{ width: '18rem' }} className="shadow">
                        <Card.Img variant="top" src={props.userImage} />
                        <Card.Body>
                            <Card.Title>{props.name}</Card.Title>
                            <Card.Text>
                                Date of Birth: {props.dateOfBirth}<br></br>
                                City: {props.city}<br></br>
                                Education: {props.education}<br></br>
                                Website: {props.website}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={8}>
                    <Posts />
                </Col>
            </Row>
        </Container>
    );
}

export default ProfileInfo;