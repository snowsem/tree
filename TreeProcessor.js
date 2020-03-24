

function processTree(mainBranch, del, split) {

    let l = "";


    for (let i = 0; i < mainBranch.steps.length; i++) {
        let str = "";
        let step = mainBranch.steps[i];

        if (split) {
            str+=del;
            l+="|";
            console.log(str, l);
            console.log(str, l)
        } else {
            console.log(str,  "|");
            console.log(str,  "|")
        }

        console.log(str,l, step.name+";", "Related steps:", step.steps.length+";", "isSplitter ", step.splitter);

        //if (step.steps != nil) {

        if (step.splitter) {
            str = del + "     ";
            console.log(str, "Sub branch", i, "start");
            console.log(str, "        |");
            console.log(str, "|------<|>-----||");
        }
        processTree(step, str, true);
        if (step.splitter) {
            console.log(str, "|_______|______||");
            console.log(str, "        |")
            //}
        } else {
            //fmt.Println(str, "|")
        }
    }
}

export {processTree};
