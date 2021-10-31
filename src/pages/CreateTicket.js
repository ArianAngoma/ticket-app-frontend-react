import {Button, Col, Row, Typography} from 'antd';
import {DownloadOutlined} from '@ant-design/icons';
import {useContext, useState} from 'react';

/* Importaciones propias */
// import {useUiMenu} from '../hooks/useUiMenu';
import {SocketContext} from '../context/SocketContext';

const {Title, Text} = Typography;

export const CreateTicket = () => {
    /* Hook para el menú */
    // useUiMenu(true);

    const {socket} = useContext(SocketContext);

    /* Estado del ticket */
    const [ticket, setTicket] = useState(null);

    /* Emitir evento para solicitar nuevo ticket */
    const newTicket = () => {

        /* El segundo argumento es la data, que puede ir o no; en este caso no se envía ni una data
        *  El tercer argumento es un callback si el backend quiere, lo ejecuta; en este caso se recibe ticket creado por el backend
        *  */
        socket.emit('req-ticket', null, (ticket) => {
            // console.log(ticket);
            setTicket(ticket);
        });
    }

    return (
        <>
            <Row>
                <Col span={14} offset={6} align="center">
                    <Title lavel={3}>
                        Presione el botón para generar un nuevo ticket
                    </Title>
                    <Button type="primary"
                            shape="round"
                            icon={<DownloadOutlined/>}
                            size="large"
                            onClick={newTicket}>
                        Nuevo Ticket
                    </Button>
                </Col>
            </Row>

            {
                ticket && (
                    <Row style={{marginTop: 100}}>
                        <Col span={14} offset={6} align="center">
                            <Text lavel={2}>Su número</Text>
                            <br/>
                            <Text type="success" style={{fontSize: 55}}>{ticket.number}</Text>
                        </Col>
                    </Row>
                )
            }
        </>
    )
}