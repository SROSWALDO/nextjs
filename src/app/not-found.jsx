import Link from 'next/link'
import React from 'react'

export default function notFound() {
  return (
    <div>
        <h1>404</h1>
        <p>Pagina no encontrada</p>
        <Link href="/">Volver</Link>
    </div>
  )
}
