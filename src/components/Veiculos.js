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
import {fetchClienteByCpfCnpj, fetchClienteById, fetchClientes} from "../api";


const veiculosData = [
    {
        id: 1,
        nome: 'Novo Peugeot 2008',
        imagem: 'https://www.otempo.com.br/image/contentid/policy:1.3297685:1703260595/Peugeot-e-2008-2024-1600-02-jpg.jpg?f=3x2&w=1224',
        modelo: 'Modelo do Carro 1',
        ano: 2020,
        preco: 'R$ 100,00/dia',
    },
    {
        id: 2,
        nome: 'Novo Jeep Wrangler',
        imagem: 'https://s2-autoesporte.glbimg.com/MZttVQlTZmObK4pn2ps97tHNfWM=/0x0:620x413/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2020/5/S/de9hHORnuvAue3OsTu1A/2017-11-01-novo-jeep-wragler-2f.jpg',
        modelo: 'Modelo do Carro 2',
        ano: 2019,
        preco: 'R$ 150,00/dia',
    },
    {
        id: 1,
        nome: 'Fiat Cronos',
        imagem: 'https://img0.icarros.com/dbimg/imgadicionalnoticia/4/111136_1',
        modelo: 'Modelo do Carro 1',
        ano: 2020,
        preco: 'R$ 100,00/dia',
    },
    {
        id: 2,
        nome: 'Dolphin Mini',
        imagem: 'https://www.otempo.com.br/image/policy:1.2978531:1688499408/BYD%20Seagull%204.jpg',
        modelo: 'Modelo do Carro 2',
        ano: 2019,
        preco: 'R$ 150,00/dia',
    },
    {
        id: 1,
        nome: 'Chevrolet S10',
        imagem: 'https://www.otempo.com.br/image/policy:1.3243506:1700253277/2023-chevrolet-colorado-lt-003.jpg' +
            '00-02-jpg.jpg?f=3x2&w=1224',
        modelo: 'Modelo do Carro 1',
        ano: 2020,
        preco: 'R$ 100,00/dia',
    },
    {
        id: 2,
        nome: 'Volkswagen Amarok',
        imagem: 'https://www.otempo.com.br/image/policy:1.3294231:1702586051/Amarok%20V6.png',
        modelo: 'Modelo do Carro 2',
        ano: 2019,
        preco: 'R$ 150,00/dia',
    },
    {
        id: 2,
        nome: 'Ferrari 488 Spider',
        imagem: 'https://www.segs.com.br/media/k2/items/cache/e0121739c63452dc14f483e3a46fd866_XL.jpg',
        modelo: 'Modelo do Carro 2',
        ano: 2019,
        preco: 'R$ 150,00/dia',
    },
];
function validaCpf(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11))  Resto = 0;
    if (Resto !== parseInt(strCPF.substring(9, 10)) ) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto === 10) || (Resto === 11))  Resto = 0;
    if (Resto !== parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
}



const Veiculos = () => {
    const [cliente, setCliente] = useState();

    const textClientes = async (cpfCnpj) => {
        try {
            const resposta = await fetchClienteByCpfCnpj(cpfCnpj);
            if (resposta) {
                setCliente(resposta);
            } else {
                throw new Error(`Erro na requisição: ${resposta.status}`);
            }
        } catch (error) {
            console.error('Falha ao buscar dados dos clientes:', error);
        }
    }

    const handleAlugarClick = (veiculoId) => {
        Swal.fire({
            title: `Alugar ${veiculosData[veiculoId].nome}`,
            icon: "info",
            text: "Insira o CPF/CNPJ do Cliente:",
            input: "search",
            confirmButtonText:"Buscar",
            confirmButtonColor: "#0A6847",
            cancelButtonText:"Cancelar",
            cancelButtonColor: "#C40C0C",
            showCancelButton: true,
            preConfirm(inputValue) {
                if(inputValue !== ""){
                    if(validaCpf(inputValue)){
                        const text = new Promise((resolve) => {
                            textClientes(inputValue)
                            resolve({
                                "Nome": cliente.nome,
                                "CPF/CNPJ": cliente.cpfCnpj,
                                "Telefone": cliente.telefone,
                                "Email": cliente.email
                            })
                        });
                        Swal.fire({
                            title:"Cliente",
                            text,
                        })
                    }else{
                        Swal.fire({
                            title: "Insira um CPF válido!",
                            icon: "warning"
                        })
                    }
                }else{
                    Swal.fire({
                        title: "O campo de CPF/CNPJ deve estar preenchido!",
                        icon: "warning"
                    })
                }
            },
        })
    };

    return (
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 3 }}>
            {veiculosData.map((veiculo) => (
                <CCol key={veiculo.id}>
                    <CCard>
                        <CCardImage orientation="top" src={veiculo.imagem} />
                        <CCardBody>
                            <CCardTitle>{veiculo.nome}</CCardTitle>
                            <CCardText>Modelo: {veiculo.modelo}</CCardText>
                            <CCardText>Ano: {veiculo.ano}</CCardText>
                            <CCardText>Preço: {veiculo.preco}</CCardText>
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
    );
};

export default Veiculos;
