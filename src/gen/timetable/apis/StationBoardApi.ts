/* tslint:disable */
/* eslint-disable */
/**
 * timetable.search.ch
 * A REST API for public transportation timetables
 *
 * The version of the OpenAPI document: 1.0.11
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  NumBoolean,
  StationBoardResponse,
} from '../models';
import {
    NumBooleanFromJSON,
    NumBooleanToJSON,
    StationBoardResponseFromJSON,
    StationBoardResponseToJSON,
} from '../models';

export interface StationboardGetRequest {
    stop: string;
    date?: string;
    time?: string;
    mode?: StationboardGetModeEnum;
    limit?: number;
    showTracks?: NumBoolean;
    showSubsequentStops?: NumBoolean;
    showDelays?: NumBoolean;
    showTrackchanges?: NumBoolean;
    transportationTypes?: StationboardGetTransportationTypesEnum;
}

/**
 * 
 */
export class StationBoardApi extends runtime.BaseAPI {

    /**
     * Get station board
     */
    async stationboardGetRaw(requestParameters: StationboardGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StationBoardResponse>> {
        if (requestParameters.stop === null || requestParameters.stop === undefined) {
            throw new runtime.RequiredError('stop','Required parameter requestParameters.stop was null or undefined when calling stationboardGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.stop !== undefined) {
            queryParameters['stop'] = requestParameters.stop;
        }

        if (requestParameters.date !== undefined) {
            queryParameters['date'] = requestParameters.date;
        }

        if (requestParameters.time !== undefined) {
            queryParameters['time'] = requestParameters.time;
        }

        if (requestParameters.mode !== undefined) {
            queryParameters['mode'] = requestParameters.mode;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.showTracks !== undefined) {
            queryParameters['show_tracks'] = requestParameters.showTracks;
        }

        if (requestParameters.showSubsequentStops !== undefined) {
            queryParameters['show_subsequent_stops'] = requestParameters.showSubsequentStops;
        }

        if (requestParameters.showDelays !== undefined) {
            queryParameters['show_delays'] = requestParameters.showDelays;
        }

        if (requestParameters.showTrackchanges !== undefined) {
            queryParameters['show_trackchanges'] = requestParameters.showTrackchanges;
        }

        if (requestParameters.transportationTypes !== undefined) {
            queryParameters['transportation_types'] = requestParameters.transportationTypes;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/stationboard`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StationBoardResponseFromJSON(jsonValue));
    }

    /**
     * Get station board
     */
    async stationboardGet(requestParameters: StationboardGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StationBoardResponse> {
        const response = await this.stationboardGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}

/**
 * @export
 */
export const StationboardGetModeEnum = {
    Arrival: 'arrival',
    Depart: 'depart'
} as const;
export type StationboardGetModeEnum = typeof StationboardGetModeEnum[keyof typeof StationboardGetModeEnum];
/**
 * @export
 */
export const StationboardGetTransportationTypesEnum = {
    Train: 'train',
    Tram: 'tram',
    Bus: 'bus',
    Ship: 'ship',
    Cableway: 'cableway'
} as const;
export type StationboardGetTransportationTypesEnum = typeof StationboardGetTransportationTypesEnum[keyof typeof StationboardGetTransportationTypesEnum];
