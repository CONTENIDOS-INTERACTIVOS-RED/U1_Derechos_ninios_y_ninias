export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Los derechos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Declaración Universal de los Derechos Humanos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Origen y contexto histórico',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Principios fundamentales y su relación con la infancia',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Estrategias pedagógicas para la enseñanza de los derechos humanos en el aula',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Declaración sobre los derechos del niño',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Antecedentes y evolución de los derechos de la infancia',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Principios fundamentales de la Declaración',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Importancia del reconocimiento de estos derechos en la educación',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Impacto de la Declaración sobre los Derechos del Niño en la sociedad y en las políticas públicas',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Gómez Isa, F. (2013). <i>La declaración universal de Derechos Humanos</i>. Publicaciones de la Universidad de Deusto. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/33997 ',
    },
    {
      referencia:
        'Naciones Unidas. (1948). <i>Declaración Universal de los Derechos Humanos</i>. ',
      link:
        'https://www.un.org/es/about-us/universal-declaration-of-human-rights',
    },
    {
      referencia:
        'Cantero, F. G. (1991). La enseñanza de los derechos humanos. <i>Revista española de pedagogía</i>, 535-561. ',
      link: 'https://www.jstor.org/stable/23764382',
    },
    {
      referencia:
        'Benítez-Vargas, B. (2023). El constructivismo. <i>Con-Ciencia Boletín Científico de la Escuela Preparatoria No. 3, 10</i>(19), 65-66, 39-71. ',
      link:
        'https://repository.uaeh.edu.mx/revistas/index.php/prepa3/article/view/10453 ',
    },
    {
      referencia:
        'Magendzo, A. (2017). <i>Pedagogía crítica y educación en derechos humanos</i>. ',
      link: 'https://revistas.academia.cl/index.php/pfr/article/view/516 ',
    },
    {
      referencia:
        'Gómez, J. A. C. (2007). <i>Derechos humanos y políticas educativas. Bordón: Revista de pedagogía, 59</i>(2), 313-334. ',
      link:
        'https://recyt.fecyt.es/index.php/BORDON/article/download/36528/20176/114889 ',
    },
    {
      referencia:
        'Rodríguez, L. (2016). <i>Infancia y derechos: del patronato al abogado del niño</i>. Eudeba. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/119812 ',
    },
    {
      referencia:
        'Dávila, P. (2011). <i>Derechos de la infancia y educación inclusiva en América Latina</i>. Ediciones Granica. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/66725 ',
    },
    {
      referencia:
        'Jiménez García, J. F. (2010). <i>Derechos de los niños</i>. Instituto de Investigaciones Jurídicas - UNAM. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/72283 ',
    },
    {
      referencia:
        'Ferrer, A. T. (2008). Declaración de los Derechos del Niño y Convención sobre los Derechos del Niño. <i>Transatlántica de educación</i> (5), 95-111. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=3036618 ',
    },
    {
      referencia:
        'Gil, M. A. L. (2007). <i>Aportes de la pedagogía activa a la educación. Plumilla educativa</i>, 4(1), 33-42. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5920354 ',
    },
    {
      referencia:
        'Montessori, M. (2002). <i>El método montessori</i>. COMPAÑIA NUEVA YORK. ',
      link:
        'https://dspace.itsjapon.edu.ec/jspui/bitstream/123456789/3976/1/El%20Metodo%20Montessori.pdf ',
    },
    {
      referencia:
        'Bueno Rodríguez, I. M. (2015). <i>Reggio Emilia: una manera diferente de trabajar en Educación Infantil</i>. ',
      link: 'https://digibug.ugr.es/handle/10481/40700 ',
    },
    {
      referencia:
        'Berrocal Lanzarot, A. I. & Callejo Rodríguez, C. (2017). <i>La protección jurídica de la infancia y la adolescencia tras la Ley Orgánica</i> 8/2015, de 22 de julio y la Ley 26/2015, de 28 de julio. LA LEY Soluciones Legales S.A. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/56003 ',
    },
    {
      referencia:
        'Méndez, E. G. (1992). <i>La Convención Internacional de los derechos de la infancia: del menor como objeto de la compasión-represión a la infancia-adolescencia como sujeto de derechos</i>. Nuevo Foro Penal, 57, 421. ',
      link:
        'https://heinonline.org/HOL/LandingPage?handle=hein.journals/nuefopnl57&div=9&id=&page=  ',
    },
    {
      referencia:
        'Ruiz Caicedo, F. A. (2013). <i>Ley de Infancia y Adolescencia. Fundamentos de Derecho de Familia</i>. ',
      link:
        'https://repositorio.konradlorenz.edu.co/entities/publication/37eb6023-3936-434d-9296-753be969ee3a ',
    },
    {
      referencia:
        'Familiar, B. (2006). <i>Código de infancia y adolescencia</i>. ',
      link:
        'https://www.icbf.gov.co/sites/default/files/codigoinfancialey1098.pdf ',
    },
    {
      referencia:
        'Zuluaga Osorio, J. N. (2010). <i>La ley de infancia y adolescencia. Fracasos y retos</i>. ',
      link:
        'https://digitk.areandina.edu.co/entities/publication/f58a4645-fdcb-4347-b983-49cd29c3d181',
    },
  ],
  glosario: [
    {
      termino: 'Acoso escolar',
      significado:
        'Comportamientos agresivos y hostiles entre estudiantes, que pueden manifestarse en forma de <i>bullying</i> o intimidación. Incluye actos de violencia verbal, física y psicológica.',
    },
    {
      termino: 'Bienestar infantil',
      significado:
        'Condiciones que garantizan que los niños y las niñas crezcan en un entorno saludable, seguro y afectivo, donde puedan desarrollarse integralmente.',
    },
    {
      termino: 'Ciberacoso',
      significado:
        'Uso de tecnologías de la información, como Internet y redes sociales, para intimidar o acosar a una persona, especialmente a niños y adolescentes.',
    },
    {
      termino: 'Derechos de la infancia y la adolescencia',
      significado:
        'Conjunto de derechos humanos que protegen a los niños, niñas y adolescentes, asegurando su bienestar, desarrollo y protección contra abusos y explotación.',
    },
    {
      termino: 'Derechos humanos',
      significado:
        'Conjunto de principios universales que reconocen la dignidad y los derechos inherentes a todos los seres humanos, incluyendo a niños, niñas y adolescentes.',
    },
    {
      termino: 'Desigualdad social y económica',
      significado:
        'Condición en la que ciertas personas o grupos tienen menos acceso a recursos, oportunidades y servicios básicos, como educación, salud y vivienda, debido a factores sociales y económicos.',
    },
    {
      termino: 'Digitalización',
      significado:
        'Proceso de integración de las tecnologías digitales en diversos aspectos de la vida, incluyendo la educación, la protección y la participación de los niños y adolescentes.',
    },
    {
      termino: 'Educación inclusiva',
      significado:
        'Modelo educativo que asegura que todos los niños, incluidos aquellos con discapacidad o en situación de vulnerabilidad, tengan acceso a una educación de calidad en igualdad de condiciones.',
    },
    {
      termino: 'Explotación infantil',
      significado:
        'Uso indebido de los niños y niñas para obtener beneficios económicos, ya sea a través del trabajo infantil, la prostitución o la mendicidad.',
    },
    {
      termino: 'Inclusión educativa',
      significado:
        'Asegurar que todos los estudiantes, independiente de sus condiciones personales o sociales, puedan acceder a una educación de calidad, sin discriminación.',
    },
    {
      termino: 'Ley de Infancia y Adolescencia',
      significado:
        'Conjunto de normas jurídicas que regulan y protegen los derechos de los niños, niñas y adolescentes en Colombia. Es un marco legal que busca garantizar el pleno ejercicio de sus derechos.',
    },
    {
      termino: 'Participación infantil y juvenil',
      significado:
        'Derecho de los niños y adolescentes a expresar sus opiniones, ser escuchados y participar activamente en los procesos que afectan sus vidas, incluyendo la toma de decisiones en políticas públicas.',
    },
    {
      termino: 'Protección infantil',
      significado:
        'Conjunto de acciones y políticas dirigidas a evitar que los niños, niñas y adolescentes sean víctimas de maltrato, explotación, abuso y otros tipos de violencia.',
    },
    {
      termino: 'Sociedad inclusiva',
      significado:
        'Sociedad que promueve la igualdad de oportunidades y respeto por la diversidad, asegurando que todas las personas, incluyendo niños y adolescentes en situaciones de vulnerabilidad, tengan acceso a los mismos derechos y oportunidades.',
    },
    {
      termino: 'Violencia intrafamiliar',
      significado:
        'Actos de abuso y maltrato físico, emocional o psicológico que ocurren dentro del entorno familiar, afectando principalmente a mujeres y niños.',
    },
  ],
}
