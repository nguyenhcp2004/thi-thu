import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function ArtCard(props) {
  const { art } = props
  const navigate = useNavigate()
  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
        borderRadius: 2,
        boxShadow: 3,
        transition: '0.3s',
        '&:hover': {
          boxShadow: 6,
          transform: 'translateY(-5px)'
        }
      }}
    >
      {/* Ribbon */}
      {art?.glassSurface && (
        <Box
          sx={{
            position: 'absolute',
            top: 10,
            left: -30,
            backgroundColor: 'secondary.main',
            color: 'white',
            padding: '5px 20px',
            transform: 'rotate(-45deg)',
            boxShadow: 2
          }}
        >
          <Typography variant='caption' fontWeight='bold'>
            GlassSurface
          </Typography>
        </Box>
      )}

      <CardMedia
        sx={{
          height: 200,
          objectFit: 'cover',
          borderTopLeftRadius: 2,
          borderTopRightRadius: 2
        }}
        image={art?.image}
        title='image'
        onClick={() => navigate('detail/' + art?.id)}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {art?.artName}
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
          Price: {art?.price}
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
          Description: {art?.description}
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
          Limit Time Deal:{' '}
          {art?.limitedTimeDeal > 0
            ? art?.limitedTimeDeal + '%'
            : 'No limitedTimeDeal'}
        </Typography>
        <Typography variant='body2' color='text.secondary' sx={{ mb: 1 }}>
          Brand: {art?.brand}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          onClick={() => navigate('detail/' + art?.id)}
          variant='outlined' // Thay đổi kiểu nút
          sx={{ borderRadius: 1 }} // Thêm bo tròn cho nút
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  )
}

ArtCard.propTypes = {
  art: PropTypes.object
}
