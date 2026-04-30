import { Link } from 'react-router-dom'
import { LegalLayout } from './LegalLayout'

const SUPPORT_EMAIL = 'marlon.castro@thefndrs.com'

export function PrivacidadPage() {
  return (
    <LegalLayout title="Política de privacidad">
      <article className="rounded-xl border border-gray-200 bg-white overflow-hidden font-poppins">
        <div className="border-b border-gray-100 px-6 py-5">
          <h1 className="text-xl font-bold text-gray-900 font-body">
            Política de privacidad
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
              1. Responsable del tratamiento
            </h2>
            <p>
              LumaCore LIS es un software como servicio (SaaS) de gestión de
              información de laboratorio. El responsable del tratamiento de los
              datos personales en el marco del servicio es la entidad que
              proporciona el software. Para consultas sobre privacidad puede
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

          <section>
            <h2 className="mb-2 font-semibold text-gray-900 font-body">
              2. Datos que recogemos
            </h2>
            <p>
              En el uso del sistema se pueden procesar datos de pacientes,
              profesionales sanitarios y usuarios del laboratorio
              (identificación, datos clínicos asociados a órdenes y resultados,
              registros de acceso y actividad). Estos datos son introducidos y
              gestionados por la organización cliente (por ejemplo, el
              laboratorio o clínica) que utiliza LumaCore LIS.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-gray-900 font-body">
              3. Finalidad y base legal
            </h2>
            <p>
              El tratamiento tiene como finalidad la prestación del servicio de
              información de laboratorio, la gestión de órdenes, muestras y
              resultados, y el cumplimiento de obligaciones legales y normativas
              aplicables al sector. La base legal puede ser la ejecución del
              contrato, el consentimiento cuando aplique, o el interés legítimo.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-gray-900 font-body">
              4. Conservación y seguridad
            </h2>
            <p>
              Los datos se conservan durante el tiempo necesario para la
              finalidad indicada y según la normativa aplicable. Se aplican
              medidas técnicas y organizativas para garantizar la
              confidencialidad, integridad y disponibilidad de la información.
            </p>
          </section>

          <section>
            <h2 className="mb-2 font-semibold text-gray-900 font-body">
              5. Derechos
            </h2>
            <p>
              Los interesados pueden ejercer los derechos de acceso,
              rectificación, supresión, limitación del tratamiento, portabilidad
              y oposición ante el responsable del tratamiento o, en su caso,
              ante la organización cliente que utiliza el sistema. También puede
              presentar una reclamación ante la autoridad de control competente.
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
          to="/terminos"
          className="text-cyan-500 hover:text-cyan-600 underline"
        >
          Términos de uso
        </Link>
      </p>
    </LegalLayout>
  )
}
