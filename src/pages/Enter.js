import {Button, Form, Input, InputNumber} from 'antd';
import {SaveOutlined} from '@ant-design/icons';

export const Enter = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
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
    )
}