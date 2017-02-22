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
            res = "group{orientation:'column',\
                            watermark: Panel{orientation:'row', alignment:['fill', 'top'], alignChildren:['fill', 'fill'],\
                                leftSide: Group{orientation:'row', alignChildren:['left', 'bottom'],\
                                    myStaticText: StaticText{text:'www.slykuiper.com'},\
                                },\
                                rightSide: Group{orientation:'row', alignChildren:['right', 'bottom'],\
                                    myImageBtn: Image{text:'Image', image:'~/Desktop/scripttest/icon1.png'},\
                                },\
                            },\
                            buttonTabs: Panel{type:'tabbedpanel', alignment:['left', 'top'], alignChildren:['left', 'top'],\
                                page1: Panel{orientation:'column', type:'tab', text:'Tab 1', alignment:['left', 'top'], alignChildren:['left', 'top'],\
                                    row1: Group{orientation:'row',\
                                        button1: Button{text:'seamless wiggle loop'},\
                                        button2: Button{text:'overshoot'},\
                                        button3: Button{text:'calculation overshoot'},\
                                    },\
                                    row2: Group{orientation:'row',\
                                        button1: Button{text:'keyframe overshoot'},\
                                        button2: Button{text:'loopout pingpong'},\
                                        button3: Button{text:'loopout cycle'},\
                                     },\
                                    row3: Group{orientation:'row',\
                                        button1: Button{text:'bounce back'},\
                                        button2: Button{text:'inertial bounce'},\
                                        button3: Button{text:'path xpos offset'},\
                                     },\
                                },\
                                page2: Panel{orientation:'column', type:'tab', text:'Tab 2', alignment:['left', 'top'], alignChildren:['left', 'top'],\
                                    row1: Group{orientation:'row',\
                                        button1: Button{text:'circle path'},\
                                        button2: Button{text:'spiral path'},\
                                        button3: Button{text:'rot based xpos'},\
                                    },\
                                    row2: Group{orientation:'row',\
                                        button1: Button{text:'seamless wiggle loop'},\
                                        button2: Button{text:'seamless wiggle loop'},\
                                        button3: Button{text:'seamless wiggle loop'},\
                                     },\
                                    row3: Group{orientation:'row',\
                                        button1: Button{text:'seamless wiggle loop'},\
                                        button2: Button{text:'seamless wiggle loop'},\
                                        button3: Button{text:'seamless wiggle loop'},\
                                     },\
                                },\
                                page3: Panel{orientation:'column', type:'tab', text:'Tab 3', alignment:['left', 'top'], alignChildren:['left', 'top'],\
                                    row1: Group{orientation:'row',\
                                        button1: Button{text:'seamless wiggle loop'},\
                                        button2: Button{text:'seamless wiggle loop'},\
                                        button3: Button{text:'seamless wiggle loop'},\
                                    },\
                                    row2: Group{orientation:'row',\
                                        button1: Button{text:'seamless wiggle loop'},\
                                        button2: Button{text:'seamless wiggle loop'},\
                                        button3: Button{text:'seamless wiggle loop'},\
                                     },\
                                    row3: Group{orientation:'row',\
                                        button1: Button{text:'seamless wiggle loop'},\
                                        button2: Button{text:'seamless wiggle loop'},\
                                        button3: Button{text:'seamless wiggle loop'},\
                                     },\
                                },\
                                page4: Panel{orientation:'column', type:'tab', text:'Tab 4', alignment:['left', 'top'], alignChildren:['left', 'top'],\
                                    row1: Group{orientation:'row',\
                                        button1: Button{text:'seamless wiggle loop'},\
                                        button2: Button{text:'seamless wiggle loop'},\
                                        button3: Button{text:'seamless wiggle loop'},\
                                    },\
                                    row2: Group{orientation:'row',\
                                        button1: Button{text:'seamless wiggle loop'},\
                                        button2: Button{text:'seamless wiggle loop'},\
                                        button3: Button{text:'seamless wiggle loop'},\
                                     },\
                                    row3: Group{orientation:'row',\
                                        button1: Button{text:'seamless wiggle loop'},\
                                        button2: Button{text:'seamless wiggle loop'},\
                                        button3: Button{text:'seamless wiggle loop'},\
                                     },\
                                },\
                            },\
                        }";
            
            palette.grp = palette.add(res);
        
            // page one buttons
            palette.grp.buttonTabs.page1.row1.button1.onClick = function(){callExpression("seamless wiggle loop");}
            palette.grp.buttonTabs.page1.row1.button2.onClick = function(){callExpression("overshoot");}
            palette.grp.buttonTabs.page1.row1.button3.onClick = function(){callExpression("calculation overshoot");}
            palette.grp.buttonTabs.page1.row2.button1.onClick = function(){callExpression("keyframe overshoot");}
            palette.grp.buttonTabs.page1.row2.button2.onClick = function(){callExpression("loopout pingpong");}
            palette.grp.buttonTabs.page1.row2.button3.onClick = function(){callExpression("loopout cycle");}
            palette.grp.buttonTabs.page1.row3.button1.onClick = function(){callExpression("bounce back");}
            palette.grp.buttonTabs.page1.row3.button2.onClick = function(){callExpression("inertial bounce");}
            palette.grp.buttonTabs.page1.row3.button3.onClick = function(){callExpression("path xpos offset");}
            // page two buttons
            palette.grp.buttonTabs.page2.row1.button1.onClick = function(){callExpression("circle path");}
            palette.grp.buttonTabs.page2.row1.button2.onClick = function(){callExpression("spiral path");}
            palette.grp.buttonTabs.page2.row1.button3.onClick = function(){callExpression("rot based xpos");}
            palette.grp.buttonTabs.page2.row2.button1.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page2.row2.button2.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page2.row2.button3.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page2.row3.button1.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page2.row3.button2.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page2.row3.button3.onClick = function(){alert("Oh no!");}
            // page three buttons
            palette.grp.buttonTabs.page3.row1.button1.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page3.row1.button2.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page3.row1.button3.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page3.row2.button1.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page3.row2.button2.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page3.row2.button3.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page3.row3.button1.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page3.row3.button2.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page3.row3.button3.onClick = function(){alert("Oh no!");}
            // page four buttons
            palette.grp.buttonTabs.page4.row1.button1.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page4.row1.button2.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page4.row1.button3.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page4.row2.button1.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page4.row2.button2.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page4.row2.button3.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page4.row3.button1.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page4.row3.button2.onClick = function(){alert("Oh no!");}
            palette.grp.buttonTabs.page4.row3.button3.onClick = function(){alert("Oh no!");}
            
            /*palette.grp.watermark.rightSide.myImageBtn.onClick = function () 
            { 
                //alert();
            };*/

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