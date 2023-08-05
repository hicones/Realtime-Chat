"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { forgotSchema } from "@/lib/yup/schemas";
import { ForgotPasswordCreadentials } from "@/types/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const ForgotPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordCreadentials>({
    resolver: yupResolver(forgotSchema),
  });

  const onSubmit = (data: ForgotPasswordCreadentials) => {
    console.log(data);
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="mt-2">
            <Input
              type="text"
              label="E-mail"
              errorMessage={errors.email?.message}
              placeholder={
                errors.email?.message
                  ? errors.email.message
                  : "Insira seu email aqui"
              }
              register={register("email")}
              isError={errors.email ? true : false}
            />
          </div>
        </div>

        <div>
          <Button size="100%">Enviar</Button>
        </div>
      </form>
    </>
  );
};

export default ForgotPage;
