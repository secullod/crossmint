import {crossmintClient} from "./crossmintClient";
import {currentMapEndpoint} from "./config";


let mapClient = crossmintClient(currentMapEndpoint)
export const getCurrentMap = async (): Promise<any> => mapClient.get().then(res => res.data.map.content)
