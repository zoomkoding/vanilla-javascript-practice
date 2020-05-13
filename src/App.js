import Sample from './Sample.js'

export default class App {

    $target = null
    dashboard = null
    
    constructor($target) {
        this.$target = $target

        this.dashboard = new Sample($target)
    }
}