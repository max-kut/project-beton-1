var city = 0;
window.onload = function() {
    ymaps.ready(function() {
        var myMap,
            coordsArray = [[55.888325, 38.790998]],
            coordsCenter = [55.888325, 38.790998];

        ymaps.projection.Cartesian(coordsCenter);
        myMap = new ymaps.Map("map", {
            center: coordsCenter,
            zoom: 9
        });

        myMap.behaviors.disable("scrollZoom");

        myMap.controls.add("zoomControl", {
            position: { top: 15, left: 15 }
        });
        var myPlacemark = new ymaps.Placemark(coordsCenter, {
            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
            //balloonContentBody: balloonArray[i]
            iconContent: 'islands#orangeFactoryIcon',
            iconColor: '#FF8500',
            balloonContent: '<strong>Бетонный завод</strong> в Электрогорске'+
            '<button class="section_btn btn btn--fill" data-open="#modal-call">Оформить заказ</button>',
            hintContent: '?'
        }, {
            preset: 'islands#orangeFactoryIcon'
        });
        myMap.geoObjects.add(myPlacemark);

        var polygonCoord1 = getPolygonCoordinats(coordsCenter, 8);
        var polygonCoord2 = getPolygonCoordinats(coordsCenter, 16);
        var polygonCoord3 = getPolygonCoordinats(coordsCenter, 25);

        var polygon1 = new ymaps.Polygon(
            [polygonCoord1, []],
            {
                balloonContent:
                    "Зона доставки 1-категории.<br>Стоимость доставки <strong>450 руб./км</strong>"+
                    '<button class="section_btn btn btn--fill" data-open="#modal-call">Оформить заказ</button>'
            },
            {
                geodesic: true,
                fillColor: "rgb(0, 216, 65)",
                fillOpacity: 0.4,
                strokeColor: "rgb(0, 216, 65)",
                strokeOpacity: 0.8,
                strokeWidth: 4
            }
        );
        var polygon2 = new ymaps.Polygon(
            [polygonCoord2, polygonCoord1],
            {
                balloonContent:
                    "Зона доставки 2-категории.<br>Стоимость доставки <strong>500 руб./км</strong>"+
                    '<button class="section_btn btn btn--fill" data-open="#modal-call">Оформить заказ</button>'
            },
            {
                geodesic: true,
                fillColor: "rgb(248, 170, 0)",
                fillOpacity: 0.4,
                strokeColor: "rgb(248, 170, 0)",
                strokeOpacity: 0.8,
                strokeWidth: 2
            }
        );
        var polygon3 = new ymaps.Polygon(
            [polygonCoord3, polygonCoord2],
            {
                balloonContent:
                    "Зона доставки 3-категории.<br>Стоимость доставки <strong>550 руб./км</strong><br>"+
                    '<button class="section_btn btn btn--fill" data-open="#modal-call">Оформить заказ</button>'
            },
            {
                geodesic: true,
                fillColor: "rgb(0, 108, 248)",
                fillOpacity: 0.4,
                strokeColor: "rgb(0, 108, 248)",
                strokeOpacity: 0.8,
                strokeWidth: 3
            }
        );
        myMap.geoObjects.add(polygon1);
        myMap.geoObjects.add(polygon2);
        myMap.geoObjects.add(polygon3);
    });
};

function getPolygonCoordinats(center, radius) {
    // получаем координаты вершин контура
    var n = 48; // количество вершин
    var R = radius * 0.016; // перевод в систему координат
    var contour = [];
    for (var i = 0; i < n; i++) {
        var angle = 2 * Math.PI * i / n;
        // по x делаем поправку на широту
        var x = R * Math.sin(angle) * 0.565  + center[0];
        var y = R * Math.cos(angle) + center[1];

        x = Math.round(x * 1000000) / 1000000;
        y = Math.round(y * 1000000) / 1000000;
        contour.push([x, y]);
    }
    //console.log(contour);
    return contour;
}
