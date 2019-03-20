let edamamApi = "https://api.edamam.com/search?";
let api_id = "&app_id=8aed0130";
let api_key = "&app_key=10bf9207b3dc2e5353697f16d6db3510";

let result_count = "&from=0&to=1";
// let ingredient = "q=chicken";

window.onload = function() {
  let pressed = document.getElementById("typeIngredients");
  pressed.onsubmit = function(e) {
    e.preventDefault();
    let ingredient = "q=" + pressed.item.value;

    let url = edamamApi + ingredient + api_id + api_key + result_count;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        //print out recipe line by line
        let recipeList = json.hits[0].recipe.ingredientLines;
        for (let i = 0; i < recipeList.length; i++) {
          document.getElementById("recipe").innerHTML = recipeList[i];
        }
        console.log(json.hits[0].recipe.label);
        console.log(json.hits[0].recipe.ingredientLines);

        //print recipe title
        document.getElementById("recipeTitle").innerHTML =
          json.hits[0].recipe.label;

        //print estiamted cook time
        document.getElementById("timeEstimate").innerHTML =
          "Estimate time: " + json.hits[0].recipe.totalTime + " minutes";
      })
      .catch(err => {
        console.log(err);
        document.getElementById("errorMessage").innerHTML =
          "I'm sorry we don't have any options for " +
          pressed.item.value +
          ". Please try again";
      });
  };
};
