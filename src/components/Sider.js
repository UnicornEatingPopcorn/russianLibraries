import React from "react"
import { NotificationOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const { Sider } = Layout;

const CustomSider = ({info}) => {

  return (
    <Sider width={250} className="site-layout-background">
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        className="site-layout-scroll"
      >
        <SubMenu key="sub2" title="Количество библиотек">
          <Menu.Item>
            Все библиотеки
            <Link
              to={{
                pathname: "/all-libraries",
                state: { fullInfo: info },
              }}
            />
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<NotificationOutlined />} title="Регионы">
          {info.map((region) => (
            <Menu.Item key={region.kopuk}>
              {region.territory}
              <Link
                to={{
                  pathname: `/${region.kopuk}`,
                  state: { regionInfo: region },
                }}
              />
            </Menu.Item>
          ))}
        </SubMenu>
      </Menu>
    </Sider>
  )
};

export default CustomSider;
