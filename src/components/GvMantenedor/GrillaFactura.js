import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const GrillaFactura = () =>{
    return (
    <>
        <table className="table table-dark">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Descripcion</th>
                <th scope="col">Producto</th>
                <th scope="col">Monto</th>
                <th scope="col">Fecha Vto.</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>descript</td>
                <td>Pord 1</td>
                <td>1.000</td>
                <td>dd/MM/yy</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>descript</td>
                <td>Pord 1</td>
                <td>1.000</td>
                <td>dd/MM/yy</td>
            </tr>
            <tr>
                <th scope="row">3</th>
                <td>descript</td>
                <td>Pord 1</td>
                <td>1.000</td>
                <td>dd/MM/yy</td>
            </tr>
            </tbody>
        </table>
    </>
    );
};

export default GrillaFactura;
