
import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


type Props = {
    title?: string
    target?: React.FC
}

const App: React.FC<Props> = (
    props: Props
) => {
    const Node = props.target || (() => <div></div>)
    const title = props.title || 'Single Page'
    return (<Layout style={{ height: '100%' }}>
        <Header>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                style={{ lineHeight: '64px' }}
            >
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>{title}</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
                <Node></Node>
            </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>)
}

export default App