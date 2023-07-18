export default {
  global: {
    componenteFormativo: 'Preparaciones tópicas no estériles',
    descripcionCurso:
      'Este componente formativo abarca temas relacionados con las etapas que comprenden la elaboración de las preparaciones magistrales no estériles, en el marco de las BPE (Buenas Prácticas de Elaboración).',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos farmacotécnicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Insumos, materiales de acondicionamiento requeridos para las preparaciones magistrales tópicas no estériles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Insumos requeridos para las preparaciones magistrales tópicas no estériles',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Material de acondicionamiento de las preparaciones magistrales tópicas no estériles ',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Etapas del proceso de elaboración de preparaciones magistrales tópicas no estériles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Procedimiento del proceso de elaboración de preparados magistrales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Requisitos área de recepción y almacenamiento de las preparaciones magistrales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Paquete técnico de producción (Batch Record)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Equipos requeridos para las preparaciones magistrales tópicas no estériles',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar HTML',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Conceptos farmacotécnicos',
      referencia:
        'López, B., García, S., Ortonobes Roig, C.A., y García, R. Ungüentos, pomadas, cremas, geles y pastas: ¿es todo lo mismo? <em>Form Act Pediatr Aten Prim</em>., 8(4), 183-187.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo8_Unguentos_pomadas.pdf',
    },
    {
      tema: 'Conceptos farmacotécnicos',
      referencia:
        'Presidencia de la República. (2016). Decreto 0780 de 2016. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. [6 de mayo de 2016].',
      tipo: 'PDF',
      descarga: '/downloads/Anexo3_decreto_0780_de_2016.pdf',
    },
    {
      tema: 'Conceptos farmacotécnicos',
      referencia:
        'Ministerio de la Protección Social. (2007). Resolución 1403 de 2007. Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos y se dictan otras Disposiciones. [14 de mayo de 2007].',
      tipo: 'PDF',
      descarga: '/downloads/Anexo4_Resolución_1403_de_2007.pdf',
    },
    {
      tema:
        'Insumos, materiales de acondicionamiento requeridos para las preparaciones magistrales tópicas no estériles',
      referencia:
        'Savunisevilla. (2014). <em>Farmacia comunitaria. Paciente. Formulación magistral y formación en atención farmacéutica</em>. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=207Fe-M_5K4',
    },
    {
      tema:
        'Etapas del proceso de elaboración de preparaciones magistrales tópicas no estériles',
      referencia:
        'Red de Autoridades de Medicamentos de Iberoamérica. (2016). <em>Guía de buenas prácticas de elaboración y control de calidad de preparaciones magistrales y oficinales</em>. Red Eami.',
      tipo: 'PDF',
      descarga:
        '/downloads/Anexo6_guia_de_buenas_practicas_elaboracion_control_calidad_preparaciones_magistrales_oficinales.pdf',
    },
    {
      tema:
        'Etapas del proceso de elaboración de preparaciones magistrales tópicas no estériles',
      referencia:
        'Correa, O. (s.f.). <em>Preparados magistrales y oficinales no estériles</em>. Universidad de Antioquia.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo7_Magistrales_no_esteriles.pdf',
    },
    {
      tema:
        'Etapas del proceso de elaboración de preparaciones magistrales tópicas no estériles',
      referencia:
        'Ministerio de la Protección Social. (2008). Resolución 444 de 2008. Por la cual se adopta el Instrumento de Verificación de Cumplimiento de Buenas Prácticas de Elaboración de preparaciones magistrales y se dictan otras disposiciones. [12 de febrero de 2008].',
      tipo: 'PDF',
      descarga: '/downloads/Anexo5_Resolución_444_de_2008.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Buenas prácticas de elaboración magistral',
      significado:
        'conjunto de normas, procesos y procedimientos de carácter técnico que aseguran la correcta elaboración y el control de calidad de los medicamentos magistrales y los preparados oficinales.',
    },
    {
      termino: 'Buenas prácticas de manufactura',
      significado:
        'son las normas, procesos y procedimientos de carácter técnico que aseguran la calidad de los medicamentos, los cosméticos y las preparaciones farmacéuticas a base de recursos naturales.',
    },
    {
      termino: 'Controles en proceso',
      significado:
        'verificaciones que se realizan con el objetivo de comprobar que durante las etapas de ejecución y producción todo se encuentra bajo condiciones controladas.',
    },
    {
      termino: 'Droga (OMS)',
      significado:
        'el nombre de droga resulta aplicable a toda sustancia terapéutica o no, que introducida al cuerpo por medio de los mecanismos clásicos (inhalación, ingestión, fricción, administración parenteral, endovenosa) de administración, es capaz de actuar sobre el sistema nervioso central del individuo hasta generar en él una alteración física e intelectual, la experimentación de nuevas sensaciones o la modificación de su estado psíquico.',
    },
    {
      termino: 'Droga blanca',
      significado:
        'materia prima para preparar las fórmulas magistrales, tales como: aceite de almendras, aceite de manzanilla, azufre, glicerina pura, ácido bórico, bórax, bicarbonato de sodio, entre otros. Este tipo de productos no requiere registro Invima para su comercialización.',
    },
    {
      termino: 'Excipiente',
      significado:
        'producto más o menos inerte que determina la consistencia, forma o volumen de las preparaciones farmacéuticas.',
    },
    {
      termino: 'Farmacotecnia',
      significado:
        'ciencia que estudia las distintas transformaciones a las que deben ser sometidas las materias primas con el fin de darles una forma farmacéutica con la cual se facilite su administración a los seres vivos según una prescripción médica generada por un médico, veterinario u odontólogo o por el resultado de investigaciones clínicas.',
    },
    {
      termino: 'Fórmula magistral tipificada',
      significado: 'aquella fórmula magistral definida en un formulario.',
    },
    {
      termino: 'Garantía de la calidad',
      significado:
        'concepto amplio que cubre todos los aspectos que individual o colectivamente influyen en la calidad de un producto. Comprende la totalidad de las gestiones llevadas a cabo con el objeto de asegurar que los productos elaborados en la oficina de farmacia o servicio de farmacia hospitalario son de la calidad requerida para su uso.',
    },
    {
      termino: 'Monografía de preparado farmacéutico',
      significado:
        'documento que describe, detalladamente, el método de elaboración, especificaciones, propiedades farmacológicas, control de calidad, condiciones de almacenamiento y requerimientos en el etiquetado del preparado farmacéutico.',
    },
    {
      termino: 'PET',
      significado: 'polietileno.',
    },
    {
      termino: 'PEAD',
      significado: 'polietileno de alta calidad.',
    },
    {
      termino: 'PEBD',
      significado: 'polietileno de baja calidad.',
    },
    {
      termino: 'Preparación magistral',
      significado:
        'atención farmacéutica que se hace por parte del químico farmacéutico o un grupo de personas en especial, teniendo en cuenta su perfil fármaco-terapéutico y es de distribución inmediata.',
    },
    {
      termino: 'Preparación magistral no estéril',
      significado:
        'preparación farmacéutica que se puede formular y elaborar en condiciones ambientales controladas, pero no estériles.',
    },
    {
      termino: 'Preparación o preparado oficinal',
      significado:
        'medicamento destinado a su dispensación directa a los pacientes atendidos por las oficinas de farmacia o servicios de farmacia hospitalarios, preparado por un farmacéutico o químico farmacéutico o bajo su dirección, descrito en un formulario oficial, preparado según las buenas prácticas de elaboración y control de calidad establecidas al efecto y con la debida información al paciente.',
    },
    {
      termino: 'Preparado magistral',
      significado:
        'preparado o producto farmacéutico para atender una prescripción médica, de un paciente individual, que requiere de algún tipo de intervención técnica de variada complejidad.',
    },
    {
      termino: 'Principio activo',
      significado:
        'todo compuesto biológicamente activo que se extrae de la droga de un ser vivo utilizado por sus propiedades terapéuticas y que se comercializa sin alterar su estructura química.',
    },
    {
      termino: 'Proceso',
      significado:
        'conjunto de actividades que tienen relación entre sí o que interactúan para transformar elementos de entrada en elementos de salida.',
    },
    {
      termino: 'PS',
      significado: 'poliestireno.',
    },
    {
      termino: 'PVC',
      significado: 'policloruro de vinilo.',
    },
  ],
  referencias: [
    {
      referencia:
        'De Gennaro, A. (2003). Remington farmacia. Editorial Médica Panamericana.',
    },
    {
      referencia:
        'Gómez, B., S. (2004). Manual de laboratorio de farmacia magistral. Universidad de Antioquia.',
    },
    {
      referencia:
        'Ministerio de Salud de Argentina. (2003). Farmacopea argentina.',
      link: 'https://www.argentina.gob.ar/anmat/farmacopea-argentina/libro',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2007). Resolución 1403 de 2007. Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos y se dictan otras Disposiciones. [14 de mayo de 2007].',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2008). Resolución 444 de 2008. Por la cual se adopta el Instrumento de Verificación de Cumplimiento de Buenas Prácticas de Elaboración de preparaciones magistrales y se dictan otras disposiciones. [12 de febrero de 2008].',
    },
    {
      referencia:
        'OSHA. (2014). Pharmaceutical Compounding - Nonsterile Preparations; USP42-NF37. OSHA.',
    },
    {
      referencia:
        'Presidencia de la República. (2016). Decreto 0780 de 2016. Por medio del cual se expide el Decreto Único Reglamentario del Sector Salud y Protección Social. [6 de mayo de 2016]. ',
    },
    {
      referencia:
        'Rosales, Z., J. M., y Muñoz, B., J. C. (2001). Formulación magistral en atención primaria. Medicina de Familia, 2(1), 53.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Morales',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Edwin Amir Moreno Moreno',
          cargo: 'Experto temático',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseñador web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
