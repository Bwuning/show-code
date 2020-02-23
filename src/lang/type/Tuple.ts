import Type from './Type'

export default class Tuple implements Type {
    readonly value: {
        alias: string,
        type: Type
    }[]

    readonly typeName: string

    constructor(
        name: string,
        value: {
            alias?: string,
            type: Type
        }[]) {
        this.typeName = name
        this.value = value.map(
            ({ alias, type }) => ({ alias: alias || '', type })
        )
    }
}