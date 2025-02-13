let ribbonsizeratio = 3/11;
let starscale = 0.1;
let colors = {
    "navy": "#2727b0",
    "red": "#ff0000",
    "white": "#ffffff",
    "black": "#000000",
    "yellow": "#ffea00",
    "gray": "#878787",
    "leaf": "#006102",
    "orange": "#f26100",
    "blue": "#348ceb",
    "green": "#0ceb00",
    "redbrown": "#401d00"
}
var RibbonData = {
    "merit": {
        "name": "Meritorious Achievement",
        "ribbon": {
            sym: true,
            color: "#ff0000",
            colors: [
                {
                    color: "#ffffff",
                    width: 0.8
                },
                {
                    color: colors.navy,
                    width: 0.7
                },
                {
                    color: colors.yellow,
                    width: 0.63
                },
                {
                    color: colors.navy,
                    width: 0.2
                }
            ]
        }
    },
    "distunit": {
        "name": "Distinguished Unit",
        "ribbon": {
            sym: true,
            color: "#ffffff",
            colors: [
                {
                    color: "#000000",
                    width: 0.6
                },
                {
                    color: "#c78a2e",
                    width: 0.2
                }
            ]
        }
    },
    "distcad": {
        "name": "Distinguished Cadet",
        "ribbon": {
            sym: false,
            color: "#ffffff",
            colors: [
                {
                    color: colors.navy,
                    start: 0,
                    width: 0.45
                },
                {
                    color: colors.yellow,
                    start: 0.45,
                    width: 0.1
                }
            ]
        }
    },
    "honorcad": {
        "name": "Honor Cadet",
        "ribbon": {
            sym: true,
            color: "#348ceb",
            colors: [
                {
                    color: "#120099",
                    width: 0.2
                }
            ]
        }
    },
    "cadetachieve": {
        "name": "Cadet Achievement",
        "ribbon": {
            sym: true,
            color: colors.gray,
            colors: [
                {
                    color: colors.leaf,
                    width: 0.3
                },
                {
                    color: colors.orange,
                    width: 0.1
                }
            ]
        }
    },
    "unitachieve": {
        "name": "Unit Achievement",
        "ribbon": {
            sym: true,
            color: colors.gray,
            colors: [
                {
                    color: colors.navy,
                    width: 0.3
                },
                {
                    color: colors.blue,
                    width: 0.15
                },
                {
                    color: colors.green,
                    width: 0.04
                }
            ]
        }
    },
    "apt": {
        "name": "Aptitude",
        "ribbon": {
            sym: true,
            color: colors.yellow,
            colors: [
                {
                    color: colors.navy,
                    width: 0.9
                },
                {
                    color: colors.yellow,
                    width: 0.75
                },
                {
                    color: colors.navy,
                    width: 0.3
                },
                {
                    color: colors.white,
                    width: 0.1
                }
            ]
        }
    },
    "outst4": {
        "name": "Naval Science IV Outstanding Cadet",
        "ribbon": {
            sym: true,
            color: "#ff9900",
            colors: [
                {
                    color: "#ffffff",
                    width: 0.85
                },
                {
                    color: "#000091",
                    width: 0.7
                },
                {
                    color: "#ffffff",
                    width: 0.5*.75
                },
                {
                    color: "#000091",
                    width: 0.3*.75
                },
                {
                    color: "#ffffff",
                    width: 0.1*.75
                }
            ]
        }
    },
    "outst3": {
        "name": "Naval Science III Outstanding Cadet",
        "ribbon": {
            sym: true,
            color: "#ff9900",
            colors: [
                {
                    color: "#ffffff",
                    width: 0.85
                },
                {
                    color: "#000091",
                    width: 0.7
                },
                {
                    color: "#ffffff",
                    width: 0.3*.75
                },
                {
                    color: "#000091",
                    width: 0.1*.75
                }
            ]
        }
    },
    "outst2": {
        "name": "Naval Science II Outstanding Cadet",
        "ribbon": {
            sym: true,
            color: "#ff9900",
            colors: [
                {
                    color: "#ffffff",
                    width: 0.85
                },
                {
                    color: "#000091",
                    width: 0.7
                },
                {
                    color: "#ffffff",
                    width: 0.1*.75
                }
            ]
        }
    },
    "outst1": {
        "name": "Naval Science I Outstanding Cadet",
        "ribbon": {
            sym: true,
            color: "#ff9900",
            colors: [
                {
                    color: "#ffffff",
                    width: 0.85
                },
                {
                    color: "#000091",
                    width: 0.7
                }
            ]
        }
    },
    "exemcond": {
        "name": "Exemplary Conduct",
        "ribbon": {
            sym: true,
            color: "#ff0000",
            colors: [
                {
                    color: "#ffffff",
                    width: 0.5
                },
                {
                    color: "#0ceb00",
                    width: 0.05
                }
            ]
        }
    },
    "exempa": {
        "name": "Exemplary Personal Appearance",
        "ribbon": {
            sym: true,
            color: colors.navy,
            colors: [
                {
                    color: colors.orange,
                    width: 0.5
                },
                {
                    color: colors.gray,
                    width: 0.3
                },
                {
                    color: colors.navy,
                    width: 0.1
                }
            ]
        }
    },
    "pt": {
        "name": "Physical Fitness",
        "ribbon": {
            sym: false,
            color: colors.yellow,
            colors: [
                {
                    color: colors.navy,
                    start: 0,
                    width: 0.25
                },
                {
                    color: colors.navy,
                    start: 0.5,
                    width: 0.25
                }
            ]
        }
    },
    "part": {
        "name": "Participation",
        "ribbon": {
            sym: true,
            color: "#18cf04",
            colors: [
                {
                    color: colors.white,
                    width: 0.8
                },
                {
                    color: "#c28800",
                    width: 0.3
                },
                {
                    color: colors.white,
                    width: 0.1
                }
            ]
        }
    },
    "unitserve": {
        "name": "Unit Service",
        "ribbon": {
            sym: false,
            color: colors.navy,
            colors: [
                {
                    color: colors.yellow,
                    start: 0.5,
                    width: 0.5
                },
                {
                    color: colors.white,
                    start: 0.2,
                    width: 0.1
                },
                {
                    color: colors.white,
                    start: 0.7,
                    width: 0.1
                }
            ]
        }
    },
    "commserve": {
        "name": "Community Service",
        "ribbon": {
            sym: true,
            color: colors.yellow,
            colors: [
                {
                    color: colors.leaf,
                    width: 0.9
                },
                {
                    color: colors.yellow,
                    width: 0.7
                },
                {
                    color: colors.leaf,
                    width: 0.3
                },
                {
                    color: colors.orange,
                    width: 0.1
                }
            ]
        }
    },
    "acad": {
        "name": "Academic Team",
        "ribbon": {
            sym: true,
            color: colors.redbrown,
            colors: [
                {
                    color: colors.orange,
                    width: 0.9
                },
                {
                    color: colors.white,
                    width: 0.3
                },
                {
                    color: colors.orange,
                    width: 0.1
                }
            ]
        }
    },
    "drill": {
        "name": "Drill Team",
        "ribbon": {
            sym: true,
            color: colors.yellow,
            colors: [
                {
                    color: colors.white,
                    width: 0.9
                },
                {
                    color: colors.redbrown,
                    width: 0.8
                }
            ]
        }
    },
    "colorguard": {
        "name": "Color Guard",
        "ribbon": {
            sym: false,
            color: colors.white,
            colors: [
                {
                    color: colors.navy,
                    start: 0.3,
                    width: 0.1
                },
                {
                    color: colors.red,
                    start: 0.6,
                    width: 0.1
                }
            ]
        }
    },
    "stem": {
        "name": "S.T.E.M",
        "ribbon": {
            sym: true,
            color: colors.yellow,
            colors: [
                {
                    color: colors.navy,
                    width: 0.9
                },
                {
                    color: colors.yellow,
                    width: 0.7
                },
                {
                    color: colors.white,
                    width: 0.6
                },
                {
                    color: colors.yellow,
                    width: 0.25
                },
                {
                    color: colors.white,
                    width: 0.15
                },
            ]
        }
    },
    "mk": {
        "name": "Marksmanship",
        "ribbon": {
            sym: true,
            color: colors.yellow,
            colors: [
                {
                    color: colors.white,
                    width: 0.9
                },
                {
                    color: colors.leaf,
                    width: 0.8
                }
            ]
        }
    },
    "ortr": {
        "name": "Orienteering",
        "ribbon": {
            sym: true,
            color: colors.orange,
            colors: [
                {
                    color: colors.white,
                    width: 0.25
                }
            ]
        }
    },
    "intservcomp": {
        "name": "Inter-service Competition",
        "ribbon": {
            sym: true,
            color: colors.navy,
            colors: [
                {
                    color: colors.white,
                    width: 0.9
                },
                {
                    color: colors.blue,
                    width: 0.8
                },
                {
                    color: colors.white,
                    width: 0.43
                },
                {
                    color: colors.navy,
                    width: 0.33
                },
                {
                    color: colors.yellow,
                    width: 0.23
                }
            ]
        }
    },
    "rec": {
        "name": "Recruiting",
        "ribbon": {
            sym: true,
            color: colors.leaf,
            colors: [
                {
                    color: colors.yellow,
                    width: 0.4
                },
                {
                    color: colors.leaf,
                    width: 0.25
                },
                {
                    color: colors.yellow,
                    width: 0.2
                }
            ]
        }
    },
    "blt": {
        "name": "Leadership Training",
        "ribbon": {
            sym: true,
            color: colors.yellow,
            colors: [
                {
                    color: colors.leaf,
                    width: 0.3
                },
                {
                    color: colors.red,
                    width: 0.15
                },
                {
                    color: colors.white,
                    width: 0.04
                }
            ]
        }
    },
    "seacr": {
        "name": "Sea Cruise",
        "ribbon": {
            sym: true,
            color: colors.navy,
            colors: [
                {
                    color: colors.white,
                    width: 0.3
                },
                {
                    color: colors.red,
                    width: 0.1
                }
            ]
        }
    },
    "cert": {
        "name": "C.E.R.T",
        "ribbon": {
            sym: false,
            color: "#015202",
            colors: []
        }
    },
    "raid": {
        "name": "Raiders",
        "ribbon": {
            sym: false,
            color: "#00ffff",
            colors: []
        }
    },
    "rdm": {
        "name": "Rookie Drill Meet",
        "ribbon": {
            sym: false,
            color: "#ff0000",
            colors: [
                {
                    color: "#000000",
                    start: 0,
                    width: 0.5
                }
            ]
        }
    },
    "vetsday": {
        "name": "Veterans Day",
        "ribbon": {
            sym: false,
            color: "#ffffff",
            colors: [
                {
                    color: "#0000ff",
                    start: 0,
                    width: 0.33
                },
                {
                    color: "#ff0000",
                    start: 0.67,
                    width: 0.33
                },
            ]
        }
    }
}
var exttranslations = {
    "ORIENTEERING RIBBON~1": "ortr",
    "FULLERTON VETERANS DAY": "vetsday",
    "ACADEMIC TEAM": "rdm",
    "RAIDER RIBBON": "rdm",
    "BASIC LEADERSHIP TRAINING": "blt",
    "FULLERTON VETERANS DAY PARADE": "vetsday"
}
var OrnamentData = {
    "checkorder": ["anchor", "lamp", "star"],
    "star": {
        "bronze": "images/orns/starbronze.png",
        "silver": "images/orns/starsilver.png",
        "gold": "images/orns/stargold.png"
    },
    "lamp": {
        "bronze": "images/orns/lampbronze.png",
        "silver": "images/orns/lampsilver.png",
        "gold": "images/orns/lampgold.png"
    },
    "anchor": "images/orns/anchor.png",
    //"pad": "images/orns/leaf.png",
    //"torch": "images/orns/torch.png"
}
const width = 160;
const rpr = 3;// ribbons per row
var Game = {
    canvas: document.createElement("canvas"),
    errorRibbons: new Set([]),
    popRibbons: {},
    init: function(){
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        console.log('init');
    },
    account: function(ribbon){//add to frequency map f ribbons to determine most popular and least popular ones
        if(this.popRibbons[ribbon]){
            this.popRibbons[ribbon]++;
        }else{
            this.popRibbons[ribbon] = 1;
        }
    },
    renderRibbonBar: function(ribbons = ["distunit", "distcadet", "honorcad", "outst1", "outst2", "outst3", "outst4", "exemcond", "cert", "rdm", "vetsday"]){
        console.log('test');
        let ribbonsfirstrow = [];
        let s = (ribbons.length-1)%rpr+1;
        for(let i = 0; i < s; i++){
            ribbonsfirstrow.push(ribbons.shift());
        }
        console.log(ribbons);
        console.log(ribbonsfirstrow)
        let height = width*ribbonsizeratio;
        this.canvas.height = height*Math.ceil((ribbons.length+ribbonsfirstrow.length)*1.0/rpr);
        //center first row
        //ex. 3 per row, if 5 ribbons, first two should be centered
        let firstrowoffset = (rpr-ribbonsfirstrow.length)*width/2;
        //note: starts from 2nd row, render first row later
        for(let i = 0; i < ribbons.length; i++){
            this.drawRibbon((i%3)*width, Math.floor(i/rpr)*height+height, width, RibbonData[ribbons[i].id].ribbon, ribbons[i].orndata);
            this.account(RibbonData[ribbons[i].id].name);
        }
        //draw first row
        for(let i = 0; i < ribbonsfirstrow.length; i++){
            this.drawRibbon(firstrowoffset+i*width, 0, width, RibbonData[ribbonsfirstrow[i].id].ribbon, ribbonsfirstrow[i].orndata);
            this.account(RibbonData[ribbonsfirstrow[i].id].name);
        }
    },
    drawRibbon: async function(x = 0, y = 0, width = 160, ribdata = RibbonData.exemcond.ribbon, orndata = []){
        //calculate later
        let issymmetric = ribdata.sym;
        let midwidth = x+width/2;

        let height = width*ribbonsizeratio;
        //Draw back rectangle
        this.context.fillStyle = ribdata.color;
        this.context.fillRect(x,y,width,height);
        if(issymmetric){
            for(let c of ribdata.colors){
                this.context.fillStyle = c.color;
                this.context.fillRect(midwidth-c.width*width/2,y,c.width*width, height);
            }
        }else{
            for(let c of ribdata.colors){
                this.context.fillStyle = c.color;
                this.context.fillRect(x+c.start*width,y,c.width*width, height);
            }
        }
        //draw gray transparent shadow along bottom and right of ribbon
        this.context.fillStyle = "#212121";
        this.context.alpha = 0.5;
        this.context.fillRect(x+width-1,y,1,height);
        this.context.fillRect(x,y+height-2,width,2);
        this.context.alpha = 1;

        //draw 15 gray lines over ribbon
        this.context.fillStyle = "#000000";
        this.context.globalAlpha = 0.2;
        let lineheight = height/15;
        for(let i = 0; i < 15; i++){
            this.context.fillRect(x,y+i*lineheight,width,lineheight/2);
        }
        this.context.globalAlpha = 1;

        //draw ornaments in a row at center of ribbon
        //draw star at center of ribbon
        let norns = orndata.length;
        let ornspace = 22;
        let rx = midwidth-(norns-1)*ornspace/2;
        let ry = y+height/2;
        console.log("efjifwjwiefjefwjoif")
        //this.context.drawImage(i, 0, 0);
        for(let s of orndata){
            let i = s.img;
            let scale = i.src.includes("lamp") ? starscale*0.5 : starscale;
            this.context.drawImage(i, rx-i.width*scale/2, ry-i.height*scale/2, i.width*scale, i.height*scale);
            rx += ornspace;
        }
        /*let ornspace = 5;
        let orntotalwidth = 0;
        for(let o of orndata){
            orntotalwidth += o.width;
        }
        let ornstart = midwidth-orntotalwidth/2;
        for(let o of orndata){
            this.context.fillStyle = o.color;
            this.context.fillRect(ornstart,y+height/2-o.height/2,o.width,o.height);
            ornstart += o.width+ornspace;
        }*/
    },
    //create the maps of ribbons. Used when parsing xml files to get ribbon id
    generateRibbonMap: function(){
        this.map = {};
        for(let ribbon in RibbonData){
            this.map[RibbonData[ribbon].name.toUpperCase()] = ribbon;
        }
    },
    //returns the 2 relevant columns of text
    parseXML: function(xml){
        if(!this.map){
            this.generateRibbonMap();
        }
        let ob = {
            ribs: [],
            devs: [],
            orns: []
        }
        for(let award of xml.children[0].children){
            try{
                ob.ribs.push(award.querySelector('[Name="AWARD1"]').children[0].innerHTML);
                ob.devs.push(award.querySelector('[Name="DEVICE1"]').children[0].innerHTML);
                ob.orns.push(award.querySelector('[Name="ORNAMENTATION1"]').children[0].innerHTML);
            }catch(e){
                console.log(e);
            }
        }
        return ob;
    },
    extractNumberFromString: function(str){
        let num = str.match(/\d+/);
        return num ? parseInt(num[0]) : 0;
    },
    getRibbonId: function(ribbon){
        if(this.map[ribbon]){
            return this.map[ribbon];
        }else if(exttranslations[ribbon]){
            return exttranslations[ribbon];
        }else{
            return undefined;
        }
    },
    getOrnamentData: function(dev, orn){
        orn = orn.toLowerCase();
        dev = dev.toLowerCase();
        let orndata = [];
        for(let chk of OrnamentData.checkorder){
            if(orn.includes(chk)){
                if(OrnamentData[chk].src){
                    let count = this.extractNumberFromString(orn);
                    if(count<1) count = 1;
                    for(let i = 0; i < count; i++)orndata.push(OrnamentData[chk]);
                }else{
                    for(let j of Object.keys(OrnamentData[chk])){
                        if(orn.includes(j)){
                            let count = this.extractNumberFromString(orn);
                            if(count<1) count = 1;
                            for(let i = 0; i < count; i++)orndata.push(OrnamentData[chk][j]);
                        }
                    }
                }
            }
            //do same with dev
            if(dev.includes(chk)){
                if(OrnamentData[chk].src){
                    let count = this.extractNumberFromString(orn);
                    if(count<1) count = 1;
                    for(let i = 0; i < count; i++)orndata.push(OrnamentData[chk]);
                }else{
                    for(let j of Object.keys(OrnamentData[chk])){
                        if(dev.includes(j)){
                            let count = this.extractNumberFromString(dev);
                            if(count<1) count = 1;
                            for(let i = 0; i < count; i++)orndata.push(OrnamentData[chk][j]);
                        }
                    }
                }
            }
            if(orn.includes("anchor")||dev.includes("anchor")){
                return orndata;
            }
        }
        return orndata;
    },
    parseMasterTable: function(table){
        let ribbons = [];
        for(let r of table.ribs){
            let rib = {
                id: this.getRibbonId(r),
                orndata: []
            }
            if(rib.id!==undefined){
                ribbons.push(rib);
            }else{
                this.errorRibbons.add(r);
                console.log("Ribbon not found: "+r);
            }
        }
        return ribbons;
    },
    fetchCadetList: async function(){
        //send http request to node server to get cadet list(json array)
        let response = await fetch('/getcadetlist');
        let data = await response.json();
        return data;
    },
    fetchAllCadets: async function(){
        //send http request to node server to get cadet list(json array)
        let response = await fetch('/getcadet2');
        let data = await response.json();
        return data;
    },
    loadCadets: async function(){
        //this is called from a button click
        //get the cadet list
        this.cadets = await this.fetchCadetList();
        this.cadetjson = await this.fetchAllCadets();
        this.cadets = Object.keys(this.cadetjson);
        msg.innerHTML = "Cadets loaded from server";
    },
    loadCadet: async function(cadet){
        let cad = await (await fetch('/getcadet/'+cadet)).text();
        let data = new window.DOMParser().parseFromString(cad, "text/xml");
        console.log(data);
        this.cadet = cadet;
        return data;
    },
    downloadRibbonRack: async function(){
        //download the ribbon rack as an image
        let dataURL = this.canvas.toDataURL();
        //console.log(dataURL);
        if(dataURL.length<7){
            console.log("dataURL too short");
            return;
        }
        //send to server to save
        await fetch('/savecadet/'+this.cadet, {
            method: 'POST',
            body: JSON.stringify({data: dataURL}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    },
    renderCadetRibbonBar: async function(){
        //parse xml
        //let data = this.parseXML(await this.loadCadet(this.cadet));
        let data = this.cadetjson[this.cadet];
        console.log(data);
        //get ribbons
        let ribbons = this.parseMasterTable(data);
        //get orns
        for(let i = 0; i < ribbons.length; i++){
            let rib = ribbons[i];
            rib.orndata = this.getOrnamentData(data.devs[i], data.orns[i]);
        }
        //render ribbon bar
        this.renderRibbonBar(ribbons);
    },
    renderAllCadets: async function(){
        await this.loadCadets();
        this.clearRibbons();
        this.popRibbons = {};
        //loop through all cadets
        for(let cadet of this.cadets){
            this.cadet = cadet;
            await this.renderCadetRibbonBar();
            await this.downloadRibbonRack();
            this.clearRibbons();
        }
    },
    clearRibbons: function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    drawDefaultRibbonBar: function(){
        this.clearRibbons();
        let ribs = [];
        for(let f in this.map){
            ribs.push({
                id: this.map[f],
                orndata: []
            });
        }
        this.renderRibbonBar(ribs);
    }
}
//load asset images
async function loadAssets(){
    let promises = [];
    for(let orn in OrnamentData){
        if(typeof OrnamentData[orn] == "string"){
            let i = new Image();
            i.src = OrnamentData[orn];
            OrnamentData[orn] = {src: i.src, img: i};
            promises.push(new Promise(resolve => {
                i.onload = resolve;
            }));
        }else if(orn!="checkorder"){
            for(let o in OrnamentData[orn]){
                let i = new Image();
                i.src = OrnamentData[orn][o];
                OrnamentData[orn][o] = {src: i.src, img: i};
                promises.push(new Promise(resolve => {
                    i.onload = resolve;
                }));
            }
        }
    }
    await Promise.all(promises);
}
async function start(){
    Game.init();
    Game.generateRibbonMap();
    await loadAssets();
    Game.drawDefaultRibbonBar();
}