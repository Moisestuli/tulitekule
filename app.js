// gerar saudeões
// t - top, l -left, c -colour, s - font-size, z- z-index, id -class

function sals(t, l, c, s, z, id){
    var sal = document.getElementsByClassName(id);
   sal[0].style.top = t;
   sal[0].style.left = l;
   sal[0].style.color = c;
   sal[0].style.fontSize = s;
   sal[0].style.zindex = z;

}
sals('5%', '50%', '#1b95cd', '250px', '20', "HL");
sals('1%', '10%', 'red', '150px', '19', "MS");
sals('15%', '30%', 'blue', '100px', '18', "AT");
sals('35%', '60%', 'green', '150px', '17', "CT");
sals('54%', '20%', 'orange', '170px', '16', "TL");
sals('54%', '35%', 'yellow', '100px', '15', "SL");
sals('10%', '55%', 'grey', '80px', '14', "ND");
sals('27%', '21%', 'lightgrey', '100px', '13', "UT");
sals('37%', '31%', '#333', '65px', '12', "MR");
sals('67%', '51%', 'pink', '125px', '11', "TN");
sals('47%', '11%', 'lightblue', '115px', '10', "EL");
sals('27%', '31%', 'lightgreen', '185px', '9', "DV");

