/*
    Slykuiper  - Motion Graphics Design
    Website & Portfolio - http://slykuiper.com
    Twitter - @slykuiper
    Instagram - @slykuiper
    Email - corbin@slykuiper.com
*/

#include 'Slykuiper_func.jsxinc' // additional variables & functions

{
    function myScript(thisObj){
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
                                    rowOne: Group{orientation:'row', alignment:['fill','fill'],\
                                        buttonOne: Group{},\
                                        buttonTwo: Group{},\
                                        buttonThree: Group{},\
                                    },\
                                    rowTwo: Group{orientation:'row', alignment:['fill','fill'],\
                                        buttonOne: Group{},\
                                        buttonTwo: Group{},\
                                        buttonThree: Group{},\
                                    },\
                                    rowThree: Group{orientation:'row', alignment:['fill','top'],\
                                        buttonOne: Group{},\
                                        buttonTwo: Group{},\
                                        buttonThree: Group{},\
                                    },\
                                },\
                                rightSide: Group{orientation:'column', alignment:['','top'],\
                                    applyExpression: Button{text:'Apply'},\
                                    infoBtn: Button{text:'Info'},\
                                },\
                            },\
                            watermark: Group{orientation:'row', alignment:['fill', 'bottom'], alignChildren:['fill', ''],\
                                leftSide: Group{alignChildren:['left', ''],\
                                    myStaticText: StaticText{text:'http://slykuiper.com'},\
                                },\
                                rightSide: Group{alignChildren:['right', ''],\
                                    logo: Group{},\
                                },\
                            },\
                        }";
                        
            mainUI.grp = mainUI.add(mainUImenu);
            createDropDownFunctions();
            createAdditionalUI();
            
            function createAdditionalUI(){ // create additional menu objects
                var btn_r1b1 = buttonColorVector(mainUI.grp.dropDownCollection.leftSide.rowOne.buttonOne, icon_textlayer, '#FFFFFF', [45, 45]);
                var btn_r1b2 = buttonColorVector(mainUI.grp.dropDownCollection.leftSide.rowOne.buttonTwo, icon_solidlayer, '#FFFFFF', [45, 45]);
                var btn_r1b3 = buttonColorVector(mainUI.grp.dropDownCollection.leftSide.rowOne.buttonThree, icon_lightlayer, '#FFFFFF', [45, 45]);
                var btn_r2b1 = buttonColorVector(mainUI.grp.dropDownCollection.leftSide.rowTwo.buttonOne, icon_cameralayer, '#FFFFFF', [45, 45]);
                var btn_r2b2 = buttonColorVector(mainUI.grp.dropDownCollection.leftSide.rowTwo.buttonTwo, icon_nulllayer, '#FFFFFF', [45, 45]);
                var btn_r2b3 = buttonColorVector(mainUI.grp.dropDownCollection.leftSide.rowTwo.buttonThree, icon_shapelayer, '#FFFFFF', [45, 45]);
                var btn_r3b1 = buttonColorVector(mainUI.grp.dropDownCollection.leftSide.rowThree.buttonOne, icon_adjustmentlayer, '#FFFFFF', [45, 45]);
                //var btn_r3b2 = buttonColorVector(mainUI.grp.dropDownCollection.leftSide.rowThree.buttonTwo, icon_textlayer, '#FFFFFF', [45, 45]);
                //var btn_r3b3 = buttonColorVector(mainUI.grp.dropDownCollection.leftSide.rowThree.buttonThree, icon_textlayer, '#FFFFFF', [45, 45]);
                var btn_logo = buttonColorVector(mainUI.grp.watermark.rightSide.logo, icon_logo, '#FFFFFF', [45, 45]);
                
                btn_r1b1.onClick = function(){createCompLayers("text");}
                btn_r1b2.onClick = function(){createCompLayers("solid");}
                btn_r1b3.onClick = function(){createCompLayers("light");}
                btn_r2b1.onClick = function(){createCompLayers("camera");}
                btn_r2b2.onClick = function(){createCompLayers("null");}
                btn_r2b3.onClick = function(){createCompLayers("shape");}
                btn_r3b1.onClick = function(){createCompLayers("adjustment");}
                //btn_r3b2.onClick = function(){createCompLayers("adjustment");}
                //btn_r3b3.onClick = function(){createCompLayers("adjustment");}
                btn_logo.onClick = function(){visitURL('http://slykuiper.com');}
                
                var expressionDDList =  mainUI.grp.dropDownCollection.leftSide.theDropDownList;
                expressionDDList.onChange = function(){
                    infoBoxTopText.text = expressionDDList.selection.text;
                    infoBoxTopText.text = infoBoxTopText.text.toUpperCase();
                    infoBoxBottomText.text = getExpressionInfo(expressionDDList.selection.text);
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