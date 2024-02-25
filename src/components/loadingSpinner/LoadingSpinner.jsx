import { Container, Row, Col } from "react-bootstrap";
import React from "react";
const LoadingSpinner = () => {
    
    return (
        <>
        <Container>
            <Row>
                <Col>
                    <div className="spinner-border text-info" role="status">
                        <span className="visually-hidden">Loading</span>
                    </div>         
                </Col>
            </Row>
        </Container>
        </>
    )
}
export default LoadingSpinner;