
var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2")
var input3 = document.getElementById("input3")
var add = document.getElementById("add")
var remove = document.getElementById("remove")
var table = document.getElementById("table")
var tr = document.getElementById("tr")
var tbody = document.getElementById("tbody")





document.getElementById("add").onclick = prideti;

function prideti() {
    if( document.getElementById('input1').value === '' ){
        alert('iveskite duomenis');
        return false;
    }
    if( document.getElementById('input2').value === '' ){
        alert('iveskite duomenis');
        return false;
    }

    if( document.getElementById('input3').value === '' ){
        alert('iveskite duomenis');
        return false;
    }

    if( document.getElementById('input3').value <= 0 ){
        alert('iveskite duomenis');
        return false;
    }


  var prideti = document.createElement("tr");


  var vardas = document.createElement("td");
  var input1 = document.getElementById("input1").value;
 vardas.innerText = input1;

  var pavarde = document.createElement("td");
  var input2 = document.getElementById("input2").value;
    pavarde.innerText = input2;

    var amzius = document.createElement("td");
  var input3 = document.getElementById("input3").value;
    amzius.innerText = input3;
    
    


    prideti.append(vardas);
    prideti.append(pavarde);
    prideti.append(amzius);
 
  tbody.append(prideti);

}

remove.addEventListener("click", function(){
    var p = document.getElementsByTagName("tr")
   
    p[p.length - 1].remove()
})


remove2.addEventListener("click", function(){
    var p = document.getElementsByTagName("tr")

    p [1].remove()
    
}
)


