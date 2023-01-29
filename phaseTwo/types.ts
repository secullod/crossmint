export interface MapItem {
    type: keyof MapClearer
}

export interface MapClearer {
    "0": (row: number, col: number) => Promise<any>,
    "1": (row: number, col: number) => Promise<any>,
    "2": (row: number, col: number) => Promise<any>,

}

export interface MapBuilder {
    "SPACE": (row: number, col: number) => Promise<any>,
    "POLYANET": (row: number, col: number) => Promise<any>,
    "RIGHT_COMETH": (row: number, col: number) => Promise<any>,
    "LEFT_COMETH": (row: number, col: number) => Promise<any>,
    "UP_COMETH": (row: number, col: number) => Promise<any>,
    "DOWN_COMETH": (row: number, col: number) => Promise<any>,
    "WHITE_SOLOON": (row: number, col: number) => Promise<any>,
    "RED_SOLOON": (row: number, col: number) => Promise<any>,
    "BLUE_SOLOON": (row: number, col: number) => Promise<any>,
    "PURPLE_SOLOON": (row: number, col: number) => Promise<any>,
}

export type MapBuilderKey = keyof MapBuilder;

export interface MapMaker {
    clearMap: () => Promise<void>
    fillMap: () => Promise<void>
}
