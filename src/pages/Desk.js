import {Button, Col, Divider, Row, Typography} from 'antd';
import {CloseCircleOutlined, RightOutlined} from '@ant-design/icons';

/* Importaciones propias */
import {useUiMenu} from '../hooks/useUiMenu';

const {Text, Title} = Typography;

export const Desk = () => {
    /* Hook para el menú */
    useUiMenu(false);

    const exit = () => {
        console.log('Salir');
    }

    const nextTicket = () => {
        console.log('Siguiente');
    }

    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>Arian</Title>
                    <Text>Usted está trabajando en el escritorio: </Text>
                    <Text type="success">5</Text>
                </Col>

                <Col span={4} align="right">
                    <Button shape="round" type="danger"
                            onClick={exit}>
                        <CloseCircleOutlined/>
                        Salir
                    </Button>
                </Col>
            </Row>

            <Divider/>

            <Row>
                <Col>
                    <Text>Está atendiendo el ticket número: </Text>
                    <Text style={{fontSize: 30}} type="danger">55</Text>
                </Col>
            </Row>

            <Row>
                <Col offset={18} span={6} align="right">
                    <Button onClick={nextTicket} shape="round" type="primary">
                        <RightOutlined/>
                        Siguiente
                    </Button>
                </Col>
            </Row>
        </>
    )
}