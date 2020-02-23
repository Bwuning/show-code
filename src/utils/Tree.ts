export default class Tree<T>{
    private value: T
    private children: Tree<T>[]
    constructor(v: T, c: Tree<T>[]) {
        this.value = v
        this.children = c
    }
    static gen<T>(v: T, children: Tree<T>[] = []) { 
        return new this(v, children) 
    }

    public map<S>(fn:(t:T)=>S):Tree<S>{
        return Tree.gen(
            fn(this.value),
            this.children.map(t=>t.map(fn)))
    }
}