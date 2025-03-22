let currentcadet = 1;
const retrydelay = 2000;
async function check(test) {
    const delayMs = 200;
    while(!test())await new Promise(resolve => setTimeout(resolve, delayMs));
}
function onListExpand(){
    if(!document.getElementById("moveon")){
        setTimeout(onListExpand, 500);
        return;
    }
    let table = document.getElementById("ctl00_mainContent_gvCadets").children[0];
    let tr = table.children[currentcadet];
    let name = currentcadet;
    try{
        name = tr.children[0].children[0].innerHTML+"_"+tr.children[1].children[0].innerHTML;
    }catch(e){
        let d = document.createElement("textarea");
        chrome.storage.local.get('ribs', function(data) {
            d.innerHTML = JSON.stringify(data.ribs);
            d.id = "finalribs";
            d.style.width = "100%";
            d.style.height = "300px";
            let i = document.createElement("h2");
            i.innerHTML = "ALL CADET RIBBON DATA OBTAINED, copy the text below and paste it into the all.json file under the cdmisdata folder";
            document.getElementById("content").prepend(i, d);//DONE
        });
        return;
    }
    console.log(name);

    //increment local storage cadet number by 1 and set cadet name
    currentcadet++;
    chrome.storage.local.set({currentcadet: currentcadet}, function() {
        chrome.storage.local.set({currentname: name}, function() {
            document.getElementById("moveon").innerHTML = "";
        });
    });
}
function pageList(){
    //check that the page is loaded
    if(!document.getElementById("ctl00_mainContent_gvCadets")){
        setTimeout(pageList, retrydelay);
        return;
    }

    let table = document.getElementById("ctl00_mainContent_gvCadets").children[0];
    /*try{
        table.getElementsByClassName("control")[0].onchange();
    }catch(e){
        console.log(e);
        setTimeout(pageList, retrydelay);
        return;
    }*/
    //console.log(table.getElementsByClassName("control")[0].onchange);
    //make table larger

    //wait for all cadets to show(length>300)
    /*if(table.children.length<300&&!document.getElementById("cadetmsg")){*/
        const script = document.createElement('script');
    const cadetmsg = document.createElement('p');
    cadetmsg.innerHTML = currentcadet;
    cadetmsg.id = "cadetmsg";
        script.src = chrome.runtime.getURL('hijack.js');
        //script.onload = () => script.remove(); //bye bye
        (document.head || document.documentElement).appendChild(cadetmsg);
        (document.head || document.documentElement).appendChild(script);
        //setTimeout(pageList, retrydelay);
        console.log("waiting for cadets to load");
        //return;
    /*}else if(table.children.length<300){
        console.log("waiting for cadets to load");
        setTimeout(pageList, retrydelay);
        return;
    }*/

    //save cadet name
    onListExpand();

    //go to cadet page
    //tr.children[0].children[0].click();
}
function pageCadet(){
    //
    document.getElementById("ctl00_ctl00_mainContent_lnkAwards").click()
}
function awaitribdata(){
    if(!document.getElementById("ribdata")){
        setTimeout(awaitribdata, 1000);
        console.log("waiting for ribdata");
        return;
    }
    let ribdata = JSON.parse(document.getElementById("ribdata").innerHTML);
    console.log(ribdata);
    //save to local storage
    chrome.storage.local.get('ribs', function(data) {
        if(!data.ribs){
            data.ribs = {};
        }
        chrome.storage.local.get("currentname", function(cadet){
            data.ribs[cadet.currentname] = ribdata;
            chrome.storage.local.set({ribs: data.ribs}, function() {
                document.getElementById("ribdata").innerHTML = "";
                console.log("saved ribdata for cadet "+data.ribs);
            });
        });
    });
}
function pageAwards(){
    //
    const script = document.createElement('script');
    /*const cadetmsg = document.createElement('p');
    cadetmsg.innerHTML = currentcadet;
    cadetmsg.id = "cadetmsg";*/
        script.src = chrome.runtime.getURL('hijack2.js');
        //script.onload = () => script.remove(); //bye bye
       // (document.head || document.documentElement).appendChild(cadetmsg);
        (document.head || document.documentElement).appendChild(script);
    awaitribdata();
}
function pagePrint(){
    //
    document.querySelector("#IconImg_AwardSummary_toptoolbar_export").click();
    setTimeout(function(){
        document.querySelector("#iconMenu_menu_bobjid_1739258511794_dialog_combo_item_td_bobjid_1739258511794_dialog_combo_it_15").click();//set to xml
    }, 1000);
}
//INITIALIZE
//get current cadet from local storage
chrome.storage.local.get('currentcadet', function(data) {
    if(data.currentcadet){
        currentcadet = data.currentcadet;
    }
    else{
        chrome.storage.local.set({currentcadet: currentcadet});
    }
});
if(window.location.href.includes("/CDMIS/Cadet/CadetList.aspx")){
    //main list page
    setTimeout(pageList, 3000);
}else if(window.location.href.includes("/CDMIS/Cadet/CadetPersonal.aspx")){
    //cadet page
    setTimeout(pageCadet, 3000);
}else if(window.location.href.includes("/CDMIS/Cadet/CadetAwards.aspx")){
    //awards page
    setTimeout(pageAwards, 3000);
}else if(window.location.href.includes("/DisplayReport.aspx")){
    //print page
    setTimeout(pagePrint, 3000);
}