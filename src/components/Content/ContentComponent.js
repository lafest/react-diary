import React, { useState } from "react";
import DiaryItem from "./DiaryItem";

const ContentComponent = (props) => {
  const { filterKey } = props;
  const [diaryList, setDiaryList] = useState([]);

  return (
    <>
      {diaryList.map((v, i) => (
        <DiaryItem
          {...v}
        />
      ))}
    </>
  );
};

export default ContentComponent;
