import React from "react";
import Container from 'react-bootstrap/Container';
import Logo from "../logo/Logo.jsx";
import Links from "../links/Links";

const MyNavbar = () => {
    return(
        <>
            <Container className="d-flex align-items-center justify-content-between">
                <Logo
                    classe = 'logo'
                />
                <Links/>
            </Container>
        </>
    )
}

export default MyNavbar;