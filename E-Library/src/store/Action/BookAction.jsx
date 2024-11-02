import { instance } from "../../utils/Axios";
import { load } from "../reducers/BookSlice"


export const loadBooks = () => async (dispatch, getstate) => {

    try {
        const {data} = await instance.get('volumes?q=dragon');
        dispatch(load(data.items))
      } catch (error) {
        console.log(error)
      }
}