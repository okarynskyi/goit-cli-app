# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"

https://monosnap.com/file/JZHWmM8JaXAx2pjd2cXIz0plHTgRyO

# Отримуємо контакт по id

node index.js --action="get" --id=5
https://monosnap.com/file/wB0ySXA4NtYjfZcw8yfC6DXhfktNch

# Додаємо контакт

node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
https://monosnap.com/file/mjw4TpWFI7GGPPYBG8rwvMuhWXASBl

# Видаляємо контакт

node index.js --action="remove" --id=3
https://monosnap.com/file/E0tFXApXPwhygIuttnpBb9PWYbygPM
