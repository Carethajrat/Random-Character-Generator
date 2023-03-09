$(document).ready(function(){

    try{
            $(".main").hide()
            const $btnClick = $("button");
            $btnClick.on("click",(e)=>{
            $(".main").show()
         
            const randomNumber = Math.round(Math.random()*80);
            const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`;
            var check_connectivity = {
              is_internet_connected: function() {
                  return $.get(url,function(data)
                  {
                  console.log(data)
                  $("#image").attr("src",data.image)
                  $("#id").text(`ID - ${data.id}`)
                  $("#name").text(data.name)
                  $("#homeWorld").text(` HomeWorld - ${data.homeworld}`)
                  $("#born").text(` Born ${data.born}`)
                  $("#died").text(` Died ${data.died}`)
                  $("#diedLocation").text(` Died Location - ${data.diedLocation}`)
                  $("#wiki").attr('href',data.wiki).text("go to Wikipedia ")
                  $("#gender").text(` Gender - ${data.gender}`)
                  $("#eyeColor").text(` Eye-Color - ${data.eyeColor}`)
                  $("#hairColor").text(` Hair-Color - ${data.hairColor}`)
                  $("#skinColor").text(` Skin-Color - ${data.skinColor}`)
                  $("#height").text(` Height - ${data.height}`)
                  $("#mass").text(` Mass - ${data.mass}`)
                  $("#species").text(`Species - ${data.species}`)
                })    
              },  
          };
                
         
          check_connectivity.is_internet_connected().done(function() {
            is_internet_connected()
        }).fail(function(jqXHR, textStatus, errorThrown) {
            $(".hero").html("<h5>Random Character Generator needs to be online.<br><small>it looks like you're not.</small></h5>").css({"display":"block"}).css({"margin":"auto"}).addClass("container text-center text-white  ")
            $(".hero").prepend("<h1>Check your connection</h1>").css({"display":"block"}).css({"margin":"auto"}).addClass("container text-center text-white fw-bold fs-1 mt-5")


        });
            })

    }
    catch(error){
        console.error();

    }
    
})