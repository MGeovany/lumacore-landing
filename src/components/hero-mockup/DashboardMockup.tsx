import { useState } from 'react'
import type { MockupViewId } from './types'
import { MockupSidebar } from './MockupSidebar'
import { SampleQueueHeader } from './SampleQueueHeader'
import { SampleQueueTable } from './SampleQueueTable'
import { OrdenesView } from './OrdenesView'
import { PacientesView } from './PacientesView'
import { ResultadosView } from './ResultadosView'
import { EscanearMuestraModal } from './EscanearMuestraModal'
import { MOCKUP_NAV_ITEMS, SAMPLE_QUEUE_ROWS } from './mockup-data'

/** Composes the browser-style dashboard mockup for the Hero. Sidebar switches content inside the mockup. */
export function DashboardMockup() {
  const [activeView, setActiveView] = useState<MockupViewId>('panel')
  const [scanModalOpen, setScanModalOpen] = useState(false)

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl border border-gray-100 overflow-hidden">
      <EscanearMuestraModal
        open={scanModalOpen}
        onOpenChange={setScanModalOpen}
      />
      <div className="h-9 sm:h-10 bg-gray-50 border-b border-gray-200 flex items-center px-3 sm:px-4 gap-2">
        <div className="flex gap-1.5" aria-hidden>
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-amber-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 text-center">
          <div className="bg-white rounded-md border border-gray-200 w-64 mx-auto h-6 flex items-center justify-center text-[10px] text-gray-400">
            app.lumacore.io/dashboard
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 lg:p-8 bg-white grid grid-cols-12 gap-4 sm:gap-6 min-h-[320px] sm:min-h-[400px]">
        <MockupSidebar
          items={MOCKUP_NAV_ITEMS}
          activeView={activeView}
          onSelectView={setActiveView}
        />
        {activeView === 'panel' && (
          <div className="col-span-12 md:col-span-10">
            <SampleQueueHeader
              title="Cola de muestras"
              subtitle="Hoy: 142 muestras"
              actionLabel="Escanear muestra"
              onActionClick={() => setScanModalOpen(true)}
            />
            <SampleQueueTable rows={SAMPLE_QUEUE_ROWS} />
          </div>
        )}
        {activeView === 'ordenes' && <OrdenesView />}
        {activeView === 'pacientes' && <PacientesView />}
        {activeView === 'resultados' && <ResultadosView />}
      </div>
    </div>
  )
}
