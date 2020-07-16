export default class Column {
    constructor(data, child) {
        this.data;
    }
    getHtml() {
        return `<div class='task-column-header'>${this.data.title}</div`
    }
}