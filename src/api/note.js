import axios from "axios";

const API = "http://127.0.0.1:8000/api/notes/";

export const getNotes = () => axios.get(API);
export const createNote = (data) => axios.post(API, data);