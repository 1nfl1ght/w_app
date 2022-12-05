export type Weather = {
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
    }
}