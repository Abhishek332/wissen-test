import RootReducer from "../reducer";

export type userLogin = {
    loading: boolean;
    userInfo: { token: string } | undefined | null;
    error: string | null;
}

export type homeData = {
    loading: boolean;
    data: rowType[] | undefined | null;
}

export type rowType = {
    id: number;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
}

export type storeType = ReturnType<typeof RootReducer>;