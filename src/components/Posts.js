import React from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SinglePost from "./SinglePost";

const Posts = () => {

let postsData = [
    {id: 1, name:'Alexandro', date:'December 15', message:'Lorem text', likes:5},
    {id: 2, name:'Alexandro', date:'December 25', message:'Lorem text', likes:17},
    {id: 3, name:'Alexandro', date:'December 28', message:'Lorem text', likes:25}
]

let postElements = postsData.map(p => <SinglePost id={p.id} name={p.name} date={p.date} message={p.message} likes={p.likes} />)

    return (
        <div>
            <Form>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><h2>My Posts</h2></Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <br></br>
            {postElements}
        </div>
    );
}

export default Posts;