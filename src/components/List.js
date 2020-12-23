import React, { useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { connect } from "react-redux";
import { NotificationOutlined } from "@ant-design/icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import getLibrariesInfo from "../api/getLibrariesInfo";
import Library from "../components/Library";

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

const mapStateToProps = (state) => ({
  librariesInfo: state.librariesInfo,
});

const List = ({ librariesInfo }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLibrariesInfo);
  }, []);

  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item key="1">
              Список регионов и количество библиотек
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu
                key="sub3"
                icon={<NotificationOutlined />}
                title="Регионы"
              >
                {librariesInfo.map((region) => (
                  <Menu.Item key={region.kopuk}>
                    {region.territory}
                    <Link to={`/${region.kopuk}`} />
                  </Menu.Item>
                ))}
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>
                Количество библиотек по выбранному региону
              </Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Route path="/:id" component={Library} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default connect(mapStateToProps)(List);
