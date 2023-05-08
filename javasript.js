$(document).ready(function(){
    var divs= $(".texto");

        divs.mouseenter(function(){
            $(this).fadeTo("fast",0.2);
        });

        divs.mouseleave(function(){
            $(this).fadeTo("fast",1);
        });

    

    

    var bajada = $("#bajada");

        bajada.mouseenter(function(){
            $("#bajada").css("background-color","plum");
        });

    
    var texto = $(".texto");

        texto.mouseenter(function(){
            $(this).css("background-color","pink");
        });

    

    var imagen= $(".img");
    var boton= $("#button");

    boton.click(function(){
        $(".texto").hide();
        })
    
    boton2=$("#jaja");
    boton2.click(function(){
        $("#broma").text("espero que les haya gustado mi presentación de hoy uwu")

    })

    boton3=$("#good");
    boton3.click(function(){
        $(".texto").show();
        $(".texto").css("background-color","plum")
    });
    });