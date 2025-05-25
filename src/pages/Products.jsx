import { Table } from 'antd';

const data = [
  { key: '1', name: 'Product A', price: 120 },
  { key: '2', name: 'Product B', price: 80 },
];

const columns = [
  { title: 'Name', dataIndex: 'name' },
  { title: 'Price', dataIndex: 'price' },
];

const Products = () => {
  return <Table dataSource={data} columns={columns} />;
};

export default Products;
