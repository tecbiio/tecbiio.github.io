var id;

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;

  console.log(crd);

  $("#ex1").append(
    $("<p>Latitude : "+crd.latitude+"</p>"),
    $("<p>Longitude : "+crd.longitude+"</p>"),
    $("<p>La précision est de : "+crd.accuracy+"</p>")
  )

  console.log('Votre position actuelle est :');
  console.log('Latitude : '+crd.latitude);
  console.log('Longitude : '+crd.longitude);
  console.log('La précision est de '+crd.accuracy+' mètres.');
}

function error(err) {
  console.warn('ERREUR ('+err.code+'): '+err.message);
}

navigator.geolocation.getCurrentPosition(success, error, options);

id = navigator.geolocation.watchPosition(success, error, options);

//console.log(id);