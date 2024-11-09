import bgImage from "@/assets/login-bg.png";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AccessIcon, ArrowRight02Icon, Mail01Icon } from "hugeicons-react";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function LoginPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  function togglePasswordVisible() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <main className="w-full h-screen bg-base-background flex items-center gap-6 p-6">
      <div className="flex-1 flex flex-col">
        <img src={logo} className="w-[267px] mt-4" alt="Marketplace logo" />
        <img
          src={bgImage}
          alt="Image of a box with description of some of marketplace's functionality"
        />
      </div>
      <div className="w-[563px] h-full bg-base-white rounded-3xl py-16 px-20 flex flex-col gap-12">
        <div className="flex flex-col gap-2">
          <h1 className="title-md">Acesse sua conta</h1>
          <h2 className="text-gray-300 font-poppins ">
            Informe seu e-mail e senha para entrar
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          <div className="group">
            <Label
              className="label-md text-gray-300 group-focus-within:text-orange-base"
              htmlFor="email"
            >
              E-mail
            </Label>
            <div className="relative">
              <Mail01Icon className="absolute bottom-2 text-gray-300 group-focus-within:text-orange-base" />
              <Input
                id="email"
                type="email"
                placeholder="Seu e-mail cadastrado"
                className="pl-9 placeholder:body-md"
              />
            </div>
          </div>

          <div className="group">
            <Label
              className="label-md text-gray-300 group-focus-within:text-orange-base"
              htmlFor="password"
            >
              Senha
            </Label>
            <div className="relative">
              <AccessIcon className="absolute bottom-2 text-gray-300 group-focus-within:text-orange-base" />
              <Input
                id="password"
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Sua senha de acesso"
                className="pl-9 placeholder:body-md"
              />
              <div
                onClick={togglePasswordVisible}
                className="absolute bottom-2 right-0 text-gray-300 cursor-pointer"
              >
                {isPasswordVisible ? <Eye /> : <EyeClosed />}
              </div>
            </div>
          </div>
        </div>

        <Button className="flex items-center justify-between">
          Acessar
          <ArrowRight02Icon />
        </Button>

        <div className="mt-auto flex flex-col gap-5">
          <span className="body-md text-gray-300">
            Ainda não tem uma conta?
          </span>
          <Link to={"/register"}>
            <Button
              className="flex items-center justify-between w-full"
              variant={"outline"}
            >
              Cadastrar
              <ArrowRight02Icon />
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}