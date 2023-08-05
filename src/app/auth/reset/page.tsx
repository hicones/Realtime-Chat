"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { resetSchema } from "@/lib/yup/schemas";
import { ResetPasswordCreadentials } from "@/types/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const ResetPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordCreadentials>({
    resolver: yupResolver(resetSchema),
  });

  const onSubmit = (data: ResetPasswordCreadentials) => {
    console.log(data);
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="mt-2">
            <Input
              type="password"
              label="Senha"
              errorMessage={errors.password?.message}
              placeholder={
                errors.password?.message
                  ? errors.password.message
                  : "Digite sua senha"
              }
              register={register("password")}
              isError={errors.password ? true : false}
            />
          </div>
        </div>
        <div>
          <div className="mt-2">
            <Input
              type="password"
              label="Confirme a Senha"
              errorMessage={errors.confirmPassword?.message}
              placeholder={
                errors.confirmPassword?.message
                  ? errors.confirmPassword.message
                  : "Digite sua senha"
              }
              register={register("confirmPassword")}
              isError={errors.confirmPassword ? true : false}
            />
          </div>
        </div>

        <div className="flex w-full">
          <Button size="100%">Enviar</Button>
        </div>
      </form>
    </>
  );
};

export default ResetPasswordPage;
