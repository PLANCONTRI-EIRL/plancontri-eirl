import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription, DrawerClose } from "@/components/ui/drawer";
import { CheckCircle, DollarSign, Calculator, BriefcaseBusiness, Lightbulb, Users, MessageSquare, MapPin, Phone, Mail, Handshake, Target, Headset, TrendingUp, ClipboardCheck } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";

const LandingPage = () => {
  // Servicios para drawer
  const servicios = [
    {
      key: 'outsourcing-laboral',
      icon: <Users className="h-12 w-12 text-[#7A1F1F] mb-4" />, 
      title: 'Outsourcing Laboral',
      short: 'Gestión externa de procesos laborales y recursos humanos.',
      imagen: `${import.meta.env.BASE_URL}nomina.jpg`,
      detalle: {
        descripcion: 'Externaliza la administración de tu personal y nómina para mayor eficiencia y cumplimiento.',
        beneficios: [
          'Reducción de carga administrativa',
          'Cumplimiento normativo',
          'Optimización de procesos laborales',
        ],
        incluye: [
          'Gestión de planillas',
          'Contratos y liquidaciones',
          'Atención a consultas laborales',
        ],
      },
    },
    {
      key: 'constitucion-empresas',
      icon: <BriefcaseBusiness className="h-12 w-12 text-[#7A1F1F] mb-4" />, 
      title: 'Constitución de Empresas',
      short: 'Acompañamiento integral en la creación legal de tu empresa.',
      imagen: `${import.meta.env.BASE_URL}consultoria.jpg`,
      detalle: {
        descripcion: 'Te guiamos en todo el proceso legal y tributario para constituir tu empresa.',
        beneficios: [
          'Asesoría legal y tributaria',
          'Redacción de estatutos',
          'Gestión de trámites ante SUNARP y SUNAT',
        ],
        incluye: [
          'Elección de tipo societario',
          'Inscripción en registros públicos',
          'Obtención de RUC',
        ],
      },
    },
    {
      key: 'asesoria-legal-corporativa',
      icon: <CheckCircle className="h-12 w-12 text-[#7A1F1F] mb-4" />, 
      title: 'Asesoría Legal Corporativa',
      short: 'Soluciones legales para empresas y sociedades.',
      imagen: `${import.meta.env.BASE_URL}consultoria.jpg`,
      detalle: {
        descripcion: 'Brindamos soporte legal en contratos, estatutos y cumplimiento normativo.',
        beneficios: [
          'Reducción de riesgos legales',
          'Contratos claros y efectivos',
          'Cumplimiento de obligaciones',
        ],
        incluye: [
          'Revisión de documentos',
          'Asesoría en juntas y asambleas',
          'Consultas legales ilimitadas',
        ],
      },
    },
    {
      key: 'asesoria-contable',
      icon: <Calculator className="h-12 w-12 text-[#7A1F1F] mb-4" />, 
      title: 'Asesoría Contable',
      short: 'Soporte experto en gestión y registros contables.',
      imagen: `${import.meta.env.BASE_URL}contabilidad.jpg`,
      detalle: {
        descripcion: 'Resuelve tus dudas contables y mejora la gestión de tus libros.',
        beneficios: [
          'Contabilidad clara y ordenada',
          'Prevención de errores',
          'Ahorro de tiempo',
        ],
        incluye: [
          'Consultas personalizadas',
          'Revisión de libros',
          'Soporte en cierres contables',
        ],
      },
    },
    {
      key: 'asesoria-tributaria',
      icon: <DollarSign className="h-12 w-12 text-[#7A1F1F] mb-4" />, 
      title: 'Asesoría Tributaria',
      short: 'Optimización de impuestos y cumplimiento normativo.',
      imagen: `${import.meta.env.BASE_URL}asesoria.jpg`,
      detalle: {
        descripcion: 'Te ayudamos a cumplir con todas tus obligaciones tributarias.',
        beneficios: [
          'Planificación fiscal',
          'Revisión de declaraciones',
          'Atención a fiscalizaciones',
        ],
        incluye: [
          'Personas y empresas',
          'Consultas ilimitadas',
          'Soporte en auditorías',
        ],
      },
    },
    {
      key: 'asesoria-laboral',
      icon: <Users className="h-12 w-12 text-[#7A1F1F] mb-4" />, 
      title: 'Asesoría Laboral',
      short: 'Consultoría en temas laborales y derechos del trabajador.',
      imagen: `${import.meta.env.BASE_URL}nomina.jpg`,
      detalle: {
        descripcion: 'Resuelve conflictos y dudas laborales con expertos.',
        beneficios: [
          'Cumplimiento de normas laborales',
          'Prevención de sanciones',
          'Mejor clima laboral',
        ],
        incluye: [
          'Consultas legales',
          'Soporte en inspecciones',
          'Gestión de contratos',
        ],
      },
    },
    {
      key: 'asesoria-financiera',
      icon: <TrendingUp className="h-12 w-12 text-[#7A1F1F] mb-4" />, 
      title: 'Asesoría Financiera y Análisis de Rentabilidad de Empresas',
      short: 'Análisis financiero y estrategias para tu empresa.',
      imagen: `${import.meta.env.BASE_URL}planificacion.jpg`,
      detalle: {
        descripcion: 'Mejora la rentabilidad y toma decisiones informadas.',
        beneficios: [
          'Análisis de estados financieros',
          'Proyecciones y presupuestos',
          'Estrategias de rentabilidad',
        ],
        incluye: [
          'Reportes personalizados',
          'Acompañamiento estratégico',
          'Herramientas de control',
        ],
      },
    },
    {
      key: 'asesoria-administrativa',
      icon: <ClipboardCheck className="h-12 w-12 text-[#7A1F1F] mb-4" />, 
      title: 'Asesoría Administrativa',
      short: 'Optimización de procesos y gestión administrativa.',
      imagen: `${import.meta.env.BASE_URL}auditoria.jpg`,
      detalle: {
        descripcion: 'Mejora la eficiencia y organización de tu empresa.',
        beneficios: [
          'Procesos más ágiles',
          'Reducción de costos',
          'Mejor control interno',
        ],
        incluye: [
          'Diagnóstico administrativo',
          'Planes de mejora',
          'Soporte continuo',
        ],
      },
    },
    {
      key: 'registro-marca',
      icon: <Lightbulb className="h-12 w-12 text-[#7A1F1F] mb-4" />, 
      title: 'Registro de Marca y Nombre Comercial',
      short: 'Protege tu marca y tu identidad comercial.',
      imagen: `${import.meta.env.BASE_URL}consultoria.jpg`,
      detalle: {
        descripcion: 'Te ayudamos a registrar y proteger tu marca.',
        beneficios: [
          'Asesoría en trámites',
          'Protección legal',
          'Diferenciación en el mercado',
        ],
        incluye: [
          'Búsqueda de antecedentes',
          'Gestión ante INDECOPI',
          'Seguimiento del proceso',
        ],
      },
    },
    {
      key: 'valoracion-empresas',
      icon: <TrendingUp className="h-12 w-12 text-[#7A1F1F] mb-4" />, 
      title: 'Valoración de Empresas',
      short: 'Determina el valor real de tu empresa.',
      imagen: `${import.meta.env.BASE_URL}planificacion.jpg`,
      detalle: {
        descripcion: 'Realizamos valuaciones profesionales para ventas, fusiones o inversiones.',
        beneficios: [
          'Valoración objetiva',
          'Soporte en negociaciones',
          'Análisis de mercado',
        ],
        incluye: [
          'Informe de valoración',
          'Metodologías reconocidas',
          'Acompañamiento en procesos',
        ],
      },
    },
    {
      key: 'implementacion-niif',
      icon: <ClipboardCheck className="h-12 w-12 text-[#7A1F1F] mb-4" />, 
      title: 'Implementación de las NIIF',
      short: 'Adapta tu contabilidad a las Normas Internacionales.',
      imagen: `${import.meta.env.BASE_URL}contabilidad.jpg`,
      detalle: {
        descripcion: 'Te guiamos en la transición y cumplimiento de las NIIF.',
        beneficios: [
          'Cumplimiento internacional',
          'Mejor acceso a financiamiento',
          'Transparencia financiera',
        ],
        incluye: [
          'Capacitación',
          'Implementación de procesos',
          'Soporte técnico',
        ],
      },
    },
    {
      key: 'cambio-calidad-migratoria',
      icon: <ClipboardCheck className="h-12 w-12 text-[#7A1F1F] mb-4" />, 
      title: 'Cambio de Calidad Migratoria',
      short: 'Asesoría en trámites migratorios y regularización.',
      imagen: `${import.meta.env.BASE_URL}consultoria.jpg`,
      detalle: {
        descripcion: 'Te ayudamos a gestionar tu cambio de calidad migratoria.',
        beneficios: [
          'Trámite ágil y seguro',
          'Cumplimiento legal',
          'Soporte en documentación',
        ],
        incluye: [
          'Revisión de requisitos',
          'Acompañamiento en el proceso',
          'Consultas ilimitadas',
        ],
      },
    },
    {
      key: 'seleccion-personal',
      icon: <Users className="h-12 w-12 text-[#7A1F1F] mb-4" />, 
      title: 'Selección de Personal',
      short: 'Encuentra el talento ideal para tu empresa.',
      imagen: `${import.meta.env.BASE_URL}nomina.jpg`,
      detalle: {
        descripcion: 'Procesos de reclutamiento y selección eficientes y confiables.',
        beneficios: [
          'Ahorro de tiempo',
          'Talento calificado',
          'Reducción de rotación',
        ],
        incluye: [
          'Publicación de vacantes',
          'Entrevistas y evaluaciones',
          'Presentación de candidatos',
        ],
      },
    },
    {
      key: 'asesoria',
      icon: <DollarSign className="h-12 w-12 text-[#7A1F1F] mb-4" />, 
      title: 'Asesoría Tributaria',
      short: 'Optimización de impuestos y cumplimiento normativo para individuos y empresas, maximizando tus ahorros.',
      imagen: `${import.meta.env.BASE_URL}asesoria.jpg`,
      detalle: {
        descripcion: 'Te ayudamos a cumplir con todas tus obligaciones tributarias, optimizando tu carga fiscal y evitando sanciones.',
        beneficios: [
          'Planificación fiscal personalizada',
          'Revisión y presentación de declaraciones',
          'Atención a fiscalizaciones y requerimientos SUNAT',
          'Asesoría en regímenes tributarios',
        ],
        incluye: [
          'Personas naturales y empresas',
          'Consultas ilimitadas durante el servicio',
          'Soporte en auditorías tributarias',
        ],
        articulos: [
          { titulo: '¿Qué es la planificación fiscal?', url: '#' },
          { titulo: 'Errores comunes en declaraciones SUNAT', url: '#' },
        ],
        links: [
          { titulo: 'SUNAT', url: 'https://www.sunat.gob.pe/' },
          { titulo: 'Regímenes Tributarios', url: 'https://www.sunat.gob.pe/legislacion/tribu/regimenes.htm' },
        ],
      },
    },
    {
      key: 'contabilidad',
      icon: <Calculator className="h-12 w-12 text-[#7A1F1F] mb-4" />, 
      title: 'Contabilidad Integral',
      short: 'Gestión completa de libros contables, asegurando registros precisos y actualizados para tu tranquilidad.',
      imagen: `${import.meta.env.BASE_URL}contabilidad.jpg`,
      detalle: {
        descripcion: 'Llevamos tu contabilidad al día, cumpliendo con las normativas vigentes.',
        beneficios: [
          'Elaboración de estados financieros',
          'Registro y control de operaciones',
          'Reportes mensuales y anuales',
        ],
        incluye: [
          'Digitalización de documentos',
          'Asesoría en cierre contable',
          'Atención personalizada',
        ],
        articulos: [
          { titulo: 'Importancia de los estados financieros', url: '#' },
          { titulo: '¿Cómo organizar tus comprobantes?', url: '#' },
        ],
        links: [
          { titulo: 'Normas Contables', url: 'https://www.mef.gob.pe/es/normas-legales-contabilidad' },
        ],
      },
    },
    {
      key: 'consultoria',
      icon: <BriefcaseBusiness className="h-12 w-12 text-[#7A1F1F] mb-4" />, 
      title: 'Consultoría Empresarial',
      short: 'Estrategias financieras personalizadas para impulsar el crecimiento y la rentabilidad de tu negocio.',
      imagen: `${import.meta.env.BASE_URL}consultoria.jpg`,
      detalle: {
        descripcion: 'Te asesoramos en la toma de decisiones estratégicas y optimización de procesos.',
        beneficios: [
          'Análisis financiero y de rentabilidad',
          'Proyecciones y presupuestos',
          'Acompañamiento en proyectos',
        ],
        incluye: [
          'Diagnóstico empresarial',
          'Planes de mejora',
          'Soporte continuo',
        ],
        articulos: [
          { titulo: 'Cómo hacer un diagnóstico empresarial', url: '#' },
        ],
        links: [
          { titulo: 'MEF', url: 'https://www.mef.gob.pe/' },
        ],
      },
    },
    {
      key: 'nomina',
      icon: <Users className="h-12 w-12 text-[#7A1F1F] mb-4" />, 
      title: 'Gestión de Nómina',
      short: 'Procesamiento eficiente y puntual de nóminas, con total cumplimiento legal y sin complicaciones.',
      imagen: `${import.meta.env.BASE_URL}nomina.jpg`,
      detalle: {
        descripcion: 'Gestionamos el cálculo y pago de sueldos, beneficios sociales y obligaciones laborales.',
        beneficios: [
          'Cálculo de planillas y boletas',
          'Gestión de CTS, gratificaciones y vacaciones',
          'Cumplimiento de obligaciones laborales',
        ],
        incluye: [
          'Atención a consultas de trabajadores',
          'Soporte en inspecciones laborales',
          'Confidencialidad garantizada',
        ],
        articulos: [
          { titulo: '¿Qué es la CTS?', url: '#' },
        ],
        links: [
          { titulo: 'Ministerio de Trabajo', url: 'https://www.gob.pe/mtpe' },
        ],
      },
    },
    {
      key: 'auditoria',
      icon: <ClipboardCheck className="h-12 w-12 text-[#7A1F1F] mb-4" />, 
      title: 'Auditoría y Cumplimiento',
      short: 'Evaluaciones rigurosas para asegurar la transparencia financiera y la adherencia a las normativas vigentes.',
      imagen: `${import.meta.env.BASE_URL}auditoria.jpg`,
      detalle: {
        descripcion: 'Realizamos auditorías internas y externas, revisiones de cumplimiento y controles.',
        beneficios: [
          'Detección de riesgos y oportunidades',
          'Recomendaciones de mejora',
          'Cumplimiento normativo',
        ],
        incluye: [
          'Informes detallados',
          'Seguimiento de hallazgos',
          'Soporte en implementación de mejoras',
        ],
        articulos: [
          { titulo: '¿Por qué hacer una auditoría interna?', url: '#' },
        ],
        links: [
          { titulo: 'Normas de Auditoría', url: 'https://www.mef.gob.pe/es/normas-legales-contabilidad' },
        ],
      },
    },
    {
      key: 'planificacion',
      icon: <TrendingUp className="h-12 w-12 text-[#7A1F1F] mb-4" />, 
      title: 'Planificación Financiera',
      short: 'Guía experta para construir un futuro financiero sólido y alcanzar tus metas personales o empresariales.',
      imagen: `${import.meta.env.BASE_URL}planificacion.jpg`,
      detalle: {
        descripcion: 'Te ayudamos a definir objetivos financieros, elaborar presupuestos y planes de inversión.',
        beneficios: [
          'Proyección de crecimiento',
          'Optimización de recursos',
          'Estrategias de inversión',
        ],
        incluye: [
          'Asesoría personalizada',
          'Herramientas de control financiero',
          'Acompañamiento en la toma de decisiones',
        ],
        articulos: [
          { titulo: '¿Por qué planificar tus finanzas?', url: '#' },
        ],
        links: [
          { titulo: 'Educación Financiera SBS', url: 'https://www.sbs.gob.pe/educacion-financiera' },
        ],
      },
    },
  ];

  const [servicioActivo, setServicioActivo] = useState(null);
  const [mostrarTodosServicios, setMostrarTodosServicios] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f6f4] to-[#eaeaea] text-[#222] font-sans">
      <Header />

      {/* Hero Section */}
      <section className="relative py-28 md:py-40 px-4 overflow-hidden bg-gradient-to-br from-[#fff] to-[#f3e9e9] shadow-lg">
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-20">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-6xl md:text-8xl font-extrabold text-[#7A1F1F] leading-tight mb-8 animate-fade-in-down drop-shadow-lg">
              Impulsa tu negocio.<br className="hidden md:block" /> Domina tus finanzas.
            </h1>
            <p className="text-xl md:text-2xl text-[#7A1F1F]/80 mb-12 animate-fade-in-up">
              Soluciones contables y tributarias ágiles, claras y a tu medida.
            </p>
            <Button size="lg" style={{ backgroundColor: '#7A1F1F', color: '#fff', boxShadow: '0 8px 32px rgba(122,31,31,0.15)' }} className="text-lg px-12 py-5 rounded-full font-bold tracking-wide transition-transform hover:scale-105 hover:brightness-90 animate-fade-in-up-delay">
              Agenda tu Consulta Gratuita
            </Button>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fade-in-right">
            <img 
              src={`${import.meta.env.BASE_URL}bg_1.png`} 
              alt="Reunión de equipo profesional en oficina moderna" 
              className="w-full max-w-4xl rounded-2xl shadow-2xl object-cover border-4 border-[#7A1F1F]/10"
            />
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-40 h-40 bg-[#7A1F1F]/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#7A1F1F]/10 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Why Choose Us (Valores) Section */}
      <section className="py-24 md:py-32 bg-[#fff] px-4 border-t border-[#7A1F1F]/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-[#7A1F1F] mb-20 drop-shadow">Nuestra Promesa: Confianza, Claridad y Crecimiento.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-border rounded-xl">
              <Handshake className="h-14 w-14 text-[#7A1F1F] mb-8 mx-auto" />
              <CardTitle className="text-2xl font-bold mb-4 text-[#7A1F1F]">Transparencia Total</CardTitle>
              <CardDescription className="text-lg text-[#7A1F1F]/80">
                Operamos con total honestidad, brindándote información clara y comprensible en cada paso de tu gestión financiera.
              </CardDescription>
            </Card>
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-border rounded-xl">
              <Target className="h-14 w-14 text-[#7A1F1F] mb-8 mx-auto" />
              <CardTitle className="text-2xl font-bold mb-4 text-[#7A1F1F]">Precisión Garantizada</CardTitle>
              <CardDescription className="text-lg text-[#7A1F1F]/80">
                Aseguramos la exactitud en cada cálculo y declaración, minimizando riesgos y optimizando tus resultados financieros.
              </CardDescription>
            </Card>
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border-border rounded-xl">
              <Headset className="h-14 w-14 text-[#7A1F1F] mb-8 mx-auto" />
              <CardTitle className="text-2xl font-bold mb-4 text-[#7A1F1F]">Soporte Dedicado</CardTitle>
              <CardDescription className="text-lg text-[#7A1F1F]/80">
                Tu éxito es nuestra prioridad. Ofrecemos atención personalizada y respuestas rápidas a todas tus inquietudes.
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 md:py-32 bg-[#f8f6f4] px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-[#7A1F1F] mb-10 drop-shadow">Servicios para tu Éxito Financiero</h2>
          <p className="text-xl text-center text-[#7A1F1F]/80 mb-20 max-w-3xl mx-auto">
            Desde la gestión diaria hasta la planificación estratégica, cubrimos todas tus necesidades contables y tributarias.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
            {servicios.slice(0, 6).map((servicio) => (
              <Card
                key={servicio.key}
                className="relative shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 border-border rounded-xl cursor-pointer group"
                onClick={() => setServicioActivo(servicio)}
              >
                <CardHeader>
                  {servicio.icon}
                  <CardTitle className="text-2xl font-bold text-[#7A1F1F]">{servicio.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-[#7A1F1F]/80 mb-2">
                    {servicio.short}
                  </CardDescription>
                  <div className="flex justify-end">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#7A1F1F]/10 text-[#7A1F1F] group-hover:bg-[#7A1F1F]/20 transition">Ver más
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {/* Servicios extra con animación */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 transition-all duration-500 ease-in-out overflow-hidden ${mostrarTodosServicios ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0 pointer-events-none'}`}
            style={{ transitionProperty: 'max-height, opacity, margin-top' }}
          >
            {servicios.slice(6).map((servicio) => (
              <Card
                key={servicio.key}
                className="relative shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 border-border rounded-xl cursor-pointer group"
                onClick={() => setServicioActivo(servicio)}
              >
                <CardHeader>
                  {servicio.icon}
                  <CardTitle className="text-2xl font-bold text-[#7A1F1F]">{servicio.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-[#7A1F1F]/80 mb-2">
                    {servicio.short}
                  </CardDescription>
                  <div className="flex justify-end">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#7A1F1F]/10 text-[#7A1F1F] group-hover:bg-[#7A1F1F]/20 transition">Ver más
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {servicios.length > 6 && (
            <div className="flex justify-center mt-8">
              <Button
                variant="outline"
                className="px-8 py-3 rounded-full font-semibold text-[#7A1F1F] border-[#7A1F1F]/30 hover:bg-[#7A1F1F]/10 transition"
                onClick={() => setMostrarTodosServicios((v) => !v)}
              >
                {mostrarTodosServicios ? 'Ver menos servicios' : 'Ver más servicios'}
              </Button>
            </div>
          )}
          {/* Drawer para detalles de servicio */}
          <Drawer open={!!servicioActivo} onOpenChange={open => !open && setServicioActivo(null)}>
            <DrawerContent className="max-w-2xl w-full mx-auto h-[90vh] md:h-[80vh] flex flex-col">
              <DrawerHeader>
                <div className="flex items-center gap-4">
                  {servicioActivo?.icon}
                  <div>
                    <DrawerTitle>{servicioActivo?.title}</DrawerTitle>
                  </div>
                </div>
                <DrawerDescription className="mt-4 text-base text-foreground">
                  {servicioActivo?.detalle?.descripcion}
                </DrawerDescription>
              </DrawerHeader>
              <div className="flex-1 overflow-y-auto px-6 pb-6">
                {servicioActivo?.imagen && (
                  <img src={servicioActivo.imagen} alt={servicioActivo.title} className="w-full max-h-56 object-cover rounded-xl mb-6 border border-[#7A1F1F]/10 shadow" />
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#7A1F1F] mb-2">Beneficios</h3>
                  <ul className="list-disc pl-6 text-base text-muted-foreground">
                    {servicioActivo?.detalle?.beneficios?.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#7A1F1F] mb-2">Incluye</h3>
                  <ul className="list-disc pl-6 text-base text-muted-foreground">
                    {servicioActivo?.detalle?.incluye?.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
                {servicioActivo?.detalle?.articulos && (
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-[#7A1F1F] mb-2">Artículos Relacionados</h3>
                    <ul className="list-disc pl-6 text-base text-muted-foreground">
                      {servicioActivo.detalle.articulos.map((a, i) => (
                        <li key={i}><a href={a.url} className="text-primary underline hover:text-[#7A1F1F]" target="_blank" rel="noopener">{a.titulo}</a></li>
                      ))}
                    </ul>
                  </div>
                )}
                {servicioActivo?.detalle?.links && (
                  <div className="mb-6">
                    <h3 className="text-lg font-bold text-[#7A1F1F] mb-2">Links Útiles</h3>
                    <ul className="list-disc pl-6 text-base text-muted-foreground">
                      {servicioActivo.detalle.links.map((l, i) => (
                        <li key={i}><a href={l.url} className="text-primary underline hover:text-[#7A1F1F]" target="_blank" rel="noopener">{l.titulo}</a></li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <DrawerClose asChild>
                <Button className="mt-4 w-full" variant="outline">Cerrar</Button>
              </DrawerClose>
            </DrawerContent>
          </Drawer>
        </div>
      </section>

      {/* Entidades Públicas Relacionadas */}
      <section className="py-10 bg-[#fff] px-4 border-t border-[#7A1F1F]/10">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#7A1F1F] mb-6">Entidades Públicas Relacionadas</h3>
          <p className="text-lg text-[#7A1F1F]/80 mb-8">Trabajamos alineados con las principales entidades regulatorias y tributarias del Perú para asegurar el cumplimiento y la transparencia en todos nuestros servicios.</p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <a href="https://www.sunat.gob.pe/" target="_blank" rel="noopener" className="flex flex-col items-center group">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkvtg9L1oBVOoWUMqrwmLVo4Fc4QF5xoNsg&s" alt="SUNAT" className="h-14 w-14 object-contain mb-2 transition-transform group-hover:scale-110 bg-white rounded" />
              <span className="text-base font-semibold text-[#7A1F1F]">SUNAT</span>
            </a>
            <a href="https://www.sbs.gob.pe/" target="_blank" rel="noopener" className="flex flex-col items-center group">
              <img src="https://static.wixstatic.com/media/9604c8_434be0271cec484b8dffb7136608854a~mv2.png/v1/fill/w_3334,h_3334,al_c/SBS-14.png" alt="SBS" className="h-14 w-14 object-contain mb-2 transition-transform group-hover:scale-110 bg-white rounded" />
              <span className="text-base font-semibold text-[#7A1F1F]">SBS</span>
            </a>
            <a href="https://www.mef.gob.pe/" target="_blank" rel="noopener" className="flex flex-col items-center group">
              <img src="https://yt3.googleusercontent.com/ueuMCyNoScCOZ16-EWVvfk_b58l8C9-ejRSvFfCOxY3Sy2MQvUgGDHjiQyQgc7Fht1Cxekv289c=s900-c-k-c0x00ffffff-no-rj" alt="MEF" className="h-14 w-14 object-contain mb-2 transition-transform group-hover:scale-110 bg-white rounded" />
              <span className="text-base font-semibold text-[#7A1F1F]">MEF</span>
            </a>
          </div>
        </div>
      </section>

      {/* Herramientas de Software Contable y Tributario */}
      <section className="py-10 bg-[#f8f6f4] px-4 border-t border-[#7A1F1F]/10">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#7A1F1F] mb-6">Herramientas de Software Utilizadas</h3>
          <p className="text-lg text-[#7A1F1F]/80 mb-8">Trabajamos con los sistemas y aplicativos más utilizados en el sector contable y tributario peruano, garantizando eficiencia, cumplimiento y facilidad en la presentación de información ante SUNAT y otras entidades.</p>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <div className="flex flex-col items-center group">
              <img src="https://realsystems.com.pe/wp-content/uploads/2023/01/logo-circulo.png" alt="CONCAR" className="h-14 w-14 object-contain mb-2 transition-transform group-hover:scale-110 bg-white rounded" />
              <span className="text-base font-semibold text-[#7A1F1F]">CONCAR</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src={`${import.meta.env.BASE_URL}ICONO ERTICOM-08.png`} alt="ERTICOM" className="h-14 w-14 object-contain mb-2 transition-transform group-hover:scale-110 bg-white rounded" />
              <span className="text-base font-semibold text-[#7A1F1F]">ERTICOM</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src={`${import.meta.env.BASE_URL}pdt_128x128.png`} alt="PDT PLAME" className="h-14 w-14 object-contain mb-2 transition-transform group-hover:scale-110 bg-white rounded" />
              <span className="text-base font-semibold text-[#7A1F1F]">PDT PLAME</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src={`${import.meta.env.BASE_URL}pdt00_1.png`} alt="PDT" className="h-14 w-14 object-contain mb-2 transition-transform group-hover:scale-110 bg-white rounded" />
              <span className="text-base font-semibold text-[#7A1F1F]">PDT</span>
            </div>
            <div className="flex flex-col items-center group">
              <img src="https://empresa.solse.pe/web/image/product.template/595/image_1024?unique=1a5c012" alt="PLE" className="h-14 w-14 object-contain mb-2 transition-transform group-hover:scale-110 bg-white rounded" />
              <span className="text-base font-semibold text-[#7A1F1F]">PLE</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="sobre-nosotros" className="py-24 md:py-32 bg-[#fff] px-4 border-t border-[#7A1F1F]/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-[#7A1F1F] mb-20 drop-shadow">Conoce a PLANCONTRI: Tu Aliado Estratégico.</h2>
          <div className="flex flex-col md:flex-row items-center gap-16 text-left">
            <div className="md:w-1/2 flex justify-center">
              <img 
                src={`${import.meta.env.BASE_URL}team-celebrating.jpeg`} 
                alt="Equipo de PLANCONTRI celebrando" 
                className="w-full max-w-lg rounded-2xl shadow-2xl object-cover border-4 border-[#7A1F1F]/10"
              />
            </div>
            <div className="md:w-1/2">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-[#7A1F1F] mb-4">Misión</h3>
                <p className="text-lg text-muted-foreground">
                  Ofrecer a nuestros usuarios un servicio de buena calidad, eficiente, eficaz, puntual y comprometida en nuestro asesoramiento contable, auditorias financieras y en control tributario, con la finalidad de obtener la satisfacción del cliente brindándole información de manera oportuna y confiable para la correcta toma de decisiones y el cumplimiento de sus obligaciones.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-[#7A1F1F] mb-4">Visión</h3>
                <p className="text-lg text-muted-foreground">
                  Ser el ESTUDIO CONTABLE reconocido en el ámbito de Consultoría y Asesoramiento Financiero con una trayectoria de mejora a nivel de resultados en los negocios por nuestra capacidad de brindar soluciones completas que generan beneficios para nuestros usuarios.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-24 md:py-32 bg-[#f8f6f4] px-4 border-t border-[#7A1F1F]/10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-[#7A1F1F] mb-20 drop-shadow">Historias de Éxito: Lo que Dicen Nuestros Clientes.</h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <Card className="p-8 text-center shadow-lg border-border rounded-xl">
                  <p className="text-2xl italic text-[#7A1F1F]/80 mb-8">"PLANCONTRI transformó nuestra gestión tributaria. Su precisión y asesoramiento estratégico son invaluables para nuestro negocio."</p>
                  <p className="font-bold text-[#7A1F1F] text-xl">- María G., Propietaria de Empresa</p>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="p-8 text-center shadow-lg border-border rounded-xl">
                  <p className="text-2xl italic text-[#7A1F1F]/80 mb-8">"Mis finanzas personales nunca estuvieron tan claras. Gracias a PLANCONTRI, tengo total tranquilidad y control sobre mi futuro."</p>
                  <p className="font-bold text-[#7A1F1F] text-xl">- Juan P., Cliente Individual</p>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="p-8 text-center shadow-lg border-border rounded-xl">
                  <p className="text-2xl italic text-[#7A1F1F]/80 mb-8">"El equipo de PLANCONTRI es excepcional. Su soporte y eficiencia en la gestión de nóminas superaron todas mis expectativas."</p>
                  <p className="font-bold text-[#7A1F1F] text-xl">- Sofía R., Gerente de RRHH</p>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 bg-[#fff] px-4 border-t border-[#7A1F1F]/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-[#7A1F1F] text-center mb-20 drop-shadow">Preguntas Frecuentes</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-b border-border">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-primary py-5">¿Qué hace a PLANCONTRI diferente?</AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-5">
                Nos distinguimos por nuestro enfoque personalizado, la transparencia en cada proceso y un compromiso genuino con el éxito financiero de nuestros clientes. No solo gestionamos, asesoramos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-b border-border">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-primary py-5">¿Cómo puedo empezar a trabajar con ustedes?</AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-5">
                Es sencillo. Agenda una consulta gratuita a través de nuestro formulario de contacto o llámanos directamente. Evaluaremos tus necesidades y te propondremos la mejor solución adaptada a ti.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-b border-border">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-primary py-5">¿Ofrecen servicios para startups y pequeñas empresas?</AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground pb-5">
                Absolutamente. Contamos con paquetes y asesoría especializada para emprendedores y startups, ayudándolos a establecer bases financieras sólidas desde el inicio y a crecer de manera sostenible.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 md:py-32 bg-[#f8f6f4] px-4 border-t border-[#7A1F1F]/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-[#7A1F1F] mb-10 drop-shadow">Conéctate con Nosotros</h2>
          <p className="text-xl text-[#7A1F1F]/80 mb-20 max-w-3xl mx-auto">
            Estamos listos para ayudarte a alcanzar tus metas financieras. Envíanos un mensaje o encuéntranos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-8 text-left justify-between h-full">
              <div>
                <div className="flex items-center space-x-5">
                  <MapPin className="h-10 w-10 text-[#7A1F1F]" />
                  <p className="text-lg text-muted-foreground">Av. José Leonardo Ortiz 144, Chiclayo</p>
                </div>
                <div className="flex items-center space-x-5 mt-4">
                  <Phone className="h-10 w-10 text-[#7A1F1F]" />
                  <p className="text-lg text-muted-foreground">(074) 204880</p>
                </div>
                <div className="flex items-center space-x-5 mt-4">
                  <Mail className="h-10 w-10 text-[#7A1F1F]" />
                  <p className="text-lg text-muted-foreground">benjacont_2@hotmail.com</p>
                </div>
              </div>
              <div className="mt-8 rounded-xl overflow-hidden shadow-lg border border-[#7A1F1F]/10">
                <iframe
                  title="Ubicación en Google Maps"
                  src="https://www.google.com/maps?q=Av.+Jos%C3%A9+Leonardo+Ortiz+144,+Chiclayo&output=embed"
                  width="100%"
                  height="220"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="name" className="text-left text-base">Nombre</Label>
                <Input type="text" id="name" placeholder="Su Nombre" className="p-3 text-base" />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="email" className="text-left text-base">Correo Electrónico</Label>
                <Input type="email" id="email" placeholder="su.email@ejemplo.com" className="p-3 text-base" />
              </div>
              <div className="grid w-full items-center gap-2">
                <Label htmlFor="message" className="text-left text-base">Mensaje</Label>
                <Textarea id="message" placeholder="Su Mensaje..." className="p-3 text-base min-h-[120px]" />
              </div>
              <Button type="submit" style={{ backgroundColor: '#7A1F1F', color: '#fff' }} className="w-full text-lg py-4 rounded-lg font-bold tracking-wide shadow-lg transition-transform hover:scale-105 hover:brightness-90">Enviar Mensaje</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 md:py-32 bg-[#7A1F1F] text-white text-center px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-10 drop-shadow">¿Listo para un Futuro Financiero Más Brillante?</h2>
          <p className="text-xl md:text-2xl mb-12">
            Da el primer paso hacia la tranquilidad y el crecimiento. Contáctanos hoy mismo para una consulta personalizada.
          </p>
          <Button size="lg" style={{ backgroundColor: '#fff', color: '#7A1F1F' }} className="text-lg px-12 py-5 rounded-full font-bold tracking-wide shadow-lg transition-transform hover:scale-105 hover:brightness-90">
            Agenda tu Consulta
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-[#7A1F1F] text-white text-center text-sm px-4 border-t border-[#fff]/10">
        <div className="max-w-7xl mx-auto">
          <p className="font-bold">&copy; {new Date().getFullYear()} PLANCONTRI. Todos los derechos reservados.</p>
          <p className="mt-4">
            <a href="#" className="hover:underline mx-3">Política de Privacidad</a> | 
            <a href="#" className="hover:underline mx-3">Términos de Servicio</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;