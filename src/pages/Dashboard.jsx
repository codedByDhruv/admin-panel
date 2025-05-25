import { Card } from 'antd';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {Array(4).fill(0).map((_, i) => (
        <Card key={i} title={`Card ${i + 1}`} bordered>
          Small Card
        </Card>
      ))}
      {Array(2).fill(0).map((_, i) => (
        <Card key={i} title={`Big Card ${i + 1}`} bordered className="col-span-2">
          Big Card Content
        </Card>
      ))}
    </div>
  );
};

export default Dashboard;
