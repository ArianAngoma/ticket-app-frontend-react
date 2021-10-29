import {useState} from 'react';
import {Button, Divider, Form, Input, InputNumber, Typography} from 'antd';
import {SaveOutlined} from '@ant-design/icons';
import {Redirect, useHistory} from 'react-router-dom';

/* Importaciones propias */
// import {useUiMenu} from '../hooks/useUiMenu';
import {getUserStorage} from '../helpers/get-user-storage';

const {Title, Text} = Typography;

export const Enter = () => {
    /* Obtener agente del localStorage */
    const [user] = useState(getUserStorage());
    // console.log(user);

    /* Hook para el menú */
    // useUiMenu(false);

    const history = useHistory();

    const onFinish = ({agent, desk}) => {
        // console.log('Success:', {agent, desk});

        /* Guardar usuario en localStorage */
        localStorage.setItem('agent', agent);
        localStorage.setItem('desk', desk);

        history.push('/escritorio');
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    if (user.agent && user.desk) return <Redirect to="/escritorio"/>

    return (
        <>
            <Title lavel={2}>Ingresar</Title>
            <Text>Ingrese su nombre y número de escritorio</Text>
            <Divider/>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 14,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Nombre del agente"
                    name="agent"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese su nombre',
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Escritorio"
                    name="desk"
                    rules={[
                        {
                            required: true,
                            message: 'Por favor ingrese el número de escritorio',
                        },
                    ]}
                >
                    <InputNumber min={1} max={99}/>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 14,
                    }}
                >
                    <Button type="primary" htmlType="submit"
                            shape="round">
                        <SaveOutlined/>
                        Ingresar
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}