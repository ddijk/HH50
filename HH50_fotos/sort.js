function go() {
// fetch img.  Returns an HTMLCollection
var items = document.getElementsByTagName('img');

// the following does not work because "items" is not
// an array and doesn't have a sort method.  Uncomment-
// ing this line will result in the following:
// "Uncaught TypeError: items.sort is not a function".
/* items.sort(); */

// magically coerce into an array first
items = Array.prototype.slice.call(items);

// Now we can sort it.  Sort alphabetically
items.sort(function(a, b){
//    return a.textContent.localeCompare(b.textContent);
//   console.log('here we go:'+  a.getAttribute('jaar'), a);
 		
    jaarB = getJaar(b.getAttribute('src'));
    jaarA = getJaar(a.getAttribute('src'));

    return jaarA - jaarB;
});

// reatach the sorted elements
for(var i = 0, len = items.length; i < len; i++) {
    // store the parent node so we can reatach the item
    var parent = items[i].parentNode;
    // detach it from wherever it is in the DOM
    var detatchedItem = parent.removeChild(items[i]);
    // reatach it.  This works because we are itterating
    // over the items in the same order as they were re-
    // turned from being sorted.
    parent.appendChild(detatchedItem);
}

// insert headers
var jaren = [];
for ( var i =0; i <items.length; i++ ) {
     
     var jaar = getJaar(items[i].getAttribute('src'));

     if ( jaren.includes(jaar) ) continue;

     jaren.push(jaar);

     var header = document.createElement("H1");
     var headerText = document.createTextNode("Jaar "+jaar);

     header.appendChild(headerText);
     items[i].parentNode.insertBefore(header, items[i]);
}

}

function getJaar(filename) {
   
        var lastComponent = filename.split('/').pop();

        var regex = /^(\d{4})_.*/;
      
        var result =  lastComponent.match(regex).pop();
       
        return parseInt(result);
}
