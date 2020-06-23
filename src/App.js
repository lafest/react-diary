import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HeaderComponent, ContentComponent } from "./components";

const Mainpage = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 800px;
  height: calc(100vh - 16px);
  margin: 0px auto;
  overflow: hidden;
`;
const Header = styled.header`
  background-color: white;
  width: 800px;
  height: 80px;
`;

const Content = styled.div`
  position:relative;
  background-color: orange;
  width: 800px;
  height: 100%;
  overflow-y: scroll;
`;

function App() {
  const [filterKey, setFilterKey] = useState({
    tags: null, //array
    dateFrom: null, //Date object
    dateTo: null, //Date object
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
