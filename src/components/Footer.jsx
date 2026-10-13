import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-6 h-6 rounded bg-blue-600 text-white font-bold text-xs flex items-center justify-center">
                OF
              </span>
              <span className="font-bold text-slate-900 text-base">OFBO Institución Educativa</span>
            </div>
            <p className="text-sm text-slate-500 max-w-md leading-relaxed">
              Plataforma institucional para la administración integral de estudiantes, oferta académica y control de matrículas semestrales.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500">
              <span className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                <span>Campus Virtual Activo</span>
              </span>
              <span>•</span>
              <span>Atención: Lunes a Viernes 8:00 AM - 6:00 PM</span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
              Módulos del Sistema
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/estudiantes" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Directorio de Estudiantes
                </Link>
              </li>
              <li>
                <Link to="/cursos" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Oferta de Cursos
                </Link>
              </li>
              <li>
                <Link to="/matriculas" className="text-slate-600 hover:text-blue-600 transition-colors">
                  Registro de Matrículas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-3">
              Soporte y Recursos
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                Calendario Académico 2026
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                Reglamento Estudiantil
              </li>
              <li className="hover:text-blue-600 cursor-pointer transition-colors">
                Mesa de Ayuda Institucional
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 OFBO Institución Educativa. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-700 cursor-pointer">Términos de Uso</span>
            <span className="text-slate-300">•</span>
            <span className="hover:text-slate-700 cursor-pointer">Política de Privacidad</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
