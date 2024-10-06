import axios from "axios"
import { GET_ALL_BOOKS } from "./constant"

export const getAllBooks = async () => {
  const response = await axios.get(GET_ALL_BOOKS)

  return response.data
}