import { useEffect, useState } from 'react'
import { getAllObjects } from '../apis/object'
import Grid from '@mui/material/Grid2'
import ArtCard from '../components/ArtCard'
import { Container, Typography } from '@mui/material'

export default function Home() {
  const [arts, setArt] = useState([])

  useEffect(() => {
    getAllObjects().then((data) => setArt(data))
  }, [])
  return (
    <Container maxWidth='lg'>
      <Typography variant='h3' sx={{ marginY: 3 }}>
        Home Page
      </Typography>
      <Grid container spacing={2}>
        {arts.map((art) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={art.id}>
            <ArtCard art={art} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
