import { Link } from 'react-router-dom';

export default function CoursesCreate() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-2 text-xs text-slate-500">
        <Link to="/cursos" className="hover:text-blue-600 transition-colors">Cursos</Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">Nuevo Curso</span>
      </div>

      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Crear Nuevo Curso</h1>
          <p className="text-sm text-slate-500 mt-1">
            Definición curricular, requisitos de aula y asignación docente.
          </p>
        </div>
        <Link
          to="/cursos"
          className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
        >
          Volver a cursos
        </Link>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2">
            1. Información General del Curso
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Código de Asignatura
              </label>
              <input
                type="text"
                placeholder="Ej. SIS-301"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Título del Curso
              </label>
              <input
                type="text"
                placeholder="Ej. Desarrollo Web Full Stack con Node.js y React"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-3">
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Descripción Curricular
              </label>
              <textarea
                rows={3}
                placeholder="Descripción detallada de los objetivos pedagógicos y competencias a desarrollar..."
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Departamento Académico
              </label>
              <select
                defaultValue="Ingeniería de Software"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="Ingeniería de Software">Ingeniería de Software</option>
                <option value="Inteligencia Artificial">Inteligencia Artificial</option>
                <option value="Diseño Digital">Diseño Digital</option>
                <option value="Ciberseguridad">Ciberseguridad</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Modalidad
              </label>
              <select
                defaultValue="Virtual"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="Virtual">Virtual</option>
                <option value="Híbrida">Híbrida</option>
                <option value="Presencial">Presencial</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Estado del Curso
              </label>
              <select
                defaultValue="Abierto"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="Abierto">Abierto</option>
                <option value="Cerrado">Cerrado</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2">
            2. Horas, Créditos, Capacidad e Inversión
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Duración (Horas)
              </label>
              <input
                type="number"
                placeholder="Ej. 80"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Créditos
              </label>
              <input
                type="number"
                placeholder="Ej. 4"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Cupo Máximo
              </label>
              <input
                type="number"
                placeholder="Ej. 25"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Precio (COP)
              </label>
              <input
                type="number"
                placeholder="Ej. 450000"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div className="md:col-span-4">
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Horario de Clases
              </label>
              <input
                type="text"
                placeholder="Ej. Martes y Jueves 18:00 - 20:00"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2">
            3. Docente Asignado
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Nombre del Docente / Instructor
              </label>
              <input
                type="text"
                placeholder="Ej. Ing. Fernando Herrera"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Correo Electrónico del Docente
              </label>
              <input
                type="email"
                placeholder="docente@universidad.edu.co"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 pt-2">
          <Link
            to="/cursos"
            className="px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
          >
            Cancelar
          </Link>
          <button
            type="submit"
            className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
          >
            Crear Curso
          </button>
        </div>
      </form>
    </div>
  );
}
