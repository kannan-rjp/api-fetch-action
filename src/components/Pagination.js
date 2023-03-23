import React from 'react'
import { Box, Pagination } from '@mui/material'

export default function AppPagination() {
  const pageSize = 4;
  return (
    <Box justifyContent={'center'} alignItems={'center'} display={'flex'}
        sx={{
            margin:'20px 0'
        }}
    >
      <Pagination
        count={3}
        color='primary'
      />
    </Box>
  )
}
