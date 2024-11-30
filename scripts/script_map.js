// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
            center: [51.667400, 39.214903],
            zoom: 13   //0 - самое дальнее, 19 - самое ближнее.
        },
        {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        point_platonov = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [51.672136, 39.209197]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Платонов'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        });

        point_bunin = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [51.659312, 39.202040]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Бунин'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        });

        point_marshak = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [51.665918, 39.203481]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Маршак'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        });

    myMap.geoObjects
        .add(point_platonov)
        .add(point_bunin)
        .add(point_marshak)
        
}