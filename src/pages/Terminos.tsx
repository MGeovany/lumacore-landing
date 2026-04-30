import { Link } from 'react-router-dom'
import { LegalLayout } from './LegalLayout'

const SUPPORT_EMAIL = 'marlon.castro@thefndrs.com'

export function TerminosPage() {
  return (
    <LegalLayout title="Términos de uso">
      <article className="rounded-xl border border-gray-200 bg-white overflow-hidden font-poppins">
        <div className="border-b border-gray-100 px-6 py-5">
          <h1 className="text-xl font-bold text-gray-900 font-body">
            Términos de uso
          </h1>
          <p className="mt-1 text-sm text-gray-500 font-body">
            Última actualización:{' '}
            {new Date().toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
        <div className="space-y-6 px-6 py-6 text-sm text-gray-700">
          <section>
            <h2 className="mb-2 font-semibold text-gray-900 font-body">
              1. Aceptación
            </h2>
            <p>
              El acceso y uso de LumaCore LIS («el Servicio») implica la
              aceptación de estos términos de uso. Si no está de acuerdo, no
              utilice el Servicio. El Servicio se ofrece como software como
              servicio (SaaS) para la gestión de información de laboratorio.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-gray-900 font-body">
              2. Uso del Servicio
            </h2>
            <p>
              El usuario se compromete a utilizar el Servicio de forma lícita,
              conforme a la normativa aplicable y a las instrucciones
              proporcionadas. Es responsable de la confidencialidad de sus
              credenciales y de toda la actividad que se realice bajo su cuenta.
              El uso del Servicio para fines no autorizados o que puedan afectar
              a terceros o al correcto funcionamiento del sistema queda
              prohibido.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-gray-900 font-body">
              3. Datos y privacidad
            </h2>
            <p>
              El tratamiento de datos personales y de salud se rige por nuestra{' '}
              <Link
                to="/privacidad"
                className="text-gray-900 underline hover:no-underline"
              >
                Política de privacidad
              </Link>
              . El cliente que contrata el Servicio es responsable del
              cumplimiento de la normativa de protección de datos en relación
              con los datos que introduce en el sistema.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-gray-900 font-body">
              4. Disponibilidad y modificaciones
            </h2>
            <p>
              Nos esforzamos por mantener el Servicio disponible, pero no
              garantizamos una disponibilidad ininterrumpida. Nos reservamos el
              derecho de modificar, suspender o interrumpir funciones del
              Servicio, previo aviso cuando sea razonable. Los términos de uso
              pueden actualizarse; el uso continuado del Servicio tras la
              publicación de cambios implica la aceptación de los mismos.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-gray-900 font-body">
              5. Contacto
            </h2>
            <p>
              Para consultas sobre estos términos o sobre el Servicio puede
              contactar a{' '}
              <a
                href={`mailto:${SUPPORT_EMAIL}`}
                className="text-gray-900 underline hover:no-underline"
              >
                {SUPPORT_EMAIL}
              </a>
              .
            </p>
          </section>
        </div>
      </article>

      <p className="mt-6 text-center text-sm text-gray-500">
        <Link to="/" className="text-cyan-500 hover:text-cyan-600 underline">
          Volver al inicio
        </Link>
        {' · '}
        <Link
          to="/privacidad"
          className="text-cyan-500 hover:text-cyan-600 underline"
        >
          Política de privacidad
        </Link>
      </p>
    </LegalLayout>
  )
}
