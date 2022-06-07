import React, { useState } from "react";
import {
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";

import classes from "./style.module.css";

// Data from data-store
import { data } from "../../data-store";
import { Link } from "react-router-dom";

const PromotionRecordsPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [dataPerPage, setDataPerPage] = useState(10);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const handleRowsPerPageChange = (event) => {
    setCurrentPage(parseInt(event.target.value));
    // setCurrentPage(0);
    console.log(event.target.value);
  };

  /**
   * Pagination confiurations.
   * Get the index of the first data and the index of the last data for each page
   * Display data only up to the index of last data included
   *
   *
   */

  return (
    <section>
      <h1>Promotion Records</h1>

      <div className={`${classes["btn-wrapper"]}`}>
        <Link to="/promotion-records/add-applicant" className={`${classes["nav__link"]}`}>
          <Button variant="contained">Add applicant</Button>
        </Link>
      </div>

      <div className={`${classes["table-wrapper"]} margin-top`}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left">Applicant Name</TableCell>
                <TableCell align="left">Department</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="center" colSpan={3}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {/**
               *  Iterate through elements in each row(data) and display their content in columns [cells]
               *  Display data up to index that falls within current pagination range. Eg Don't show an item with an
               *  index of 6 on the first page since each page can take only 5 items.
               */}
              {data
                .slice(
                  currentPage * dataPerPage,
                  currentPage * dataPerPage + dataPerPage
                )
                .map((item) => (
                  <TableRow key={item.id}>
                    <TableCell align="left">{item.name}</TableCell>
                    <TableCell align="left">{item.department}</TableCell>
                    <TableCell align="left">{item.status}</TableCell>
                    <TableCell align="left">
                      <Stack
                        spacing={1}
                        direction="row"
                        justifyContent="center"
                      >
                        {item.view}
                        {item.edit}
                        {item.delete}
                      </Stack>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={dataPerPage}
          rowsPerPageOptions={[10, 25, 100]}
          page={currentPage}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </div>
    </section>
  );
};

export default PromotionRecordsPage;
