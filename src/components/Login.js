import React, {useRef} from 'react'
import { Container, Form, Button  } from 'react-bootstrap'
import { v4 as uuidV4} from 'uuid'; 

export default function Login({onIdSubmit}) {
    const idRef = useRef(); 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        onIdSubmit(idRef.current.value); 

    }
    

    // create new id 
    const createNewNId = () => {
        onIdSubmit(uuidV4()); 
    }

    return (
        <Container className = "align-items-center d-flex " style = {{height:"100vh"}}>
            <Form className= "w-100" onSubmit = {handleSubmit}>
                <Form.Group>
                    <Form.Label>Enter your Id </Form.Label>
                    <Form.Control type = "text" ref = {idRef} required/>
                </Form.Group>
                <Button type = 'submit' className = "mr-2">Login</Button>
                <Button variant = "secondary" onClick = {createNewNId}>Create a new Id</Button>
            </Form>
        </Container>
    )
}
