import React, { useState } from "react";
import BarraSuperior from "./BarraSuperior";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from "react-bootstrap";

export const ProfesoresAgregar = () => {

    const initialState = {
        clave: '',
        nombres: '',
        apellidos: '',
        fnacimiento: '',
        email: '',
        sexo: '',
        estadocivil: '',
        tcasa: '',
        curp: '',
        tcelular: '',
        calle: '',
        colonia: '',
        cp: '',
        municipio: '',
        estado: '',
        estatus: ''
    }

    const [datos,setDatos] = useState(initialState)

    const {clave,nombres,apellidos,fnacimiento,email,sexo,estadocivil,tcasa,curp,tcelular,calle,colonia,cp,municipio,estado}=datos /*estatus */

    const handleChange = (e) => {
        let{name,value} = e.target
        setDatos({...datos, [name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return (
        <>
            <BarraSuperior></BarraSuperior>

            <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="formClave">
                                <Form.Label>Clave:</Form.Label>
                                <Form.Control name="clave" type="text" value={clave} onChange={handleChange} placeholder="Ingresa tu clave" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formNombres">
                                <Form.Label>Nombres:</Form.Label>
                                <Form.Control name="nombres" type="text" value={nombres} onChange={handleChange} placeholder="Ingresa tus nombres" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formApellidos">
                                <Form.Label>Apellidos:</Form.Label>
                                <Form.Control name="apellidos" type="text" value={apellidos} onChange={handleChange} placeholder="Ingresa tus apellidos" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formfNacimiento">
                                <Form.Label>Fecha de Nacimiento:</Form.Label>
                                <Form.Control name="fnacimiento" type="date" value={fnacimiento} onChange={handleChange} placeholder="Ingresa tu fecha de nacimiento" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email:</Form.Label>
                                <Form.Control name="email" type="email" value={email} onChange={handleChange} placeholder="Ingresa tu email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formSexo">
                                <Form.Label>Sexo:</Form.Label>
                                <Form.Control name="sexo" type="text" value={sexo} onChange={handleChange} placeholder="Ingresa tu sexo" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEstadoCivil">
                                <Form.Label>Estado Civil:</Form.Label>
                                <Form.Control name="estadocivil" type="text" value={estadocivil} onChange={handleChange} placeholder="Ingresa tu estado civil" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formtCasa">
                                <Form.Label>Telefono de Casa:</Form.Label>
                                <Form.Control 
                                name="tcasa" 
                                type="text" 
                                pattern='[(][0-9]{3}[)][0-9]{7}'
                                value={tcasa} onChange={handleChange}
                                placeholder="Ingresa tu telefono de casa" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formCurp">
                                <Form.Label>CURP:</Form.Label>
                                <Form.Control 
                                name="curp"
                                pattern='^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$'
                                value={curp} onChange={handleChange}
                                type="text" placeholder="Ingresa tu curp" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formtCelular">
                                <Form.Label>Telefono Movil:</Form.Label>
                                <Form.Control 
                                name="tcelular" 
                                type="tel" 
                                pattern='[(][0-9]{3}[)[0-9]{7}'
                                value={tcelular} onChange={handleChange}
                                placeholder="Ingresa tu telefono movil" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formCalle">
                                <Form.Label>Calle:</Form.Label>
                                <Form.Control name="calle" type="text" value={calle} onChange={handleChange} placeholder="Ingresa tu calle" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formColonia">
                                <Form.Label>Colonia:</Form.Label>
                                <Form.Control name="colonia" type="text" value={colonia} onChange={handleChange} placeholder="Ingresa tu colonia" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formcp">
                                <Form.Label>Codigo Postal:</Form.Label>
                                <Form.Control 
                                name="cp" 
                                type="text" 
                                pattern="[0-9]{5}"
                                value={cp} onChange={handleChange}
                                placeholder="Ingresa tu codigo postal" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formMunicipio">
                                <Form.Label>Municipio:</Form.Label>
                                <Form.Control name="municipio" type="text" value={municipio} onChange={handleChange} placeholder="Ingresa tu municipio" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEstado">
                                <Form.Label>Estado:</Form.Label>
                                <Form.Control name="estado" type="text" value={estado} onChange={handleChange} placeholder="Ingresa tu estado" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <h1>Holis ^u^</h1>

            <div><img alt="Gato Danzando" src="https://media.tenor.com/xDrQhyJ33IAAAAAM/cat-dancing.gif"></img></div>


        </>
    )
}
export default ProfesoresAgregar