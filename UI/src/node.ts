export class NodeN<T> {
    // tslint:disable-next-line:no-any
    static firstElement: any;
    static count: number = 0;
    static deletedObjectOne: object;
    static deletedObjectTwo: object;
    static insertObjectOne: object;
    static insertObjectTwo: object;
    value: T | undefined;
    link: object | undefined;
    constructor(value?: T, numberX?: number) {
        // tslint:disable-next-line:triple-equals
    if ((numberX == undefined) || (numberX == NodeN.count)) {
    if (NodeN.count === 0) {
        NodeN.firstElement = this;
    this.value = value;
    NodeN.count++;
    } else {
    let l = NodeN.firstElement;
    this.value = value;
    for (let i = 0; i < NodeN.count; i++) {
    const z = this.fiendLink(l);
    l = z;
    }
    NodeN.count ++;

    }
    } else {
    this.value = value;
    this.insert(this, numberX);
    NodeN.count ++;
    }
    }

    // tslint:disable-next-line:no-any
    fiendLink(obj: any): object {
        // tslint:disable-next-line:triple-equals
    if (obj.link == undefined) {
    obj.link = this;
    return obj.link;
        // tslint:disable-next-line:unnecessary-else
    } else {
    return obj.link;
    }

    }

    // tslint:disable-next-line:typedef
    fiend(num: number) {
    let l = NodeN.firstElement;
    for (let i = 0; i < num - 1; i++) {
    const z = this.fiendObj(l);
    l = z;
    }
    console.log(l.value);

    }
    // tslint:disable-next-line:typedef
    deleteObj(nunber: number) {
    let l = NodeN.firstElement;
        // tslint:disable-next-line:triple-equals
    if (nunber == 1) {
        NodeN.firstElement = NodeN.firstElement.link;
        NodeN.count--;
        // tslint:disable-next-line:triple-equals
    } else if (nunber == NodeN.count - 1) {
    for (let i = 0; i < nunber; i++) {
        const z = this.fiendObj(l);
        l = z;
        // tslint:disable-next-line:triple-equals
    if (i == nunber - 1) {
    const a = this.delete(l);
    }
    }
    NodeN.count --;
    } else {
    for (let i = 0; i < nunber + 2; i++) {
        // tslint:disable-next-line:triple-equals
    if (i == nunber - 2) {
        NodeN.deletedObjectOne = l;

    }
    const z = this.fiendObj(l);
    l = z;
        // tslint:disable-next-line:triple-equals
    if (i == nunber - 1) {
        NodeN.deletedObjectTwo = l;
    }
    }
    const a = this.delete(NodeN.deletedObjectOne, NodeN.deletedObjectTwo);
    NodeN.count --;
    }
    NodeN.count --;
    }

    // tslint:disable-next-line:typedef no-any
    delete(obj: any, obj1?: object ) {
    obj.link = obj1;
    }

    // tslint:disable-next-line:no-any
    fiendObj(obj: any): any {

    return obj.link;


    }

    // tslint:disable-next-line:typedef no-any
    insert(obj: any, numberX: number) {
    const l = NodeN.firstElement;
        // tslint:disable-next-line:triple-equals
    if (numberX == 0) {
    obj.link = NodeN.firstElement;
    NodeN.firstElement = obj;
    } else {
        // tslint:disable-next-line:no-shadowed-variable
    let l = NodeN.firstElement;
    for (let i = 0; i < numberX + 1; i++) {
        // tslint:disable-next-line:triple-equals
    if (i == numberX - 1) {
        NodeN.insertObjectOne = l;
    }
        // tslint:disable-next-line:triple-equals
    if (i == numberX) {
        NodeN.insertObjectTwo = l;
    }
        // tslint:disable-next-line:prefer-const
    let z = this.fiendObj(l);
    l = z;
    }
    const a = this.insertObj(NodeN.insertObjectOne, obj, NodeN.insertObjectTwo);



    }
    }

    // tslint:disable-next-line:typedef no-any
    insertObj(objB: any, objIns: any, objAft: object) {
    objB.link = objIns;
    objIns.link = objAft;
    }

    // tslint:disable-next-line:typedef
    vievAllList() {
    let l = NodeN.firstElement;
    for (let i = 0; i < NodeN.count - 1; i++) {
    console.log(l.value);
    const z = this.fiendObj(l);
    l = z;
    }
    NodeN.count--;
    }
    }
