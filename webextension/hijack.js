function t(){
    let table = document.getElementById("ctl00_mainContent_gvCadets").children[0];
    try{
        console.log("tr");
    //make table larger
    //if(table.getElementsByClassName("control")[0].value!='750'){
        table.getElementsByClassName("control")[0].value = '750'
        table.getElementsByClassName("control")[0].onchange()
    //}
    }catch(e){
        //console.log(e)
        //setTimeout(t, 200);
        return;
    }

    let tr = table.children[document.getElementById("cadetmsg").innerHTML];

    //go to cadet page
    tr.children[0].children[0].click();
}
t();