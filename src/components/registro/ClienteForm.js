import React, { useState } from 'react';
import {
    CForm,
    CInputGroup,
    CInputGroupText,
    CFormInput,
    CButton,
    CRow,
    CCol,
    CCard,
    CCardHeader,
    CCardBody
} from '@coreui/react';
import axios from "axios";

const InputGroup = ({ name, placeholder, value, onChange, type = 'text' }) => (
    <CInputGroup className="mb-3">
        <CInputGroupText>{placeholder}</CInputGroupText>
        <CFormInput type={type} placeholder={placeholder} name={name} value={value} onChange={onChange} />
    </CInputGroup>
);

const ClienteForm = () => {
    const [cliente, setCliente] = useState({
        clienteNome: '',
        cpfCnpj: '',
        endereco: '',
        telefone: '',
        email: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setCliente(prevCliente => ({
            ...prevCliente,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (const key in cliente) {
            formData.append(key, cliente[key]);
        }

        try {
            const response = await axios.post('http://localhost:8080/clientes', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            return response
        } catch (error) {
            console.error("Erro ao enviar cliente:", error);
            alert('Falha ao cadastrar cliente.');
        }
    };



    return (
        <CCard>
            <CCardHeader>
                <h1>Cadastro de Clientes</h1>
            </CCardHeader>
            <CCardBody>
                <CForm onSubmit={handleSubmit}>
                    <CRow>
                        <CCol xs={12} md={6}>
                            <InputGroup name="clienteNome" placeholder="Nome Completo" value={cliente.clienteNome} onChange={handleChange} />
                        </CCol>
                        <CCol xs={12} md={6}>
                            <InputGroup name="cpfCnpj" placeholder="CPF/CNPJ" value={cliente.cpfCnpj} onChange={handleChange} />
                        </CCol>
                        <CCol xs={12} md={6}>
                            <InputGroup name="endereco" placeholder="Endereço" value={cliente.endereco} onChange={handleChange} />
                        </CCol>
                        <CCol xs={12} md={6}>
                            <InputGroup name="telefone" placeholder="Telefone" value={cliente.telefone} onChange={handleChange} />
                        </CCol>
                        <CCol xs={12} md={6}>
                            <InputGroup name="email" placeholder="Email" value={cliente.email} onChange={handleChange} type="email" />
                        </CCol>
                        <CCol xs={12}>
                            <CButton type="submit" color="primary" className="mt-3">Cadastrar Cliente</CButton>
                        </CCol>
                    </CRow>
                </CForm>
            </CCardBody>
        </CCard>
    );
};

export default ClienteForm;
