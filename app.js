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

sals('10%','50%','CRIMSON','200px', '20','HL');
sals('5%','20%','blue','100px','12','TN');
sals('20%','10%','GREY','180PX', '30','TL');
sals('21%','30%','GREEN','120PX', '10','AT');
sals('18%','19%','PURPLE','180PX', '15','DV');
sals('8%','30%','BLACK','115PX', '19','UT');
sals('25%','12%','BLUELIGTH','180PX', '21','ND');
sals('50%','25%','CRIMSON','185px','32','MR');
sals('5%','60%','YELLOW','150px','30','MS');
sals('18%','19%','GREEN','115PX', '10','SL');
sals('38%','11%','RED','170PX', '15','EL');
sals('31%','50%','BLACK','190PX', '10','CT');
  
