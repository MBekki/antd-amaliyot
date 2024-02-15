import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const items = [
  {
    label: "Pagination One",
    key: "mail",
    icon: <MailOutlined />,
  },
  {
    label: "Pagination Two",
    key: "app",
    icon: <AppstoreOutlined />,
    // disabled: true,
  },
  {
    label: "Pagination Three - Submenu",
    key: "SubMenu",
    icon: <SettingOutlined />,
    children: [
      {
        type: "grouplar",
        label: "Item 1",
        children: [
          {
            label: "Options one",
            key: "setting:1",
          },
          {
            label: "Options two",
            key: "setting:2",
          },
        ],
      },
      {
        type: "grouplar",
        label: "Item 2",
        children: [
          {
            label: "Option 3",
            key: "setting:3",
          },
          {
            label: "Option 4",
            key: "setting:4",
          },
        ],
      },
    ],
  },
  {
    label: (
      <a href="#" target="" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: "alipay",
  },
];
const Navigation = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};
export default Navigation;
