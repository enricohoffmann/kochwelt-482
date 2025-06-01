
function checkportion() {
    let value = document.getElementById("portion-input-calc").value;


    if (value < 1 || value > 20) {
        showError(true);
    }
    else {
        showError(false);
    }

}



function showError(hasError)
{
    let errorRed = document.getElementById("errorIngredients");

    if (hasError) {
        errorRed.classList.remove("dNone");
    } else {
        errorRed.classList.add("dNone");
    }
}