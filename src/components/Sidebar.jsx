import { Menu } from 'antd';
import {
  DashboardOutlined,
  ShoppingOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ collapsed }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-full bg-white shadow-lg">
      <div className="text-center text-xl font-semibold py-4 border-b">
        {collapsed ? 'SE' : 'ShopEase'}
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        onClick={({ key }) => navigate(key)}
        inlineCollapsed={collapsed}
        items={[
          { key: '/', icon: <DashboardOutlined />, label: 'Dashboard' },
          { key: '/products', icon: <ShoppingOutlined />, label: 'Products' },
          { key: '/orders', icon: <ShoppingCartOutlined />, label: 'Orders' },
          { key: '/customers', icon: <UserOutlined />, label: 'Customers' },
          { key: '/reports', icon: <BarChartOutlined />, label: 'Reports' },
          { key: '/settings', icon: <SettingOutlined />, label: 'Settings' },
        ]}
      />
    </div>
  );
};

export default Sidebar;
