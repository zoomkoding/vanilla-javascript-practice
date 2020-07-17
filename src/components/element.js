export default class Element {
    constructor(classname, children) {
        console.log(classname, children);
        this.classname = classname;
        this.children = children;
        this.setHtml();
    }
    getChildrenHtml(children){
        if(!children) return '';
        else if(Array.isArray(children)) {
            return `${children.reduce((a, b) => a + this.getChildrenHtml(b), '')}`;
        }
        else return typeof(children) === `object` ? children.getHtml() : children;
    }
    setHtml() {
        this.html = `<div class='${this.classname}'>${this.getChildrenHtml(this.children)}</div>`;    
        console.log(this.html);
    }
   
    getHtml() {
        return this.html;
    }
}