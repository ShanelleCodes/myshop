import {Button, Container, Navbar, Modal, NavbarBrand} from 'react-bootstrap';
//this creates navbar for the shopping cart layout
function NavbarComponent(){
    return(
        <Navbar expand="sn">
            <Navbar.Brand href='/'>My Store
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='justify-content-end'>
                <Button> Cart 0 Items</Button>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavbarComponent