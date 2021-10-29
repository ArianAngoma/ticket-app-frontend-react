import {useState} from 'react';
import {Button, Col, Divider, Row, Typography} from 'antd';
import {CloseCircleOutlined, RightOutlined} from '@ant-design/icons';
import {Redirect, useHistory} from 'react-router-dom';

/* Importaciones propias */
// import {useUiMenu} from '../hooks/useUiMenu';
import {getUserStorage} from '../helpers/get-user-storage';

const {Text, Title} = Typography;

export const Desk = () => {
    /* Obtener agente del localStorage */
    const [user] = useState(getUserStorage());

    const history = useHistory();

    /* Hook para el menú */
    // useUiMenu(false);

    const exit = () => {
        /* Limpiar localStorage */
        localStorage.clear();

        /* Reemplezar para que no pueda regresar a la pantalla anterior */
        history.replace('/ingresar');
    }

    const nextTicket = () => {
        console.log('Siguiente');
    }

    if (!user.agent || !user.desk) return <Redirect to="/ingresar"/>

    return (
        <>
            <Row>
                <Col span={20}>
                    <Title level={2}>{user.agent}</Title>
                    <Text>Usted está trabajando en el escritorio: </Text>
                    <Text type="success">{user.desk}</Text>
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