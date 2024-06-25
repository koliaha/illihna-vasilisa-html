import re
import json

# Путь к исходному файлу data.json
input_file_path = './data.json'
# Путь к выходному файлу formatted_data.json
output_file_path = './formatted_data.json'

# Загрузка данных из файла data.json
with open(input_file_path, 'r', encoding='utf-8') as file:
    data = file.read()

# Преобразование строки данных в корректный JSON формат
data = re.sub(r'`', '"', data)  # Замена шаблонных строк на двойные кавычки
data = re.sub(r'\\"', r'\\\\', data)  # Экранирование обратных слэшей
data = re.sub(r'\\n', r'\\\\n', data)  # Экранирование переносов строк
data = re.sub(r'\\r', r'\\\\r', data)  # Экранирование возвратов каретки

# Удаление невалидных символов для JSON
data = re.sub(r'[\x00-\x1f]', '', data)

# Преобразование в JSON объект
try:
    data_json = json.loads(data)
except json.JSONDecodeError as e:
    print(f"Ошибка декодирования JSON: {e}")
    exit(1)

# Сохранение преобразованного JSON в новый файл
with open(output_file_path, 'w', encoding='utf-8') as file:
    json.dump(data_json, file, ensure_ascii=False, indent=2)

print(f"Файл преобразован и сохранен в {output_file_path}")
