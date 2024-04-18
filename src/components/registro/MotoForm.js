import React, { useState } from 'react';

const MotoForm = ({ onSubmit }) => {
    const [moto, setMoto] = useState({
        modelo: '',
        ano: '',
        preco: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMoto(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(moto);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Cadastro de Moto</h2>
            <label>
                Modelo:
                <input
                    type="text"
                    name="modelo"
                    value={moto.modelo}
                    onChange={handleChange}
                    required
                    placeholder="Modelo da moto"
                />
            </label>
            <label>
                Ano:
                <input
                    type="number"
                    name="ano"
                    value={moto.ano}
                    onChange={handleChange}
                    required
                    placeholder="Ano da moto"
                />
            </label>
            <label>
                Preço:
                <input
                    type="text"
                    name="preco"
                    value={moto.preco}
                    onChange={handleChange}
                    required
                    placeholder="Preço da moto"
                />
            </label>
            <div>
                <button type="submit">Cadastrar Moto</button>
            </div>
        </form>
    );
};

export default MotoForm;
