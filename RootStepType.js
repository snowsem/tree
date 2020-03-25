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
        this.parent = null;
        this.map = [];

    }

    generateMap() {
        let map = [];
        function recursion(mainBranch, path = '') {
            for (let i = 0; i < mainBranch.length; i++) {

                let step = mainBranch[i];

                let itemPath = path+'/'+i;

                const obj = {
                    uuid: step.uuid.toString(),
                    path: itemPath,
                    name: step.name,
                    parentUuid: step.parenUuid
                };

                map = [...map, obj];

                if (step.splitter) {
                }
                if (step.steps.length>0) {
                    recursion(step.steps, itemPath);
                }

            }
        }

        recursion(this.steps, '');

        this.map = map;
        return this.map;

    }

    addStepToStepByUuid(step, uuid) {
        //лютый говоногод не знаю как вызывать последовательность
        let pathEval = 'this';
        let map = this.generateMap();

        const filtered = map.filter((item)=>{
            return item.uuid === uuid;
        });

        let path = filtered[0].path.split('/');

        path = path.map((item)=>{
            if (item.length > 0) {
                pathEval= pathEval+''+'.steps['+item+']';
                return true;
            }
        });

        pathEval+='.addStep';
        console.log(pathEval);
    }

}


