import readlineSync from "readline-sync";
import { LinkedListN } from "./linked-list.js";

const LinkedList: LinkedListN<String>  = new LinkedListN();

console.log("Вставка элемента после элемента X \"insert value, numberIns\", value - значение для вставки, number - элемента Х");
console.log("Удаление элемента под номером Х \"delete number\" ");
console.log("Вывод элемента под номером Х \"find number\" ");
console.log("Для вывода всего списка \"vievAll\" ");
console.log("Для завершения введите \"exit\"");

readlineSync.promptCLLoop({
    // tslint:disable-next-line:typedef
    insert: function(value: string): void {
        // @ts-ignore
        LinkedList.insert(value);
    },
    delete: function(value: string): void {
        LinkedList.delete(Number(value));
    },
    find: function(value: string): void {
        LinkedList.vievOne(Number(value));
    },
    print: function(): void {
        LinkedList.vievAll();
    },
    exit: function(): boolean {
        return true;
    }
});
