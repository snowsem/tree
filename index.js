import StepBaseType from "./StepBaseType";
import StepType from "./StepType";
import {processTree} from "./TreeProcessor"

let mainBranch = new StepBaseType();

const st1 = new StepType('Step1');

mainBranch.addStep(st1);
mainBranch.addSteps([new StepType('Step2'), new StepType('Step3'), new StepType('Step4')]);
mainBranch.steps[1].addStep(new StepType('Step2_1'));
mainBranch.steps[1].addStep(new StepType('Step2_2'));
mainBranch.steps[1].splitter = true;
mainBranch.steps[3].splitter = true;

//console.log(mainBranch);
processTree(mainBranch, '', false);
