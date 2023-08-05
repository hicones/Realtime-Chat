"use client";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { signupSchema } from "@/lib/yup/schemas";
import { SigninCreadentials, SignupCreadentials } from "@/types/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupCreadentials>({
    resolver: yupResolver(signupSchema),
  });

  const onSubmit = (data: SignupCreadentials) => {
    console.log(data);
  };

  return (
    <>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="mt-2">
            <Input
              type="text"
              label="Usuário"
              errorMessage={errors.user?.message}
              placeholder={
                errors.user?.message
                  ? errors.user.message
                  : "Insira seu usuário aqui"
              }
              register={register("user")}
              isError={errors.user ? true : false}
            />
          </div>
        </div>
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
          <Button size="100%">Registrar</Button>
        </div>
      </form>

      <div>
        <div className="relative mt-10">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm font-medium leading-6">
            <span className="bg-slate-900 px-6 text-gray-200">
              Ou registre-se com
            </span>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <a
            href="#"
            className="flex h-12 w-full items-center justify-center gap-3 rounded bg-[#1877f2] px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
            <span className="text-sm font-semibold leading-6">Facebook</span>
          </a>

          <a
            href="#"
            className="flex h-12 w-full items-center justify-center gap-3 rounded bg-red-600 px-3 py-1.5 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#24292F]"
          >
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="w-5 h-5"
              viewBox="0 0 1792 1792"
            >
              <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z"></path>
            </svg>
            <span className="text-sm font-semibold leading-6">Google</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
