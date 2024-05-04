import {Button, Container, Navbar, Modal, NavbarBrand} from 'react-bootstrap';
import {useState} from 'react';
//this creates navbar for the shopping cart layout
function NavbarComponent(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
            <Navbar expand="sn">
                <Navbar.Brand href='/'>My Store
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className='justify-content-end'>
                    <Button onClick={handleShow}> Cart 0 Items</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h1>This is the modal body</h1>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default NavbarComponent