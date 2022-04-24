import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import{Navbar,NavbarBrand, NavbarToggler, Collapse,Nav, NavItem, NavLink} from "reactstrap";


const NavbarMenu = () => {
    return (
        <div>
            <Navbar
                color="faded"
                light
            >
                <NavbarBrand
                    className="me-auto"
                    href="/"
                >
                   React Router
                </NavbarBrand>
                <NavbarToggler
                    className="me-2"
                    onClick={function noRefCheck() { }}
                />
                <Collapse navbar>
                    <Nav navbar>
                        <NavItem>
                            
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )
}

export default NavbarMenu