import React from "react";
import "./FormInfo.scss";
import { Avatar, List } from "antd";

const FormInfo = (props) => {
  const { data } = props;
  return (
    <div className="signin-left_content">
      <div className="signin-left_content-title">
        <span>FLEESO</span>
      </div>

      <div className="signin-left_content-description">
        <h3>Start you journey wisth us.</h3>
        <div className="desc">
          <p>
            Discovery the world's best community of freelancers and business
            owners.
          </p>
        </div>
      </div>

      <List
        className="list_feedback"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item className="list_feedback_item" key={index}>
            {item.content}
            <List.Item.Meta
              avatar={<Avatar src={item.image} />}
              shape="square"
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.job}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default FormInfo;
