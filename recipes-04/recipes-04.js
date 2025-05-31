
class reciepeObject {
    constructor(count, unit, ingredient) {
        this.count = count;
        this.unit = unit;
        this.ingredient = ingredient;
    };
};

let reciepeArray = [];
let reciepeArray_number_portion = [];
let isError = false;
let portion = 1;
let minuten = 50;


function reciepe04init() {

    reciepeArray = [];
    reciepeArray_number_portion = [];
   
    createIngredient(1, "Rolle", "Quicheteig");
    createIngredient(200, "g", "Hähnchenbrust");
    createIngredient(200, "g", "grüner Spargel");
    createIngredient(4, "Stängel", "Schnittlauch");
    createIngredient(3, "Stängel", "Petersilie");
    createIngredient(1, "-1", "Knoblauchzehe");
    createIngredient(1, "-1", "Schalotte");
    createIngredient(2, "EL", "Rapsöl");
    createIngredient(-1, "-1", "Salz");
    createIngredient(-1, "-1", "Pfeffer");
    createIngredient(2, "-1", "Eier");
    createIngredient(125, "g", "Sahne");
    createIngredient(2, "EL", "Zitronensaft");
    createIngredient(1, "TL", "Speisestärke");
    createIngredient(3, "EL", "geriebener Parmesan");

    portionsCalulator(1);
    
    loadFooter();
}


function createIngredient(count, unit, ingredient){
    let ing = new reciepeObject(count, unit, ingredient);
    reciepeArray.push(ing);
}

function portionValidator() {

    portion = parseInt(document.getElementById("portionsInput").value);

    if(!isNaN(portion)){
        if((portion <= 0 || portion > 20) || portion % 1 !== 0 ){
            errorVisibility(true);
            isError = true;
        }else{
            errorVisibility(false);
            isError = false;
        }

    }else{
        errorVisibility(true);
        isError = true;
    }
    
}

function errorVisibility(value) {
    let errorLabel = document.getElementById("error-label");

    if(value){
        if(errorLabel.classList.contains("dNone")){
            errorLabel.classList.remove("dNone");
        }
    }else{
        if(!errorLabel.classList.contains("dNone")){
            errorLabel.classList.add("dNone");
        }
    }

    
}

function calulate(){

    if(!isError){
        portionsCalulator(portion);
    }

    
}

function portionsCalulator(portion){

    if(portion === 1){
        reciepeArray_number_portion = reciepeArray;
    }else{

        reciepeArray_number_portion = [];

        for (let i = 0; i < reciepeArray.length; i++) {
            
            if(reciepeArray[i].count === -1){
                reciepeArray_number_portion.push(reciepeArray[i]);
            }else{

                let ing = new reciepeObject(reciepeArray[i].count, reciepeArray[i].unit, reciepeArray[i].ingredient);
                ing.count = portion * ing.count;
                reciepeArray_number_portion.push(ing);
            }

        }
    }
    
 
    createTable();
}

function createTable() {

    let table_div = document.getElementById("table-container");

    table_div.innerHTML = "";

    let table = document.createElement("table");
    table.setAttribute("class", "reciepe-table");
    table.setAttribute("id", "reciepe-table");

    table_div.appendChild(table);

    let table_element = document.getElementById("reciepe-table");

    for (let i = 0; i < reciepeArray_number_portion.length; i++) {
        
        let row = document.createElement("tr");

        if(i%2 == 0){
            row.classList.add("reciepe-table-row-even");
        }

        let tableData = document.createElement("td");

        let dataText = "";

        if(reciepeArray_number_portion[i].unit == "Rolle" && reciepeArray_number_portion[i].count > 1){
            reciepeArray_number_portion[i].unit = "Rollen";
        }

        if(reciepeArray_number_portion[i].count === -1 ){
            dataText = reciepeArray_number_portion[i].ingredient;
        }else if(reciepeArray_number_portion[i].unit === "-1"){
            dataText = `${reciepeArray_number_portion[i].count} ${reciepeArray_number_portion[i].ingredient}`;
        }else{
            dataText = `${reciepeArray_number_portion[i].count} ${reciepeArray_number_portion[i].unit} ${reciepeArray_number_portion[i].ingredient}`;
        }

        let text = document.createTextNode(dataText);

        tableData.classList.add("reciepe-tabledata");

        tableData.appendChild(text);

        row.appendChild(tableData);

        table_element.appendChild(row);
    }

    document.getElementById("gesamt-minuten").innerText = `Gesamtzeit ca. ${minuten * portion} Minuten`

}


