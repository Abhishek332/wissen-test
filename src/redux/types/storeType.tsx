import RootReducer from "../reducer";

export type userLogin = {
    loading: boolean;
    userInfo: any;
    error: string | null;
}

export type storeType = ReturnType<typeof RootReducer>;