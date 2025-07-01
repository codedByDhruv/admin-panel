import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';

const Login = () => {
  const onFinish = (values) => {
    const { email, password } = values;

    if (email === 'admin@shopease.com' && password === 'admin123') {
      message.success('Login successful!');
      localStorage.setItem('token', 'dummy-token');
      window.location.href = '/';
    } else {
      message.error('Invalid email or password!');
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)',
      }}
    >
      <Card
        title={<h2 style={{ textAlign: 'center', fontWeight: '600' }}>ShopEase Admin</h2>}
        style={{
          width: '100%',
          maxWidth: 400,
          borderRadius: 16,
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please enter your email' }]}
          >
            <Input placeholder="admin@shopease.com" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please enter your password' }]}
          >
            <Input.Password placeholder="admin123" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{
                backgroundColor: '#000',
                borderColor: '#000',
                color: '#fff',
                fontWeight: '500',
              }}
            >
              Log In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
