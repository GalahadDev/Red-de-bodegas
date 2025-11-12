
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [scrollDirection, setScrollDirection] = useState('up');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setScrollDirection('down');
      } else {
        // Scrolling up
        setScrollDirection('up');
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen font-sans antialiased">
       
      {/* Header: Logo y menú - Responsive con scroll hide */}
      <header className={`bg-white text-blue-900 py-3 md:py-4 fixed w-full z-20 shadow-md transition-transform duration-300 ${
        scrollDirection === 'down' ? '-translate-y-full md:translate-y-0' : 'translate-y-0'
      }`}>
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
          <a href="#inicio" className="cursor-pointer">
            <Image 
              src="/images/logo.png" 
              alt="REDdeBODEGAS" 
              width={150}
              height={40}
              className="object-contain md:w-[200px] hover:opacity-80 transition"
            />
          </a>
          <nav className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm md:text-lg">
            <a href="#inicio" className="hover:text-red-500 transition cursor-pointer">Inicio</a>
            <a href="#nosotros" className="hover:text-red-500 transition cursor-pointer">Nosotros</a>
            <a href="#servicios" className="hover:text-red-500 transition cursor-pointer">Servicios</a>
            <a href="#caracteristicas" className="hover:text-red-500 transition cursor-pointer">Características</a>
            <a href="#sucursales" className="hover:text-red-500 transition cursor-pointer">Sucursales</a>
            <a href="#contacto" className="hover:text-red-500 transition cursor-pointer">Contacto</a>
          </nav>
        </div>
      </header>

      {/* Hero Section - Responsive */}
      <section 
        id="inicio" className="relative h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center justify-center pt-24 md:pt-20"
        style={{ backgroundImage: "url('/images/bodega.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 z-10 text-white max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Tu solución de almacenamiento confiable
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-4 mb-6 px-4">
            Amplio espacio de almacenamiento y atención personalizada para satisfacer todas tus necesidades de almacenamiento.
          </p>
          <a href="#contacto" className="bg-red-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-red-700 transition text-sm md:text-base inline-block">
  Pide tu presupuesto
</a>
        </div>
      </section>

       {/* Sección de Galería Rediseñada por Bodega */}
<section className="bg-gradient-to-b from-white to-gray-50 py-12 md:py-20 relative overflow-hidden">
  <div className="absolute top-0 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-30"></div>
  
  <div className="container mx-auto px-4 relative z-10">
    <div className="text-center mb-10 md:mb-16">
      <div className="inline-flex items-center gap-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
        </svg>
        Nuestras Instalaciones
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-4">
        <span className="italic">Conoce nuestras</span>
        <br />
        <span className="bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
          dos bodegas
        </span>
      </h2>
      <div className="w-24 h-1.5 bg-red-600 rounded-full mx-auto"></div>
    </div>

    {/* Bodega 1: Cerrillos */}
    <div className="mb-16 md:mb-24">
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-600"></div>
        <div className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <h3 className="text-xl md:text-2xl font-bold">Bodega Cerrillos</h3>
          </div>
        </div>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-600"></div>
      </div>

      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Transversal 5455, 9230115 Cerrillos - Instalaciones modernas con amplio espacio
      </p>

      <div className="relative max-w-6xl mx-auto group/container">
        <div className="overflow-x-scroll pb-8 scroll-smooth [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-blue-600 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-blue-700">
          <div className="flex gap-6 md:gap-8 w-max">
            <div className="flex-shrink-0 w-72 md:w-96 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image 
                  src="/images/camion.jpg" 
                  alt="Transporte Cerrillos" 
                  width={384} 
                  height={256} 
                  className="w-full h-64 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                    Cerrillos
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Transporte Seguro</h4>
                  <p className="text-blue-100 text-sm">Flota moderna y confiable</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-72 md:w-96 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image 
                  src="/images/carga.jpg" 
                  alt="Carga Cerrillos" 
                  width={384} 
                  height={256} 
                  className="w-full h-64 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                    Cerrillos
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Carga Especializada</h4>
                  <p className="text-blue-100 text-sm">Manejo profesional de mercancías</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-72 md:w-96 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image 
                  src="/images/grua.jpg" 
                  alt="Equipo Cerrillos" 
                  width={384} 
                  height={256} 
                  className="w-full h-64 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                    Cerrillos
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Equipo Pesado</h4>
                  <p className="text-blue-100 text-sm">Maquinaria de última generación</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-72 md:w-96 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image 
                  src="/images/camion.jpg" 
                  alt="Bodegaje Cerrillos" 
                  width={384} 
                  height={256} 
                  className="w-full h-64 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                    Cerrillos
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Gestión de Inventario</h4>
                  <p className="text-blue-100 text-sm">Control total de tu mercancía</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-72 md:w-96 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image 
                  src="/images/carga.jpg" 
                  alt="Zona de Carga Cerrillos" 
                  width={384} 
                  height={256} 
                  className="w-full h-64 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                    Cerrillos
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Zona de Descarga</h4>
                  <p className="text-blue-100 text-sm">Acceso directo para vehículos</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-72 md:w-96 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image 
                  src="/images/grua.jpg" 
                  alt="Montacargas Cerrillos" 
                  width={384} 
                  height={256} 
                  className="w-full h-64 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                    Cerrillos
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Equipos de Elevación</h4>
                  <p className="text-blue-100 text-sm">Montacargas disponibles</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Desliza para ver más de Cerrillos
            <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </p>
        </div>
      </div>
    </div>

    {/* Bodega 2: San Joaquín */}
    <div className="mb-12">
      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-red-600"></div>
        <div className="bg-red-600 text-white px-6 py-3 rounded-full shadow-lg">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <h3 className="text-xl md:text-2xl font-bold">Bodega San Joaquín</h3>
          </div>
        </div>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-red-600"></div>
      </div>

      <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
        Rivas 690, San Joaquín - Atención personalizada y ubicación estratégica
      </p>

      <div className="relative max-w-6xl mx-auto group/container">
        <div className="overflow-x-scroll pb-8 scroll-smooth [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-gray-200 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-red-600 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-red-700">
          <div className="flex gap-6 md:gap-8 w-max">
            <div className="flex-shrink-0 w-72 md:w-96 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image 
                  src="/images/front-2.jpg" 
                  alt="Oficinas San Joaquín" 
                  width={384} 
                  height={256} 
                  className="w-full h-64 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                    San Joaquín
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Atención Personalizada</h4>
                  <p className="text-red-100 text-sm">Servicio al cliente de excelencia</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-72 md:w-96 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image 
                  src="/images/camion-2.jpg" 
                  alt="Logística San Joaquín" 
                  width={384} 
                  height={256} 
                  className="w-full h-64 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                    San Joaquín
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Logística Eficiente</h4>
                  <p className="text-red-100 text-sm">Distribución y almacenamiento</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-72 md:w-96 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image 
                  src="/images/descarga-2.jpg" 
                  alt="Almacenamiento San Joaquín" 
                  width={384} 
                  height={256} 
                  className="w-full h-64 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                    San Joaquín
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Espacios Flexibles</h4>
                  <p className="text-red-100 text-sm">Adaptados a tus necesidades</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-72 md:w-96 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image 
                  src="/images/front-camion-2.jpg" 
                  alt="Recepción San Joaquín" 
                  width={384} 
                  height={256} 
                  className="w-full h-64 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                    San Joaquín
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Área de Recepción</h4>
                  <p className="text-red-100 text-sm">Acceso controlado 24/7</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-72 md:w-96 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image 
                  src="/images/montacarga-2.jpg" 
                  alt="Despacho San Joaquín" 
                  width={384} 
                  height={256} 
                  className="w-full h-64 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                    San Joaquín
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Centro de Despacho</h4>
                  <p className="text-red-100 text-sm">Entregas rápidas y puntuales</p>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 w-72 md:w-96 group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <Image 
                  src="/images/panoramica-2.jpg" 
                  alt="Paletizado San Joaquín" 
                  width={384} 
                  height={256} 
                  className="w-full h-64 md:h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-2">
                    San Joaquín
                  </div>
                  <h4 className="text-white font-bold text-xl mb-2">Área de Paletizado</h4>
                  <p className="text-red-100 text-sm">Organización optimizada</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Desliza para ver más de San Joaquín
            <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </p>
        </div>
      </div>
    </div>

    {/* Estadísticas generales */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
      <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-2xl font-bold text-blue-900">+3</p>
        <p className="text-sm text-gray-600">Años de experiencia</p>
      </div>

      <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <p className="text-2xl font-bold text-blue-900">500+</p>
        <p className="text-sm text-gray-600">Clientes satisfechos</p>
      </div>

      <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <p className="text-2xl font-bold text-blue-900">2000+</p>
        <p className="text-sm text-gray-600">m² disponibles</p>
      </div>

      <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
          <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p className="text-2xl font-bold text-blue-900">24/7</p>
        <p className="text-sm text-gray-600">Atención continua</p>
      </div>
    </div>
  </div>
</section>

     {/* Sección Azul Rediseñada: Imagen y texto - Responsive */}
      <section id="nosotros" className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white py-12 md:py-20 relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
            
            {/* Lado izquierdo: Imagen con diseño moderno */}
            <div className="relative order-2 lg:order-1">
              {/* Sombra roja decorativa */}
              <div className="absolute -bottom-8 -left-8 w-full h-full bg-red-600 rounded-2xl opacity-60"></div>
              
              {/* Imagen principal */}
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-2 shadow-2xl">
                <Image 
                  src="/images/montacarga-2.jpg"
                  alt="Nuestra Experiencia" 
                  width={600} 
                  height={450} 
                  className="relative rounded-xl w-full h-auto shadow-lg"
                />
                
                {/* Badge flotante */}
                <div className="absolute -top-4 -right-4 bg-red-600 text-white px-6 py-3 rounded-full shadow-xl">
                  <p className="text-sm font-bold">+3 años</p>
                  <p className="text-xs">de experiencia</p>
                </div>
              </div>

              {/* Stats flotantes */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl shadow-2xl p-4 grid grid-cols-3 gap-4 w-[90%]">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-900">24/7</p>
                  <p className="text-xs text-gray-600">Seguridad</p>
                </div>
                <div className="text-center border-x border-gray-200">
                  <p className="text-2xl font-bold text-blue-900">2000+</p>
                  <p className="text-xs text-gray-600">m² disponibles</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-900">100%</p>
                  <p className="text-xs text-gray-600">Seguro</p>
                </div>
              </div>
            </div>

            {/* Lado derecho: Contenido */}
            <div className="text-left order-1 lg:order-2 space-y-6">
              {/* Badge superior */}
              <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 text-red-300 px-4 py-2 rounded-full text-sm font-semibold">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
                Nuestra Historia
              </div>

              {/* Título */}
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
                  <span className="text-white">TRANSFORMANDO</span>
                  <br />
                  <span className="italic text-blue-200">Espacios en Soluciones</span>
                </h2>
                <div className="w-24 h-1.5 bg-red-600 rounded-full"></div>
              </div>

              {/* Descripción */}
              <div className="space-y-4">
                <p className="text-blue-100 text-base md:text-lg leading-relaxed">
                  Red de Bodegas nació hace 3 años con una visión clara: <span className="text-white font-semibold">revolucionar el almacenamiento en Chile</span>. Desde entonces, nos hemos convertido en líderes del sector, ofreciendo soluciones personalizadas que se adaptan perfectamente a las necesidades de cada cliente.
                </p>
                
                <p className="text-blue-100 text-base md:text-lg leading-relaxed">
                  Nuestro equipo de profesionales altamente capacitados garantiza la <span className="text-white font-semibold">seguridad, eficiencia y confiabilidad</span> que tu negocio necesita. Con ubicaciones estratégicas y cobertura nacional, estamos siempre cerca para servirte.
                </p>
              </div>

              {/* Features con iconos */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition">
                  <div className="bg-red-600 p-2.5 rounded-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Máxima Seguridad</p>
                    <p className="text-blue-300 text-xs">Vigilancia 24/7</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition">
                  <div className="bg-red-600 p-2.5 rounded-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Equipo Experto</p>
                    <p className="text-blue-300 text-xs">Profesionales capacitados</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition">
                  <div className="bg-red-600 p-2.5 rounded-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Ubicación Estratégica</p>
                    <p className="text-blue-300 text-xs">Fácil acceso</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition">
                  <div className="bg-red-600 p-2.5 rounded-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Servicio Rápido</p>
                    <p className="text-blue-300 text-xs">Atención inmediata</p>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="group relative inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-bold text-base shadow-xl hover:bg-red-700 transition-all duration-300">
                  <span>Conoce más sobre nosotros</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

       {/* Sección de Características Rediseñada */}
      <section id="caracteristicas" className="relative bg-white py-16 md:py-24 pb-24 md:pb-32 overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-red-100 rounded-full blur-3xl opacity-50"></div>

        <div className="container mx-auto px-4 relative z-10">
          
          {/* Header de la sección */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Lo que nos hace diferentes
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-blue-900 italic">
              CARACTERÍSTICAS
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Descubre por qué somos la mejor opción para tus necesidades de almacenamiento
            </p>
          </div>

          {/* Grid mejorado de imágenes destacadas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
            
            {/* Imagen 1 */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl h-64 md:h-80">
                <Image 
                  src="/images/pantallas.png" 
                  alt="Sistema de vigilancia" 
                  width={500} 
                  height={400} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Vigilancia Avanzada</h3>
                  <p className="text-blue-100 text-sm">Sistema de monitoreo en tiempo real</p>
                </div>
              </div>
            </div>

            {/* Imagen 2 */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl h-64 md:h-80">
                <Image 
                  src="/images/camaras.jpg" 
                  alt="Sistema de vigilancia avanzado" 
                  width={500} 
                  height={400} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-900/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-2xl font-bold mb-2">Tecnología de Punta</h3>
                  <p className="text-red-100 text-sm">Equipamiento de última generación</p>
                </div>
              </div>
            </div>

          </div>

          {/* Tarjetas de características - Una columna */}
          <div className="space-y-6 max-w-5xl mx-auto">
            
            {/* Característica 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 p-4 rounded-xl shadow-lg flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">Seguridad 24/7 Garantizada</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Cámaras de video de alta definición con detección de movimiento, vigilancia profesional las 24 horas y acceso restringido con sistemas de autenticación avanzados.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Cámaras HD</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Vigilancia Humana</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">Acceso Controlado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Característica 2 */}
            <div className="bg-gradient-to-br from-red-50 to-white border border-red-100 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-4 rounded-xl shadow-lg flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">Soluciones Flexibles y Personalizadas</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Desde bodegas individuales hasta espacios compartidos amplios. Nos adaptamos a tus necesidades específicas con instalaciones modernas y accesibles.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">5-2000 m²</span>
                    <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">Flexibilidad Total</span>
                    <span className="bg-red-100 text-red-800 text-xs font-semibold px-3 py-1 rounded-full">Amplio Acceso</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Característica 3 */}
            <div className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-2xl p-6 md:p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-green-600 p-4 rounded-xl shadow-lg flex-shrink-0">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">Instalaciones de Primera Clase</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Instalaciones modernas con vigilancia profesional continua, cámaras de seguridad con detección inteligente de movimiento y control de acceso restringido para tu tranquilidad.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Modernas</span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Limpias</span>
                    <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">Seguras</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* CTA Final con más espacio */}
          <div className="text-center mt-16 md:mt-15">
          
          </div>

          {/* Título de ubicaciones */}
          <div id="sucursales"className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">Nuestras Ubicaciones</h3>
            <p className="text-gray-600">Visítanos en cualquiera de nuestras dos bodegas</p>
          </div>

          {/* Grid de mapas - Dos ubicaciones */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Mapa 1: Cerrillos */}
            <div id="cerrillos" className="relative group">
              {/* Efecto de sombra y borde */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              
              {/* Contenedor del mapa */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.8776544891744!2d-70.73176892425631!3d-33.49385597334954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c2e4d6e87ddb%3A0x4a86e72ef5c0c7e3!2sTransversal%205455%2C%209230115%20Cerrillos%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1234567890" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  className="w-full"
                ></iframe>
                

                {/* Información de la ubicación */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-4 text-white">
                  <h4 className="font-bold text-lg mb-1">Cerrillos</h4>
                  <p className="text-sm text-blue-100">Transversal 5455, 9230115 Cerrillos</p>
                  <p className="text-sm text-blue-100">Santiago, Región Metropolitana</p>
                </div>
              </div>
            </div>

            {/* Mapa 2: San Joaquín */}
            <div id="san-joaquin" className="relative group">
              {/* Efecto de sombra y borde */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              
              {/* Contenedor del mapa */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.123456789!2d-70.63!3d-33.50!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662d0f3a1234567%3A0x1234567890abcdef!2sRivas%20690%2C%20San%20Joaqu%C3%ADn%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1234567891" 
                  width="100%" 
                  height="400" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  className="w-full"
                ></iframe>
                             
                {/* Información de la ubicación */}
                <div className="bg-gradient-to-r from-red-800 to-red-700 p-4 text-white">
                  <h4 className="font-bold text-lg mb-1">San Joaquín</h4>
                  <p className="text-sm text-red-100">Rivas 690, San Joaquín</p>
                  <p className="text-sm text-red-100">Santiago, Región Metropolitana</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Sección de Servicios - Responsive */}
      <section id="servicios" className="bg-white py-8 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900 italic mb-8 md:mb-16">
            SERVICIOS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            
            {/* Servicio 1 */}
            <div className="text-left">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="text-red-600 flex-shrink-0">
                  <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mt-1 md:mt-2">Bodegas Privadas</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm ml-13 md:ml-16">
                <li>• De 5 m² hasta 200 m²</li>
                <li>• Acceso exclusivo privado con llave</li>
                <li>• Acceso de vehículo hasta la puerta</li>
                <li>• Vigilancia 24x7, humana y electrónica</li>
              </ul>
            </div>

            {/* Servicio 2 */}
            <div className="text-left">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="text-red-600 flex-shrink-0">
                  <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mt-1 md:mt-2">Bodegaje Compartido</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm ml-13 md:ml-16">
                <li>• Solo pago por área de bodegaje utilizada</li>
                <li>• De 5 m² hasta 2000 m²</li>
                <li>• Opción de retiro parcializado</li>
                <li>• Despacho a domicilio</li>
                <li>• Vigilancia 24x7 humana y electrónica</li>
              </ul>
            </div>

            {/* Servicio 3 */}
            <div className="text-left">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="text-red-600 flex-shrink-0">
                  <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mt-1 md:mt-2">Renta de espacio para oficinas y talleres</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm ml-13 md:ml-16">
                <li>• Desde 25 m² hasta 200 m²</li>
                <li>• Corriente trifásica</li>
                <li>• Acceso a baños exclusivos</li>
                <li>• Vigilancia 24x7 humana y electrónica</li>
              </ul>
            </div>

            {/* Servicio 4 */}
            <div className="text-left">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="text-red-600 flex-shrink-0">
                  <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mt-1 md:mt-2">Gestión de acomodación de carga</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm ml-13 md:ml-16">
                <li>• Pallets, tambores, maquinarias</li>
                <li>• Carga y descarga, acomodación y traspasordaje.</li>
                <li>• Desconsolidación de contenedores</li>
                <li>• Bodegaje con opción de retiro parcializado</li>
              </ul>
            </div>

            {/* Servicio 5 */}
            <div className="text-left">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="text-red-600 flex-shrink-0">
                  <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mt-1 md:mt-2">Servicio integral de Tipo Fulfillment</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm ml-13 md:ml-16">
                <li>• Embalaje y etiquetado</li>
                <li>• Despacho a domicilio</li>
                <li>• Punto de retiro y distribución</li>
                <li>• Servicio de bodegaje</li>
              </ul>
            </div>

            {/* Servicio 6 */}
            <div className="text-left">
              <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="text-red-600 flex-shrink-0">
                  <svg className="w-10 h-10 md:w-12 md:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-blue-900 mt-1 md:mt-2">Dirección tributaria y comercial</h3>
              </div>
              <ul className="space-y-2 text-gray-700 text-sm ml-13 md:ml-16">
                <li>• Plan anual 13 UF (No incluye gastos notariales).</li>
                <li>• Para oficinas virtuales y PYMES.</li>
                <li>• Asesoría profesional personalizada.</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Sección de Contacto - Diseño Moderno */}
      <section id="contacto" className="relative min-h-screen flex items-center justify-center py-16 md:py-20 overflow-hidden">
        {/* Imagen de fondo con overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bodegaform.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        </div>

        {/* Contenido */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Panel Izquierdo - Información (Rojo) */}
            <div className="bg-gradient-to-br from-red-700 via-red-600 to-red-800 rounded-3xl p-8 md:p-10 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              {/* Encabezado */}
              <div className="mb-8">
                <p className="text-red-200 text-sm uppercase tracking-wider mb-3 font-semibold">
                  ¡Contáctanos y descubre la solución de almacenamiento perfecta!
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight italic mb-6">
                  ESTAMOS AQUÍ PARA RESPONDER TODAS TUS PREGUNTAS Y BRINDARTE UN SERVICIO PERSONALIZADO.
                </h2>
                <div className="w-16 h-1 bg-white/30"></div>
              </div>

              {/* Descripción */}
              <p className="text-white/90 text-base leading-relaxed mb-10">
                En Red de Bodegas, nos encontrará ayudarte a encontrar la solución de 
                almacenamiento ideal que se adapte a tus necesidades. Ya sea que 
                requieras asesoramiento, tengas consultas específicas o desees realizar 
                una reserva, nuestro equipo de expertos está listo para atenderte. Estamos 
                comprometidos en brindarte un servicio personalizado y eficiente.
              </p>

              {/* Datos de Contacto */}
              <div className="space-y-5">
                <h3 className="text-white text-xl font-bold mb-4 uppercase tracking-wide">
                  Datos de Contacto
                </h3>

                {/* Teléfono */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">+56 9 3485 0678</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold break-all">contacto@reddebodegas.cl</p>
                  </div>
                </div>

                {/* Dirección */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Transversal 5455 #230175 Cerrillos,</p>
                    <p className="text-white/80 text-sm">Región Metropolitana, Chile</p>
                  </div>
                </div>

                {/* Horario */}
                <div className="flex items-start gap-4 group">
                  <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Lunes a viernes: 07:00 a 19:00</p>
                    <p className="text-white/80 text-sm">Sábado: 08:00 a 17:00 | Domingo: cerrado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Panel Derecho - Formulario (Azul) */}
            <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-3xl p-8 md:p-10 shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white uppercase italic mb-3">
                  FORMULARIO DE CONTACTO
                </h2>
                <div className="w-16 h-1 bg-red-500"></div>
              </div>

              <form className="space-y-5">
                {/* Nombre */}
                <div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition backdrop-blur-sm"
                  />
                </div>

                {/* Apellido */}
                <div>
                  <input
                    type="text"
                    placeholder="Apellido"
                    className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition backdrop-blur-sm"
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <input
                    type="tel"
                    placeholder="Teléfono"
                    className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition backdrop-blur-sm"
                  />
                </div>

                {/* Correo */}
                <div>
                  <input
                    type="email"
                    placeholder="Correo"
                    className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition backdrop-blur-sm"
                  />
                </div>

                {/* Mensaje */}
                <div>
                  <textarea
                    placeholder="Déjanos un mensaje..."
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition resize-none backdrop-blur-sm"
                  ></textarea>
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-xl hover:from-red-700 hover:to-red-800 transform hover:scale-[1.02] transition-all duration-200 shadow-lg hover:shadow-xl uppercase tracking-wide"
                >
                  Enviar Formulario
                </button>
              </form>

              {/* Mensaje de privacidad */}
              <p className="text-white/60 text-xs text-center mt-6">
                Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos personales.
              </p>
            </div>

          </div>
        </div>

        {/* WhatsApp flotante mejorado */}
        <a 
          href="https://wa.me/56934850678?text=Hola%20quiero%20más%20información"
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 z-50 group animate-bounce hover:animate-none"
        >
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center animate-ping opacity-75">!</span>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">!</span>
        </a>
      </section>
{/* Footer */}
<footer className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 text-white relative overflow-hidden">
  {/* Elementos decorativos */}
  <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Sección principal del footer */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 md:py-16">
      
      {/* Columna 1: Logo y descripción */}
      <div className="lg:col-span-1">
        <Image 
          src="/images/logo.png" 
          alt="REDdeBODEGAS" 
          width={180}
          height={50}
          className="mb-4 brightness-0 invert"
        />
        <p className="text-blue-200 text-sm leading-relaxed mb-4">
          Soluciones integrales de almacenamiento con más de 3 años de experiencia. Seguridad, confiabilidad y servicio personalizado.
        </p>
        <div className="flex gap-3">
          <a href="https://wa.me/56934850678" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-green-600 p-2.5 rounded-full transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
          <a href="mailto:contacto@reddebodegas.cl" className="bg-white/10 hover:bg-red-600 p-2.5 rounded-full transition-all duration-300">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Columna 2: Enlaces rápidos */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-white">Enlaces Rápidos</h3>
        <ul className="space-y-2">
          <li>
            <a href="#inicio" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group">
              <svg className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Inicio
            </a>
          </li>
          <li>
            <a href="#nosotros" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group">
              <svg className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Nosotros
            </a>
          </li>
          <li>
            <a href="#servicios" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group">
              <svg className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Servicios
            </a>
          </li>
          <li>
            <a href="#caracteristicas" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group">
              <svg className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Características
            </a>
          </li>
          <li>
            <a href="#sucursales" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group">
              <svg className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Sucursales
            </a>
          </li>
          <li>
            <a href="#contacto" className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group">
              <svg className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Contacto
            </a>
          </li>
        </ul>
      </div>

      {/* Columna 3: Nuestras Bodegas */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-white">Nuestras Bodegas</h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
              <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Cerrillos
            </h4>
            <p className="text-blue-200 text-sm">Transversal 5455, 9230115</p>
            <p className="text-blue-200 text-sm">Cerrillos, Santiago</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
              <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              San Joaquín
            </h4>
            <p className="text-blue-200 text-sm">Rivas 690</p>
            <p className="text-blue-200 text-sm">San Joaquín, Santiago</p>
          </div>
        </div>
      </div>

      {/* Columna 4: Contacto */}
      <div>
        <h3 className="text-xl font-bold mb-4 text-white">Contacto</h3>
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <div>
              <p className="text-blue-200 text-sm">Teléfono</p>
              <a href="tel:+56934850678" className="text-white hover:text-red-400 transition-colors">+56 9 3485 0678</a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <div>
              <p className="text-blue-200 text-sm">Email</p>
              <a href="mailto:contacto@reddebodegas.cl" className="text-white hover:text-red-400 transition-colors break-all">contacto@reddebodegas.cl</a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <div>
              <p className="text-blue-200 text-sm">Horario</p>
              <p className="text-white text-sm">Lun - Vie: 07:00 - 19:00</p>
              <p className="text-white text-sm">Sáb: 08:00 - 17:00</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    {/* Línea divisoria */}
    <div className="border-t border-white/10"></div>

    {/* Footer inferior */}
    <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-blue-200 text-sm text-center md:text-left">
        Por <span className="text-white font-semibold">Samuel Llach</span> para <span className="text-white font-semibold">RED DE BODEGAS</span> - Copyright ©. 2025
      </p>
      <div className="flex gap-6 text-sm">
        <a href="#" className="text-blue-200 hover:text-white transition-colors">Política de Privacidad</a>
        <a href="#" className="text-blue-200 hover:text-white transition-colors">Términos y Condiciones</a>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}