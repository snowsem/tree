import StepBaseType from "./StepBaseType";


export default class RootStepType extends StepBaseType {

    static get STEP_TYPE() { return 'root'; }

    constructor(name, steps = [], bots = null, splitter = false) {
        super();
        this.name = RootStepType.STEP_TYPE;
        this.type = RootStepType.STEP_TYPE;
        this.steps = steps;
        this.bots = bots;
        this.splitter = splitter;
        this.parent = null

    }

}


