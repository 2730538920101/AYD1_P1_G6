from conexion import obtener_conexion
import controlador
from flask import Flask, jsonify, request, Response
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/', methods=['GET'])
def index():
    try:
        conexion = obtener_conexion()
        print("CONEXION EXITOSA")
        return jsonify({'AYD1': "Practica 1, AYD1 CONEXION EXITOSA"})
    except:
        print("NO SE PUEDE ESTABLECER LA CONEXION A LA BASE DE DATOS")
        return jsonify({'AYD1': "NO SE PUEDE ESTABLECER LA CONEXION A LA BASE DE DATOS"})

@app.route('/addContact', methods=["POST"])
def addContact():
    info = request.json
    nom = info['nombre']
    ape = info['apellido']
    tel = info['telefono']
    mail = info['correo']
    print(nom, ape, tel, mail)
    controlador.AgregarContacto(nom, ape, tel, mail)
    return jsonify({"respuesta":"SE AGREGO UN CONTACTO EXITOSAMENTE"})

@app.route('/updateContact/<int:IdContacto>', methods=["PUT"])
def updateContact(IdContacto):
    info = request.json
    tel = info['telefono']
    mail = info['correo']
    print(IdContacto, tel, mail)
    controlador.ModificarContacto(IdContacto, tel, mail)
    return jsonify({"respuesta":"SE MODIFICO UN CONTACTO EXITOSAMENTE"})


if __name__ == '__main__':
    print("SERVIDOR INICIADO EN EL PUERTO: 5000")
    
    # serve(app, port=5000)
    app.run(debug=True)