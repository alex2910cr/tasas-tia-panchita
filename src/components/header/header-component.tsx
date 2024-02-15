import "./header-style.css"
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from "react-router-dom"


const Header = () =>{
    return(
        
        <div className="header-container">
              <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                  <Link to={'/'} className="navbar-brand">React-Bootstrap</Link>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Link to={'/testing'} className="nav-link">Testing</Link>
                      <Nav.Link href="#link">Link</Nav.Link>
                      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
        </div>
        
    )
}
export default Header