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
      },
      {
        id: 11,
        description: "Перечни прописаны в ТЗ",
        level: 2,
        completed: false,
      },
      {
        id: 12,
        description:
          "В качестве источника формирования требований взяты: требования законов, нормативных правовых актов, отраслевых стандартов, перечень требований пользователя, сценарии применения программного обеспечения",
        level: 3,
        completed: false,
      },
      {
        id: 13,
        description:
          "Соблюдена однозначность трактования требований, определяющих свойства безопасности программного обеспечения",
        level: 1,
        completed: false,
      },
      {
        id: 14,
        description:
          "Соблюдена взаимная непротиворечивость набора требований, определяющих свойства безопасности программного обеспечения",
        level: 3,
        completed: false,
      },
      {
        id: 15,
        description:
          "Соблюдена адекватность требований, определяющих свойства безопасности программного обеспечения",
        level: 2,
        completed: false,
      },
      {
        id: 16,
        description:
          "Соблюдена полнота требований, определяющих свойства безопасности программного обеспечения",
        level: 1,
        completed: false,
      },
    ],
  },
  {
    id: 2,
    title: "Проектирование архитектуры программного обеспечения",

    tasks: [
      {
        id: 20,
        description:
          "Подготовлен проект архитектуры программного обеспечения с уровнем детализации, достаточным для понимания структуры программного обеспечения другими участниками разработки программного обеспечения",
        level: 1,
        completed: false,
      },
      {
        id: 21,
        description: "Разработана модель угроз программного обеспечения",
        level: 2,
        completed: false,
      },
      {
        id: 22,
        description:
          "По результатам моделирования угроз и анализа поверхности атаки приоритизированы и устранены потенциальные уязвимости (угрозы безопасности) с учетом их критичности",
        level: 3,
        completed: false,
      },
      {
        id: 23,
        description:
          "Разработан и применен в разработке программного обеспечения регламент устранения потенциальных уязвимостей",
        level: 1,
        completed: false,
      },
      {
        id: 24,
        description: "Выполнено описание поверхности атаки",
        level: 2,
        completed: false,
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
          "Разработан план обучения (перечень курсов) с перечислением участников команды разработки",
        level: 1,
        completed: false,
      },
      {
        id: 31,
        description: "Установлена периодичность обучения",
        level: 2,
        completed: false,
      },
      {
        id: 32,
        description: "Определены критерии успешности прохождения обучения",
        level: 3,
        completed: false,
      },
      {
        id: 33,
        description:
          "Определены навыки, требующиеся для каждого участника разработки",
        level: 3,
        completed: false,
      },
      {
        id: 34,
        description:
          "Проводится обучение всех участников команды разработки, задействованных в разработке кода программного обеспечения",
        level: 3,
        completed: false,
      },
      {
        id: 35,
        description:
          "Сформировывается отчет об обучении с указанием участников и пройденных программ (курсов) по итогам обучения",
        level: 1,
        completed: false,
      },
      {
        id: 36,
        description:
          "Проводится повторное обучение сотрудников в случае получения ими неудовлетворительной оценки по результатам обучения",
        level: 2,
        completed: false,
      },
      {
        id: 37,
        description:
          "Сотрудники отстраняются от возможности изменения кода программного обеспечения в случае получения ими неудовлетворительной оценки по результатам обучения",
        level: 3,
        completed: false,
      },
      {
        id: 38,
        description:
          "Проводится обучение всех участников команды разработки, задействованных в разработке кода программного обеспечения",
        level: 1,
        completed: false,
      },
      {
        id: 39,
        description: "Проводится оценка эффективности программы обучения",
        level: 2,
        completed: false,
      },
      {
        id: 310,
        description:
          "Проводится анализ существующих программ обучения с учетом потребностей сотрудников",
        level: 2,
        completed: false,
      },
      {
        id: 311,
        description:
          "По результатам проведенного анализа выполняется планирование и организовывается обучение сотрудников",
        level: 1,
        completed: false,
      },
      {
        id: 312,
        description:
          "Проводится выборочная проверка качества обучения сотрудников",
        level: 3,
        completed: false,
      },
      {
        id: 313,
        description:
          "Определяются критерии пересмотра программ обучения (курсов, тренингов и т.п.)",
        level: 1,
        completed: false,
      },
      {
        id: 314,
        description:
          "Осуществляется контроль качества программ обучения (курсов, тренингов и т.п.) независимым аудитором",
        level: 3,
        completed: false,
      },
      {
        id: 312,
        title:
          "Статический анализ и экспертиза исходного кода программного обеспечения:",
      },
      {
        id: 315,
        description:
          "Разработаны и утверждены регламентирующие документы по проведению статического анализа и экспертизы исходного кода программного обеспечения",
        level: 3,
        completed: false,
      },
      {
        id: 316,
        description:
          "Определены инструменты статического анализа и экспертизы исходного кода для каждого используемого в программном обеспечении языка программирования",
        level: 2,
        completed: false,
      },
      {
        id: 317,
        description:
          "Регистрируются все срабатывания по результатам работы инструментов статического анализа и экспертизы исходного кода программного обеспечения",
        level: 1,
        completed: false,
      },
      {
        id: 318,
        description:
          "Обрабатываются срабатывания статического анализатора в соответствии с правилами обработки ошибок, установленными в регламентирующих документах организации, с учетом типов и уровней критичности ошибок и особенностей инструментов статического анализа и экспертизы исходного кода программного обеспечения",
        level: 3,
        completed: false,
      },
      {
        id: 319,
        description:
          "Определены параметры настройки инструментов статического анализа и экспертизы исходного кода программного обеспечения с учетом с рекомендаций подразделения обеспечения безопасности программного обеспечения",
        level: 2,
        completed: false,
      },
      {
        id: 320,
        description:
          "Осуществляется пересмотр параметров настройки инструментов статического анализа и экспертизы исходного кода программного обеспечения с установленной периодичностью и при выполнении установленных событий (изменениях в правилах сборки, применяемых статических анализаторах, получении информации о потенциальных уязвимостях и т.п.)",
        level: 3,
        completed: false,
      },
      {
        id: 321,
        description:
          "Проводится регулярный статический анализ и экспертиза исходного кода программного обеспечения в рамках жизненного цикла программного обеспечения",
        level: 2,
        completed: false,
      },
      {
        id: 322,
        description:
          "Осуществляется контроль устранения выявленных потенциальных ошибок",
        level: 3,
        completed: false,
      },
      {
        id: 323,
        description:
          "Выполняется статический анализ всего исходного кода программного обеспечения",
        level: 1,
        completed: false,
      },
      {
        id: 324,
        description:
          "Проводится статический анализ и экспертизу исходного кода программного обеспечения всех заимствованных компонентов",
        level: 2,
        completed: false,
      },
      {
        id: 325,
        description:
          "Проводится статический анализ и экспертиза исходного кода программного обеспечения неизменяемого исходного кода при выполнении установленных событий (изменениях в правилах сборки, применяемых статических анализаторах, получении информации о потенциальных уязвимостях и т.п.)",
        level: 3,
        completed: false,
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
        level: 3,
        completed: false,
      },
      {
        id: 41,
        description:
          "Выполняются различные виды тестирования, позволяющие протестировать программное обеспечение на уровне модулей, компонентов, подсистем, всего программного обеспечения в целом",
        level: 1,
        completed: false,
      },
      {
        id: 42,
        description:
          "При выполнении каждого сценария тестирования фиксируются версии программного обеспечения, номера сборок программного обеспечения и системные требования к тестируемому программному обеспечению",
        level: 1,
        completed: false,
      },
      {
        id: 43,
        description:
          "Регистрируется и организовывается процесс исправления ошибок, выявленных в ходе тестирования",
        level: 3,
        completed: false,
      },
      {
        id: 44,
        description:
          "Регистрируется ход проведения тестирования, при этом регистрируемая информация должна включать, как минимум, дату и время выполнения следующих видов операций: запуск и завершение сценария тестирования, результат выполнения сценария тестирования, изменение конфигурации тестируемого программного обеспечения, возникновение любых сбоев и ошибок",
        level: 3,
        completed: false,
      },
      {
        id: 45,
        description:
          "Устанавливаются критерии завершения и остановки тестирования",
        level: 2,
        completed: false,
      },
      {
        id: 46,
        description:
          "Разрабатываются отчеты о проведенном тестировании, содержащие, как минимум, описание полученных результатов, перечень обнаруженных и решенных ошибок, вывод по результатам тестирования",
        level: 2,
        completed: false,
      },
      {
        id: 47,
        description:
          "Осуществляется сбор информации об исследуемом программном обеспечении",
        level: 1,
        completed: false,
      },
      {
        id: 48,
        description: "Выполняется анализ утечек чувствительных данных",
        level: 3,
        completed: false,
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
      },
      {
        id: 51,
        description:
          "Обеспечивается защита программного обеспечения от угроз безопасности информации, связанных с нарушением целостности, в процессе его передачи пользователю",
        level: 3,
        completed: false,
      },
      {
        id: 52,
        description:
          "Фиксируются версии поставляемого пользователям программного обеспечения",
        level: 1,
        completed: false,
      },
      {
        id: 53,
        description:
          "Организовывается хранение поставляемого пользователям программного обеспечения в неизменяемом виде",
        level: 2,
        completed: false,
      },
      {
        id: 54,
        description:
          "Определен порядок снятия копий для поставляемого пользователям программного обеспечения",
        level: 3,
        completed: false,
      },
      {
        id: 56,
        description:
          "Определен метод доставки программного обеспечения (обновлений программного обеспечения, включая обновления безопасности)",
        level: 2,
        completed: false,
      },
      {
        id: 57,
        description:
          "Организовывается оповещение пользователей о выпуске обновлений (включая обновления безопасности) и необходимости их установки",
        level: 1,
        completed: false,
      },
      {
        id: 512,
        title: "Решение проблем в процессе эксплуатации:",
      },
      {
        id: 58,
        description: "Организована служба технической поддержки",
        level: 2,
        completed: false,
      },
      {
        id: 59,
        description:
          "Разработан регламент реагирования на поступающую информацию об уязвимостях",
        level: 2,
        completed: false,
      },
      {
        id: 510,
        description:
          "Организовано обучение специалистов службы технической поддержки работе с поставляемым программным обеспечением, его особенностям установки и функционирования",
        level: 3,
        completed: false,
      },
      {
        id: 511,
        description:
          "Организована работа службы технической поддержки в режиме 24/7 с регламентированным временем обработки запросов пользователей",
        level: 3,
        completed: false,
      },
      {
        id: 512,
        description:
          "Установлены метрики оценки качества оказания технической поддержки",
        level: 3,
        completed: false,
      },
      {
        id: 513,
        description:
          "Проводится оценка качества оказания технической поддержки с использованием метрик качества",
        level: 3,
        completed: false,
      },
      {
        id: 514,
        description:
          "Осуществляется обработка поступающих через службу технической поддержки запросов от пользователей с последующим анализом ошибок функционирования на предмет наличия уязвимостей",
        level: 1,
        completed: false,
      },
      {
        id: 515,
        description:
          "Осуществляется анализ применимости информации о найденных уязвимостях в программном обеспечении на предмет подтверждения наличия/отсутствия уязвимостей",
        level: 1,
        completed: false,
      },
    ],
  },
];
document.addEventListener("DOMContentLoaded", function () {
  const taskTable = document.getElementById("taskTable");
  sections.forEach((section, index) => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    const headerRow = document.createElement("tr");
    const header = document.createElement("th");
    const title = document.createTextNode(section.title);
    header.appendChild(title);
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
        titleText.textContent = task.title;
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
        action.classList.add("actionRow")
        level.classList.add("level")
        level.classList.add(`level-${task.level}`)
        level.innerHTML = task.level;
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.id = "task-" + task.id;
        checkbox.onchange = () => {
          task.completed = checkbox.checked;
        };
        label.appendChild(document.createTextNode(task.description));
        action.appendChild(level);
        action.appendChild(checkbox);
        label.appendChild(action);
        cell.appendChild(label);
        row.appendChild(cell);
        tbody.appendChild(row);
      }
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    // Add class for background color
    // table.classList.add(`section-color-${(index % 6) + 1}`);

    taskTable.appendChild(table);
  });

  function updateTaskUI(taskId, completed) {
    const checkbox = document.getElementById("task-" + taskId);
    if (checkbox) {
      checkbox.checked = completed;
    }
  }

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
});

const resultsDiv = document.getElementById("results");

document.addEventListener("DOMContentLoaded", function () {
  const showResultsBtn = document.getElementById("showResultsBtn");
  const showInfoBtn = document.getElementById("showInfoBtn");
  const downloadResultsBtn = document.getElementById("downloadResultsBtn");
  const resultsDiv = document.getElementById("results");

  showResultsBtn.addEventListener("click", function () {
    resultsDiv.innerHTML = "";
    let totalTasks = 0;
    let completedTasks = 0;
    let totalLevel = 0;
    let sumLevel1 = 0;
    let sumLevel2 = 0;
    let sumLevel3 = 0;
    let sumCompletedLevels = 0;

    sections.forEach((section) => {
        section.tasks.forEach((task) => {
            if (task.description) {
                totalTasks++;
                totalLevel += task.level;
                if (task.completed) {
                    completedTasks++;
                    sumCompletedLevels += task.level;
                }
                if (task.level === 1) sumLevel1 += task.level;
                if (task.level === 2) sumLevel2 += task.level;
                if (task.level === 3) sumLevel3 += task.level;
            }
        });
    });

    const completionRate = (completedTasks / totalTasks) * 100;
    let securityLevel = "";

    const sumLevel1And2 = sumLevel1 + sumLevel2;
    const sumAllLevels = sumLevel1 + sumLevel2 + sumLevel3;

    if (sumCompletedLevels < sumLevel1) {
        securityLevel = "Процессы безопасной разработки не выстроены";
    } else if (sumCompletedLevels >= sumLevel1 && sumCompletedLevels < sumLevel1And2) {
        securityLevel = "Достигнут 1 уровень безопасности программного обеспечения";
    } else if (sumCompletedLevels >= sumLevel1And2 && sumCompletedLevels < sumAllLevels) {
        securityLevel = "Достигнут 2 уровень безопасности программного обеспечения";
    } else if (sumCompletedLevels === sumAllLevels) {
        securityLevel = "Достигнут 3 уровень безопасности программного обеспечения, вы можете претендовать на сертификацию программного обеспечения";
    }

    const result = document.createElement("div");
    result.textContent = `сумма мер: ${sumCompletedLevels}, сумма 1ур: ${sumLevel1}, сумма 2ур: ${sumLevel2}, сумма 3ур: ${sumLevel3} `;
    result.textContent += `${securityLevel} (${completedTasks} из ${totalTasks} мер выполнены)`;
    resultsDiv.appendChild(result);

    resultsDiv.style.display = "block";
    downloadResultsBtn.style.display = "block";
    showInfoBtn.style.display = "block";
  });

  showInfoBtn.addEventListener("click", function () {
    const infoDiv = document.getElementById("info");
    if (infoDiv) {
      infoDiv.innerHTML = "";
    } else {
      const newInfoDiv = document.createElement("div");
      newInfoDiv.id = "info";
      resultsDiv.appendChild(newInfoDiv);
    }
    sections.forEach((section) => {
      const completedTasks = section.tasks.filter(
        (task) => task.completed && task.description
      ).length;
      const totalTasks = section.tasks.filter(
        (task) => task.description
      ).length;
      const sectionInfo = document.createElement("div");
      sectionInfo.textContent = `${section.title}: ${completedTasks} из ${totalTasks} мер выполнены`;
      document.getElementById("info").appendChild(sectionInfo);
    });
  });

  // closeResultsBtn?.addEventListener("click", function () {
  //   resultsDiv.style.display = "none";
  //   closeResultsBtn?.style.display = "none";
  // });
});
