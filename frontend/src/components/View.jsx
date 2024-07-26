import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

// const rows=[{"movieName":"Kilukkam","category":"Comedy","director":"abc","releaseYear":"1991"},
//     {"movieName":"Turbo","category":"Action","director":"abc","releaseYear":"2024"}];

const View = () => {
  const [rows,setRows]=useState([]);
  const navigate=useNavigate
  useEffect(()=>{
    axios.get('http://localhost:4000/movies').then((res)=>{
      setRows(res.data);
    })
  },[])
  let deleteMovie=(d)=>{
  axios.delete('http://localhost:4000/moviesremoval/'+d).then((res)=>{
    alert('Deleted')
    windows.location.reload()
  })
  .catch((error)=>{
    alert=('error')
  })
}
var navigate=useNavigate();
let upDateMovie=(movie)=>{
  Navigate('/new-movies',{state:{movie}})
}
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell> Movie Name</TableCell>
          <TableCell align="right">Category</TableCell>
          <TableCell align="right">Movie Director</TableCell>
          <TableCell align="right">Release Year</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.movieName}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.movieName}
            </TableCell>
            <TableCell align="right">{row.category}</TableCell>
            <TableCell align="right">{row.director}</TableCell>
            <TableCell align="right">{row.releaseYear}</TableCell>
            <Button variant="contained" color="secondary"onClickCapture={()=>{upDateMovie(row)}}>Edit</Button>
            <Button variant="contained" color="secondary"
            onClick={()=>{deleteMovie(row._id)}}>Delete</Button>
            </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}
export default View