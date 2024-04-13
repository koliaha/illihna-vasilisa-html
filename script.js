document.addEventListener("DOMContentLoaded", function () {
  const sections = [
    {
      id: 1,
      title: "Раздел 1",
      tasks: [
        { id: 1, description: "Задача 1", completed: false },
        { id: 2, description: "Задача 2", completed: false },
      ],
    },
    {
      id: 2,
      title: "Раздел 2",
      tasks: [{ id: 3, description: "Задача 3", completed: false }],
    },
    // Добавить остальные разделы по аналогии
  ];

  const taskTable = document.getElementById("taskTable");
  sections.forEach((section) => {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    // Заголовок
    const headerRow = document.createElement("tr");
    const header = document.createElement("th");
    header.textContent = section.title;
    headerRow.appendChild(header);
    thead.appendChild(headerRow);

    // Задачи
    section.tasks.forEach((task) => {
      const row = document.createElement("tr");
      const cell = document.createElement("td");
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

function showResults() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Очистить предыдущие результаты

  const sections = [
    // Повторите структуру секций здесь или найдите способ использовать общие данные
  ];

  sections.forEach((section) => {
    const result = document.createElement("div");
    const completedTasks = section.tasks.filter(
      (task) => task.completed
    ).length;
    result.textContent = `${section.title}: ${completedTasks} из ${section.tasks.length} задач выполнены`;
    resultsDiv.appendChild(result);
  });
}
