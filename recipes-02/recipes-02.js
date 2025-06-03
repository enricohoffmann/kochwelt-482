
function checkportion() {
    let value = Number(document.getElementById("portion-input-calc").value);

    if (value < 1 || value > 20) {
        showError(true);
    }
    else {
        showError(false);
        recipeCalculator(value);
    }

}



function showError(hasError) {
    let errorRed = document.getElementById("errorIngredients");

    if (hasError) {
        errorRed.classList.remove("dNone");
    } else {
        errorRed.classList.add("dNone");
    }
}




function recipeCalculator(value) {

    let butterCalc = document.getElementById("butter");
    butterCalc.textContent = (200 * value) + " g";

    let zucker1Calc = document.getElementById("zucker1");
    zucker1Calc.textContent = (160 * value) + " g";

    let vanillezuckerCalc = document.getElementById("vanillezucker");
    vanillezuckerCalc.textContent = (1 * value) + " Pck.";

    let zitroneCalc = document.getElementById("zitrone");
    zitroneCalc.textContent = (1 * value) + " Msp.";

    let eigelbCalc = document.getElementById("eigelb");
    eigelbCalc.textContent = (6 * value) + "";

    let eiweissCalc = document.getElementById("eiweiss");
    eiweissCalc.textContent = (6 * value) + "";

    let salzCalc = document.getElementById("salz");
    salzCalc.textContent = (1 * value) + " Msp.";

    let zucker2Calc = document.getElementById("zucker2");
    zucker2Calc.textContent = (120 * value) + " g";

    let mehlCalc = document.getElementById("mehl");
    mehlCalc.textContent = (280 * value) + " g";

    let backpulverCalc = document.getElementById("backpulver");
    backpulverCalc.textContent = (1/2 * value) + " Pck.";

    let milchCalc = document.getElementById("milch");
    milchCalc.textContent = (100 * value) + " ml";

    let kakaopulverCalc = document.getElementById("kakaopulver");
    kakaopulverCalc.textContent = (20 * value) + " g";

}