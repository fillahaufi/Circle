import axios from "axios"
import { GET_BOOKS } from "./constant"

export const getAllBooks = async () => {
  const response = await axios.get(GET_BOOKS)

  return response.data
}

export const getBookById = async (id: string) => {
  const response = await axios.get(`${GET_BOOKS}/${id}`)

  return response.data
}

export const purchaseBook = async (id: string) => {
  const response = await axios.post(`${GET_BOOKS}/${id}/purchase`)

  return response.data
}