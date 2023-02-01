import React from "react";

function Footer() {

    const currentYear = new Date().getFullYear();
    return ( 
    <Footer>
        <p>Copyright © {currentYear}</p>
    </Footer>
    );
}

export default Footer;