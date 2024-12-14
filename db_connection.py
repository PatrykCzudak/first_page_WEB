import sqlite3

def get_data_from_db(title:str) -> None:
    title = f"%{title}%"
    db = sqlite3.connect('movies.db')
    cursor = db.cursor()
    cursor.execute("SELECT * FROM movies WHERE title LIKE ?", (title,))
    for row in cursor:
        print('{0} {1} {2}'.format(row[1], row[2], row[3]))
    db.close()


print(get_data_from_db("a"))
