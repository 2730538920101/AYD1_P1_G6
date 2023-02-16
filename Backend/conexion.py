import mysql.connector


def obtener_conexion():
    return mysql.connector.connect(host='localhost',
                                user='practica1',
                                password='practica1',
                                db='contactos_db',
                                port='3307')
