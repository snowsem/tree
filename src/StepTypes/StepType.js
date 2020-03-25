import StepBaseType from "./StepBaseType";

export default class StepType extends StepBaseType {

    static get STEP_TYPE() { return 'step'; }

    constructor(name, steps = [], bots = null, splitter = false) {
        super();
        this.name = name;
        this.type = StepType.STEP_TYPE;
        this.steps = steps;
        this.bots = bots;
        this.splitter = splitter;
        this.parent = null
    }
}


