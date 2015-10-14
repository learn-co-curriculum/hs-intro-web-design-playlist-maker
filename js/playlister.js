// Code Your Solution Here

var playlist = [];

var choice = prompt("Your playlist is empty, would you like to add a song (yes, no)?");

if (choice == "yes"){
  var song = prompt("What song would you like to add?");
  playlist.push(song);
}

choice = prompt("Would you like to add or delete a song?");

if (choice == "add"){
  var song = prompt("What song would you like to add?");
  playlist.push(song);
  alert(playlist)
}
else if (choice == "delete"){
    var song = prompt("What song would you like to add?");
    var index = playlist.indexOf(song)
    playlist.splice(index, 1);
    alert(playlist)
}
else {
  alert("goodbye.")
}


