// Adds swatches in the Swatches Panel.

// Distributed under the MIT license. See http://www.opensource.org/licenses/mit-license.php for details.
// Copyright (c) 2011, Dr. Woohoo!
// http://DrWoohoo.com
// All rights reserved.

if ( app.documents.length > 0 ){
	var doc = app.activeDocument;
	var artLayer = doc.layers[0];
	app.defaultStroked = true;
	app.defaultFilled = true;
	doc.spots.removeAll();	
	// ADD WHITE & BLACK TO THE BEGINNING
	// Define the new color value
	var newRGB = doc.swatches.add();	
	var newColor = new RGBColor();
	var bw = 0;
	newColor.red = bw;
	newColor.green = bw;
	newColor.blue = bw;			
	newRGB.name = "Black";
	newRGB.colorType = ColorModel.PROCESS;
	newRGB.color = newColor;
	var newRGBColor = new RGBColor;
	newRGBColor.RGB = newRGB;	
	
	// Define the new color value
	var newRGB = doc.swatches.add();		
	var newColor = new RGBColor();
	var bw = 255;
	newColor.red = bw;
	newColor.green = bw;
	newColor.blue = bw;			
	newRGB.name = "White";
	newRGB.colorType = ColorModel.PROCESS;
	newRGB.color = newColor;
	var newRGBColor = new RGBColor;
	newRGBColor.RGB = newRGB;	
	
	// CREATE THE PALETTE FIRST
	var myPal = Array(Array(255, 251, 251), Array(255, 245, 245), Array(19, 100, 20), Array(140, 140, 0), Array(10, 20, 90), Array(200, 100, 50) ); 
	for (a=0;a<myPal.length;a++){
		// Create the new spot
		// var newSpot = doc.spots.add();
		var newRGB = doc.swatches.add();
		
		// Define the new color value
		var newColor = new RGBColor();
		newColor.red = myPal[a][0];
		newColor.green = myPal[a][1];
		newColor.blue = myPal[a][2];		
		
		// ADD RGB COLORS
		newRGB.name = "R=" + myPal[a][0] + " G="  + myPal[a][1] + " B=" + myPal[a][2];
		newRGB.colorType = ColorModel.PROCESS;
		newRGB.color = newColor;
		var newRGBColor = new RGBColor;
		newRGBColor.RGB = newRGB;
	}
}