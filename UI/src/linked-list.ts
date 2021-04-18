import { NodeN } from "./node.js";
export class LinkedListN<T> {
    // tslint:disable-next-line:typedef
    add(value: T) {
        // tslint:disable-next-line:no-unused-expression
         new NodeN<T>(value);
    }
    // tslint:disable-next-line:typedef
    insert(value: T, numberX?: number) {
        // tslint:disable-next-line:no-unused-expression
        new NodeN<T>(value, numberX);
    }

    // tslint:disable-next-line:typedef
    delete(numberDel: number) {
        const obj = new NodeN<T>();
        obj.deleteObj(numberDel);
    }
    // tslint:disable-next-line:typedef
    vievAll() {
        const obj = new NodeN<T>();
        obj.vievAllList();
        console.log("-------------------------------------------------------");
    }
    // tslint:disable-next-line:typedef
    vievOne(numberViev: number) {
        const obj = new NodeN<T>();
        obj.fiend(numberViev);
        console.log("-------------------------------------------------------");
    }
}



