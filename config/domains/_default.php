<?php
return [
    '/' => [
        'city' => 'Москва',
        'address' => 'Очаковское шоссе, 5а',
        'mapZones' => [8,16,25], //зоны доставки
        'map' => [
            'center' => [55.748000, 37.622504],
            'placemarks' => [
                [
                    'coordinats' => [55.695022, 37.460188],
                    'baloonContent' => '<strong>Бетонный завод</strong><br>Очаковское шоссе, 5а'.
                    '<button class="section_btn btn btn--fill" data-open="#modal-call">Оформить заказ</button>'
                ],
                [
                    'coordinats' => [55.887266, 37.626340],
                    'baloonContent' => '<strong>Бетонный завод</strong><br>Чермянский проезд, 4Ас11'.
                    '<button class="section_btn btn btn--fill" data-open="#modal-call">Оформить заказ</button>'
                ],
                [
                    'coordinats' => [55.662451, 37.705356],
                    'baloonContent' => '<strong>Бетонный завод</strong><br>Батюнинский проезд, 6с2'.
                    '<button class="section_btn btn btn--fill" data-open="#modal-call">Оформить заказ</button>'
                ],
            ]
        ]
    ]
];