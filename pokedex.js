function logic() {
    console.log("Button pressed !!")

    // First thing to do is get input from user
    let name = document.getElementById("name");
    let type = document.getElementById("type");
    let region = document.getElementById("region");

   
    // Get String values of variables
    name = name.value;
    type = type.value;
    region = region.value;

    // Can log them since they are now pure Strings
    console.log("Pokemon name : " + name )
    console.log("Pokemon type :  " + type )
    console.log("Pokemon regions : " + region)
    

/*-----------------------------------------------
 * Add your solution code here
 *---------------------------------------------*/

/* --- Part 1 : Create pokemon data Object --- */

                // Use If to ensure input validation (ensure input fields are !empty)


        // Create pokemon object here (const pokemon) using user input Strings
       


        // Create a span element (const pokemonData) and put the pokemon objects properties inside of it
        
    var nameInput =
        document.createTextNode(name)
    var typeInput = 
        document.createTextNode(type)
    var regioninput = 
        document.createTextNode(region) 
    

    
      /* --- Part 2 : Creating other DOM Objects --- */
        
        // Create HTML li element here (const pokedexEntry)
        // Give pokedexEntry (li) a new class equal to the "type" property of the pokemon object
    
    var newLi_1 = document.createElement("li")
    newLi_1.appendChild(nameInput);
    var newLi_2 = document.createElement("li")
    newLi_2.appendChild(typeInput);
    var newLi_3 = document.createElement("li")
    newLi_3.appendChild(regioninput);
    var newLi_button = document.createElement("li")
    newLi_button.appendChild(document.getElementById("listButton"));


    document.getElementById("pokedex-entries").appendChild(newLi_1)
    document.getElementById("pokedex-entries").appendChild(newLi_2)
    document.getElementById("pokedex-entries").appendChild(newLi_3)
    document.getElementById("pokedex-entries").appendChild(newLi_button)
}


// Creating a preview button (using a Template Literal)
        // this code is for an html form that will Google search the name of the pokemon
        const previewButton = `
            <form action="http://google.com/search" target="_blank">
                <input name="q" hidden value="${name}">
                <input type="submit">
            </form>
        `

         /* --- Part 3 : Add things into the DOM --- */

        // Firstly append pokemonData to the innerHTML of pokedexEntry


        // Secondly append the previewButton to innerHTML of pokedexEntry


        // Lastly we will get the ul List element that is meant to contain all pokedex entries
        // The we will append pokedexEntry to the innerHTML of the pokedexEntries ul element


function preview(){
    console.log("Preview pressed");
    let name = document.getElementById("name");
    name = name.value;
    console.log(name);

    const previewButton = `
    <form action="http://google.com/search" target="_blank" >
        <input name="q" hidden value="${name}">
        <input type="submit">
    </form>
`

    document.getElementById("test").innerHTML = previewButton
    document.getElementById("poke-entries").innerHTML = previewButton
    console.log(previewButton);


}


/*-----------------------------------------------
 * Solution must be above this comment
 *---------------------------------------------*/
