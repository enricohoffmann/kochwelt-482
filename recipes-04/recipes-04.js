
class reciepeObject {
    constructor(count, unit, ingredient) {
        this.count = count;
        this.unit = unit;
        this.ingredient = ingredient;
    };
};

let reciepeArray = [
    new reciepeObject(1, "Rolle", "Quicheteig"),
    new reciepeObject(200, "g", "Hähnchenbrust"),
    new reciepeObject(200, "g", "grüner Spargel"),
    new reciepeObject(4, "Stängel", "Schnittlauch"),
    new reciepeObject(3, "Stängel", "Petersilie"),
    new reciepeObject(1, "-1", "Knoblauchzehe"),
    new reciepeObject(1, "-1", "Schalotte"),
    new reciepeObject(2, "EL", "Rapsöl"),
    new reciepeObject(-1, "-1", "Salz"),
    new reciepeObject(-1, "-1", "Pfeffer"),
    new reciepeObject(2, "-1", "Eier"),
    new reciepeObject(125, "g", "Sahne"),
    new reciepeObject(2, "EL", "Zitronensaft"),
    new reciepeObject(1, "TL", "Speisestärke"),
    new reciepeObject(3, "EL", "geriebener Parmesan")

];
let reciepeArray_number_portion = [];
let isError = false;
let portion = 1;
let minuten = 50;


function recipe04init() {

    reciepeArray_number_portion = [];
    loadHeader(false);
    loadFooter(false);
    portionsCalulator(1);

}


function portionValidator() {

    let inputValue = document.getElementById("portionsInput").value;


    if (inputValue % 1 !== 0) {
        errorVisibility(true);
        isError = true;
        return;
    }

    portion = parseInt(inputValue);

    if (isNaN(portion)) {
        errorVisibility(true);
        isError = true;
        return;
    }
    else if ((portion <= 0 || portion > 20) || portion % 1 !== 0) {
        errorVisibility(true);
        isError = true;
        return;
    }

    errorVisibility(false);
    isError = false;

}

function errorVisibility(value) {
    let errorLabel = document.getElementById("error-label");

    if (value) {
        if (errorLabel.classList.contains("dNone")) {
            errorLabel.classList.remove("dNone");
        }
    } else {
        if (!errorLabel.classList.contains("dNone")) {
            errorLabel.classList.add("dNone");
        }
    }


}

function calulate() {

    if (!isError) {
        portionsCalulator(portion);
    }

}

function portionsCalulator(portion) {

    if (portion === 1) {
        reciepeArray_number_portion = reciepeArray;
    } else {

        reciepeArray_number_portion = [];

        for (let i = 0; i < reciepeArray.length; i++) {

            if (reciepeArray[i].count === -1) {
                reciepeArray_number_portion.push(reciepeArray[i]);
            } else {

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
    table.setAttribute("class", "recipe-table");
    table.setAttribute("id", "recipe-table");

    table_div.appendChild(table);

    let table_element = document.getElementById("recipe-table");

    for (let i = 0; i < reciepeArray_number_portion.length; i++) {

        let row = document.createElement("tr");

        if (i % 2 == 0) {
            row.classList.add("recipe-table-row-even");
        }

        let tableData = document.createElement("td");

        let dataText = "";

        if (reciepeArray_number_portion[i].unit == "Rolle" && reciepeArray_number_portion[i].count > 1) {
            reciepeArray_number_portion[i].unit = "Rollen";
        }

        if (reciepeArray_number_portion[i].count === -1) {
            dataText = reciepeArray_number_portion[i].ingredient;
        } else if (reciepeArray_number_portion[i].unit === "-1") {
            dataText = `${reciepeArray_number_portion[i].count} ${reciepeArray_number_portion[i].ingredient}`;
        } else {
            dataText = `${reciepeArray_number_portion[i].count} ${reciepeArray_number_portion[i].unit} ${reciepeArray_number_portion[i].ingredient}`;
        }

        let text = document.createTextNode(dataText);

        tableData.classList.add("recipe-tabledata");

        tableData.appendChild(text);

        row.appendChild(tableData);

        table_element.appendChild(row);
    }

    document.getElementById("gesamt-minuten").innerText = `Gesamtzeit ca. ${minuten * portion} Minuten`

}


