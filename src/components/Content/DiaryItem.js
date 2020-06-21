import React, { useState } from "react";
import styled from "styled-components";
import { Chip, Modal } from "@material-ui/core";
import moment from "moment";

const DiaryDiv = styled.div`
  height: 130px;
  margin: 10px 40px;
  padding: 10px;
  border: 1px solid red;
  overflow-y: hidden;
  background-color: white;
`;

const ContentDiv = styled.div`
  height: 50px;
  margin: 5px;
  overflow-y: hidden;
`;

const TagsDiv = styled.div`
  height: 25px;
  margin: 5px;
  overflow-y: hidden;
`;

const DiaryItem = (props) => {
  const { date, title, content, tags } = props;
  const [selected, setSelected] = useState(false);
  console.log(selected);
  return (
    <>
      <DiaryDiv onClick={() => setSelected(true)}>
        <div>{moment(date).format("YYYY-MM-DD")}</div>
        <div>{title}</div>
        <ContentDiv>{content}</ContentDiv>
        <TagsDiv>
          {tags.map((v) => (
            <Chip size="small" label={v} />
          ))}
        </TagsDiv>
      </DiaryDiv>
      <Modal
        open={selected}
        onClose={()=>setSelected(false)}
        >
        <DiaryDiv style={{height: '70vh', width: '720px', margin: '70px auto'}}>
          <div style={{height: '20px', marginBottom: '10px'}}>{moment(date).format("YYYY-MM-DD")}</div>
          <div style={{height: '10vh'}}>{title}</div>
          <ContentDiv style={{height: '40vh',overflowY: 'auto'}}>{content}</ContentDiv>
          <TagsDiv style={{height: '10vh',overflowY: 'auto'}}>
            {tags.map((v) => (
              <Chip size="small" label={v} />
            ))}
          </TagsDiv>
        </DiaryDiv>
      </Modal>
    </>
  );
};

export default DiaryItem;
