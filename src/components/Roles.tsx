import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { UserRound, Microscope, ShieldCheck, Settings } from 'lucide-react'
import { Card } from './ui/Card'

const roles = [
  {
    value: 'reception',
    label: 'Recepción',
    icon: UserRound,
    title: 'Recepción ágil y sin errores',
    description:
      'El personal de recepción crea órdenes, captura datos del paciente y genera muestras con código de barras en segundos.',
    tasks: [
      'Crear órdenes con datos del paciente, pruebas solicitadas y urgencia',
      'Generar IDs de muestra y PDFs de etiquetas automáticamente',
      'Escanear códigos para consultar cualquier orden o muestra al instante',
      'Seguir el estado de la orden desde la creación hasta la entrega',
    ],
    outcomes: [
      'Check-in más rápido con menos errores de digitación',
      'Cero muestras perdidas o mal identificadas',
    ],
  },
  {
    value: 'technician',
    label: 'Técnico',
    icon: Microscope,
    title: 'Cola clara: desde recepción hasta resultados',
    description:
      'Los técnicos procesan muestras en una cola ordenada: recibir, analizar, cargar resultados y enviar a validación.',
    tasks: [
      'Ver y gestionar la cola de procesamiento de muestras',
      'Marcar muestras como recibidas, en proceso o completadas',
      'Cargar resultados con validación integrada y guardado de borradores',
      'Marcar incidencias o anomalías para revisión del supervisor',
    ],
    outcomes: [
      'Flujo estructurado sin improvisar ni retroceder',
      'Borradores evitan perder trabajo entre turnos',
    ],
  },
  {
    value: 'supervisor',
    label: 'Supervisor',
    icon: ShieldCheck,
    title: 'Valida con confianza, audita con facilidad',
    description:
      'Los supervisores revisan resultados consolidados por orden y validan, rechazan o piden repeticiones con trazabilidad completa.',
    tasks: [
      'Revisar todos los resultados agrupados por orden para validar rápido',
      'Aprobar, rechazar o solicitar repetición por resultado',
      'Acceder al historial de auditoría de cualquier muestra u orden',
      'Buscar y filtrar registros por fecha, usuario o acción',
    ],
    outcomes: [
      'Vista consolidada reduce el tiempo de revisión a la mitad',
      'Trazabilidad completa para cumplimiento normativo',
    ],
  },
  {
    value: 'admin',
    label: 'Admin',
    icon: Settings,
    title: 'Control total en todas las sedes',
    description:
      'Disponible en Enterprise. Los administradores gestionan usuarios, configuran multi-sede y supervisan analíticas de la organización.',
    tasks: [
      'Panel de administración de usuarios y sedes',
      'Datos de prueba o demo para capacitación',
      'Dashboards con KPIs y gráficos de desempeño',
      'Soporte prioritario y opciones de configuración',
    ],
    outcomes: [
      'Control centralizado de labs y puntos de toma',
      'Decisiones basadas en datos con analíticas en tiempo real',
    ],
  },
]

export function Roles() {
  const [activeRole, setActiveRole] = useState(roles[0].value)
  const currentRole = roles.find((r) => r.value === activeRole) ?? roles[0]

  return (
    <section className="border-t border-gray-100 bg-gray-50/60 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wider text-cyan-500 font-body">
            Pensado para cada rol
          </p>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 font-body">
            Qué hace cada rol en LumaCore
          </h2>
          <p className="mt-3 text-base text-gray-500 font-body">
            Flujos de trabajo adaptados a cada miembro de tu equipo de
            laboratorio.
          </p>
        </motion.div>

        {/* Role tabs */}
        <div className="mt-12">
          <div className="mx-auto flex w-fit flex-wrap justify-center gap-1 rounded-xl bg-gray-100/80 p-1.5">
            {roles.map((role) => (
              <button
                key={role.value}
                type="button"
                onClick={() => setActiveRole(role.value)}
                className={
                  'flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ' +
                  (activeRole === role.value
                    ? 'bg-white text-cyan-500 whitespace-nowrap'
                    : 'text-gray-600 hover:text-gray-900')
                }
              >
                <role.icon className="size-4" />
                {role.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeRole}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden rounded-xl border border-gray-100 p-8 md:p-10">
                  <div className="grid gap-8 md:grid-cols-2">
                    {/* Left: description + outcomes */}
                    <div>
                      <h3 className="text-xl font-medium text-gray-900 font-body">
                        {currentRole.title}
                      </h3>
                      <p className="mt-3 leading-relaxed text-gray-500">
                        {currentRole.description}
                      </p>
                      <div className="mt-6">
                        <p className="text-xs font-semibold uppercase tracking-wider text-cyan-500">
                          Resultados clave
                        </p>
                        <ul className="mt-3 flex flex-col gap-2">
                          {currentRole.outcomes.map((outcome, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-gray-900"
                            >
                              <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan-500" />
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {/* Right: tasks */}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                        Qué hace cada rol en LumaCore
                      </p>
                      <ul className="mt-4 flex flex-col gap-3">
                        {currentRole.tasks.map((task, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 rounded-lg border border-gray-100 bg-gray-50/80 p-3.5"
                          >
                            <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-cyan-50 text-xs font-bold text-cyan-500">
                              {i + 1}
                            </span>
                            <span className="text-sm leading-relaxed text-gray-900">
                              {task}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
