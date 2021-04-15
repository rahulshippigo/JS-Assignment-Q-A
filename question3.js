function pattern(){
    let string = "";
    for(var i=1; i<=5; i++){
        for(var j=1; j<=i; j++){
            string = string + "* ";
        }
        string =string + "\n";
    }
    console.log(string);
}

pattern();