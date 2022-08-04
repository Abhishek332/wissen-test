import { rowType } from "./storeType";

const LOGIN_REQUEST = "LOGIN_REQUEST",
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_FAIL = "LOGIN_FAIL",
    LOGIN_NULL = "LOGIN_NULL",
    HOMEDATA_REQUEST = "HOMEDATA_REQUEST",
    HOMEDATA_SUCCESS = "HOMEDATA_SUCCESS";


interface LoginRequest {
    type: typeof LOGIN_REQUEST;
}

interface LoginSuccess {
    type: typeof LOGIN_SUCCESS;
    payload: { token: string; };
}

interface LoginError {
    type: typeof LOGIN_FAIL;
    payload: string;
}

interface LoginNull {
    type: typeof LOGIN_NULL;
}

export interface homeDataDispatchTypes {
    type: typeof HOMEDATA_REQUEST | typeof HOMEDATA_SUCCESS;
    payload?: rowType[];
}


export type userLoginDispatchTypes = LoginRequest | LoginSuccess | LoginError | LoginNull;

export { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_NULL, HOMEDATA_REQUEST, HOMEDATA_SUCCESS };