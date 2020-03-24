import StepType from "./StepType";
import {processTree, generateMap} from "./TreeProcessor"
import RootStepType from "./RootStepType";

let mainBranch = new RootStepType();

const st1 = new StepType('Step1');

mainBranch.addStep(st1);
mainBranch.addSteps([new StepType('Step2'), new StepType('Step3'), new StepType('Step4')]);
mainBranch.steps[1].addStep(new StepType('Step2_1'));
mainBranch.steps[1].addStep(new StepType('Step2_2'));
mainBranch.steps[1].addStep(new StepType('Step2_3'));
mainBranch.steps[1].splitter = true;
mainBranch.steps[3].splitter = true;

console.log(mainBranch);
processTree(mainBranch, '', false);

console.log(generateMap(mainBranch));


