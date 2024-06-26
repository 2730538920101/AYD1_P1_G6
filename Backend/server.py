from conexion import obtener_conexion
import controlador, conexionstmp
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

@app.route('/deleteContact/<int:IdContacto>', methods=["DELETE"])
def deleteContact(IdContacto):
    print(IdContacto)
    controlador.EliminarContacto(IdContacto)
    return jsonify({"respuesta":"SE ELIMINO UN CONTACTO EXITOSAMENTE"})

@app.route('/showContacts', methods=["GET"])
def showContacts():
    contactos = controlador.VerContactos()
    return jsonify({"respuesta":contactos})

@app.route('/searchContact/<mail>', methods=['GET'])
def searchContact(mail):
    print(mail)
    contacto = controlador.BuscarContacto(mail)
    return jsonify({"respuesta":contacto})

@app.route('/deleteFavorite/<int:IdContacto>', methods=["DELETE"])
def EliminarFavorito(IdContacto):
    controlador.EliminarFavorito(IdContacto)
    return jsonify({"respuesta":"EL CONTACTO HA SIDO ELIMINADO DE FAVORITOS EXITOSAMENTE"})

@app.route('/addFavorite', methods=["POST"])
def addFavorite():
    info = request.json
    id_contacto = info['id_contacto']
    controlador.AgregarFavorito(id_contacto)
    return jsonify({"respuesta":"EL CONTACTO HA SIDO INGRESADO A FAVORITOS EXITOSAMENTE"})

@app.route('/showFavorites', methods=["GET"])
def showFavorites():
    favoritos = controlador.VerFavoritos()
    return jsonify({"respuesta":favoritos})


@app.route('/sendEmail', methods=["GET"])
def sendEmail():
    email_data = request.json
    remitente = email_data["remitente"]
    destinatario = email_data["receptor"]
    mensaje = email_data["mensaje"]
    response_js = conexionstmp.enviarCorreoG(remitente, destinatario, mensaje)
    return jsonify({"response_js":response_js})




if __name__ == '__main__':
    print("SERVIDOR INICIADO EN EL PUERTO: 5000")
    
    # serve(app, port=5000)
    app.run(debug=True)