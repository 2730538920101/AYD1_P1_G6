from conexion import obtener_conexion

def AgregarContacto(nombre, apellido, telefono, correo):
    conexion = obtener_conexion()
    with conexion.cursor() as cursor:
        cursor.execute("INSERT INTO CONTACTO(nombre, apellido, telefono, correo) VALUES (%s, %s, %s, %s)",
                       (nombre, apellido, telefono, correo))
    conexion.commit()
    conexion.close()

