import {
  Table,
  Paper,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Typography,
  TextField,
  Stack,
  Pagination,
  TableSortLabel,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./style.css";
import React, { useState } from "react";

function Index(props) {
  const { data, pagination } = props;
  const title = props.title;
  const Keys = Object.keys(data);
  const ids = Object.keys(data[Keys[0]]);
  const rowsPerPage = 10;
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [accordinopen, setAccorninOpen] = useState(true);
  const [initialIds, setInitialIds] = useState();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handlePageInputChange = (event) => {
    const newPage = event.target.value ? parseInt(event.target.value, 10) : "";
    setPage(newPage);
  };

  const handleSortClick = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const sortedIds = ids.slice().sort((id1, id2) => {
    if (sortKey === "") {
      return 0;
    }
    const value1 = data[sortKey][id1];
    const value2 = data[sortKey][id2];
    if (value1 < value2) {
      return sortOrder === "asc" ? -1 : 1;
    } else if (value1 > value2) {
      return sortOrder === "asc" ? 1 : -1;
    } else {
      return 0;
    }
  });

  const maxPages = Math.ceil(ids.length / rowsPerPage);

  const tableHtml = sortedIds
    .slice((page - 1) * rowsPerPage, page * rowsPerPage)
    .map((id, i) => {
      return (
        <TableRow
          key={i}
          sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
        >
          {Keys.map((key, j) => (
            <TableCell key={j} component="th" scope="row">
              {data[key][id]}
            </TableCell>
          ))}
        </TableRow>
      );
    });

    
    
    const handleAmountchange = (enteredAmount) => {
      // Filter the list based on the entered amount
      const filteredIds = ids.filter((id) => data["Amount"][id] > parseInt(enteredAmount));
      
      // Update the displayed list with the filtered results
      setInitialIds(filteredIds);

      
    };

  return (
    <>
      <Grid spacing={1} columns={16}>
        <Grid item xs={16}>
          <h1 className="h1_title"> {title}</h1>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              {Keys.map((key, i) => (
                <TableCell key={i}>
                  <TableSortLabel
                    className="table"
                    active={sortKey === key}
                    direction={sortOrder}
                    onClick={() => handleSortClick(key)}
                    >
                  
                    {key === "Amount" ? (
                          
                      <div>
                                {key}
                        <TextField
                          id="standard-basic"
                          label="Enter Amount to sort"
                          variant="standard"
                          onChange={(e) => handleAmountchange(e.target.value)}
                        /> 
                        
                      </div>
                    ) : (
                      key
                    )}
                    {/* {key} */}
                  </TableSortLabel>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>{tableHtml}</TableBody>
        </Table>
      </TableContainer>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
        sx={{ flexWrap: "wrap" }}
      >
        <Typography variant="caption" sx={{ fontWeight: "bold" }}>
          Showing {ids.length} items
        </Typography>

        <Stack direction="row" alignItems="center">
          <TextField
            label="Page"
            variant="outlined"
            size="small"
            type="number"
            value={page}
            onChange={handlePageInputChange}
            inputProps={{ min: 1, max: maxPages }}
            sx={{ width: "10ch" }}
          />

          <Pagination
            count={maxPages}
            page={page}
            onChange={handleChangePage}
            shape="rounded"
            size="small"
          />
        </Stack>
      </Stack>
      <br />
      <hr />
    </>
  );
}
export default Index;