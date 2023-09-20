var autok = []

function Tarol()
{
    autok.push(
        {
            hosz: document.getElementById("rsz").value.length,
            uzemanyag: document.getElementById("uztip").value,
            elsotulajdonos: document.getElementById("elso").checked,
            ajtokszama: document.getElementById("harom").checked
        }
    )
}
function Statisztika()
{
    var benzin = "0"; 
    var disel = "0"; 
    var elektromos = "0"; 
    for(var i = 0; i < autok.length; i++) 
    {
        if (autok[i].uzemanyag == "benzin") benzin++;
        if (autok[i].uzemanyag == "disel") disel++;
        if (autok[i].uzemanyag == "elektromos") elektromos++;
    }
    document.getElementById("benzin").innerHTML = benzin;
    document.getElementById("disel").innerHTML = disel;
    document.getElementById("elektromos").innerHTML = elektromos;

    


    var elso = 0;
    var p = 0;
    for(var i = 0; i < autok.length; i++) 
        if(autok[i].elsotulajdonos) 
            elso++;
    p = (elso/autok.length)*100
    document.getElementById("tulaj").innerHTML = p + "%";





    var regi = 0;
    var uj = 0;
    for(var i = 0; i < autok.length; i++) 
    {
        if (autok[i].hosz == 7) regi++;
        if (autok[i].hosz == 8) uj++;
    }
    document.getElementById("regi").innerHTML = regi;
    document.getElementById("uj").innerHTML = uj;






    var harom = 0;
    var ot = 0;
    for(var i = 0; i < autok.length; i++) 
    {
        if (autok[i].ajtokszama) harom++;
        else ot++;
    }
    if (harom > ot) document.getElementById("nepszerubb").innerHTML = "3 ajtós";
    if (harom < ot) document.getElementById("nepszerubb").innerHTML = "5 ajtos";
    else document.getElementById("nepszerubb").innerHTML = "Egyenlő";
}