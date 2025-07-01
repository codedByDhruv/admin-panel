import React from 'react';
import { Card, Form, Input, Button, Select, Divider } from 'antd';

const { Option } = Select;

const Settings = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Settings Updated:', values);
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-6">Settings</h2>

      <div className="grid grid-cols-2 gap-6">
        {/* Profile Settings */}
        <Card title="Profile Settings">
          <Form form={form} layout="vertical" onFinish={onFinish} initialValues={{
            name: 'Admin User',
            email: 'admin@example.com',
          }}>
            <Form.Item name="name" label="Full Name" rules={[{ required: true }]}>
              <Input placeholder="Enter your name" />
            </Form.Item>

            <Form.Item name="email" label="Email Address" rules={[{ required: true, type: 'email' }]}>
              <Input placeholder="Enter your email" />
            </Form.Item>

            <Form.Item name="password" label="Password">
              <Input.Password placeholder="Change password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Update Profile
              </Button>
            </Form.Item>
          </Form>
        </Card>

        {/* Store Settings */}
        <Card title="Store Settings">
          <Form layout="vertical" onFinish={(values) => console.log('Store settings:', values)} initialValues={{
            storeName: 'ShopEase',
            currency: 'USD',
          }}>
            <Form.Item name="storeName" label="Store Name" rules={[{ required: true }]}>
              <Input placeholder="Enter store name" />
            </Form.Item>

            <Form.Item name="currency" label="Currency" rules={[{ required: true }]}>
              <Select>
                <Option value="USD">USD - US Dollar</Option>
                <Option value="EUR">EUR - Euro</Option>
                <Option value="INR">INR - Indian Rupee</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Save Settings
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
