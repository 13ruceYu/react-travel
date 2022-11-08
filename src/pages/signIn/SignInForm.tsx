import { Button, Checkbox, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useAppDispatch } from '../../redux/hooks';
import { signIn } from '../../redux/user/slice';
import styles from './SignInForm.module.css'

export const SignInForm: React.FC = () => {
  const loading = useSelector(s => s.user.loading)
  // const error = useSelector(s => s.user.error)
  const jwt = useSelector(s => s.user.token)

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onFinish = (values: any) => {
    console.log('Success:', values);
    dispatch(signIn({
      email: values.username,
      password: values.password
    }))
  };

  useEffect(() => {
    if (jwt !== null) {
      navigate('/')
    }
  }, [jwt, navigate])

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className={styles['sign-in-form']}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};