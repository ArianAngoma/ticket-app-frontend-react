import {Layout, Menu} from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from 'react-router-dom';

/* Importaciones propias */
import {Enter} from './Enter';
import {Queue} from './Queue';
import {CreateTicket} from './CreateTicket';
import {Desk} from './Desk';

const {Sider, Content} = Layout;

export const RouterPage = () => {
    return (
        <Router>
            <Layout style={{height: '100vh'}}>
                <Sider>
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined/>}>
                            <Link to="/ingresar">
                                Ingresar
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                            <Link to="/cola">
                                Cola de tickets
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined/>}>
                            <Link to="/crear">
                                Crear ticket
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Route path="/ingresar" component={Enter}/>
                            <Route path="/cola" component={Queue}/>
                            <Route path="/crear" component={CreateTicket}/>

                            <Route path="/escritorio" component={Desk}/>

                            <Redirect to="/ingresar"/>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    )
}