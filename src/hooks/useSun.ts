import { getSunrise, getSunset } from 'sunrise-sunset-js';
import moment from 'moment';
import { coords, sunTimes } from '../types';

const formatDate = (date: Date): string => moment(date).format('LTS');

export function useSun({ latitude, longitude }: coords): sunTimes {
    let sunrise: string = '';
    let sunset: string = '';

    if (longitude && latitude) {
        sunrise = formatDate(getSunrise(latitude, longitude));
        sunset = formatDate(getSunset(latitude, longitude));
    }
    
    return { sunrise, sunset }
}
