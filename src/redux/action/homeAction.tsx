import { Dispatch } from "redux";
import { axios } from "../../api/axios";
import { homeDataDispatchTypes } from "../types/actionTypes";
import { HOMEDATA_REQUEST, HOMEDATA_SUCCESS } from "../types/actionTypes";

export const homeData =
    () =>
        async (dispatch: Dispatch<homeDataDispatchTypes>) => {
            dispatch({ type: HOMEDATA_REQUEST });
            try {
                const response = await axios.get("/unknown/");
                switch (response.status) {
                    case 200: {
                        dispatch({ type: HOMEDATA_SUCCESS, payload: response.data.data });
                    }
                }
            } catch (error: any) {
                const message = error.response.data.error;
                console.log("error : ", message);
            }
        };
