import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-8f1ad.cloudfunctions.net/api",
  // the API (cloud function ) url
});

export default instance;

// https://us-central1-clone-8f1ad.cloudfunctions.net/api

// http://localhost:5001/clone-8f1ad/us-central1/api
