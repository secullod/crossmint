import {goalMapEndpoint} from "./config";
import {crossmintClient} from "./crossmintClient";

let goalMapClient = crossmintClient(goalMapEndpoint)
export const getGoalMap = async (): Promise<any> => goalMapClient.get().then(res => res.data.goal)
