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
 * @interface Stop
 */
export interface Stop {
    /**
     * Stop ID
     * @type {string}
     * @memberof Stop
     */
    stopid: string;
    /**
     * Station name
     * @type {string}
     * @memberof Stop
     */
    name: string;
    /**
     * Departure time
     * @type {string}
     * @memberof Stop
     */
    departure: string;
}

/**
 * Check if a given object implements the Stop interface.
 */
export function instanceOfStop(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "stopid" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "departure" in value;

    return isInstance;
}

export function StopFromJSON(json: any): Stop {
    return StopFromJSONTyped(json, false);
}

export function StopFromJSONTyped(json: any, ignoreDiscriminator: boolean): Stop {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stopid': json['stopid'],
        'name': json['name'],
        'departure': json['departure'],
    };
}

export function StopToJSON(value?: Stop | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stopid': value.stopid,
        'name': value.name,
        'departure': value.departure,
    };
}

