import { Card } from 'antd';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  CartesianGrid,
} from 'recharts';

const summaryData = [
  { title: 'Total Revenue', value: '$18,450' },
  { title: 'Total Orders', value: '1,320' },
  { title: 'Total Returns', value: '45' },
];

const monthlyRevenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 3200 },
  { month: 'Mar', revenue: 2800 },
  { month: 'Apr', revenue: 4300 },
  { month: 'May', revenue: 3700 },
  { month: 'Jun', revenue: 4450 },
];

const paymentDistribution = [
  { method: 'Credit Card', value: 60 },
  { method: 'PayPal', value: 25 },
  { method: 'Cash on Delivery', value: 15 },
];

const COLORS = ['#1890ff', '#ffc658', '#ff8042'];

const Reports = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Reports</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {summaryData.map((item, i) => (
          <Card key={i} title={item.title} bordered>
            <p className="text-2xl font-semibold">{item.value}</p>
          </Card>
        ))}
      </div>

      {/* Revenue Bar Chart */}
      <Card title="Monthly Revenue" className="mb-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyRevenue}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="revenue" fill="#1890ff" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Payment Method Pie Chart */}
      <Card title="Payment Method Distribution">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={paymentDistribution}
              dataKey="value"
              nameKey="method"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {paymentDistribution.map((entry, index) => (
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

export default Reports;
