import {Card, Col, Divider, List, Row, Tag, Typography} from 'antd';

/* Importaciones propias */
import {useUiMenu} from '../hooks/useUiMenu';

const {Text, Title} = Typography;

const data = [
    {
        ticketNo: 33,
        desk: 3,
        agent: 'Fernando Herrera'
    },
    {
        ticketNo: 34,
        desk: 4,
        agent: 'Melissa Flores'
    },
    {
        ticketNo: 35,
        desk: 5,
        agent: 'Carlos Castro'
    },
    {
        ticketNo: 36,
        desk: 3,
        agent: 'Fernando Herrera'
    },
    {
        ticketNo: 37,
        desk: 3,
        agent: 'Fernando Herrera'
    },
    {
        ticketNo: 38,
        desk: 2,
        agent: 'Melissa Flores'
    },
    {
        ticketNo: 39,
        desk: 5,
        agent: 'Carlos Castro'
    },
];

export const Queue = () => {
    /* Hook para el menú */
    useUiMenu(true);

    return (
        <>
            <Title lavel={1}>Atendiendo al cliente</Title>
            <Row>
                <Col span={12}>
                    <List dataSource={data.slice(0, 3)}
                          renderItem={item => (
                              <List.Item>
                                  <Card style={{width: 300, marginTop: 16}}
                                        actions={[
                                            <Tag color="volcano">{item.agent}</Tag>,
                                            <Tag color="magenta">Escritorio: {item.desk}</Tag>
                                        ]}>
                                      <Title>No. {item.ticketNo}</Title>
                                  </Card>
                              </List.Item>
                          )}/>
                </Col>

                <Col span={12}>
                    <Divider>Historial</Divider>
                    <List dataSource={data.slice(3)}
                          renderItem={item => (
                              <List.Item>
                                  <List.Item.Meta title={`Ticket No. ${item.ticketNo}`}
                                                  description={
                                                      <>
                                                          <Text type="secondary">En el escritorio: </Text>
                                                          <Tag color="magenta">{item.ticketNo}</Tag>
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