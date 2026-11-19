export const perfil = {
  nombre: 'Rodrigo Santini',
  carrera: 'Ingeniería en tecnologías de software',
  intro:
    'Estudio desarrollo web y este semestre hice varios proyectos con HTML, CSS y JavaScript. Aquí están los que más me gustaron, con su demo y su código.',
  email: 'royfranrodrigosantinipacheco@gmail.com',
  github: 'https://github.com/RodriSp1',
  linkedin: 'https://www.linkedin.com/in/rodri-sp1',
}

const repo = 'https://github.com/RodriSp1/tu-repositorio'
const demo = 'https://RodriSp1.github.io/tu-repositorio'

export const proyectos = [
  {
    id: 1,
    titulo: 'Lista de tareas',
    descripcion: 'Agrega, completa y elimina tareas. Se guardan en localStorage.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: `${demo}/lista-tareas/`,
    codigo: `${repo}/tree/main/lista-tareas`,
  },
  {
    id: 2,
    titulo: 'Calculadora',
    descripcion: 'Calculadora básica con operaciones, borrado y diseño responsivo.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: `https://github.com/RodriSp1/Calculadora-Roni10`,
    codigo: `https://rodrisp1.github.io/Calculadora-Roni10/`,
  },
  {
    id: 3,
    titulo: 'App del clima',
    descripcion: 'Consulta el clima de una ciudad usando una API.',
    tags: ['JavaScript', 'API'],
    demo: `${demo}/clima/`,
    codigo: `${repo}/tree/main/clima`,
  },
  {
    id: 4,
    titulo: 'Landing page',
    descripcion: 'Página de presentación con Flexbox, Grid y media queries.',
    tags: ['HTML', 'CSS'],
    demo: `${demo}/landing/`,
    codigo: `${repo}/tree/main/landing`,
  },
  {
    id: 5,
    titulo: 'Quiz de preguntas',
    descripcion: 'Preguntas de opción múltiple con puntaje al final.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: `${demo}/quiz/`,
    codigo: `${repo}/tree/main/quiz`,
  },
  {
    id: 6,
    titulo: 'Formulario de contacto',
    descripcion: 'Formulario con validaciones hechas en JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    demo: `${demo}/formulario/`,
    codigo: `${repo}/tree/main/formulario`,
  },
]

export const tecnologias = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Git y GitHub',
  'Vite',
  'Responsive design',
  'Figma',
]
