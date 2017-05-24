
/** @constructor */
 var marker1, marker2;

      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat:   41.881832, lng:   -87.623177},
          styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
        });

      var contentString1 = '<div class="blogs-post">'+
                    '<div class="post-top">'+
                      '<div class="follow">'+
                        '<p>Chris Yang</p>'+
                      '</div>'+
                    '</div>'+
                    '<img class="post-image" src="../images/photo/bean.jpg">'+
                    '<div class="post-bottom">'+
                      '<div class="like">'+
                        '<button class="like-btn">'+
                          '<i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>'+
                        '</button>'+ 
                      '</div>'+
                      '<div class="comment">'+
                        '<button class="comment-btn">'+
                          '<i class="fa fa-comments fa-2x" aria-hidden="true"></i>'+
                        '</button>'+
                      '</div>'+
                    '</div>'+
                  '</div>';

      var contentString2 = '<div class="blogs-post">'+
                    '<div class="post-top">'+
                      '<div class="follow">'+
                        '<p>Michelle Kouda</p>'+
                      '</div>'+
                    '</div>'+
                    '<img class="post-image" src="../images/photo/deepdishpizza.jpg">'+
                    '<div class="post-bottom">'+
                      '<div class="like">'+
                        '<button class="like-btn">'+
                          '<i class="fa fa-heart-o fa-2x" aria-hidden="true"></i>'+
                        '</button>'+ 
                      '</div>'+
                      '<div class="comment">'+
                        '<button class="comment-btn">'+
                          '<i class="fa fa-comments fa-2x" aria-hidden="true"></i>'+
                        '</button>'+
                      '</div>'+
                    '</div>'+
                  '</div>';

        var infowindow1 = new google.maps.InfoWindow({
          content: contentString1
        });

        var infowindow2 = new google.maps.InfoWindow({
          content: contentString2
        });

        marker1 = new google.maps.Marker({
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: {lat: 41.8827, lng: -87.6233}
        });

        marker2 = new google.maps.Marker({
          map: map,
          draggable: true,
          animation: google.maps.Animation.DROP,
          position: {lat: 41.890342, lng: -87.633984}
        });

        marker1.addListener('click', function() {
          infowindow1.open(map, marker1);
        });

        marker2.addListener('click', function() {
          infowindow2.open(map, marker2);
        });
      }

      function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }