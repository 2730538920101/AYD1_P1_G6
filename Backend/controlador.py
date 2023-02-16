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

def EliminarContacto(id):
    conexion = obtener_conexion()
    with conexion.cursor() as cursor:
        cursor.execute("DELETE FROM CONTACTO WHERE IdContacto = %s", (id,))
    conexion.commit()
    conexion.close()

def VerContactos():
    conexion = obtener_conexion()
    contactos = []
    with conexion.cursor() as cursor:
        cursor.execute("SELECT * FROM CONTACTO")
        contactos = cursor.fetchall()
    conexion.close()
    return contactos

def BuscarContacto(mail):
    conexion = obtener_conexion()
    contacto = None
    with conexion.cursor() as cursor:
        cursor.execute(
            "SELECT Nombre, Apellido, Telefono, Correo FROM CONTACTO WHERE Correo = %s", (mail,))
        contacto = cursor.fetchone()
    conexion.close()
    return contacto

def AgregarFavorito(id_contacto):
    conexion = obtener_conexion()
    with conexion.cursor() as cursor:
        cursor.execute("INSERT INTO FAVORITO(IdFavorito) VALUES (%s)", (id_contacto,))
    conexion.commit()
    conexion.close()