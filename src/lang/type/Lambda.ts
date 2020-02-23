import Type from "./Type";
import Tuple from "./Tuple";

export default class Lambda implements Type{
    readonly args:Tuple
    readonly result:Type
    readonly typeName:string

    constructor(name:string,args:Tuple,result:Type){
        this.typeName = name
        this.args = args
        this.result = result
    }
}