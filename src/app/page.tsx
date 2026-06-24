'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Menu, X, ArrowRight, ArrowDownRight, Camera,
  Brain, Heart, GraduationCap,
  MapPin, Users, Mail, Globe,
  BookOpen, ChevronRight,
  Shield, Target, Sparkles, Send,
  Landmark, Building2, Palette, Stethoscope,
  CircleDot
} from 'lucide-react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

/* ─────────────── Navigation ─────────────── */

const navLinks = [
  { label: 'Le Projet', href: '#projet' },
  { label: 'Piliers', href: '#piliers' },
  { label: 'Projets', href: '#projets' },
  { label: 'Futur', href: '#futur' },
  { label: 'Album', href: '#album' },
  { label: 'Réseau', href: '#reseau' },
  { label: 'Contact', href: '#contact' },
]

function Navigation() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/logo-africa-structures.png"
              alt="Africa Structures"
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-display text-base font-bold tracking-tight text-forest leading-none">
                AFRICA
              </span>
              <span className="font-body text-[9px] uppercase tracking-[0.25em] text-muted-foreground leading-none mt-0.5">
                Structures
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-forest transition-colors rounded-md hover:bg-muted/50"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="#contact">
                <Mail className="w-4 h-4 mr-1.5" />
                Nous contacter
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted/50 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col p-6 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-forest hover:bg-muted/50 rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Separator className="my-3" />
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a href="#contact" onClick={() => setOpen(false)}>
                  <Mail className="w-4 h-4 mr-1.5" />
                  Nous contacter
                </a>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ─────────────── Scroll Reveal Wrapper ─────────────── */

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ─────────────── Hero Section ─────────────── */

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center african-pattern overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-24 right-12 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-24 left-12 w-96 h-96 bg-forest/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <img
            src="/logo-africa-structures.png"
            alt="Africa Structures"
            className="h-20 sm:h-24 md:h-28 w-auto object-contain mx-auto mb-8"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Badge variant="outline" className="mb-8 text-xs tracking-widest uppercase border-forest/20 text-forest/70 px-4 py-1.5">
            Think &amp; Do Tank africain
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-forest leading-[1.1] mb-8"
        >
          Penser l'Afrique.
          <br />
          <span className="text-gold">Structurer</span> l'action.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 font-light"
        >
          Pour des sociétés justes, responsables et durables.
          <br className="hidden sm:block" />
          Africa Structures est un espace indépendant de réflexion, d'expérimentation et de
          transmission, dédié à la transformation citoyenne, institutionnelle et culturelle
          des sociétés africaines.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="bg-forest hover:bg-forest-light text-white px-8 h-12 text-sm" asChild>
            <a href="#projet">
              Découvrir le projet
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="border-forest/20 text-forest hover:bg-forest/5 px-8 h-12 text-sm" asChild>
            <a href="#piliers">
              <BookOpen className="w-4 h-4 mr-2" />
              Nos analyses
            </a>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ArrowDownRight className="w-5 h-5 text-muted-foreground/40 rotate-[135deg]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─────────────── Le Projet Section ─────────────── */

function ProjetSection() {
  return (
    <section id="projet" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-20">
            <Badge variant="secondary" className="mb-6 bg-forest/5 text-forest border-0 text-xs tracking-widest uppercase px-4 py-1.5">
              Le Projet
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-forest mb-8 leading-tight">
              Pourquoi nous existons
            </h2>
            <div className="gold-line w-16 mx-auto mb-8" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Un constat simple&nbsp;: l'Afrique ne manque ni d'idées, ni d'énergies, ni de talents.
              Elle manque de <strong className="text-foreground">structures solides</strong>, de{' '}
              <strong className="text-foreground">méthodes claires</strong> et de{' '}
              <strong className="text-foreground">continuité dans l'action</strong>.
            </p>
          </div>
        </Reveal>

        <Reveal>
            <div className="relative rounded-sm overflow-hidden h-64 md:h-80 mb-12">
              <img
                src="/photos/community-dialogue.png"
                alt="Dialogue communautaire au Sénégal"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-forest/70 to-forest/20" />
              <div className="absolute inset-0 flex items-center p-8 md:p-12">
                <p className="text-white/90 text-lg md:text-xl font-display font-semibold max-w-md leading-relaxed">
                  &laquo;&nbsp;La transformation ne vient pas d'en haut. Elle naît dans
                  le dialogue, la structure et l'action collective.&nbsp;&raquo;
                </p>
              </div>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <Reveal delay={0.1}>
              <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-sm bg-forest/5 flex items-center justify-center shrink-0">
                  <Target className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-forest mb-2">
                    Un espace de structuration
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Africa Structures est né pour répondre à cette faille&nbsp;: offrir un cadre
                    méthodique, indépendant et pérenne pour penser, agir et transmettre. Pas un
                    blog, pas un média, pas une ONG vitrine — un centre intellectuel et
                    opérationnel africain en ligne.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 w-10 h-10 rounded-sm bg-forest/5 flex items-center justify-center shrink-0">
                  <Shield className="w-5 h-5 text-forest" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-forest mb-2">
                    Indépendant et non partisan
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ni parti politique, ni ONG classique, ni média. Africa Structures se
                    positionne comme un espace de structuration citoyenne africaine — une
                    plateforme de pensée et d'action qui privilégie la rigueur intellectuelle,
                    l'éthique publique et la responsabilité.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="bg-forest rounded-sm p-8 md:p-10 text-white">
              <h3 className="font-display text-2xl font-bold mb-6">
                Ce que nous analysons
              </h3>
              <ul className="space-y-4">
                {[
                  'Gouvernance et État de droit',
                  'Économie politique et dynamiques sociales',
                  'Citoyenneté et participation',
                  'Culture, mémoire et cohésion sociale',
                  'Innovation sociale et IA responsable',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CircleDot className="w-5 h-5 text-gold-light shrink-0 mt-0.5" />
                    <span className="text-white/85 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/15">
                <p className="text-white/60 text-sm leading-relaxed italic">
                  &laquo;&nbsp;Nous analysons, nous proposons, nous expérimentons, nous transmettons.
                  Nous ne dénonçons pas — nous structurons.&nbsp;&raquo;
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ─────────────── 3 Piliers Section ─────────────── */

const piliers = [
  {
    icon: Brain,
    title: 'Penser',
    subtitle: 'Analyses & prospectives',
    description:
      'Analyses stratégiques, notes de fond sur la gouvernance, la citoyenneté, l\'économie politique et les mutations sociales. Des idées qui éclairent la décision.',
    tagline: 'Des idées qui éclairent la décision.',
    color: 'forest',
  },
  {
    icon: Heart,
    title: 'Agir',
    subtitle: 'Projets & territoires',
    description:
      'Projets territoriaux, expérimentations citoyennes, programmes communautaires, dispositifs locaux de transformation. Des actions ancrées dans le réel.',
    tagline: 'Des actions ancrées dans le réel.',
    color: 'gold',
  },
  {
    icon: GraduationCap,
    title: 'Transmettre',
    subtitle: 'Culture & formation',
    description:
      'Culture, mémoire, formation, leadership citoyen, jeunesse. Les valeurs africaines comme levier de cohésion et de projection.',
    tagline: 'Un récit pour construire le futur.',
    color: 'forest',
  },
]

function PiliersSection() {
  return (
    <section id="piliers" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-forest/5 text-forest border-0 text-xs tracking-widest uppercase px-4 py-1.5">
              Notre approche
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-forest mb-6 leading-tight">
              Ce que nous faisons
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Africa Structures repose sur trois piliers complémentaires, qui structurent
              l'ensemble de ses activités et de ses productions.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {piliers.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.15}>
              <Card className="h-full border-border/50 hover:border-forest/20 transition-all duration-300 hover:shadow-md group bg-white">
                <CardContent className="pt-8 pb-8 px-8">
                  <div
                    className={`w-14 h-14 rounded-sm flex items-center justify-center mb-6 ${
                      p.color === 'gold' ? 'bg-gold/10' : 'bg-forest/5'
                    }`}
                  >
                    <p.icon
                      className={`w-7 h-7 ${
                        p.color === 'gold' ? 'text-gold' : 'text-forest'
                      }`}
                    />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    {p.subtitle}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-forest mb-4">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {p.description}
                  </p>
                  <div
                    className={`inline-flex items-center gap-2 text-sm font-medium ${
                      p.color === 'gold' ? 'text-gold' : 'text-forest'
                    }`}
                  >
                    {p.tagline}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────── Projets Phares Section ─────────────── */

const projets = [
  {
    icon: Stethoscope,
    title: "Mutuelle de santé communautaire",
    photo: '/photos/health-community.png',
    description:
      "Dispositif de solidarité santé à l'échelle territoriale pilote. Conception, diagnostic terrain et mise en oeuvre d'un modèle mutualiste adapté aux réalités locales.",
    statut: 'En cours',
    statutVariant: 'default' as const,
  },
  {
    icon: Building2,
    title: "Développement communal intégré",
    photo: '/photos/entrepreneuriat-local.png',
    description:
      "Projet de transformation économique locale articulé autour de la biscuiterie communautaire et de l'entrepreneuriat social. Un modèle reproductible pour le développement territorial.",
    statut: 'En cours',
    statutVariant: 'default' as const,
  },
  {
    icon: Palette,
    title: "Les Royaumes de la Mémoire",
    photo: '/photos/cultural-performance.png',
    description:
      "Projet culturel majeur rendant hommage aux Rois et Reines africains. À travers la musique, la fresque et le film, revitaliser les valeurs fondatrices et transmettre un récit de fierté aux nouvelles générations.",
    statut: 'Phare',
    statutVariant: 'secondary' as const,
  },
  {
    icon: Globe,
    title: "L'Afrique au Coeur",
    photo: '/photos/dakar-cityscape.png',
    description:
      "Plateforme de mise en valeur du continent africain dans toute sa diversité, sa créativité et son potentiel. Un espace narratif qui raconte l'Afrique par ceux qui la vivent et la construisent.",
    statut: 'En cours',
    statutVariant: 'default' as const,
  },
  {
    icon: Users,
    title: "Programmes de formation citoyenne",
    photo: '/photos/training-citoyenne.png',
    description:
      "Formation de leaders communautaires, ateliers de nouvelle conscience citoyenne et dialogues communautaires. Renforcer les capacités d'action locale par la connaissance et la méthode.",
    statut: 'En cours',
    statutVariant: 'default' as const,
  },
  {
    icon: Landmark,
    title: "Nouvelle Conscience Citoyenne",
    photo: '/photos/community-dialogue.png',
    description:
      "Programme structuré de sensibilisation et d'engagement civique. Repenser la relation entre citoyen, État et territoire pour construire une culture de responsabilité partagée.",
    statut: 'Prochainement',
    statutVariant: 'outline' as const,
  },
]

function ProjetsSection() {
  return (
    <section id="projets" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-gold/10 text-gold border-0 text-xs tracking-widest uppercase px-4 py-1.5">
              Sur le terrain
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-forest mb-6 leading-tight">
              Projets phares
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Des projets concrets, ancrés dans les territoires et portés par une vision
              de transformation durable. Chacun combine réflexion stratégique et
              action de terrain.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projets.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <Card className="h-full border-border/50 hover:border-gold/30 transition-all duration-300 hover:shadow-md group bg-white overflow-hidden">
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={p.photo}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <Badge
                      variant={p.statutVariant}
                      className={
                        p.statutVariant === 'default'
                          ? 'bg-forest text-white text-[10px] px-2.5 py-0.5'
                          : p.statutVariant === 'secondary'
                          ? 'bg-gold text-white text-[10px] px-2.5 py-0.5'
                          : 'bg-white/90 text-foreground text-[10px] px-2.5 py-0.5'
                      }
                    >
                      {p.statut}
                    </Badge>
                  </div>
                </div>
                <CardContent className="pt-6 pb-6 px-7 flex flex-col h-full">
                  <div className="w-9 h-9 rounded-sm bg-forest/5 flex items-center justify-center mb-4">
                    <p.icon className="w-4 h-4 text-forest" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-forest mb-3 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {p.description}
                  </p>
                  <div className="mt-5 pt-4 border-t border-border/50">
                    <span className="text-xs text-forest font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      En savoir plus
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────── Futur / IA Section ─────────────── */

function FuturSection() {
  return (
    <section id="futur" className="py-24 md:py-32 bg-forest text-white relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div>
              <Badge className="mb-6 bg-white/10 text-gold-light border-white/10 text-xs tracking-widest uppercase px-4 py-1.5 hover:bg-white/10">
                Afrique & Futur
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                IA, données et outils civiques
              </h2>
              <p className="text-white/75 text-lg leading-relaxed mb-8">
                Africa Structures explore l'usage responsable de l'intelligence artificielle
                et des outils numériques pour renforcer la participation citoyenne, structurer
                l'action publique et améliorer l'accès à l'information.
              </p>
              <ul className="space-y-4">
                {[
                  { icon: Users, text: 'Renforcer la participation citoyenne' },
                  { icon: Building2, text: 'Structurer l\'action publique locale' },
                  { icon: BookOpen, text: 'Améliorer l\'accès à l\'information' },
                  { icon: Sparkles, text: 'Innover avec responsabilité et méthode' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-sm bg-white/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-4 h-4 text-gold-light" />
                    </div>
                    <span className="text-white/85">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="space-y-6">
              <div className="relative rounded-sm overflow-hidden h-56">
                <img
                  src="/photos/tech-innovation.png"
                  alt="Innovation technologique en Afrique"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8 md:p-10">
              <h3 className="font-display text-xl font-bold mb-6 text-gold-light">
                Notre vision technologique
              </h3>
              <p className="text-white/65 leading-relaxed mb-8">
                L'intelligence artificielle n'est pas un gadget pour Africa Structures.
                C'est un levier d'organisation, de structuration et de démocratisation
                de l'accès au savoir. Nous l'intégrons de manière progressive et
                responsable dans nos outils et nos méthodes de travail.
              </p>
              <div className="space-y-3">
                {[
                  'Chatbot citoyen pour les questions publiques',
                  'Cartes interactives des territoires et projets',
                  'Génération de contenus pédagogiques',
                  'Observatoire citoyen de la gouvernance locale',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-white/60 text-sm"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-light shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ─────────────── Réseau Section ─────────────── */

const reseaux = [
  { icon: Brain, label: 'Experts & chercheurs' },
  { icon: Landmark, label: 'Collectivités locales' },
  { icon: Palette, label: 'Artistes & créateurs' },
  { icon: Users, label: 'Acteurs de terrain' },
  { icon: Globe, label: 'Diaspora' },
  { icon: Building2, label: 'Partenaires institutionnels' },
]

function ReseauSection() {
  return (
    <section id="reseau" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="secondary" className="mb-6 bg-forest/5 text-forest border-0 text-xs tracking-widest uppercase px-4 py-1.5">
              Réseau
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-forest mb-6 leading-tight">
              Un espace ouvert
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Africa Structures est un espace de convergence qui réunit ceux qui pensent,
              construisent et transmettent. La transformation africaine se fera
              collectivement — ou ne se fera pas.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6 mb-16">
          {reseaux.map((r, i) => (
            <Reveal key={r.label} delay={i * 0.08}>
              <div className="flex items-center gap-4 p-5 rounded-sm border border-border/50 bg-white hover:border-forest/20 hover:shadow-sm transition-all duration-300 group">
                <div className="w-10 h-10 rounded-sm bg-forest/5 flex items-center justify-center shrink-0 group-hover:bg-forest/10 transition-colors">
                  <r.icon className="w-5 h-5 text-forest" />
                </div>
                <span className="text-sm font-medium text-foreground">{r.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="text-center">
            <Button size="lg" className="bg-forest hover:bg-forest-light text-white px-10 h-12" asChild>
              <a href="#contact">
                Rejoindre le réseau
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ─────────────── Contact Section ─────────────── */

function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal>
            <div>
              <Badge variant="secondary" className="mb-6 bg-forest/5 text-forest border-0 text-xs tracking-widest uppercase px-4 py-1.5">
                Contact
              </Badge>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-forest mb-6 leading-tight">
                Engagez-vous avec nous
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Que vous soyez expert, acteur de terrain, artiste, collectivité ou membre
                de la diaspora — Africa Structures est ouvert à toute collaboration
                constructive. Écrivez-nous pour proposer un partenariat, soutenir un
                projet ou simplement en savoir plus.
              </p>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-forest/5 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                      Courriel
                    </p>
                    <p className="text-sm font-medium">contact@africastructures.org</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-forest/5 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                      Siège
                    </p>
                    <p className="text-sm font-medium">Dakar, Sénégal</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-sm bg-forest/5 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-forest" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                      Web
                    </p>
                    <p className="text-sm font-medium">africastructures.org</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Card className="bg-white border-border/50">
              <CardContent className="pt-8 pb-8 px-8">
                <h3 className="font-display text-xl font-semibold text-forest mb-6">
                  Envoyez-nous un message
                </h3>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                        Nom complet
                      </label>
                      <Input placeholder="Votre nom" className="h-11 bg-muted/30 border-border/50" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                        Courriel
                      </label>
                      <Input
                        type="email"
                        placeholder="votre@email.com"
                        className="h-11 bg-muted/30 border-border/50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                      Sujet
                    </label>
                    <Input placeholder="L'objet de votre message" className="h-11 bg-muted/30 border-border/50" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2 block">
                      Message
                    </label>
                    <Textarea
                      placeholder="Votre message..."
                      rows={5}
                      className="bg-muted/30 border-border/50 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-forest hover:bg-forest-light text-white h-11"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

/* ─────────────── Footer ─────────────── */

function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Top: Manifest phrase */}
        <div className="py-16 md:py-20 border-b border-white/10 text-center">
          <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold leading-snug max-w-3xl mx-auto">
            Transformer l'Afrique ne commence pas par le pouvoir.
            <br />
            <span className="text-gold-light">Cela commence par la structure.</span>
          </p>
        </div>

        {/* Middle: Links grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src="/logo-africa-structures.png"
                alt="Africa Structures"
                className="h-8 w-auto object-contain brightness-0 invert opacity-90"
              />
              <div className="flex flex-col">
                <span className="font-display text-sm font-bold tracking-tight leading-none">
                  AFRICA STRUCTURES
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Penser, structurer et agir pour des sociétés africaines justes et durables.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">
              Piliers
            </h4>
            <ul className="space-y-2.5">
              {['Analyses stratégiques', 'Projets territoriaux', 'Culture & mémoire', 'Formation', 'Outils civiques'].map(
                (item) => (
                  <li key={item}>
                    <span className="text-sm text-white/60">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li className="text-sm text-white/60">Dakar, Sénégal</li>
              <li className="text-sm text-white/60">contact@africastructures.org</li>
              <li className="text-sm text-white/60">africastructures.org</li>
            </ul>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Africa Structures. Tous droits réservés.
          </p>
          <p className="text-white/30 text-xs">
            Think &amp; Do Tank africain — Indépendant et non partisan
          </p>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────── Album & Réalisations Section ─────────────── */

const albumPhotos = [
  { src: '/photos/dakar-cityscape.png', title: 'Dakar — Ville en mouvement', category: 'Territoire' },
  { src: '/photos/community-dialogue.png', title: 'Dialogues communautaires', category: 'Citoyenneté' },
  { src: '/photos/health-community.png', title: 'Mutuelle de santé communautaire', category: 'Santé' },
  { src: '/photos/cultural-performance.png', title: 'Les Royaumes de la Mémoire', category: 'Culture' },
  { src: '/photos/training-citoyenne.png', title: 'Formation des leaders', category: 'Formation' },
  { src: '/photos/entrepreneuriat-local.png', title: 'Entrepreneuriat social', category: 'Économie' },
  { src: '/photos/tech-innovation.png', title: 'Innovation & IA responsable', category: 'Technologie' },
  { src: '/photos/paysage-senegal.png', title: 'Terre de Sénégal', category: 'Paysage' },
  { src: '/photos/cultural-elders.png', title: 'Gardiens de la mémoire', category: 'Culture' },
]

function Lightbox({
  photo,
  onClose,
  onPrev,
  onNext,
}: {
  photo: (typeof albumPhotos)[0]
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKey)
    }
  }, [onClose, onPrev, onNext])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <X className="w-5 h-5" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <ChevronRight className="w-5 h-5 rotate-180" />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-5xl w-full"
      >
        <img
          src={photo.src}
          alt={photo.title}
          className="w-full max-h-[75vh] object-contain rounded-sm"
        />
        <div className="mt-4 text-center">
          <h3 className="text-white font-display text-xl font-semibold">{photo.title}</h3>
          <p className="text-white/50 text-sm mt-1">{photo.category}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

function AlbumSection() {
  const [activePhoto, setActivePhoto] = useState<number | null>(null)
  const [filter, setFilter] = useState('Tous')

  const categories = ['Tous', ...Array.from(new Set(albumPhotos.map((p) => p.category)))]
  const filtered = filter === 'Tous' ? albumPhotos : albumPhotos.filter((p) => p.category === filter)

  return (
    <section id="album" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Badge variant="secondary" className="mb-6 bg-gold/10 text-gold border-0 text-xs tracking-widest uppercase px-4 py-1.5">
              Album
            </Badge>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-forest mb-6 leading-tight">
              Réalisations &amp; Regards
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un aperçu visuel de nos actions sur le terrain, de nos partenaires et de
              l'Afrique que nous construisons. Cette galerie s'enrichira au fil de nos réalisations.
            </p>
          </div>
        </Reveal>

        {/* Category filters */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all ${
                  filter === cat
                    ? 'bg-forest text-white'
                    : 'bg-white text-muted-foreground hover:text-forest border border-border/50 hover:border-forest/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Photo grid — masonry-like */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
          {filtered.map((photo, i) => (
            <Reveal key={photo.title} delay={i * 0.05}>
              <button
                onClick={() => setActivePhoto(i)}
                className={`relative w-full overflow-hidden rounded-sm group cursor-pointer ${
                  i % 5 === 0 ? 'md:row-span-2' : ''
                }`}
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-700 ${
                    i % 5 === 0 ? 'h-64 md:h-full min-h-[320px]' : 'h-48 md:h-56'
                  }`}
                />
                <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-display font-semibold">{photo.title}</p>
                  <p className="text-white/70 text-xs mt-0.5">{photo.category}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Placeholder for future photos */}
        <Reveal delay={0.3}>
          <div className="mt-12 border-2 border-dashed border-border rounded-sm p-8 md:p-12 text-center">
            <div className="w-12 h-12 rounded-full bg-forest/5 flex items-center justify-center mx-auto mb-4">
              <Camera className="w-6 h-6 text-forest/40" />
            </div>
            <h3 className="font-display text-lg font-semibold text-forest/60 mb-2">
              Prochaines réalisations
            </h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto">
              Cette galerie sera enrichie au fil de nos projets et événements sur le terrain.
              Revenez régulièrement pour découvrir nos nouvelles photographies.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activePhoto !== null && (
          <Lightbox
            photo={filtered[activePhoto]}
            onClose={() => setActivePhoto(null)}
            onPrev={() => setActivePhoto((activePhoto - 1 + filtered.length) % filtered.length)}
            onNext={() => setActivePhoto((activePhoto + 1) % filtered.length)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

/* ─────────────── Main Page ─────────────── */

export default function Home() {
  return (
    <main className="font-body">
      <Navigation />
      <HeroSection />
      <ProjetSection />
      <PiliersSection />
      <ProjetsSection />
      <FuturSection />
      <AlbumSection />
      <ReseauSection />
      <ContactSection />
      <Footer />
    </main>
  )
}