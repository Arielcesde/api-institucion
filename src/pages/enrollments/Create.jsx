import { Link } from 'react-router-dom';

export default function EnrollmentsCreate() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center space-x-2 text-xs text-slate-500">
        <Link to="/matriculas" className="hover:text-blue-600 transition-colors">Matrículas</Link>
        <span>/</span>
        <span className="text-slate-800 font-medium">Nueva Inscripción</span>
      </div>

      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Formalizar Nueva Matrícula</h1>
          <p className="text-sm text-slate-500 mt-1">
            Asignación de estudiante a curso, liquidación de pago y periodo lectivo.
          </p>
        </div>
        <Link
          to="/matriculas"
          className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
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
                Código de Matrícula (Generado)
              </label>
              <input
                type="text"
                defaultValue="MAT-20261-016"
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
                <option value="2026-1">2026-1 (Semestre Actual)</option>
                <option value="2026-2">2026-2 (Intersemestral / Siguiente)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Seleccionar Estudiante
              </label>
              <select
                defaultValue="1"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="1">Carlos Andrés Mendoza Gómez (CC: 1024589632)</option>
                <option value="2">Mariana Lucía Torres Rojas (CC: 1098745632)</option>
                <option value="3">Juan Camilo Hernández Silva (CC: 1015896321)</option>
                <option value="4">Valentina Pérez Castro (CC: 1018965412)</option>
                <option value="5">Diego Alejandro Ramírez Vargas (CC: 1032456987)</option>
                <option value="6">Sofía Elena Morales Ortiz (CE: 589632147)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Seleccionar Curso
              </label>
              <select
                defaultValue="1"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="1">SIS-301: Desarrollo Web Full Stack ($450.000 COP)</option>
                <option value="2">DAT-402: Ciencia de Datos y Machine Learning ($520.000 COP)</option>
                <option value="3">DSG-201: Diseño UX/UI y Prototipado ($380.000 COP)</option>
                <option value="4">SEC-501: Seguridad Ofensiva y Auditoría ($490.000 COP)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-4">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-700 border-b border-slate-100 pb-2">
            2. Liquidación y Facturación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Monto Liquidado (COP)
              </label>
              <input
                type="number"
                defaultValue={450000}
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 font-semibold focus:outline-hidden focus:border-blue-500"
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
                <option value="PSE">PSE - Débito Bancario</option>
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
                Fecha de Matrícula
              </label>
              <input
                type="date"
                defaultValue="2026-02-01"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Estado de la Matrícula
              </label>
              <select
                defaultValue="En curso"
                className="w-full px-3 py-2 text-sm bg-white border border-slate-300 rounded-lg text-slate-800 focus:outline-hidden focus:border-blue-500"
              >
                <option value="En curso">En curso</option>
                <option value="Finalizada">Finalizada</option>
                <option value="Cancelada">Cancelada</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-3 pt-2">
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
            Registrar Matrícula
          </button>
        </div>
      </form>
    </div>
  );
}
