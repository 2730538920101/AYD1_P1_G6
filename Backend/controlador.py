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
        cursor.execute("SELECT c.IdContacto, c.Nombre, c.Apellido, c.Telefono, c.Correo, CASE WHEN f.IdFavorito IS NULL THEN 0 ELSE 1 END AS isFavorito FROM CONTACTO c LEFT JOIN FAVORITO f ON c.IdContacto = f.IdFavorito")
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

def EliminarFavorito(id):
    conexion = obtener_conexion()
    with conexion.cursor() as cursor:
        cursor.execute("DELETE FROM FAVORITO WHERE IdFavorito = %s", (id,))
    conexion.commit()
    conexion.close()

def VerFavoritos():
    conexion = obtener_conexion()
    contactos = []
    with conexion.cursor() as cursor:
        cursor.execute("select * from CONTACTO inner join FAVORITO F on CONTACTO.IdContacto = F.IdFavorito")
        contactos = cursor.fetchall()
    conexion.close()
    return contactos