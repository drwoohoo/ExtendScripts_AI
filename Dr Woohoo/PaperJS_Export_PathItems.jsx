// PaperJS_Export_PathItems
// Exports the Anchor Points of PathItem(s) drawn in Adobe Illustrator in a format that's ready to use in PaperJS. 
// The objective is to easily create more complex shapes in Illustrator and then convert it to a format that will work within PaperJS.
// This is an interim solution until SVG import/export is supported in PaperJS.
// Distributed under the MIT license. See http://www.opensource.org/licenses/mit-license.php for details.
// Copyright (c) 2011, Dr. Woohoo!
// http://DrWoohoo.com
// All rights reserved.
// v.01 Extracts Fill & Stroke colors from a PathItem as well as the Anchor Points along the paths. 


var doc = app.activeDocument;
var docLayer = doc.activeLayer;
var aPathItems = docLayer.pathItems;
var newPath = "Paths for PaperJS"   +"\n";
var selectedPathItems = false;

for (var i = 0; i < aPathItems.length; i++)
{
    var currentPathItem = aPathItems[i];
    
    if (currentPathItem.selected)
    {
        // Get the Color of the current PathItem
        var newFillColor = currentPathItem.fillColor;
        if (currentPathItem.strokeColor.typename != "NoColor") var newStrokedColor = currentPathItem.strokeColor;

        // Normalize colors
        var redFill     = Math.round(newFillColor.red)/255;
        var greenFill  = Math.round(newFillColor.green)/255;
        var blueFill  = Math.round(newFillColor.blue)/255;        
        
        if (currentPathItem.strokeColor.typename != "NoColor")
        {
            var redStroke = Math.round(newStrokedColor.red)/255;
            var greenStroke = Math.round(newStrokedColor.green)/255;
            var blueStroke = Math.round(newStrokedColor.blue)/255;        
        }
        
        // Add it to the String
        newPath +=  "var path_"+i +" = new Path();"    +"\n"+
                            "path_"+i +".fillColor = new RGBColor("+redFill+", " +greenFill+", "+blueFill+");"+"\n";
                            
        if (currentPathItem.strokeColor.typename != "NoColor")
        {
            newPath +=  "path_"+i +".strokeColor = new RGBColor("+redStroke+", " +greenStroke+", "+ blueStroke+");"+"\n";
        }                    
        newPath +=  "path_"+i +".closed = true;\n";   
              
        //for (var j = 0; j < currentPathItem.pathPoints.length; j++)
        for (var j = currentPathItem.pathPoints.length-1; j >= 0; j--)
        {
            // Get the Points along the PathItem
            var newPathPt = currentPathItem.pathPoints[j];
            // Add it to the String            
            newPath +=   "path_"+i +".add(new Point("+Math.round(newPathPt.anchor[0])+", "+ Math.round(newPathPt.anchor[1]) +") );\n";            
        }    
    
        newPath += "var placedSymbol_"+i+" = new PlacedSymbol(path_"+i+");"+"\n"+
                            "layer.insertChild(0, placedSymbol_"+i+");"+"\n\n";
        selectedPathItems = true;
    }
}

if (selectedPathItems) 
{
    alert(newPath);    
} else {
    alert("Select a PathItem on the ArtBoard");
}