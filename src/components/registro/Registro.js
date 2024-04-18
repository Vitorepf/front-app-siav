import React, { useState } from 'react';
import VeiculosForm from './VeiculosForm';
import ClienteForm from './ClienteForm';

const Registro = () => {
    const [registroTipo, setRegistroTipo] = useState('veiculo');

    const handleFormSubmit = (formData) => {
        console.log("Dados para registro:", formData);
    };

    const renderForm = () => {
        switch (registroTipo) {
            case 'veiculo':
                return <VeiculosForm onSubmit={handleFormSubmit} />;
            case 'cliente':
                return <ClienteForm onSubmit={handleFormSubmit} />;
            default:
                return <p>Selecione um tipo de registro.</p>;
        }
    };

    return (
        <div>
            <h1>Registro</h1>
            <select onChange={e => setRegistroTipo(e.target.value)} value={registroTipo}>
                <option value="veiculo">Veículo</option>
                <option value="cliente">Cliente</option>
            </select>
            {renderForm()}
        </div>
    );
};

export default Registro;
