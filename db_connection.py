import sqlite3

db = sqlite3.connect('movies.db')
cursor = db.cursor()
cursor.execute('SELECT * FROM movies')
for row in cursor:
    print('{0} {1} {2}'.format(row[1], row[2], row[3]))
db.close()