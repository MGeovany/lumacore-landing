import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../components/ui/Button'

type LegalLayoutProps = { children: ReactNode; title: string }

export function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="border-b border-gray-200 bg-white px-4 py-3">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            <img
              src="/images/logo-black.png"
              alt="LumaCore"
              className="h-6 w-auto"
              width={24}
              height={24}
            />
            LumaCore
          </Link>
          <Link to="/demo">
            <Button
              variant="secondary"
              className="!py-2 !px-4 text-sm !rounded-full"
            >
              Solicitar demo
            </Button>
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-8">{children}</main>
    </div>
  )
}
