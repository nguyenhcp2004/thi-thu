import axios from 'axios'

const apiUrl = 'https://670f53cd3e715186165754de.mockapi.io/art'

export const getAllObjects = async () => {
  try {
    const response = await axios.get(apiUrl)
    return response.data
  } catch (e) {
    console.log(e.toString())
  }
}

export const getObjectById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/${id}`)
    return response.data
  } catch (e) {
    console.log(e.toString())
  }
}

export const createObject = async (object) => {
  try {
    const response = await axios.post(`${apiUrl}`, object)
    return response.data
  } catch (e) {
    console.log(e.toString())
  }
}

export const updateObject = async (id, object) => {
  try {
    const response = await axios.put(`${apiUrl}/${id}`, object)
    return response.data
  } catch (e) {
    console.log(e.toString())
  }
}

export const deleteObject = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}/${id}`)
    return response.data
  } catch (e) {
    console.log(e.toString())
  }
}
