import { Link } from 'react-router-dom';

export default function EnrollmentsUpdate() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-2 text-xs text-slate-500">
        <Link to="/matriculas" className="hover:text-blue-600 transition-colors">Matrículas</Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">Editar MAT-20261-001</span>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 text-xs font-mono font-bold bg-slate-100 text-slate-800 rounded border border-slate-200">
              MAT-20261-001
            </span>
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              Aprobado
            </span>
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              Finalizada
            </span>
          </div>
          <h1 className="text-xl font-bold text-slate-900 mt-2">
            Carlos Andrés Mendoza Gómez
          </h1>
          <p className="text-xs text-slate-500 mt-0.5">
            Curso: SIS-301 Desarrollo Web Full Stack • Periodo 2026-1
          </p>
        </div>

        <Link
          to="/matriculas"
          className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors self-start sm:self-center"
        >
          Volver a matrículas
        </Link>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2">
            1. Asignación Académica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Código de Matrícula
              </label>
              <input
                type="text"
                defaultValue="MAT-20261-001"
                readOnly
                className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-300 rounded-lg text-slate-600 font-mono focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Periodo Académico
              </label>
              <select
                defaultValue="2026-1"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="2026-1">2026-1</option>
                <option value="2026-2">2026-2</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Estudiante
              </label>
              <select
                defaultValue="1"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="1">Carlos Andrés Mendoza Gómez (CC: 1024589632)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Curso Inscrito
              </label>
              <select
                defaultValue="1"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="1">SIS-301: Desarrollo Web Full Stack</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2">
            2. Facturación y Calificación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Monto (COP)
              </label>
              <input
                type="number"
                defaultValue={450000}
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Método de Pago
              </label>
              <select
                defaultValue="PSE"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="PSE">PSE</option>
                <option value="Tarjeta de Crédito">Tarjeta de Crédito</option>
                <option value="Transferencia Bancaria">Transferencia Bancaria</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Estado del Pago
              </label>
              <select
                defaultValue="Aprobado"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="Aprobado">Aprobado</option>
                <option value="Pendiente">Pendiente</option>
                <option value="Rechazado">Rechazado</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Estado de la Matrícula
              </label>
              <select
                defaultValue="Finalizada"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="En curso">En curso</option>
                <option value="Finalizada">Finalizada</option>
                <option value="Cancelada">Cancelada</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Nota Final Obtenida (0.0 - 5.0)
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                max="5"
                defaultValue={4.6}
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 font-bold focus:outline-hidden focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <button
            type="button"
            className="px-4 py-2 text-sm font-semibold text-rose-700 bg-rose-50 border border-rose-200 rounded-lg hover:bg-rose-100 transition-colors"
          >
            Anular Matrícula
          </button>

          <div className="flex items-center space-x-3">
            <Link
              to="/matriculas"
              className="px-4 py-2 text-sm font-semibold text-slate-600 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              className="px-5 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-xs transition-colors"
            >
              Guardar Cambios
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
