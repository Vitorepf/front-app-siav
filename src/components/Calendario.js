import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ptLocale from '@fullcalendar/core/locales/pt';
const Calendario = ({ alugueis }) => {
    const eventos = alugueis.map(aluguel => ({
        id: aluguel.id,
        title: aluguel.veiculo,
        start: aluguel.dataInicio,
        end: aluguel.dataFim,
        allDay: true,
        color: 'red',
    }));

    return (
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            locale={ptLocale}
            events={eventos}
        />
    );
};

export default Calendario;
