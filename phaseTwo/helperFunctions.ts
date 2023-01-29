export const delay = (seconds: number): Promise<any> => {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}
