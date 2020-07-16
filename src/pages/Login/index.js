import Template from '../template.js';
export default class Login extends Template {
    constructor() {
        super();
        console.log('hello');
        this.$html = `<h1>Login</h1>`;
    }
}
