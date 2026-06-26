import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mentions légales — Africa Structures',
  description: 'Mentions légales du site Africa Structures.',
  alternates: { canonical: '/mentions-legales' },
}

export default function MentionsLegales() {
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
        <h1 className="font-display text-4xl md:text-5xl font-bold text-forest mb-4">Mentions légales</h1>
        <div className="gold-line w-16 mb-10" />
        <div className="prose-custom space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">1. Éditeur du site</h2>
            <p>Le site <strong className="text-foreground">africastructures.org</strong> est édité par Africa Structures, Think &amp; Do Tank africain indépendant et non partisan.</p>
            <ul className="list-none space-y-1 mt-3 text-sm">
              <li><strong className="text-foreground">Dénomination :</strong> Africa Structures</li>
              <li><strong className="text-foreground">Siège social :</strong> Dakar, Sénégal</li>
              <li><strong className="text-foreground">Email :</strong> contact@africastructures.org</li>
            </ul>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">2. Directeur de la publication</h2>
            <p>Le fondateur et directeur d&apos;Africa Structures.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">3. Hébergement</h2>
            <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">4. Propriété intellectuelle</h2>
            <p>Tout le contenu est la propriété exclusive d&apos;Africa Structures. Toute reproduction sans autorisation est interdite.</p>
          </section>
          <section>
            <h2 className="font-display text-xl font-semibold text-foreground mb-3">5. Droit applicable</h2>
            <p>Droit sénégalais. Tribunaux de Dakar compétents.</p>
          </section>
        </div>
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground/60">Dernière mise à jour : juin 2025</p>
        </div>
      </article>
    </main>
  )
}