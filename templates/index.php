<?php
/**
 * @var array $D configuration data array
 */
?><!DOCTYPE html>
<html lang="ru">

<head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta name="format-detection" content="telephone=no">
    <link rel="shortcut icon" href="/assets/img/logo.png" type="image/png">
    <?php require __DIR__ . '/_head.php';?>
    <style>
        #map {
            width: 100%;
            height: 500px;
        }
    </style>
</head>
<title>Строй Бетон</title>

<body>
<?php if(!$_GET['debug']):?>
<?php require __DIR__ . '/_body_start.php';?>
<?php endif;?>
    <header class="header">
        <div class="header_row header_row--nav">
            <div class="header_content content">
                <div class="header_nav nav">
                    <ul class="nav_list">
                        <li class="nav_item">
                            <a class="nav_link" href="#about">О компании</a>
                        </li>
                        <li class="nav_item">
                            <a class="nav_link" href="#features">Преимущества</a>
                        </li>
                        <li class="nav_item">
                            <a class="nav_link" href="#projects">Объекты</a>
                        </li>
                        <li class="nav_item">
                            <a class="nav_link" href="#contacts">Контакты</a>
                        </li>
                        <li class="nav_item">
                            <a class="nav_link" href="#labs">Лаборатория</a>
                        </li>
                    </ul>
                </div>
                <div class="header_nav nav nav_right_list">
                    <a class="nav_btn btn btn--icon btn--calc" href="#calculator">Калькулятор расчета</a>
                    <a href="/assets/price-bsu.pdf" target="_blank" class="nav_btn btn btn--icon btn--download">Скачать прайс-лист</a>
                    <button class="nav_btn btn btn--icon btn--buy" data-open="#modal-call">Купить бетон</button>
                </div>
            </div>
        </div>
        <div class="header_row header_row--about" id="about">
            <div class="header_content content">
                <div class="header_logo logo">
                    <img class="logo_img" src="/assets/img/logo.png" alt="" role="presentation" />
                </div>
                <div class="header_contacts">
                    <div class="header_contact contact contact--work-time">
                        <p class="contact_contacts">
                            <span id="user-city"><?=$D['city']?:'';?></span>
                        </p>
                        <p class="contact_label"><a href="#map" class="map"><span id="user-address"><?=$D['address']?:'';?></span></a></p>
                    </div>
                    <span class="header_contact contact contact--email"><!--href="mailto:st@betonbsu.ru"-->
                        <span class="contact_label">Почта:</span>
                        <span class="contact_contacts">st@betonbsu.ru</span>
                    </span>
                </div>
                <a class="header_work-time contact contact--phone" href="tel:+74951183636">
                    <span class="contact_contact">+7 (495) 118 36 36</span>
                    <span class="contact_label">круглосуточно</span>
                </a>
            </div>
        </div>
    </header>
    <section class="section section--hero">
        <div class="section_content content">
            <div class="section_row">
                <div class="section_article article article--hero">
                    <div class="article_header">
                        <h1 class="article_title article_title--big">ПРОИЗВОДСТВО ТОВАРНОГО
                            <br>БЕТОНА И ЖБИ</h1>
                        <div class="article_form form">
                            <h3 class="form_title">
                                <span class="text text--accent text--upper">акция </span>БЕТОН с доставкой от
                                <span class="text text--accent">2 400р./м3</span>
                            </h3>
                            <div class="form_input-row">
                                <button class="form_btn btn btn--fill" data-open="#modal-call">Забронировать цену</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!--<div class="section_article article article--video">
                    <div class="article_text article_text--play">УЗНАЙТЕ ПОДРОБНЕЕ О НАШЕМ ПРОИЗВОДСТВЕ ЗА 2 МИНУТЫ</div>
                    <div class="play">
                        <button class="" data-open="#modal-video">
                            <div class="play-btn-hover"></div>
                        </button>
                        <img class="play-btn" src="/assets/img/play.png" alt="">
                        <img class="load" src="/assets/img/play-outline.png" alt="">
                        <img class="border" src="/assets/img/play-border.png" alt="">
                        <img class="bg" src="/assets/img/play-light.png" alt="">
                    </div>
                </div>-->
            </div>
            <div class="section_features list list--features">
                <div class="list_item feature" data-open="#modal-call">
                    <img class="feature_icon" src="/assets/img/i-delivery.png" alt="" role="presentation" />
                    <p class="feature_title">Доставка в день заказа</p>
                </div>
                <a class="list_item feature" href="#labs">
                    <img class="feature_icon" src="/assets/img/i-lab.png" alt="" role="presentation" />
                    <p class="feature_title">Аттестованная лаборатория</p>
                </a>
                <a class="list_item feature" href="#serts">
                    <img class="feature_icon" src="/assets/img/i-valid.png" alt="" role="presentation" />
                    <p class="feature_title">Соответствие ГОСТ</p>
                </a>
                <a class="list_item feature" href="#features">
                    <img class="feature_icon" src="/assets/img/i-factory.png" alt="" role="presentation" />
                    <p class="feature_title">Собственное производство</p>
                </a>
                <a class="list_item feature" href="#projects">
                    <img class="feature_icon" src="/assets/img/i-garant.png" alt="" role="presentation" />
                    <p class="feature_title">10 лет работы</p>
                </a>
            </div>
        </div>
    </section>

    <section class="section section--calculator" id="calculator">
        <div class="section_content content">
            <h2 class="section_title desktop">Калькулятор</h2>
            <h2 class="section_title mob">Прайс-лист</h2>
            <p class="section_sub">Цены ниже, чем у нас – НЕРЕАЛЬНЫЕ!</p>
            <p class="section_text">Мы более 5 лет оптимизировали все возможные расходы, чтобы предложить такую цену.
                <br>Мы официально заявляем (с вероятностью 98%) все предложения с меньшей ценой возможны только при мошенничестве / подмене марки / недовесе.</p>
            <!--<div class="price"><a href="/assets/price-bsu.pdf" class="mob_price">Скачать прайс-лист</a></div>-->
            <div class="section_calculator calculator" id="js-calculator">
                <div class="calculator_row" v-cloak>
                    <table class="calculator_table table" :cols="isMobile?5:7">
                        <thead class="table_head">
                            <tr class="table_row">
                                <th class="table_header orange" :colspan="isMobile?5:7">Товарный бетон</th>
                            </tr>
                            <tr class="table_row">
                                <th class="table_header" rowspan="2">Класс
                                    <br>прочности</th>
                                <th class="table_header" rowspan="2" colspan="2">Параметры
                                    <br>ГОСТ 7474-93</th>
                                <th class="table_header" :colspan="isMobile?2:4">Цены за 1м<sup>3</sup> с НДС</th>
                            </tr>
                            <tr class="table_row">
                                <th class="table_header orange">Гравий</th>
                                <th v-if="!isMobile" class="table_header">Заказ / м<sup>3</sup></th>
                                <th class="table_header orange">Гранит</th>
                                <th v-if="!isMobile" class="table_header">Заказ / м<sup>3</sup></th>
                            </tr>
                        </thead>
                        <tbody class="table_body">
                            <tr class="table_row" v-for="item in readyMixed">
                                <td class="table_text">{{ item.mark }}</td>
                                <td class="table_text table_text--params" colspan="2">{{ item.params }}</td>
                                <td class="table_cost">{{ item.types[0].cost }}
                                    <span v-if="item.types[0].cost != null"> руб.</span>
                                </td>
                                <td v-if="!isMobile" class="table_input">
                                    <span   v-if="item.types[0].value != null"
                                            @click="decrement(item.types[0])"
                                            class="table_decrement">-</span>
                                    <input  class="table_field"
                                            v-if="item.types[0].value != null"
                                            placeholder="0"
                                            v-model="item.types[0].value"
                                            @keyUp="validate(item.types[0])"
                                            @keyDown="validate(item.types[0])"
                                            type="text" />
                                    <span   v-if="item.types[0].value != null"
                                            @click="increment(item.types[0])"
                                            class="table_increment">+</span>
                                </td>
                                <td class="table_cost">{{ item.types[1].cost }}
                                    <span v-if="item.types[1].cost != null"> руб.</span>
                                </td>
                                <td v-if="!isMobile" class="table_input">
                                    <span   v-if="item.types[1].value != null"
                                            @click="decrement(item.types[1])"
                                            class="table_decrement">-</span>
                                    <input  class="table_field"
                                            v-model="item.types[1].value"
                                            placeholder="0"
                                            @keyUp="validate(item.types[1])"
                                            @keyDown="validate(item.types[1])"
                                            type="text" />
                                    <span   v-if="item.types[1].value != null"
                                            @click="increment(item.types[1])"
                                            class="table_increment">+</span>
                                </td>
                            </tr>
                        </tbody>
                        <thead class="table_head">
                            <tr class="table_row">
                                <th class="table_header orange" :colspan="isMobile?5:7">Тощий бетон</th>
                            </tr>
                            <tr class="table_row">
                                <th class="table_header" rowspan="2" colspan="3">Марка</th>
                                <th class="table_header" :colspan="isMobile?2:4">Цены за 1м<sup>3</sup> с НДС</th>
                            </tr>
                            <tr class="table_row">
                                <th class="table_header orange" colspan="2">Гравий</th>
                                <th v-if="!isMobile" class="table_header" colspan="2">Заказ / м<sup>3</sup></th>
                            </tr>
                        </thead>
                        <tbody class="table_body">
                            <tr class="table_row" v-for="item in lean">
                                <td class="table_text" colspan="3">{{ item.mark }}</td>
                                <td class="table_cost" colspan="2">{{ item.types[0].cost }}
                                    <span v-if="item.types[0].cost != null"> руб.</span>
                                </td>
                                <td v-if="!isMobile" class="table_input" colspan="2">
                                    <span   v-if="item.types[0].value != null"
                                            @click="decrement(item.types[0])"
                                            class="table_decrement">-</span>
                                    <input  class="table_field"
                                            v-if="item.types[0].value != null"
                                            placeholder="0"
                                            v-model="item.types[0].value"
                                            @keyUp="validate(item.types[0])"
                                            @keyDown="validate(item.types[0])"
                                            type="text" />
                                    <span   v-if="item.types[0].value != null"
                                            @click="increment(item.types[0])"
                                            class="table_increment">+</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table class="calculator_table table" :cols="isMobile?3:4">
                        <thead class="table_head">
                            <tr class="table_row">
                                <th class="table_header orange" colspan="3">Керамзито бетон</th>
                            </tr>
                            <tr class="table_row">
                                <th class="table_header" rowspan="2">Марка</th>
                                <th class="table_header" colspan="2">Цены за 1м<sup>3</sup> с НДС</th>
                            </tr>
                            <tr class="table_row">
                                <th class="table_header orange" :colspan="isMobile?2:1">Керамзит</th>
                                <th v-if="!isMobile" class="table_header">Заказ / м<sup>3</sup></th>
                            </tr>
                        </thead>
                        <tbody class="table_body">
                            <tr class="table_row" v-for="item in expanded">
                                <td class="table_text">{{ item.mark }}</td>
                                <td class="table_cost" :colspan="isMobile?2:1">{{ item.types[0].cost }}
                                    <span v-if="item.types[0].cost != null"> руб.</span>
                                </td>
                                <td v-if="!isMobile" class="table_input">
                                    <span   v-if="item.types[0].value != null"
                                            @click="decrement(item.types[0])"
                                            class="table_decrement">-</span>
                                    <input  class="table_field"
                                            v-if="item.types[0].value != null"
                                            placeholder="0"
                                            v-model="item.types[0].value"
                                            @keyUp="validate(item.types[0])"
                                            @keyDown="validate(item.types[0])"
                                            type="text" />
                                    <span   v-if="item.types[0].value != null"
                                            @click="increment(item.types[0])"
                                            class="table_increment">+</span>
                                </td>
                            </tr>
                        </tbody>
                        <thead class="table_head">
                            <tr class="table_row">
                                <th class="table_header orange" colspan="3">Раствор строительный</th>
                            </tr>
                            <tr class="table_row">
                                <th class="table_header" >Марка</th>
                                <th class="table_header" :colspan="isMobile?2:1">Цены за 1м<sup>3</sup><br/>с НДС</th>
                                <th v-if="!isMobile" class="table_header">Заказ / м<sup>3</sup></th>
                            </tr>
                            <!--<tr class="table_row" v-if="!isMobile">-->
                            <!--    <th class="table_header orange" :colspan="isMobile?2:1">Керамзит</th>-->
                            <!--</tr>-->
                        </thead>
                        <tbody class="table_body">
                            <tr class="table_row" v-for="item in solution">
                                <td class="table_text">{{ item.mark }}</td>
                                <td class="table_cost" :colspan="isMobile?2:1">{{ item.types[0].cost }}
                                    <span v-if="item.types[0].cost != null"> руб.</span>
                                </td>
                                <td v-if="!isMobile" class="table_input">
                                    <span   v-if="item.types[0].value != null"
                                            @click="decrement(item.types[0])"
                                            class="table_decrement">-</span>
                                    <input  class="table_field"
                                            v-if="item.types[0].value != null"
                                            placeholder="0"
                                            v-model="item.types[0].value"
                                            @keyUp="validate(item.types[0])"
                                            @keyDown="validate(item.types[0])"
                                            type="text" />
                                    <span   v-if="item.types[0].value != null"
                                            @click="increment(item.types[0])"
                                            class="table_increment">+</span>
                                </td>
                            </tr>
                        </tbody>
                        <thead class="table_head">
                            <tr class="table_row">
                                <th class="table_header orange" colspan="3">Стоимость доставки</th>
                            </tr>
                        </thead>
                        <tbody class="table_body">
                            <tr class="table_row" v-for="item in delivery">
                                <td class="table_text" colspan="2">{{ item.text }}</td>
                                <td class="table_cost">{{ item.cost }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="calculator_result article article--result">
                        <h3 class="article_title">Скидка 5%*</h3>
                        <p class="article_text">*При заказе от 10 м3
                            <br>и единовременной предоплате</p>
                        <div v-if="!isMobile">
                            <ul class="article_selected_brands" v-if="selectedBrands.length">
                                <li><strong style="text-decoration:underline">Вы выбрали:</strong></li>
                                <li v-for="sBrand in selectedBrands">
                                    {{ sBrand.brand }}: <strong>{{ sBrand.value }}</strong> м<sup>3</sup>
                                </li>
                            </ul>
                            <div class="article_result">
                                <p class="article_text">Общая стоимость, руб.**</p>
                                <animated-number class="article_cost" :number="result"></animated-number>
                            </div>
                            <p class="article_text article_text--small">**Стоимость не включает доставку, стоимость доставки
                                <br>от 300 рублей за 1 км, для окончательного
                                <br>расчета обратитесь к менеджеру</p>
                        </div>
                        <button class="article_btn btn btn--fill" data-open="#modal-call">Оставить заявку</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section section--features" id="features">
        <div class="section_content content">
            <h2 class="section_title">Наши преимущества</h2>
            <div class="section_features list list--card">
                <div class="list_item card">
                    <img class="card_img" src="/assets/img/d-feature-beton.jpg" alt="" role="presentation" />
                    <h3 class="card_title">Бетон</h3>
                    <p class="card_text">Все виды бетона и растворов </p>
                </div>
                <div class="list_item card">
                    <img class="card_img" src="/assets/img/d-feature-quarry.jpg" alt="" role="presentation" />
                    <h3 class="card_title">Карьеры</h3>
                    <p class="card_text">Собственные песчаные и гранитные карьеры</p>
                </div>
                <div class="list_item card">
                    <img class="card_img" src="/assets/img/d-feature-cars.jpg" alt="" role="presentation" />
                    <h3 class="card_title">Автопарк</h3>
                    <p class="card_text">37 единиц техники</p>
                </div>
                <div class="list_item card">
                    <img class="card_img" src="/assets/img/d-feature-jbi.jpg" alt="" role="presentation" />
                    <h3 class="card_title">ЖБИ</h3>
                    <p class="card_text">Документация на более чем 1350 ГОСТ изделий</p>
                </div>
                <div class="list_item card">
                    <img class="card_img" src="/assets/img/d-feature-labs.jpg" alt="" role="presentation" />
                    <h3 class="card_title">Лаборатория</h3>
                    <p class="card_text">7 проб ежедневно, гост 7473-10, протокол испытания</p>
                </div>
                <div class="list_item card">
                    <img class="card_img" src="/assets/img/d-feature-work.jpg" alt="" role="presentation" />
                    <h3 class="card_title">Отсрочка</h3>
                    <p class="card_text">"проверенные партнеры" работают по отсрочке</p>
                </div>
            </div>
        </div>
    </section>

    <section class="section section--cta" id="cta">
        <div class="section_content content">
            <h2 class="section_title">Мы работаем по отсрочке</h2>
            <p class="section_text section_text--big">После 3 поставок на объект Вы становитесь "проверенным партнером"
                <br>и получаете возможность оформлять любой заказ в рассрочку.</p>
            <button class="section_btn btn btn--fill" data-open="#modal-call">Оформить заказ</button>
        </div>
    </section>
    <section class="section section--pump" id="pump">
        <div class="section_content content">
            <h2 class="section_title">Аренда бетононасоса</h2>
            <p class="section_text section_text--big section_text--pump">Подача насоса в течении 1 часа</p>
            <div class="section_features list list--card">
                <div class="list_item card card--row" data-open="#modal-call">
                    <img class="card_img" src="/assets/img/24-4.jpg" alt="" role="presentation" />
                    <div class="card_row">
                        <h3 class="card_title">Putzmeister М 24-4</h3>
                        <p class="card_text">Размер площадки: 6х8 м</p>
                        <p class="card_text">Высота подачи: 24 м</p>
                        <p class="card_text">Дальность подачи: 26,6 м</p>
                        <p class="card_text">Цена за смену: 14 000 руб.</p>
                        <p class="card_text">Цена за час: 1 750 руб.</p>
                    </div>
                </div>
                <div class="list_item card card--row" data-open="#modal-call">
                    <img class="card_img" src="/assets/img/32-5.jpg" alt="" role="presentation" />
                    <div class="card_row">
                        <h3 class="card_title">Putzmeister М 32-5</h3>
                        <p class="card_text">Размер площадки: 6х10 м</p>
                        <p class="card_text">Высота подачи: 32 м</p>
                        <p class="card_text">Дальность подачи: 26,6 м</p>
                        <p class="card_text">Цена за смену: 15 000 руб.</p>
                        <p class="card_text">Цена за час: 1 875 руб.</p>
                    </div>
                </div>
                <div class="list_item card card--row" data-open="#modal-call">
                    <img class="card_img" src="/assets/img/36-4.jpg" alt="" role="presentation" />
                    <div class="card_row">
                        <h3 class="card_title">Putzmeister М 36-4</h3>
                        <p class="card_text">Размер площадки: 8х10 м</p>
                        <p class="card_text">Высота подачи: 36 м</p>
                        <p class="card_text">Дальность подачи: 31,7 м</p>
                        <p class="card_text">Цена за смену: 17 000 руб.</p>
                        <p class="card_text">Цена за час: 2 125 руб.</p>
                    </div>
                </div>
                <div class="list_item card card--row" data-open="#modal-call">
                    <img class="card_img" src="/assets/img/42-5.jpg" alt="" role="presentation" />
                    <div class="card_row">
                        <h3 class="card_title">Putzmeister М 42-5</h3>
                        <p class="card_text">Размер площадки: 10х10 м</p>
                        <p class="card_text">Высота подачи: 42 м</p>
                        <p class="card_text">Дальность подачи: 41,1 м</p>
                        <p class="card_text">Цена за смену: 25 000 руб.</p>
                        <p class="card_text">Цена за час: 3 125 руб.</p>
                    </div>
                </div>
                <div class="list_item card card--row" data-open="#modal-call">
                    <img class="card_img" src="/assets/img/16-4.jpg" alt="" role="presentation" />
                    <div class="card_row">
                        <h3 class="card_title">Putzmeister М 16-4</h3>
                        <p class="card_text">Размер площадки: 6х8 м</p>
                        <p class="card_text">Высота подачи: 16 м</p>
                        <p class="card_text">Дальность подачи: 15 м</p>
                        <p class="card_text">Цена за смену: 12 000 руб.</p>
                        <p class="card_text">Цена за час: 1 500 руб.</p>
                    </div>
                </div>
                <div class="list_item card card--row" data-open="#modal-call">
                    <img class="card_img" src="/assets/img/46-5.jpg" alt="" role="presentation" />
                    <div class="card_row">
                        <h3 class="card_title">Putzmeister М 46-5</h3>
                        <p class="card_text">Размер площадки: 10х10 м</p>
                        <p class="card_text">Высота подачи: 46 м</p>
                        <p class="card_text">Дальность подачи: 37,6 м</p>
                        <p class="card_text">Цена за смену: 30 000 руб.</p>
                        <p class="card_text">Цена за час: 3 750 руб.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section section--beton" id="beton">
        <div class="section_content content">
            <h2 class="section_title">Аренда бетононасосов</h2>
            <p class="section_text section_text--big">Не забудьте заказать бетононасос</p>
            <p class="section_text">Длинна стрел от 18 до 62 метров</p>
            <button class="section_btn btn btn--fill" data-open="#modal-call">Оформить заказ</button>
        </div>
    </section>
    <section class="section section--rebuy" id="rebuy">
        <div class="section_content content">
            <h2 class="section_title">Как вычислить перекупщика за 5 минут</h2>
            <p class="section_sub">Вычислить посредника на самом деле очень просто! </p>
            <p class="section_text">Достаточно задать несколько каверзных вопросов,
                <br>с которыми они не сталкиваются, а именно с производством!</p>
            <div class="section_row">
                <div class="section_list list list--dots">
                    <div class="list_item">Имеется своя лаборатория?</div>
                    <div class="list_item">Как проводится лабораторное испытание бетона?</div>
                    <div class="list_item">Какая фракция щебня используется в бетоне?</div>
                    <div class="list_item">Виды марок бетона для мостовых сооружений?</div>
                    <div class="list_item">Что такое С3А (трехкальцевый алюминат натрия, где используется нормированный бетон)?</div>
                </div>
                <div class="section_article">
                    <p class="section_comment">Мы собираем базу всех недобросовестных посредников, и скоро выложим её в свободный доступ. Если у вас есть подобная информация, поделитесь ею с нами. Давайте вместе максимально усложним жизнь мошенникам!</p>
                    <button class="section_btn btn btn--fill" data-open="#modal-call">пополнить базу</button>
                </div>
            </div>
        </div>
    </section>
    <section class="section section--projects" id="projects">
        <div class="section_content content">
            <h2 class="section_title">Наши проекты</h2>
            <div class="section_slider slider slider--projects" id="slider-projects">
                <div class="slider_slide project">
                    <img class="project_img" src="/assets/img/d-project-1.jpg" alt="" role="presentation" />
                    <div class="project_article">
                        <h2 class="project_title">Стадион ЦСКA в Москве</h2>
                        <div class="project_table">
                            <div class="project_info">Общая площадь комплекса:
                                <span>174&nbsp;100&nbsp;м<sup>2</sup></span>
                            </div>
                            <div class="project_info">Общий объем поставки бетона:
                                <span>9&nbsp;650&nbsp;м<sup>3</sup></span>
                            </div>
                            <div class="project_info">Общая информация:
                                <span>Строительство стадиона началось на месте старого стадиона ЦСКА в мае 2007 года и растянулось на 9 лет. Стадион официально открыт 23 августа 2016 года.</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slider_slide project">
                    <img class="project_img" src="/assets/img/d-project-2.jpg" alt="" role="presentation" />
                    <div class="project_article">
                        <h2 class="project_title">Санаторий МВД Звенигород<br>(Реконструкция 2015-2018)</h2>
                        <div class="project_table">
                            <div class="project_info">
                            
                            </div>
                            <div class="project_info">Площадь:
                                <span>18&nbsp;000&nbsp;м<sup>2</sup></span>
                            </div>
                            <div class="project_info">Поставили:
                                <span>1&nbsp;600&nbsp;м<sup>3</sup></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slider_slide project">
                    <img class="project_img" src="/assets/img/d-project-3.jpg" alt="" role="presentation" />
                    <div class="project_article">
                        <h2 class="project_title">Аэропорт Домодедово DME
                            Расширение 2013-2017</h2>
                        <div class="project_table">
                            <div class="project_info">Общая площадь комплекса:
                                <span>420&nbsp;000&nbsp;м<sup>2</sup></span>
                            </div>
                            <div class="project_info">Общий объем поставки бетона:
                                <span>24&nbsp;300&nbsp;м<sup>3</sup></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="slider_slide project">
                    <img class="project_img" src="/assets/img/d-project-4.jpg" alt="" role="presentation" />
                    <div class="project_article">
                        <h2 class="project_title">Деловой комплекс «Империя»
                            Moscow city group 2006-2013</h2>
                        <div class="project_table">
                            <div class="project_info">Общая площадь здания Бизнес-Центра:
                                <span>203&nbsp;191&nbsp;м<sup>2</sup></span>
                            </div>
                            <div class="project_info">Общий объем поставки бетона:
                                <span>10&nbsp;500&nbsp;м<sup>3</sup></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section section--partners" id="partners">
        <h2 class="section_title">Наши партнеры</h2>
        <div class="section_slider slider slider--partner" id="slider-partners">
            <img class="slider_slide" src="/assets/img/d-partner-1.jpg" alt="" role="presentation" />
            <img class="slider_slide" src="/assets/img/d-partner-2.jpg" alt="" role="presentation" />
            <img class="slider_slide" src="/assets/img/d-partner-3.jpg" alt="" role="presentation" />
            <img class="slider_slide" src="/assets/img/d-partner-4.jpg" alt="" role="presentation" />
            <img class="slider_slide" src="/assets/img/d-partner-5.jpg" alt="" role="presentation" />
            <img class="slider_slide" src="/assets/img/d-partner-6.jpg" alt="" role="presentation" style="width: 150px;"/>
        </div>
    </section>
    <section class="section section--labs" id="labs">
        <div class="section_content">
            <img class="section_img" src="/assets/img/bg-labs.jpg" alt="" role="presentation" />
            <div class="section_article">
                <h2 class="section_title">Собственная аттестованная лаборатория</h2>
                <p class="section_text">Все результаты испытаний фиксируются в соответствующем протоколе.
                    <br>Качество каждой партии бетона подтверждено сертификатами соответствия
                    <br>(ГОСТ 7473-10) и паспортом, которые мы предоставляем с каждой отгрузкой.</p>
                <div class="section_features list list--features">
                    <div class="list_item feature">
                        <img class="feature_icon" src="/assets/img/i-valid.png" alt="" role="presentation" />
                        <p class="feature_title">ГОСТ 7473-10</p>
                    </div>
                    <div class="list_item feature">
                        <img class="feature_icon" src="/assets/img/i-approve.png" alt="" role="presentation" />
                        <p class="feature_title">7 проб ежедневно</p>
                    </div>
                    <div class="list_item feature">
                        <img class="feature_icon" src="/assets/img/i-lab.png" alt="" role="presentation" />
                        <p class="feature_title">Протокол испытания</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section section--serts" id="serts">
        <div class="section_content content">
            <h2 class="section_title">Сертификаты</h2>
            <div class="section_slider slider slider--serts" id="slider-serts">
                <img class="slider_slide" src="/assets/img/sert-1.jpg" alt="" role="presentation" />
                <img class="slider_slide" src="/assets/img/sert-2.jpg" alt="" role="presentation" />
                <img class="slider_slide" src="/assets/img/sert-3.jpg" alt="" role="presentation" />
                <img class="slider_slide" src="/assets/img/sert-4.jpg" alt="" role="presentation" />
            </div>
        </div>
    </section>
    <section class="section section--contacts" id="contacts">
        <h2 class="section_title">Контакты</h2>
        <div id="map"> </div>
        <div class="section_content content">
            <div class="section_row">
                <div class="section_contact contact contact--big">
                    <p class="contact_label">Бухгалтерия</p>
                    <a href="tel:>+74999384939" class="contact_contact2">+7 499 938 49 39</a>
                </div>
                <div class="section_contact contact contact--big">
                    <p class="contact_label">Отдел продаж</p>
                    <a href="tel:+74951183636" class="contact_contact2">+7 495 118 36 36</a>
                </div>
                <div class="section_contact contact contact--big">
                    <p class="contact_label">Дежурный диспетчер</p>
                    <a href="tel:+79645090153" class="contact_contact2">(24/7) +7 964 509 01 53</a>
                </div>
                <div class="section_contact contact contact--big">
                    <p class="contact_label">Почта</p>
                    <p class="contact_contact3">st@betonbsu.ru</p>
                </div>
            </div>
        </div>
    </section>
    <footer class="footer">
        <div class="footer_content content">
            <p class="footer_text">© Строй бетон 2008-2018</p>
            <button class="btn-politika footer" data-open="#politika">Политика конфиденциальности</button>
            <div class="footer_text">
                <p class="footer_text">ОГРН 1177746271867</p>
                <p class="footer_text">ИНН 7751039702</p>
                <p class="footer_text">КПП 775101001</p>
            </div>
        </div>
    </footer>
    <img src="/assets/img/up.png" alt="Наверх" id="scroll-to-top">

    <!-- Modals Start-->
    <div style="display: none;">
        <div class="modal" id="modal-call">
            <div class="modal_content content">
                <div class="modal_bg"></div>
                <div class="modal_close" data-close="#modal-call"></div>
                <h3 class="modal_title">Оставьте номер
                    <br>для связи с вами</h3>
                <p class="modal_text">Наш менеджер перезвонит
                    <br>Вам в течении 5-ти минут</p>
                <span class="modal_info">Подача АБН в течении 1-2 часа<br>
                    после подтверждении заказа<br>
                    по телефону</span>
                <form class="modal_form form" data-after="#thx">
                    <input type="hidden" name="sum">
                    <input type="hidden" name="comment">
                    <input class="form_field"
                           id="phone"
                           name="phone"
                           data-req="true"
                           data-clear="true"
                           required
                           placeholder="Ваш номер телефона*" type="text" />
                    <button class="form_btn btn btn--fill">Оставить номер</button>
                    <input class="form_polit" id="polit" type="checkbox" checked="checked" />
                    <label class="form_polit" for="polit">
                        Отправляя сведения через электронную форму, вы даете согласие на обработку, сбор, хранение
                        <br>и передачу третьим лицам представленной Вами информации на условиях
                        <button class="btn-politika" data-open="#politika">Политика конфиденциальности</button>
                    </label>
                </form>
            </div>
        </div>
        <div class="modal" id="modal-video">
            <div class="modal_content content">
                <div class="modal_bg"></div>
                <div class="modal_close" data-close="#modal-video"></div>
                <div class="video">
                    <!-- <video controls style="max-width: 100%">
                        <source src="/assets/video/stroibeton_x264.mp4" type="video/mp4">
                        <source src="/assets/video/stroibeton_VP8.webm" type="video/webm">
                        <source src="/assets/video/stroibeton_libtheora.ogv" type="video/ogg">
                     </video> -->
                    <iframe width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/KQUVARDbnTg"
                            frameborder="0" allow="autoplay; encrypted-media"
                            allowfullscreen></iframe>
                </div>
            </div>
        </div>
        <div class="modal" id="thx">
            <div class="modal_content content">
                <div class="modal_bg"></div>
                <div class="modal_close" data-close="#thx"></div>
                <h3 class="modal_title">Ваша заявка принята!</h3>
                <p class="modal_text">Наш менеджер перезвонит
                    <br>Вам в течении 5-ти минут</p>
            </div>
        </div>
        <div class="modal" id="politika">
            <div class="modal_content content">
                <div class="modal_bg"></div>
                <div class="modal_close polit" data-close="#politika"></div>
                <h3 class="modal_title">Cоглашение об обработке персональных данных:</h3>
                <p class="modal_text">
                    Ваша конфиденциальность очень важна для нас. Мы хотим, чтобы Ваша работа в Интернет по возможности была максимально приятной и полезной, и Вы совершенно спокойно использовали широчайший спектр информации, инструментов и возможностей, которые предлагает
                    Интернет. Мы создали Политику конфиденциальности, чтобы продемонстрировать свою верность принципам конфиденциальности и безопасности. В Политике конфиденциальности описано, как наша компания собирает информацию ото всех конечных пользователей
                    своих Интернет-услуг («Услуг»), включая людей, имеющих доступ к некоторым нашим услугам без регистрационной записи («Гостей»), а также клиентов, которые купили Продукты и/или вносят ежемесячную оплату за услуги, чтобы подписаться на Услугу
                    («Члены»). Политика также включает объяснение о том, что мы делаем с собранной информацией, и какие возможности по сбору и использованию такой информации есть у Гостей и Членов. Мы просим Вас тщательно ознакомиться с Политикой конфиденциальности.
                    Личная информация, которую собирает наша компания, и пути ее использования
                </p>
                <h3 class="modal_title"> Введение: </h3>
                <p class="modal_text">
                    Членов могут попросить предоставить определенную личную информацию при подписке на наши Продукты или Услуги, в частности, имя, адрес, номер телефона, информацию для выставления счетов (например, номер кредитной карточки) и тип персонального компьютера,
                    который будет использоваться для доступа к Услугам. Личная информация Членов, собранная при регистрации (или в любое другое время) преимущественно используется для подготовки Продуктов или Услуг в соответствии с Вашими потребностями. Ваша
                    информация не будет передана или продана третьим сторонам. Однако мы можем частично раскрывать личную информацию в особых случаях, описанных в нижеприведенном разделе «Разглашение».
                </p>
                <h3 class="modal_title">Разглашение:</h3>
                <p class="modal_text">
                    Мы оставляем за собой право раскрывать информацию Членов и Гостей следующим третьим сторонам в следующих ситуациях: Компаниям, работающим от нашего лица: Мы сотрудничаем с другими компаниями, выполняющими от нашего лица функции бизнес поддержки, в связи
                    с чем Ваша личная информация может быть частично раскрыта. Мы требуем, чтобы такие компании использовали информацию только в целях предоставления услуг по договору; им запрещается передавать данную информацию другим сторонам в ситуациях,
                    отличных от случаев, когда это вызвано необходимостью предоставления оговоренных услуг. Примеры функций бизнес поддержки: выполнение заказов, реализация заявок, выдача призов и бонусов, проведение опросов среди клиентов и управление информационными
                    системами. Мы также раскрываем обобщенную неперсонифицированную информацию при выборе поставщиков услуг. Дочерним и совместным предприятиям: Под дочерним или совместным предприятием понимается организация, не менее 50% долевого участия
                    которой принадлежит Компании. При передаче Вашей информации партнеру по дочернему или совместному предприятию наша Компания требует не разглашать данную информацию другим сторонам в маркетинговых целях и не использовать Вашу информацию
                    каким-либо путем, противоречащим Вашему выбору. Если Вы указали, что не хотите получать от нашей Компании какие-либо маркетинговые материалы, то мы не будем передавать Вашу информацию своим партнерам по дочерним и совместным предприятиям
                    для маркетинговых целей. На совместно позиционируемых или партнерских страницах: Наша Компания может делиться информацией с компаниями-партнерами, вместе с которыми реализует специальные предложения и мероприятия по продвижению товара
                    на совместно позиционируемых страницах нашего сайта. При запросе анкетных данных на таких страницах Вы получите предупреждение о передаче информации. Партнер использует любую предоставленную Вами информацию согласно собственному уведомлению
                    о конфиденциальности, с которым Вы можете ознакомиться перед предоставлением информации о себе. При передаче контроля над предприятием: Наша Компания оставляет за собой право передавать Ваши анкетные данные в связи с полной или частичной
                    продажей или трансфертом нашего предприятия или его активов. При продаже или трансферте бизнеса наша Компания предоставит Вам возможность отказаться от передачи информации о себе. В некоторых случаях это может означать, что новая организация
                    не сможет далее предоставлять Вам услуги или продукты, ранее предоставляемые нашей Компанией. Правоохранительным органам: Наша Компания может без Вашего на то согласия раскрывать персональную информацию третьим сторонам по любой из следующих
                    причин: во избежание нарушений закона, нормативных правовых актов или постановлений суда; участие в правительственных расследованиях; помощь в предотвращении мошенничества; а также укрепление или защита прав Компании или ее дочерних предприятий.
                    С Вашего согласия: Во всех остальных случаях перед передачей информации о Вас третьим сторонам наша Компания обязуется получить Ваше явное согласие. Например, наша Компания может реализовывать совместное предложение или конкурс с третьей
                    стороной, тогда мы попросим у Вас разрешение на совместное использование Вашей личной информации с третьей стороной.
                </p>
                <h3 class="modal_title">Интернет-покупки:</h3>
                <p class="modal_text">
                    При заказе услуг или продуктов непосредственно в нашей Компании предоставленная Вами персональная информация используется для обработки данного заказа. Мы не передаем эту информацию сторонним организациям за исключением случаев, когда это необходимо для
                    выполнения такого заказа. При подаче заказа через другие компании, которые могут давать ссылки на наш сайт, например, предлагая подарок через Интернет, который напрямую отправляется получателю, Вас могут попросить предоставить информацию
                    о получателе, в частности, имя, адрес и номер телефона. Наша компания никак не контролирует пути использования третьими сторонами персональной информации, предоставленной Вами при размещении таких заказов. Пожалуйста, в таких случаях будьте
                    осторожны. Рекомендуем ознакомиться с Политикой конфиденциальности и Условиями пользования любых других компаний, на чьи веб-сайты можно перейти с нашего сайта.
                </p>
                <h3 class="modal_title">Реклама в интернете:</h3>
                <p class="modal_text">
                    Наша компания может размещать рекламу в Интернет. В таких случаях мы предоставляем своим рекламодателям сгруппированную и неперсонифицированную информацию о своих Гостях и Членах, собранную при регистрации, а также с помощью Интернет-опросов и мероприятий
                    по продвижению. Кроме того, в некоторых случаях мы используем эту сгруппированную и неперсонифицированную информацию для целевой рекламы и совместных предприятий. Например, рекламодатель или совместное предприятие говорит, до какой аудитории
                    нужно достучаться, и предоставляет соответствующую ей рекламу. Позднее на основании собранной и сгруппированной неперсонифицированной информации мы размещаем или рассылаем рекламу целевой аудитории. Наша компания не раскрывает таким рекламодателям
                    или совместным предприятиям персональную информацию о своих Гостях и Членах. Информация о том, как отказаться от Интернет-рекламы нашей Компании, включается непосредственно в рекламные материалы.
                </p>
                <h3 class="modal_title"> Ответы на электронные запросы:</h3>
                <p class="modal_text">
                    Когда Гости или Члены отправляют нашей компании электронные запросы, для ответа на них используется электронный адрес, с которого пришел запрос. Наша компания не использует обратные адреса в каких-либо других целях и не передает их каким-либо третьим
                    сторонам.
                </p>
                <h3 class="modal_title"> Добровольные опросы клиентов:</h3>
                <p class="modal_text">
                    Мы периодически проводим как коммерческие, так и частные опросы среди пользователей. Мы рекомендуем своим клиентам участвовать в этих опросах, поскольку они дают нам важную информацию, с помощью которой мы можем улучшить различные свои продукты и услуги,
                    а также усовершенствовать пути их предоставления. Ваша личная информация и ответы останутся строго конфиденциальными даже при проведении опроса третьей стороной. Участие в наших клиентских опросах необязательно. Информация о том, как отказаться
                    от участия в опросе, включается в сообщения об опросах. Мы можем взять информацию, полученную от отдельных лиц, участвующих в наших клиентских опросах и объединить (сгруппировать) с ответами других наших клиентов для создания более широких
                    и обобщенных ответов на вопросы опроса (в частности, пол, возраст, местожительства, увлечения, образование, место работы, сектор промышленности и др. демографическая информация). После этого сгруппированная информация используется для
                    улучшения качества предоставляемых Вам услуг и разработки новых услуг и продуктов. Такая сгруппированная и неперсонифицированная информация может передаваться третьим сторонам.
                </p>
                <h3 class="modal_title"> Автоматический сбор информации:</h3>
                <p class="modal_text">
                    Cookies: Для сбора информации наша Компания может пользоваться маркерами Cookies; это маленькие информационные файлы, которые сохраняются Вашим браузером на жестком диске Вашего компьютера по запросу веб-сайта. Маркеры Cookies нашей Компании не содержат
                    какой-либо персональной информации и преимущественно используются следующим образом: - для отслеживания временной информации. Например, маркеры Cookies позволяют нам отслеживать, какие картинки Вы загружаете и скачиваете; - чтобы регистрировать
                    Вас в специальных программах. Cookies позволяют нам запоминать Вас при входе в зоны нашего сайта, для которых необходимо быть Членом; - чтобы запомнить Ваши предпочтения относительно страны и языка; - чтобы помочь нам понять масштабы своей
                    аудитории и распределение трафика; - для сбора и записи информации о том, что Вы просмотрели на нашем сайте и что просмотрели в нашем электронном письме; - для управления и информацией сайта и ее презентации, а также чтобы понять, какие
                    изображения могут отображаться на Вашем компьютере; - и подавать информацию в соответствии с Вашими интересами. Веб-маяки: Мы также можем размещать на своем веб-сайте, в Интернет-рекламе с участием третьих сторон и своих электронных письмах
                    небольшие «следящие изображения» или «маяки». Такие маяки применяются вместе с маркерами Cookies для сбора неличной информации об использовании нашего сайта, в том числе, включая время и дату посещения, просмотренные страницы, страницу
                    перехода, тип браузера (например, Internet Exh2lorer, NetScah2e), тип операционной системы (например, Windows, Linux или Mac), а также имя домена провайдера Интернет-услуг посетителя (например, AOL). Мы собираем такую информацию о посещениях
                    сайта тысячами и анализируем в целом. Данная информация важна, в частности, для определения эффективности нашей Интернент-рекламы, например, баннеров и выбора места для будущей рекламы на других веб-ресурсах. Отключение Cookies и маяков:
                    Если сбор такой информации через маркеры Cookies и маяки Вам неприятен, рекомендуем отключить эти функции в настройках своего браузера, но, пожалуйста, помните, что это ограничит эффективность и функциональность веб-сайта нашей Компании.
                    О том, как отключить поддержку cookie и маяков, как правило, говорится в инструкции к браузеру
                </p>
                <h3 class="modal_title"> Информационная защита детей:</h3>
                <p class="modal_text">
                    Защита детей от Интернет-информации особенно важна, дети младше 13 лет находятся под защитой федерального закона. По этой причине наша Компания намеренно не позволяет детям до 13 лет становиться зарегистрированными членами наших сайтов или приобретать
                    товары и услуги на наших сайтах без подтвержденного разрешения от родителей. Наша компания намеренно не собирает и не запрашивает личную информацию у детей до 13 лет без явного на то согласия их родителей. Если мы когда-либо включим детей
                    до 13 лет в число целевой аудитории нашего сайта, то эти специальные страницы будут выделены отдельно и будут содержать развернутое уведомление о конфиденциальности, в соответствии с положениями Акта о защите частной жизни ребенка в Интернете
                    (COh2h2A); мы также обеспечим механизмы получения разрешения родителей, их доступ к информации и дадим родителям возможность требовать удаления личной информации своих детей. Наша Компания приветствует родителей и попечителей, которые
                    проводят время в сети вместе со своими детьми и принимают участие в их интерактивных занятиях и увлечениях.
                </p>
                <h3 class="modal_title"> Общественные форумы:</h3>
                <p class="modal_text">
                    Определенная часть нашего сайта может давать доступ к общественным услугам, в частности, доскам обсуждения, чатам и мероприятиям в режиме реального времени. Пользуясь такими услугами, пожалуйста, будьте осторожны, когда публикуете информацию о себе. Учтите,
                    что личная информация, раскрытая на таких сайтах, например, Ваше имя, имя пользователя, адрес электронной почты и т.п., может собираться и использоваться для несанкционированных рассылок. Такие услуги открыты для общественного пользования,
                    и то, что Вы публикуете там, может просматривать любой – информация незащищена. Мы не в состоянии контролировать комментарии, которые Вы можете получить, участвуя в таких услугах. Комментарии других людей могут показаться Вам оскорбительными,
                    опасными или некорректными. Приверженность нашей компании принципам конфиденциальности: Для защиты Вашей личной информации мы используем разнообразные административные, управленческие и технические меры безопасности. Наша Компания придерживается
                    различных международных стандартов контроля, направленных на операции с личной информацией, которые включают определенные меры контроля по защите информации, собранной в Интернет. Наших сотрудников обучают понимать и выполнять эти меры
                    контроля, они ознакомлены с нашим Уведомлением о конфиденциальности, нормами и инструкциями. Тем не менее, несмотря на то, что мы стремимся обезопасить Вашу личную информацию, Вы тоже должны принимать меры, чтобы защитить ее. Мы настоятельно
                    рекомендуем Вам принимать все возможные меры предосторожности во время пребывания в Интернете. Организованные нами услуги и веб-сайты предусматривают меры по защите от утечки, несанкционированного использования и изменения информации,
                    которую мы контролируем. Несмотря на то, что мы делаем все возможное, чтобы обеспечить целостность и безопасность своей сети и систем, мы не можем гарантировать, что наши меры безопасности предотвратят незаконный доступ к этой информации
                    хакеров сторонних организаций. Куда направлять вопросы о нашей Политике конфиденциальности: Если у Вас возникли вопросы относительно данной Политики конфиденциальности или описанных выше практических методик, с нами можно связаться с помощью
                    контактной информации нашего сайта.
                </p>
                <h3 class="modal_title">Изменения настоящей Политики:</h3>
                <p class="modal_text">
                    Наша Компания оставляет за собой право в любое время и любым образом редактировать, дополнять или изменять настоящую политику, Правила пользования и Договор об оказании услуг, а также другие политики и договоры нашей Компании, обновив при этом настоящую
                    страницу.
                </p>
                <h3 class="modal_title">Согласие на рассылку:</h3>
                <p class="modal_text">
                    Подписавшись на этом сайте Вы выражаете свое согласие на получение от нас по электронной почте бесплатных ознакомительных уроков. После того, как вы введете ваши данные, вы будуте время от времени получать от нас по электронной почте новостную рассылку
                    и извещения. Если вы пожелаете перестать получать от нас информацию, вы сможете отказаться от рассылки в любое время, пройдя по ссылке, приведенной в конце каждого письма.
                </p>
            </div>
        </div>
    </div>

    <!--
<div style="display: none;">
  <div class="box-modal" id="boxUserFirstInfo">
    <div class="box-modal_close arcticmodal-close">закрыть</div>
    <h2>Выберите город</h2>
    <ul style="list-style: none;
    column-count: 3;
    height: 380px;
    margin-top: 20px;">
      <li><a class="city__item" href="http://betonbsu.ru">Москва</a></li>
      <li><a class="city__item" href="http://aprelevka.betonbsu.ru">Апрелевка</a></li>
      <li><a class="city__item" href="http://balashiha.betonbsu.ru">Балашиха</a></li>
      <li><a class="city__item" href="http://bronnici.betonbsu.ru">Бронницы</a></li>
      <li><a class="city__item" href="http://vidnoe.betonbsu.ru">Видное</a></li>
      <li><a class="city__item" href="http://dzerginsky.betonbsu.ru">Дзержинский</a></li>
      <li><a class="city__item" href="http://dmitrov.betonbsu.ru">Дмитров</a></li>
      <li><a class="city__item" href="http://dolgoprud.betonbsu.ru">Долгопрудный</a></li>
      <li><a class="city__item" href="http://dododedovo.betonbsu.ru">Домодедово</a></li>
      <li><a class="city__item" href="http://gelezodorogny.betonbsu.ru">Железнодорожный</a></li>
      <li><a class="city__item" href="http://gukovsky.betonbsu.ru">Жуковский</a></li>
      <li><a class="city__item" href="http://zvenigorod.betonbsu.ru">Звенигород</a></li>
      <li><a class="city__item" href="http://Ivanteevka.betonbsu.ru">Ивантеевка</a></li>
      <li><a class="city__item" href="http://istra.betonbsu.ru">Истра</a></li>
      <li><a class="city__item" href="http://klin.betonbsu.ru">Клин</a></li>
      <li><a class="city__item" href="http://kolomna.betonbsu.ru">Коломна</a></li>
      <li><a class="city__item" href="http://korolev.betonbsu.ru">Королев</a></li>
      <li><a class="city__item" href="http://kotelniki.betonbsu.ru">Котельники</a></li>
      <li><a class="city__item" href="http://krasnoarmeysk.betonbsu.ru">Красноармейск</a></li>
      <li><a class="city__item" href="http://kr_pahra.betonbsu.ru">Красная пахра</a></li>
      <li><a class="city__item" href="http://krasnogork.betonbsu.ru">Красногорск</a></li>
      <li><a class="city__item" href="http://lobnya.betonbsu.ru">Лобня</a></li>
      <li><a class="city__item" href="http://losino-petrovsky.betonbsu.ru">Лосино-Петровский</a></li>
      <li><a class="city__item" href="http://luhovici.betonbsu.ru">Луховицы</a></li>
      <li><a class="city__item" href="http://litkarino.betonbsu.ru">Лыткарино</a></li>
      <li><a class="city__item" href="http://lyubertci.betonbsu.ru">Люберцы</a></li>
      <li><a class="city__item" href="http://muitishi.betonbsu.ru">Мытищи</a></li>
      <li><a class="city__item" href="http://noginsk.betonbsu.ru">Ногинск</a></li>
      <li><a class="city__item" href="http://odincovo.betonbsu.ru">Одинцово</a></li>
      <li><a class="city__item" href="http://pavl_pos.betonbsu.ru">Павловский-Посад</a></li>
      <li><a class="city__item" href="http://podolsk.betonbsu.ru">Подольск</a></li>
      <li><a class="city__item" href="http://pushkino.betonbsu.ru">Пушкино</a></li>
      <li><a class="city__item" href="http://ramenskoe.betonbsu.ru">Раменское</a></li>
      <li><a class="city__item" href="http://reutov.betonbsu.ru">Реутов</a></li>
      <li><a class="city__item" href="http://serpuhov.betonbsu.ru">Серпухов</a></li>
      <li><a class="city__item" href="http://solnechnogorsk.betonbsu.ru">Солнечногорск</a></li>
      <li><a class="city__item" href="http://troick.betonbsu.ru">Троицк</a></li>
      <li><a class="city__item" href="http://fryazino.betonbsu.ru">Фрязино</a></li>
      <li><a class="city__item" href="http://khimki.betonbsu.ru">Химки</a></li>
      <li><a class="city__item" href="http://chehov.betonbsu.ru">Чехов</a></li>
      <li><a class="city__item" href="http://shelkovo.betonbsu.ru">Щелково</a></li>
      <li><a class="city__item" href="http://electrogorsk.betonbsu.ru">Электрогорск</a></li>
      <li><a class="city__item" href="http://electrostal.betonbsu.ru">Электросталь</a></li>  
    </ul>
  </div>
</div>
-->
    <?php require_once __DIR__ .'/_body_end.php';?>
</body>

</html>