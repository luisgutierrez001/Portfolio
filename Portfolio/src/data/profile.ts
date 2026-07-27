export const profile = {
	name: 'Luis Eduardo Gutierrez Arias',
	role: 'Full-Stack Software Developer',
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
		category: 'Artificial Intelligence',
		description:
			'Formacion introductoria en fundamentos de ingenieria aplicada a inteligencia artificial.',
		credentialUrl: '',
		downloadUrl: '',
	},
	{
		title: 'Transformative Mindset Course',
		issuer: 'TrepCamp Academy',
		date: 'Abril 2026',
		category: 'Professional Growth',
		description:
			'Curso enfocado en mentalidad de crecimiento, adaptabilidad y desarrollo profesional.',
		credentialUrl: '',
		downloadUrl: '',
	},
	{
		title: 'Scrum Fundamentals Certified',
		issuer: 'Chairman Academic Council',
		date: 'Enero 2026',
		category: 'Agile',
		description:
			'Certificacion en fundamentos de Scrum, roles, eventos y trabajo iterativo.',
		credentialUrl: '',
		downloadUrl: '',
	},
	{
		title: 'Project Management Fundamentals',
		issuer: 'Google',
		date: 'Marzo 2025',
		category: 'Project Management',
		description:
			'Fundamentos de gestion de proyectos, organizacion de tareas y seguimiento de entregables.',
		credentialUrl: '',
		downloadUrl: '',
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
		credentialUrl: '',
		downloadUrl: '',
	},
	{
		title: 'Mindfulness & Worklife Balance',
		issuer: 'Santander Open Academy',
		date: 'Julio 2025',
		category: 'Soft Skills',
		description:
			'Formacion orientada a balance profesional, gestion personal y bienestar en el trabajo.',
		credentialUrl: '',
		downloadUrl: '',
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
