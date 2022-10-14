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
  StationResponse,
} from '../models';
import {
    StationResponseFromJSON,
    StationResponseToJSON,
} from '../models';

export interface StationGetRequest {
    stop: string;
}

/**
 * 
 */
export class StationApi extends runtime.BaseAPI {

    /**
     * Get station information
     */
    async stationGetRaw(requestParameters: StationGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<StationResponse>> {
        if (requestParameters.stop === null || requestParameters.stop === undefined) {
            throw new runtime.RequiredError('stop','Required parameter requestParameters.stop was null or undefined when calling stationGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.stop !== undefined) {
            queryParameters['stop'] = requestParameters.stop;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/station`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StationResponseFromJSON(jsonValue));
    }

    /**
     * Get station information
     */
    async stationGet(requestParameters: StationGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<StationResponse> {
        const response = await this.stationGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}