<script src="https://code.jquery.com/jquery-3.3.1.min.js" 
        integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" 
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.min.js"></script>
<script src="/assets/js/jquery.maskedinput.min.js"></script>
<script src="/assets/arcticmodal/jquery.arcticmodal.js"></script>
<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
<script>
(function($) {
    var windowLoaded = false;
    var yaMapsIsReady = false;
    var yaMapsInit = false;
    var dataMap = JSON.parse('<?=json_encode($D['map']);?>');
    var mapZones = JSON.parse('<?=json_encode($D['mapZones']);?>');
    console.log(dataMap);
    window.onload = function(){
        windowLoaded = true;
        if(!yaMapsInit && yaMapsIsReady){
            mapInit();
        }
    };
    ymaps.ready(function(){
        yaMapsIsReady = true;
        if(!yaMapsInit && windowLoaded){
            mapInit();
        }
    });

    function mapInit(){
        yaMapsInit = true;
        var myMap,
            coordsArray = [[55.888325, 38.790998]],
            coordsCenter = [55.888325, 38.790998];

        ymaps.projection.Cartesian(coordsCenter);
        myMap = new ymaps.Map("map", {
            center: dataMap.center,
            zoom: 9
        });

        myMap.behaviors.disable("scrollZoom");

        myMap.controls.add("zoomControl", {
            position: { top: 15, left: 15 }
        });

        for(var i=0;i<dataMap.placemarks.length; i++){
            var myPlacemark = new ymaps.Placemark(dataMap.placemarks[i].coordinats, {
                // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
                //balloonContentBody: balloonArray[i]
                iconContent: 'islands#orangeFactoryIcon',
                iconColor: '#FF8500',
                hintContent: '?',
                balloonContent: dataMap.placemarks[i].baloonContent
            }, {
                preset: 'islands#orangeFactoryIcon'
            });
            myMap.geoObjects.add(myPlacemark);
        }
        

        var polygonCoord1 = getPolygonCoordinats(dataMap.center, mapZones[0]);
        var polygonCoord2 = getPolygonCoordinats(dataMap.center, mapZones[1]);
        var polygonCoord3 = getPolygonCoordinats(dataMap.center, mapZones[2]);

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
    }

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
})(jQuery);
</script>
<script src="//yandex.st/jquery/cookie/1.0/jquery.cookie.min.js"></script>
<script>
    (function($) {
        $(function() {
            $("#phone").mask("+7 (999) 999-99-99");
            // Проверим, есть ли запись в куках о посещении посетителя
            // Если запись есть - ничего не делаем
            if (!$.cookie('was')) {
                // Покажем всплывающее окно
                $('#boxUserFirstInfo').arcticmodal({
                    closeOnOverlayClick: false,
                    closeOnEsc: true
                });
            }

            // Запомним в куках, что посетитель к нам уже заходил
            $.cookie('was', true, {
                expires: 365,
                path: '/'
            });

        });
    })(jQuery);
</script>
<script src="/assets/js/scripts.js"></script>
<?php if(!$_GET['debug']):?>
<script>
(function(w, d, s, h, id) {
    w.roistatProjectId = id; w.roistatHost = h;
    var p = d.location.protocol == "https:" ? "https://" : "http://";
    var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init";
    var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
})(window, document, 'script', 'cloud.roistat.com', '50a0b9b16e33ec7372c08cb78421cfa9');
</script>
<?php endif;?>
<script src="/assets/js/amopro.js"></script>