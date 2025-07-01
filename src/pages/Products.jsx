import { Table, Tag, Image } from 'antd';

const data = [
  {
    key: '1',
    image: 'https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-iPhone-14-Plus-2up-midnight-220907-geo_inline.jpg.large_2x.jpg',
    name: 'Apple iPhone 14',
    category: 'Electronics',
    stock: 25,
    price: 799,
    status: 'In Stock',
  },
  {
    key: '2',
    image: 'https://m.media-amazon.com/images/I/71y7-6+KcbL._SY695_.jpg',
    name: 'Nike Air Max',
    category: 'Footwear',
    stock: 0,
    price: 149,
    status: 'Out of Stock',
  },
  {
    key: '3',
    image: 'https://m.media-amazon.com/images/I/41-ALR1y5lL._SY300_SX300_QL70_FMwebp_.jpg',
    name: 'Samsung LED TV 43"',
    category: 'Electronics',
    stock: 10,
    price: 399,
    status: 'In Stock',
  },
  {
    key: '4',
    image: 'https://m.media-amazon.com/images/I/81PtS3gTZqL._SX679_.jpg',
    name: 'Wooden Study Table',
    category: 'Furniture',
    stock: 5,
    price: 120,
    status: 'Low Stock',
  },
];

const columns = [
  {
    title: 'Image',
    dataIndex: 'image',
    render: (img) => <Image src={img} width={50} />,
  },
  {
    title: 'Product Name',
    dataIndex: 'name',
  },
  {
    title: 'Category',
    dataIndex: 'category',
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
    render: (stock) => (
      <span className={stock === 0 ? 'text-red-500' : stock < 10 ? 'text-yellow-500' : 'text-green-600'}>
        {stock}
      </span>
    ),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    render: (price) => `$${price.toFixed(2)}`,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    render: (status) => {
      let color = 'green';
      if (status === 'Out of Stock') color = 'red';
      else if (status === 'Low Stock') color = 'orange';
      return <Tag color={color}>{status}</Tag>;
    },
  },
];

const Products = () => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Product List</h2>
      <Table dataSource={data} columns={columns} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default Products;
