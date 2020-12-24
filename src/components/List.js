import React, { useEffect } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import getLibrariesInfo from "../api/getLibrariesInfo";
import CustomSider from "../components/Sider";
import Libraries from "../components/Libraries";
import FullStat from "../components/FullStatisticList";

const { Header, Content } = Layout;

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
          <CustomSider info={librariesInfo} />
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Информация по библиотекам</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path={"/all-libraries"} component={FullStat} />
                <Route path={"/:id"} component={Libraries} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};

export default connect(mapStateToProps)(List);
