import {useContext, useEffect, useState} from 'react';
import {Card, Col, Divider, List, Row, Tag, Typography} from 'antd';

/* Importaciones propias */
// import {useUiMenu} from '../hooks/useUiMenu';
import {SocketContext} from '../context/SocketContext';

const {Text, Title} = Typography;

export const Queue = () => {
    /* Hook para el menú */
    // useUiMenu(true);

    const {socket} = useContext(SocketContext);

    const [tickets, setTickets] = useState([]);

    /* Escuchar los últimos 13 tickets asignados */
    useEffect(() => {
        socket.on('ticket-assigned', (ticketsAssigned) => {
            // console.log(ticketsAssigned);
            setTickets(ticketsAssigned);
        });

        return () => socket.off('ticket-assigned');
    }, [socket]);

    return (
        <>
            <Title lavel={1}>Atendiendo al cliente</Title>
            <Row>
                <Col span={12}>
                    <List dataSource={tickets.slice(0, 3)}
                          renderItem={item => (
                              <List.Item>
                                  <Card style={{width: 300, marginTop: 16}}
                                        actions={[
                                            <Tag color="volcano">{item.agent}</Tag>,
                                            <Tag color="magenta">Escritorio: {item.desk}</Tag>
                                        ]}>
                                      <Title>No. {item.number}</Title>
                                  </Card>
                              </List.Item>
                          )}/>
                </Col>

                <Col span={12}>
                    <Divider>Historial</Divider>
                    <List dataSource={tickets.slice(3)}
                          renderItem={item => (
                              <List.Item>
                                  <List.Item.Meta title={`Ticket No. ${item.number}`}
                                                  description={
                                                      <>
                                                          <Text type="secondary">En el escritorio: </Text>
                                                          <Tag color="magenta">{item.desk}</Tag>
                                                          <Text type="secondary">Agente: </Text>
                                                          <Tag color="volcano">{item.agent}</Tag>
                                                      </>
                                                  }/>
                              </List.Item>
                          )}>
                    </List>
                </Col>
            </Row>
        </>
    )
}