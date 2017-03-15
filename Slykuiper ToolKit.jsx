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
            
            var imgLogo = File("slykuiper_img/logosmall.png");
            
            res = "group{orientation:'column', alignChildren:['fill', 'top'],\
                            header: Panel{orientation:'column',\
                                myStaticText: StaticText{text:'Slykuiper ToolKit'},\
                            },\
                            dropDownCollection: Group{orientation:'row', alignChildren:['fill', ''],\
                                theDropDownList: DropDownList{properties:{}},\
                                submitButton: Button{text:'Apply'},\
                            },\
                            watermark: Panel{orientation:'row', alignChildren:['fill', ''],\
                                leftSide: Group{alignChildren:['left', ''],\
                                    myStaticText: StaticText{text:''},\
                                },\
                                rightSide: Group{alignChildren:['right', ''],\
                                    myImageBtn: Image{},\
                                },\
                            },\
                        }";
                        
            palette.grp = palette.add(res);
            
            populateDropDown();
            addUIStuff();
            
            function addUIStuff(){
                watermarkTxt = palette.grp.watermark.leftSide.myStaticText;
                watermarkBtn = palette.grp.watermark.rightSide.myImageBtn;
                
                watermarkTxt.add("text", "sly");
                watermarkBtn.add("image", imgLogo2);
            }
            
            function populateDropDown(){
                var dropdownVar =  palette.grp.dropDownCollection.theDropDownList;
                for(i=0;i<expressionNames.length;i++){
                   dropdownVar.add("item",expressionNames[i]);
                }
               dropdownVar.selection = 0;
            }

            function callExpression(name){
                var expressionName = name;
                var activeComp = app.project.activeItem; 
                
                if(activeComp && activeComp instanceof CompItem){ // if the active element is a composition
                    var sel = activeComp.selectedProperties; // selected properties stored in variable
                    if(sel.length > 0){ // if it's an actual selection, set the expression
                        sel[0].expression = fetchExpression(expressionName);
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