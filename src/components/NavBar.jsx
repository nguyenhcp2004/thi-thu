import { AppBar, Box, Button, Toolbar } from '@mui/material'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {
  const navigate = useNavigate()

  return (
    <AppBar position='static' sx={{ backgroundColor: 'primary.main' }}>
      <Toolbar sx={{ paddingX: { xs: '10px', md: '30px', lg: '60px' } }}>
        <Box>
          <Button onClick={() => navigate('/')} color='inherit'>
            Home
          </Button>
          <Button
            onClick={() => navigate('/nguyenhcpse180068')}
            color='inherit'
          >
            Dashboard
          </Button>
          <Button onClick={() => navigate('/contact')} color='inherit'>
            Contact
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
