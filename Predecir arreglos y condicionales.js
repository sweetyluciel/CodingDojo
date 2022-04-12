function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}

//  Variables        Datos
//auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]
//["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]

function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}
// Variable         Datos
//  produce  = ["manzanas", "naranjas"] 
//  frozen   = ["brócoli", "helado"]

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);
// Variable     Datos
//movieLibrary = ["Bambi", "E.T.", "Toy Story"]->["Bambi","Beetlejuice", "E.T.", "Toy Story","Zoro"]
//["Bambi","Beetlejuice", "E.T.", "Toy Story","Zoro"]