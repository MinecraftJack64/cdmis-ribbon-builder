const retrydelay = 500;
function awaitSave(){
    if(document.getElementById("ribdata").innerHTML!=""){
        setTimeout(awaitSave, retrydelay);
        console.log("waiting for save");
        return;
    }
    document.getElementById("ctl00_ctl00_lnkBackToCallingPage").click();
}
function awaitSummary(){
    if(!document.getElementById("ctl00_ctl00_mainContent_cadetContent_gvAwardSummary")){
        setTimeout(awaitSummary, retrydelay);
        console.log("waiting for print");
        return;
    }
    setTimeout(function(){
        //PARSE GV SUMMARY
        let table = document.getElementById("ctl00_ctl00_mainContent_cadetContent_gvAwardSummary").children[0];//tbody
        let ribdata = {
            "ribs": [],
            "devs": [],
            "orns": []
        }
        for(let i = 1; i < table.children.length; i++){
            let tr = table.children[i];
            ribdata.ribs.push(tr.children[0].innerHTML);
            if(tr.children[0].innerHTML.includes("No Summary Data")){
                ribdata.ribs = [];
                continue;
            }
            ribdata.devs.push(tr.children[2].innerHTML);
            ribdata.orns.push(tr.children[4].innerHTML);
        }
        let d = document.createElement('p');
        d.innerHTML = JSON.stringify(ribdata);
        d.id = "ribdata";
        document.body.appendChild(d);
        awaitSave();
    }, 1000);
}
document.getElementById("ctl00_ctl00_mainContent_optionsContent_lnkAwardSummary").click()
setTimeout(awaitSummary(), 1000);