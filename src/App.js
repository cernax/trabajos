import React, {useState} from 'react';
import './App.css';
import GrillaFactura from './components/GvMantenedor/GrillaFactura';
import Navbar from "react-bootstrap/Navbar";
import { IconContext } from "react-icons";
import { GrAmazon } from 'react-icons/gr';
import { FaRegFileWord } from 'react-icons/fa';
import { FaRegFilePdf } from 'react-icons/fa';
import {Button} from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


const friendOptions = [
    {
        key: 'Jenny Hess',
        text: 'Jenny Hess',
        value: 'Jenny Hess',
        image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
        key: 'Elliot Fu',
        text: 'Elliot Fu',
        value: 'Elliot Fu',
        image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
        key: 'Stevie Feliciano',
        text: 'Stevie Feliciano',
        value: 'Stevie Feliciano',
        image: { avatar: true, src: '/images/avatar/small/stevie.jpg' },
    },
    {
        key: 'Christian',
        text: 'Christian',
        value: 'Christian',
        image: { avatar: true, src: '/images/avatar/small/christian.jpg' },
    },
    {
        key: 'Matt',
        text: 'Matt',
        value: 'Matt',
        image: { avatar: true, src: '/images/avatar/small/matt.jpg' },
    },
    {
        key: 'Justen Kitsune',
        text: 'Justen Kitsune',
        value: 'Justen Kitsune',
        image: { avatar: true, src: '/images/avatar/small/justen.jpg' },
    },
]

function App() {

    const [show, setShow] = useState(false);
    const [showcli, setshowcli] = useState(false);
    const [showProd, setshowProd] = useState(false);
    const [showProv, setshowPrv] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClosecli = () => setshowcli(false);
    const handleShowcli = () => setshowcli(true);

    const handleCloseProd = () => setshowProd(false);
    const handleShowProd = () => setshowProd(true);

    const handleCloseProv = () => setshowPrv(false);
    const handleShowProv = () => setshowPrv(true);

    return (
    <div className="App">
      <div>
          <Navbar bg="dark" variant="dark">
              <Navbar.Brand href="#home">
                  <IconContext.Provider value={{ color: "white", size: "2em" }}>
                      <div>
                          <GrAmazon />{'  '}{'Amazon Retail'}
                      </div>
                  </IconContext.Provider>
              </Navbar.Brand>
              <div style={{width:"100%", textAlign: "right"}}>
                  <Button variant="success" onClick={handleShow}>Agregar Factura</Button>{' '}
              </div>
          </Navbar>
      </div>
      <body>
      <div style={{ height: "100%"}}>
          <div style={{padding: "10px"}} >
              <GrillaFactura />
          </div>
      </div>
      <div style={{padding: "20px"}} className="row">
          <IconContext.Provider value={{size: "2em", color:"red" }}>
              <div>
                  <FaRegFilePdf />
              </div>
          </IconContext.Provider>
          <IconContext.Provider value={{size: "2em", color:"blue" }}>
              <div>
                  <FaRegFileWord />
              </div>
          </IconContext.Provider>
      </div>
      </body>
        <Modal show={show} onHide={handleClose}  size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Ingreso de Facturas</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={'row'}>
                    <table>
                        <tr>
                            <td>
                                <span>Cliente:</span>
                            </td>
                            <td>
                                <div className={'row'}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{marginLeft: "5px"}}>
                                            (Seleccione)
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {
                                                friendOptions.map( val => {
                                                    return <><Dropdown.Item as="div" onClick={console.log(val.value)}>{val.value}</Dropdown.Item></>
                                                })
                                            }
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <button type="button" className="btn btn-success" style={{marginLeft: "5px"}} onClick={handleShowcli}>+</button>
                                </div>
                            </td>
                            <td>
                                <span>Producto:</span>
                            </td>
                            <td>
                                <div className={'row'}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            (Seleccione)
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {
                                                friendOptions.map( val => {
                                                    return <><Dropdown.Item as="div" onClick={console.log(val.value)}>{val.value}</Dropdown.Item></>
                                                })
                                            }
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <button type="button" className="btn btn-success" style={{marginLeft: "5px"}}  onClick={handleShowProd}>+</button>
                                </div>
                            </td>
                            <td>
                                <span>Proveedor:</span>
                            </td>
                            <td>
                                <div className={'row'}>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            (Seleccione)
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {
                                                friendOptions.map( val => {
                                                    return <><Dropdown.Item as="div" onClick={console.log(val.value)}>{val.value}</Dropdown.Item></>
                                                })
                                            }
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <button type="button" className="btn btn-success" style={{marginLeft: "5px"}}  onClick={handleShowProv}>+</button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span>Monto:</span>
                            </td>
                            <td>
                                <input/>
                            </td>
                            <td>
                                <span>Fec Vto.:</span>
                            </td>
                            <td>
                                <input/>
                            </td>
                            <td>
                                <span>IVA:</span>
                            </td>
                            <td>
                                <input width="10%" />
                            </td>
                        </tr>
                    </table>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
        <Modal show={showcli} onHide={handleClosecli}  size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Ingreso de Clientes</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={'row'}>
                    <table>
                        <tr>
                            <td>
                                <span>Rut:</span>
                            </td>
                            <td>
                                <input/>
                            </td>
                            <td>
                                <span>Razon Social:</span>
                            </td>
                            <td>
                                <input/>
                            </td>
                            <td>
                                <span>Fec. Nacimiento:</span>
                            </td>
                            <td>
                                <input width="10%" />
                            </td>
                        </tr>
                    </table>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClosecli}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
        <Modal show={showProd} onHide={handleCloseProd}  size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Ingreso de Productos</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={'row'}>
                    <table>
                        <tr>
                            <td>
                                <span>Cod. Prod:</span>
                            </td>
                            <td>
                                <input/>
                            </td>
                            <td>
                                <span>Precio:</span>
                            </td>
                            <td>
                                <input/>
                            </td>
                            <td>
                                <span>Nombre:</span>
                            </td>
                            <td>
                                <input/>
                            </td>
                            <td>
                                <span>Cod. Prov.:</span>
                            </td>
                            <td>
                                <input width="10%" />
                            </td>
                        </tr>
                    </table>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleCloseProd}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
        <Modal show={showProv} onHide={handleCloseProv}  size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Ingreso de Proveedor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className={'row'}>
                    <table>
                        <tr>
                            <td>
                                <span>Cod. Proveedor:</span>
                            </td>
                            <td>
                                <input/>
                            </td>
                            <td>
                                <span>Nom. Proveedor:</span>
                            </td>
                            <td>
                                <input/>
                            </td>
                        </tr>
                    </table>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleCloseProv}>
                    Guardar
                </Button>
            </Modal.Footer>
        </Modal>
    </div>

  );
}

export default App;
