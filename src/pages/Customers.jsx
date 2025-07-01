import { Table, Tag, Avatar } from 'antd';

const data = [
  {
    key: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://i.pravatar.cc/40?img=5',
    orders: 12,
    totalSpent: 1234.56,
    status: 'Active',
  },
  {
    key: '2',
    name: 'Emily Smith',
    email: 'emily.smith@example.com',
    avatar: 'https://i.pravatar.cc/40?img=6',
    orders: 5,
    totalSpent: 489.99,
    status: 'Inactive',
  },
  {
    key: '3',
    name: 'Michael Lee',
    email: 'michael.lee@example.com',
    avatar: 'https://i.pravatar.cc/40?img=7',
    orders: 20,
    totalSpent: 2100.75,
    status: 'Active',
  },
  {
    key: '4',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    avatar: 'https://i.pravatar.cc/40?img=8',
    orders: 0,
    totalSpent: 0,
    status: 'Blocked',
  },
];

const columns = [
  {
    title: 'Customer',
    dataIndex: 'name',
    render: (text, record) => (
      <div className="flex items-center gap-2">
        <Avatar src={record.avatar} />
        <span>{text}</span>
      </div>
    ),
  },
  {
    title: 'Email',
    dataIndex: 'email',
  },
  {
    title: 'Orders',
    dataIndex: 'orders',
  },
  {
    title: 'Total Spent',
    dataIndex: 'totalSpent',
    render: (value) => `$${value.toFixed(2)}`,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status) => {
      let color = 'green';
      if (status === 'Inactive') color = 'orange';
      else if (status === 'Blocked') color = 'red';
      return <Tag color={color}>{status}</Tag>;
    },
  },
];

const Customers = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Customers</h2>
      <Table dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default Customers;
