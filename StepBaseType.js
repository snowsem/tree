
export default class StepBaseType {

    constructor(steps = [], bots = null, splitter = false) {
        this.name = 'Root';
        this.steps = steps;
        this.bots = bots;
        this.splitter = splitter;
        this.parent = null
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

    setIsSplitter(value) {
        this.splitter = !!value;
    }


}
