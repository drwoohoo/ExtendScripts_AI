// Removes Symbols from the Symbols Panel.
// Distributed under the MIT license. See http://www.opensource.org/licenses/mit-license.php for details.
// Copyright (c) 2011, Dr. Woohoo!
// http://DrWoohoo.com
// All rights reserved.


var doc = app.activeDocument;
var proceed = confirm("Are you sure you want to delete all the Symbols?");
if (proceed) {
	var mySymbols = doc.symbols;
	mySymbols.removeAll();
}
