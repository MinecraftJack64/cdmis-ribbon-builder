let ribbonsizeratio = 3/11;
var RibbonData = {
    "merit": {
        "name": "Meritorious Achievement",
        "ribbon": {
            //
        }
    },
    "distunit": {
        "name": "Distinguished Unit",
        "ribbon": {
            //
        }
    },
    "distcad": {
        "name": "Distinguished Cadet",
        "ribbon": {
            //
        }
    },
    "honorcad": {
        "name": "Honor Cadet",
        "ribbon": {
            sym: true,
            color: "#120099",
            colors: [
                {
                    color: "#000000",
                    width: 0.2
                }
            ]
        }
    },
    "cadetachieve": {
        "name": "Cadet Achievement",
        "ribbon": {
            //
        }
    },
    "unitachieve": {
        "name": "Unit Achievement",
        "ribbon": {
            //
        }
    },
    "apt": {
        "name": "Aptitude",
        "ribbon": {
            //
        }
    },
    "outst4": {
        "name": "Naval Science IV Outstanding Cadet",
        "ribbon": {
            //
        }
    },
    "outst3": {
        "name": "Naval Science III Outstanding Cadet",
        "ribbon": {
            //
        }
    },
    "outst2": {
        "name": "Naval Science II Outstanding Cadet",
        "ribbon": {
            //
        }
    },
    "outst1": {
        "name": "Naval Science I Outstanding Cadet",
        "ribbon": {
            //
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
            //
        }
    },
    "pt": {
        "name": "Physical Fitness",
        "ribbon": {
            //
        }
    },
    "part": {
        "name": "Participation",
        "ribbon": {
            //
        }
    },
    "unitserve": {
        "name": "Unit Service",
        "ribbon": {
            //
        }
    },
    "commserve": {
        "name": "Community Service",
        "ribbon": {
            //
        }
    },
    "acad": {
        "name": "Academic Team",
        "ribbon": {
            //
        }
    },
    "drill": {
        "name": "Drill Team",
        "ribbon": {
            //
        }
    },
    "colorguard": {
        "name": "Color Guard",
        "ribbon": {
            //
        }
    },
    "stem": {
        "name": "S.T.E.M.",
        "ribbon": {
            //
        }
    },
    "mk": {
        "name": "Marksmanship",
        "ribbon": {
            //
        }
    },
    "ortr": {
        "name": "Orienteering",
        "ribbon": {
            //
        }
    },
    "intservcomp": {
        "name": "Inter-service Competition",
        "ribbon": {
            //
        }
    },
    "rec": {
        "name": "Recruiting",
        "ribbon": {
            //
        }
    },
    "blt": {
        "name": "Leadership Training",
        "ribbon": {
            //
        }
    },
    "seacr": {
        "name": "Sea Cruise",
        "ribbon": {
            //
        }
    },
    "cert": {
        "name": "C.E.R.T.",
        "ribbon": {
            sym: false,
            color: "#046616",
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
    }
}
var OrnamentData = {
    "star": {
        "bronze": "",
        "silver": "",
        "gold": ""
    },
    "lamp": {
        "bronze": "",
        "silver": "",
        "gold": ""
    },
    "anchor": "",
    "drone": ""
}
var Game = {
    canvas: document.createElement("canvas"),
    init: function(){
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        console.log('init');
    },
    test: function(){
        console.log('test');
        let width = 160;
        let ribbons = ["rdm", "exemcond", "cert", "honorcad"];
        let height = width*ribbonsizeratio;
        //center first row
        //ex. 3 per row, if 5 ribbons, first two should be centered
        let firstrowoffset = (3-ribbons.length%3)*width/2;
        for(let i = 0; i < ribbons.length; i++){
            this.drawRibbon((i%3)*width, Math.floor(i/3)*height, width, RibbonData[ribbons[i]].ribbon);
        }
    },
    drawRibbon: function(x = 0, y = 0, width = 160, ribdata = RibbonData.exemcond.ribbon, orndata = []){
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
        this.context.fillRect(x+width-2,y,2,height);
        this.context.fillRect(x,y+height-2,width,2);
        this.context.alpha = 1;

        //draw ornaments in a row at center of ribbon
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
            map[RibbonData[ribbon].name.toUpperCase()] = ribbon;
        }
    },
    //returns the 2 relevant columns of text
    parseXML: function(){
        return {
            ribs: ["EXEMPLARY CONDUCT", "NS I OUTSTANDING CADET", "PHYSICAL FITNESS"],
            devs: ["", "", "1 BRONZE LAMP"],
            orns: ["2 SILVER STARS", "", ""]
        };
    },
    parseMasterTable: function(table){
        let ribbons = [
                //
            ]
        for(let r of table.ribs){
            let rib = {
                id: this.map[r],
                orndata: {}
            }
            ribbons.add(rib);
        }
        return ribbons;
    }
}
function start(){
    Game.init();
    Game.test();
}
let ribdataold = {
    sym: true,
    color: "#000000",
    colors: [
        {
            color: "#0004ff",
            width: 0.5
        },
        {
            color: "#ff00e1",
            width: 0.25
        }
    ]
}
let ribdata = {
    sym: false,
    color: "#000000",
    colors: [
        {
            color: "#0004ff",
            start: 0,
            width: 0.5
        },
        {
            color: "#ff00e1",
            start: 0.75,
            width: 0.25
        }
    ]
}