import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HeaderComponent, ContentComponent } from "./components";

const Mainpage = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 720px;
  height: calc(100vh - 16px);
  margin: 0px auto;
  overflow: hidden;
`;
const Header = styled.header`
  background-color: red;
  width: 720px;
  height: 80px;
`;

const Content = styled.div`
  background-color: orange;
  width: 720px;
  height: 100%;
  overflow-y: scroll;
`;

function App() {
  const [filterKey, setFilterKey] = useState({
    tags: [],
    dateFrom: new Date().toDateString(),
    dateTo: new Date().toDateString(),
  });

  return (
    <Mainpage>
      <Header>
        <HeaderComponent filterKey={filterKey} setFilterKey={setFilterKey} />
      </Header>
      <Content>
        <ContentComponent filterKey={filterKey} />
      </Content>
    </Mainpage>
  );
}

export default App;
