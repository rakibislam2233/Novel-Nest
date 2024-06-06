import { Layout, Menu } from "antd";
const { Sider } = Layout;
const items = [
  {
    key: 1,
    label: "Admin Dashboard",
  },
  {
    key: 2,
    label: "Users",
  },
  {
    key: 3,
    label: "Added Book",
  },
  {
    key: 4,
    label: "Books",
  },
];
const Sidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{ width: "100%", height: "100vh" }}
    >
      <div className="w-full h-16 flex justify-center items-center">
        <h1 className="text-xl font-semibold text-white">Novel Nest</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
