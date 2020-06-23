import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { TextField, Button, Checkbox } from "@material-ui/core";

const HeaderComponent = (props) => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [tags, setTags] = useState([]);
  const [isFiltered, setIsFiltered] = useState({
    dateFrom: false,
    dateTo: false,
    tags: false,
  });
  const { filterKey, setFilterKey } = props;

  const handleReset = () => {
    setIsFiltered({ dateFrom: false, dateTo: false, tags: false });
    setFilterKey({ dateFrom: null, dateTo: null, tags: null });
    setDateFrom("");
    setDateTo("");
    setTags([]);
  };

  const handleSearch = () => {
    let isDataStable = true;
    if (isFiltered.dateFrom && isNaN(Date.parse(dateFrom))) {
      alert("올바른 날짜를 입력하세요!(dateFrom)");
      isDataStable = false;
    }
    if (isFiltered.dateTo && isNaN(Date.parse(dateTo))) {
      alert("올바른 날짜를 입력하세요!(dateTo)");
      isDataStable = false;
    }
    if (isFiltered.tags) {
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
    }

    if (isDataStable) {
      setFilterKey({
        dateFrom: isFiltered.dateFrom ? new Date(dateFrom) : null,
        dateTo: isFiltered.dateTo ? new Date(dateTo) : null,
        tags: isFiltered.tags ? tags.split(",") : null,
      });
    }
  };

  return (
    <Grid container justify="space-around" style={{ marginTop: "10px" }}>
      <TextField
        id="dateFrom"
        label="dateFrom"
        type="date"
        value={dateFrom}
        onChange={(e) => setDateFrom(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Checkbox
        checked={isFiltered.dateFrom}
        onChange={(e) =>
          setIsFiltered({ ...isFiltered, dateFrom: e.target.checked })
        }
      />
      <TextField
        id="dateTo"
        label="dateTo"
        type="date"
        value={dateTo}
        onChange={(e) => setDateTo(e.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Checkbox
        checked={isFiltered.dateTo}
        onChange={(e) =>
          setIsFiltered({ ...isFiltered, dateTo: e.target.checked })
        }
      />
      <TextField
        id="standard-basic"
        label="태그"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <Checkbox
        checked={isFiltered.tags}
        onChange={(e) =>
          setIsFiltered({ ...isFiltered, tags: e.target.checked })
        }
      />
      <Button size="small" variant="contained" onClick={handleSearch}>
        검색
      </Button>
      <Button size="small" variant="contained" onClick={handleReset}>
        초기화
      </Button>
    </Grid>
  );
};

export default HeaderComponent;
