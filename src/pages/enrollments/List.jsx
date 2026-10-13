import { Link } from 'react-router-dom';

const MATRICULAS_STATIC = [
  {
    id: "1",
    codigo: "MAT-20261-001",
    estudianteNombre: "Carlos Andrés Mendoza",
    estudianteDoc: "CC 1024589632",
    cursoTitulo: "Desarrollo Web Full Stack con Node.js y React",
    cursoCodigo: "SIS-301",
    periodo: "2026-1",
    fechaMatricula: "18 Ene 2026",
    monto: 450000,
    metodoPago: "PSE",
    estadoPago: "Aprobado",
    estadoMatricula: "Finalizada",
    notaFinal: "4.6"
  },
  {
    id: "2",
    codigo: "MAT-20261-002",
    estudianteNombre: "Juan Camilo Hernández",
    estudianteDoc: "CC 1015896321",
    cursoTitulo: "Desarrollo Web Full Stack con Node.js y React",
    cursoCodigo: "SIS-301",
    periodo: "2026-1",
    fechaMatricula: "20 Ene 2026",
    monto: 450000,
    metodoPago: "Tarjeta de Crédito",
    estadoPago: "Aprobado",
    estadoMatricula: "Finalizada",
    notaFinal: "4.1"
  },
  {
    id: "3",
    codigo: "MAT-20261-003",
    estudianteNombre: "Valentina Pérez Castro",
    estudianteDoc: "CC 1018965412",
    cursoTitulo: "Ciencia de Datos y Machine Learning Aplicado",
    cursoCodigo: "DAT-402",
    periodo: "2026-1",
    fechaMatricula: "19 Ene 2026",
    monto: 520000,
    metodoPago: "PSE",
    estadoPago: "Aprobado",
    estadoMatricula: "Finalizada",
    notaFinal: "4.8"
  },
  {
    id: "4",
    codigo: "MAT-20261-004",
    estudianteNombre: "Mariana Lucía Torres",
    estudianteDoc: "CC 1098745632",
    cursoTitulo: "Diseño UX/UI y Prototipado",
    cursoCodigo: "DSG-201",
    periodo: "2026-1",
    fechaMatricula: "21 Ene 2026",
    monto: 380000,
    metodoPago: "Transferencia Bancaria",
    estadoPago: "Aprobado",
    estadoMatricula: "En curso",
    notaFinal: "—"
  },
  {
    id: "5",
    codigo: "MAT-20261-005",
    estudianteNombre: "Sofía Elena Morales",
    estudianteDoc: "CE 589632147",
    cursoTitulo: "Ciencia de Datos y Machine Learning Aplicado",
    cursoCodigo: "DAT-402",
    periodo: "2026-1",
    fechaMatricula: "25 Ene 2026",
    monto: 520000,
    metodoPago: "PSE",
    estadoPago: "Pendiente",
    estadoMatricula: "En curso",
    notaFinal: "—"
  }
];

export default function EnrollmentsList() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Matrículas Académicas</h1>
          <p className="text-sm text-slate-500 mt-1">
            Control de inscripciones, estado de pagos y calificaciones de ciclo.
          </p>
        </div>
        <Link
          to="/matriculas/nuevo"
          className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg shadow-xs transition-colors"
        >
          <span className="mr-1.5 text-base leading-none font-bold">+</span>
          Nueva Matrícula
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Matrículas</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-3xl font-extrabold text-slate-900">15</span>
            <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
              Periodo 2026-1
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pagos Aprobados</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-3xl font-extrabold text-slate-900">14</span>
            <span className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
              93.3% Efectivo
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">En Curso / Pendiente</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-3xl font-extrabold text-slate-900">1</span>
            <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
              Validar Soporte
            </span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Recaudación Total</p>
          <div className="flex items-baseline justify-between mt-2">
            <span className="text-2xl font-extrabold text-slate-900">$6.850.000</span>
            <span className="text-xs font-medium text-slate-500">COP</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col md:flex-row gap-3 items-center justify-between">
        <div className="w-full md:w-96">
          <div className="relative">
            <input
              type="text"
              readOnly
              placeholder="Buscar por código de matrícula o estudiante..."
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-hidden"
              defaultValue=""
            />
            <span className="absolute left-3 top-2.5 text-slate-400 text-xs">🔍</span>
          </div>
        </div>

        <div className="w-full md:w-auto flex flex-wrap gap-2">
          <select
            disabled
            className="px-3 py-2 text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg text-slate-600"
            defaultValue="2026-1"
          >
            <option value="2026-1">Periodo 2026-1</option>
            <option value="2025-2">Periodo 2025-2</option>
          </select>

          <select
            disabled
            className="px-3 py-2 text-xs font-medium bg-slate-50 border border-slate-200 rounded-lg text-slate-600"
            defaultValue="todos"
          >
            <option value="todos">Todos los pagos</option>
            <option value="aprobado">Aprobado</option>
            <option value="pendiente">Pendiente</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <tr>
                <th scope="col" className="px-6 py-3.5">Matrícula</th>
                <th scope="col" className="px-6 py-3.5">Estudiante</th>
                <th scope="col" className="px-6 py-3.5">Curso</th>
                <th scope="col" className="px-6 py-3.5">Pago & Método</th>
                <th scope="col" className="px-6 py-3.5">Estado / Nota</th>
                <th scope="col" className="px-6 py-3.5 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MATRICULAS_STATIC.map((mat) => (
                <tr key={mat.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="px-6 py-4">
                    <span className="font-mono font-bold text-xs text-slate-900 block">
                      {mat.codigo}
                    </span>
                    <span className="text-[11px] text-slate-400">
                      {mat.fechaMatricula}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-semibold text-slate-900 text-xs leading-tight">
                      {mat.estudianteNombre}
                    </p>
                    <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                      {mat.estudianteDoc}
                    </p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-800 text-xs leading-tight max-w-[220px]">
                      {mat.cursoTitulo}
                    </p>
                    <span className="inline-block mt-1 font-mono text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">
                      {mat.cursoCodigo}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-900 text-xs">
                      ${mat.monto.toLocaleString('es-CO')} COP
                    </p>
                    <div className="flex items-center space-x-1.5 mt-1">
                      <span className="text-[11px] text-slate-500">{mat.metodoPago}</span>
                      {mat.estadoPago === 'Aprobado' ? (
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          Aprobado
                        </span>
                      ) : (
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                          Pendiente
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="space-y-1">
                      <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                        {mat.estadoMatricula}
                      </span>
                      {mat.notaFinal !== '—' && (
                        <p className="text-xs text-slate-600">
                          Nota: <span className="font-bold text-blue-600">{mat.notaFinal} / 5.0</span>
                        </p>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      to="/matriculas/editar"
                      className="px-2.5 py-1 text-xs font-medium text-blue-600 bg-blue-50 border border-blue-200 rounded-md hover:bg-blue-100 transition-colors"
                    >
                      Editar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-slate-50 px-6 py-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Mostrando 5 de 15 matrículas</span>
          <div className="flex space-x-1">
            <button disabled className="px-2.5 py-1 rounded border border-slate-200 bg-white text-slate-400 cursor-not-allowed">
              Anterior
            </button>
            <button className="px-2.5 py-1 rounded border border-blue-600 bg-blue-600 text-white font-medium">
              1
            </button>
            <button className="px-2.5 py-1 rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-100">
              2
            </button>
            <button className="px-2.5 py-1 rounded border border-slate-200 bg-white text-slate-600 hover:bg-slate-100">
              Siguiente
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
