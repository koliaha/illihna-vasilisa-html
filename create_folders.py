import os
import json
import re

# Путь к файлу formatted_data.json
data_file_path = './formatted_data.json'

# Загрузка данных из файла formatted_data.json
with open(data_file_path, 'r', encoding='utf-8') as file:
    data = json.load(file)

# Путь, где будут создаваться папки
base_path = './pro'

# Функция для извлечения текста из HTML тега
def extract_text_from_html(html):
    return re.sub(r'<.*?>', '', html)

# Функция для создания папки
def create_folder(path):
    if not os.path.exists(path):
        os.makedirs(path)
        print(f"Папка '{path}' создана.")
    else:
        print(f"Папка '{path}' уже существует.")

# Функция для очистки имен папок от недопустимых символов и их сокращения
def clean_and_shorten_folder_name(name, max_length=100):
    # Удаление недопустимых символов
    name = re.sub(r'[<>:"/\\|?*]', '', name)
    # Сокращение имени, если оно слишком длинное
    if len(name) > max_length:
        return name[:max_length].rstrip() + '...'
    return name

# Создание папок на основе title и вложенных папок из tasks
for item in data:
    title = extract_text_from_html(item['title'])
    folder_path = os.path.join(base_path, clean_and_shorten_folder_name(title))
    create_folder(folder_path)

    # Создание вложенных папок из поля tasks
    for task in item.get('tasks', []):
        description = task.get('description', '')
        task_folder_name = extract_text_from_html(description)
        task_folder_path = os.path.join(folder_path, clean_and_shorten_folder_name(task_folder_name))
        create_folder(task_folder_path)

# Команда для запуска
if __name__ == "__main__":
    print("Скрипт завершил выполнение.")
