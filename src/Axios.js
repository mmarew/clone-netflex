import Axios from "axios";
const instance = Axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
// console.log(instance.get("/movies/top_rated"))
// instance.get("/movies/top_rated");
export default instance;
