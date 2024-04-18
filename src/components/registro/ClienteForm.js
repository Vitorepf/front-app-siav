import React, { useState } from 'react';
import {
    CForm,
    CRow,
    CCol,
    CFormInput,
    CButton,
    CInputGroup,
    CInputGroupText
} from '@coreui/react';

const ClienteForm = ({ onSubmit }) => {
    const [cliente, setCliente] = useState({
        nome: '',
        email: '',
        cpf: '',
        rg: '',
        cep: '',
        rua: '',
        numero: '',
        cidade: '',
        foto: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCliente(prevState => ({ ...prevState, [name]: value }));
    };

    const handleImageChange = (e) => {
        setCliente(prevState => ({ ...prevState, foto: e.target.files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(cliente);
    };

    return (
        <CForm onSubmit={handleSubmit}>
            <h2>Cadastro de Clientes</h2>
            <CRow>
                <CCol xs={12} md={6}>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>Nome</CInputGroupText>
                        <CFormInput placeholder="Nome" name="nome" value={cliente.nome} onChange={handleChange} />
                    </CInputGroup>
                </CCol>
                <CCol xs={12} md={3}>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>CEP</CInputGroupText>
                        <CFormInput placeholder="CEP" name="cep" value={cliente.cep} onChange={handleChange} />
                    </CInputGroup>
                </CCol>
                <CCol xs={12} md={3}>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>Número</CInputGroupText>
                        <CFormInput placeholder="Número" name="numero" value={cliente.numero} onChange={handleChange} />
                    </CInputGroup>
                </CCol>
                <CCol xs={12} md={6}>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>Email</CInputGroupText>
                        <CFormInput type="email" placeholder="E-mail" name="email" value={cliente.email} onChange={handleChange} />
                    </CInputGroup>
                </CCol>
                <CCol xs={12} md={6}>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>Rua</CInputGroupText>
                        <CFormInput placeholder="Rua" name="rua" value={cliente.rua} onChange={handleChange} />
                    </CInputGroup>
                </CCol>
                <CCol xs={12} md={4}>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>CPF</CInputGroupText>
                        <CFormInput placeholder="CPF" name="cpf" value={cliente.cpf} onChange={handleChange} />
                    </CInputGroup>
                </CCol>
                <CCol xs={12} md={4}>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>Cidade</CInputGroupText>
                        <CFormInput placeholder="Cidade" name="cidade" value={cliente.cidade} onChange={handleChange} />
                    </CInputGroup>
                </CCol>
                <CCol xs={12} md={4}>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>RG</CInputGroupText>
                        <CFormInput placeholder="RG" name="rg" value={cliente.rg} onChange={handleChange} />
                    </CInputGroup>
                </CCol>
                <CCol xs={12} md={6}>
                    <CInputGroup className="mb-3">
                        <CInputGroupText>Foto</CInputGroupText>
                        <CFormInput type="file" name="foto" onChange={handleImageChange} />
                    </CInputGroup>
                </CCol>
                <CCol xs={12}>
                    <CButton type="submit" color="primary">Cadastrar Cliente</CButton>
                </CCol>
            </CRow>
        </CForm>
    );
};

export default ClienteForm;
