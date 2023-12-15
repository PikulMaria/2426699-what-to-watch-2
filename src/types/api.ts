
export enum ApiStatusPendingEnum {
  LOADING = 'LOADING',
  LOAD = 'LOAD',
  ERROR = 'ERROR',
}

export interface ApiStatusState<T> {
  apiData: T | null;
  apiStatus: ApiStatusPendingEnum | null;
  apiError: string | null;
}

export const initialApiState = {
  apiData: null,
  apiStatus: null,
  apiError: null,
};

export interface IAuth {
  email: string;
  password: string;
}


export enum EReducers {
    Films = 'films',
    Auth = 'auth',

}

export const enum ReducerName {
  Authorzation = 'authorizationReducer',
  Main = 'mainReducer',
  Film = 'filmReducer'
}


export const enum AuthorizationStatus {
  Unauthorized = 'UnAuthorized',
  Authorized = 'Authorized',
  Idle = 'Idle'
}
