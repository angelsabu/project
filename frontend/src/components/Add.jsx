import {Box,Button,TextField} from '@mui/material'
import React from 'react'

const Add = () => {
  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <TextField id="outlined-basic" label="Movie Name"variant="outlined" />
    <TextField id="filled-basic" label="Movie Category"variant="filled" />
    <TextField id="standard-basic" label="Movie Direction"variant="standard"/><br/>
    <Button variant="contained">Submit</Button>
  </Box>
);
}

export default Add