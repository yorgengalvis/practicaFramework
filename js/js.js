$("#selh3").click(function(event) {
    $("#contenedor").load('seleccion/colombia.html');
});

$("#contacto").click(function(event) {
    $("#contenedor").load('forms/contacto.html');
});


$("#partidos").click(function(event) {
    $("#contenedor").load('seleccion/partido.html');
    leerjson();
});

function leerjson(){
    var part="";

    $.getJSON('data/partidos.json',function(datos){
        $("#contenido-tabla").html('');
        $.each(datos["partidos"],function(idx,partido){
            $("#contenido-tabla").append("<tr>"+"<td>"+partido["fecha"]+"</td><td>"+partido["equipo1"]+"</td>"+
            +partido["equipo2"]+"</td>"+
        "</tr>");
        });
    });
}



