import {Button, Col, Row, Typography} from 'antd';
import {DownloadOutlined} from '@ant-design/icons';

const {Title, Text} = Typography;

export const CreateTicket = () => {
    const newTicket = () => {
        console.log('New Tickewt')
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

            <Row style={{marginTop: 100}}>
                <Col span={14} offset={6} align="center">
                    <Text lavel={2}>Su número</Text>
                    <br/>
                    <Text type="success" style={{fontSize: 55}}>55</Text>
                </Col>
            </Row>
        </>
    )
}