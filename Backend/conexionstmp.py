import smtplib 
from email.message import EmailMessage
def enviarCorreoG(remitente: str, destinatario: str, mensaje: str):
    remitente_dominio = remitente.split("@")
    destinatario_dominio = destinatario.split("@")
    if remitente_dominio[1] == "gmail.com" and destinatario_dominio[1] == "gmail.com":
        email = EmailMessage()
        email["From"] = remitente
        email["To"] = destinatario
        email["Subject"] = "Correo de prueba"
        email.set_content(mensaje)
        smtp = smtplib.SMTP_SSL("smtp.gmail.com")
        smtp.login(remitente, "oaqbizenjqtuxobv")
        smtp.sendmail(remitente, destinatario, email.as_string())
        smtp.quit()
        response_js = True 
    else:
        response_js = False
    return response_js