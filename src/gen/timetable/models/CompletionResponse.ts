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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CompletionResponse
 */
export interface CompletionResponse {
    /**
     * Name of the stop
     * @type {string}
     * @memberof CompletionResponse
     */
    label: string;
    /**
     * HTML for autocompletion
     * @type {string}
     * @memberof CompletionResponse
     */
    html: string;
    /**
     * Icon class for unknown icon library
     * @type {string}
     * @memberof CompletionResponse
     */
    iconClass: string;
    /**
     * LV03 X coordinate
     * @type {number}
     * @memberof CompletionResponse
     */
    x?: number;
    /**
     * LV03 Y coordinate
     * @type {number}
     * @memberof CompletionResponse
     */
    y?: number;
    /**
     * WGS84 latitude
     * @type {number}
     * @memberof CompletionResponse
     */
    lat?: number;
    /**
     * WGS84 longitude
     * @type {number}
     * @memberof CompletionResponse
     */
    lon?: number;
}

/**
 * Check if a given object implements the CompletionResponse interface.
 */
export function instanceOfCompletionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "label" in value;
    isInstance = isInstance && "html" in value;
    isInstance = isInstance && "iconClass" in value;

    return isInstance;
}

export function CompletionResponseFromJSON(json: any): CompletionResponse {
    return CompletionResponseFromJSONTyped(json, false);
}

export function CompletionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompletionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': json['label'],
        'html': json['html'],
        'iconClass': json['iconClass'],
        'x': !exists(json, 'x') ? undefined : json['x'],
        'y': !exists(json, 'y') ? undefined : json['y'],
        'lat': !exists(json, 'lat') ? undefined : json['lat'],
        'lon': !exists(json, 'lon') ? undefined : json['lon'],
    };
}

export function CompletionResponseToJSON(value?: CompletionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label': value.label,
        'html': value.html,
        'iconClass': value.iconClass,
        'x': value.x,
        'y': value.y,
        'lat': value.lat,
        'lon': value.lon,
    };
}
