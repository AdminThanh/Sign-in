import "./Selected.scss";
import React, { useEffect, useState } from "react";
import { Input, Tag } from "antd";

const Selected = (props) => {
  const { text, skills } = props;
  const [inputValue, setInputValue] = useState("");
  const [listSkill, setListSkill] = useState(skills || []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      if (inputValue) {
        setListSkill([...listSkill, inputValue.trim()]);
        setInputValue("");
      }
    }
  };

  const handleTagClose = (removedTag) => {
    const updatedList = listSkill.filter((tag) => tag !== removedTag);
    // setListSkill(updatedList);
  };

  return (
    <div className="selected_wrapper">
      <Input
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleInputKeyDown}
        placeholder={text}
      />
      <div className="list_skill">
        {listSkill &&
          listSkill.map((skill, index) => (
            <Tag key={index} closable onClose={() => handleTagClose(skill)}>
              {skill}
            </Tag>
          ))}
      </div>
    </div>
  );
};

export default Selected;
