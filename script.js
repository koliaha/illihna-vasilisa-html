const sections = [
  {
    id: 1,
    title: "Определение требований",

    tasks: [
      {
        id: 10,
        description:
          "Прописан перечень определенных требований по безопасности, предъявляемых к программному обеспечению",
        level: 1,
        completed: false,
        info: `Требования по безопасности предъявляются в соответствии с классом программного обеспечения и требованиями регуляторов: <br/> 
        <ul>
  			<li><a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/metodicheskij-dokument-ot-3-fevralya-2012-g '>Система обнаружения вторжений</a></li>
  			<li><a target='_blank' href='https://disk.yandex.ru/client/disk/Оценка%20уровня%20безопасности%20программного%20обеспечения/Нормативные%20правовые%20акты/Средство%20антивирусной%20защиты '>Средство антивирусной защиты</a></li>
            <li><a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/metodicheskij-dokument-ot-30-dekabrya-2013-g  '>Средство доверенной загрузки</a></li>
  			<li><a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/metodicheskij-dokument-ot-1-dekabrya-2014-g '>Средство контроля съемных машинных носителей информации</a></li>
            <li><a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/metodicheskij-dokument-ot-12-sentyabrya-2016-g '>Межсетевой экран</a></li>
            <li><a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/metodicheskij-dokument-ot-8-fevralya-2017-g '>Операционная система типа А</a></li>
  			<li><a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/metodicheskij-dokument-ot-11-maya-2017-g '>Операционная система типа Б и В</a></li>
            <li><a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/trebovaniya-po-bezopasnosti-informatsii-utverzhdeny-prikazom-fstek-rossii-ot-30-iyulya-2018-g-n-132 '>Средство защиты информации от воздействий, направленных на отказ в обслуживании информационных (автоматизированных) систем</a></li>
            <li><a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/trebovaniya-po-bezopasnosti-informatsii-utverzhdeny-prikazom-fstek-rossii-ot-4-iyulya-2022-g-n-118 '>Средство контейнеризации</a></li>
            <li><a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/trebovaniya-po-bezopasnosti-informatsii-utverzhdeny-prikazom-fstek-rossii-ot-7-marta-2023-g-n-44 '>Многофункциональный межсетевой экран уровня сети</a></li>
            <li><a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/trebovaniya-po-bezopasnosti-informatsii-utverzhdeny-prikazom-fstek-rossii-ot-27-oktyabrya-2022-g-n-187 '>Средство виртуализации</a></li>
            <li>Прикладное программное обеспечение – <a target='_blank' href='https://docs.cntd.ru/document/1200172576 '>ГОСТ Р 58833-2020 Защита информации. Идентификация и аутентификация. Общие положения</a> и <a target='_blank' href='https://docs.cntd.ru/document/1200182791 '>ГОСТ Р 59548-2022 Защита информации. Регистрация событий безопасности. Требования к регистрируемой информации - docs.cntd.ru</a></li>                    
		</ul>         
        `,
      },
      {
        id: 11,
        description: "Перечни прописаны в ТЗ",
        level: 1,
        completed: false,
        info: `Техническое задание разрабатывается в соответствии с <a target='_blank' href='https://disk.yandex.ru/i/VtrBGyPDW3N1xw'>ГОСТ 19.201-78 Единая система программной документации (ЕСПД). Техническое задание. Требования к содержанию и оформлению</a><br/> В техническом задании указываются требования по безопасности в соответствии с определенным классом программного обеспечения`,
      },
      {
        id: 12,
        description:
          "В качестве источника формирования требований взяты: требования законов, нормативных правовых актов, отраслевых стандартов, перечень требований пользователя, сценарии применения программного обеспечения",
        level: 1,
        completed: false,
        info: `В качестве источников формирования требований необходимо придерживаться существующего законодательства:
        <ul>
  			<li><a target='_blank' href='https://docs.cntd.ru/document/1200135525 '>ГОСТ Р 56939-2016 Защита информации. Разработка безопасного программного обеспечения. Общие требования </a></li>
  			<li><a target='_blank' href='https://fstec.ru/protivodejstvie-korruptsii/metodicheskie-materialy/metodicheskij-dokument'>Методические рекомендации ФСТЭК России </a></li>
            <li><a target='_blank' href='https://docs.cntd.ru/document/1200135525 '>Методические рекомендации Минцифры России </a></li>
		</ul>`,
      },
      {
        id: 13,
        description:
          "Соблюдена однозначность трактования требований, определяющих свойства безопасности программного обеспечения",
        level: 2,
        completed: false,
        info: `Данную меру необходимо выполнять в соответствии со стандартом <a target='_blank' href='https://standards.ieee.org/ieee/830/1222/ '>ЕЕЕ-830-1998 Recommended Practice for Software Requirements Specifications</a><br/> Переведенный стандарт <a target='_blank' href='https://github.com/maxvipon/IEEE-Std-830-1998-RU/blob/master/IEEE%20STD%20830-1998%20(RU).md'>Рекомендации IEEE по разработке требований к программному обеспечению</a>`,
      },
      {
        id: 14,
        description:
          "Соблюдена взаимная непротиворечивость набора требований, определяющих свойства безопасности программного обеспечения",
        level: 2,
        completed: false,
        info: `Данную меру необходимо выполнять в соответствии со стандартом <a target='_blank' href='https://standards.ieee.org/ieee/830/1222/ '>ЕЕЕ-830-1998 Recommended Practice for Software Requirements Specifications</a><br/> Переведенный стандарт <a target='_blank' href='https://github.com/maxvipon/IEEE-Std-830-1998-RU/blob/master/IEEE%20STD%20830-1998%20(RU).md  '>Рекомендации IEEE по разработке требований к программному обеспечению</a>`,
      },
      {
        id: 15,
        description:
          "Соблюдена адекватность требований, определяющих свойства безопасности программного обеспечения",
        level: 2,
        completed: false,
        info: `Данную меру необходимо выполнять в соответствии со стандартом <a target='_blank' href='https://standards.ieee.org/ieee/830/1222/ '>ЕЕЕ-830-1998 Recommended Practice for Software Requirements Specifications</a><br/> Переведенный стандарт <a target='_blank' href='https://github.com/maxvipon/IEEE-Std-830-1998-RU/blob/master/IEEE%20STD%20830-1998%20(RU).md'>Рекомендации IEEE по разработке требований к программному обеспечению</a>`,
      },
      {
        id: 16,
        description:
          "Соблюдена полнота требований, определяющих свойства безопасности программного обеспечения",
        level: 2,
        completed: false,
        info: `Данную меру необходимо выполнять в соответствии со стандартом <a target='_blank' href='https://standards.ieee.org/ieee/830/1222/ '>ЕЕЕ-830-1998 Recommended Practice for Software Requirements Specifications</a><br/> Переведенный стандарт <a target='_blank' href='https://github.com/maxvipon/IEEE-Std-830-1998-RU/blob/master/IEEE%20STD%20830-1998%20(RU).md'>Рекомендации IEEE по разработке требований к программному обеспечению </a>`,
      },
    ],
  },
  {
    id: 2,
    title:
      "<a target='_blank' href='https://docs.cntd.ru/document/1200164529 '>Проектирование архитектуры программного обеспечения</a>",

    tasks: [
      {
        id: 20,
        description:
          "Подготовлен проект архитектуры программного обеспечения с уровнем детализации, достаточным для понимания структуры программного обеспечения другими участниками разработки программного обеспечения",
        level: 3,
        completed: false,
        info: `Проект архитектуры программы должен быть представлен в описании программы в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200007652 '>ГОСТ 19.402-78 Единая система программной документации (ЕСПД). Описание программы </a> и пояснительной записке в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200007671  '>ГОСТ 19.404-79 Единая система программной документации (ЕСПД). Пояснительная записка. Требования к содержанию и оформлению</a>`,
      },
      {
        id: 21,
        description: "Разработана модель угроз программного обеспечения",
        level: 1,
        completed: false,
        info: `Для разработки модели угроз необходимо использовать следующие источники:   
        <ul>
  			<li><a target='_blank' href='https://docs.cntd.ru/document/1200164529 '>ГОСТ Р 58412-2019 Защита информации. Разработка безопасного программного обеспечения. Угрозы безопасности информации при разработке программного обеспечения</a></li>
  			<li><a target='_blank' href='https://www.microsoft.com/en-us/securityengineering/sdl/threatmodeling '>STRIDE и Threat Modeling Tool</a> от Microsoft </li>
            <li>Инструмент <a target='_blank' href=' https://github.com/rung/threat-matrix-cicd'>Матрица угроз ATT&CK для CI/CD </a></li>
            <li><a target='_blank' href='https://github.com/secmerc/materialize-threats'>Materialize Threats Tools </a></li>
            <li><a target='_blank' href='https://github.com/threatspec/threatspec'>threatspec </a></li>
            <li><a target='_blank' href='https://github.com/devsecops/raindance'>The Raindance Project </a></li>
            <li><a target='_blank' href='https://github.com/izar/pytm'>PyTM </a></li>
            <li><a target='_blank' href='https://mal-lang.org/ '>Meta Attack Language </a></li>
            <li><a target='_blank' href='https://github.com/Threagile/threagile'>Agile Threat Modeling Toolkit </a></li>
		</ul>`,
      },
      {
        id: 22,
        description:
          "По результатам моделирования угроз и анализа поверхности атаки приоритизированы и устранены потенциальные уязвимости (угрозы безопасности) с учетом их критичности",
        level: 1,
        completed: false,
        info: `Критичность угроз определяется в соответствии с <a target='_blank' href='https://bdu.fstec.ru/threat '>Банком данных угроз безопасности информации ФСТЭК России </a>`,
      },
      {
        id: 23,
        description:
          "Разработан и применен в разработке программного обеспечения регламент устранения потенциальных уязвимостей",
        level: 1,
        completed: false,
        info: `Регламент разрабатывается в соответствии с <a target='_blank' href='  https://docs.cntd.ru/document/1200124394'>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества. Требования</a>`,
      },
      {
        id: 24,
        description: "Выполнено описание поверхности атаки",
        level: 1,
        completed: false,
        info: `Необходимо для определения всех возможных точек входа, через которые злоумышленники могут попытаться проникнуть в систему <br/> Поверхность атаки выявляется с помощью инструмента для определения поверхности атаки <a target='_blank' href='  https://www.ispras.ru/technologies/natch/ '>Natch</a> от ИСП РАН <br/>
        Описание поверхности атаки составляется в соответствии с рекомендациями документа <a target='_blank' href='  https://fstec.ru/dokumenty/vse-dokumenty/informatsionnye-i-analiticheskie-materialy/informatsionnoe-soobshchenie-fstek-rossii-ot-10-fevralya-2021-g-n-240-24-647'>Методика выявления уязвимостей и недекларированных возможностей в программном обеспечении (ФСТЭК России, 2020)</a>`,
      },
    ],
  },
  {
    id: 3,
    title: "Разработка продукта",
    tasks: [
      {
        id: 311,
        title: "Обучение сотрудников:",
      },
      {
        id: 30,
        description:
          "Разработан план обучения с перечислением участников команды разработки",
        level: 2,
        completed: false,
        info: `План обучения разрабатывается в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200062244'>ГОСТ Р ИСО 10015-2007 Менеджмент организации. Руководящие указания по обучению</a>`,
      },
      {
        id: 31,
        description: "Установлена периодичность обучения",
        level: 2,
        completed: false,
        info: `Периодичность проведения обучения разрабатывается в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200062244'>ГОСТ Р ИСО 10015-2007 Менеджмент организации. Руководящие указания по обучению</a>`,
      },
      {
        id: 32,
        description: "Определены критерии успешности прохождения обучения",
        level: 3,
        completed: false,
        info: `Критерии успешности прохождения обучения разрабатывается в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200062244'>ГОСТ Р ИСО 10015-2007 Менеджмент организации. Руководящие указания по обучению</a>`,
      },
      {
        id: 33,
        description:
          "Определены навыки, требующиеся для каждого участника разработки",
        level: 2,
        completed: false,
        info: `Навыки, требуемые для каждого участника разработки, определяются в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200118020'>ГОСТ Р ИСО 21500-2014 Руководство по проектному менеджменту</a>`,
      },
      {
        id: 34,
        description:
          "Проводится обучение всех участников команды разработки, задействованных в разработке кода программного обеспечения",
        level: 3,
        completed: false,
        info: `Обучения всех частников команды проходит в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200062244'>ГОСТ Р ИСО 10015-2007 Менеджмент организации. Руководящие указания по обучению</a>`,
      },
      {
        id: 35,
        description:
          "Сформировывается отчет об обучении с указанием участников и пройденных программ (курсов) по итогам обучения",
        level: 3,
        completed: false,
        info: `Отчет об обучении разрабатывается в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200118020'>ГОСТ Р ИСО 21500-2014 Руководство по проектному менеджменту</a>`,
      },
      {
        id: 36,
        description:
          "Проводится повторное обучение сотрудников в случае получения ими неудовлетворительной оценки по результатам обучения",
        level: 3,
        completed: false,
        info: `Повторное обучение способствует повышению квалификации сотрудников, что в конечном итоге улучшает качество разработки и поддержки программного обеспечения`,
      },
      {
        id: 37,
        description:
          "Сотрудники отстраняются от возможности изменения кода программного обеспечения в случае получения ими неудовлетворительной оценки по результатам обучения",
        level: 3,
        completed: false,
        info: `Отстранение сотрудников от возможности изменения кода программного обеспечения в случае получения ими неудовлетворительной оценки по результатам обучения важно для предотвращения внесения потенциально опасных изменений в систему. Это помогает поддерживать безопасность и надежности программного обеспечения, гарантируя, что только компетентные и квалифицированные сотрудники имеют доступ к изменению кода`,
      },
      {
        id: 38,
        description:
          "Проводится обучение всех участников команды разработки, задействованных в разработке кода программного обеспечения",
        level: 2,
        completed: false,
        info: `План обучения разрабатывается в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200062244'>ГОСТ Р ИСО 10015-2007 Менеджмент организации. Руководящие указания по обучению</a>`,
      },
      {
        id: 39,
        description: "Проводится оценка эффективности программы обучения",
        level: 2,
        completed: false,
        info: `Оценка эффективности программы обучения разрабатывается в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200118020'>ГОСТ Р ИСО 21500-2014 Руководство по проектному менеджменту</a>`,
      },
      {
        id: 310,
        description:
          "Проводится анализ существующих программ обучения с учетом потребностей сотрудников",
        level: 2,
        completed: false,
        info: `Анализ существующих программ обучения проводится в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200118020'>ГОСТ Р ИСО 21500-2014 Руководство по проектному менеджменту</a>`,
      },
      {
        id: 311,
        description:
          "По результатам проведенного анализа выполняется планирование и организовывается обучение сотрудников",
        level: 2,
        completed: false,
        info: `Планирование и организация обучения сотрудников выполняется в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200062244'>ГОСТ Р ИСО 10015-2007 Менеджмент организации. Руководящие указания по обучению</a>`,
      },
      {
        id: 312,
        description:
          "Проводится выборочная проверка качества обучения сотрудников",
        level: 3,
        completed: false,
        info: `Проверка качества обучения проводится в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200062244'>ГОСТ Р ИСО 10015-2007 Менеджмент организации. Руководящие указания по обучению</a>`,
      },
      {
        id: 313,
        description:
          "Определяются критерии пересмотра программ обучения (курсов, тренингов и т.п.)",
        level: 3,
        completed: false,
        info: `Критерии пересмотра программ обучения определяются в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200118020'>ГОСТ Р ИСО 21500-2014 Руководство по проектному менеджменту</a>`,
      },
      {
        id: 314,
        description:
          "Осуществляется контроль качества программ обучения (курсов, тренингов и т.п.) независимым аудитором",
        level: 3,
        completed: false,
        info: `Контроль качества программ обучения осуществляется в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200062244'>ГОСТ Р ИСО 10015-2007 Менеджмент организации. Руководящие указания по обучению</a>`,
      },
      {
        id: 3121,
        title:
          "Статический анализ и экспертиза исходного кода программного обеспечения:",
      },
      {
        id: 315,
        description:
          "Разработаны и утверждены регламентирующие документы по проведению статического анализа и экспертизы исходного кода программного обеспечения",
        level: 1,
        completed: false,
        info: `Регламентирующие документы разрабатываются в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200124394'>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества. Требования (Переиздание)</a>`,
      },
      {
        id: 316,
        description:
          "Определены инструменты статического анализа и экспертизы исходного кода для каждого используемого в программном обеспечении языка программирования",
        level: 1,
        completed: false,
        info: `Инструменты статического анализа должны подбираться в соответствии с:
        <ul>
  			<li><a target='_blank' href='https://docs.cntd.ru/document/1304734159'>ГОСТ Р 71207-2024 Защита информации. Разработка безопасного программного обеспечения. Статический анализ программного обеспечения. Общие требования </a></li>
  			<li>Рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/informatsionnye-i-analiticheskie-materialy/informatsionnoe-soobshchenie-fstek-rossii-ot-10-fevralya-2021-g-n-240-24-647'>Методика выявления уязвимостей и недекларированных возможностей в программном обеспечении (ФСТЭК России, 2020) </a></li>
         </ul></br>
         Инструменты для проведения статического анализа следует подбирать из состава отечественных программ для статического анализа: 
        <ul>
  			<li>Статический анализатор <a target='_blank' href='https://www.ispras.ru/technologies/svace/'>Svace</a> от ИСП РАН</li>
  			<li>Статический анализатор безопасности приложений <a target='_blank' href='https://rt-solar.ru/products/solar_appscreener/'>Solar appScreener</a> от ГК “Солар”</li>`,
      },
      {
        id: 317,
        description:
          "Регистрируются все срабатывания по результатам работы инструментов статического анализа и экспертизы исходного кода программного обеспечения",
        level: 1,
        completed: false,
        info: `Критерии срабатывания подбираются в соответствии с: 
        <ul>
  			<li><a target='_blank' href='https://docs.cntd.ru/document/1304734159'>ГОСТ Р 71207-2024 Защита информации. Разработка безопасного программного обеспечения. Статический анализ программного обеспечения. Общие требования</a></li>
  			<li>Рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/informatsionnye-i-analiticheskie-materialy/informatsionnoe-soobshchenie-fstek-rossii-ot-10-fevralya-2021-g-n-240-24-647'>Методика выявления уязвимостей и недекларированных возможностей в программном обеспечении (ФСТЭК России, 2020)</a></li>
         </ul>`,
      },
      {
        id: 318,
        description:
          "Обрабатываются срабатывания статического анализатора в соответствии с правилами обработки ошибок, установленными в регламентирующих документах организации, с учетом типов и уровней критичности ошибок и особенностей инструментов статического анализа и экспертизы исходного кода программного обеспечения",
        level: 1,
        completed: false,
        info: `Регламентирующие документы разрабатываются в соответствии с <a target='_blank' href='  https://docs.cntd.ru/document/1200124394 '>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества. Требования</a></br>
        <ul>
  			<li><a target='_blank' href='https://docs.cntd.ru/document/1304734159'>ГОСТ Р 71207-2024 Защита информации. Разработка безопасного программного обеспечения. Статический анализ программного обеспечения. Общие требования</a></li>
  			<li>Рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/informatsionnye-i-analiticheskie-materialy/informatsionnoe-soobshchenie-fstek-rossii-ot-10-fevralya-2021-g-n-240-24-647'>Методика выявления уязвимостей и недекларированных возможностей в программном обеспечении (ФСТЭК России, 2020)</a></li>
         </ul>`,
      },
      {
        id: 319,
        description:
          "Определены параметры настройки инструментов статического анализа и экспертизы исходного кода программного обеспечения с учетом с рекомендаций подразделения обеспечения безопасности программного обеспечения",
        level: 2,
        completed: false,
        info: `Параметры и настройка инструментов статического анализа определяется, опираясь на: 
        <ul>
  			<li><a target='_blank' href='https://docs.cntd.ru/document/1304734159'>ГОСТ Р 71207-2024 Защита информации. Разработка безопасного программного обеспечения. Статический анализ программного обеспечения. Общие требования</a></li>
  			<li>Рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/informatsionnye-i-analiticheskie-materialy/informatsionnoe-soobshchenie-fstek-rossii-ot-10-fevralya-2021-g-n-240-24-647'>Методика выявления уязвимостей и недекларированных возможностей в программном обеспечении (ФСТЭК России, 2020)</a></li>
         </ul>`,
      },
      {
        id: 320,
        description:
          "Осуществляется пересмотр параметров настройки инструментов статического анализа и экспертизы исходного кода программного обеспечения с установленной периодичностью и при выполнении установленных событий (изменениях в правилах сборки, применяемых статических анализаторах, получении информации о потенциальных уязвимостях и т.п.)",
        level: 1,
        completed: false,
        info: `Пересмотр параметров настройки инструментов статического анализа и экспертизы исходного кода программного обеспечения производится в соответствии с рекомендациями разработчиков статического анализа и рекомендациями документа <a target='_blank' href='  https://fstec.ru/dokumenty/vse-dokumenty/informatsionnye-i-analiticheskie-materialy/informatsionnoe-soobshchenie-fstek-rossii-ot-10-fevralya-2021-g-n-240-24-647'>Методика выявления уязвимостей и недекларированных возможностей в программном обеспечении (ФСТЭК России, 2020) </a>`,
      },
      {
        id: 321,
        description:
          "Проводится регулярный статический анализ и экспертиза исходного кода программного обеспечения в рамках жизненного цикла программного обеспечения",
        level: 2,
        completed: false,
        info: `Регулярность проведения статического анализа устанавливается соответствии с рекомендациями разработчиков статического анализа и рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/informatsionnye-i-analiticheskie-materialy/informatsionnoe-soobshchenie-fstek-rossii-ot-10-fevralya-2021-g-n-240-24-647'>Методика выявления уязвимостей и недекларированных возможностей в программном обеспечении (ФСТЭК России, 2020) </a>`,
      },
      {
        id: 322,
        description:
          "Осуществляется контроль устранения выявленных потенциальных ошибок",
        level: 1,
        completed: false,
        info: `Контроль устранения выявленных потенциальных ошибок осуществляется <a target='_blank' href='https://docs.cntd.ru/document/1304734159'>ГОСТ Р 71207-2024 Защита информации. Разработка безопасного программного обеспечения. Статический анализ программного обеспечения. Общие требования </a>`,
      },
      {
        id: 323,
        description:
          "Выполняется статический анализ и экспертиза всего исходного кода программного обеспечения",
        level: 1,
        completed: false,
        info: `Статический анализ и экспертиза всего исходного кода проводится в соответствии с: 
        <ul>
  			<li><a target='_blank' href='https://docs.cntd.ru/document/1304734159'>ГОСТ Р 71207-2024 Защита информации. Разработка безопасного программного обеспечения. Статический анализ программного обеспечения. Общие требования </a></li>
  			<li>рекомендациями документа<a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/informatsionnye-i-analiticheskie-materialy/informatsionnoe-soobshchenie-fstek-rossii-ot-10-fevralya-2021-g-n-240-24-647'>Методика выявления уязвимостей и недекларированных возможностей в программном обеспечении (ФСТЭК России, 2020)</a></li>
         </ul>`,
      },
      {
        id: 324,
        description:
          "Проводится статический анализ и экспертизу исходного кода программного обеспечения всех заимствованных компонентов",
        level: 1,
        completed: false,
        info: `Статический анализ и экспертиза исходного кода программного обеспечения всех заимствованных компонентов проводится в соответствии с: 
        <ul>
  			<li><a target='_blank' href='https://docs.cntd.ru/document/1304734159'>ГОСТ Р 71207-2024 Защита информации. Разработка безопасного программного обеспечения. Статический анализ программного обеспечения. Общие требования</a></li>
  			<li>рекомендациями документа<a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/informatsionnye-i-analiticheskie-materialy/informatsionnoe-soobshchenie-fstek-rossii-ot-10-fevralya-2021-g-n-240-24-647'>Методика выявления уязвимостей и недекларированных возможностей в программном обеспечении (ФСТЭК России, 2020)</a></li>
         </ul>`,
      },
      {
        id: 325,
        description:
          "Проводится статический анализ и экспертиза исходного кода программного обеспечения неизменяемого исходного кода при выполнении установленных событий (изменениях в правилах сборки, применяемых статических анализаторах, получении информации о потенциальных уязвимостях и т.п.)",
        level: 1,
        completed: false,
        info: `Статический анализ и экспертиза исходного кода программного обеспечения неизменяемого исходного кода при выполнении установленных событий проводится на основании: 
        <ul>
  			<li><a target='_blank' href='https://docs.cntd.ru/document/1304734159'>ГОСТ Р 71207-2024 Защита информации. Разработка безопасного программного обеспечения. Статический анализ программного обеспечения. Общие требования</a></li>
  			<li>рекомендациями документа<a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/informatsionnye-i-analiticheskie-materialy/informatsionnoe-soobshchenie-fstek-rossii-ot-10-fevralya-2021-g-n-240-24-647'>Методика выявления уязвимостей и недекларированных возможностей в программном обеспечении (ФСТЭК России, 2020)</a></li>
         </ul>`,
      },
    ],
  },
  {
    id: 4,
    title: "Тестирование",

    tasks: [
      {
        id: 40,
        description:
          "Разработан план тестирования, содержащий описание сценариев тестирования для каждой функциональной возможности программного обеспечения, включающее: формулировку функциональных требований, выполняемые действия по оценке, ожидаемые результаты тестирования и критерии успешного прохождения проверок",
        level: 1,
        completed: false,
        info: `План тестирования, включая план тестирования функций безопасности, разрабатывается в соответствии с рекомендациями: 
        <ul>
  			<li><a target='_blank' href='https://docs.cntd.ru/document/1200135525'>ГОСТ Р 56939-2016 Защита информации. Разработка безопасного программного обеспечения. Общие требования</a></li>
  			<li>Рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/trebovaniya-po-bezopasnosti-informatsii-utverzhdeny-prikazom-fstek-rossii-ot-2-iyunya-2020-g-n-76'>Требования по безопасности информации, устанавливающие уровни доверия к средствам технической защиты информации и средствам обеспечения безопасности информационных технологий” (ФСТЭК России, 2018)</a></li>
            <li>Рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/informatsionnye-i-analiticheskie-materialy/informatsionnoe-soobshchenie-fstek-rossii-ot-10-fevralya-2021-g-n-240-24-647'>Методика выявления уязвимостей и недекларированных возможностей в программном обеспечении (ФСТЭК России, 2020) </a></li>
         </ul>`,
      },
      {
        id: 41,
        description:
          "Выполняются различные виды тестирования, позволяющие протестировать программное обеспечение на уровне модулей, компонентов, подсистем, всего программного обеспечения в целом",
        level: 2,
        completed: false,
        info: `Различные виды тестирования, позволяющие протестировать программное обеспечение определяются в соответствии с рекомендациями:
        <ul>
  			<li><a target='_blank' href='https://docs.cntd.ru/document/1200135525'>ГОСТ Р 56939-2016 Защита информации. Разработка безопасного программного обеспечения. Общие требования</a></li>
  			<li>Рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/trebovaniya-po-bezopasnosti-informatsii-utverzhdeny-prikazom-fstek-rossii-ot-2-iyunya-2020-g-n-76'>Требования по безопасности информации, устанавливающие уровни доверия к средствам технической защиты информации и средствам обеспечения безопасности информационных технологий” (ФСТЭК России, 2018)</a></li>
            <li>Рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/informatsionnye-i-analiticheskie-materialy/informatsionnoe-soobshchenie-fstek-rossii-ot-10-fevralya-2021-g-n-240-24-647'>Методика выявления уязвимостей и недекларированных возможностей в программном обеспечении (ФСТЭК России, 2020) </a></li>
         </ul>`,
      },
      {
        id: 42,
        description:
          "При выполнении каждого сценария тестирования фиксируются версии программного обеспечения, номера сборок программного обеспечения и системные требования к тестируемому программному обеспечению",
        level: 2,
        completed: false,
        info: `Управление конфигурацией при выполнении каждого сценария тестирования выполняется в соответствии с рекомендациями:
        <ul>
  			<li><a target='_blank' href='https://docs.cntd.ru/document/1200135525'>ГОСТ Р 56939-2016 Защита информации. Разработка безопасного программного обеспечения. Общие требования</a></li>
  			<li>Рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normативnye-dokumenty/trebovaniya-po-bezopasnosti-informatsii-utverzhdeny-prikazom-fstek-rossii-ot-2-iyunya-2020-g-n-76'>Требования по безопасности информации, устанавливающие уровни доверия к средствам технической защиты информации и средствам обеспечения безопасности информационных технологий” (ФСТЭК России, 2018)</a></li>
            <li>Рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/informatsionnye-i-analiticheskie-materialy/informatsionnoe-soobshchenie-fstek-rossii-ot-10-fevralya-2021-g-n-240-24-647'>Методика выявления уязвимостей и недекларированных возможностей в программном обеспечении (ФСТЭК России, 2020) </a></li>
         </ul>`,
      },
      {
        id: 43,
        description:
          "Регистрируется и организовывается процесс исправления ошибок, выявленных в ходе тестирования",
        level: 1,
        completed: false,
        info: `Процесс исправления ошибок фиксируется в инструкциях в соответствии рекомендациями: 
        <ul>
  			<li><a target='_blank' href='https://docs.cntd.ru/document/1200124394'>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества. Требования</a></li>
  			<li><a target='_blank' href='https://docs.cntd.ru/document/1200135525'>ГОСТ Р 56939-2016 Защита информации. Разработка безопасного программного обеспечения. Общие требования</a></li>
            <li>Рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/informatsionnye-i-analiticheskie-materialy/informatsionnoe-soobshchenie-fstek-rossii-ot-10-fevralya-2021-g-n-240-24-647'>Методика выявления уязвимостей и недекларированных возможностей в программном обеспечении (ФСТЭК России, 2020) </a></li>
         </ul>`,
      },
      {
        id: 44,
        description:
          "Регистрируется ход проведения тестирования, при этом регистрируемая информация должна включать, как минимум, дату и время выполнения следующих видов операций: запуск и завершение сценария тестирования, результат выполнения сценария тестирования, изменение конфигурации тестируемого программного обеспечения, возникновение любых сбоев и ошибок",
        level: 3,
        completed: false,
        info: `Ход проведения тестирования фиксируется в документации на основании:  
        <ul>
  			<li><a target='_blank' href='https://docs.cntd.ru/document/1200124394'>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества. Требования</a></li>
  			<li><a target='_blank' href='https://docs.cntd.ru/document/1200135525'>ГОСТ Р 56939-2016 Защита информации. Разработка безопасного программного обеспечения. Общие требования</a></li>
            <li>Рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/informatsionnye-i-analiticheskie-materialy/informatsionnoe-soobshchenie-fstek-rossii-ot-10-fevralya-2021-g-n-240-24-647'>Методика выявления уязвимостей и недекларированных возможностей в программном обеспечении (ФСТЭК России, 2020) </a></li>
         </ul>`,
      },
      {
        id: 45,
        description:
          "Устанавливаются критерии завершения и остановки тестирования",
        level: 2,
        completed: false,
        info: `Критерии завершения тестирования определяются в соответствии с рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/informatsionnye-i-analiticheskie-materialy/informatsionnoe-soobshchenie-fstek-rossii-ot-10-fevralya-2021-g-n-240-24-647'>Методика выявления уязвимостей и недекларированных возможностей в программном обеспечении (ФСТЭК России, 2020)  </a>`,
      },
      {
        id: 46,
        description:
          "Разрабатываются отчеты о проведенном тестировании, содержащие, как минимум, описание полученных результатов, перечень обнаруженных и решенных ошибок, вывод по результатам тестирования",
        level: 1,
        completed: false,
        info: `Отчеты разрабатываются в соответствии с:   
        <ul>
  			<li><a target='_blank' href='https://docs.cntd.ru/document/1200124394'>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества. Требования</a></li>
            <li>Рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/informatsionnye-i-analiticheskie-materialy/informatsionnoe-soobshchenie-fstek-rossii-ot-10-fevralya-2021-g-n-240-24-647'>Методика выявления уязвимостей и недекларированных возможностей в программном обеспечении (ФСТЭК России, 2020) </a></li>
         </ul>`,
      },
      {
        id: 47,
        description:
          "Осуществляется сбор информации об исследуемом программном обеспечении",
        level: 2,
        completed: false,
        info: `Сбор информации осуществляется в соответствии с рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/informatsionnye-i-analiticheskie-materialy/informatsionnoe-soobshchenie-fstek-rossii-ot-10-fevralya-2021-g-n-240-24-647'>Методика выявления уязвимостей и недекларированных возможностей в программном обеспечении (ФСТЭК России, 2020)  </a>`,
      },
      {
        id: 48,
        description: "Выполняется анализ утечек чувствительных данных",
        level: 1,
        completed: false,
        info: `Анализ утечки чувствительных данных выполняется в соответствии с рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/informatsionnye-i-analiticheskie-materialy/informatsionnoe-soobshchenie-fstek-rossii-ot-10-fevralya-2021-g-n-240-24-647'>Методика выявления уязвимостей и недекларированных возможностей в программном обеспечении (ФСТЭК России, 2020)  </a>`,
      },
    ],
  },
  {
    id: 5,
    title: "Внедрение и сопровождение",
    tasks: [
      {
        id: 511,
        title: "Поставка программного обеспечения:",
      },
      {
        id: 50,
        description:
          "Программное обеспечение поставляется вместе с эксплуатационной документацией",
        level: 1,
        completed: false,
        info: `Отчеты разрабатываются в соответствии с:   
        <ul>
  			<li><a target='_blank' href='https://docs.cntd.ru/document/1200007627'>ГОСТ 19.101-77 Единая система программной документации. Виды программ и программных документов</a></li>            
  			<li>Рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/trebovaniya-po-bezopasnosti-informatsii-utverzhdeny-prikazom-fstek-rossii-ot-2-iyunya-2020-g-n-76'>Требования по безопасности информации, устанавливающие уровни доверия к средствам технической защиты информации и средствам обеспечения безопасности информационных технологий” (ФСТЭК России, 2018)</a></li>
         </ul>`,
      },
      {
        id: 51,
        description:
          "Обеспечивается защита программного обеспечения от угроз безопасности информации, связанных с нарушением целостности, в процессе его передачи пользователю",
        level: 1,
        completed: false,
        info: `Защита программного обеспечения при поставке осуществляется в соответствии с документом <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/trebovaniya-po-bezopasnosti-informatsii-utverzhdeny-prikazom-fstek-rossii-ot-2-iyunya-2020-g-n-76'>Требования по безопасности информации, устанавливающие уровни доверия к средствам технической защиты информации и средствам обеспечения безопасности информационных технологий” (ФСТЭК России, 2018)</a>`,
      },
      {
        id: 52,
        description:
          "Фиксируются версии поставляемого пользователям программного обеспечения",
        level: 1,
        completed: false,
        info: `Версии программного обеспечения фиксируются в соответствии с:   
        <ul>
  			<li><a target='_blank' href=' https://docs.cntd.ru/document/1200124394'>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества </a></li>            
  			<li>Рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/trebovaniya-po-bezopasnosti-informatsii-utverzhdeny-prikazom-fstek-rossii-ot-2-iyunya-2020-g-n-76'>Требования по безопасности информации, устанавливающие уровни доверия к средствам технической защиты информации и средствам обеспечения безопасности информационных технологий” (ФСТЭК России, 2018)</a></li>
         </ul>`,
      },
      {
        id: 53,
        description:
          "Организовывается хранение поставляемого пользователям программного обеспечения в неизменяемом виде",
        level: 1,
        completed: false,
        info: `Хранение версий программного обеспечения осуществляется путем архивирования в соответствии с:   
        <ul>
  			<li><a target='_blank' href=' https://docs.cntd.ru/document/1200124394'>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества </a></li>            
  			<li>Рекомендациями документа <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/trebovaniya-po-bezopasnosti-informatsii-utverzhdeny-prikazom-fstek-rossii-ot-2-iyunya-2020-g-n-76'>Требования по безопасности информации, устанавливающие уровни доверия к средствам технической защиты информации и средствам обеспечения безопасности информационных технологий” (ФСТЭК России, 2018)</a></li>
         </ul>`,
      },
      {
        id: 54,
        description:
          "Определен порядок снятия копий для поставляемого пользователям программного обеспечения",
        level: 1,
        completed: false,
        info: `Копии поставляемого программного обеспечения снимаются и фиксируются в соответствии с документом <a target='_blank' href=' https://docs.cntd.ru/document/1200124394'>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества </a>`,
      },
      {
        id: 56,
        description:
          "Определен метод доставки программного обеспечения (обновлений программного обеспечения, включая обновления безопасности)",
        level: 1,
        completed: false,
        info: `определен метод доставки программного обеспечения (обновлений программного обеспечения включая обновления безопасности) – 1; <br/>
        Метод поставки осуществляется в соответствии с документами: <br/>
        <ul>
          <li><a target='_blank' href='https://docs.cntd.ru/document/1200124394'>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества</a></li>
          <li>документом  <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/trebovaniya-po-bezopasnosti-informatsii-utverzhdeny-prikazom-fstek-rossii-ot-2-iyunya-2020-g-n-76'>Требования по безопасности информации устанавливающие уровни доверия к средствам технической защиты информации и средствам обеспечения безопасности информационных технологий (ФСТЭК России 2018)</a></li>
        </ul>`,
      },
      {
        id: 57,
        description:
          "Организовывается оповещение пользователей о выпуске обновлений (включая обновления безопасности) и необходимости их установки",
        level: 1,
        completed: false,
        info: `организовывается оповещение пользователей о выпуске обновлений (включая обновления безопасности) и необходимости их установки – 1; <br/>
        Оповещение пользователей о выпуске обновлений осуществляется в соответствии с: <br/>
        <ul>
          <li><a target='_blank' href='https://docs.cntd.ru/document/1200135525'>ГОСТ Р 56939-2016 Защита информации. Разработка безопасного программного обеспечения. Общие требования </a></li>
          <li>Документом <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/trebovaniya-po-bezopasnosti-informatsii-utverzhdeny-prikazom-fstek-rossii-ot-2-iyunya-2020-g-n-76'>Требования по безопасности информации, устанавливающие уровни доверия к средствам технической защиты информации и средствам обеспечения безопасности информационных технологий (ФСТЭК России, 2018)</a></li>
        </ul>`,
      },
      {
        id: 512,
        title:
          "<a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty'> Решение проблем в процессе эксплуатации: </a>",
      },
      {
        id: 58,
        description: "Организована служба технической поддержки",
        level: 1,
        completed: false,
        info: `Служба технической поддержки организовывается в соответствии с  <a target='_blank' href='https://docs.cntd.ru/document/1200124394'>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества</a>`,
      },
      {
        id: 59,
        description:
          "Разработан регламент реагирования на поступающую информацию об уязвимостях",
        level: 1,
        completed: false,
        info: `Регламент разрабатывается в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200124394'>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества</a>`,
      },
      {
        id: 510,
        description:
          "Организовано обучение специалистов службы технической поддержки работе с поставляемым программным обеспечением, его особенностям установки и функционирования",
        level: 1,
        completed: false,
        info: `Обучение специалистов службы технической поддержки осуществляется в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200124394'>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества</a>`,
      },
      {
        id: 511,
        description:
          "Организована работа службы технической поддержки в режиме 24/7 с регламентированным временем обработки запросов пользователей",
        level: 3,
        completed: false,
        info: `Служба технической поддержки 24/7 с регламентированным временем работы фиксируется в организационно-распорядительной документации в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200124394'>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества</a>`,
      },
      {
        id: 512,
        description:
          "Установлены метрики оценки качества оказания технической поддержки",
        level: 3,
        completed: false,
        info: `Метрики оценки качества фиксируются в организационно-распорядительной документации в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200124394'>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества</a>`,
      },
      {
        id: 513,
        description:
          "Проводится оценка качества оказания технической поддержки с использованием метрик качества",
        level: 3,
        completed: false,
        info: `Оценки качества оказания технической поддержки осуществляется командой внутреннего или внешнего аудита в соответствии с <a target='_blank' href='https://docs.cntd.ru/document/1200124394'>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества </a>`,
      },
      {
        id: 514,
        description:
          "Осуществляется обработка поступающих через службу технической поддержки запросов от пользователей с последующим анализом ошибок функционирования на предмет наличия уязвимостей",
        level: 1,
        completed: false,
        info: `Обработка обращений пользователей осуществляется в соответствии с документами: <br/>
        <ul>
          <li> <a target='_blank' href='https://docs.cntd.ru/document/1200124394'>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества </a></li>
          <li>Документом <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/trebovaniya-po-bezopasnosti-informatsii-utverzhdeny-prikazom-fstek-rossii-ot-2-iyunya-2020-g-n-76'>Требования по безопасности информации устанавливающие уровни доверия к средствам технической защиты информации и средствам обеспечения безопасности информационных технологий (ФСТЭК России 2018)</a></li>
        </ul>`,
      },
      {
        id: 515,
        description:
          "Осуществляется анализ применимости информации о найденных уязвимостях в программном обеспечении на предмет подтверждения наличия/отсутствия уязвимостей",
        level: 1,
        completed: false,
        info: `Анализ применимости информации о найденных уязвимостях в программном обеспечении осуществляется в соответствии с документами: <br/>
        <ul>
          <li><a target='_blank' href='https://docs.cntd.ru/document/1200124394'>ГОСТ Р ИСО 9001-2015 Системы менеджмента качества</a></li>
          <li>Документом <a target='_blank' href='https://fstec.ru/dokumenty/vse-dokumenty/spetsialnye-normativnye-dokumenty/trebovaniya-po-bezopasnosti-informatsii-utverzhdeny-prikazom-fstek-rossii-ot-2-iyunya-2020-g-n-76'>Требования по безопасности информации устанавливающие уровни доверия к средствам технической защиты информации и средствам обеспечения безопасности информационных технологий (ФСТЭК России 2018)</a></li>
        </ul>`,
      },
    ],
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const taskTable = document.getElementById("taskTable");
  sections.forEach((section) => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    const header = document.createElement("th");
    header.innerHTML = section.title; // Используем innerHTML для вставки HTML

    const actionBtnDiv = document.createElement("div");
    actionBtnDiv.className = "actionBtn";

    const baseButton = document.createElement("button");
    baseButton.textContent = "Выделить все";
    baseButton.classList.add("buttonBase");
    baseButton.onclick = () => {
      section.tasks.forEach((task) => {
        if (task.description) {
          task.completed = !task.completed;
          updateTaskUI(task.id, task.completed);
        }
      });
    };

    actionBtnDiv.appendChild(baseButton);
    header.appendChild(actionBtnDiv);
    headerRow.appendChild(header);
    thead.appendChild(headerRow);

    section.tasks.forEach((task) => {
      if (task.title) {
        const titleRow = document.createElement("tr");
        const titleCell = document.createElement("td");
        titleCell.colSpan = 2;
        const titleText = document.createElement("strong");
        titleText.innerHTML = task.title; // Используем innerHTML для вставки HTML
        titleCell.appendChild(titleText);
        titleRow.appendChild(titleCell);
        tbody.appendChild(titleRow);
      } else if (task.description) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        const level = document.createElement("div");
        const action = document.createElement("div");
        action.classList.add("actionRow");
        level.classList.add("level");
        level.classList.add(`level-${task.level}`);
        level.innerHTML = task.level;
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.id = "task-" + task.id;
        checkbox.onchange = () => {
          task.completed = checkbox.checked;
        };

        const revealBtn = document.createElement("span");
        revealBtn.className = "reveal-btn";
        const questionSvg = '<img src="./img/question.svg" alt="Подробнее">';
        const closeSvg = '<img src="./img/close.svg" alt="Скрыть">';
        revealBtn.innerHTML = questionSvg;
        revealBtn.onclick = (event) => {
          event.preventDefault();
          event.stopPropagation();
          event.stopImmediatePropagation();
          const descriptionDiv = document.getElementById("desc-" + task.id);
          descriptionDiv.classList.toggle("open");
          revealBtn.innerHTML = descriptionDiv.classList.contains("open")
            ? closeSvg
            : questionSvg;
        };

        const descriptionDiv = document.createElement("div");
        descriptionDiv.className = "description";
        descriptionDiv.id = "desc-" + task.id;
        descriptionDiv.innerHTML = task.info;

        label.appendChild(document.createTextNode(task.description));
        action.appendChild(level);
        action.appendChild(checkbox);
        action.appendChild(revealBtn);
        label.appendChild(action);
        cell.appendChild(label);
        cell.appendChild(descriptionDiv);
        row.appendChild(cell);
        tbody.appendChild(row);
      }
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    taskTable.appendChild(table);
  });

  function updateTaskUI(taskId, completed) {
    const checkbox = document.getElementById("task-" + taskId);
    if (checkbox) {
      checkbox.checked = completed;
    }
  }
});

const resultsDiv = document.getElementById("results");
const closeResultsBtn = document.querySelector("#closeResultsBtn");

document.addEventListener("DOMContentLoaded", function () {
  const showResultsBtn = document.getElementById("showResultsBtn");
  const showInfoBtn = document.getElementById("showInfoBtn");
  const downloadResultsBtn = document.getElementById("downloadResultsBtn");
  const infoDiv = document.getElementById("info");

  showResultsBtn.addEventListener("click", function () {
    resultsDiv.innerHTML = "";
    let allLevel1Completed = true;
    let allLevel2Completed = true;
    let allLevel3Completed = true;

    let completedTasks = 0;
    let totalTasks = 0;
    let level1Completed = 0;
    let level1Total = 0;
    let level2Completed = 0;
    let level2Total = 0;
    let level3Completed = 0;
    let level3Total = 0;

    sections.forEach((section) => {
      section.tasks.forEach((task) => {
        if (task.description) {
          totalTasks++;
          if (task.completed) {
            completedTasks++;
          }
          if (task.level === 1) {
            level1Total++;
            if (task.completed) {
              level1Completed++;
            }
          }
          if (task.level === 2) {
            level2Total++;
            if (task.completed) {
              level2Completed++;
            }
          }
          if (task.level === 3) {
            level3Total++;
            if (task.completed) {
              level3Completed++;
            }
          }
        }
      });
    });

    if (level1Completed < level1Total) {
      allLevel1Completed = false;
    }
    if (level2Completed < level2Total) {
      allLevel2Completed = false;
    }
    if (level3Completed < level3Total) {
      allLevel3Completed = false;
    }

    let securityLevel = "";

    if (!allLevel1Completed) {
      securityLevel =
        "Процессы безопасной разработки не выстроены, программное обеспечение не безопасно";
    } else if (allLevel1Completed && !allLevel2Completed) {
      securityLevel = "Программное обеспечение безопасно на 1 уровне";
    } else if (
      allLevel1Completed &&
      allLevel2Completed &&
      !allLevel3Completed
    ) {
      securityLevel = "Программное обеспечение безопасно на 2 уровне";
    } else if (allLevel1Completed && allLevel2Completed && allLevel3Completed) {
      securityLevel = "Программное обеспечение безопасно на 3 уровне";
    }

    const result = document.createElement("div");
    result.innerHTML = `
        <p>${securityLevel}</p>
        <p>Всего мер выполнено: ${completedTasks} из ${totalTasks}</p>
        <p>Уровень 1: ${level1Completed} из ${level1Total}</p>
        <p>Уровень 2: ${level2Completed} из ${level2Total}</p>
        <p>Уровень 3: ${level3Completed} из ${level3Total}</p>
    `;
    resultsDiv.appendChild(result);

    // resultsDiv.style.display = "block";
    resultsDiv.classList.toggle("displaySec");
    closeResultsBtn.classList.toggle("displaySec");
    downloadResultsBtn.style.display = "block";

    // showInfoBtn.style.display = "block";
    showInfoBtn.classList.toggle("displaySec");
  });

  showInfoBtn.addEventListener("click", function () {
    if (infoDiv) infoDiv.innerHTML = "";
    sections.forEach((section) => {
      const completedTasks = section.tasks.filter(
        (task) => task.completed && task.description
      ).length;
      const totalTasks = section.tasks.filter(
        (task) => task.description
      ).length;
      const sectionInfo = document.createElement("div");
      sectionInfo.textContent = `${section.title}: ${completedTasks} из ${totalTasks} мер выполнены`;

      const level1Completed = section.tasks.filter(
        (task) => task.completed && task.level === 1
      ).length;
      const level1Total = section.tasks.filter(
        (task) => task.level === 1
      ).length;
      const level2Completed = section.tasks.filter(
        (task) => task.completed && task.level === 2
      ).length;
      const level2Total = section.tasks.filter(
        (task) => task.level === 2
      ).length;
      const level3Completed = section.tasks.filter(
        (task) => task.completed && task.level === 3
      ).length;
      const level3Total = section.tasks.filter(
        (task) => task.level === 3
      ).length;

      const levelsInfo = document.createElement("div");
      levelsInfo.innerHTML = `
            Уровень 1: ${level1Completed} из ${level1Total}<br>
            Уровень 2: ${level2Completed} из ${level2Total}<br>
            Уровень 3: ${level3Completed} из ${level3Total}
        `;

      sectionInfo.appendChild(levelsInfo);
      infoDiv.appendChild(sectionInfo);
    });
    infoDiv.classList.toggle("displaySec");
  });
  document
    .getElementById("downloadResultsBtn")
    .addEventListener("click", function () {
      let csvContent = "data:text/csv;charset=utf-8,\uFEFF";
      sections.forEach((section) => {
        csvContent += `"${section.title}"\n`;
        section.tasks.forEach((task) => {
          if (task.title) {
            csvContent += `"${task.title}"\n`;
          } else {
            csvContent += `"${task.description}";"${
              task.completed ? "Выполнено" : "Не выполнено"
            }"\n`;
          }
        });
        csvContent += "\n";
      });
      const results = document.getElementById("results").innerText;
      csvContent += `"Результаты"\n"${results
        .replace(/\n/g, " ")
        .replace(/"/g, '""')}"\n`;

      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "tasks_report.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  closeResultsBtn?.addEventListener("click", function () {
    infoDiv.classList.remove("displaySec");
    resultsDiv.classList.remove("displaySec");
    showInfoBtn.classList.toggle("displaySec");
    closeResultsBtn.classList.remove("displaySec");
  });
});
