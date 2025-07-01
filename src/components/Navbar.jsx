import {
  BellOutlined,
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Badge, Dropdown, Menu, Avatar } from 'antd';

const Navbar = ({ collapsed, toggleSidebar }) => {
  // Dummy notifications
  const notifications = [
    { key: '1', message: 'New order received' },
    { key: '2', message: 'New customer registered' },
    { key: '3', message: 'Low stock alert: Nike Air Max' },
  ];

  const notificationMenu = (
    <Menu
      items={notifications.map((item) => ({
        key: item.key,
        label: <span>{item.message}</span>,
      }))}
    />
  );

  const userMenu = (
    <Menu
      items={[
        { key: '1', label: 'Profile' },
        { key: '2', label: 'Settings' },
        { key: '3', type: 'divider' },
        { key: '4', label: 'Logout' },
      ]}
    />
  );

  return (
    <div className="flex justify-between items-center p-4 bg-white border-b">
      {/* Sidebar Toggle */}
      <div onClick={toggleSidebar} className="cursor-pointer text-xl">
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </div>

      {/* Right Side Icons */}
      <div className="flex gap-4 items-center">
        {/* Notification Dropdown */}
        <Dropdown overlay={notificationMenu} placement="bottomRight" arrow>
          <Badge count={notifications.length} size="small">
            <BellOutlined className="text-xl cursor-pointer" />
          </Badge>
        </Dropdown>

        {/* User Dropdown */}
        <Dropdown overlay={userMenu} placement="bottomRight" arrow>
          <div className="cursor-pointer flex items-center gap-2">
            <Avatar size="small" icon={<UserOutlined />} />
            <span className="hidden sm:inline">Admin</span>
          </div>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
