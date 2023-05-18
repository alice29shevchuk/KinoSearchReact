import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Search(props) {
    const [queryTexst, setQueryText] = useState('')
    const emtyText = (text) =>{
        if(text.length == 0){
            props.setIsPopular()
        }
    }
    return (
            <Container>
                <Row style={{display:'flex', justifyContent:'center'}}>
                    <Col sm={4}>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onChange={(e)=> {setQueryText(e.target.value); emtyText(e.target.value)}}
                            />
                            {/* <a onClick={()=>clickHandler()} href='#cardsFromSearch'>Search</a> */}
                            <Button onClick={()=> {props.search(queryTexst); props.setIsPopular(); }}>
                                Search
                                
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
    )
}