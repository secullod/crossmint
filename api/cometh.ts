import {comethEndpoint} from "./config";
import {crossmintClient} from "./crossmintClient";

enum ComethDirections {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right'
}

let comethClient = crossmintClient(comethEndpoint)

const postCometh = (direction: ComethDirections) => async (row: number, column: number): Promise<any> =>
    comethClient.post({
        row,
        column,
        direction,
    })

const deleteCometh = async (row: number, column: number): Promise<any> =>
    comethClient.delete({
        row,
        column
    })

export const comethAPI = {
    postUp: postCometh(ComethDirections.UP),
    postDown: postCometh(ComethDirections.DOWN),
    postLeft: postCometh(ComethDirections.LEFT),
    postRight: postCometh(ComethDirections.RIGHT),
    delete: deleteCometh
}

