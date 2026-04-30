import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { useDemoModal } from '../context/DemoModalContext'

export function DemoPage() {
  const { openDemoModal } = useDemoModal()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <img
              src="/images/logo-black.svg"
              alt="LumaCore"
              className="h-3 sm:h-6 w-auto"
              width={24}
              height={24}
            />
            <span className="font-body font-semibold text-lg sm:text-xl tracking-tight text-gray-900 group-hover:text-cyan-600 transition-colors">
              LumaCore
            </span>
          </Link>
          <Link to="/">
            <Button className="py-2.5! px-5 sm:px-6! text-sm font-medium font-body">
              Volver al inicio
            </Button>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8">
        <h1 className="text-2xl font-body font-medium text-gray-900 md:text-3xl">
          Solicitar demo
        </h1>
        <p className="mt-2 text-gray-600">
          Elige un horario y te contactaremos para mostrarte LumaCore.
        </p>

        <div className="mt-8">
          <Button
            type="button"
            onClick={openDemoModal}
            className="rounded-full px-8 py-3.5 text-base font-medium"
          >
            Abrir agenda y elegir horario
          </Button>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          Si prefieres, escríbenos:{' '}
          <a
            href="mailto:marlon.castro@thefndrs.com?subject=Solicitud de demo - LumaCore"
            className="text-cyan-500 hover:text-cyan-600 underline"
          >
            marlon.castro@thefndrs.com
          </a>
        </p>

        <p className="mt-6 text-center text-sm text-gray-500">
          <Link to="/" className="text-cyan-500 hover:text-cyan-600 underline">
            Volver al inicio
          </Link>
        </p>
      </main>
    </div>
  )
}
