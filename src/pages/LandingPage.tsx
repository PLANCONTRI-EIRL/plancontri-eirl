import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, DollarSign, Calculator, BriefcaseBusiness, Lightbulb, Users, MessageSquare, MapPin, Phone, Mail, Handshake, Target, Headset, TrendingUp, ClipboardCheck } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";

const LandingPage = () => {
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
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 border-border rounded-xl">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-[#7A1F1F] mb-4" />
                <CardTitle className="text-2xl font-bold text-[#7A1F1F]">Asesoría Tributaria</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-[#7A1F1F]/80">
                  Optimización de impuestos y cumplimiento normativo para individuos y empresas, maximizando tus ahorros.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 border-border rounded-xl">
              <CardHeader>
                <Calculator className="h-12 w-12 text-[#7A1F1F] mb-4" />
                <CardTitle className="text-2xl font-bold text-[#7A1F1F]">Contabilidad Integral</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-[#7A1F1F]/80">
                  Gestión completa de libros contables, asegurando registros precisos y actualizados para tu tranquilidad.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 border-border rounded-xl">
              <CardHeader>
                <BriefcaseBusiness className="h-12 w-12 text-[#7A1F1F] mb-4" />
                <CardTitle className="text-2xl font-bold text-[#7A1F1F]">Consultoría Empresarial</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-[#7A1F1F]/80">
                  Estrategias financieras personalizadas para impulsar el crecimiento y la rentabilidad de tu negocio.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 border-border rounded-xl">
              <CardHeader>
                <Users className="h-12 w-12 text-[#7A1F1F] mb-4" />
                <CardTitle className="text-2xl font-bold text-[#7A1F1F]">Gestión de Nómina</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-[#7A1F1F]/80">
                  Procesamiento eficiente y puntual de nóminas, con total cumplimiento legal y sin complicaciones.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 border-border rounded-xl">
              <CardHeader>
                <ClipboardCheck className="h-12 w-12 text-[#7A1F1F] mb-4" />
                <CardTitle className="text-2xl font-bold text-[#7A1F1F]">Auditoría y Cumplimiento</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-[#7A1F1F]/80">
                  Evaluaciones rigurosas para asegurar la transparencia financiera y la adherencia a las normativas vigentes.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2 border-border rounded-xl">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-[#7A1F1F] mb-4" />
                <CardTitle className="text-2xl font-bold text-[#7A1F1F]">Planificación Financiera</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-[#7A1F1F]/80">
                  Guía experta para construir un futuro financiero sólido y alcanzar tus metas personales o empresariales.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
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
            <div className="space-y-8 text-left">
              <div className="flex items-center space-x-5">
                <MapPin className="h-10 w-10 text-[#7A1F1F]" />
                <p className="text-lg text-muted-foreground">Av. José Leonardo Ortiz 144, Chiclayo</p>
              </div>
              <div className="flex items-center space-x-5">
                <Phone className="h-10 w-10 text-[#7A1F1F]" />
                <p className="text-lg text-muted-foreground">(074) 204880</p>
              </div>
              <div className="flex items-center space-x-5">
                <Mail className="h-10 w-10 text-[#7A1F1F]" />
                <p className="text-lg text-muted-foreground">benjacont_2@hotmail.com</p>
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