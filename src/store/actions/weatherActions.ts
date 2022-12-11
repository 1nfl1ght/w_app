import { ThunkAction } from 'redux-thunk';
import { RootState } from '..';
import { WeatherAction, WeatherData, GET_WEATHER, SET_LOADING, SET_ERROR, WeatherErorr } from '../types/types';

export const getWeather = (city: string): ThunkAction<void, RootState, null, WeatherAction> => {
    return async dispatch => {
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e8b9f7c07e2c0e4d464cdaa4869c2ab6`);

            if (!res.ok) {
                const resData: WeatherErorr = await res.json();
                throw new Error(resData.message);
            }

            const resData: WeatherData = await res.json();
            dispatch({
                type: GET_WEATHER,
                payload: resData,
            });
        } catch(err) {
            dispatch({
                type: SET_ERROR,
                payload: 'err.message',
            });
        }
    }
}

export const setLoading = (): WeatherAction => {
    return {
        type: SET_LOADING
    }
}

export const setError = (): WeatherAction => {
    return {
        type: SET_ERROR,
        payload: ''
    }
}