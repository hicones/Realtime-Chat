/* eslint-disable @next/next/no-img-element */
"use client";
import { usePathname, useRouter } from "next/navigation";
import { BsChatRightHeart } from "react-icons/bs";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const PageName = (pathname: string) => {
    switch (pathname) {
      case "/auth/signin":
        return "Faça Login";

      case "/auth/signup":
        return "Criar Conta";

      case "/auth/forgot":
        return "Esqueci minha senha";

      case "/auth/reset":
        return "Redefinir senha";
    }
  };

  const MoveToSign = () => {
    if (pathname === "/auth/signin") {
      router.push("/auth/signup");
    } else {
      router.push("/auth/signin");
    }
  };

  return (
    <main className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex px-6 md:px-0">
        <BsChatRightHeart size={32} className="text-indigo-600" />
        <h2 className="mx-4 text-2xl font-bold leading-9 tracking-tight text-gray-200">
          {PageName(pathname)}
        </h2>
      </div>
      <div className="md:mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className=" px-6 py-12 shadow sm:rounded sm:px-12 md:border-2 md:border-gray-600">
          {children}
        </div>

        <p className="md:mt-10 text-center text-sm text-gray-500">
          {pathname === "/auth/signin"
            ? "É novo na plataforma?"
            : pathname === "/auth/signup"
            ? "Já possui conta?"
            : ""}{" "}
          <span
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer transition"
            onClick={() => MoveToSign()}
          >
            {pathname === "/auth/signin"
              ? "Criar conta?"
              : pathname === "/auth/signup"
              ? "Entrar"
              : "Voltar"}{" "}
          </span>
        </p>
      </div>
    </main>
  );
}
