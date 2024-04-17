import React from 'react';
import {
    CCard,
    CCardBody,
    CCardImage,
    CCardTitle,
    CCardText,
    CRow,
    CCol, CButton,
} from '@coreui/react';

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

const Veiculos = () => {
    const handleAlugarClick = (veiculoId) => {
        console.log('Veículo para alugar:', veiculoId);
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
