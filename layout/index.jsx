import { useState, useEffect } from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Breadcrumb, Layout, Menu } from 'antd';

import 'antd/dist/antd.css';
import { items } from "../router";

const { Header, Content, Sider } = Layout;

const App = (props) => {
  const { children } = props
  const [collapsed, setCollapsed] = useState(false);
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    console.log(items);
    var paths = window.location.pathname.split('/').filter(function (value) {
      return value != "";
    });

    setPaths(paths)
  }, [])

  const router = useRouter()

  const handleMenuNavigate = (selectedKeys)=>{
    router.replace(`/${selectedKeys}`)
  }

  return (
    <>
      <Head>
        <title>Next Gen App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['2']} mode="inline" items={items} onSelect={({ selectedKeys }) => handleMenuNavigate(selectedKeys)}></Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              {
                paths.map((item, index) => {
                  return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
                })
              }
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <main>
                {children}
              </main>
            </div>
          </Content>
        </Layout>
      </Layout>
    </>

  );
};

export default App;