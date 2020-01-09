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
            <SinglePost id={postsData[0].id} name={postsData[0].name} date={postsData[0].date} message={postsData[0].message} likes={postsData[0].likes} />
            <SinglePost id={postsData[1].id} name={postsData[1].name} date={postsData[1].date} message={postsData[1].message} likes={postsData[1].likes} />
            <SinglePost id={postsData[2].id} name={postsData[2].name} date={postsData[2].date} message={postsData[2].message} likes={postsData[2].likes} />

        </div>
    );
}

export default Posts;