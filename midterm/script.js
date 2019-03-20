const edamamApi = "https://api.edamam.com/search?";
const api_id = "&app_id=8aed0130";
const api_key = "&app_key=10bf9207b3dc2e5353697f16d6db3510";
const result_count = "&from=0&to=8";
let url;
const vegetarianHealthLabel = "&health=vegetarian";
const veganHealthLabel = "&health=vegan";
const balancedHealthLabel = "&diet=balanced";

window.onload = function() {
  document.getElementById("audio").play();

  let submitted = document.getElementById("typeIngredients");
  let vegetarianValue = document.getElementById("vegetarian");
  let veganValue = document.getElementById("vegan");
  let balancedValue = document.getElementById("balanced");
  let recipeUrl = document.getElementById("recipeLink");

  submitted.onsubmit = function(e) {
    e.preventDefault();
    let randArrayItem = Math.floor(Math.random() * 8);
    let ingredient = "q=" + submitted.item.value;
    if (veganValue.checked) {
      console.log("vegan");
      url =
        edamamApi +
        ingredient +
        veganHealthLabel +
        api_id +
        api_key +
        result_count;
    } else if (vegetarianValue.checked) {
      console.log("vegetarian");
      url =
        edamamApi +
        ingredient +
        vegetarianHealthLabel +
        api_id +
        api_key +
        result_count;
    } else if (balancedValue.checked) {
      console.log("balanced");
      url =
        edamamApi +
        ingredient +
        balancedHealthLabel +
        api_id +
        api_key +
        result_count;
    } else if (vegetarianValue.checked && balancedValue.checked) {
      url =
        edamamApi +
        ingredient +
        balancedHealthLabel +
        vegetarianHealthLabel +
        api_id +
        api_key +
        result_count;
    } else if (veganValue.checked && balancedValue.checked) {
      url =
        edamamApi +
        ingredient +
        balancedHealthLabel +
        veganHealthLabel +
        api_id +
        api_key +
        result_count;
    } else {
      url = edamamApi + ingredient + api_id + api_key + result_count;
    }
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        console.log(randArrayItem);

        //print recipe title
        document.getElementById("recipeTitle").innerHTML =
          json.hits[randArrayItem].recipe.label;

        //print servings number
        document.getElementById("servings").innerHTML =
          "Servings: " + json.hits[randArrayItem].recipe.yield;
        document.getElementById("servings").style.display = "block";

        //print out recipe line by line
        let recipeList = json.hits[randArrayItem].recipe.ingredientLines;
        let listItem = "";

        for (let i = 0; i < recipeList.length; i++) {
          let listNumber = i + 1 + ". ";
          listItem += listNumber + " " + recipeList[i] + "<br><br>";
        }
        document.getElementById("recipe").innerHTML = listItem;
        document.getElementById("ingredients").style.display = "block";

        //get food image for each recipe
        document.getElementById("recipeImg").style.display = "block";
        document.getElementById("recipeImg").src =
          json.hits[randArrayItem].recipe.image;

        //link to original recipe
        recipeUrl.style.display = "block";
        recipeUrl.onclick = function() {
          window.open(json.hits[randArrayItem].recipe.url);
        };
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
