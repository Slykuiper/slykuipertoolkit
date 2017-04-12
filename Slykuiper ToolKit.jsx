/*
    Slykuiper  - Motion Graphics Design
    Website & Portfolio - http://slykuiper.com
    Twitter - @slykuiper
    Instagram - @slykuiper
    Email - corbin@slykuiper.com
*/

#include 'Slykuiper_expressions.jsxinc' // expression definitions & functions

{
    function myScript(thisObj){
        var version = '0.5';
        
        function myScript_buildUI(thisObj){
            var mainUI = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Slykuiper ToolKit", undefined, {resizeable:true});
            mainUI.orientation = 'stack';
            mainUI.alignChildren = ['fill','fill'];
            
            mainUImenu = "group{orientation:'column', alignChildren:['fill', 'top'],\
                            header: Panel{orientation:'column',\
                                headerText: StaticText{text:'Slykuiper ToolKit'},\
                            },\
                            dropDownCollection: Group{orientation:'row', alignChildren:['fill', ''],\
                                leftSide: Group{orientation:'column', alignment:['fill', 'top'],\
                                    theDropDownList: DropDownList{properties:{}},\
                                    rowOne: Group{orientation:'row', alignment:['fill','top'],\
                                        buttonOne: IconButton{},\
                                        buttonTwo: IconButton{},\
                                        buttonThree: IconButton{},\
                                    },\
                                    rowTwo: Group{orientation:'row', alignment:['fill','top'],\
                                        buttonOne: IconButton{},\
                                        buttonTwo: IconButton{},\
                                        buttonThree: IconButton{},\
                                    },\
                                    rowThree: Group{orientation:'row', alignment:['fill','top'],\
                                        buttonOne: IconButton{},\
                                    },\
                                },\
                                rightSide: Group{orientation:'column',\
                                    applyExpression: Button{text:'Apply'},\
                                    infoBtn: Button{text:'Info'},\
                                },\
                            },\
                            watermark: Group{orientation:'row', alignment:['fill', 'bottom'], alignChildren:['fill', ''],\
                                leftSide: Group{alignChildren:['left', ''],\
                                    myStaticText: StaticText{text:'http://slykuiper.com'},\
                                },\
                                rightSide: Group{alignChildren:['right', ''],\
                                    myImageBtn: IconButton{},\
                                },\
                            },\
                        }";
                        
            mainUI.grp = mainUI.add(mainUImenu);
            createDropDownFunctions();
            createAdditionalUI();
            createLayers();
            
            function createAdditionalUI(){ // create additional menu objects
                var expressionDDList =  mainUI.grp.dropDownCollection.leftSide.theDropDownList;
                expressionDDList.onChange = function(){
                    infoBoxTopText.text = expressionDDList.selection.text;
                    infoBoxTopText.text = infoBoxTopText.text.toUpperCase();
                    infoBoxBottomText.text = getExpressionInfo(expressionDDList.selection.text);
                }
                // logo button
                try{
                    mainUI.grp.watermark.rightSide.myImageBtn.image = File("slykuiper_img/logosmall.png"); 
                    mainUI.grp.dropDownCollection.leftSide.rowOne.buttonOne.image = File("slykuiper_img/textlayer.png"); 
                    mainUI.grp.dropDownCollection.leftSide.rowOne.buttonTwo.image = File("slykuiper_img/solidlayer.png"); 
                    mainUI.grp.dropDownCollection.leftSide.rowOne.buttonThree.image = File("slykuiper_img/lightlayer.png"); 
                    mainUI.grp.dropDownCollection.leftSide.rowTwo.buttonOne.image = File("slykuiper_img/cameralayer.png"); 
                    mainUI.grp.dropDownCollection.leftSide.rowTwo.buttonTwo.image = File("slykuiper_img/nulllayer.png"); 
                    mainUI.grp.dropDownCollection.leftSide.rowTwo.buttonThree.image = File("slykuiper_img/shapelayer.png"); 
                    mainUI.grp.dropDownCollection.leftSide.rowThree.buttonOne.image = File("slykuiper_img/adjustmentlayer.png"); 
                }catch(err){alert("The 'slykuiper_img' folder needs to be in the same location as Slykuiper ToolKit.jsx");}
                 mainUI.grp.watermark.rightSide.myImageBtn.onClick = function(){
                     if ($.os.indexOf("Windows") !== -1)
                        system.callSystem("C:/Program Files (x86)/Google/Chrome/Application/chrome.exe" + " " + "http://slykuiper.com");
                    else
                        system.callSystem("osascript -e 'open location \"" + "http://slykuiper.com" + "\"'");    
                 }
                // info box
                var infoBox = new Window('palette',"Expression Information",undefined,{closeButton:true,resizeable:false, orientation:["column"]});
                infoBox.size = [300,300];
                var infoBoxTop = infoBox.add("panel", undefined); // title text
                    infoBoxTop.orientation = "column";
                    infoBoxTop.alignment = ['fill','top'];
                    var infoBoxTopText = infoBoxTop.add("statictext", [0,0,250,20], "null");
                    infoBoxTopText.text = expressionNames[0];
                    infoBoxTopText.text = infoBoxTopText.text.toUpperCase();
                var infoBoxBottom = infoBox.add("panel", undefined); // body text
                    infoBoxBottom.orientation = "column";
                    infoBoxBottom.alignment = ['fill','fill'];
                     var infoBoxBottomText = infoBoxBottom.add("statictext", [0,0,250,250], "null",{multiline:true});
                     infoBoxBottomText.text = expressionInfo[0];
                var infoBoxCancel = infoBox.add('button',undefined,"Close"); // cancel button
                    infoBoxCancel.alignment = ['fill', 'bottom'];
                    infoBoxCancel.onClick = function(){infoBox.hide();};
                mainUI.grp.dropDownCollection.rightSide.infoBtn.onClick = function(){ // info button toggle
                    if (infoBox.visible) infoBox.hide(); else infoBox.show();
                }
            }

            function createDropDownFunctions(){
                // populate dropdown list with expression names
                var expressionDDList =  mainUI.grp.dropDownCollection.leftSide.theDropDownList;
                for(i=0;i<expressionNames.length;i++){
                   expressionDDList.add("item",expressionNames[i]);
                }
                expressionDDList.selection = 0; // set dropdown list selection to first in array
                expressionDDList.onChange = function(){} //dropdown list listening function
                mainUI.grp.dropDownCollection.rightSide.applyExpression.onClick = function(){ // apply expression that's in dropdown list's selection when "Apply" is pressed.
                    var activeComp = app.project.activeItem; 
                    if(activeComp && activeComp instanceof CompItem){ // if the active element is a composition
                        var thisLayer = activeComp.selectedLayers[0]; // selected layer
                        var thisLayerProperties = activeComp.selectedProperties; // selected properties stored in variable
                        if(thisLayerProperties.length > 0){ // if it's an actual selection, set the expression
                            applyExpression(expressionDDList.selection.text);
                        }
                    }
                }
            }
        
            function createLayers(){ // create layers
                mainUI.grp.dropDownCollection.leftSide.rowOne.buttonOne.onClick = function(){createCompLayers("text");}
                mainUI.grp.dropDownCollection.leftSide.rowOne.buttonTwo.onClick = function(){createCompLayers("solid");}
                mainUI.grp.dropDownCollection.leftSide.rowOne.buttonThree.onClick = function(){createCompLayers("light");}
                mainUI.grp.dropDownCollection.leftSide.rowTwo.buttonOne.onClick = function(){createCompLayers("camera");}
                mainUI.grp.dropDownCollection.leftSide.rowTwo.buttonTwo.onClick = function(){createCompLayers("null");}
                mainUI.grp.dropDownCollection.leftSide.rowTwo.buttonThree.onClick = function(){createCompLayers("shape");}
                mainUI.grp.dropDownCollection.leftSide.rowThree.buttonOne.onClick = function(){createCompLayers("adjustment");}
                //mainUI.grp.dropDownCollection.leftSide.rowThree.buttonTwo.onClick = function(){}
                //mainUI.grp.dropDownCollection.leftSide.rowThree.buttonThree.onClick = function(){}
            }
            
            function createCompLayers(type){
                var curComp = app.project.activeItem;
                if (!curComp || !(curComp instanceof CompItem)){
                    alert('noComp');
                    return;
                }
                // what type of layer
                if(type == "text"){
                    str = prompt('Text: ', '');
                    if(str.length < 1){
                        return;
                    }
                    curComp.layers.addText(str);
                }
                if(type == "solid"){
                    str = prompt('Solid layer name: ', '');
                    if(str.length < 1){
                        return;
                    }
                    var newSolid = curComp.layers.addSolid([1,1,1], str, curComp.width, curComp.height, curComp.pixelAspect, curComp.duration);
                    newSolid.moveToBeginning();
                }
                if(type == "light"){
                    str = prompt('Light name: ', '');
                    if(str.length < 1){
                        return;
                    }
                    curComp.layers.addLight(str, [curComp.width/2, curComp.height/2]);
                }
                if(type == "camera"){
                    str = prompt('Camera name: ', '');
                    if(str.length < 1){
                        return;
                    }
                    var newCam = curComp.layers.addCamera(str, [curComp.width/2, curComp.height/2]);
                    newCam.position = [curComp.width, curComp.height, -2400];
                }
                if(type == "null"){
                    var newNull = curComp.layers.addNull(curComp.duration);
                }
                if(type == "shape"){
                    curComp.layers.addShape();
                }
                if(type == "adjustment"){
                    str = prompt('Adjustment layer name: ', '');
                    if(str.length < 1){
                        return;
                    }
                    var newAdj = curComp.layers.addSolid([1,1,1],str, curComp.width, curComp.height, curComp.pixelAspect, curComp.duration);
                    newAdj.label = 5;
                    newAdj.adjustmentLayer = true;
                    newAdj.moveToBeginning();
                }
            }
            
            // End of file stuff
            // Panel sizing
            mainUI.layout.layout(true);
            mainUI.grp.minimumSize = mainUI.grp.size;
            mainUI.layout.resize();
            mainUI.onResizing = mainUI.onResize = function(){this.layout.resize()};
            return mainUI;
        }
        var myScriptPal = myScript_buildUI(thisObj);
        
        if((myScriptPal != null) && (myScriptPal instanceof Window)){
            myScriptPal.center();
            myScriptPal.show();
        }
    }

    myScript(this);
}