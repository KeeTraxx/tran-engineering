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
  CompletionResponse,
  NumBoolean,
} from '../models';
import {
    CompletionResponseFromJSON,
    CompletionResponseToJSON,
    NumBooleanFromJSON,
    NumBooleanToJSON,
} from '../models';

export interface TestRequest {
    term: string;
    nofavorites?: NumBoolean;
    showIds?: NumBoolean;
    showCoordinates?: NumBoolean;
}

/**
 * 
 */
export class AutocompleteApi extends runtime.BaseAPI {

    /**
     * Autocompletion for station names
     */
    async testRaw(requestParameters: TestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CompletionResponse>>> {
        if (requestParameters.term === null || requestParameters.term === undefined) {
            throw new runtime.RequiredError('term','Required parameter requestParameters.term was null or undefined when calling test.');
        }

        const queryParameters: any = {};

        if (requestParameters.term !== undefined) {
            queryParameters['term'] = requestParameters.term;
        }

        if (requestParameters.nofavorites !== undefined) {
            queryParameters['nofavorites'] = requestParameters.nofavorites;
        }

        if (requestParameters.showIds !== undefined) {
            queryParameters['show_ids'] = requestParameters.showIds;
        }

        if (requestParameters.showCoordinates !== undefined) {
            queryParameters['show_coordinates'] = requestParameters.showCoordinates;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/completion`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CompletionResponseFromJSON));
    }

    /**
     * Autocompletion for station names
     */
    async test(requestParameters: TestRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CompletionResponse>> {
        const response = await this.testRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
