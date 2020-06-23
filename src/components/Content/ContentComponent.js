import React, { useState } from "react";
import DiaryItem from "./DiaryItem";
import styled from "styled-components";
import { Button, Modal, TextField } from "@material-ui/core";

const AddDiaryDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  width: 720px;
  margin: 70px auto;
  padding: 10px;
  border: 1px solid red;
  overflow-y: hidden;
  background-color: white;
`;

const ContentComponent = (props) => {
  const { filterKey } = props;
  const [diaryList, setDiaryList] = useState([
    {
      date: new Date("2020-06-24"),
      title: "title",
      content:
        "content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장content. 일기장",
      tags: ["태그1112323231", "태그33"],
    },
    {
      date: new Date("2020-06-25"),
      title: "title",
      content: "content. 일기장",
      tags: ["태그1", "태그33"],
    },
    {
      date: new Date("2020-06-27"),
      title: "title",
      content: "content. 일기장",
      tags: ["태그1", "태그33"],
    },
  ]);
  const [openAddDiary, setOpenAddDiary] = useState(false);
  const [date, setDate] = useState(null); // date Object
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handleAddDiary = () => {
    let isDataStable = true;
    if (isNaN(Date.parse(date))) {
      alert("올바른 날짜를 입력하세요!");
      isDataStable = false;
    }
    if (title === "") {
      alert("제목이 비어있습니다!");
      isDataStable = false;
    }
    if (content === "") {
      alert("내용이 비어있습니다!");
      isDataStable = false;
    }
    if (tags === "") {
      alert("태그가 비어있습니다!");
      isDataStable = false;
    }
    if (
      tags.split(",").filter((v, i, a) => a.indexOf(v) === i).length !==
      tags.split(",").length
    ) {
      alert("중복 태그가 있습니다!");
      isDataStable = false;
    }

    if (isDataStable) {
      const newIndex = diaryList.findIndex((v) => v.date > new Date(date));
      let tempDiary = diaryList.map((v) => v);
      if (newIndex === -1) {
        tempDiary.push({
          date: new Date(date),
          title: title,
          content: content,
          tags: tags.split(","),
        });
        setDiaryList(tempDiary);
      } else {
        tempDiary.splice(newIndex, 0, {
          date: new Date(date),
          title: title,
          content: content,
          tags: tags.split(","),
        });
        setDiaryList(tempDiary);
      }

      handleCloseAddDiary();
    }
  };

  const handleCloseAddDiary = () => {
    setOpenAddDiary(false);
    setDate(null);
    setTitle("");
    setContent("");
    setTags("");
  };

  return (
    <>
      {diaryList
        .filter((v) => {
          let isValidate = true;

          if (filterKey.dateFrom !== null) {
            if (filterKey.dateFrom > v.date) isValidate = false;
          }
          if (filterKey.dateTo !== null) {
            if (filterKey.dateTo < v.date) isValidate = false;
          }
          if (filterKey.tags !== null) {
            if (filterKey.tags.some((tag) => !v.tags.includes(tag)))
              isValidate = false;
          }
          return isValidate;
        })
        .map((v) => (
          <DiaryItem {...v} />
        ))}
      <Button
        variant="contained"
        style={{ position: "sticky", bottom: "0" }}
        onClick={() => setOpenAddDiary(true)}
      >
        일기 추가
      </Button>
      <Modal open={openAddDiary} onClose={handleCloseAddDiary}>
        <AddDiaryDiv>
          <TextField
            id="date"
            label="날짜"
            style={{ width: "200px" }}
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="제목"
            style={{ width: "200px" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="내용"
            value={content}
            multiline
            rows={10}
            onChange={(e) => setContent(e.target.value)}
          />
          <TextField
            label="태그"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <Button
            variant="contained"
            onClick={handleAddDiary}
            style={{ width: "70px", marginTop: "20px" }}
          >
            제출
          </Button>
        </AddDiaryDiv>
      </Modal>
    </>
  );
};

export default ContentComponent;
