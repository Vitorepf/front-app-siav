import React, {useState} from 'react';
import Swal from 'sweetalert2'
import {
    CCard,
    CCardBody,
    CCardImage,
    CCardTitle,
    CCardText,
    CRow,
    CCol, CButton,
} from '@coreui/react';
import {
    fetchAllSegurosAndAdicionais,
    fetchAllVehicles,
    fetchClienteByCpfCnpj,
    fetchClienteById,
    fetchClientes, fetchVeiculoById
} from "../api";
import Modal from "@coreui/coreui/js/src/modal";


let veiculosData = []

veiculosData = await fetchAllVehicles()

const Veiculos = () => {
    const [cliente, setCliente] = useState(null);
    const [seguros, setSeguros] = useState(null);
    const [adicionais, setAdicional] = useState(null);
    const [veiculo, setVeiculo] = useState(null);
    const [grupo, setGrupo] = useState(null);
    const [nome, setNome] = useState(null);
    const [dataInicio, setDataInicio] = useState(null);
    const [dataFim, setDataFim] = useState(null);
    const [valor, setValor] = useState(null);



   /* function exibirCliente(text){
        Swal.fire({
            title: "Cliente",
            text,
        }).then(r => {})
    }*/

    const textClientes = async (cpfCnpj) => {
        try {
            const segurosAdicionais = await fetchAllSegurosAndAdicionais()
            setSeguros(segurosAdicionais.seguros)
            setAdicional(segurosAdicionais.adicionais)
            const resposta = await fetchClienteByCpfCnpj(cpfCnpj);
            setCliente(resposta);
            Swal.fire({
                title: "Cliente",
                text: `Nome: ${cliente.clienteNome}  Documento: ${cliente.cpfCnpj} Email: ${cliente.email} Telefone: ${cliente.telefone}`,

                confirmButtonText: "Alugar",
                confirmButtonColor: '#0eb611'
            }).then(() => {
                Swal.fire({
                    title:'Seguros',
                    input:'checkbox',
                    inputValue:0,
                    inputPlaceholder:'Adicionar Seguros para o aluguel',
                    confirmButtonText:'Seguir'
                }).then(() => {
                    Swal.fire({
                        title:'Adicionais',
                        input:'checkbox',
                        inputValue:0,
                        inputPlaceholder:'Adicionar Adicionais para o aluguel',
                        confirmButtonText:'Seguir'
                    }).then(() =>{
                        Swal.fire({
                            title: "Selecione a data de retirada",
                            input: "date",
                            didOpen: () => {
                                setDataInicio((new Date()).toISOString());
                                Swal.getInput().min = dataInicio;
                            }
                        }).then(() => {
                            Swal.fire({
                                title: "Selecione a data de Retorno",
                                input: "date",
                                didOpen: () => {
                                    setDataFim((new Date()).toISOString());
                                    Swal.getInput().min = dataFim;
                                }
                            }).then(() => {
                                Swal.fire({
                                    title: "Coloque um nome para o aluguel",
                                    input: "text",
                                    inputLabel: "Nome do aluguel",
                                    showCancelButton: true,
                                    inputValidator: (value) => {
                                        if (!value) {
                                            return "You need to write something!";
                                        }else{
                                            setNome(value)
                                        }
                                    }
                                }).then(() => {
                                    Swal.fire({
                                        title: "Valor do aluguel",
                                        icon: "question",
                                        input: "range",
                                        inputLabel: "Valor",
                                        inputAttributes: {
                                            min: veiculo.diaria,
                                            max: "20000",
                                            step: "1"
                                        },
                                        inputValue: veiculo.diaria
                                    }).then(async (value) => {
                                        setValor(value)
                                        await handleAluguel()
                                    })
                                })
                            })
                        })
                    })
                })
            })
        } catch (error) {
            console.error('Falha ao buscar dados dos clientes:', error);
        }
    }

    const handleAluguel = async () => {
        const baseUrl = 'http://localhost:8081';
        setNome("teste")
        setValor(11231.00)
        setDataFim(new Date())
        setDataInicio(new Date())
        let form = {
            nome,
            cliente,
            valor,
            veiculo,
            seguros,
            adicionais,
            dataInicio,
            dataFim
        }
        form = JSON.stringify(form)
        try {
            const response = await fetch(`${baseUrl}/aluguel/new`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: form
            });
            if (!response.ok) {
                throw new Error('Failed to delete client');
            }
            return 'Client deleted successfully';
        } catch (error) {
            console.error(`Error deleting client:`, error);
        }
    };

    const handleAlugarClick = async (veiculoId) => {
        const veiculo = await fetchVeiculoById(veiculoId)
        setVeiculo(veiculo)
        setGrupo(veiculo.grupoId)
        Swal.fire({
            title: `Alugar ${veiculosData[veiculoId].nome}`,
            icon: "info",
            text: "Insira o CPF/CNPJ do Cliente:",
            input: "search",
            confirmButtonText: "Buscar",
            confirmButtonColor: "#0A6847",
            cancelButtonText: "Cancelar",
            cancelButtonColor: "#C40C0C",
            showCancelButton: true,
            preConfirm(inputValue) {
                if (inputValue !== "") {
                    textClientes(inputValue)
                } else {
                    Swal.fire({
                        title: "O campo de CPF/CNPJ deve estar preenchido!",
                        icon: "warning"
                    })
                }
            },
        })
    };

    return (
        <div>
            <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
                {veiculosData.map((veiculo) => (
                    <CCol key={veiculo.id}>
                        <CCard>
                            <CCardBody>
                                <CCardTitle>{veiculo.marca}</CCardTitle>
                                <CCardText>Modelo: {veiculo.placa}</CCardText>
                                <CCardText>Preço: {veiculo.diaria}</CCardText>
                                <CButton
                                    color="primary"
                                    onClick={() => handleAlugarClick(veiculo.id)}
                                >
                                    Alugar
                                </CButton>
                            </CCardBody>
                        </CCard>
                    </CCol>
                ))}
            </CRow>
        </div>
    );
};

export default Veiculos;
