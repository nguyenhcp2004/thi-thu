import {
  TextField,
  Button,
  Switch,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Container
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { validationSchema } from '../utils/rule'
import { createObject } from '../apis/object'
import { toast } from 'react-toastify'

export default function CreateArt() {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      artName: '',
      price: '',
      image: '',
      glassSurface: false,
      brand: '',
      description: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      createObject(values).then(() => {
        toast.success('Create successfully')
        navigate('/nguyenhcpse180068')
      })
    }
  })
  return (
    <Container maxWidth='lg'>
      <Box
        component='form'
        onSubmit={formik.handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <h1>Create Art</h1>

        <TextField
          fullWidth
          id='artName'
          name='artName'
          label='Art Name'
          value={formik.values.artName}
          onChange={formik.handleChange}
          error={formik.touched.artName && Boolean(formik.errors.artName)}
          helperText={formik.touched.artName && formik.errors.artName}
        />

        <TextField
          fullWidth
          id='price'
          name='price'
          label='Price'
          type='number'
          value={formik.values.price}
          onChange={formik.handleChange}
          error={formik.touched.price && Boolean(formik.errors.price)}
          helperText={formik.touched.price && formik.errors.price}
        />

        <TextField
          fullWidth
          id='description'
          name='description'
          label='Description'
          value={formik.values.description}
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />

        <TextField
          fullWidth
          id='image'
          name='image'
          label='Image URL'
          value={formik.values.image}
          onChange={formik.handleChange}
          error={formik.touched.image && Boolean(formik.errors.image)}
          helperText={formik.touched.image && formik.errors.image}
        />

        <FormControlLabel
          control={
            <Switch
              id='glassSurface'
              name='glassSurface'
              checked={formik.values.glassSurface}
              onChange={formik.handleChange}
            />
          }
          label='Glass Surface'
        />

        <FormControl fullWidth>
          <InputLabel id='brand-label'>Brand</InputLabel>
          <Select
            labelId='brand-label'
            id='brand'
            name='brand'
            value={formik.values.brand}
            label='Brand'
            onChange={formik.handleChange}
            error={formik.touched.brand && Boolean(formik.errors.brand)}
          >
            <MenuItem value='KingArt'>KingArt</MenuItem>
            <MenuItem value='Color Splash'>Color Splash</MenuItem>
            <MenuItem value='Edding'>Edding</MenuItem>
            <MenuItem value='Arteza'>Arteza</MenuItem>
          </Select>
          {formik.touched.brand && Boolean(formik.errors.brand) && (
            <p style={{ color: 'red', fontSize: '0.75rem', marginTop: '4px' }}>
              {formik.errors.brand}
            </p>
          )}
        </FormControl>

        <Button color='primary' variant='contained' type='submit'>
          Submit
        </Button>
      </Box>
    </Container>
  )
}
