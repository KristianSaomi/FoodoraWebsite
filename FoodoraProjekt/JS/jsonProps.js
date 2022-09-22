function generateCardsFromJson () {
    $.getJSON("cities.json", function(response) {
        let cityArray = response.Cities;

        for (var i in cityArray) {                
            let card = 
                '<div class="cityTemplate" style="background-image: url('+cityArray[i].imgs+'); background-size: cover;">' +
                '<h1 class="cityTemplateLetter">'+ cityArray[i].bigLetter +'</h1>' +
                '<h2 class="cityTemplateName">' +cityArray[i].name +'</h2>' + 
                '<img class="Cityarrow" src="'+cityArray[i].arrow+'">' +
                '</div>'       
            
            $(".cities_wrapper_inner").append(card);
        }
    })
}

generateCardsFromJson();
