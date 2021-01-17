var button = document.getElementById("emergency-button");

if(navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(async function(position){

        // Get longtitude and latitude using geolocation            
        latitude=position.coords.latitude;
        longtitude=position.coords.longitude;

        // Change to correct format for google link
        var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longtitude
        };

        $.ajax({
            url:'https://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longtitude+'&key=AIzaSyBaC5i3tGAaepazmPdfOsqcROVwUOpFGhI',
            success:function(data){
                // console.log(data);  un comment this if need to log it again, for google map reverse geocoder
                let parts = data.results[0].address_components;
                parts.forEach(async part => {
                    if(part.types.includes("country")){                    
                        const api_url = `/emergency/${part.short_name}`;
                        const response = await fetch(api_url);
                        const json = await response.json();

                        var callnumber;


                        //Check available numbers
                        if(json.data.member_112 == true){
                            callnumber = "tel:112";
                        }else if(json.data.dispatch.all[0] > 0){
                            callnumber = "tel:" + json.data.dispatch.all[0];
                        }else if(json.data.ambulance.all[0] > 0){
                            callnumber = "tel:" + json.data.ambulance.all[0];
                        }else if(json.data.police.all[0] > 0){
                            callnumber = "tel:" + json.data.police.all[0];
                        }else if(json.data.fire.all[0] > 0){
                            callnumber = "tel:" + json.data.fire.all[0];
                        }

                        // Call the number if clicked on
                        button.onclick  = function(){
                            window.open(callnumber);
                        };

                        // console.log(json); Uncomment if need to check or log again. This is for the emergncy numbers
                    
                    }
                })
            }
        });

    });

} else {
    console.log('Geolocation is not available');
}