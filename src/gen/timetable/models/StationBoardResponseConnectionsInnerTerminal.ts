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
 * Station information
 * @export
 * @interface StationBoardResponseConnectionsInnerTerminal
 */
export interface StationBoardResponseConnectionsInnerTerminal {
    /**
     * Station ID
     * @type {string}
     * @memberof StationBoardResponseConnectionsInnerTerminal
     */
    id: string;
    /**
     * Station name
     * @type {string}
     * @memberof StationBoardResponseConnectionsInnerTerminal
     */
    name: string;
    /**
     * LV03 X coordinate
     * @type {number}
     * @memberof StationBoardResponseConnectionsInnerTerminal
     */
    x: number;
    /**
     * LV03 Y coordinate
     * @type {number}
     * @memberof StationBoardResponseConnectionsInnerTerminal
     */
    y: number;
    /**
     * WGS84 latitude
     * @type {number}
     * @memberof StationBoardResponseConnectionsInnerTerminal
     */
    lat: number;
    /**
     * WGS84 longitude
     * @type {number}
     * @memberof StationBoardResponseConnectionsInnerTerminal
     */
    lon: number;
}

/**
 * Check if a given object implements the StationBoardResponseConnectionsInnerTerminal interface.
 */
export function instanceOfStationBoardResponseConnectionsInnerTerminal(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "x" in value;
    isInstance = isInstance && "y" in value;
    isInstance = isInstance && "lat" in value;
    isInstance = isInstance && "lon" in value;

    return isInstance;
}

export function StationBoardResponseConnectionsInnerTerminalFromJSON(json: any): StationBoardResponseConnectionsInnerTerminal {
    return StationBoardResponseConnectionsInnerTerminalFromJSONTyped(json, false);
}

export function StationBoardResponseConnectionsInnerTerminalFromJSONTyped(json: any, ignoreDiscriminator: boolean): StationBoardResponseConnectionsInnerTerminal {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'x': json['x'],
        'y': json['y'],
        'lat': json['lat'],
        'lon': json['lon'],
    };
}

export function StationBoardResponseConnectionsInnerTerminalToJSON(value?: StationBoardResponseConnectionsInnerTerminal | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'x': value.x,
        'y': value.y,
        'lat': value.lat,
        'lon': value.lon,
    };
}
