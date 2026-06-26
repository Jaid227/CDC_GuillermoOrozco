// ===== script.js =====
document.addEventListener('DOMContentLoaded', () => {

  // ---- Datos de actividades (editables) ----
  const activitiesData = {
    pole: {
      nombre: 'Pole Dance',
      instructor: 'Maestra Kari',
      genero: 'femenino', // 'femenino' o 'masculino'
      frase: 'Entrena de manera diferente y divertida. Tonifica, mejora flexibilidad, mejora la salud física y mental, reduce el estrés',
      imagen: '',
      video: 'videos/pole.mp4',
      facebook: 'https://www.facebook.com/profile.php?id=61563787855951',
      whatsapp: 'https://wa.me/5539030758'
    },
    lucha: {
      nombre: 'Lucha Libre',
      instructor: '',
      genero: 'masculino',
      frase: 'Pasión, técnica y tradición sobre el cuadrilátero.',
      imagen: 'imagenes/lucha.jpg',
      video: 'videos/lucha.mp4',
      facebook: 'https://www.facebook.com/juan.gasca.barrientos.2025',
      tiktok: 'https://www.tiktok.com/@juan.gasca.barrie',
      whatsapp: 'https://wa.me/5563599452'
    },
    fenix: {
      nombre: 'Fenix Dancer',
      instructor: '',
      genero: 'femenino',
      frase: 'Renace en cada paso, baila como el Fénix.',
      imagen: '',
      video: 'videos/fenix.mp4',
      facebook: 'https://www.facebook.com/cesaruriel.reyessanchez',
      tiktok: 'https://www.tiktok.com/@_academiafenix',
      whatsapp: 'https://wa.me/5561862281'
    },
    becerros: {
      nombre: 'Voleibol Becerros',
      instructor: 'Maestro Cecilio Becerra Rodriguez',
      genero: 'masculino',
      frase: 'Juego en equipo, garra y altura.',
      imagen: 'imagenes/becerros.jpg',
      video: 'videos/becerros.mp4',
      whatsapp: 'https://wa.me/5546463600'
    },
    tsunami: {
      nombre: 'Voleibol Tsunami',
      instructor: '',
      genero: 'femenino',
      frase: 'Oleada de potencia y precisión.',
      imagen: 'imagenes/tsunami.jpg',
      video: 'videos/tsunami.mp4',
      whatsapp: 'https://wa.me/5516873019'
    },
    boxing: {
      nombre: 'Boxing',
      instructor: 'Maestro Ivan',
      genero: 'masculino',
      frase: 'Foco, resistencia y espíritu de campeón.',
      imagen: '',
      video: 'videos/boxing.mp4',
      facebook: 'https://www.facebook.com/profile.php?id=100063509862171&rdid=rGreSg4A5F89ifSI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DFm5yeJsg%2F#',
      tiktok: 'https://tiktok.com/@boxing_club_ortiz',
      instagram: 'https://www.instagram.com/boxing_club_ortiz/',
      whatsapp: 'https://wa.me/5615433993'
    },
    gimnasia: {
      nombre: 'Gimnasia Rítmica',
      instructor: '',
      genero: 'femenino',
      frase: 'Armonía, flexibilidad y arte en movimiento.',
      imagen: 'imagenes/gimnasia.jpg',
      video: 'videos/gimnasia.mp4',
      whatsapp: 'https://wa.me/5518376153'
    },
    yoga: {
      nombre: 'Yoga',
      instructor: 'Maestra Gina Barrera',
      genero: 'femenino',
      frase: 'Equilibrio, respiración y bienestar.',
      imagen: 'imagenes/yoga.jpg',
      video: 'videos/yoga.mp4',
      whatsapp: 'https://wa.me/5610078487'
    },
    basquet: {
      nombre: 'Basquetbol',
      instructor: 'Maestra Alexa Cruz',
      genero: 'femenino',
      frase: 'Drible, pase y enceste con pasión.',
      imagen: 'imagenes/basquet.jpg',
      video: 'videos/basquet.mp4',
      facebook: 'https://www.facebook.com/profile.php?id=61560836120790',
      whatsapp: 'https://wa.me/5584465709'
    },
    juridico: {
      nombre: 'juridico',
      instructor: 'Lic. Brenda Trejo',
      genero: 'femenino',
      frase: 'Divorcios, Pensión alimenticia, Guardia y custodia, sucesiones intestamentarias, Actas de nacimiento,Representante ante la fiscalía, Más...',
      imagen: 'imagenes/basquet.jpg',
      video: 'videos/basquet.mp4',
      facebook: 'https://www.facebook.com/profile.php?id=61573311537762&rdid=BWgELWISZOgZtnO9&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19F86VmkfS%2F#',
      tiktok: 'https://www.tiktok.com/@villegasfirmalegal',
      whatsapp: 'https://wa.me/5533322426'
    },
    Persona: {
      nombre: 'Persona adulta mayor',
      instructor: 'Maestra Aidé',
      genero: 'femenino',
      frase: '',
      imagen: 'imagenes/basquet.jpg',
      video: 'videos/basquet.mp4',
      whatsapp: 'https://wa.me/5613529628'
    },
    Psicologia: {
      nombre: 'Psicología',
      instructor: '',
      genero: 'femenino',
      frase: '',
      imagen: 'imagenes/basquet.jpg',
      video: 'videos/basquet.mp4',
      whatsapp: 'https://wa.me/5587818516'
    }            
  };

  // ---- Referencias ----
  const mainPage = document.getElementById('main-page');
  const container = document.getElementById('activity-pages-container');
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // ---- Función para crear la página de actividad ----
  function createActivityPage(activityId, data) {
    const page = document.createElement('div');
    page.className = 'page activity-detail';
    page.id = `activity-${activityId}`;

    // Determinar título del instructor (maestro/maestra)
    const genero = data.genero || 'femenino';
    const instructorLabel = genero === 'femenino' ? '' : '';

    // Botón regresar
    const backBtn = document.createElement('button');
    backBtn.className = 'back-btn';
    backBtn.innerHTML = '<i class="fas fa-arrow-left"></i> Regresar';
    backBtn.addEventListener('click', () => {
      showPage('main-page');
    });

    // Título actividad
    const title = document.createElement('h2');
    title.className = 'activity-title';
    title.textContent = data.nombre;

    // Instructor
    const instructor = document.createElement('p');
    instructor.className = 'instructor-name';
    instructor.innerHTML = `<i class="fas fa-chalkboard-teacher"></i> ${instructorLabel} ${data.instructor}`;

    // Frase
    const phrase = document.createElement('div');
    phrase.className = 'phrase-box';
    phrase.innerHTML = `<i class="fas fa-quote-left" style="margin-right:0.5rem;opacity:0.6;"></i> ${data.frase}`;

   
    // Media (imagen + video)
    const mediaGrid = document.createElement('div');
    mediaGrid.className = 'media-grid';

    if (data.imagen) {
      const imgDiv = document.createElement('div');
      imgDiv.className = 'media-item';
      const img = document.createElement('img');
      img.src = data.imagen;
      img.alt = data.nombre;
      img.loading = 'lazy';
      img.onerror = () => { img.style.display = 'none'; };
      imgDiv.appendChild(img);
      mediaGrid.appendChild(imgDiv);
    }

    if (data.video) {
      const vidDiv = document.createElement('div');
      vidDiv.className = 'media-item';
      const video = document.createElement('video');
      video.src = data.video;
      video.controls = true;
      video.preload = 'metadata';
      video.playsInline = true;
      video.onerror = () => { video.style.display = 'none'; };
      vidDiv.appendChild(video);
      mediaGrid.appendChild(vidDiv);
    }

    // Botones sociales
    const socials = document.createElement('div');
    socials.className = 'social-links';

    const socialData = [
      { icon: 'fab fa-facebook', url: data.facebook, label: 'Facebook' },
      { icon: 'fab fa-tiktok', url: data.tiktok, label: 'TikTok' },
      { icon: 'fab fa-instagram', url: data.instagram, label: 'Instagram' },
      { icon: 'fab fa-whatsapp', url: data.whatsapp, label: 'WhatsApp' }
    ];

    socialData.forEach(s => {
      if (s.url) {
        const a = document.createElement('a');
        a.className = 'social-btn';
        a.href = s.url;
        a.target = '_blank';
        a.rel = 'noopener';
        a.innerHTML = `<i class="${s.icon}"></i> ${s.label}`;
        socials.appendChild(a);
      }
    });

    // Footer (opcional, se hereda el global)
    // Ensamblar
    page.appendChild(backBtn);
    page.appendChild(title);
    page.appendChild(instructor);
    page.appendChild(phrase);
    page.appendChild(mediaGrid);
    page.appendChild(socials);

    return page;
  }

  // ---- Generar todas las páginas de actividad ----
  Object.keys(activitiesData).forEach(key => {
    const data = activitiesData[key];
    const pageEl = createActivityPage(key, data);
    container.appendChild(pageEl);
  });

  // ---- Función para mostrar página ----
  function showPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(pageId);
    if (target) target.classList.add('active');
    // Scroll arriba
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // ---- Eventos de los botones de actividad ----
  document.querySelectorAll('.activity-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const actId = btn.dataset.activity;
      const pageId = `activity-${actId}`;
      showPage(pageId);
    });
  });

  // ---- Tema oscuro/claro ----
  let darkMode = false;
  themeToggle.addEventListener('click', () => {
    darkMode = !darkMode;
    body.classList.toggle('dark-mode', darkMode);
    themeToggle.innerHTML = darkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  });

  // ---- Inicio: mostrar principal ----
  showPage('main-page');

  // ---- (Opcional) Si no hay imágenes, no romper ----
  console.log('Centro de Desarrollo Comunitario | Guillermo Orozco');
});
