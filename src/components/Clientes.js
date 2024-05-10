import React, {useState, useEffect, useMemo} from 'react';
import {
    CTable,
    CTableHead,
    CTableBody,
    CTableRow,
    CTableHeaderCell,
    CTableDataCell,
    CCard,
    CCardBody,
    CCardHeader,
    CSpinner,
    CAlert,
} from '@coreui/react';
import { fetchClientes } from '../api';

const Clientes = () => {
    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const carregarClientes = async () => {
            setLoading(true);
            setError(null);
            try {
                const resposta = await fetchClientes();
                // Não esta entrando no if , resposta.ok é undefined trocando para !== null
                if (resposta !== null) {
                    const dados = await resposta;
                    setClientes(dados);
                } else {
                    throw new Error(`Erro na requisição: ${resposta.status}`);
                }
            } catch (error) {
                console.error('Falha ao buscar dados dos clientes:', error);
                setError('Falha ao buscar dados dos clientes');
            } finally {
                setLoading(false);
            }
        };
        carregarClientes();
    }, []);

    const clientesTabela = useMemo(() => {
        return clientes.map(cliente => (
            <CTableRow key={cliente.id}>
                <CTableDataCell>{cliente.clienteNome}</CTableDataCell>
                <CTableDataCell>{cliente.cpfCnpj}</CTableDataCell>
                <CTableDataCell>{cliente.endereco}</CTableDataCell>
                <CTableDataCell>{cliente.telefone}</CTableDataCell>
                <CTableDataCell>{cliente.email}</CTableDataCell>
            </CTableRow>
        ));
    }, [clientes]);


    return (
        <CCard>
            <CCardHeader>
                <h3>Clientes</h3>
            </CCardHeader>
            <CCardBody>
                {loading ? (
                    <div className="text-center">
                        <CSpinner color="primary" />
                    </div>
                ) : error ? (
                    <CAlert color="danger">{error}</CAlert>
                ) : (
                    <CTable striped hover responsive>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell>Nome</CTableHeaderCell>
                                <CTableHeaderCell>CPF/CNPJ</CTableHeaderCell>
                                <CTableHeaderCell>Endereço</CTableHeaderCell>
                                <CTableHeaderCell>Telefone</CTableHeaderCell>
                                <CTableHeaderCell>Email</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {clientes.length > 0 ? clientesTabela : (
                                <CTableRow>
                                    <CTableDataCell colSpan="5">
                                        Nenhum cliente encontrado
                                    </CTableDataCell>
                                </CTableRow>
                            )}
                        </CTableBody>
                    </CTable>
                )}
            </CCardBody>
        </CCard>
    );
}

    export default Clientes;
