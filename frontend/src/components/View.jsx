import React, { useEffect, useState } from 'react';
import axios from 'axios';
import{Table,TableBody,TableCell,TableHead,TableRow} from '@mui/material';


    // const rows={"moviename":"joji","category":"thriller","director":"dilesh pothan","releasing year":"2022"};
    //            {"moviename":"vettom,"category":"comedy","director":"priyadarshan","releasing year":"2002"}
    // };
    const View = () => {
      const[rows,setRows]=useState([]);
      useEffect(()=>{
        axios.get('http://localhost:4000/list-movies').then((res)=>{
          setRows(res.data);
        })
      },[])
      return(
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Moviename</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Director</TableCell>
            <TableCell align="right">Releasing Year</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Moviename}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.movieName}
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.director}</TableCell>
              <TableCell align="right">{row.releaseYear}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      )
    }

export default View 