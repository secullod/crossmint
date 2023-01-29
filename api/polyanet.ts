import {polyanetsEndpoint} from "./config";
import {crossmintClient} from "./crossmintClient";

let polyanetClient = crossmintClient(polyanetsEndpoint)

const postPolyanet = async (row: number, col: number): Promise<any> =>
    polyanetClient.post({
            row: row,
            column: col
        })

const deletePolyanet = async (row: number, col: number): Promise<any> =>
    polyanetClient.delete({
        row: row,
        column: col
    })

export const polyanetAPI = {
    post: postPolyanet,
    delete: deletePolyanet
}
