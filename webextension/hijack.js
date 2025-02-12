function t(){
    let table = document.getElementById("ctl00_mainContent_gvCadets").children[0];
    try{
        console.log("tr");
    //make table larger
    if(table.getElementsByClassName("control")[0].value!='750'){
        table.getElementsByClassName("control")[0].value = '750'
    }
    table.getElementsByClassName("control")[0].onchange();
    }catch(e){
        //console.log(e)
        //setTimeout(t, 200);
        return;
    }
    g();
}
function g(){
    let table = document.getElementById("ctl00_mainContent_gvCadets").children[0];
    if(table.children.length<300){
        console.log("waiting for cadets to load");
        setTimeout(g, 1000);
        return;
    }
    let f = document.createElement('p');
    f.innerHTML = "sdww";
    f.id = "moveon";
    document.body.appendChild(f);
    v();
}
function v(){
    if(document.getElementById("moveon").innerHTML != ""){setTimeout(v, 500);return;}
    let table = document.getElementById("ctl00_mainContent_gvCadets").children[0];
    let tr = table.children[document.getElementById("cadetmsg").innerHTML];

    //go to cadet page
    tr.children[0].children[0].click();
}
t();