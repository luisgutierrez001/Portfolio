export const profile = {
	name: 'Luis Eduardo Gutierrez Arias',
	role: 'Desarrollador de Software Full-Stack',
	tagline:
		'Transformo procesos complejos en plataformas web claras, escalables y mantenibles.',
	summary:
		'Desarrollador full-stack enfocado en soluciones web empresariales, con experiencia en frontend, backend, bases de datos MySQL e integracion de APIs. Participo en el desarrollo de sistemas modulares para gestion de personal y procesos internos, cuidando rendimiento, escalabilidad y experiencia de usuario.',
	about:
		'Construyo aplicaciones web para operaciones reales: modulos administrativos, flujos de registro, reportes, integraciones API y consultas SQL optimizadas. Me gusta trabajar con entregas iterativas, documentar decisiones importantes y mantener interfaces simples que ayuden a las personas a completar tareas con menos friccion.',
	email: 'luiseduardogutierrezarias003@gmail.com',
	linkedin: 'https://www.linkedin.com/in/eduardoguti%C3%A9rreza',
	github: 'https://github.com/luisgutierrez001',
	cv: '/pdf/Luis-Eduardo-GA-cv.pdf',
	photo: '/images/profile-pic.png',
	fullBodyPhoto: '/images/about.jpeg',
	heroSides: [
		{
			title: 'builder',
			description:
				'Diseno soluciones web empresariales claras, responsivas y enfocadas en mejorar procesos reales.',
			align: 'left',
		},
		{
			title: '<coder>',
			description:
				'Construyo frontend, backend, APIs y bases de datos con codigo mantenible y orientado al rendimiento.',
			align: 'right',
		},
	],
	stats: [
		{ value: '2+', label: 'experiencias profesionales' },
		{ value: '5', label: 'proyectos desarrollados' },
		{ value: '7+', label: 'certificaciones' },
	],
	focus: [
		'Sistemas empresariales modulares',
		'APIs REST e integraciones',
		'Bases de datos MySQL',
		'Interfaces responsivas',
	],
};

export const aboutStories = [
	{
		title: 'Invitacion a Talent Land Mexico',
		category: 'Evento tecnologico',
		description:
			'Una experiencia con mi equipo para descubrir tecnologia, oportunidades y nuevas ideas aplicadas a la industria.',
		lesson:
			'Aprender de otros y conectar tendencias con problemas reales.',
		image: 'images/1781679236045.jpeg',
		icon: 'uil-rocket',
	},
	{
		title: 'Creacion de videojuego',
		category: 'Proyecto institucional',
		description:
			'Desarrolle junto a un colega un videojuego presentado a nivel institucional, combinando creatividad, logica y colaboracion.',
		lesson:
			'Comprender el ciclo completo: idea, construccion, ajustes y presentacion.',
		image: 'images/mapa.png',
		icon: 'uil-game-structure',
	},
	{
		title: 'Concurso de programacion',
		category: 'Logro academico',
		description:
			'Alcance el podio en un concurso institucional de programacion gracias a la practica constante y el trabajo bajo presion.',
		lesson:
			'Disciplina, confianza y mejores decisiones tecnicas bajo presion.',
		image: 'images/concurso.jpg',
		icon: 'uil-award',
	},
];

export const skillGroups = [
	{
		title: 'Frontend',
		subtitle: 'Interfaces claras, responsivas y mantenibles',
		icon: 'uil-brackets-curly',
		open: true,
		skills: [
			{ name: 'HTML5 / CSS3', level: 92 },
			{ name: 'JavaScript', level: 85 },
			{ name: 'React', level: 82 },
			{ name: 'Next.js', level: 72 },
			{ name: 'Tailwind CSS', level: 76 },
			{ name: 'Bootstrap', level: 75 },
		],
	},
	{
		title: 'Backend',
		subtitle: 'Logica de negocio, APIs y servicios web',
		icon: 'uil-server-network',
		open: false,
		skills: [
			{ name: 'PHP / Laravel', level: 72 },
			{ name: 'Node.js', level: 70 },
			{ name: 'APIs RESTful', level: 78 },
			{ name: 'MVC', level: 74 },
			{ name: 'Microservicios', level: 64 },
			{ name: 'Autenticacion segura', level: 66 },
		],
	},
	{
		title: 'Datos y procesos',
		subtitle: 'Modelado, consultas y automatizacion operativa',
		icon: 'uil-database',
		open: false,
		skills: [
			{ name: 'MySQL', level: 82 },
			{ name: 'SQL intermedio', level: 76 },
			{ name: 'Procedimientos almacenados', level: 65 },
			{ name: 'PostgreSQL', level: 68 },
			{ name: 'MongoDB', level: 60 },
			{ name: 'Reportes PDF / Excel', level: 70 },
		],
	},
	{
		title: 'Herramientas',
		subtitle: 'Trabajo colaborativo y mejora continua',
		icon: 'uil-users-alt',
		open: false,
		skills: [
			{ name: 'Git / GitHub', level: 78 },
			{ name: 'Scrum / Agile / XP', level: 72 },
			{ name: 'Postman', level: 72 },
			{ name: 'MySQL Workbench', level: 78 },
			{ name: 'CI/CD basico', level: 58 },
			{ name: 'Pruebas funcionales', level: 64 },
		],
	},
];

export const projects = [
	{
		title: 'Plataforma Victoria147',
		type: 'Plataforma comunitaria',
		description:
			'Plataforma digital que conecta y fortalece una comunidad de mujeres emprendedoras mediante directorios, perfiles de negocio, productos, servicios, beneficios y actividades.',
		impact:
			'Centralizamos la comunidad, aumentamos la visibilidad de sus negocios y habilitamos la gestion de contenido, usuarios, permisos y recuperacion de cuentas.',
		stack: ['Node.js', 'JavaScript', 'Moleculer', 'REST API', 'MySQL', 'MongoDB', 'Sequelize', 'NATS', 'JWT', 'Handlebars', 'Jest', 'PM2'],
		images: ['/images/victoria-one.png', '/images/victoria-two.png', '/images/victoria-three.png'],
		demoUrl: 'https://victoria147-dev.plataforma-empresarial.com/',
		repoUrl: 'https://github.com/GitVlimMaster/SISTWEB_Plataforma_Victoria147',
	},
	{
		title: 'Checador VLIM',
		type: 'Plataforma de RH',
		description:
			'Plataforma interna para asistencia y Recursos Humanos con reconocimiento facial, horarios, incidencias, permisos, vacaciones y flujos de aprobacion.',
		impact:
			'Automatizamos controles manuales, reportes de horas, notificaciones y administracion de colaboradores, cursos y activos con integraciones empresariales.',
		stack: ['Node.js', 'JavaScript', 'Moleculer', 'MySQL', 'Sequelize', 'AWS S3', 'Rekognition', 'JWT', 'REST API', 'NATS', 'ExcelJS', 'PDF-Lib'],
		images: ['/images/checador-one.png', '/images/checador-two.png', '/images/checador-three.png', '/images/checador-four.png', '/images/checador-five.png'],
		demoUrl: 'https://sapo.vlim.mx/',
		repoUrl: 'https://github.com/GitVlimMaster/SISTWEB_ChecadorVLIM',
	},
	{
		title: 'Beyserin Consulting',
		type: 'Sitio web corporativo',
		description:
			'Sitio corporativo para una consultora especializada en tecnologia, desarrollo de software, soluciones empresariales y captacion de talento TI.',
		impact:
			'Creamos una presencia digital profesional, servicios claros, experiencia responsiva, optimizacion SEO y solicitudes de contacto automatizadas por correo.',
		stack: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'PHP', 'PHPMailer', 'SMTP', 'Apache'],
		images: ['/images/beyserin-one.png', '/images/beyserin-two.png', '/images/beyserin-three.png'],
		demoUrl: 'https://beyserinconsulting.com/',
		repoUrl: 'https://github.com/GitVlimMaster/PAGWEB_Beyserin26',
	},
	{
		title: 'Grupo Landeros',
		type: 'Gestion y punto de venta',
		description:
			'Sistema integral para una cadena de carnicerias que centraliza ventas, inventarios, clientes, creditos, compras, produccion y control de caja.',
		impact:
			'Aportamos una solucion modular que mejora la trazabilidad, reduce procesos manuales y facilita la administracion de distintas sucursales.',
		stack: ['React', 'Vite', 'Material UI', 'Node.js', 'Moleculer', 'PostgreSQL', 'JWT', 'AWS S3', 'WebSockets', 'Impresion termica'],
		images: ['/images/landeros-one.png', '/images/landeros-two.png', '/images/landeros-three.png'],
		demoUrl: 'https://dev.landysystem.com.mx/login',
		repoUrl: 'https://github.com/GitVlimMaster/SISTWEB_LandiSystem',
	},
	{
		title: 'El Cazuelon',
		type: 'Gestion para restaurante',
		description:
			'Sistema para punto de venta, mesas, reservaciones, comandas de cocina, menu, cobro, division de cuentas, cancelaciones y permisos.',
		impact:
			'Conectamos meseros, cocina y caja para agilizar el servicio y brindar mayor control sobre cada pedido, comanda y ticket.',
		stack: ['React', 'Vite', 'Material UI', 'Node.js', 'Moleculer', 'PostgreSQL', 'WebSockets', 'JWT', 'Impresion de tickets'],
		images: ['/images/cazuelon-one.png', '/images/cazuelon-two.png', '/images/cazuelon-three.png'],
		demoUrl: 'https://pos-dev.landysystem.com.mx/login',
		repoUrl: 'https://github.com/GitVlimMaster/SISTWEB_LandiSystem',
	},
];

export const experiences = [
	{
		role: 'Desarrollador Full-Stack',
		company: 'VLIM TIC',
		period: 'Enero 2026 - Actualidad',
		location: 'Mexico',
		type: 'Profesional',
		description:
			'Desarrollo y mejora de plataformas web empresariales, participando en modulos clave para comunidades, gestion de personal y operacion interna.',
		highlights: [
			'Desarrollo y mantenimiento de modulos de administracion y usuario.',
			'Validacion y sanitizacion de datos, mejora de formularios e interfaces responsivas.',
			'Depuracion, pruebas funcionales, documentacion tecnica y mejora continua.',
		],
		stack: ['Node.js', 'JavaScript', 'Moleculer', 'MySQL', 'MongoDB', 'REST API'],
		media: [
			{ src: '/images/vlim-one.jpeg', alt: 'Luis junto a integrantes de su equipo de trabajo' },
			{ src: '/images/vlim-two.jpeg', alt: 'Luis junto a integrantes de su equipo de trabajo' },
			{ src: '/images/vlim-three.jpeg', alt: 'Luis junto a integrantes de su equipo de trabajo' },
		],
	},
	{
		role: 'Desarrollador Full-Stack',
		company: 'Palmertec',
		period: 'Mayo 2024 - Agosto 2024',
		location: 'Mexico',
		type: 'Profesional',
		description:
			'Lidere el desarrollo de un sistema web para gestion medica de citas, pacientes y personal, implementado bajo metodologia XP.',
		highlights: [
			'Desarrollo full-stack del sistema medico y sus flujos administrativos.',
			'Implementacion de roles, permisos y autenticacion segura.',
			'Despliegue en servidor propio para acceso multiusuario mediante red.',
		],
		stack: ['Full Stack', 'Autenticacion', 'Base de datos', 'Servidores', 'XP'],
		media: [],
	},
	{
		role: 'Desarrollador de proyectos academicos',
		company: 'Universidad Tecnologica de Tecamac',
		period: '2024 - 2026',
		location: 'Mexico',
		type: 'Academico',
		description:
			'Participacion en soluciones web y de datos enfocadas en productos funcionales, analisis de informacion y experiencias de usuario.',
		highlights: [
			'Desarrollo colaborativo de un videojuego presentado a nivel institucional.',
			'Participacion y posicion en el podio de un concurso institucional de programacion.',
			'Colaboracion en equipo, documentacion tecnica y control de versiones.',
		],
		stack: ['JavaScript', 'Desarrollo web', 'Logica', 'Git', 'Trabajo colaborativo'],
		media: [
			{ src: '/images/uttec-one.jpeg', alt: 'Actividad academica en la Universidad Tecnologica de Tecamac' },
			{ src: '/images/uttec-two.jpeg', alt: 'Actividad academica en la Universidad Tecnologica de Tecamac' },
		],
	},
];

export const certifications = [
	{
		title: 'Introduction to Artificial Intelligence Engineering',
		issuer: 'Silicon Valley, California, USA',
		date: 'Abril 2026',
		category: 'Inteligencia artificial',
		description:
			'Formacion introductoria en fundamentos de ingenieria aplicada a inteligencia artificial.',
		credentialUrl: '/certifications/INTRODUCCIÓN-A-LA-INTELIGENCIA-ARTIFICIAL.pdf',
		downloadUrl: '/certifications/INTRODUCCIÓN-A-LA-INTELIGENCIA-ARTIFICIAL.pdf',
	},
	{
		title: 'Transformative Mindset Course',
		issuer: 'TrepCamp Academy',
		date: 'Abril 2026',
		category: 'Crecimiento profesional',
		description:
			'Curso enfocado en mentalidad de crecimiento, adaptabilidad y desarrollo profesional.',
		credentialUrl: '/certifications/Transforma-tu-mentalidad.pdf.pdf',
		downloadUrl: '/certifications/Transforma-tu-mentalidad.pdf.pdf',
	},
	{
		title: 'Scrum Fundamentals Certified',
		issuer: 'Chairman Academic Council',
		date: 'Enero 2026',
		category: 'Agile',
		description:
			'Certificacion en fundamentos de Scrum, roles, eventos y trabajo iterativo.',
		credentialUrl: '/certifications/ScrumFundamentalsCertified-LuisEduadoGutiérrezArias-1139117.pdf',
		downloadUrl: '/certifications/ScrumFundamentalsCertified-LuisEduadoGutiérrezArias-1139117.pdf',
	},
	{
		title: 'Project Management Fundamentals',
		issuer: 'Google',
		date: 'Marzo 2025',
		category: 'Gestion de proyectos',
		description:
			'Fundamentos de gestion de proyectos, organizacion de tareas y seguimiento de entregables.',
		credentialUrl: '/certifications/Project-Management-Fundamentals.pdf',
		downloadUrl: '/certifications/Project-Management-Fundamentals.pdf',
	},
	{
		title: 'Project Management & Agile Methodology Fundamentals',
		issuer: 'Santander Open Academy',
		date: 'Julio 2025',
		category: 'Agile',
		description:
			'Bases de gestion de proyectos y metodologias agiles aplicadas a entornos colaborativos.',
		credentialUrl: '',
		downloadUrl: '',
	},
	{
		title: 'Linux Essentials Professional Development',
		issuer: 'Linux Professional Institute',
		date: 'Septiembre 2023',
		category: 'Linux',
		description:
			'Conocimientos esenciales sobre Linux, terminal, sistema de archivos y administracion basica.',
		credentialUrl: '/certifications/Linux-Essentials.pdf',
		downloadUrl: '/certifications/Linux-Essentials.pdf',
	},
	{
		title: 'Mindfulness & Worklife Balance',
		issuer: 'Santander Open Academy',
		date: 'Julio 2025',
		category: 'Habilidades blandas',
		description:
			'Formacion orientada a balance profesional, gestion personal y bienestar en el trabajo.',
		credentialUrl: '/certifications/MINDFULNEES-&-WORKLIFE-BALANCE.pdf',
		downloadUrl: '/certifications/MINDFULNEES-&-WORKLIFE-BALANCE.pdf',
	},
];

export const contact = {
	title: 'Trabajemos juntos',
	description:
		'Si buscas un desarrollador full-stack para construir, mantener u optimizar plataformas web empresariales, puedo ayudarte a convertir procesos complejos en soluciones claras y funcionales.',
	availability: 'Disponible para colaborar en proyectos web, sistemas internos y mejora de productos digitales.',
	links: [
		{
			label: 'Email',
			value: profile.email,
			href: `mailto:${profile.email}`,
			icon: 'uil-envelope',
		},
		{
			label: 'LinkedIn',
			value: 'eduardogutierreza',
			href: profile.linkedin,
			icon: 'uil-linkedin-alt',
		},
		{
			label: 'GitHub',
			value: 'luisgutierrez001',
			href: profile.github,
			icon: 'uil-github-alt',
		},
		{
			label: 'CV',
			value: 'Descargar CV',
			href: profile.cv,
			icon: 'uil-file-download',
			download: true,
		},
	],
};

export const translations = {
	en: {
		'nav.home': 'Home',
		'nav.about': 'About',
		'nav.skills': 'Skills',
		'nav.projects': 'Projects',
		'nav.experience': 'Experience',
		'nav.certifications': 'Certs',
		'nav.contact': 'Contact',
		'language.label': 'EN',
		'home.intro': 'Hi, I am',
		'home.left.title': 'builder',
		'home.left.description':
			'I design clear, responsive business web solutions focused on improving real processes.',
		'home.right.title': '<coder>',
		'home.right.description':
			'I build frontend, backend, APIs and databases with maintainable, performance-oriented code.',
		'home.role': 'Full-Stack Software Developer',
		'home.tagline':
			'I turn complex processes into clear, scalable and maintainable web platforms.',
		'home.downloadCv': 'Download CV',
		'home.writeMe': 'Write me',
		'home.scroll': 'Scroll down',
		'about.title': 'About Me',
		'about.subtitle': 'Who I am',
		'about.summary':
			'Full-stack developer focused on business web solutions, with experience in frontend, backend, MySQL databases and API integration. I contribute to modular systems for personnel management and internal processes, taking care of performance, scalability and user experience.',
		'about.detail':
			'I build web applications for real operations: administrative modules, registration flows, reports, API integrations and optimized SQL queries. I enjoy working through iterative delivery, documenting important decisions and keeping interfaces simple so people can complete tasks with less friction.',
		'about.stat.0': 'professional experiences',
		'about.stat.1': 'developed projects',
		'about.stat.2': 'certifications',
		'about.focus.0': 'Modular business systems',
		'about.focus.1': 'REST APIs and integrations',
		'about.focus.2': 'MySQL databases',
		'about.focus.3': 'Responsive interfaces',
		'about.downloadCv': 'Download CV',
		'about.storyTitle': 'Beyond the code',
		'about.storyIntro':
			'A more personal look at experiences that shaped my way of learning, building and collaborating.',
		'about.storyImage': 'Image pending',
		'about.storyLesson': 'What it gave me',
		'about.story.0.title': 'Invitation to Talent Land Mexico',
		'about.story.0.category': 'Technology event',
		'about.story.0.description':
			'An experience with my team to discover technology, opportunities and new ideas applied to the industry.',
		'about.story.0.lesson':
			'Learning from others and connecting trends with real problems.',
		'about.story.1.title': 'Video game creation',
		'about.story.1.category': 'Institutional project',
		'about.story.1.description':
			'I developed a video game with a colleague for an institutional presentation, combining creativity, logic and collaboration.',
		'about.story.1.lesson':
			'Understanding the complete cycle: idea, build, adjustments and presentation.',
		'about.story.2.title': 'Programming contest',
		'about.story.2.category': 'Academic achievement',
		'about.story.2.description':
			'I reached the podium in an institutional programming contest through consistent practice and focused work under pressure.',
		'about.story.2.lesson':
			'Discipline, confidence and better technical decisions under pressure.',
		'skills.title': 'Skills',
		'skills.subtitle': 'Technical focus',
		'skills.group.0.title': 'Frontend',
		'skills.group.0.subtitle': 'Clear, responsive and maintainable interfaces',
		'skills.group.1.title': 'Backend',
		'skills.group.1.subtitle': 'Business logic, APIs and web services',
		'skills.group.2.title': 'Data and processes',
		'skills.group.2.subtitle': 'Modeling, queries and operational automation',
		'skills.group.3.title': 'Tools',
		'skills.group.3.subtitle': 'Collaborative work and continuous improvement',
		'skills.level.junior': 'Junior',
		'skills.level.juniorAdvanced': 'Advanced Junior',
		'skills.level.nearMiddle': 'Approaching Middle',
		'skills.level.middle': 'Middle',
		'skills.level.middleAdvanced': 'Advanced Middle',
		'skills.item.APIs RESTful': 'RESTful APIs',
		'skills.item.Microservicios': 'Microservices',
		'skills.item.Autenticacion segura': 'Secure authentication',
		'skills.item.Datos y procesos': 'Data and processes',
		'skills.item.SQL intermedio': 'Intermediate SQL',
		'skills.item.Procedimientos almacenados': 'Stored procedures',
		'skills.item.Reportes PDF / Excel': 'PDF / Excel reports',
		'skills.item.Herramientas': 'Tools',
		'skills.item.Trabajo colaborativo y mejora continua':
			'Collaborative work and continuous improvement',
		'skills.item.Pruebas funcionales': 'Functional testing',
		'projects.title': 'Projects',
		'projects.subtitle': 'Selected work',
		'projects.intro':
			'Projects where I have worked on business systems, responsive interfaces, API integration, databases and process automation.',
		'projects.preview': 'Preview pending',
		'projects.visual.overview': 'Project overview',
		'projects.visual.technology': 'Technology',
		'projects.visual.impact': 'Impact',
		'projects.0.type': 'Community platform',
		'projects.0.description':
			'A digital platform connecting and strengthening a community of women entrepreneurs through directories, business profiles, products, services, benefits and activities.',
		'projects.0.impact':
			'We centralized the community, increased business visibility and enabled content, user, permission and account recovery management.',
		'projects.1.type': 'HR platform',
		'projects.1.description':
			'Internal attendance and Human Resources platform with facial recognition, schedules, incidents, leave, vacations and approval workflows.',
		'projects.1.impact':
			'We automated manual controls, work-hour reports, notifications and employee, training and asset management with enterprise integrations.',
		'projects.2.type': 'Corporate website',
		'projects.2.description':
			'Corporate website for a consulting firm specializing in technology, software development, enterprise solutions and IT talent acquisition.',
		'projects.2.impact':
			'We created a professional digital presence, clear service presentation, responsive design, SEO optimization and automated email contact requests.',
		'projects.3.type': 'Management and point of sale',
		'projects.3.description':
			'Comprehensive system for a butcher shop chain centralizing sales, inventory, customers, credit, purchasing, production and cash control.',
		'projects.3.impact':
			'We delivered a modular solution that improves traceability, reduces manual processes and simplifies multi-branch administration.',
		'projects.4.type': 'Restaurant management',
		'projects.4.description':
			'System for point of sale, tables, reservations, kitchen orders, menu, payments, split bills, cancellations and permissions.',
		'projects.4.impact':
			'We connected waitstaff, kitchen and checkout operations to speed up service and provide greater control over every order and ticket.',
		'experience.title': 'Experience',
		'experience.subtitle': 'Professional path',
		'experience.intro':
			'Experience building business web systems, administrative modules, backend integrations and solutions focused on real processes.',
		'experience.0.role': 'Full-Stack Developer',
		'experience.0.type': 'Professional',
		'experience.0.period': 'January 2026 - Present',
		'experience.0.location': 'Mexico',
		'experience.0.description':
			'Development and improvement of business web platforms, contributing to key modules for communities, personnel management and internal operations.',
		'experience.0.highlight.0':
			'Development and maintenance of administration and user modules.',
		'experience.0.highlight.1':
			'Data validation and sanitization, form improvements and responsive interfaces.',
		'experience.0.highlight.2':
			'Debugging, functional testing, technical documentation and continuous improvement.',
		'experience.1.role': 'Full-Stack Developer',
		'experience.1.type': 'Professional',
		'experience.1.period': 'May 2024 - August 2024',
		'experience.1.location': 'Mexico',
		'experience.1.description':
			'I led the development of a web system for medical appointment, patient and staff management using the XP methodology.',
		'experience.1.highlight.0':
			'Full-stack development of the medical system and its administrative workflows.',
		'experience.1.highlight.1':
			'Implementation of roles, permissions and secure authentication.',
		'experience.1.highlight.2':
			'Deployment on a self-managed server for multi-user network access.',
		'experience.2.role': 'Academic Project Developer',
		'experience.2.type': 'Academic',
		'experience.2.period': '2024 - 2026',
		'experience.2.location': 'Mexico',
		'experience.2.description':
			'Participation in web and data solutions focused on functional products, information analysis and user experience.',
		'experience.2.highlight.0':
			'Collaborative development of a video game presented at an institutional level.',
		'experience.2.highlight.1':
			'Participation and podium placement in an institutional programming contest.',
		'experience.2.highlight.2':
			'Team collaboration, technical documentation and version control.',
		'certifications.title': 'Certifications',
		'certifications.subtitle': 'Continuous learning',
		'certifications.intro':
			'Certifications and courses that support my technical training, project management, agile methodologies and professional growth.',
		'certifications.pending': 'Link pending',
		'certifications.view': 'View certificate',
		'certifications.download': 'Download',
		'certifications.credentials': 'credentials',
		'certifications.hint': 'Select a credential to view its details',
		'certifications.0.date': 'April 2026',
		'certifications.0.category': 'Artificial Intelligence',
		'certifications.0.description':
			'Introductory training in engineering fundamentals applied to artificial intelligence.',
		'certifications.1.date': 'April 2026',
		'certifications.1.category': 'Professional Growth',
		'certifications.1.description':
			'Course focused on growth mindset, adaptability and professional development.',
		'certifications.2.date': 'January 2026',
		'certifications.2.category': 'Agile',
		'certifications.2.description':
			'Certification in Scrum fundamentals, roles, events and iterative work.',
		'certifications.3.date': 'March 2025',
		'certifications.3.category': 'Project Management',
		'certifications.3.description':
			'Fundamentals of project management, task organization and deliverable tracking.',
		'certifications.4.date': 'July 2025',
		'certifications.4.category': 'Agile',
		'certifications.4.description':
			'Foundations of project management and agile methodologies applied to collaborative environments.',
		'certifications.5.date': 'September 2023',
		'certifications.5.category': 'Linux',
		'certifications.5.description':
			'Essential knowledge about Linux, terminal, file system and basic administration.',
		'certifications.6.date': 'July 2025',
		'certifications.6.category': 'Soft Skills',
		'certifications.6.description':
			'Training focused on professional balance, personal management and workplace well-being.',
		'contact.eyebrow': 'Contact',
		'contact.title': 'Let us work together',
		'contact.description':
			'If you are looking for a full-stack developer to build, maintain or optimize business web platforms, I can help turn complex processes into clear and functional solutions.',
		'contact.availability':
			'Available to collaborate on web projects, internal systems and digital product improvement.',
		'contact.writeMe': 'Write me',
		'contact.downloadCv': 'Download CV',
		'contact.link.email': 'Email',
		'contact.link.linkedin': 'LinkedIn',
		'contact.link.github': 'GitHub',
		'contact.link.cv': 'CV',
		'contact.link.cvValue': 'Download CV',
		'footer.rights': 'All rights reserved.',
		'footer.top': 'Back to top',
	},
};
