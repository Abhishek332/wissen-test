const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGIN_NULL = "LOGIN_NULL";

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

export type userLoginDispatchTypes = LoginRequest | LoginSuccess | LoginError | LoginNull;

export { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL };