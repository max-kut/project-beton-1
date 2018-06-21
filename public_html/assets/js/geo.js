var city = 0;
window.onload = function() {
    ymaps.ready(function() {
        ymaps.geolocation
            .get({ provider: "yandex" })
            .then(function(result) {
                city = result.geoObjects
                    .get(0)
                    .properties.get(
                        "metaDataProperty.GeocoderMetaData.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.LocalityName"
                    );

                console.log(
                    result.geoObjects
                        .get(0)
                        .properties.getAll()
                        // .properties.get(
                        //     "metaDataProperty.GeocoderMetaData.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.LocalityName"
                        // )
                );
                var coordsArray, coordsCenter, balloonArray;
                if (city == "Наро-фоминск") {
                    jQuery("#user-city").text("НАРО-ФОМИНСКИЙ РАЙОН");
                    coordsArray = [[]];
                    coordsCenter = [];
                    balloonArray = [""];
                } else if (city == "Апрелевка") {
                    jQuery("#user-city").text("Апрелевка");
                    jQuery("#user-address").text("Парковая ул., д. 1, стр. 23");
                    coordsArray = [[55.554639, 37.06607]];
                    coordsCenter = [55.554639, 37.06607];
                    balloonArray = ["Апрелевка, Парковая улица, 1с23"];
                } else if (city == "Балашиха") {
                    jQuery("#user-city").text("Балашиха");
                    jQuery("#user-address").text("Объездное шоссе, вл. 14");
                    coordsArray = [[55.80318, 37.905267]];
                    coordsCenter = [55.80318, 37.905267];
                    balloonArray = [""];
                } else if (city == "Бронницы") {
                    jQuery("#user-city").text("Бронницы");
                    jQuery("#user-address").text("д.Тимонино");
                    coordsArray = [[55.476184, 38.18794]];
                    coordsCenter = [55.476184, 38.18794];
                    balloonArray = [""];
                } else if (city == "Видное") {
                    jQuery("#user-city").text("Видное");
                    jQuery("#user-address").text("Ленинские горки, село ям");
                    coordsArray = [[55.506948, 37.777041]];
                    coordsCenter = [55.506948, 37.777041];
                    balloonArray = [""];
                } else if (city == "Дзержинский") {
                    jQuery("#user-city").text("Дзержинский");
                    jQuery("#user-address").text("ул.Промзона силикат 15");
                    coordsArray = [[55.650368, 37.855671]];
                    coordsCenter = [55.650368, 37.855671];
                    balloonArray = [""];
                } else if (city == "Дмитров") {
                    jQuery("#user-city").text("Дмитров");
                    jQuery("#user-address").text("д.Татищево ");
                    coordsArray = [[56.395233, 37.506702]];
                    coordsCenter = [56.395233, 37.506702];
                    balloonArray = [""];
                } else if (city == "Долгопрудный") {
                    jQuery("#user-city").text("Долгопрудный");
                    jQuery("#user-address").text("ул. Жуковского, 2а");
                    coordsArray = [[55.926, 37.514976]];
                    coordsCenter = [55.926, 37.514976];
                    balloonArray = [""];
                } else if (city == "Домодедово") {
                    jQuery("#user-city").text("Домодедово");
                    jQuery("#user-address").text("Промышленная улица, 11");
                    coordsArray = [[55.449618, 37.767726]];
                    coordsCenter = [55.449618, 37.767726];
                    balloonArray = [""];
                } else if (city == "Железнодорожный") {
                    jQuery("#user-city").text("Железнодорожный");
                    jQuery("#user-address").text("Очаковское шоссе, 5а");
                    coordsArray = [[55.757197, 37.973934]];
                    coordsCenter = [55.757197, 37.973934];
                    balloonArray = [""];
                } else if (city == "Жуковский") {
                    jQuery("#user-city").text("Жуковский");
                    jQuery("#user-address").text("ул.Аэропортовская, 14к4");
                    coordsArray = [[55.561976, 38.118087]];
                    coordsCenter = [55.561976, 38.118087];
                    balloonArray = [""];
                } else if (city == "Звенигород") {
                    jQuery("#user-city").text("Звенигород");
                    jQuery("#user-address").text("с.Ершово");
                    coordsArray = [[55.759905, 36.85455]];
                    coordsCenter = [55.759905, 36.85455];
                    balloonArray = [""];
                } else if (city == "Ивантеевка") {
                    jQuery("#user-city").text("Ивантеевка");
                    jQuery("#user-address").text("ул.Толмачева, 80 ");
                    coordsArray = [[55.960467, 37.923152]];
                    coordsCenter = [55.960467, 37.923152];
                    balloonArray = [""];
                } else if (city == "Истра") {
                    jQuery("#user-city").text("Истра");
                    jQuery("#user-address").text("Железнодорожный проезд, 5б");
                    coordsArray = [[55.901077, 36.867847]];
                    coordsCenter = [55.901077, 36.867847];
                    balloonArray = [""];
                } else if (city == "Клин") {
                    jQuery("#user-city").text("Клин");
                    jQuery("#user-address").text("д.Ямуга");
                    coordsArray = [[56.389847, 36.664415]];
                    coordsCenter = [56.389847, 36.664415];
                    balloonArray = [""];
                } else if (city == "Коломна") {
                    jQuery("#user-city").text("Коломна");
                    jQuery("#user-address").text("район Щурово");
                    coordsArray = [[55.060864, 38.846881]];
                    coordsCenter = [55.060864, 38.846881];
                    balloonArray = [""];
                } else if (city == "Королев") {
                    jQuery("#user-city").text("Королев");
                    jQuery("#user-address").text("Калининградская улица, 7");
                    coordsArray = [[55.91357, 37.848421]];
                    coordsCenter = [55.91357, 37.848421];
                    balloonArray = [""];
                } else if (city == "Котельники") {
                    jQuery("#user-city").text("Котельники");
                    jQuery("#user-address").text("Котельнический проезд, 4");
                    coordsArray = [[55.666716, 37.891487]];
                    coordsCenter = [55.666716, 37.891487];
                    balloonArray = [""];
                } else if (city == "Красноармейск") {
                    jQuery("#user-city").text("Красноармейск");
                    jQuery("#user-address").text("ул.Академика Янгеля, 23к3");
                    coordsArray = [
                        [56.107001, 38.144874],
                        [55.440146, 37.274685]
                    ];
                    coordsCenter = [56.107001, 38.144874];
                    balloonArray = [""];
                } else if (city == "Красногорск") {
                    jQuery("#user-city").text("Красногорск");
                    jQuery("#user-address").text("");
                    coordsArray = [[55.830078, 37.341353]];
                    coordsCenter = [55.830078, 37.341353];
                    balloonArray = [""];
                } else if (city == "Лобня") {
                    jQuery("#user-city").text("Лобня");
                    jQuery("#user-address").text("ул.Летинанта Бойко, 33");
                    coordsArray = [[56.027534, 37.429375]];
                    coordsCenter = [56.027534, 37.429375];
                    balloonArray = [""];
                } else if (city == "Лосино-Петровский") {
                    jQuery("#user-city").text("Лосино-Петровский");
                    jQuery("#user-address").text("улица Кирова, 1");
                    coordsArray = [[55.865525, 38.202483]];
                    coordsCenter = [55.865525, 38.202483];
                    balloonArray = [""];
                } else if (city == "Луховицы") {
                    jQuery("#user-city").text("Луховицы");
                    jQuery("#user-address").text("Лесная улица, 25А");
                    coordsArray = [[54.983737, 39.046298]];
                    coordsCenter = [54.983737, 39.046298];
                    balloonArray = [""];
                } else if (city == "Лыткарино") {
                    jQuery("#user-city").text("Лыткарино");
                    jQuery("#user-address").text("Тураевская улица, с22");
                    coordsArray = [[55.557821, 37.955851]];
                    coordsCenter = [55.557821, 37.955851];
                    balloonArray = [""];
                } else if (city == "Люберцы") {
                    jQuery("#user-city").text("Люберцы");
                    jQuery("#user-address").text("1-я Вольская улица, с1вл23");
                    coordsArray = [[55.678306, 37.933204]];
                    coordsCenter = [55.678306, 37.933204];
                    balloonArray = [""];
                } else if (city == "Мытищи") {
                    jQuery("#user-city").text("Мытищи");
                    jQuery("#user-address").text("Волковское шоссе, вл.12");
                    coordsArray = [[55.931668, 37.720268]];
                    coordsCenter = [55.931668, 37.720268];
                    balloonArray = [""];
                } else if (city == "Ногинск") {
                    jQuery("#user-city").text("Ногинск");
                    jQuery("#user-address").text("");
                    coordsArray = [[55.879778, 38.441008]];
                    coordsCenter = [55.879778, 38.441008];
                    balloonArray = [""];
                } else if (city == "Одинцово") {
                    jQuery("#user-city").text("Одинцово");
                    jQuery("#user-address").text("Транспортная улица, 6А");
                    coordsArray = [[55.675834, 37.296155]];
                    coordsCenter = [55.675834, 37.296155];
                    balloonArray = [""];
                } else if (city == "Павловский-Посад") {
                    jQuery("#user-city").text("Павловский-Посад");
                    jQuery("#user-address").text("");
                    coordsArray = [[55.763779, 38.683232]];
                    coordsCenter = [55.763779, 38.683232];
                    balloonArray = [""];
                } else if (city == "Подольск") {
                    jQuery("#user-city").text("Подольск");
                    jQuery("#user-address").text("Плещеевская улица, 11А");
                    coordsArray = [[55.455249, 37.566]];
                    coordsCenter = [55.455249, 37.566];
                    balloonArray = [""];
                } else if (city == "Пушкино") {
                    jQuery("#user-city").text("Пушкино");
                    jQuery("#user-address").text("Заводская улица, 9");
                    coordsArray = [[56.013648, 37.822442]];
                    coordsCenter = [56.013648, 37.822442];
                    balloonArray = [""];
                } else if (city == "Раменское") {
                    jQuery("#user-city").text("Раменское");
                    jQuery("#user-address").text("Транспортный проезд, 2");
                    coordsArray = [[55.557246, 38.255754]];
                    coordsCenter = [55.557246, 38.255754];
                    balloonArray = [""];
                } else if (city == "Реутов") {
                    jQuery("#user-city").text("Реутов");
                    jQuery("#user-address").text("Проспект Мира, 85");
                    coordsArray = [[55.779216, 37.859857]];
                    coordsCenter = [55.779216, 37.859857];
                    balloonArray = [""];
                } else if (city == "Серпухов") {
                    jQuery("#user-city").text("Серпухов");
                    jQuery("#user-address").text("Автотранспортная, 12");
                    coordsArray = [[54.938208, 37.412586]];
                    coordsCenter = [54.938208, 37.412586];
                    balloonArray = [""];
                } else if (city == "Солнечногорск") {
                    jQuery("#user-city").text("Солнечногорск");
                    jQuery("#user-address").text("д.Давыдково");
                    coordsArray = [[56.185147, 36.976678]];
                    coordsCenter = [56.185147, 36.976678];
                    balloonArray = [""];
                } else if (city == "Фрязино") {
                    jQuery("#user-city").text("Фрязино");
                    jQuery("#user-address").text("Заводской проезд д2");
                    coordsArray = [[55.966055, 38.06726]];
                    coordsCenter = [55.966055, 38.06726];
                    balloonArray = [""];
                } else if (city == "Химки") {
                    jQuery("#user-city").text("Химки");
                    jQuery("#user-address").text("ул.Рабочая, 2");
                    coordsArray = [[55.906739, 37.435978]];
                    coordsCenter = [55.906739, 37.435978];
                    balloonArray = [""];
                } else if (city == "Чехов") {
                    jQuery("#user-city").text("Чехов");
                    jQuery("#user-address").text("пос. Новоселки");
                    coordsArray = [[55.129448, 37.54736]];
                    coordsCenter = [55.129448, 37.54736];
                    balloonArray = [""];
                } else if (city == "Щелково") {
                    jQuery("#user-city").text("Щелково");
                    jQuery("#user-address").text("ул.Заречная, 137");
                    coordsArray = [[55.922399, 38.024365]];
                    coordsCenter = [55.922399, 38.024365];
                    balloonArray = [""];
                } else if (city == "Электрогорск") {
                    jQuery("#user-city").text("Электрогорск");
                    jQuery("#user-address").text("");
                    coordsArray = [[55.888325, 38.790998]];
                    coordsCenter = [55.888325, 38.790998];
                    balloonArray = [""];
                } /* if (city == 'Электросталь') */ else {
                    jQuery("#user-city").text("Электросталь");
                    jQuery("#user-address").text("1-й Криулинский проезд, 2");
                    coordsArray = [[55.769165, 38.472867]];
                    coordsCenter = [55.769165, 38.472867];
                    balloonArray = [""];
                } /* else {
                    jQuery("#user-city").text('Москва');
                    jQuery("#user-address").text('Очаковское шоссе, 5а');
                    coordsArray = [[55.695022, 37.460188],[55.887266, 37.626340],[55.662451, 37.705356]]
                    coordsCenter = [55.751999, 37.617734];
                    balloonArray = ['Очаковское шоссе, 5а', 'Чермянский проезд, 4Ас11', 'Батюнинский проезд, 6с2'];
                } */
                ymaps.ready(init);

                function init() {
                    var myMap;

                    myMap = new ymaps.Map("map", {
                        center: coordsCenter,
                        zoom: 8
                    });

                    myMap.behaviors.disable("scrollZoom");

                    myMap.controls.add("zoomControl", {
                        position: { top: 15, left: 15 }
                    });
                    for (var i = 0; i < coordsArray.length; i++) {
                        var myPlacemark = new ymaps.Placemark(coordsArray[i], {
                            // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
                            balloonContentBody: balloonArray[i]
                        });
                        myMap.geoObjects.add(myPlacemark);
                    }
                    var circle = new ymaps.Circle(
                        [coordsCenter, 25000],
                        {},
                        {
                            geodesic: true,
                            fillColor: "#DB709377",
                            strokeColor: "#990066",
                            strokeOpacity: 0.8,
                            strokeWidth: 2
                        }
                    );
                    myMap.geoObjects.add(circle);
                }
            });
    });
};
