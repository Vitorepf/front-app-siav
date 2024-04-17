import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react';
import { Bar } from 'react-chartjs-2';
import { FaCar, FaCalendarCheck, FaCheckCircle } from 'react-icons/fa';
import 'chart.js/auto';

const Financas = () => {
    const statusVeiculos = {
        alugados: {
            quantidade: 350,
            total: 1550,
            icone: <FaCar />,
            cor: 'primary'
        },
        pendentes: {
            quantidade: 100,
            total: 1550,
            icone: <FaCalendarCheck />,
            cor: 'warning'
        },
        disponiveis: {
            quantidade: 1100,
            total: 1550,
            icone: <FaCheckCircle />,
            cor: 'success'
        },
    };

    const cardStyle = {
        borderRadius: '20px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: '20px',
        textAlign: 'center',
    };

    const dadosGraficoLucros = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
            {
                label: 'Lucros',
                data: [5000, 6000, 8000, 8100, 7500],
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
            {
                label: 'Custos',
                data: [3000, 2000, 2800, 5000, 6000],
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
            },
        ],
    };

    const opcoesGrafico = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
            },
            x: {},
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Lucros e Custos por Mês',
            },
        },
    };

    return (
        <div className="container-fluid">
            <CRow className="justify-content-center">
                {Object.entries(statusVeiculos).map(([key, { quantidade, total, icone, cor }]) => (
                    <CCol key={key} xs="12" sm="6" md="4" xl="3">
                        <CCard style={cardStyle} className={`text-${cor} mb-3`}>
                            <div className="icon" style={{ fontSize: '2.5rem' }}> {icone} </div>
                            <CCardHeader>{key.charAt(0).toUpperCase() + key.slice(1)}</CCardHeader>
                            <CCardBody>
                                <h2>{quantidade} / {total}</h2>
                            </CCardBody>
                        </CCard>
                    </CCol>
                ))}
            </CRow>
            <CRow className="justify-content-center">
                <CCol xs="12">
                    <CCard className="mb-4">
                        <CCardHeader>Gráfico de Lucros e Custos</CCardHeader>
                        <CCardBody>
                            <div style={{ height: '400px' }}>
                                <Bar data={dadosGraficoLucros} options={{...opcoesGrafico, maintainAspectRatio: false }} />
                            </div>
                        </CCardBody>
                    </CCard>
                </CCol>
            </CRow>
        </div>
    );

};


export default Financas;
