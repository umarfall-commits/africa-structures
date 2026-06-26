import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Politique de confidentialité — Africa Structures',
  description: 'Politique de confidentialité d\'Africa Structures.',
  alternates: { canonical: '/confidentialite' },
}

export default function Confidentialite() {
  return (
    <main className="min-h-screen bg-background">
      <div className="bg-forest text-white py-4">
        <div className="max-w-3xl mx-auto px-6 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>
        </div>
      </div>
      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-forest mb-4">Politique de confidentialité</h1>
        <div className="gold-line w-16 mb-10" />
        <div className="prose-custom space-y-8 text-muted-foreground leading-relaxed">
          <p className="text-lg">Africa Structures s&apos;engage à protéger votre vie privée.</p>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Collecte des données</h2>
            <p>Seules les données du formulaire de contact (nom, email, sujet, message) sont collectées. Aucun cookie de suivi.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Utilisation</h2>
            <p>Exclusivement pour répondre à votre demande. Données ni vendues ni cédées.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Conservation</h2>
            <p>Maximum 12 mois après le dernier échange.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Vos droits</h2>
            <p>Conformément à la loi n°2008-12, droit d&apos;accès, rectification, suppression. Contact : contact@africastructures.org</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Cookies</h2>
            <p>Aucun cookie de suivi publicitaire.</p>
          </section>
        </div>
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground/60">Dernière mise à jour : juin 2025</p>
        </div>
      </article>
    </main>
  )
}