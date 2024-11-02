import { useEffect, useState } from 'react'
import { getObjectById } from '../apis/object'
import { useParams } from 'react-router-dom'
import { Box, Container, Typography } from '@mui/material'

export default function Detail() {
  const { id } = useParams()

  const [art, setArt] = useState(null)

  useEffect(() => {
    getObjectById(id).then((data) => {
      if (data) setArt(data)
    })
  }, [id])

  return (
    <Container maxWidth='md' sx={{ marginY: 3 }}>
      <Box
        sx={{
          padding: 3,
          borderRadius: 2,
          boxShadow: 2,
          backgroundColor: '#fafafa',
          textAlign: 'left'
        }}
      >
        <Typography
          variant='h3'
          sx={{ marginBottom: 2, fontWeight: 'bold', textAlign: 'center' }}
        >
          Art Details
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 3
          }}
        >
          <img
            src={art?.image}
            alt={art?.artName}
            style={{
              width: '400px',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '12px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
            }}
          />
        </Box>
        <Typography variant='h5' sx={{ fontWeight: '600', color: '#00796b' }}>
          {art?.artName}
        </Typography>
        <Typography
          variant='body1'
          sx={{ margin: '10px 0', fontWeight: 'bold', color: '#e91e63' }}
        >
          Price: ${art?.price}
        </Typography>
        <Typography variant='body2' sx={{ margin: '10px 0', lineHeight: 1.6 }}>
          Description: {art?.description}
        </Typography>
        <Typography variant='body2' sx={{ margin: '5px 0' }}>
          Glass Surface: <strong>{art?.glassSurface ? 'Yes' : 'No'}</strong>
        </Typography>
        <Typography variant='body2' sx={{ margin: '5px 0' }}>
          Brand: <strong>{art?.brand}</strong>
        </Typography>
        <Typography variant='body2' sx={{ margin: '5px 0' }}>
          Limited Time Deal:{' '}
          <strong>
            {art?.limitedTimeDeal ? 'Available' : 'Not Available'}
          </strong>
        </Typography>
      </Box>
    </Container>
  )
}
