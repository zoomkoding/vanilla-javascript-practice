export default class Template {
    $html = `<h1>hi</h1>`;
    constructor() {
        console.log('template');
    }
    getHtml() {
        return this.$html;
    }
}
