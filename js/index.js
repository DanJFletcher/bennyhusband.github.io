function initMap() {
  var uluru = {lat: 42.9968077, lng: -81.1846885};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}