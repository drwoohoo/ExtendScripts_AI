
// Selects all of the groupItems on the stage, adds them to the Symbol palette and then prompts you for a name.
// It will then rename all of the symbols with the name you entered, as well as adding an underscore '_' and sequential
// numbers, up to 9,999, so that the symbols will be in order when imported into Flash. 

// Copyright, 2007, Dr. Woohoo!, All Rights Reserved.	

if ( app.documents.length > 0 ) { 
	doc = app.activeDocument; 
	myLayer = doc.activeLayer;
	myItems = myLayer.groupItems;
	for (a=0;a<myItems.length;a++){
		myItems[a].selected = true;		
		curItem = doc.selection[a];
		doc.symbols.add(curItem);		
	}
} 

// RENAME THEM...
if (doc != null){
	var myName = prompt("What would you like to name the Symbols?", "myName");
}

var mySymbols = doc.symbols;
for (a = 0;a<mySymbols.length;a++){
	if (a < 10){
		doc.symbols[a].name = myName+'_000'+a;
		} else if (a > 9 && a < 100) {
			doc.symbols[a].name = myName+'_00'+a;
			} else if (a > 99 && a < 1000) {
				doc.symbols[a].name = myName+'_0'+a;			
				} else {
					doc.symbols[a].name = myName+'_'+a;				
					}
}