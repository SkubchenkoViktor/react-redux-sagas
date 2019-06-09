import {Place} from '../model/place'

const AllPlacesData = '#id,title,latitude,longitude,imageSmall,imageBig,description\n' +
    '##### Музеи\n' +
    '0,Музей железнодорожной техники,47.190518,39.637158,museum_rail_train_small,museum_rail_train_big::Филиал Музея истории Северо-Кавказской железной дороги открылся в 2003 году на западной окраине Ростова, на станции Гниловской. Общая протяженность выставочных путей занимает почти две тысячи метров. Коллекция старого подвижного состава собиралась на протяжении двадцати лет энтузиастами и работниками железной дороги. Сегодня в музее более 50 паровозов, электровозов, вагонов и путейной техники, большинство из которых сохранились в единственном экземпляре или несут важную историческую нагрузку. Например, здесь можно увидеть механический семафор, румынскую цистерну середины XIX века, военную мотодрезину, 45-тонный грузоподъемный кран 1935 года и многое другое — можно не только трогать все экспонаты, но и забираться внутрь.\n' +
    '1,Аксайский военно-исторический музей,47.271584,39.891089,museum_voen_istr_aksay_small,museum_voen_istr_aksay_big::Музей военной техники в городе Ростов-на-Дону располагается на территории природоохранного заповедника «Мухина балка». Открытие музея состоялось в 1998 г. на базе опустевшего запасного пункта Северо-Кавказского округа (СКВО), построенного в 60-х гг. ХХ ст. советским правительством на случай третьей мировой войны. СКВО представляет собой череду множественных подземных тоннелей и коридоров, пересекающихся стальными герметичными дверями, которые образуют так называемые катакомбы. Даже при ядерном ударе данные туннели служили бы самым надежным укрытием. Запасной пункт всегда являлся военной тайной, а после того как в начале 90-х гг. комплекс был полностью заброшен, то о его подземельях пошли таинственные и страшные слухи. Некоторые считают, что здесь проводились секретные медицинские исследования, а другие, что на территории пункта разрабатывалось совершенно секретное и опасное сверхоружие.\n' +
    '2,Музей краеведения,47.223408,39.722384,museum_kraevedeniya_small,museum_kraevedeniya_big::Ростовский областной музей краеведения – государственное учреждение культуры Ростовской области, находится на улице Большая Садовая. История его существования перевалила за столетний рубеж. В 1910 году в Ростове был создан городской музей. С развитием музейного дела позже открылись музеи коммунального хозяйства, горских народов, атеизма, которые объединились в Ростовский областной музей в 1937 году под единой крышей особняка Н. Парамонова.К сожалению, в годы войны в результате бомбардировок здание и коллекция были уничтожены. Второе открытие музея произошло в 1957 году в специально перестроенном для экспозиции здании бывшего геологоуправления, где музей располагается и сегодня. Музей известен далеко за пределами Российской Федерации благодаря богатейшей коллекции уникальных археологических находок, объединенных в выставку «Сокровища донских степей», в которой представлены более 12 тысяч артефактов, которыми восхищались ценители культуры в Великобритании, Франции, Германии, Швейцарии, Японии. Гордость музея – выставочный зал «Сокровища донских курганов», где представлены более двух тысяч экспонатов из серебра и золота, датированных IV в. до н.э. – IV в. н.э.\n' +
    '3,Музей виноделия и донского самогоноварения,47.211095,39.752368,museum_vinodelia_i_varenia_small,museum_vinodelia_i_varenia_big::Музей виноделия и донского самогоноварения расположен вдали от центра Ростова-на-Дону, на левом берегу реки Дон. В отличие от основной массы ростовских достопримечательностей этот музей не муниципальный, а частный, и расположен в этнографическом комплексе «Станица Черкасская», принадлежащем ростовскому гостиничному комплексу «Петровский Причал».Название гостиничного комплекса связано с деятельностью и пребыванием в Ростове царя Петра I, а вот название музея как нельзя точно подходит для описания культуры и быта донского казачества. С давних времен вино у казаков входило в быт в качестве обрядового напитка и это не случайно. Благоприятные почвенно-климатические условия Приазовья поставили регион в один ряд с известными мировыми винодельческими брендами. В музее представлена продукция виноделов Кубани и Ростовской области (знаменитые далеко за пределами России винзаводы Абрау-Дюрсо, Кубань-вино, Фанагория, Цимлянский, Мысхако и др.).\n' +
    '4,Музей космонавтики,47.210683,39.619027,museum_kosmonavtiky_small,museum_kosmonavtiky_big::Ростовский музей космонавтики – одно из подразделений научно-образовательного комплекса «Вертикаль». Торжественное открытие музея в городе Ростов-на-Дону состоялось в сентябре 2009 г. и было приурочено к 30-летней годовщине со дня основания ОАО «Научно-производственного предприятия космического приборостроения «Квант». Инициатором создания музея выступил генеральный директор и главный конструктор - В.Н. Мотин, доктор наук, академик и вице-президент Российской инженерной академии, заслуженный конструктор Российской Федерации. Первую экскурсию по музею космонавтики провел житель донского края, Герой России Ю.В. Усачев. В фондах музея хранится очень много интересных экспонатов: образцы космической техники, вещи космонавтов, костюмы, скафандры, архивные документы, фото- и киноматериалы, печатные издания, предметы филателии и нумизматики, приборы ориентации космических кораблей, макеты спутников связи и разные модели космических кораблей.\n' +
    '5,Музей ростовского водопровода,47.232926,39.740249,museum_vodoprovoda_small,museum_vodoprovoda_big::Музей ростовского водопровода, расположенный в городе Ростов-на-Дону в зале, принадлежащем административному корпусу ОАО «ПО Водоканал», - это одна из культурных городских достопримечательностей. Торжественное открытие ростовского музея состоялось в 2000 г. Он отражает всю истории организации с 1865 г. когда было начато централизованное водоснабжение города. Первый водопровод, пущенный в Ростове-на-Дону, имел протяженность немного больше 5 км. Но он развивался и рос вместе с городом и в итоге стал его неотъемлемой частью. В музее ростовского водопровода собраны самые разные экспонаты. Некоторые из них имеют возраст более 100 лет: насосные агрегаты, пожарные гидранты, водоразборные колонки.Посетители музея могут увидеть карту города со схемой первого водопровода, которая была выпущена в 1865 г., старинную колонку, первый водомер, выпущенный в 1901 г., огромные люки ХIХ ст., дореволюционный пожарный гидрант и многое другое. Благодаря экспонатам более поздних времен можно оценить увеличение мощностей ростовского водопровода, а также технический прогресс в сфере водоотведения и водоснабжения, очистки и обеззараживании воды.\n' +
    '6,Ростовский областной музей изобразительных искусств,47.225407,39.723372,museum_isobrasitelnix_isskusstv_small,museum_isobrasitelnix_isskusstv_big::Ростовский областной музей изобразительных искусств формировался с начала ХХ столетия при активном участии таких известных деятелей культуры как художники М.С. Сарьян и Л.Д Силин, писательница М.А. Шагинян. Основу его коллекции составили произведения из собраний частных коллекций ростовских меценатов, которые были экспроприированы после революции. Они экспонировались с 1920 года в тогдашнем Донском областном музее искусства и древностей, преобразованном в 1927 году в музей народов Северного Кавказа. А в 1938 году состоялось открытие нового Ростовского областного музея на правах отдела краеведческого музея. Музей с первых дней существования был пополнен произведениями из Эрмитажа и Третьяковской галереи, его довоенная коллекция отличалась известными именами. К сожалению, несмотря на эвакуацию в Пятигорск в начале войны, она была разграблена и только часть ее смогли вернуть в послевоенное время. Второй раз музей открылся в 1946 году, сначала в отведенных нескольких комнатах Ростовского художественного училища. А в 1958 году музей переехал в собственное здание в отреставрированном и приготовленном для музейной работы старинном здании-особняке ростовского адвоката А.П. Петрова, построенном в 1898 году по проекту архитектора Н.А.Дорошенко и национализированном в 1920 году советской властью. Само здание музея представляет собою произведение архитектурного искусства и непременно привлекает внимание посетителей музея.\n' +
    '7,Детская художественная галерея,47.225424,39.723460,museum_detskaya_gallery_small,museum_detskaya_gallery_big::Детская художественная галерея в Ростове-на-Дону находится в центре города на проспекте Чехова и является филиалом Областного музея изобразительных искусств. Галерея существует уже более тридцати лет и стала воистину любимым объектом посещения горожан с детьми и гостей Ростова. Галерея является первой в России детской художественной галереей, ее история началась в конце 1981 года. К тому времени в столице донского края существовал Ростовский областной музей изобразительных искусств с отличной коллекцией произведений графики, скульптуры, живописи, декоративно-прикладного искусства Западной Европы, Востока и современной России. Идея открытия нового раздела или филиала пришла местному руководству после визита в Ереван, где им показали первый тогда в СССР и в мире Музей детского творчества. Богатый на таланты Ростов в том же году решил проблему создания и размещения Детской художественной галереи. Для создания филиала областного музея выделили здание в исторической части города, построенное для ростовского купца Я.Тартаковера в 1908 году. В послереволюционный и послевоенный период здание не раз перестраивали, в нем располагались различные ведомства, а к 80-м годам прошлого столетия оно принадлежало Северо-Кавказскому военному округу. Кстати, именно в этом доме проживал командующий Северо-Кавказского округа дважды Герой Советского Союза генерал И.А. Плиев, о чем напоминает мемориальная доска на здании.\n' +
    '#### Театры\n' +
    '101,Театр драмы им. М. Горького,47.228162,39.744893,theatre_m_gorkogo_small,theatre_m_gorkogo_big::Ростовский Академический театр драмы им. М. Горького – крупнейший драматический театр в г. Ростов-на-Дону. Здание театра, находящееся на Театральной площади, было построено в 1935 г. по проекту архитекторов В. А. Щуко и В. Г. Гельфрейха, строительством руководил А. М. Стамблер. Восстановлено после войны здание театра было лишь в 1963 г. По своему внешнему виду театр похож на трактор. Здание входит в список шедевров эпохи конструктивизма, так, например, в Лондонском музее истории архитектуры Россию представляют два макета: собор Василия Блаженного и Ростовский драматический театр им. М. Горького. Такие знаменитые архитекторы, как Ле Корбюзье и Оскар Нимейер называли Ростовский театр жемчужиной советской архитектуры.\n' +
    '102,Музыкальный театр,47.224663,39.732289,theatre_muzikalniy_small,theatre_muzikalniy_big::Ростовский музыкальный театр является одним из самых старых и самых крупных театров на Юге России. Был основан в 1919 году как театр музыкальной комедии, в 1931 получил звание государственного. В 1999 году был реорганизован и переехал в новое здание, театр начал активно развиваться и осваивать новые стили. С начала своего существования был одним из лучших театров оперетты, имел значительное влияние на музыкальное искусство. Сегодня театр считается культурным феноменом России, сочетая в своем репертуаре такие стили как опера, балет, мюзикл, рок-опера, музыкальные новеллы и симфонические концерты.\n' +
    '103,Академический молодежный театр,47.229482,39.764573,theatre_molodejniy_small,theatre_molodejniy_big::Ростовский областной академический молодёжный театр — театр в г. Ростов-на-Дону, бывший Ростовский ТЮЗ им. Ленинского комсомола. Красивое, словно сказочный дворец, здание театра было построено в 1899 г. Зрительный зал театра имеет отличную акустику, при возведении его стен был использован древний способ - под потолком вмурованы амфоры с горлышками, открытыми в зал. Пол зала, при помощи домкратов мог приводиться в горизонтальное положение, что использовалось, например, при организации балов, и других многолюдных увеселительных мероприятий. В разные годы в здании существовали разные театры: Театр Рабочей молодежи (ТРАМ), Ростовский театр комедии, Молодежный театр драмы им. Ленинского комсомола, Ростовский ТЮЗ.\n' +
    '104,Театр кукол,47.225720,39.728203,theatre_kukol_small,theatre_kukol_big::История Ростовского Государственного театра Кукол началась в 20-е годы прошлого века, когда группа талантливых кукольников, среди которых были М.Кушнаренко, Н.Смирнова, А.Дора и многие другие, работали с таким успехом, что в местном отделении крайкома комсомола приняли решение о создании полноценного театра кукол. Впервые двери театра были открыты для зрителей в 1935 году, и с тех пор на его спектаклях, всегда пользовавшихся большой популярностью, выросло не одно поколение жителей Ростова-на-Дону и соседних районов. В разные времена театром кукол руководили многие известные режиссёры, среди которых был ученик Станиславского - Борис Сахновский, ученик Мейерхольда - Леонид Стельмахович, и ученик Образцова - Владимир Былков.\n' +
    '#### Памятники\n' +
    '201,Памятник С.М.Кирову,47.228480,39.728696,memorial_kirovu_small,memorial_kirovu_big::Памятник, работы скульптора Залмана Виленского, был поставлен на пересечении Кировского пр-та (бывш. Богатяновский) и Садовой улицы, в 1939 году. Этому предшествовало разрушение стоявшего на этом месте Покровского Храма. Гранитная облицовка храма пошла на отделку постамента для памятника. Высота памятника - 3,5 метра, вес - 2,5 тонны. На постаменте надпись: "...Успехи действительно у нас громадные. Чорт его знает, если по-человечески сказать, так хочется жить и жить...". В начале 2000-х годов было решено восстанавливать Покровский храм на прежнем месте. Памятник перенесли немного дальше, на пересечение Кировского пр-та и Пушкинской улицы. Ходили слухи, что виной тому, что памятник и храм не сделались соседями, послужило слово «чорт» в надписи на постаменте. Кроме того, Киров был атеистом и вообще неоднозначной фигурой, поэтому близость его памятника с храмом была бы неуместной. Поэтому, на его месте, рядом с отстроенным храмом установили памятник царице Елизавете.\n' +
    '202,Памятник стачке 1902 года «Преемственность поколений»,47.213185,39.692787,memorial_stachke_small,memorial_stachke_big::Памятник стачке 1902 года - мемориал погибшим участникам стачки 1902 г., установленный при въезде в Железнодорожный район г. Ростова. Композиция памятника, работы скульптора А. А. Снарина, представляет собой фигуры двух рабочих мастерских Владикавказской железной дороги, погибших при расстреле властями митинга. Один из них падает с ног и держится одной рукой за огромную наковальню – знак выступления кузнецов в стачке. Второй рабочий стремится в бой, держа в руках кусок растерзанного красного знамени. Памятник стачке 1902 года по сути является ярким примером советско-коммунистического эпоса о тяжелом времени, когда пролетариат впервые начал отстаивать свои права и свободы. Композиция памятника призвана порождать у зрителей тревожно-патриотический настрой и воспитывать их в духе советской идеологии классовой борьбы. Памятник стачке 1902 г. – это яркий символ советской эпохи. Памятник установлен на большой площадке, с которой открывается прекрасный вид на г. Ростов.\n' +
    '203,Памятник Петру и Февронии Муромским,57.629471,39.885843,memorial_petru_i_fevronii_small,memorial_petru_i_fevronii_big::Русские православные святые, Петр и Феврония стали символом любви и верности в нашей стране, им посвящен соответствующий праздник. С 2011 года в Ростове-на-Дону есть памятник, посвященный этим героям. Теперь парк Октябрьской революции - обязательное место "паломничества" молодоженов. Петр, в нарядном кафтане с накидкой, держит за руку прекрасную Февронию с роскошной косой, собираясь надеть ей на палец обручальное кольцо. По легенде, счастливому событию, которое нам представляет монумент, предшествовало множество событий. Князь Петр был болен проказой после сражения с огненным змеем. По преданию, во сне князь узнал, кто сможет его спасти - простая крестьянка Феврония. Взамен он пообещал жениться на ней, но не сдержал слова. И заболел снова, поскольку Феврония предусмотрительно оставила один струп на теле князя не излеченным. Тогда князь вернулся и они поженились. Их жизнь была не простой. В преклонных летах они ушли в разные монастыри, но умерли в один день и в один час.\n' +
    '#205,\n' +
    '#### Стадионы\n' +
    '#301,\n' +
    '#### Парки\n' +
    '401,Парк имени Октябрьской Революции,47.229666, 39.745306,park_oktober_revolution_small,park_oktober_revolution_big::На территории располагается множество объектов, привлекающих посетителей:\\nКолесо обозрения «Одно небо» высотой 65 метров, считающееся одним из самых высоких в России;\\nЛедовый дворец Ледоград;\\n«Шум-Гам-Ленд», представляющий собой комплекс аттракционов;\\nЛучший в ЮФО парк аттракционов «Планета Чудес«.\\nУникальный птичник и пруд для водоплавающих птиц, вмещающий в себя: лебедей, павлинов, розовых фламинго, журавлей и белок;\\nВеревочный парк «Гранд Каньон» с детскими (высота 2м.) и взрослыми маршрутами (высота 6 м.);\\nБатутная зона отдыха Кенгуру;\\nЭкстремальные аттракционы.\\n\\nОсобенностью парка является аттракцион «Свадебная Карусель». Многие только что образовавшиеся семейные пары предпочитают проводить здесь фотосессию, делая уникальные снимки и получая удовольствия от прогулки на настоящей карете.Парк разделен на несколько функциональных зон. В парке установлены фонари освещения, дорожки выложены из брусчатки, высажены цветники и клумбы. Со стороны театра драмы расположен большой фонтан.\n' +
    '402,Парк культуры и отдыха Левобережный,47.212406, 39.731022,park_leviy_bereg_small,park_leviy_bereg_big::Современный парк отвечает практически всем потребностям посетителям. Здесь расположено очень много парковок, где можно оставить автомобиль во время прогулки. Также попасть к месту отдыха можно при помощи специальных лифтов, которые опускаются с Ворошиловского моста.\\n\\n\\nГости смогут воспользоваться:\\n\\n\\nПлощадкой со спортивными тренажерами;\\nДетским комплексом;\\nПунктом проката велосипедов.\n' +
    '403,Зоопарк Ростова на Дону,47.247438, 39.672715,park_zoo_small,park_zoo_big::Зоопарк считающийся одним из самых крупных в стране. На данный момент в нем содержится более 5 тысяч животных.\\nВ состав комплекса входят следующие подразделения:\\n\\n\\nТеррариум;\\nЭкзотариум;\\nАквариум;\\nЛемурник;\\nАнтропоидник;\\nНосорожник.\\n\\nЗоопарк условно поделен на несколько зон. В одной представлены птицы, в других – обезьяны, хищные животные, травоядные. Имеется водоем, где можно посмотреть водоплавающих птиц. А на сцене, которая также расположена в зоопарке проводятся различные мероприятия.\n' +
    '404,Парк им. М. Горького,47.222177, 39.710077,park_gorkiy_small,park_gorkiy_big::Местоположение парка Горького крайне удачно не только для жителей города, но и для туристов. Недалеко расположены главные транспортные узлы: центральный автовокзал, и оба железнодорожных – пригородный и главный. Он занимает огромную озелененную территорию – 11 Га.\\nОсобенно популярным место становится в летний период. Здесь находится красивейший комплекс фонтанов, «Луна-Парк», множество летних кафе, открытая эстрада и огромное количество скульптур. Зимой можно посетить планетарий.\n' +
    '405,Парк им. Николая Островского,47.245189, 39.758171,park_ostrovskiy_small,park_ostrovskiy_big::Парк Островского является самым большим парком Ростова на Дону, на его территории находится более 15 аллей, велосипедная дорожка, летняя сцена. Парк украшен огромным количеством цветников, клумб, альпийским горками. Повсюду зеленые стриженые газоны.\\nИз-за больших размеров и удобной инфраструктур парк часто используется для проведения различных мероприятий, в том числе марафонов и фестивалей различных учебных заведений города.\\nИмеются здесь и привычные развлечения: комплекс аттракционов: «Сафари», «Jump-3», «Лесная поляна», «Колесо обозрения», «Ромашка», «Автодром», «Вихрь», детские площадки и батуты, горки и песочницы, небольшие кафе.\\nВ парке работает пункт проката инвентаря для отдыха. Здесь можно взять велосипеды, ролики, самокаты, скейтборды, бибикары.';


/////////// Types
export const LINKS = [
    "museums", "theatres", "memorials", "stadiums", "parks"
];
export const ATTRACTION_TITLES = [
    "Museum", "Theatres", "Memorials", "Stadiums", "Parks"
];
const TYPES = [
    {
        title: ATTRACTION_TITLES[0],
        link: LINKS[0],
        image: "map_marker_museum.png",
        maskColor: "red-light"
    }, {
        title: ATTRACTION_TITLES[1],
        link: LINKS[1],
        image: "map_marker_theatre.png",
        maskColor: "yellow-light"
    }, {
        title: ATTRACTION_TITLES[2],
        link: LINKS[2],
        image: "map_marker_memorial.png",
        maskColor: "purple-light"
    }, {
        title: ATTRACTION_TITLES[3],
        link: LINKS[3],
        image: "map_marker_stadium.png",
        maskColor: "orange-light"
    }, {
        title: ATTRACTION_TITLES[4],
        link: LINKS[4],
        image: "map_marker_park.png",
        maskColor: "blue-light"
    },
];


export function getTypes() {
    return TYPES;
}

///////// Places

export const getPlaceById = (id) => {
    console.log(id);
    let attractionType = getAttractionType(id);
    return getPlaces(attractionType).filter(place => place.id === id)[0];
};

export const getAttractionType = (id) => {
    return LINKS[Math.floor(id / 100)]
};

var places = {};

export const getPlaces = (attractionType) => {
    if (places === true) return places[attractionType];

    LINKS.forEach(type => {
        places[type] = [];
    });

    AllPlacesData.split('\n')
        .filter(line => line[0] !== '#')
        .forEach(line => {
            let valuesAndDesc = line.split("::");
            let values = valuesAndDesc[0].split(",");

            let id = values[0];
            let name = values[1];
            let description = valuesAndDesc[1];
            let longitude = values[2];
            let latitude = values[3];
            let imageSmall = values[4];
            let imageBig = values[5];

            let attractionType = getAttractionType(id);
            places[attractionType].push(new Place(id, name, description, longitude, latitude, imageSmall, imageBig));

        });

    return places[attractionType];
}

