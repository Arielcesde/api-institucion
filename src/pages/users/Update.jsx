import { Link } from 'react-router-dom';

export default function UsersUpdate() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-2 text-xs text-slate-500">
        <Link to="/estudiantes" className="hover:text-blue-600 transition-colors">Estudiantes</Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">Editar Estudiante #1</span>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-700 font-bold text-xl flex items-center justify-center border border-blue-200">
            CM
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl font-bold text-slate-900">Carlos Andrés Mendoza Gómez</h1>
              <span className="px-2 py-0.5 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Activo
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono mt-0.5">
              Código Estudiantil: EST-001 • Documento: CC 1024589632
            </p>
          </div>
        </div>

        <Link
          to="/estudiantes"
          className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors self-start sm:self-center"
        >
          Volver a la lista
        </Link>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2">
            1. Datos de Identificación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Tipo de Documento
              </label>
              <select
                defaultValue="CC"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="CC">Cédula de Ciudadanía (CC)</option>
                <option value="CE">Cédula de Extranjería (CE)</option>
                <option value="TI">Tarjeta de Identidad (TI)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Número de Documento
              </label>
              <input
                type="text"
                defaultValue="1024589632"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Nombres
              </label>
              <input
                type="text"
                defaultValue="Carlos Andrés"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Apellidos
              </label>
              <input
                type="text"
                defaultValue="Mendoza Gómez"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Fecha de Nacimiento
              </label>
              <input
                type="date"
                defaultValue="2001-05-14"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Género
              </label>
              <select
                defaultValue="Masculino"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="Masculino">Masculino</option>
                <option value="Femenino">Femenino</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2">
            2. Contacto y Localización
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Correo Electrónico
              </label>
              <input
                type="email"
                defaultValue="carlos.mendoza@universidad.edu.co"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Teléfono de Contacto
              </label>
              <input
                type="tel"
                defaultValue="+57 311 458 9621"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Ciudad
              </label>
              <select
                defaultValue="Bogotá"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="Bogotá">Bogotá</option>
                <option value="Medellín">Medellín</option>
                <option value="Cali">Cali</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Dirección Residencial
              </label>
              <input
                type="text"
                defaultValue="Cra. 15 # 85-30 Apt. 402"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2">
            3. Registro Académico
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Carrera
              </label>
              <select
                defaultValue="Ingeniería de Sistemas"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="Ingeniería de Sistemas">Ingeniería de Sistemas</option>
                <option value="Ciencia de Datos">Ciencia de Datos</option>
                <option value="Diseño Digital y Multimedia">Diseño Digital y Multimedia</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Semestre
              </label>
              <select
                defaultValue="5"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="3">Semestre 3</option>
                <option value="4">Semestre 4</option>
                <option value="5">Semestre 5</option>
                <option value="6">Semestre 6</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Estado
              </label>
              <select
                defaultValue="Activo"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            className="px-4 py-2 text-sm font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg hover:bg-rose-100 transition-colors"
          >
            Dar de Baja Estudiante
          </button>

          <div className="flex items-center space-x-3">
            <Link
              to="/estudiantes"
              className="px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
            >
              Actualizar Datos
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
