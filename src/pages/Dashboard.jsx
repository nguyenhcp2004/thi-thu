import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteObject, getAllObjects, updateObject } from '../apis/object'
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { toast } from 'react-toastify'
import { validationSchema } from '../utils/rule'
import { useFormik } from 'formik'

export default function Dashboard() {
  const [arts, setArts] = useState([])
  const [open, setOpen] = useState(false)
  const [openForm, setOpenForm] = useState(false)
  const [art, setArt] = useState({})
  const navigate = useNavigate()

  //gọi api getAll
  const getAPI = () => {
    getAllObjects().then((data) => {
      if (data) {
        //nếu có logic sắp xếp gì thực hiện ở đây
        //đây là ví dụ sắp xếp theo id
        //thường thì ở đây mockApi luôn trả về data là các object từ cũ tới mới
        //cho nhanh có thể dùng data.reverse() để lúc tạo mới là nó lên đầu luôn
        data.sort((a, b) => {
          if (a.id < b.id) return -1
          if (a.id > b.id) return 1
          return 0
        })

        setArts(data)
      }
    })
  }

  // form để validate cho update form
  const formik = useFormik({
    initialValues: {
      id: '',
      artName: '',
      price: '',
      description: '',
      image: '',
      glassSurface: false,
      brand: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values)
      updateObject(values.id, values).then(() => {
        getAPI()
        toast.success('Update successfully')
        setOpenForm(false)
      })
    }
  })

  useEffect(() => {
    getAPI()
  }, [])

  const handleAddClick = () => {
    navigate('/nguyenhcpse180068/add')
  }

  const handleClickOpen = (art) => {
    setOpen(true)
    setArt(art)
  }

  const handleOpenForm = (art) => {
    setOpenForm(true)
    setArt(art)
    formik.setValues(art)
  }

  const handleClose = () => {
    setOpen(false)
  }
  const handleCloseForm = () => {
    setOpenForm(false)
  }

  const handleDelete = () => {
    deleteObject(art.id).then(() => {
      getAPI()
    })
    toast.success('Delete successfully')
    setOpen(false)
  }

  return (
    <Container maxWidth='xl'>
      <Typography variant='h3' marginY={2}>
        Dashboard
      </Typography>
      <Button
        variant='contained'
        color='primary'
        onClick={handleAddClick}
        sx={{ marginBottom: 2 }}
      >
        Add Art Tool
      </Button>
      <TableContainer component={Paper}>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>
            Are you sure you want to delete this product ?
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'>
              The {art?.artName ?? 'tool'} will be permanently deleted
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button color='error' onClick={handleDelete} autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Glass Surface</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Limited Time Deal</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arts.map((tool) => (
              <TableRow key={tool.id}>
                <TableCell>{tool.id}</TableCell>
                <TableCell>{tool.artName}</TableCell>
                <TableCell>{tool.price}</TableCell>
                <TableCell>{tool.description}</TableCell>
                <TableCell>{tool.glassSurface ? 'Yes' : 'No'}</TableCell>
                <TableCell>
                  <img src={tool.image} alt={tool.artName} width='50' />
                </TableCell>
                <TableCell>{tool.brand}</TableCell>
                <TableCell>{tool.limitedTimeDeal}</TableCell>
                <TableCell>
                  <Button
                    variant='contained'
                    onClick={() => handleOpenForm(tool)}
                  >
                    Update
                  </Button>
                  <Button
                    variant='contained'
                    color='error'
                    onClick={() => handleClickOpen(tool)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Dialog
          open={openForm}
          onClose={handleCloseForm}
          PaperProps={{
            component: 'form',
            onSubmit: formik.handleSubmit
          }}
        >
          <DialogTitle>Update product</DialogTitle>
          <DialogContent>
            <TextField
              fullWidth
              id='artName'
              name='artName'
              label='Art Name'
              value={formik.values.artName}
              onChange={formik.handleChange}
              error={formik.touched.artName && Boolean(formik.errors.artName)}
              helperText={formik.touched.artName && formik.errors.artName}
              sx={{ marginY: 1 }}
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
              sx={{ marginY: 1 }}
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
              helperText={
                formik.touched.description && formik.errors.description
              }
              sx={{ marginY: 1 }}
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
              sx={{ marginY: 1 }}
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
              sx={{ marginY: 1 }}
            />

            <FormControl fullWidth sx={{ marginY: 1 }}>
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
                <p
                  style={{
                    color: 'red',
                    fontSize: '0.75rem',
                    marginTop: '4px'
                  }}
                >
                  {formik.errors.brand}
                </p>
              )}
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseForm}>Cancel</Button>
            <Button type='submit'>Update</Button>
          </DialogActions>
        </Dialog>
      </TableContainer>
    </Container>
  )
}
