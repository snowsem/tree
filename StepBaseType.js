import { v4 as uuidv4 } from 'uuid';

export default class StepBaseType {

    static get STEP_TYPE() { return 'root'; }

    constructor(steps = [], bots = null, splitter = false) {
        this.name = StepBaseType.STEP_TYPE;
        this.steps = steps;
        this.bots = bots;
        this.splitter = splitter;
        this.parent = null;
        this.uuid = uuidv4();
        this.parenUuid = null;
    }

    addStep(step) {
        if (!this.steps) {
            this.steps = [];
            this.steps = [...this.steps, step];
        } else {
            this.steps = [...this.steps, step];
        }
    }

    addSteps(steps) {

        if (steps.length) {
            steps.forEach((step) => {
                this.addStep(step);
            })
        }
    }

    setParentUuid(uuid) {
        this.uuid = uuid;
    }

    setIsSplitter(value) {
        this.splitter = !!value;
    }


}

