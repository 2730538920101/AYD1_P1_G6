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
  nombre: z
    .string()
    .min(1, { message: "Campo Obligatorio" })
    .max(25, { message: "El nombre no puede ser mayor a 25 caracteres" }),
  apellido: z
    .string()
    .min(1, { message: "Campo Obligatorio" })
    .max(25, { message: "El nombre no puede ser mayor a 25 caracteres" }),
  telefono: z
    .string()
    .min(1, { message: "Campo Obligatorio" })
    .max(12, { message: "El nombre no puede ser mayor a 12 caracteres" }),
  correo: z
    .string()
    .email({ message: "Formato de correo no valido" })
    .min(1, { message: "Campo Obligatorio" })
    .max(50, { message: "El nombre no puede ser mayor a 50 caracteres" }),
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
      setValue("nombre", contacto.nombre);
      setValue("apellido", contacto.apellido);
      setValue("telefono", contacto.telefono);
      setValue("correo", contacto.correo);
    }
  }, []); //eslint-disable-line

  const onHandleSubmit = async (data) => {
    if (!handleOnSubmit) {
      await fetch(`${SERVER_URL}/addContact`, {
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
                placeholder="Ingrese el nombre"
                {...register("nombre")}
                defaultValue=""
              />
              {!!errors["nombre"] && (
                <Form.Text className="danger">
                  {errors["nombre"].message}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Apelidos"
                {...register("apellido")}
                defaultValue=""
              />
              {!!errors["apellido"] && (
                <Form.Text className="danger">
                  {errors["apellido"].message}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="telefono"
                {...register("telefono")}
                defaultValue=""
              />
              {!!errors["telefono"] && (
                <Form.Text className="danger">
                  {errors["telefono"].message}
                </Form.Text>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="correo"
                {...register("correo")}
                defaultValue=""
              />
              {!!errors["correo"] && (
                <Form.Text className="danger">
                  {errors["correo"].message}
                </Form.Text>
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              {handleOnSubmit == null ? "Crear Contacto" : "Actualizar"}
            </Button>
          </Form>
        </FormProvider>
      </div>
    </div>
  );
}

export default NuevoContacto;
