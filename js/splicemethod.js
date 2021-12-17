let myFish = ("anioł", "klaun", "mandarynka", "chirurg");
document.writeln(myFish:  + myFish + '<BR>' );

removed = myFish.splice(0, 2, "papuga", "zawilec", "niebieski")
document.writeln("Po zastąpieniu 2: " + myFish);
document.writeln("usuniety jest: "+ removed + "<BR>");
