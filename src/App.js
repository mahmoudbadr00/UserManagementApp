import React, { useState } from 'react';
import { Form, Input, Button, Table, Card } from 'antd';

const UserManagementApp = () => {
  const [users, setUsers] = useState([]);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const newUser = {
      key: users.length + 1,
      name: values.name,
      age: values.age
    };
    setUsers([...users, newUser]);
    form.resetFields();
  };

  const columns = [
    {
      title: 'الرقم',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: 'الاسم',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'العمر',
      dataIndex: 'age',
      key: 'age',
    }
  ];

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '20px' }}>
      <Card title="إضافة مستخدم جديد">
        <Form 
          form={form}
          layout="vertical" 
          onFinish={onFinish}
        >
          <Form.Item 
            name="name" 
            label="الاسم" 
            rules={[{ required: true, message: 'الرجاء إدخال الاسم' }]}
          >
            <Input placeholder="أدخل الاسم" />
          </Form.Item>
          
          <Form.Item 
            name="age" 
            label="العمر" 
            rules={[{ required: true, message: 'الرجاء إدخال العمر' }]}
          >
            <Input type="number" placeholder="أدخل العمر" />
          </Form.Item>
          
          <Form.Item>
            <Button type="primary" htmlType="submit">
              إضافة
            </Button>
          </Form.Item>
        </Form>
      </Card>

      <Card title="قائمة المستخدمين" style={{ marginTop: '20px' }}>
        <Table 
          dataSource={users} 
          columns={columns} 
          pagination={false}
        />
      </Card>
    </div>
  );
};

export default UserManagementApp;