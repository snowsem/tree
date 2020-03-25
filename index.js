import StepType from "./src/StepTypes/StepType";
import {processTree, generateMap} from "./src/TreeProcessor"
import RootStepType from "./src/StepTypes/RootStepType";

let mainBranch = new RootStepType();

const st1 = new StepType('Step1');

mainBranch.addStep(st1);
mainBranch.addSteps([new StepType('Step2'), new StepType('Step3'), new StepType('Step4')]);
mainBranch.steps[1].addStep(new StepType('Step2_1'));
mainBranch.steps[1].addStep(new StepType('Step2_2'));
mainBranch.steps[1].addStep(new StepType('Step2_3'));
mainBranch.steps[1].splitter = true;
mainBranch.steps[3].splitter = true;
mainBranch.steps[3].addStep(new StepType('Step2_3'));
mainBranch.steps[3].addStep(new StepType('Step2_3'));
mainBranch.steps[3].steps[0].addStep(new StepType('Step4_3'));

//можно даже так создавать отдельные большие ветки и потом мержить в корень
let splitBranch = new StepType('Split step');
splitBranch.splitter = true;
splitBranch.addSteps([new StepType('Step2'), new StepType('Step3'), new StepType('Step4')]);
mainBranch.addStep(splitBranch);



console.log(mainBranch);
processTree(mainBranch, '', false);

let pathMap = generateMap(mainBranch);

console.log(mainBranch.generateMap());

//console.log(eval('mainBranch.steps[3]'));
//mainBranch.addStepToStepByUuid(new StepType('Step808'),mainBranch.steps[0].uuid.toString());

