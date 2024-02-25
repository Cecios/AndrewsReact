import MyNavbar from "../navbar/MyNavbar";
import React from "react";

const MainLayout = ({children}) =>{

    return(    
    <>
        <MyNavbar/>
        {children}
        <MyNavbar/>
    </>
    )
}
export default MainLayout;