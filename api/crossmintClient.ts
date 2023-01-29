import {candidateId, crossmintBaseUrl} from "./config";
import axios from 'axios';

interface CrossmintClient {
    delete: (obj: Object) => Promise<any>
    post: (obj: Object) => Promise<any>
    get: () => Promise<any>
}

const crossmintBaseClient = axios.create({
    baseURL: crossmintBaseUrl
});

const postAPI = (endpoint: string) => async (obj: Object): Promise<any> => {
    try {
        const data = await crossmintBaseClient.post(endpoint, {
            ...obj,
            candidateId: candidateId
        })
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
        throw new Error('error')
    }
}

const deleteAPI = (endpoint: string) => async (obj: Object): Promise<any> => {
    try {
        const data = await crossmintBaseClient.delete(endpoint, {
            data: {
                ...obj,
                candidateId: candidateId
            }
        })
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
        throw new Error('error')
    }
}
const getAPI = (endpoint: string) => async (): Promise<any> => {
    try {
        const data = await crossmintBaseClient.get(endpoint, {
            data: {
                candidateId: candidateId
            }
        })
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
        throw new Error('error')
    }
}

export const crossmintClient = (endpoint: string): CrossmintClient => ({
    post: postAPI(endpoint),
    delete: deleteAPI(endpoint),
    get: getAPI(endpoint)
})
