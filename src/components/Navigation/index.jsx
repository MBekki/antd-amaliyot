import React, { useState } from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
const items = [
  {
    label: "Page One",
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
        type: "Groups",
        label: "Item 1",
        children: [
          {
            label: "Menu 1",
            key: "setting:1",
          },
          {
            label: "Menu 2",
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
      <a
        href="https://github.com/MBekki/antd-amaliyot"
        target=""
        rel="noopener noreferrer"
      >
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
