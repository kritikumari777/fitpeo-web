import React from 'react';
import { Layout, theme } from 'antd';
import HeaderComp from './HeaderComp';
import DashbordComp from '../dashboard/DashbordComp';
import SideBarComp from './SideBarComp';

const { Header, Content, Sider } = Layout;

const LayoutComp = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ background: '#2E383F' }}>
        <HeaderComp />
      </Header>
      <Layout style={{ flex: 1 }}>
        <Sider
          width={64}
          style={{
            background: '#2E383F',
          }}
        >
          <SideBarComp />
        </Sider>
        <Layout style={{ flex: 1 }}>
          <Content
            style={{
              padding: '24px',
              margin: 0,
              minHeight: '100%',
              background: '#0C0C0C',
              overflow: 'auto',
            }}
          >
            <DashbordComp />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutComp;
