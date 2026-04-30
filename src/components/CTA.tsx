import { motion } from 'motion/react'

export function CTA() {
  return (
    <section
      id="contact"
      className="relative border-t border-gray-200 py-20 md:py-28 font-body overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-white" />
      <div
        className="absolute inset-0 -z-10 animate-gradient-flow opacity-55"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgb(34 211 238 / 0.25), rgb(165 243 252 / 0.12), transparent 70%)',
          backgroundSize: '200% 200%',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-body text-4xl font-medium tracking-tight text-gray-900 w-full">
            ¿Listo para modernizar tu laboratorio?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-gray-500">
            Únete a laboratorios que ya entregan resultados más rápido con
            LumaCore.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <a
              href="mailto:marlon.castro@thefndrs.com?subject=Contacto ventas - LumaCore"
              className="text-base font-medium text-gray-600 underline decoration-gray-300 underline-offset-4 transition-colors hover:text-gray-900 hover:decoration-gray-500"
            >
              Contactar ventas
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
