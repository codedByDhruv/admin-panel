import { Card } from 'antd';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

const Dashboard = () => {
  // Mock stats data
  const stats = [
    { title: 'Total Sales', value: '$12,340' },
    { title: 'Orders', value: '1,245' },
    { title: 'Customers', value: '980' },
    { title: 'Products', value: '320' },
  ];

  // Mock line chart data
  const salesData = [
    { month: 'Jan', sales: 3000 },
    { month: 'Feb', sales: 4500 },
    { month: 'Mar', sales: 3200 },
    { month: 'Apr', sales: 5200 },
    { month: 'May', sales: 6100 },
    { month: 'Jun', sales: 4900 },
  ];

  // Mock pie chart data
  const categoryData = [
    { name: 'Electronics', value: 400 },
    { name: 'Clothing', value: 300 },
    { name: 'Home Appliances', value: 300 },
    { name: 'Books', value: 200 },
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

  return (
    <div className="grid grid-cols-4 gap-4">
      {/* Small Stats Cards */}
      {stats.map((item, index) => (
        <Card key={index} title={item.title} bordered>
          <p className="text-2xl font-semibold">{item.value}</p>
        </Card>
      ))}

      {/* Line Chart Card */}
      <Card title="Monthly Sales" bordered className="col-span-2">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#1890ff" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Pie Chart Card */}
      <Card title="Product Categories" bordered className="col-span-2">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default Dashboard;
