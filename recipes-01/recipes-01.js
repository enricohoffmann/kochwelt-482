
let portion = 1;
let recipes = {
    "Hähnchen-Döner": {
        "Hähnchenbrust": { quantity: 150, unit: "g" },
        "Paprikapulver": { quantity: 1, unit: "EL" },
        "Salz": { quantity: "nach Geschmack", unit: "" },
        "Pfeffer": { quantity: "nach Geschmack", unit: "" },
        "Paprikaschote": { quantity: 1, unit: "Stück" },
        "Tomaten": { quantity: 2, unit: "Stück" },
        "Gurke": { quantity: 1, unit: "Stück" },
        "Zucker": { quantity: "nach Geschmack", unit: "" },
        "Zitronensaft": { quantity: 10, unit: "ml" },
        "Dill": { quantity: "nach Geschmack", unit: "" },
        "Petersilie": { quantity: "nach Geschmack", unit: "" },
        "Knoblauch": { quantity: 1, unit: "Zehe" },
        "Chilischote": { quantity: 1, unit: "Stück" },
        "Joghurt": { quantity: 1, unit: "EL" }
    },

};

let selectedRecipe = "Hähnchen-Döner"; 

document.addEventListener("DOMContentLoaded", function() {
    let tableBody = document.getElementById("ingredient_table");

    function updateIngredients(recipeName, portion) {
        tableBody.innerHTML = ""; 
        let ingredients = recipes[recipeName];

        for (const [ingredient, { quantity, unit }] of Object.entries(ingredients)) {
          if(!portion){
            const row = document.createElement("tr");
            row.innerHTML = `<td><span>${quantity} ${unit}</span> ${ingredient}</td>`;
            tableBody.appendChild(row);
          }else{
            let adjustedQuantity = (typeof quantity === "number") ? quantity * portion : quantity;
            const row = document.createElement("tr");
            row.innerHTML = `<td><span>${adjustedQuantity} ${unit}</span> ${ingredient}</td>`;
            tableBody.appendChild(row);
          }
            
        }
    }

    const calculate = document.getElementById("portion_calculateBtn");
    calculate.addEventListener('click', function() {
          let number_portion = document.getElementById('portion_number').value;
          portion = parseInt(number_portion);
          updateIngredients(selectedRecipe, portion);
      });

    updateIngredients(selectedRecipe, portion); 
});



