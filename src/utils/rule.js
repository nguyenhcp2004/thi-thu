import * as yup from 'yup'

export const validationSchema = yup.object({
  artName: yup
    .string()
    .min(1, 'Art Name must be at least 1 characters')
    .required('Art Name is required'),
  description: yup.string().required('Description is required'),
  price: yup
    .number()
    .min(10, 'Price must be at least 10')
    .required('Price is required'),
  image: yup
    .string()
    .url('Enter a valid URL')
    .required('Image URL is required'),
  glassSurface: yup.boolean().required('Glass Surface is required'),
  brand: yup
    .string()
    .oneOf(
      ['KingArt', 'Color Splash', 'Edding', 'Arteza'],
      'Select a valid brand'
    ) // select option dùng oneOf
    .required('Brand is required')
})
