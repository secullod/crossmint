import {polyanetAPI} from "./api";

const createX = async () => {
    for (let i = 2; i < 9; i++) {
        await polyanetAPI.post(i, i)
        await polyanetAPI.post(10 - i, i)
    }
}

createX()
