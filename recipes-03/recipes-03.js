function recipe03load() {
    loadHeader();
    loadFooter();
}

function query() {
    let value = Number(document.getElementById('input').value);
    console.log(value);

    if (value > 0 && value <= 21) {
        document.getElementById('error').classList.add('denone');
        calculator(value);

    } else {
        document.getElementById('error').classList.remove('denone');
    }
}

function calculator(value) {

    let z_1 = document.getElementById('z1');
    z_1.textContent = `${value * 150}  g Hähnchenbrustfilet`;
    let z_1_kcal = z_1.nextElementSibling;
    z_1_kcal.textContent = `${value * 137}  kcal`;

    let z_2 = document.getElementById('z2');
    z_2.textContent = `${value * 1 / 4}  Zwiebel`;
    let z_2_kcal = z_2.nextElementSibling;
    z_2_kcal.textContent = `${value * 12}  kcal`;

    let z_3 = document.getElementById('z3');
    z_3.textContent = `${value * 1}  Knoblauchzehe`;
    let z_3_kcal = z_3.nextElementSibling;
    z_3_kcal.textContent = `${value * 4}  kcal`;

    let z_4 = document.getElementById('z4');
    z_4.textContent = `${value * 1}  TL Öl`;
    let z_4_kcal = z_4.nextElementSibling;
    z_4_kcal.textContent = `${value * 40}  kcal`;

    let z_5 = document.getElementById('z5');
    z_5.textContent = `${value * 1}  Priese Salz`;
    let z_5_kcal = z_5.nextElementSibling;
    z_5_kcal.textContent = `${value * 1}  kcal`;

    let z_6 = document.getElementById('z6');
    z_6.textContent = `${value * 1}  Priese Pfeffer`;
    let z_6_kcal = z_6.nextElementSibling;
    z_6_kcal.textContent = `${value * 1}  kcal`;

    let z_7 = document.getElementById('z7');
    z_7.textContent = `${value * 1 / 2}  TL Paprikapulver`;
    let z_7_kcal = z_7.nextElementSibling;
    z_7_kcal.textContent = `${value * 1}  kcal`;

    let z_8 = document.getElementById('z8');
    z_8.textContent = `${value * 50}  ml Sahne`;
    let z_8_kcal = z_8.nextElementSibling;
    z_8_kcal.textContent = `${value * 165}  kcal`;

    let z_9 = document.getElementById('z9');
    z_9.textContent = `${value * 50}  ml Milch`;
    let z_9_kcal = z_9.nextElementSibling;
    z_9_kcal.textContent = `${value * 24}  kcal`;

    let z_10 = document.getElementById('z10');
    z_10.textContent = `${value * 1}  TL Mehl`;
    let z_10_kcal = z_10.nextElementSibling;
    z_10_kcal.textContent = `${value * 17}  kcal`;

    let z_11 = document.getElementById('z11');
    z_11.textContent = `${value * 1}  TL Butter`;
    let z_11_kcal = z_11.nextElementSibling;
    z_11_kcal.textContent = `${value * 36}  kcal`;

    let z_12 = document.getElementById('z12');
    z_12.textContent = `${value * 1 / 2}  TL Gemüsebrühepulver`;
    let z_12_kcal = z_12.nextElementSibling;
    z_12_kcal.textContent = `${value * 5}  kcal`;

    let z_13 = document.getElementById('z13');
    z_13.textContent = `${value * 1 / 2}  TL Zitronensaft `;
    let z_13_kcal = z_13.nextElementSibling;
    z_13_kcal.textContent = `${value * 1}  kcal`;

    let z_14 = document.getElementById('z14');
    z_14.textContent = `${value * 1}  Frische Petersilie `;
    let z_14_kcal = z_14.nextElementSibling;
    z_14_kcal.textContent = `${value * 1}  kcal`;

    let z_15 = document.getElementById('z15').value;
    z_15.textContent = `${value * 60}  g Langkornreis `;
    let z_15_kcal = z_15.nextElementSibling;
    z_15_kcal.textContent = `${value * 210}  kcal`;

    let z_16 = document.getElementById('z16');
    z_16.textContent = `${value * 120}  ml Wasser `;
    let z_16_kcal = z_16.nextElementSibling;
    z_16_kcal.textContent = `${value * 0}  kcal`;
}