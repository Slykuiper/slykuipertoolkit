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
                                },\
                                rightSide: Group{orientation:'column',\
                                    applyBtn: Button{text:'Apply'},\
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
            
            function createAdditionalUI(){ // create additional menu objects
                var expressionDDList =  mainUI.grp.dropDownCollection.leftSide.theDropDownList;
                expressionDDList.onChange = function(){
                    infoBoxTopText.text = expressionDDList.selection.text;
                    infoBoxTopText.text = infoBoxTopText.text.toUpperCase();
                    infoBoxBottomText.text = fetchExpression(expressionDDList.selection.text, "info");
                }
                // logo button
                var watermarkBtn = mainUI.grp.watermark.rightSide.myImageBtn;
                try{ watermarkBtn.image = File("slykuiper_img/logosmall.png"); }catch(err){alert("The 'slykuiper_img' folder needs to be in the same location as Slykuiper ToolKit.jsx");}
                 watermarkBtn.onClick = function(){
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
                mainUI.grp.dropDownCollection.rightSide.applyBtn.onClick = function(){ // apply expression that's in dropdown list's selection when "Apply" is pressed.
                    var activeComp = app.project.activeItem; 
                    if(activeComp && activeComp instanceof CompItem){ // if the active element is a composition
                        var sel = activeComp.selectedProperties; // selected properties stored in variable
                        if(sel.length > 0){ // if it's an actual selection, set the expression
                            sel[0].expression = fetchExpression(expressionDDList.selection.text, "code");
                        }
                    }
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