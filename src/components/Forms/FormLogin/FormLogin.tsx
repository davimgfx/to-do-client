import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../../utils/api';
import { AxiosError } from 'axios';
import { validateForm } from './helper/validateFormLogin';
import { toast } from 'react-toastify';

interface Errors {
  email?: string[];
  password?: string[];
  [key: string]: string[] | undefined;
}

export default function FormLogin() {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});
  const formRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.target as HTMLFormElement);

    const { isValid, validationErrors } = validateForm(data);

    if (!isValid) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    try {
      const response = await api.post('api/v1/auth/login', {
        email: data.get('email'),
        password: data.get('password'),
      });

      const accessToken = response.data.accessToken;
      localStorage.setItem('accessToken', accessToken);
      toast.success('Login realizado com sucesso!');

      if (formRef.current) {
        formRef.current.reset();
      }
      setErrors({});

      navigate('/gerenciadorDeTarefas');
    } catch (error) {
      if (error instanceof AxiosError && error.response) {
        if(error.response.data.errors.default){
          return   toast.error(error.response.data.errors.default);
        }
      
        if (error.response.data.errors) {
          setErrors(error.response.data.errors);
        }
      } else {
        console.error('Unexpected error:', error);
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      className="py-5 px-5 border border-gray-400 flex flex-col w-96 rounded-xl gap-4"
      onSubmit={onSubmit}
      ref={formRef}
    >
      <div className="flex flex-col">
        <h2 className="text-2xl">Bem-vindo de volta</h2>
        <span>Faça login para continuar na sua conta</span>
      </div>

      <div className="flex flex-col">
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          className="bg-gray-200 rounded-xl h-8 px-4"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email[0]}</span>
        )}
      </div>

      <div className="flex flex-col">
        <label htmlFor="password">Senha</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Digite sua senha"
          className="bg-gray-200 rounded-xl h-8 px-4"
        />
        {errors.password && (
          <span className="text-red-500 text-sm">{errors.password[0]}</span>
        )}
        <span className="text-sm mt-2">
          Não tem uma conta?{' '}
          <Link to="/cadastro" className="underline">
            Fazer cadastro
          </Link>
        </span>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-primary rounded-xl text-white cursor-pointer disabled:opacity-50"
        disabled={loading}
      >
        Fazer login
      </button>
    </form>
  );
}
