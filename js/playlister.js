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
  alert(playlist);
}
else if (choice == "delete"){
    var song = prompt("What song would you like to add?");
    var index = playlist.indexOf(song)
    playlist.splice(index, 1);
    alert(playlist);
}
else {
  alert("goodbye.")
}


//BONUS 1:
// var playlist = [];

// var choice = prompt("Your playlist is empty, would you like to add a song (yes, no)?");

// if (choice == "yes"){
//   var song = prompt("What song would you like to add?");
//   playlist.push(song);
// }

// choice = prompt("Would you like to add or delete a song?");

// if (choice == "add"){
//   var song = prompt("What song would you like to add?");
//   playlist.push(song);
//   alert(playlist);
// }
// else if (choice == "delete"){
//     var song = prompt("What song would you like to delete?");
//     var index = playlist.indexOf(song)
//     if (index == -1){
//       alert("That song is not on your playlist")
//     }
//     else { 
//       playlist.splice(index, 1);
//     }
//     alert(playlist);
// }
// else {
//   alert("goodbye.")
// }


//******BONUS 2********
// var playlist = [];

// var choice = prompt("Your playlist is empty, would you like to add a song (yes, no)?");

// if (choice == "yes"){
//   var song = prompt("What song would you like to add?");
//   playlist.push(song);
// }

// var next = "yes"
// while (next == "yes"){
//   choice = prompt("Would you like to add or delete a song?");

//   if (choice == "add"){
//     var song = prompt("What song would you like to add?");
//     playlist.push(song);
//     alert("Your playlist contains:" + playlist);
//     next = prompt("Would you like to continue? (yes, no)");

//   }
//   else if (choice == "delete"){
//       var song = prompt("What song would you like to add?");
//       var index = playlist.indexOf(song)
//       if (index == -1){
//         alert("That song is not on your playlist")
//       }
//       playlist.splice(index, 1);
//       alert("Your playlist contains:" + playlist);
//       next = prompt("Would you like to continue? (yes, no)");
//   }
// }

//**** DOUBLE BONUS***

// var playlist = [];

// function addSong(){
//   var song = prompt("What song would you like to add?");
//     playlist.push(song);
//     alert("Your playlist contains:" + playlist);
// }

// function deleteSong(){
//   var song = prompt("What song would you like to delete?");
//       var index = playlist.indexOf(song)
//       if (index == -1){
//         alert("That song is not on your playlist")
//       }
//       playlist.splice(index, 1);
//       alert("Your playlist contains:" + playlist);
// }

// var choice = prompt("Your playlist is empty, would you like to add a song (yes, no)?");

// if (choice == "yes"){
//   var song = prompt("What song would you like to add?");
//   playlist.push(song);
// }

// var next = "yes"
// while (next == "yes"){
//   choice = prompt("Would you like to add or delete a song?");

//   if (choice == "add"){
//     addSong();
//     next = prompt("Would you like to continue? (yes, no)");

//   }
//   else if (choice == "delete"){
//       deleteSong();
//       next = prompt("Would you like to continue? (yes, no)");
//   }
// }