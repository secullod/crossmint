import {soloonsEndpoint} from "./config";
import {crossmintClient} from "./crossmintClient";

enum SoloonColors {
    RED = 'red',
    BLUE = 'blue',
    PURPLE = 'purple',
    WHITE = 'white'
}

let soloonClient = crossmintClient(soloonsEndpoint)

const postSoloon = (color: SoloonColors) => async (row: number, col: number): Promise<any> =>
    soloonClient.post({
        row: row,
        column: col,
        color: color,
    })

const deleteSoloon = async (row: number, col: number): Promise<any> =>
    soloonClient.delete({
        row: row,
        column: col
    })

export const soloonAPI = {
    postRed: postSoloon(SoloonColors.RED),
    postBlue: postSoloon(SoloonColors.BLUE),
    postPurple: postSoloon(SoloonColors.PURPLE),
    postWhite: postSoloon(SoloonColors.WHITE),
    delete: deleteSoloon
}
