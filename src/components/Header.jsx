import { Link } from 'react-router-dom';
import { getLocalStorage } from '../utils/local-storage'

export default function Header() {
  let usuario = getLocalStorage("usuario")
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/estudiantes" className="flex items-center space-x-3 text-slate-900 group">
              <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-xs">
                OF
              </div>
              <div>
                <span className="font-bold text-slate-900 text-lg tracking-tight block leading-tight">
                  OFBO Institución
                </span>
                <span className="text-xs text-slate-500 font-medium block">
                  Portal de Gestión Académica
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-1">
              <Link
                to="/estudiantes"
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
              >
                Estudiantes
              </Link>
              <Link
                to="/cursos"
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
              >
                Cursos
              </Link>
              <Link
                to="/matriculas"
                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
              >
                Matrículas
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-medium text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              <span>Periodo Académico 2026-1</span>
            </div>

            <div className="flex items-center space-x-3 pl-3 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-semibold flex items-center justify-center text-xs border border-blue-200">
                {usuario.avatarIniciales}
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-xs font-semibold text-slate-800 leading-none">{usuario.nombre}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{usuario.rol}</p>
              </div>

              <Link
                to="/login"
                title="Cerrar sesión"
                className="ml-2 p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors text-xs font-medium"
              >
                Salir
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
