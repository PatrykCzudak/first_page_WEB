from flask import Flask, request

app = Flask(__name__)

@app.route('/')
def calculate():
    return None

if __name__ == '__main__':
    app.run(debug=True)