import React, { useState } from "react";
import "./FormSignin.scss";
import { Button, Form, Radio, Input } from "antd";
import Selected from "../../../../components/Selected";

const FormSignin = (props) => {
  const { skills } = props;

  const [form] = Form.useForm();
  const [skill, setSkill] = useState([]);

  return (
    <div className="form-signin">
      <Form
        form={form}
        layout="vertical"
        name="basic"
        initialValues={{
          looking: "Projects",
          skill: skill,
        }}
      >
        <Form.Item label="Looking for?" name="looking">
          <Radio.Group
            name="radiogroup"
            defaultValue={1}
            className="group_item"
          >
            <Radio value={"Projects"}>Projects</Radio>
            <Radio value={"Designs"}>Designs</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!!",
            },
          ]}
        >
          <Input.Password
            placeholder="Enter password"
            className="ip-password"
          />
        </Form.Item>

        <Form.Item name="skill" label="Select Skills">
          <Selected skills={skills} text="Type to search..." />
        </Form.Item>

        <Form.Item className="button_wrapper">
          <Button type="primary" htmlType="submit">
            Create account
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormSignin;
