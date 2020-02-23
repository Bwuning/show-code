import Type from "./Type";

export default class Struct implements Type {

    readonly typeName: string
    readonly field: {
        name: string,
        type: Type
    }[]

    constructor(
        name: string,
        field: {
            name: string,
            type: Type
        }[]) {
        this.typeName = name
        this.field = field
    }
}