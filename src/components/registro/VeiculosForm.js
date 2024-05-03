import React, { useState } from 'react';
import {
    CButton,
    CCol,
    CForm, CFormCheck,
    CFormGroup, CFormInput, CFormTextarea,
    CInput,
    CInputCheckbox,
    CInputFile,
    CLabel,
    CRow,
    CTextarea
} from '@coreui/react';


const VeiculosForm = ({ onSubmit }) => {
    const [veiculo, setVeiculo] = useState({
        tipo: '',
        modelo: '',
        ano: '',
        quilometragemAtual: '',
        quilometragemChegada: '',
        placa: '',
        numeroChassi: '',
        mesVencimentoLicenca: '',
        mesVencimentoSeguro: '',
        estado: '',
        cidade: '',
        diaria: '',
        acessivel: false,
        combustivel: '',
        observacao: '',
        foto: null
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setVeiculo(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleImageChange = (e) => {
        setVeiculo(prevState => ({ ...prevState, foto: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Enviando veículo:", veiculo);

        try {
            const response = await fetch('http://localhost:8080/veiculos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(veiculo)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            console.log("Resposta do servidor:", data);
            alert('Veículo cadastrado com sucesso!');
        } catch (error) {
            console.error("Erro ao enviar veículo:", error);
            alert('Falha ao cadastrar veículo.');
        }
    };


    return (
        <CForm onSubmit={handleSubmit}>
            <h2>Cadastro de Veículos</h2>
            <CRow>
                {Object.keys(veiculo).map((key) => {
                    if (key === 'foto') {
                        return (
                            <CCol xs="12" sm="6" lg="4" key={key}>
                                <div className="mb-3">
                                    <label htmlFor={key} className="form-label">Foto</label>
                                    <input type="file" className="form-control" id={key} name={key} onChange={handleImageChange} />
                                </div>
                            </CCol>
                        );
                    } else if (key === 'acessivel') {
                        return (
                            <CCol xs="12" sm="6" lg="4" key={key}>
                                <div className="mb-3">
                                    <CFormCheck
                                        id={key}
                                        name={key}
                                        label="Acessível"
                                        checked={veiculo[key]}
                                        onChange={handleChange}
                                    />
                                </div>
                            </CCol>
                        );
                    } else if (key === 'observacao' || key === 'combustivel') {
                        return (
                            <CCol xs="12" sm="6" lg="4" key={key}>
                                <div className="mb-3">
                                    <label htmlFor={key} className="form-label">Observação</label>
                                    <CFormTextarea
                                        id={key}
                                        name={key}
                                        rows="5"
                                        value={veiculo[key]}
                                        onChange={handleChange}
                                        placeholder="Observação"
                                    />
                                </div>
                            </CCol>
                        );
                    } else {
                        return (
                            <CCol xs="12" sm="6" lg="4" key={key}>
                                <div className="mb-3">
                                    <label htmlFor={key} className="form-label">{key.charAt(0).toUpperCase() + key.slice(1)}</label>
                                    <CFormInput
                                        id={key}
                                        name={key}
                                        value={veiculo[key]}
                                        onChange={handleChange}
                                        placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                                    />
                                </div>
                            </CCol>
                        );
                    }
                })}
                <CCol xs="12">
                    <CButton type="submit" color="primary">Cadastrar Veículo</CButton>
                </CCol>
            </CRow>
        </CForm>
    );

};

export default VeiculosForm;