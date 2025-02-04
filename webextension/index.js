let currentcadet = 1;
const retrydelay = 200;
async function check(test) {
    const delayMs = 200;
    while(!test())await new Promise(resolve => setTimeout(resolve, delayMs));
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
    const script = document.createElement('script');
    const cadetmsg = document.createElement('p');
    cadetmsg.innerHTML = currentcadet;
    cadetmsg.id = "cadetmsg";
    script.src = chrome.runtime.getURL('hijack.js');
    //script.onload = () => script.remove(); //bye bye
    (document.head || document.documentElement).appendChild(cadetmsg);
    (document.head || document.documentElement).appendChild(script);

    //wait for all cadets to show(length>300)
    if(table.children.length<300){
        setTimeout(pageList, retrydelay);
        console.log("waiting for cadets to load");
        return;
    }

    //save cadet name
    let tr = table.children[currentcadet];
    let name = tr.children[0].children[0].innerHTML+"_"+tr.children[1].children[0].innerHTML;
    console.log(name);

    //increment local storage cadet number by 1 and set cadet name
    currentcadet++;
    chrome.storage.local.set({currentcadet: currentcadet});
    chrome.storage.local.set({currentname: name});

    //go to cadet page
    //tr.children[0].children[0].click();
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
    pageList();
}