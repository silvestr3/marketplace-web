import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AccessIcon,
  ArrowRight02Icon,
  CallIcon,
  ImageUploadIcon,
  Mail01Icon,
  UserIcon,
} from "hugeicons-react";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function RegisterPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  function togglePasswordVisible() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="title-md">Crie sua conta</h1>
        <h2 className="text-gray-300 font-poppins ">
          Informe os seus dados pessoais e de acesso
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="title-sm">Perfil</h3>

        <div className=" w-[120px] h-[120px] rounded-md bg-base-shape">
          <Label
            htmlFor="image-upload"
            className="w-full h-full flex items-center justify-center cursor-pointer"
          >
            <ImageUploadIcon
              width={29}
              height={29}
              className="text-orange-base"
            />
          </Label>
          <Input type="file" id="image-upload" className="hidden " />
        </div>

        <div className="group">
          <Label
            className="label-md text-gray-300 group-focus-within:text-orange-base"
            htmlFor="name"
          >
            Nome
          </Label>
          <div className="relative">
            <UserIcon className="absolute bottom-2 text-gray-300 group-focus-within:text-orange-base" />
            <Input
              id="name"
              type="name"
              placeholder="Seu nome completo"
              className="pl-9 body-md placeholder:body-md"
            />
          </div>
        </div>

        <div className="group">
          <Label
            className="label-md text-gray-300 group-focus-within:text-orange-base"
            htmlFor="name"
          >
            Telefone
          </Label>
          <div className="relative">
            <CallIcon className="absolute bottom-2 text-gray-300 group-focus-within:text-orange-base" />
            <Input
              id="name"
              type="name"
              placeholder="(00) 00000-0000"
              className="pl-9 body-md placeholder:body-md"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="title-sm">Acesso</h3>
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
              placeholder="Seu e-mail de acesso"
              className="pl-9 body-md placeholder:body-md"
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
              placeholder="Senha de acesso"
              className="pl-9 body-md placeholder:body-md"
            />
            <div
              onClick={togglePasswordVisible}
              className="absolute bottom-2 right-0 text-gray-300 cursor-pointer"
            >
              {isPasswordVisible ? <Eye /> : <EyeClosed />}
            </div>
          </div>
        </div>

        <div className="group">
          <Label
            className="label-md text-gray-300 group-focus-within:text-orange-base"
            htmlFor="password"
          >
            Confirmar senha
          </Label>
          <div className="relative">
            <AccessIcon className="absolute bottom-2 text-gray-300 group-focus-within:text-orange-base" />
            <Input
              id="password"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Confirme a senha"
              className="pl-9 body-md placeholder:body-md"
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

      <div>
        <Button className="flex items-center justify-between w-full">
          Cadastrar
          <ArrowRight02Icon />
        </Button>
      </div>

      <div className="mt-20 flex flex-col gap-5">
        <span className="body-md text-gray-300">Já tem uma conta?</span>
        <Link to={"/auth/login"}>
          <Button
            size="default"
            className="flex items-center justify-between w-full"
            variant={"outline"}
          >
            Acessar
            <ArrowRight02Icon />
          </Button>
        </Link>
      </div>
    </>
  );
}
