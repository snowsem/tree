import StepBaseType from "./StepBaseType";

export default class StepType extends StepBaseType {

    constructor(name, steps = [], bots = null, splitter = false) {
        super();
        this.name = name;
        this.steps = steps;
        this.bots = bots;
        this.splitter = splitter;
        this.parent = null
    }
}


