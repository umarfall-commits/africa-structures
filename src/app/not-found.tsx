import Link from 'next/link'
import { ArrowLeft, Home } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page introuvable — Africa Structures',
  description: 'La page que vous cherchez n\'existe pas ou a été déplacée.',
}

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center african-pattern">
      <div className="text-center px-6 max-w-lg">
        <p className="font-display text-[8rem] md:text-[10rem] font-bold text-forest/10 leading-none select-none">
          404
        </p>
        <div className="-mt-16 md:-mt-20">
          <div className="gold-line w-12 mx-auto mb-6" />
          <h1 className="font-display text-2xl md:text-3xl font-bold text-forest mb-4">
            Page introuvable
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-8">
            La page que vous cherchez n&apos;existe pas ou a été déplacée.
            Retournez à la page d&apos;accueil pour poursuivre votre navigation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-forest text-white rounded-sm text-sm font-medium hover:bg-forest-light transition-colors"
            >
              <Home className="w-4 h-4" />
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-sm text-sm font-medium hover:bg-muted transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Page précédente
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}