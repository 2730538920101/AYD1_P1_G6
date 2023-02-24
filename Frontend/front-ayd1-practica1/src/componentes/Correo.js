import { useEffect } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import styles from "../App.css";

const SERVER_URL = "http://localhost:5000";

const registerSchema = z.object({
  remitente: z
    .string()
    .email({ message: "Formato de correo no valido" })
    .min(1, { message: "Campo Obligatorio" }),
  receptor: z
    .string()
    .email({ message: "Formato de correo no valido" })
    .min(1, { message: "Campo Obligatorio" }),
  mensaje: z
    .string()
    .min(1, { message: "Campo Obligatorio" })
    .max(70, { message: "El mensaje no puede ser mayor a 70 caracteres" }),
});

function NuevoContacto({ contacto = null, handleOnSubmit = null }) {
  const methods = useForm({
    resolver: zodResolver(registerSchema),
  });

  const {
    reset,
    handleSubmit,
    setValue,
    register,
    formState: { isSubmitSuccessful, errors },
  } = methods;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSubmitSuccessful]);

  useEffect(() => {
    if (contacto != null) {
      setValue("remitente", contacto.remitente);
      setValue("receptor", contacto.receptor);
      setValue("mensaje", contacto.mensaje);
    }
  }, []); //eslint-disable-line

  const onHandleSubmit = async (data) => {
    if (!handleOnSubmit) {
      await fetch(`${SERVER_URL}/sendEmail`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {

      handleOnSubmit(data) 
    }
  };
  return (
    <div className={"form_container"}>
      <div className="form_elements">
        <FormProvider {...methods}>
          <Form onSubmit={handleSubmit(onHandleSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Ingrese el correo del remitente"
                {...register("remitente")}
                defaultValue=""
              />
              {!!errors["remitente"] && (
                <Form.Text className="danger">
                  {errors["remitente"].message}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Ingrese el correo del receptor"
                {...register("receptor")}
                defaultValue=""
              />
              {!!errors["receptor"] && (
                <Form.Text className="danger">
                  {errors["receptor"].message}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Ingrese el mensaje a enviar"
                {...register("mensaje")}
                defaultValue=""
              />
              {!!errors["mensaje"] && (
                <Form.Text className="danger">
                  {errors["mensaje"].message}
                </Form.Text>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              {handleOnSubmit == null ? "Enviar Correo" : "Actualizar"}
            </Button>
          </Form>
        </FormProvider>
      </div>
    </div>
  );
}

export default NuevoContacto;