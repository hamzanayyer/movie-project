import * as axios from "axios";

const apiFirebase = axios.create({
  baseURL: 'https://films-16abb.firebaseio.com/'
});

export default apiFirebase;
