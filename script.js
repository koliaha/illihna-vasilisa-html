const sections = [
  {
    id: 1,
    title: "Определение требований",
    tasks: [
      {
        id: 10,
        description:
          "Прописан перечень определенных требований по безопасности, предъявляемых к ПО",
        completed: true,
        isBase: true,
      },
      {
        id: 11,
        description: "Перечни прописаны в ТЗ",
        completed: true,
        isBase: true,
      },
      {
        id: 12,
        description:
          "В качестве источника формирования требований взяты: требования законов, нормативных правовых актов, отраслевых стандартов, перечень требований пользователя, сценарии применения ПО",
        completed: true,
        isBase: true,
      },
      {
        id: 13,
        description:
          "Соблюдена однозначность трактования требований, определяющих свойства безопасности ПО",
        completed: true,
        isBase: true,
      },
      {
        id: 14,
        description:
          "Соблюдена взаимная непротиворечивость набора требований, определяющих свойства безопасности ПО",
        completed: true,
        isBase: true,
      },
      {
        id: 15,
        description:
          "К ПО предъявлены требования, определяющие свойства безопасности ПО",
        completed: true,
        isBase: true,
      },
      {
        id: 16,
        description:
          "Соблюдена однозначность трактования требований, определяющих свойства безопасности ПО",
        completed: true,
        isBase: true,
      },
      {
        id: 17,
        description:
          "Соблюдена взаимная непротиворечивость набора требований, определяющих свойства безопасности ПО",
        completed: true,
        isBase: true,
      },
      {
        id: 18,
        description: "В требованиях зафиксированы критерии их выполнения",
        completed: true,
        isHigh: true,
      }, //начиная с этого - повышенный
      {
        id: 19,
        description: "Осуществлен контроль выполнимости требований",
        completed: true,
        isHigh: true,
      },
      {
        id: 110,
        description:
          "Осуществлен контроль взаимной непротиворечивости всего набора требований, предъявляемых к ПО",
        completed: true,
        isHigh: true,
      },
      {
        id: 111,
        description:
          "Осуществлена актуализация требований с учетом жизненного цикла ПО",
        completed: true,
        isHigh: true,
      },
      {
        id: 112,
        description: "Разработана и утверждена процедура пересмотра требований",
        completed: true,
        isHigh: true,
      },
      {
        id: 113,
        description:
          "Использована для хранения и отслеживания выполнения требований единую систему",
        completed: true,
        isHigh: true,
      },
    ],
  },
  {
    id: 2,
    title: "Проектирование архитектуры",
    tasks: [
      {
        id: 20,
        description:
          "Подготовлен проект архитектуры ПО с уровнем детализации, достаточным для понимания структуры ПО другими участниками разработки ПО",
        completed: true,
        isBase: true,
      },
      {
        id: 21,
        description:
          "Выполнено моделирование угроз для ПО (разработать модель угроз ПО)",
        completed: true,
        isBase: true,
      },
      {
        id: 22,
        description:
          "По результатам моделирования угроз и анализа поверхности атаки приоритизированы и устранены потенциальные уязвимости (угрозы безопасности) с учетом их критичности",
        completed: true,
        isHigh: true,
      },
    ], //начиная с этого - повышенный
  },
  {
    id: 3,
    title: "Разработка продукта",
    tasks: [
      {
        id: 30,
        description:
          "Разработаны и утверждены регламентирующие документы по проведению статического анализа исходного кода ПО, включающие правила обработки срабатываний средств статического анализа",
        completed: true,
        isBase: true,
      },
      {
        id: 31,
        description:
          "Зарегистрированы все срабатывания по результатам работы инструментов статического анализа",
        completed: true,
        isBase: true,
      },
      {
        id: 32,
        description:
          "Обработаны срабатывания статического анализатора в соответствии с правилами обработки ошибок, установленными в регламентирующих документах организации, с учетом типов и уровней критичности ошибок и особенностей статического анализатора",
        completed: true,
        isBase: true,
      },
      {
        id: 33,
        description:
          "Определены инструменты статического анализа для каждого используемого в ПО языка программирования",
        completed: true,
        isBase: true,
      },
      {
        id: 34,
        description:
          "Определены конфигураця и параметры настройки инструментов статического анализа с учетом с рекомендаций подразделения обеспечения безопасности ПО",
        completed: true,
        isBase: true,
      },
      {
        id: 35,
        description:
          "Осуществлен пересмотр конфигурации и параметров настройки инструментов статического анализа с установленной периодичностью и при выполнении установленных событий (изменениях в правилах сборки, применяемых статических анализаторах, получении информации о потенциальных уязвимостях и т.п.)",
        completed: true,
        isBase: true,
      },
      {
        id: 36,
        description:
          "Проведен регулярный статический анализ ПО в рамках жизненного цикла ПО",
        completed: true,
        isBase: true,
      },
      {
        id: 37,
        description:
          "В процессе статического анализа модулей ПО, требующих сборки, использованы инструменты статического анализа, позволяющие перехватывать сборку, при наличии таких инструментов для конкретного языка программирования и сборочного окружения",
        completed: true,
        isBase: true,
      },
      {
        id: 38,
        description:
          "Выполнен статический анализ исходного кода ПО, составляющего в соответствии с моделью угроз и результатами анализа архитектуры поверхность атаки",
        completed: true,
        isHigh: true,
      }, //начиная с этого - повышенный
      {
        id: 39,
        description:
          "Осуществлен контроль устранения выявленных потенциальных ошибок",
        completed: true,
        isHigh: true,
      },
      {
        id: 310,
        description: "Выполнен статический анализ всего исходного кода ПО",
        completed: true,
        isHigh: true,
      },
      {
        id: 311,
        description:
          "Проведен статический анализ непосредственно после каждого изменения кода",
        completed: true,
        isHigh: true,
      },
      {
        id: 312,
        description:
          "Осуществлен запрет внесения изменений основной ветки кода ПО в случае, если в изменяемом коде обнаружены срабатывания инструментов статического анализа",
        completed: true,
        isHigh: true,
      },
      {
        id: 313,
        description:
          "Проведен статический анализ исходного кода всех заимствованных компонентов",
        completed: true,
        isHigh: true,
      },
      {
        id: 314,
        description:
          "Проведен статический анализ неизменяемого исходного кода при выполнении установленных событий (изменениях в правилах сборки, применяемых статических анализаторах, получении информации о потенциальных уязвимостях и т.п.)",
        completed: true,
        isHigh: true,
      },
      {
        id: 315,
        description:
          "Разработаны и утверждены правила проведения экспертизы исходного кода ПО, устанавливающие базовые требования к экспертизе (количество участников; области кода, подлежащего экспертизе и т.д.)",
        completed: true,
        isBase: true,
      }, //начиная с этого - базовый
      {
        id: 316,
        description:
          "Проведена экспертиза кода для всего изменяемого исходного кода ПО, разработанного непосредственно разработчиком ПО",
        completed: true,
        isHigh: true,
      }, //начиная с этого - повышенный
      {
        id: 317,
        description:
          "К экспертизе исходного кода ПО привлечены дополнительные сотрудники (эксперты), в соответствии с их экспертизой",
        completed: true,
        isHigh: true,
      },
      {
        id: 318,
        description:
          "Экспертиза исходного кода проведена с использованием автоматизированных средств учета проведения экспертизы",
        completed: true,
        isHigh: true,
      },
      {
        id: 319,
        description:
          "При выполнении экспертизы исходного кода использованы метрики качества кода ПО",
        completed: true,
        isHigh: true,
      },
      {
        id: 320,
        description:
          "Количественная оценка результатов экспертиза кода выполнена с использованием метрик оценки полноты и качества проведения экспертизы исходного кода ПО",
        completed: true,
        isHigh: true,
      },
      {
        id: 321,
        description:
          "Выполнена экспертиза заимствованного исходного кода, входящего в модули ПО, составляющие поверхность атаки",
        completed: true,
        isHigh: true,
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
          "Разработан план тестирования, содержащий описание сценариев тестирования для каждой функциональной возможности ПО, включающее: формулировку функциональных требований, выполняемые действия по оценке, ожидаемые результаты тестирования и критерии успешного прохождения проверок",
        completed: true,
        isBase: true,
      },
      {
        id: 41,
        description:
          "Выполнены различные виды тестирования, позволяющие протестировать ПО на уровне модулей, компонентов, подсистем, всего ПО в целом",
        completed: true,
        isBase: true,
      },
      {
        id: 42,
        description:
          "При выполнении каждого сценария тестирования зафиксированы версии ПО (модулей ПО), номера сборок ПО (модулей ПО) и системные требования к тестируемому ПО",
        completed: true,
        isBase: true,
      },
      {
        id: 43,
        description:
          "Зарегистрирован и организован процесс исправления выявленных в ходе тестирования ошибок с использованием системы управления ошибками",
        completed: true,
        isBase: true,
      },
      {
        id: 44,
        description:
          "Зарегистрирован ход проведения тестирования, при этом регистрируемая информация должна включать, как минимум, дату и время выполнения следующих видов операций: запуск и завершение сценария тестирования, результат выполнения сценария тестирования, изменение конфигурации тестируемого ПО, возникновение любых сбоев и ошибок",
        completed: true,
        isBase: true,
      },
      {
        id: 45,
        description: "Установлены критерии завершения и остановки тестирования",
        completed: true,
        isBase: true,
      },
      {
        id: 46,
        description:
          "Разработаны отчеты о проведенном тестировании, содержащие, как минимум, описание полученных результатов, перечень обнаруженных и решенных ошибок, вывод по результатам тестирования",
        completed: true,
        isBase: true,
      },
      {
        id: 47,
        description:
          "Осуществить сбор информации об исследуемом ПО (модулях ПО)",
        completed: true,
        isBase: true,
      },
      {
        id: 48,
        description:
          "Выполнить исследование доступных источников информации для идентификации потенциальных уязвимостей ПО (модулей ПО)",
        completed: true,
        isBase: true,
      },
      {
        id: 49,
        description:
          "Разработана документация по проведению тестирования на проникновение",
        completed: true,
        isBase: true,
      },
      {
        id: 410,
        description:
          "Тестирование проведено в среде, соответствующей условиям функционирования ПО (модулей ПО)",
        completed: true,
        isBase: true,
      },
      {
        id: 411,
        description:
          "Разработан отчет по результатам тестирования на проникновение",
        completed: true,
        isBase: true,
      },
      {
        id: 412,
        description:
          "Тестирование на проникновение ПО проведено в автоматизированном режиме с использованием инструментальных средств",
        completed: true,
        isHigh: true,
      }, //начиная с этого - повышенный
      {
        id: 413,
        description:
          "Тестирование на проникновение проведено с установленной в документации периодичностью и для всех релизных версий ПО",
        completed: true,
        isHigh: true,
      },
      {
        id: 414,
        description:
          "Программа поощрения (вознаграждения) исследователей за найденные в ПО уязвимости реализована",
        completed: true,
        isHigh: true,
      },
      {
        id: 415,
        description:
          "Определен перечень используемых в процессе разработки языков программирования, платформ использования",
        completed: true,
        isBase: true,
      }, //начиная с этого - базовый
      {
        id: 416,
        description:
          "Определен перечень используемых инструментальных средств динамического анализа и параметров эксплуатации данных средств для платформ и языков программирования",
        completed: true,
        isBase: true,
      },
      {
        id: 417,
        description:
          "Определен сценарии проведения тестирования для каждого модуля (компонента) ПО средствами динамического анализа",
        completed: true,
        isBase: true,
      },
      {
        id: 418,
        description:
          "Определен процедуры устранения найденных средствами динамического анализа ошибок",
        completed: true,
        isBase: true,
      },
      {
        id: 419,
        description: "Определен периодичность проведения динамического анализа",
        completed: true,
        isBase: true,
      },
      {
        id: 420,
        description:
          "Определен перечень модулей ПО, которые необходимо подвергнуть фаззинг-тестированию",
        completed: true,
        isBase: true,
      },
      {
        id: 421,
        description:
          "Определен периодичность проведения фаззинг-тестирования и критерии его завершения",
        completed: true,
        isBase: true,
      },
      {
        id: 422,
        description:
          "Выполнен анализ всех фактов аварийных завершений ПО в процессе фаззинг-тестирования",
        completed: true,
        isBase: true,
      },
      {
        id: 423,
        description:
          "Выполнена обработка критических ошибок, выявленных в результате динамического тестирования",
        completed: true,
        isBase: true,
      },
      {
        id: 424,
        description:
          "Динамическое тестирование сетевых интерфейсов (при их наличии) осуществлено с целью выявления недостатков (слабостей) авторизации",
        completed: true,
        isBase: true,
      },
      {
        id: 425,
        description:
          "Зафиксированы срабатывания инструментов динамического тестирования с использованием автоматизированных средств учета",
        completed: true,
        isBase: true,
      },
      {
        id: 426,
        description:
          "Проанализированы все найденные в ходе динамического анализа ошибки, устранены ошибки, влияющие на безопасность ПО",
        completed: true,
        isBase: true,
      },
      {
        id: 427,
        description: "Выполнен анализ утечек чувствительных данных",
        completed: true,
        isBase: true,
      },
      {
        id: 428,
        description:
          "Динамическое тестирование веб-интерфейсов (при их наличии) осуществлено в соответствии с методологией OWASP TOP-10 в автоматизированном режиме",
        completed: true,
        isHigh: true,
      }, //начиная с этого - повышенный
      {
        id: 429,
        description:
          "Выполнен анализ утечек чувствительных данных методом полносистемного анализа",
        completed: true,
        isHigh: true,
      },
    ],
  },
  {
    id: 5,
    title: "Внедрение и сопровождение",
    tasks: [
      {
        id: 50,
        description: "Зафиксированы версии поставляемого пользователям ПО",
        completed: true,
        isBase: true,
      },
      {
        id: 51,
        description:
          "Организовано хранение в неизменяемом виде поставляемого пользователям ПО",
        completed: true,
        isBase: true,
      },
      {
        id: 52,
        description:
          "Определен порядок снятия копий (тиражирования) для поставляемого пользователям ПО",
        completed: true,
        isBase: true,
      },
      {
        id: 53,
        description:
          "Определен порядок доставки ПО (обновлений ПО, включая обновления безопасности)",
        completed: true,
        isBase: true,
      },
      {
        id: 54,
        description:
          "Определен процедуру проверки целостности ПО (обновлений ПО) пользователем",
        completed: true,
        isBase: true,
      },
      {
        id: 55,
        description:
          "Организовано оповещение пользователей о выпуске обновлений (включая обновления безопасности) и необходимости их установки",
        completed: true,
        isBase: true,
      },
      {
        id: 56,
        description: "ПО поставлено вместе с эксплуатационной документацией",
        completed: true,
        isBase: true,
      },
      {
        id: 57,
        description:
          "Ведется учет поставленного ПО пользователям с использованием уникальных идентификаторов ПО",
        completed: true,
        isHigh: true,
      }, //начиная с этого - повышенный
      {
        id: 58,
        description:
          "Осуществлены дополнительные мероприятия по безопасной доставке ПО пользователям",
        completed: true,
        isHigh: true,
      },
      {
        id: 59,
        description: "Организована служба технической поддержки",
        completed: true,
        isBase: true,
      }, //начиная с этого - базовый
      {
        id: 510,
        description:
          "Организовано обучение специалистов службы технической поддержки работе с поставляемым ПО, его особенностям установки и функционирования",
        completed: true,
        isBase: true,
      },
      {
        id: 511,
        description:
          "Организовано работу службы технической поддержки в режиме 24/7 с регламентированным временем обработки запросов пользователей",
        completed: true,
        isHigh: true,
      }, //начиная с этого - повышенный
      {
        id: 512,
        description:
          "Установлены метрики оценки качества оказания технической поддержки",
        completed: true,
        isHigh: true,
      },
      {
        id: 513,
        description:
          "Проведена оценка качества оказания технической поддержки с использованием метрик качества",
        completed: true,
        isHigh: true,
      },
      {
        id: 514,
        description:
          "Разработан регламент реагирования на поступающую информацию об уязвимостях",
        completed: true,
        isBase: true,
      }, //начиная с этого - базовый
      {
        id: 515,
        description:
          "Периодически проводится поиск известных (подтвержденных) уязвимостей в общедоступных источниках информации об уязвимостях ПО, его программных компонентов и сред его функционирования на протяжении срока действия технической поддержки",
        completed: true,
        isBase: true,
      },
      {
        id: 516,
        description:
          "Осуществлена обработка поступающих через службу технической поддержки запросов от пользователей с последующим анализом ошибок функционирования на предмет наличия уязвимостей",
        completed: true,
        isBase: true,
      },
      {
        id: 517,
        description:
          "Осуществлен анализ применимости информации о найденных уязвимостях в ПО на предмет подтверждения наличия/отсутствия уязвимостей",
        completed: true,
        isBase: true,
      },
      {
        id: 518,
        description:
          "Осуществлена оценку степени опасности потенциальной уязвимости в случае получения информации о потенциальной уязвимости в ПО из внешнего источника",
        completed: true,
        isBase: true,
      },
      {
        id: 519,
        description:
          "Осуществлено информирование пользователей ПО о выявленных уязвимостях и способах реализации мер по их нейтрализации до разработки обновлений безопасности, устраняющих уязвимость",
        completed: true,
        isBase: true,
      },
      {
        id: 520,
        description:
          "В случае подтверждения наличия уязвимости ПО после получения информации о потенциальной уязвимости в ПО из внешнего источника разрабатываются меры, обеспечивающие устранение уязвимости (например, разработка патча, выпуск новой версии), или принимать правовые, организационные, технические меры, снижающие возможность эксплуатации уязвимости нарушителем",
        completed: true,
        isHigh: true,
      }, //начиная с этого - повышенный
      {
        id: 521,
        description:
          "Организовано проведение анализа существующих (или доступных для организации) практик, документов, обучающих курсов и тренингов по разработке безопасного ПО с точки зрения их применимости для обучения сотрудников организации",
        completed: true,
        isBase: true,
      }, //начиная с этого - базовый
      {
        id: 522,
        description:
          "По результатам проведенного анализа выполнено планирование и организовано обучение сотрудников",
        completed: true,
        isBase: true,
      },
      {
        id: 523,
        description:
          "Разработан план обучения (перечень курсов) с перечислением участников команды разработки",
        completed: true,
        isBase: true,
      },
      {
        id: 524,
        description: "Установлена периодичность обучения",
        completed: true,
        isBase: true,
      },
      {
        id: 525,
        description:
          "Сформирован отчет об обучении с указанием участников и пройденных программ (курсов) по итогам обучения",
        completed: true,
        isBase: true,
      },
      {
        id: 526,
        description:
          "Определен критерии пересмотра программ обучения (курсов, тренингов и т.п.)",
        completed: true,
        isHigh: true,
      }, //начиная с этого - повышенный
      {
        id: 527,
        description:
          "учитывать при разработке (выборе) программ обучения потребности команд разработки в части необходимых технологий и их изменений",
        completed: true,
        isHigh: true,
      },
      {
        id: 528,
        description:
          "Проведено обучение всех участников команды разработки, задействованных в разработке кода ПО",
        completed: true,
        isHigh: true,
      },
      {
        id: 529,
        description:
          "Проведено обучение для сотрудников команд разработки для всех языков программирования, используемых в коде ПО, для модулей, составляющих поверхность атаки",
        completed: true,
        isHigh: true,
      },
      {
        id: 530,
        description:
          "Проведена выборочная проверка качества обучения сотрудников",
        completed: true,
        isHigh: true,
      },
      {
        id: 531,
        description:
          "Проведена проверка качества обучения сотрудников, непосредственно задействованных в разработке кода ПО",
        completed: true,
        isHigh: true,
      },
      {
        id: 532,
        description: "Определены критерии успешности прохождения обучения",
        completed: true,
        isHigh: true,
      },
      {
        id: 533,
        description:
          "Провадится обязательное обучение всех участников команд, вовлеченных в процесс разработки",
        completed: true,
        isHigh: true,
      },
      {
        id: 534,
        description:
          "проводится обязательное обучение всех участников команды дважды в год или чаще",
        completed: true,
        isHigh: true,
      },
      {
        id: 535,
        description:
          "Проводится повторное обучение сотрудников в случае получения ими неудовлетворительной оценки по результатам обучения",
        completed: true,
        isHigh: true,
      },
      {
        id: 536,
        description:
          "Сотрудники отстранены от возможности изменения кода ПО в случае получения ими неудовлетворительной оценки по результатам обучения",
        completed: true,
        isHigh: true,
      },
      {
        id: 537,
        description:
          "Осуществлен контроль качества программ обучения (курсов, тренингов и т.п.) независимым аудитором",
        completed: true,
        isHigh: true,
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
    header.textContent = section.title;
    headerRow.appendChild(header);
    thead.appendChild(headerRow);

    section.tasks.forEach((task) => {
      const row = document.createElement("tr");
      const cell = document.createElement("td");

      // Check if task has 'isBase' or 'isHigh' property and add respective class
      if (task.isBase) {
        cell.classList.add("isBase");
      }
      if (task.isHigh) {
        cell.classList.add("isHigh");
      }

      const label = document.createElement("label");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.completed;
      checkbox.onchange = () => (task.completed = checkbox.checked);
      label.appendChild(document.createTextNode(task.description));
      label.appendChild(checkbox);
      cell.appendChild(label);
      row.appendChild(cell);
      tbody.appendChild(row);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    taskTable.appendChild(table);
  });
});

let resultsDiv = document.getElementById("results");
function showResults() {
  resultsDiv.innerHTML = ""; // Clear previous results

  let allBaseCompleted = true;
  let totalBaseTasks = 0;
  let completedBaseTasksCount = 0;

  // Check base tasks across all sections
  sections.forEach((section) => {
    const baseTasks = section.tasks.filter((task) => task.isBase);
    const completedBaseTasks = baseTasks.filter((task) => task.completed);
    totalBaseTasks += baseTasks.length;
    completedBaseTasksCount += completedBaseTasks.length;

    if (
      baseTasks.length > 0 &&
      completedBaseTasks.length !== baseTasks.length
    ) {
      allBaseCompleted = false;
      const uncompletedBaseCount = baseTasks.length - completedBaseTasks.length;
      resultsDiv.innerHTML += `<div>В разделе "${section.title}" выполнено базовых задач: ${completedBaseTasks.length} из ${baseTasks.length} (Осталось ${uncompletedBaseCount} задач)</div>`;
    }
  });

  if (!allBaseCompleted) {
    resultsDiv.innerHTML += `<div>Ваше ПО недостаточно безопасно</div>`;
  } else {
    // resultsDiv.innerHTML += `<div>Ваше ПО безопасно на достаточном уровне</div>`;
    evaluateHighPriorityTasks();
  }
}

function evaluateHighPriorityTasks() {
  let highTasksCompleted = 0;
  let totalHighTasks = 0;
  console.log("asdad");
  sections.forEach((section) => {
    const highTasks = section.tasks.filter((task) => task.isHigh);
    highTasksCompleted += highTasks.filter((task) => task.completed).length;
    totalHighTasks += highTasks.length;
  });

  if (totalHighTasks > 0) {
    const highTasksCompletionRate = (highTasksCompleted / totalHighTasks) * 100;
    if (highTasksCompletionRate > 99) {
      resultsDiv.innerHTML += `<div class="finalText high">Ваше ПО безопасно на повышенном уровне</div>`;
    } else if (highTasksCompletionRate >= 50 && highTasksCompletionRate <= 99) {
      resultsDiv.innerHTML += `<div class="finalText medium">Ваше ПО безопасно на среднем уровне</div>`;
    } else {
      resultsDiv.innerHTML += `<div class="">Ваше ПО безопасно на достаточном уровне</div>`;
    }
  }
}
