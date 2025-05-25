import { BellOutlined, UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const Navbar = ({ collapsed, toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center p-4 bg-white border-b">
      <div onClick={toggleSidebar} className="cursor-pointer text-xl">
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>
      <div className="flex gap-4 items-center">
        <BellOutlined className="text-xl" />
        <UserOutlined className="text-xl" />
      </div>
    </div>
  );
};

export default Navbar;
