function enviar(){
    var user = document.getElementById("User").value;
    var pass = document.getElementById("Pass").value;

    if(user=="" || pass==""){
        alert("Por favor, complete todos los campos");
        return false
    }
}