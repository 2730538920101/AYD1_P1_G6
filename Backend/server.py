from flask import Flask, jsonify, request, Response
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/', methods=['GET'])
def index():
    return jsonify({'AYD1': "Practica 1, AYD1"})


if __name__ == '__main__':
    print("SERVIDOR INICIADO EN EL PUERTO: 5000")
    # serve(app, port=5000)
    app.run(debug=True)