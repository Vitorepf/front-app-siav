import React, { useState } from 'react';

const CarroForm = ({ onSubmit }) => {
    const [carro, setCarro] = useState({
        modelo: '',
        ano: '',
        preco: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCarro({ ...carro, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(carro);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="modelo" value={carro.modelo} onChange={handleChange} required placeholder="Modelo do carro" />
            <input name="ano" value={carro.ano} onChange={handleChange} required type="number" placeholder="Ano do carro" />
            <input name="preco" value={carro.preco} onChange={handleChange} required type="number" placeholder="Preço do carro" />
            <button type="submit">Cadastrar Carro</button>
        </form>
    );
};

export default CarroForm;
