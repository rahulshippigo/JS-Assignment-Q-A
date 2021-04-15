function findBookDetails(ID){
    var library = [
        { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
        { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
        { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
    
    for(var i=0; i<library.length; i++){
        if(ID === library[i].libraryID){
            return library[i];
        }
    }
        return "ID not Present";
    }
    console.log(findBookDetails(1254));