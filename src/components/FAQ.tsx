import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const items = [
  {
    id: 1,
    question: '¿Los médicos pueden ver resultados validados?',
    answer:
      'Sí. Los médicos tienen acceso a resultados ya validados desde su panel. El flujo orden–muestra–resultado queda trazado en el sistema.',
  },
  {
    id: 2,
    question: '¿Mis datos están seguros y son compatibles con normativas?',
    answer:
      'Sí. Usamos cifrado en reposo y en tránsito. El diseño está alineado con buenas prácticas de protección de datos y normativa aplicable.',
  },
  {
    id: 3,
    question: '¿Puedo conectar mis analizadores?',
    answer:
      'Estamos trabajando en integración con analizadores (HL7/ASTM). Hoy el MVP permite cargar resultados manualmente desde la cola de procesamiento con trazabilidad completa.',
  },
  {
    id: 4,
    question: '¿Necesito seguro para usar LumaCore?',
    answer:
      'No. LumaCore es software para el laboratorio. Puedes usarlo para gestionar órdenes, muestras y resultados con o sin módulos de facturación a seguros.',
  },
  {
    id: 5,
    question:
      '¿Puedo enviar los resultados a los pacientes por correo o WhatsApp?',
    answer:
      'Sí. Puedes enviar el reporte al paciente por correo electrónico o por WhatsApp. El PDF se genera con la plantilla del laboratorio (membrete, logo, datos del laboratorio) cumpliendo el estándar de informes de laboratorio y la normativa vigente aplicable a tu jurisdicción.',
  },
  {
    id: 6,
    question: '¿Puedo probar LumaCore antes de contratar?',
    answer:
      'Sí. Solicita una demo y te mostramos el flujo completo: recepción, muestras, procesamiento y validación. Sin compromiso.',
  },
  {
    id: 7,
    question: '¿Qué pasa si supero el límite de análisis de mi plan?',
    answer:
      'Los excedentes se facturan según tu contrato (por ejemplo, USD 0,05 por prueba). Para más de 20.000 análisis al mes, contacta a ventas para precios por volumen.',
  },
]

export function FAQ() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.h2
          className="text-2xl sm:text-3xl font-body font-medium text-gray-900 mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          Preguntas frecuentes
        </motion.h2>

        <div className="space-y-0">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className={`border-t border-gray-100 ${index === items.length - 1 ? 'border-b' : ''}`}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <motion.button
                type="button"
                onClick={() => setActive(active === item.id ? null : item.id)}
                className="w-full py-6 flex items-center justify-between text-left group rounded-lg"
                whileHover={{ backgroundColor: 'rgba(6, 182, 212, 0.04)' }}
                whileTap={{ scale: 0.998 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-base sm:text-lg font-medium text-gray-800 group-hover:text-cyan-500 transition-colors pr-4">
                  {item.question}
                </span>
                <motion.span
                  className="inline-flex text-cyan-500 flex-shrink-0"
                  animate={{ rotate: active === item.id ? 45 : 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16M4 12h16"
                    />
                  </svg>
                </motion.span>
              </motion.button>
              <AnimatePresence initial={false}>
                {active === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-8 text-gray-500 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
