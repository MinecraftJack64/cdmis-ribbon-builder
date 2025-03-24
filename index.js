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
            color: colors.black,
            colors: [
                {
                    color: colors.gray,
                    start: 0,
                    width: 0.25
                },
                {
                    color: "#545353",
                    start: 0.25,
                    width: 0.25
                },
                {
                    color: "#303030",
                    start: 0.5,
                    width: 0.25
                },
            ]
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
    canvas: document.getElementsByTagName("canvas")[0],
    errorRibbons: new Set([]),
    popRibbons: {},
    init: function(){
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        console.log('init');
    },
    account: function(ribbon){//add to frequency map f ribbons to determine most popular and least popular ones
        if(this.popRibbons[ribbon]){
            this.popRibbons[ribbon]++;
        }else{
            this.popRibbons[ribbon] = 1;
        }
    },
    renderRibbonBar: function(ribbons){
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
        this.drawRibbonOnContext(this.context, x, y, width, ribdata, orndata);
    },
    drawRibbonOnContext: async function(context = this.context, x = 0, y = 0, width = 160, ribdata = RibbonData.exemcond.ribbon, orndata = []){
        //calculate later
        let issymmetric = ribdata.sym;
        let midwidth = x+width/2;

        let height = width*ribbonsizeratio;
        //Draw back rectangle
        context.fillStyle = ribdata.color;
        context.fillRect(x,y,width,height);
        if(issymmetric){
            for(let c of ribdata.colors){
                context.fillStyle = c.color;
                context.fillRect(midwidth-c.width*width/2,y,c.width*width, height);
            }
        }else{
            for(let c of ribdata.colors){
                context.fillStyle = c.color;
                context.fillRect(x+c.start*width,y,c.width*width, height);
            }
        }
        //draw gray transparent shadow along bottom and right of ribbon
        context.fillStyle = "#212121";
        context.alpha = 0.5;
        context.fillRect(x+width-1,y,1,height);
        context.fillRect(x,y+height-2,width,2);
        context.alpha = 1;

        //draw 15 gray lines over ribbon
        context.fillStyle = "#000000";
        context.globalAlpha = 0.2;
        let lineheight = height/15;
        for(let i = 0; i < 15; i++){
            context.fillRect(x,y+i*lineheight,width,lineheight/2);
        }
        context.globalAlpha = 1;

        //draw ornaments in a row at center of ribbon
        //draw star at center of ribbon
        if(orndata.length==1){
            let norns = orndata[0].length;
            let ornspace = 22;
            let rx = midwidth-(norns-1)*ornspace/2;
            let ry = y+height/2;
            //context.drawImage(i, 0, 0);
            for(let s of orndata[0]){
                let i = s.img;
                let scale = i.src.includes("lamp") ? starscale*0.5 : starscale;
                context.drawImage(i, rx-i.width*scale/2, ry-i.height*scale/2, i.width*scale, i.height*scale);
                rx += ornspace;
            }
        }else if(orndata.length==2){
            let norns = orndata[0].length;
            let ornspace = 22;//"width/4" this is different
            let rx = midwidth-width/4-(norns-1)*ornspace/2;
            let ry = y+height/2;
            //context.drawImage(i, 0, 0);
            for(let s of orndata[0]){
                let i = s.img;
                let scale = i.src.includes("lamp") ? starscale*0.5 : starscale;
                context.drawImage(i, rx-i.width*scale/2, ry-i.height*scale/2, i.width*scale, i.height*scale);
                rx += ornspace;
            }
            norns = orndata[1].length;
            ornspace = 22;
            rx = midwidth+width/4-(norns-1)*ornspace/2;
            ry = y+height/2;
            //context.drawImage(i, 0, 0);
            for(let s of orndata[1]){
                let i = s.img;
                let scale = i.src.includes("lamp") ? starscale*0.5 : starscale;
                context.drawImage(i, rx-i.width*scale/2, ry-i.height*scale/2, i.width*scale, i.height*scale);
                rx += ornspace;
            }
        }
        /*let ornspace = 5;
        let orntotalwidth = 0;
        for(let o of orndata){
            orntotalwidth += o.width;
        }
        let ornstart = midwidth-orntotalwidth/2;
        for(let o of orndata){
            context.fillStyle = o.color;
            context.fillRect(ornstart,y+height/2-o.height/2,o.width,o.height);
            ornstart += o.width+ornspace;
        }*/
    },
    labelCadet: function(cadet){
        this.context.font = "20px Arial";
        this.context.fillStyle = "#ffffff";
        this.context.globalAlpha = 0.8;
        this.context.fillRect(0, 0, this.context.measureText(cadet).width, 22);
        this.context.fillStyle = "#000000";
        this.context.globalAlpha = 1;
        this.context.fillText(cadet, 0, 20);
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
        let devdata = [];
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
                    for(let i = 0; i < count; i++)devdata.push(OrnamentData[chk]);
                }else{
                    for(let j of Object.keys(OrnamentData[chk])){
                        if(dev.includes(j)){
                            let count = this.extractNumberFromString(dev);
                            if(count<1) count = 1;
                            for(let i = 0; i < count; i++)devdata.push(OrnamentData[chk][j]);
                        }
                    }
                }
            }
            if(orn.includes("anchor")||dev.includes("anchor")){
                return [orndata];
            }
        }
        let res = [];
        if(devdata.length>0)res.push(devdata);
        if(orndata.length>0)res.push(orndata);
        return res;
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
    downloadRibbonRackLocally: async function(){
        //download the ribbon rack as an image
        let dataURL = this.canvas.toDataURL();
        //console.log(dataURL);
        if(dataURL.length<7){
            console.log("dataURL too short");
            return;
        }
        window.location.href = dataURL.replace("image/png", "image/octet-stream"); //force download
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
        //label cadet
        if(document.getElementById("labelcadets").checked)this.labelCadet(this.cadet.replace("_", ", "));
    },
    renderEditorRibbonBar: async function(data){
        //parse xml
        //let data = this.parseXML(await this.loadCadet(this.cadet));
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
        //label cadet
        if(document.getElementById("labelcadets").checked)this.labelCadet(this.cadet.replace("_", ", "));
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
    },
    getDataFromEditor: function(){
        var data = {
            ribs: [],
            devs: [],
            orns: []
        }
        for(let ribElem of document.getElementsByClassName("ribbonChoice")){
            if(ribElem.checked){
                let rib = RibbonData[ribElem.dataset.ribbon];
                data.ribs.push(rib.name.toUpperCase());
                let devElem = ribElem.parentElement.parentElement.querySelector(".devChoice");
                let ornElem = ribElem.parentElement.parentElement.querySelector(".ornChoice");
                data.devs.push(devElem.value);
                data.orns.push(ornElem.value);
            }
        }
        return data;
    },
    renderEditor: function(){
        this.clearRibbons();
        this.renderEditorRibbonBar(getDataFromEditor());
    },
    exposeCode: async function(){
        var data = this.getDataFromEditor();
        document.getElementById("ribbonCode").innerHTML = JSON.stringify(data);//update ribbon code text area
        await navigator.clipboard.writeText(JSON.stringify(data));//copy to clipboard
        alert("Ribbon code copied to clipboard:\n"+JSON.stringify(data));//alert user
    },
    initEditor: function(){
        document.getElementById("edit").style.display = "block";
        let list = document.getElementById("ribbonSelect");
        list.style.width = "800px";
        for(let f in RibbonData){
            let li = document.createElement("li");
            li.style.display = "flex";
            li.style.flexDirection = "row";
            li.style.alignItems = "center";
            li.style.justifyContent = "space-between";
            let fdiv = document.createElement("div");
            let ldiv = document.createElement("div");
            fdiv.style.display = "flex";
            fdiv.style.flexDirection = "row";
            fdiv.style.alignItems = "center";
            fdiv.style.overflow = "auto";
            ldiv.style.display = "flex";
            ldiv.style.flexDirection = "row";
            ldiv.style.alignItems = "center";
            let canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = width*ribbonsizeratio;
            let p = document.createElement("span");
            p.innerHTML = RibbonData[f].name;
            let check = document.createElement("input");
            check.type = "checkbox";
            check.classList.add("ribbonChoice");
            check.style.margin = "10px";
            let orn = document.createElement("select");
            orn.classList.add("ornChoice");
            orn.innerHTML = `
            <option value=''>None</option>
            <option value='bronze star'>1 Bronze Star</option>
            <option value='2 bronze stars'>2 Bronze Stars</option>
            <option value='3 bronze stars'>3 Bronze Stars</option>
            <option value='silver star'>1 Silver Star</option>
            <option value='2 silver stars'>2 Silver Stars</option>
            <option value='3 silver stars'>3 Silver Stars</option>
            <option value='gold star'>1 Gold Star</option>
            <option value='2 gold stars'>2 Gold Stars</option>
            <option value='3 gold stars'>3 Gold Stars</option>
            `;
            let dev = document.createElement("select");
            dev.classList.add("devChoice");
            dev.innerHTML = `
            <option value=''>None</option>
            <option value='bronze lamp'>Bronze Lamp</option>
            <option value='silver lamp'>Silver Lamp</option>
            <option value='gold lamp'>Gold Lamp</option>
            <option value='anchor'>Anchor</option>
            `;
            check.dataset.ribbon = f;
            orn.dataset.ribbon = f;
            dev.dataset.ribbon = f;
            //add listeners to update renderEditor when changed
            check.addEventListener("change", () => {this.renderEditor();});
            orn.addEventListener("change", () => {this.renderEditor();});
            dev.addEventListener("change", () => {this.renderEditor();});
            fdiv.appendChild(canvas);
            fdiv.appendChild(check);
            fdiv.appendChild(p);
            ldiv.appendChild(dev);
            ldiv.appendChild(orn);
            li.appendChild(fdiv);
            li.appendChild(ldiv);
            list.appendChild(li);
            let context = canvas.getContext("2d");
            this.drawRibbonOnContext(context, 0, 0, width, RibbonData[f].ribbon);//each canvas has single ribbon
        }
    },
    loadRibbonCode: function(){
        //browser prompt for ribbon code
        let code = prompt("Enter the ribbon code:");
        if(code){
            //string to json
            let ribbons = JSON.parse(code);
            for(let i = 0; i < ribbons.ribs.length; i++){
                let rib = ribbons.ribs[i];
                let ribElem = document.querySelector(`input[data-ribbon="${this.getRibbonId(rib)}"]`);
                if(ribElem){
                    ribElem.checked = true;
                    let devElem = ribElem.parentElement.parentElement.querySelector(".devChoice");
                    let ornElem = ribElem.parentElement.parentElement.querySelector(".ornChoice");
                    devElem.value = ribbons.devs[i];
                    ornElem.value = ribbons.orns[i];
                }
            }
            this.renderEditor(); //update ribbon bar
        }
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