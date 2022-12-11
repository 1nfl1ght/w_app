export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';


export interface Weather {
    description: string,
    icon: string,
    id: number,
    main: string,
}

export interface WeatherData {
    coord: {
        lon: number,
        lat: number,
    },
    main: {
        temp: number,
        feels_like: number,
        pressure: number,
        humidity: number,
    },
    wind: {
        speed: number,
    },
    sys: {
        country: string,
    },
    name: string,
}

export interface WeatherErorr {
    code: string,
    message: string,
}

export interface WeatherState {
    data: WeatherData | null,
    loading: boolean,
    error: string,
}

interface GetWeatherAction {
    type: typeof GET_WEATHER,
    payload: WeatherData,
}

interface SetLoadingAction {
    type: typeof SET_LOADING,
}

interface SetErrorAction {
    type: typeof SET_ERROR,
    payload: string,
}

export type WeatherAction = GetWeatherAction | SetLoadingAction | SetErrorAction;

export interface AlertAction {
    type: typeof SET_ALERT,
    payload: string,
}

export interface AlertState {
    message: string,
}