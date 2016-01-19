window.onload = function () {
    //check that js is working
    console.log("reading js");

    //capture the submit event
    document.f.onsubmit = processForm;

    //capture the reset event
    document.f.onreset = resetPage;

    //define process function
    function processForm() {

        //store user name in a variable
        var noun = document.f.noun.value;
        //store user liquid in a variable
        var liquid = document.f.liquid.value;
        var pluralObject1 = document.f.pluralObject1.value;
        var pluralObject2 = document.f.pluralObject2.value;
        var color = document.f.color.value;
        var organism = document.f.organism.value;
        var bodyPart = document.f.bodyPart.value;
        var song = document.f.song.value;
        var userName = document.f.userName.value;


        // makes the variable to in the console what the variable is

        console.log("noun: " + noun);
        console.log("liquid: " + liquid);
        
        
        //error detection
        if (noun == "" || liquid == "" || pluralObject1 == "" || pluralObject2 == "" || color == "" || organism == "" || bodyPart == "" || song == "" || userName == "" ) {
            alert("Your potion is missing something!");

        } else {

            //capture the msg element to change it's text and html
            var myMsg = document.getElementById("myMsg");
       var audio = new Audio('');
audio.play();
            

            myMsg.innerHTML = "<h1>" + userName + " " + "Potion </h1> <br>  In order to make the perfect <u> " + userName + "</u> potion, you must first grab a large cauldron and fill it halfway with <u>" + liquid + "</u>. Make sure to keep the flame on low so that the <u>" + liquid + "</u> stays at a low boil. While it is reaching a boil, make sure to crush 5 <u>" + pluralObject1 + "</u> into a fine powder. Once you are done, slowly pour the powder into the cauldron and stir clockwise for 1 minute. Slowly add 3 <u>" + pluralObject2 + "</u> until they fully dissolve and turn the <u>" + liquid + "</u>" + " " + "<u>" + color + "</u>. Add a couple of <u>" + organism + "</u>" + " " + "<u>" + bodyPart + "</u>. while slowly chanting the first five lines of <u>" + song + "</u>. If done correctly, the person who consumes this potion will turn into a <u>" + noun + "</u> for a period of 24 hours." ;
            
            myMsg.className = "show";
        
        }

        //prevent page from reloading
        return false;
    }

    //if user chooses "reset"
    function resetPage() {
        //remove any text from myMsg
        myMsg.innerHTML = "";
        //change the class name
        myMsg.className = "hide";
        //reset the emotion field      
        noun.value = "";
        //reset the liquid field
        liquid.value = "";
        //reset the pluralObject1 field
        pluralObject1.value = "";
        //reset the pluralObject2 field
        pluralObject2.value = "";
        //reset the color field
        color.value = "";
        //reset the organism field
        organism.value = "";
        //reset the bodyPart field
        bodyPart.value = "";
        //reset the song field
        song.value = "";
          //reset the userName field
        userName.value = "";

        return false;
    }
}
