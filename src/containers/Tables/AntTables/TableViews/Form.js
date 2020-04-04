import React from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

// import './App.css';

const Demo = () =>{
  return (
    <div>
      <SwaggerUI url="http://13.235.229.191:3001/docs/json" />
      <SwaggerUI url="http://13.235.229.191:3000/docs/json" />
      <SwaggerUI url="http://13.235.229.191:3006/docs/json" />
      <SwaggerUI url="http://13.235.229.191:3004/docs/json" />
      <SwaggerUI url="http://13.235.229.191:3007/docs/json" />
    </div>
  );
}

export default Demo;

// import React from "react";
// import { Form, Input, Button, Checkbox } from "antd";

// const layout = {
//   labelCol: {
//     span: 8
//   },
//   wrapperCol: {
//     span: 16
//   }
// };
// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16
//   }
// };

// const Demo = () => {
//   const onFinish = values => {
//     console.log("Success:", values);
//   };

//   const onFinishFailed = errorInfo => {
//     console.log("Failed:", errorInfo);
//   };

//   return (
//     <Form
//       {...layout}
//       name='basic'
//       initialValues={{
//         remember: true
//       }}
//       onFinish={onFinish}
//       onFinishFailed={onFinishFailed}>
//       <Form.Item
//         label='* From-Email'
//         name='username'
//         rules={[
//           {
//             required: true,
//             message: "Email of the sender"
//           }
//         ]}>
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label='to object'
//         name='text'
//         rules={[
//           {
//             required: true,
//             message: "Please input your password!"
//           }
//         ]}>
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label='* message'
//         name='text'
//         rules={[
//           {
//             required: true,
//             message: "Please input your password!"
//           }
//         ]}>
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label='sms'
//         name='dropdown'
//         rules={[
//           {
//             required: true,
//             message: "Please input your password!"
//           }
//         ]}>
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label='mail'
//         name='text'
//         rules={[
//           {
//             required: true,
//             message: "Please input your password!"
//           }
//         ]}>
//         <Input />
//       </Form.Item>

//       <Form.Item
//         label='notification'
//         name='text'
//         rules={[
//           {
//             required: true,
//             message: "Please input your password!"
//           }
//         ]}>
//         <Input />
//       </Form.Item>

//       {/* <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
//         <Checkbox>Remember me</Checkbox>
//       </Form.Item> */}

//       <Form.Item {...tailLayout}>
//         <Button type='primary' htmlType='submit'>
//           Fetch
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default Demo;
