from conexion import obtener_conexion

def AgregarContacto(nombre, apellido, telefono, correo):
    conexion = obtener_conexion()
    with conexion.cursor() as cursor:
        cursor.execute("INSERT INTO CONTACTO(Nombre, Apellido, Telefono, Correo) VALUES (%s, %s, %s, %s)",
                       (nombre, apellido, telefono, correo))
    conexion.commit()
    conexion.close()

def ModificarContacto(id, telefono, correo):
    conexion = obtener_conexion()
    with conexion.cursor() as cursor:
        cursor.execute("UPDATE CONTACTO SET Telefono = %s, Correo = %s WHERE IdContacto = %s",
                       (telefono, correo, id))
    conexion.commit()
    conexion.close()