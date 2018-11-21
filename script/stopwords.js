const stopWordsArray = [
    'является', 'являются', 
    'служит для', 'служат для', 
    'имеется', 'имеются', 
    'обладает', 'обладают', 
    'считается', 'считаются', 
    'один из', 'одним из', 'одна из', 'одни из', 'одно из',
    'при помощи', 'с помощью', 'счет на оплату', 'счёт на оплату',
    'без сомнения', 'вне сомнения', 'без сомнений', 'безусловно', 'бесспорно', 'более того', 'в итоге', 
    'в конечном итоге', 'в конце концов', 'в общем', 'в принципе', 'в сущности', 'вдобавок', 'вернее', 
    'вероятно', 'видать', 'видимо', 'воистину', 
    'вообразите', 'впрочем', 'выходит', 'говорят', 'короче говоря', 'грубо говоря', 'грешным делом', 
    'далее', 'делать нечего', 'должно быть', 'допустим', 'другими словами', 'иными словами', 
    'думаю', 'если позволите', 'если честно', 'естественно', 'вы знаете', 'знаете ли', 'а значит', 
    'и вообще', 'и правда', 'иначе говоря', 'увы', 'для того чтобы', 'к сведению', 'к слову', 
    'к стыду', 'кажется', 'кажись', 'казалось бы', 'как бы то', 'как видите', 'как водится', 
    'как всегда', 'как оказалось', 'как выяснилось', 'как говорится', 'как известно', 'общеизвестно', 'как вы знаете', 
    'как назло', 'как ни странно', 'как ни жаль', 'как обычно', 'как обнаружилось', 'как правило', 'как принято', 
    'как мы уже', 'вы уже', 'как назло', 'как ни странно', 'как бы', 'как всегда', 'как оказывается', 
    'как правило', 'как принято', 'принято считать', 'конечно', 'кроме шуток', 'кстати', 'как нельзя кстати', 
    'мало того', 'между нами', 'между прочим', 'мол', 'дескать', 'якобы', 'мягко говоря', 
    'на минуточку', 'на секундочку', 'на мой взгляд', 'на наш взгляд', 'по-моему', 'по-нашему', 'по моему мнению', 
    'моей точки зрения', 'на самом деле', 'в самом деле', 'наверное', 'наверно', 'надо сказать', 'надо полагать', 
    'небось', 'вне всякого сомнения', 'без сомнения', 'без сомнений', 'несомненно', 'так называемый', 'так называемое', 
    'так называемая', 'так называемые', 'однако', 'одним словом', 'одним из', 'одной из', 'откровенно', 
    'очевидно', 'по идее', 'в принципе', 'по мне', 'по определению', 'по правде', 'по сути',
    'сказать по', 'правду говоря', 'по сути', 'поди', 'пожалуй', 'положим', 'помнится', 
    'помню', 'понятно', 'похоже', 'представь', 'признаюсь', 'прежде всего', 'признаемся', 
    'проще говоря', 'разумеется', 'естественно', 'странным образом', 'чушь собачья', 'слава богу', 
    'собственно', 'спрашивается', 'стало быть', 'строго говоря', 'судя по всему', 'по общему мнению', 'часом', 
    'честно говоря', 'как говорится', 'что называется', 'как ни говори', 'как ни скажи', 'что ни говори', 'что ни говорите', 
    'авторитетный', 'авторитетные', 'авторитетная', 'авторитетное', 
    'баснословный', 'баснословные', 'баснословная', 'баснословное',
    'бесчисленный', 'бесчисленные', 'бесчисленная', 'бесчисленное',
    'высококачественный', 'высококачественные', 'высококачественная', 'высококачественное',
    'гарантированный', 'гарантированные', 'гарантированная', 'гарантированное',
    'грандиозный', 'грандиозные', 'грандиозная', 'грандиозное',
    'как ни крути', 'куда ни плюнь', 'куда ни кинь', 
    'динамичный', 'динамичные', 'динамичная', 'динамичное', 'динамично',
    'знаковый', 'знаковые', 'знаковое', 'знаковая',
    'изумительный', 'изумительные', 'изумительная', 'изумительное',
    'эпичный', 'эпичные', 'эпичная', 'эпичное',
    'инновационный', 'инновационные', 'инновационная', 'инновационное',
    'немаловажно', 'немаловажный', 'немаловажное', 'немаловажная',
    'оптимально', 'перспективный', 'перспективная', 'перспективное',
    'элитный', 'элитные', 'элитная', 'элитное',
    'премиальный', 'премиальные', 'премиальная', 'премиальное',
    'респектабельный', 'респектабельные', 'респектабельная', 'респектабельное',
    'абсолютно', 'безоговорочно', 'бесспорно', 'весьма',
    'во всех отношениях', 'в любом отношении', 'вообще-то', 'не вполне',
    'а именно', 'истинно', 'подлинно', 'максимально',
    'минимально', 'наголову', 'напрочь', 'начисто',
    'вчистую', 'по-любому', 'невероятно', 'неизбежно',
    'несомненно', 'близнецы-братья', 'особо', 'предельно',
    'радикально', 'решительно', 'совершенно',
    'сугубо', 'сущий', 'сущая', 'сущее',
    'сущие', 'фактически', 'целиком',
    '99% случаев', 'без малого', 'в некоторых случаях', 'в районе',
    'в среднем', 'в целом', 'всех мастей', 'всяческий',
    'всяческие', 'всяческая', 'всяческое', 'зачастую', 'и т д', 'кто попало', 'куда попало', 
    'что попало', 'кто угодно', 'что угодно', 'любой', 'любые', 'любая', 'любое', 
    'нередко', 'ориентировочно', 'плюс-минус', 'повально', 'повальный', 'повальное', 'повальная', 
    'всеобщий', 'всеобщие', 'всеобщая', 'всеобщее', 'повсеместно', 'повсеместный', 'повсеместное', 
    'разного рода', 'всякого рода', 'разнообразный', 'разнообразные', 'разнообразная', 'разнообразное', 'разнообразно', 
    'совокупный', 'совокупно', 'сплошной', 'сплошные', 'сплошь', 'сплошное', 'сплошная', 
    'то и дело', 'нет-нет да и', 'энный', 'энное', 'энная', 'ареал обитания', 'ареала обитания', 
    'ареалу обитания', 'ареалом обитания', 'ареалу обитания', 'вырос в размерах', 'растёт в размерах', 'растет в размерах', 
    'вырастает в размерах', 
    'рос в размерах',
    'увеличился в размерах', 'увеличилась в размерах', 'увеличивается в размерах', 
    'увеличилось в размерах', 
    'увеличенный в размерах', 'вырос в объеме', 'вырос в объёме', 'растёт в объеме', 'растет в объеме', 
    'вырастает в объеме', 'рос в объеме',
    'увеличился в объеме', 'увеличилась в объеме', 'увеличивается в объеме', 
    'увеличилось в объеме', 
    'увеличенный в объеме', 'дело рук человеческих', 'собираться вместе', 'собираются вместе', 'собирались вместе', 'собрались вместе',
    'коллега по работе', 'коллеги по работе', 'коллегу по работе', 'коллеге по работе', 'коллегой по работе', 'коллег по работе',
    'коллегам по работе', 'коллегам по работе', 
    'коллегами по работе', 'полным-полно', 'счета на оплату', 'счетом на оплату', 'счёта на оплату', 'счётом на оплату', 'счетов на оплату', 
    'в курсе событий', 'неординарный', 'неординарные', 'неординарная', 'неординарное', 'неординарно', 'неординарным', 
    'неотъемлимая часть', 'неотъемлимой части', 'неотъемлимую часть', 'неотъемлимой частью', 'ритм города', 'ритму города', 'ритмом города', 
    'быстроразвивающийся', 'быстроразвивающиеся', 'быстроразвивающаяся', 'быстроразвивающееся', 'в ассортименте', 'в сфере', 'в части', 
    'динамично развивающийся', 'золотой стандарт', 'золотого стандарта', 'золотому стандарту', 'золотым стандартом', 'зарекомендовать себя',
    'зарекомендовал себя', 'зарекомендовала себя', 'зарекомендовало себя', 'зарекомендовали себя', 'зарекомендуете себя', 
    'лидер рынка', 'лидера рынка', 'лидеру рынка', 'лидером рынка', 'лидере рынка', 'лидирует на рынке', 'работает на рынке',
    'на любой вкус', 'надежный партнер', 'надёжный партнер', 
    'надежные партнеры', 'надёжные партнеры', 'передовая технология', 'передовые технологии', 'полный спектр', 'широкий спектр', 'весь спектр', 
    'спектр мнений', 'опровергает информацию', 'опроверг информацию', 'опровергает сообщение', 'опроверг сообщение', 'решения в области',
    'решение в области', 'решений в области', 'решению в области', 'решением в области', 'широкий ассортимент', 'альма матер',
    'апологет', 'апологеты', 'беспрецедентный', 'беспрецедентные', 'беспрецедентное', 'беспрецедентная', 'беспрецедентно',
    'беспрецедентным', 'беспрецедентной', 'беспрецедентного', 'беспрецедентному', 'рассмотрен вопрос', 'рассматривается', 'рассмотрены вопросы',
    'бытует мнение', 'витает', 'витают', 'в большинстве случаев', 'высокие технологии', 'высоких технологий', 'высоким технологиям',
    'высокими технологиями', 'в данный момент', 'на данный момент', 'в лучших традициях', 'в повседневной жизни', 'в ход идут',
    'в ход идёт', 'в ход пошёл', 'в ход пошел',
    'в строгом соответствии', 'вобрал в себя', 'вобрать в себя', 'вбирает в себя', 
    'делать всё возможное', 'делать все возможное', 'делал всё возможное', 'делал все возможное', 'воедино', 'вот парадокс',
    'вот-вот', 'всемирная паутина', 'всемирной паутине', 'всемирной паутины', 'всемирной паутиной', 'всемирную паутину',
    'нынешний', 'нынешние',	'нынешних', 'нынешнего', 'нынешным', 'нынешными', 'нынешнему', 'нынешнее', 'нынешняя', 
    'нынешнюю', 'образчик', 'образчики', 'образчика', 'образчике', 'образчику', 'образчиком', 
    'считаться', 'немало эмоций', 'высокого полёта', 'высокого полета', 'массу эмоций', 'масса эмоций', 'энное количество', 
    'в идеальном мире', 'выше всяких похвал', 'на просторах интернета', 'на просторах всемирной', 'достоин лучшего применения',
    'достойный лучшего применения', 'достойные лучшего применения',
    'за рубежом', 'из года в', 'от раза к', 'каждый из нас', 'каждого из нас', 'каждому из нас', 'каждым из нас', 
    'имеет место', 'комплекс мер', 'комплекса мер', 'самом деле нет', 'наглядно отражать', 'нагладно отражает', 'наглядно отражают', 
    'насчитывать', 'насчитывает', 'насчитывают', 'насчитывается', 'не секрет', 'что ни на', 'существенный вклад', 
    'без промедления', 'в возрасте', 'в нужное русло', 'в русле', 'в нужном русле', 'в общих чертах', 'в разы', 
    'волшебным образом', 'вопреки ожиданиям', 'вопреки всем ожиданиям', 'всего-навсего', 'волна недовольства', 'волну недовольства',
    'дорогого стоит', 'на каждом шагу', 'надо понимать', 'направо и налево', 'не доходят руки', 'не составит труда',
    'только представьте', 'обязан своим появлением', 
    'обязаны своим появлением', 'обязано своим появлением', 'обязана своим появлением', 'обязано своим появлением',
    'поступь', 'поступью', 'появиться на свет', 
    'появился на свет', 'появились на свет', 'появилась на свет', 'появилось на свет', 'появляется на свет',
    'в сухом остатке', 'чего нельзя сказать', 'в настоящее время', 'в наши дни', 'в век интернета', 'в последнее время',
    'в текущее время', 'в последние годы', 'в современной России', 
    'в современном мире', 'до недавнего времени', 'в данный период', 'в текущий период', 'в данном периоде', 'в текущем периоде',
    'на сегодняшний день',	'в текущий момент', 'на текущий момент', 'нынче', 'являться', 'явился', 'явилась', 'явилось', 
    'явится', 'явиться', 'имелся', 'имелась', 'имелось', 'намереваться', 'намереваются', 
    'обладал', 'позволяющий', 'позволяющие', 'позволяющее', 'позволяющая', 'существующий', 
    'существующие', 'существующая', 'существующее', 'служить для', 'считаться', 'нажимаешь кнопку', 'жми', 'жмем', 'жмём',			
    'жмите', 'жмете', 'жмёте', 'случае если в', 'ярко выраженный', 'ярко выраженные', 'ярко выраженное', 'нежели', 'ситуацию что', 'ситуация что', 'тыц', 'клац',
    'ткни', 'жмякай', 'ткните', 'тыкай', 'тыкните', 'нельзя не упомянуть', 'ничтоже сумняшеся', 'не занимать', 'на вес золота', 'осталось незамеченным', 'простыми словами',
    'честно сказать', 'хорошая практика', 'несколько коллег', 'несколько ваших коллег', ' и т п', 'и пр', 'и прочая', 
    'и прочее', 'скачать к себе', 'иногда встречается', 'неожиданный сюрприз', 'внезапный сюрприз', 'неожиданные сюрпризы', 'внезапные сюрпризы',
    'тот или иной', 'та или иная', 'те или иные', 'то или иное', 'тех или иных', 'ту или иную', 'того или иного', 'той или иной', 'тем или иным', 'тому или иному',
    ];