import { Table, Tag, Avatar } from 'antd';

const data = [
  {
    key: '1',
    orderId: 'ORD-1001',
    customer: 'John Doe',
    avatar: 'https://i.pravatar.cc/40?img=1',
    date: '2025-06-28',
    amount: 299.99,
    status: 'Delivered',
  },
  {
    key: '2',
    orderId: 'ORD-1002',
    customer: 'Emily Smith',
    avatar: 'https://i.pravatar.cc/40?img=2',
    date: '2025-06-29',
    amount: 149.49,
    status: 'Pending',
  },
  {
    key: '3',
    orderId: 'ORD-1003',
    customer: 'Michael Lee',
    avatar: 'https://i.pravatar.cc/40?img=3',
    date: '2025-06-30',
    amount: 89.0,
    status: 'Cancelled',
  },
  {
    key: '4',
    orderId: 'ORD-1004',
    customer: 'Sarah Johnson',
    avatar: 'https://i.pravatar.cc/40?img=4',
    date: '2025-07-01',
    amount: 239.99,
    status: 'Shipped',
  },
];

const columns = [
  {
    title: 'Order ID',
    dataIndex: 'orderId',
  },
  {
    title: 'Customer',
    dataIndex: 'customer',
    render: (text, record) => (
      <div className="flex items-center gap-2">
        <Avatar src={record.avatar} />
        <span>{text}</span>
      </div>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    render: (value) => `$${value.toFixed(2)}`,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status) => {
      let color = 'green';
      if (status === 'Pending') color = 'orange';
      else if (status === 'Cancelled') color = 'red';
      else if (status === 'Shipped') color = 'blue';
      return <Tag color={color}>{status}</Tag>;
    },
  },
];

const Orders = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      <Table dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default Orders;
