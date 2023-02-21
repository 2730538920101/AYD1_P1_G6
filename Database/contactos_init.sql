CREATE TABLE IF NOT EXISTS CONTACTO
 (
 IdContacto int  primary key not null auto_increment,
 Nombre varchar (25),
 Apellido Varchar (25),
 Telefono Varchar (12),
 Correo varchar (50)
 );

CREATE TABLE IF NOT EXISTS FAVORITO
(
IdFavorito int not null,
FOREIGN KEY(IdFavorito) REFERENCES CONTACTO(IdContacto)
ON DELETE CASCADE ON UPDATE CASCADE
);

SELECT * from CONTACTO;