// Export Swatches to Hype
// Converts selected colors from the Swatches Panel into code ready to use with the HYPE FRAMEWORK.
// 
// The Hype Framework was developed independently by Joshua Davis and Branden Hall and can be downloaded from http://www.hypeframework.org.
// 
// Distributed under the MIT license. See http://www.opensource.org/licenses/mit-license.php for details.
// Copyright (c) 2011, Dr. Woohoo!
// http://DrWoohoo.com
// All rights reserved.
// v.01 


if ( app.documents.length > 0 ) { 
	var doc = app.activeDocument;
	var sSwatches = doc.swatches.getSelected();
    var colors = "";
    var swatchesLength = sSwatches.length;
    
    colors += "\nvar color:ColorPool = new ColorPool( ";
   
    var k = 0;
    for  (var j = 0; j < swatchesLength; j++)
    {
        aColor = sSwatches[j].color;
        if (aColor.red == undefined) 
        {
        } else {
               var newHex = RGBtoHEX(aColor.red, aColor.green, aColor.blue);
               newHex = "0x" + newHex.toString(16);

//            $.writeln(j+': '+newHex);
            
               var divider;
               if (j != swatchesLength-1)
               {
                   divider = ", ";
               } else {
                   divider = "";
               }
               colors += newHex+divider;
               k++;
        }            
    }
    colors += " );"           
   
   if (k == 0)
   {
        alert('Please select colors from the Swatches Panel and run this script again.');
   } else {
        alert(colors);    
   }
}

function RGBtoHEX(r, g, b) {
    return r << 16 | g << 8 | b;
}