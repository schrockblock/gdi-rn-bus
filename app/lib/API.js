import MTAAPI  from './MTAAPI.js';

export default class API {
  static getStops(location, success, failure){
  	MTAAPI.getStops(location, success, failure);
  }

  static getStopRoutes(stop, success, failure) {
  	MTAAPI.getStopRoutes(stop, success, failure);
  }
}