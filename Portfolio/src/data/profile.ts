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
		{ value: '5+', label: 'modulos desarrollados' },
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
			'Fui invitado junto con miembros de mi equipo de trabajo a Talent Land Mexico, un espacio donde pude conocer nuevas ideas sobre tecnologia, oportunidades profesionales y aprendizajes aplicados a la industria.',
		lesson:
			'Refuerzo mi vision de crecimiento: aprender de otros, observar tendencias y conectar la tecnologia con problemas reales.',
		image: 'images/1781679236045.jpeg',
		icon: 'uil-rocket',
	},
	{
		title: 'Creacion de videojuego',
		category: 'Proyecto institucional',
		description:
			'Participe junto a un colega de trabajo en el desarrollo de un videojuego que presentamos a nivel institucional, combinando creatividad, logica, colaboracion y aprendizaje practico.',
		lesson:
			'Me ayudo a entender mejor el ciclo completo de un producto: idea, construccion, ajustes, presentacion y retroalimentacion.',
		image: 'images/1781679236045.jpeg',
		icon: 'uil-game-structure',
	},
	{
		title: 'Concurso de programacion',
		category: 'Logro academico',
		description:
			'Fui seleccionado para participar en un concurso de programacion a nivel institucional, donde logre quedar en el podio y confirme que la practica constante se transforma en resultados.',
		lesson:
			'Me dejo aprendizajes tecnicos, disciplina bajo presion y la seguridad de que el esfuerzo bien dirigido da frutos.',
		image: '/certifications/PODRIO-3-LUGAR',
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
		title: 'Victoria 147',
		type: 'Plataforma empresarial',
		description:
			'Plataforma de gestion de personal y operacion interna con multiples modulos administrativos.',
		impact:
			'Participe en interfaces responsivas, navegacion, jerarquia de contenido e integracion con APIs para manejo dinamico de datos.',
		stack: ['JavaScript', 'PHP', 'MySQL', 'APIs REST', 'CSS'],
		image: '',
		demoUrl: '',
		repoUrl: '',
	},
	{
		title: 'Sistema RH y Checador',
		type: 'Sistema administrativo',
		description:
			'Sistema interno para asistencia, expedientes, permisos, activos y control operativo de usuarios.',
		impact:
			'Desarrolle y mantuve modulos clave, optimice consultas MySQL para reportes y mejore logica de negocio del sistema.',
		stack: ['PHP', 'JavaScript', 'MySQL', 'Reconocimiento facial', 'Reportes'],
		image: '',
		demoUrl: '',
		repoUrl: '',
	},
	{
		title: 'SaborBot',
		type: 'Aplicacion web academica',
		description:
			'Aplicacion enfocada en gastronomia mexicana con chatbot, recetas personalizadas y busqueda inteligente.',
		impact:
			'Construccion de interfaz responsiva, integracion de APIs internas y experiencia conversacional para guiar recetas.',
		stack: ['Next.js', 'Tailwind CSS', 'APIs', 'Chatbot', 'UX'],
		image: '',
		demoUrl: '',
		repoUrl: '',
	},
	{
		title: 'Axolote',
		type: 'Analisis de datos',
		description:
			'Modelo predictivo de incidentes en el Estado de Mexico con limpieza, analisis y visualizacion de datos.',
		impact:
			'Analice patrones por zona, hora, dia y genero, conectando pipeline de datos con reportes ejecutivos.',
		stack: ['Node.js', 'Python', 'Power BI', 'DuckDB', 'DBeaver'],
		image: '',
		demoUrl: '',
		repoUrl: '',
	},
	{
		title: 'Landeros - Cazuelon',
		type: 'Sitio web comercial',
		description:
			'Layout visual responsivo para mejorar la presencia digital de un negocio local.',
		impact:
			'Desarrolle una experiencia frontend atractiva, funcional y optimizada para rendimiento y accesibilidad.',
		stack: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
		image: '',
		demoUrl: '',
		repoUrl: '',
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
			'Desarrollo y mantenimiento de plataformas web empresariales orientadas a gestion de personal, operacion interna y mejora de procesos administrativos.',
		highlights: [
			'Desarrollo de modulos para asistencia, permisos, expedientes, activos, actividades, empresas y productos.',
			'Integracion con APIs, manejo dinamico de datos y mejora de interfaces responsivas.',
			'Optimizacion de consultas MySQL, reportes operativos y ajustes en logica de negocio.',
		],
		stack: ['JavaScript', 'PHP', 'MySQL', 'APIs REST', 'CSS'],
	},
	{
		role: 'Desarrollador Full-Stack',
		company: 'Palmertec',
		period: 'Mayo 2024 - Agosto 2024',
		location: 'Mexico',
		type: 'Profesional',
		description:
			'Desarrollo de un sistema web para gestion medica con administracion de citas, pacientes, personal y acceso multiusuario.',
		highlights: [
			'Implementacion de roles, permisos administrativos y autenticacion segura.',
			'Despliegue y configuracion de servidor propio para acceso por red.',
			'Trabajo bajo metodologia XP con ciclos iterativos y entregas continuas.',
		],
		stack: ['Full Stack', 'Autenticacion', 'Servidores', 'XP', 'Base de datos'],
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
			'Desarrollo de SaborBot con interfaz conversacional, recetas personalizadas e integracion de APIs.',
			'Analisis de datos para Axolote con visualizacion ejecutiva y deteccion de patrones.',
			'Colaboracion en equipo, documentacion tecnica y control de versiones.',
		],
		stack: ['Next.js', 'Tailwind CSS', 'Node.js', 'Python', 'Power BI'],
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
		credentialUrl: '/certifications/Transforma-tu-mentalidad.pdf',
		downloadUrl: '/certifications/Transforma-tu-mentalidad.pdf',
	},
	{
		title: 'Scrum Fundamentals Certified',
		issuer: 'Chairman Academic Council',
		date: 'Enero 2026',
		category: 'Agile',
		description:
			'Certificacion en fundamentos de Scrum, roles, eventos y trabajo iterativo.',
		credentialUrl: '/certifications/ScrumFundamentalsCertified-LuisEduadoGutiérrezArias-1139117',
		downloadUrl: '/certifications/ScrumFundamentalsCertified-LuisEduadoGutiérrezArias-1139117',
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
		credentialUrl: '/certifications/Gestión-de-Proyectos-y-metodología-agile.pdf',
		downloadUrl: '/certifications/Gestión-de-Proyectos-y-metodología-agile.pdf',
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
		'about.stat.1': 'developed modules',
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
			'I was invited with members of my work team to Talent Land Mexico, a space where I discovered new ideas around technology, professional opportunities and industry-focused learning.',
		'about.story.0.lesson':
			'It reinforced my growth mindset: learning from others, observing trends and connecting technology with real problems.',
		'about.story.1.title': 'Video game creation',
		'about.story.1.category': 'Institutional project',
		'about.story.1.description':
			'I participated with a colleague in the development of a video game that we presented at an institutional level, combining creativity, logic, collaboration and hands-on learning.',
		'about.story.1.lesson':
			'It helped me better understand the full product cycle: idea, build, adjustments, presentation and feedback.',
		'about.story.2.title': 'Programming contest',
		'about.story.2.category': 'Academic achievement',
		'about.story.2.description':
			'I was selected to participate in an institutional programming contest, reached the podium and confirmed that constant practice turns into results.',
		'about.story.2.lesson':
			'It gave me technical learning, discipline under pressure and confidence that focused effort bears fruit.',
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
		'projects.0.type': 'Business platform',
		'projects.0.description':
			'Personnel management and internal operations platform with multiple administrative modules.',
		'projects.0.impact':
			'I contributed to responsive interfaces, navigation, content hierarchy and API integration for dynamic data handling.',
		'projects.1.type': 'Administrative system',
		'projects.1.description':
			'Internal system for attendance, records, permissions, assets and operational user control.',
		'projects.1.impact':
			'I developed and maintained key modules, optimized MySQL queries for reports and improved business logic.',
		'projects.2.type': 'Academic web application',
		'projects.2.description':
			'Mexican gastronomy application with chatbot, personalized recipes and intelligent search.',
		'projects.2.impact':
			'Responsive interface development, internal API integration and conversational experience for recipe guidance.',
		'projects.3.type': 'Data analysis',
		'projects.3.description':
			'Predictive incident model for the State of Mexico with data cleaning, analysis and visualization.',
		'projects.3.impact':
			'I analyzed patterns by area, hour, day and gender, connecting a data pipeline with executive reports.',
		'projects.4.type': 'Commercial website',
		'projects.4.description':
			'Responsive visual layout to improve the digital presence of a local business.',
		'projects.4.impact':
			'I developed an attractive, functional frontend experience optimized for performance and accessibility.',
		'experience.title': 'Experience',
		'experience.subtitle': 'Professional path',
		'experience.intro':
			'Experience building business web systems, administrative modules, backend integrations and solutions focused on real processes.',
		'experience.0.role': 'Full-Stack Developer',
		'experience.0.type': 'Professional',
		'experience.0.period': 'January 2026 - Present',
		'experience.0.location': 'Mexico',
		'experience.0.description':
			'Development and maintenance of business web platforms for personnel management, internal operations and administrative process improvement.',
		'experience.0.highlight.0':
			'Development of modules for attendance, permissions, records, assets, activities, companies and products.',
		'experience.0.highlight.1':
			'API integration, dynamic data handling and responsive interface improvements.',
		'experience.0.highlight.2':
			'Optimization of MySQL queries, operational reports and business logic adjustments.',
		'experience.1.role': 'Full-Stack Developer',
		'experience.1.type': 'Professional',
		'experience.1.period': 'May 2024 - August 2024',
		'experience.1.location': 'Mexico',
		'experience.1.description':
			'Development of a web system for medical management with appointments, patients, staff and multi-user access.',
		'experience.1.highlight.0':
			'Implementation of roles, administrative permissions and secure authentication.',
		'experience.1.highlight.1':
			'Deployment and configuration of a local server for network access.',
		'experience.1.highlight.2':
			'Work under XP methodology with iterative cycles and continuous delivery.',
		'experience.2.role': 'Academic Project Developer',
		'experience.2.type': 'Academic',
		'experience.2.period': '2024 - 2026',
		'experience.2.location': 'Mexico',
		'experience.2.description':
			'Participation in web and data solutions focused on functional products, information analysis and user experience.',
		'experience.2.highlight.0':
			'Development of SaborBot with conversational interface, personalized recipes and API integration.',
		'experience.2.highlight.1':
			'Data analysis for Axolote with executive visualization and pattern detection.',
		'experience.2.highlight.2':
			'Team collaboration, technical documentation and version control.',
		'certifications.title': 'Certifications',
		'certifications.subtitle': 'Continuous learning',
		'certifications.intro':
			'Certifications and courses that support my technical training, project management, agile methodologies and professional growth.',
		'certifications.pending': 'Link pending',
		'certifications.view': 'View certificate',
		'certifications.download': 'Download',
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
