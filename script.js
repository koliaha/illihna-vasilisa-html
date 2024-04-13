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
  {
    id: 3,
    title: "Раздел 3",
    tasks: [
      { id: 34, description: "Задача 34", completed: false },
      { id: 31, description: "Задача 1234", completed: false },
      { id: 32, description: "Задача 1234", completed: false },
      { id: 33, description: "1234", completed: false },
      { id: 34, description: "Задаdqча 4", completed: false },
      { id: 35, description: "Задача dasd5", completed: false },
    ],
  },
  {
    id: 4,
    title: "Раздел 4",
    tasks: [{ id: 6, description: "Задача 6", completed: false }],
  },
  {
    id: 5,
    title: "Раздел 5",
    tasks: [
      { id: 7, description: "Задача 7", completed: false },
      { id: 8, description: "Задача 8", completed: false },
    ],
  },
  {
    id: 6,
    title: "Раздел 6",
    tasks: [{ id: 9, description: "Задача 9", completed: false }],
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

  sections.forEach((section) => {
    const result = document.createElement("div");
    const completedTasks = section.tasks.filter(
      (task) => task.completed
    ).length;
    result.textContent = `${section.title}: ${completedTasks} из ${section.tasks.length} задач выполнены`;
    resultsDiv.appendChild(result);
  });
}
