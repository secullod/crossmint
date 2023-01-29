import {comethAPI, getCurrentMap, getGoalMap, polyanetAPI, soloonAPI} from "../api";
import {delay} from "./helperFunctions";
import {MapBuilder, MapBuilderKey, MapClearer, MapItem, MapMaker} from "./types";

const mapClearer: MapClearer = {
    "0": polyanetAPI.delete,
    "1": soloonAPI.delete,
    "2": comethAPI.delete,
}

const mapBuilder: MapBuilder = {
    "SPACE": () => Promise.resolve(),
    "POLYANET": polyanetAPI.post,
    "RIGHT_COMETH": comethAPI.postRight,
    "LEFT_COMETH": comethAPI.postLeft,
    "UP_COMETH": comethAPI.postUp,
    "DOWN_COMETH": comethAPI.postDown,
    "WHITE_SOLOON": soloonAPI.postWhite,
    "RED_SOLOON": soloonAPI.postRed,
    "BLUE_SOLOON": soloonAPI.postBlue,
    "PURPLE_SOLOON": soloonAPI.postPurple,
}

const clearMap = async (map: MapItem[][]) => {
    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            if (map[row][col] !== null) {
                await delay(1)
                try {
                    await mapClearer[(map[row][col].type)](row, col)
                } catch (err) {
                    throw new Error('error')
                }
            }
        }
    }
}
const fillMap = async (map: MapBuilderKey[][]) => {
    for (let row = 0; row < map.length; row++) {
        for (let col = 0; col < map[row].length; col++) {
            if (map[row][col] !== "SPACE") {
                await delay(1)
                try {
                    await mapBuilder[map[row][col]](row, col)
                } catch (err) {
                    throw new Error('error')
                }
            }
        }
    }
}

export const mapMaker: MapMaker = {
    clearMap: () => getCurrentMap()
        .then(clearMap),
    fillMap: () => getGoalMap()
        .then(fillMap)
}
