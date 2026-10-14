import { Link, useNavigate } from 'react-router-dom';
import { ADMINS } from '../../data/admins'
import { useState } from 'react';
import { setLocalStorage } from '../../utils/local-storage';
import { token } from '../../utils/generators';

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const redirect = useNavigate()
  function buscarUsuario() {
    let auth = ADMINS.find((item) => email == item.email && password == item.password)
    return auth
  }
  function iniciarSesion(e) {
    e.preventDefault()
    if (buscarUsuario()) {
      setLocalStorage("usuario", buscarUsuario())
      setLocalStorage("token", token())
      redirect("/estudiantes")
    } else {
      redirect("/login")
    }
  }
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white font-bold text-xl shadow-xs mb-3">
          OF
        </div>
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          OFBO Institución Educativa
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Acceso al sistema de gestión académica
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-white py-8 px-6 sm:px-10 rounded-2xl border border-slate-200 shadow-2xs">
          <form onSubmit={(e) => iniciarSesion(e)} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                Correo Electrónico Institucional
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="usuario@ofbo.edu.co"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Contraseña
                </label>
                <span className="text-xs text-blue-600 hover:text-blue-700 cursor-pointer">
                  ¿Olvidó su contraseña?
                </span>
              </div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••••••"
                className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg text-slate-900 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-xs text-slate-600 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-slate-300 text-blue-600 focus:ring-0"
                />
                <span>Recordar sesión</span>
              </label>
              <span className="text-xs text-slate-400">Periodo 2026-1</span>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center py-2.5 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-xs transition-colors"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>

        <div className="text-center text-xs text-slate-400 mt-6">
          © 2026 OFBO Institución Educativa • Todos los derechos reservados
        </div>
      </div>
    </div>
  );
}
