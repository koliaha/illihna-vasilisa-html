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
        info: "Большой текст...",
      },
      {
        id: 11,
        description: "Перечни прописаны в ТЗ",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 12,
        description:
          "В качестве источника формирования требований взяты: требования законов, нормативных правовых актов, отраслевых стандартов, перечень требований пользователя, сценарии применения программного обеспечения",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 13,
        description:
          "Соблюдена однозначность трактования требований, определяющих свойства безопасности программного обеспечения",
        level: 2,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 14,
        description:
          "Соблюдена взаимная непротиворечивость набора требований, определяющих свойства безопасности программного обеспечения",
        level: 2,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 15,
        description:
          "Соблюдена адекватность требований, определяющих свойства безопасности программного обеспечения",
        level: 2,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 16,
        description:
          "Соблюдена полнота требований, определяющих свойства безопасности программного обеспечения",
        level: 2,
        completed: false,
        info: "Большой текст...",
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
        level: 3,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 21,
        description: "Разработана модель угроз программного обеспечения",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 22,
        description:
          "По результатам моделирования угроз и анализа поверхности атаки приоритизированы и устранены потенциальные уязвимости (угрозы безопасности) с учетом их критичности",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 23,
        description:
          "Разработан и применен в разработке программного обеспечения регламент устранения потенциальных уязвимостей",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 24,
        description: "Выполнено описание поверхности атаки",
        level: 1,
        completed: false,
        info: "Большой текст...",
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
        info: "Большой текст...",
      },
      {
        id: 31,
        description: "Установлена периодичность обучения",
        level: 2,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 32,
        description: "Определены критерии успешности прохождения обучения",
        level: 3,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 33,
        description:
          "Определены навыки, требующиеся для каждого участника разработки",
        level: 2,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 34,
        description:
          "Проводится обучение всех участников команды разработки, задействованных в разработке кода программного обеспечения",
        level: 3,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 35,
        description:
          "Сформировывается отчет об обучении с указанием участников и пройденных программ (курсов) по итогам обучения",
        level: 3,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 36,
        description:
          "Проводится повторное обучение сотрудников в случае получения ими неудовлетворительной оценки по результатам обучения",
        level: 3,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 37,
        description:
          "Сотрудники отстраняются от возможности изменения кода программного обеспечения в случае получения ими неудовлетворительной оценки по результатам обучения",
        level: 3,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 38,
        description:
          "Проводится обучение всех участников команды разработки, задействованных в разработке кода программного обеспечения",
        level: 2,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 39,
        description: "Проводится оценка эффективности программы обучения",
        level: 2,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 310,
        description:
          "Проводится анализ существующих программ обучения с учетом потребностей сотрудников",
        level: 2,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 311,
        description:
          "По результатам проведенного анализа выполняется планирование и организовывается обучение сотрудников",
        level: 2,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 312,
        description:
          "Проводится выборочная проверка качества обучения сотрудников",
        level: 3,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 313,
        description:
          "Определяются критерии пересмотра программ обучения (курсов, тренингов и т.п.)",
        level: 3,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 314,
        description:
          "Осуществляется контроль качества программ обучения (курсов, тренингов и т.п.) независимым аудитором",
        level: 3,
        completed: false,
        info: "Большой текст...",
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
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 316,
        description:
          "Определены инструменты статического анализа и экспертизы исходного кода для каждого используемого в программном обеспечении языка программирования",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 317,
        description:
          "Регистрируются все срабатывания по результатам работы инструментов статического анализа и экспертизы исходного кода программного обеспечения",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 318,
        description:
          "Обрабатываются срабатывания статического анализатора в соответствии с правилами обработки ошибок, установленными в регламентирующих документах организации, с учетом типов и уровней критичности ошибок и особенностей инструментов статического анализа и экспертизы исходного кода программного обеспечения",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 319,
        description:
          "Определены параметры настройки инструментов статического анализа и экспертизы исходного кода программного обеспечения с учетом с рекомендаций подразделения обеспечения безопасности программного обеспечения",
        level: 2,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 320,
        description:
          "Осуществляется пересмотр параметров настройки инструментов статического анализа и экспертизы исходного кода программного обеспечения с установленной периодичностью и при выполнении установленных событий (изменениях в правилах сборки, применяемых статических анализаторах, получении информации о потенциальных уязвимостях и т.п.)",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 321,
        description:
          "Проводится регулярный статический анализ и экспертиза исходного кода программного обеспечения в рамках жизненного цикла программного обеспечения",
        level: 2,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 322,
        description:
          "Осуществляется контроль устранения выявленных потенциальных ошибок",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 323,
        description:
          "Выполняется статический анализ и экспертиза всего исходного кода программного обеспечения",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 324,
        description:
          "Проводится статический анализ и экспертизу исходного кода программного обеспечения всех заимствованных компонентов",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 325,
        description:
          "Проводится статический анализ и экспертиза исходного кода программного обеспечения неизменяемого исходного кода при выполнении установленных событий (изменениях в правилах сборки, применяемых статических анализаторах, получении информации о потенциальных уязвимостях и т.п.)",
        level: 1,
        completed: false,
        info: "Большой текст...",
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
        info: "Большой текст...",
      },
      {
        id: 41,
        description:
          "Выполняются различные виды тестирования, позволяющие протестировать программное обеспечение на уровне модулей, компонентов, подсистем, всего программного обеспечения в целом",
        level: 2,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 42,
        description:
          "При выполнении каждого сценария тестирования фиксируются версии программного обеспечения, номера сборок программного обеспечения и системные требования к тестируемому программному обеспечению",
        level: 2,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 43,
        description:
          "Регистрируется и организовывается процесс исправления ошибок, выявленных в ходе тестирования",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 44,
        description:
          "Регистрируется ход проведения тестирования, при этом регистрируемая информация должна включать, как минимум, дату и время выполнения следующих видов операций: запуск и завершение сценария тестирования, результат выполнения сценария тестирования, изменение конфигурации тестируемого программного обеспечения, возникновение любых сбоев и ошибок",
        level: 3,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 45,
        description:
          "Устанавливаются критерии завершения и остановки тестирования",
        level: 2,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 46,
        description:
          "Разрабатываются отчеты о проведенном тестировании, содержащие, как минимум, описание полученных результатов, перечень обнаруженных и решенных ошибок, вывод по результатам тестирования",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 47,
        description:
          "Осуществляется сбор информации об исследуемом программном обеспечении",
        level: 2,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 48,
        description: "Выполняется анализ утечек чувствительных данных",
        level: 1,
        completed: false,
        info: "Большой текст...",
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
        info: "Большой текст...",
      },
      {
        id: 51,
        description:
          "Обеспечивается защита программного обеспечения от угроз безопасности информации, связанных с нарушением целостности, в процессе его передачи пользователю",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 52,
        description:
          "Фиксируются версии поставляемого пользователям программного обеспечения",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 53,
        description:
          "Организовывается хранение поставляемого пользователям программного обеспечения в неизменяемом виде",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 54,
        description:
          "Определен порядок снятия копий для поставляемого пользователям программного обеспечения",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 56,
        description:
          "Определен метод доставки программного обеспечения (обновлений программного обеспечения, включая обновления безопасности)",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 57,
        description:
          "Организовывается оповещение пользователей о выпуске обновлений (включая обновления безопасности) и необходимости их установки",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 512,
        title: "Решение проблем в процессе эксплуатации:",
      },
      {
        id: 58,
        description: "Организована служба технической поддержки",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 59,
        description:
          "Разработан регламент реагирования на поступающую информацию об уязвимостях",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 510,
        description:
          "Организовано обучение специалистов службы технической поддержки работе с поставляемым программным обеспечением, его особенностям установки и функционирования",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 511,
        description:
          "Организована работа службы технической поддержки в режиме 24/7 с регламентированным временем обработки запросов пользователей",
        level: 3,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 512,
        description:
          "Установлены метрики оценки качества оказания технической поддержки",
        level: 3,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 513,
        description:
          "Проводится оценка качества оказания технической поддержки с использованием метрик качества",
        level: 3,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 514,
        description:
          "Осуществляется обработка поступающих через службу технической поддержки запросов от пользователей с последующим анализом ошибок функционирования на предмет наличия уязвимостей",
        level: 1,
        completed: false,
        info: "Большой текст...",
      },
      {
        id: 515,
        description:
          "Осуществляется анализ применимости информации о найденных уязвимостях в программном обеспечении на предмет подтверждения наличия/отсутствия уязвимостей",
        level: 1,
        completed: false,
        info: "Большой текст...",
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
        revealBtn.onclick = () => {
          const descriptionDiv = document.getElementById("desc-" + task.id);
          descriptionDiv.classList.toggle("open");
          revealBtn.innerHTML = descriptionDiv.classList.contains("open") ? closeSvg : questionSvg;
        };

        const descriptionDiv = document.createElement("div");
        descriptionDiv.className = "description";
        descriptionDiv.id = "desc-" + task.id;
        descriptionDiv.textContent = task.info;

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
  closeResultsBtn?.addEventListener("click", function () {
    infoDiv.classList.remove("displaySec");
    resultsDiv.classList.remove("displaySec");
    showInfoBtn.classList.toggle("displaySec");
    closeResultsBtn.classList.remove("displaySec");
  });
});
