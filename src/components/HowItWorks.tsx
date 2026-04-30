import { motion } from 'motion/react'
import {
  ClipboardList,
  Microscope,
  MonitorCheck,
  ScanQrCode,
} from 'lucide-react'
import { staggerContainer, staggerItem } from '../lib/motion'

// Textos alineados con docs/flujo-end-to-end-lumacore.md (A: origen, B: técnico, C: validación)
const steps = [
  {
    num: 1,
    title: 'Recepción',
    desc: 'Recepción crea la orden. Se escanea la orden de trabajo y se capturan paciente y exámenes.',
    Icon: ClipboardList,
  },
  {
    num: 2,
    title: 'Muestras y etiquetas',
    desc: 'Se generan muestras y se imprimen stickers. Recolección física y muestra lista para laboratorio.',
    Icon: ScanQrCode,
  },
  {
    num: 3,
    title: 'Procesar examen',
    desc: 'El técnico escanea la muestra, captura resultados en el formulario y envía el examen a validación.',
    Icon: Microscope,
  },
  {
    num: 4,
    title: 'Validación',
    desc: 'El supervisor aprueba o rechaza. Se genera el reporte en PDF y se entrega.',
    Icon: MonitorCheck,
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500 mb-3 font-body">
            El proceso
          </p>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4 font-body">
            Control End-to-End
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto font-body">
            Origen de la orden, muestras, procesamiento técnico y validación
            hasta el reporte.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-4 gap-6 relative"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-60px' }}
          variants={staggerContainer}
        >
          <div
            className="hidden md:block absolute top-18 left-0 w-full h-0.5 bg-gray-200"
            aria-hidden
          />

          {steps.map((step) => (
            <motion.div
              key={step.num}
              variants={staggerItem}
              className="group relative z-10 flex cursor-default flex-col items-center text-center transition-transform duration-300 ease-out hover:-translate-y-1"
            >
              <div className="mb-7 flex h-28 w-28 items-center justify-center rounded-full border border-gray-200 bg-white transition-all duration-300 group-hover:border-cyan-300 md:h-36 md:w-36">
                <step.Icon
                  className="h-7 w-7 text-slate-400 transition-colors duration-300 group-hover:text-cyan-500 md:h-8 md:w-8"
                  strokeWidth={1.6}
                />
              </div>
              <h3 className="mb-3 text-2xl font-medium text-gray-900 transition-colors duration-300 group-hover:text-cyan-600 font-body">
                {step.num}. {step.title}
              </h3>
              <p className="max-w-[240px] text-sm leading-relaxed text-gray-500">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
