import React from "react";
import AllTheBooks from "../allTheBooks/AllTheBooks.jsx";
import CommentArea from "../commentArea/CommentArea.jsx";
import { Container,Row, Col } from "react-bootstrap";
const Main = ()=> {
   
    return(
        <>
        <Container>
            <Row style={{display:'flex'}}>
                <Col
                    style={{width:'70%'}}>
                    <AllTheBooks/>
                </Col>
                <Col
                    style={{width:'30%'}}>
                    <CommentArea/>
                </Col>
            </Row>
        </Container>
        </>
    )
    
}

export default Main;