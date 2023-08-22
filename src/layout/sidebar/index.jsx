import { Layout, Menu, theme } from "antd";
import React from "react";
import {
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Link from "antd/es/typography/Link";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const data = [
    {
      key: "Dashboard",
      label: <NavLink to="/">Anasayfa</NavLink>,
      icon: <UserOutlined />,
    },
    {
      key: "Settings",
      label: <NavLink to="/ayarlar">Ayarlar</NavLink>,
      /*children:[
        {
          //key: "Dashboard",
          //label: <NavLink to="/">Anasayfa</NavLink>,
          //icon: <UserOutlined />,
        }
      ],*/
      icon: <SettingOutlined/>,
    },
  ];

  return (
    <Layout.Sider
      width={200}
      style={{
        background: colorBgContainer,
      }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{
          height: "100%",
          borderRight: 0,
        }}
        items={data}
      />
    </Layout.Sider>
  );
}
