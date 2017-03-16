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
        var version = '0.2';
        
        function myScript_buildUI(thisObj){
            var palette = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Slykuiper ToolKit", undefined, {resizeable:true});
            palette.orientation = 'stack';
            palette.alignChildren = ['fill','fill'];
            
            res = "group{orientation:'column', alignChildren:['fill', 'top'],\
                            header: Panel{orientation:'column',\
                                myStaticText: StaticText{text:'Slykuiper ToolKit'},\
                            },\
                            dropDownCollection: Group{orientation:'row', alignChildren:['fill', ''],\
                                theDropDownList: DropDownList{properties:{}},\
                                submitButton: Button{text:'Apply'},\
                            },\
                            watermark: Panel{orientation:'row', alignment:['fill', 'bottom'], alignChildren:['fill', ''],\
                                leftSide: Group{alignChildren:['left', ''],\
                                    myStaticText: StaticText{text:'http://slykuiper.com'},\
                                },\
                                rightSide: Group{alignChildren:['right', ''],\
                                    myImageBtn: Image{},\
                                },\
                            },\
                        }";
                        
            palette.grp = palette.add(res);
            
            createDropDownFunctions();
            createAdditionalUI();
            
            function createAdditionalUI(){
                var watermarkBtn = palette.grp.watermark.rightSide.myImageBtn;
                try{
                    watermarkBtn.image = File("slykuiper_img/logosmall.png");
                }catch(err){alert("The 'slykuiper_img' folder needs to be in the same location as Slykuiper ToolKit.jsx");}
            }
            
            function createDropDownFunctions(){
                // populate dropdown list with expression names
                var expressionDDList =  palette.grp.dropDownCollection.theDropDownList;
                for(i=0;i<expressionNames.length;i++){
                   expressionDDList.add("item",expressionNames[i]);
                }
                expressionDDList.selection = 0; // set dropdown list selection to first in array
                expressionDDList.onChange = function(){ // create selection listening function
                   //alert(expressionDDList.selection);
                }
                palette.grp.dropDownCollection.submitButton.onClick = function(){ // apply expression that's in dropdown list's selection when "Apply" is pressed.
                    var activeComp = app.project.activeItem; 
                    if(activeComp && activeComp instanceof CompItem){ // if the active element is a composition
                        var sel = activeComp.selectedProperties; // selected properties stored in variable
                        if(sel.length > 0){ // if it's an actual selection, set the expression
                            sel[0].expression = fetchExpression(expressionDDList.selection.text);
                        }
                    }
                }
            }
        
            // End of file stuff
            // Panel sizing
            palette.layout.layout(true);
            palette.grp.minimumSize = palette.grp.size;
            
            // Panel resizeability
            palette.layout.resize();
            palette.onResizing = palette.onResize = function(){this.layout.resize()};
            
            return palette;
        }
        var myScriptPal = myScript_buildUI(thisObj);
        
        if((myScriptPal != null) && (myScriptPal instanceof Window)){
            myScriptPal.center();
            myScriptPal.show();
        }
    }

    myScript(this);
}