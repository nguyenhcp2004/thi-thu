import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { Box } from '@mui/material'

export default function MainLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <NavBar />
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
    </Box>
  )
}
