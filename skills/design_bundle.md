# 🌟 Master Design Bundle - Calistenia Titan

## 1. Identidad de Marca y Paleta de Colores

Para lograr una estética premium, moderna y con un efecto "élite", se utiliza la paleta de colores de alto contraste inspirada en la competencia analizada:

### 🎨 Paleta de Colores
- **Neutros Oscuros (Fondo y Estructura)**: 
  - Base: `#050505`, `#0a0a0a`, `#0c0c0c`
  - Tarjetas y Contenedores: `#0e0e0e`, `#111111`, `#141414`
- **Dorados y Acentos Cálidos (Éxito y Calidad)**:
  - Principal: `#FFD700` (Gold Premium)
  - Intermedio: `#f5c542`, `#d4961e`
  - Oscuro: `#b8780d`
- **Acentos Vibrantes (Urgencia y CTA)**:
  - Naranja/Rojo de Marca: `#EC4E39`
  - Púrpura Suave (Destacados): `#A369FF`
  - Azul Claro (Confianza): `#48cae4`

---

## 2. Tipografía y Estructura Visual

### 🖋️ Tipografías recomendadas
- **Títulos (Headings)**: Montserrat, Outfit o Inter (Bold / Black para un look deportivo y de alto rendimiento).
- **Cuerpo de texto**: Inter o Roboto (Legibilidad máxima en modo oscuro).

### 📐 Secciones Clave de la Landing Page
La landing page se divide en 7 secciones lógicas de alta conversión:
1. **Hero**: Propuesta de valor clara, video/imagen motivacional de fondo, botón de CTA destacado.
2. **Prueba Social (Stats)**: Números grandes sobre alumnos atendidos, años de experiencia y porcentaje de éxito.
3. **Selector de Caminos (Productos)**: Cards tipo Bento Grid para cursos y mentorías.
4. **Beneficios del Curso**: Detalle minucioso en video e imágenes sobre lo que incluye el programa.
5. **Mentoría Individual (Coaching)**: Propuesta exclusiva para atletas de alto rendimiento.
6. **Testimonios de Alumnos**: Citas y calificaciones de alumnos con diseño de carrusel interactivo.
7. **Footer**: Enlaces de contacto, redes sociales y términos.

---

## 3. Animaciones con Motion & Magic UI

Para dar a la landing page un efecto ultra premium y moderno ("elite"), integra las siguientes herramientas:

### 🚀 1. Motion (Framer Motion)
Usa **Motion** para los reveals al hacer scroll. Crea componentes interactivos que reaccionen a la visibilidad de pantalla.

```tsx
import { motion } from "framer-motion";

export const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
```

### ✨ 2. Magic UI
Ideal para dar un toque vanguardista a las tarjetas interactivas y al Hero de la landing page.

- **Efectos Clave**:
  - **Animated Borders**: Gradientes de bordes que giran alrededor de las tarjetas de los cursos.
  - **Glow on Hover**: Efectos de iluminación sutil al pasar el mouse por encima de los elementos.
  - **Bento Grid**: Alineaciones de estilo bento con bordes translúcidos (`backdrop-blur`).
  - **Text Reveal**: Revelar el texto de manera secuencial para los títulos.

---

## 4. Guías de Integración de Remotion

### 🎬 Animación y Secuenciación
- Usa la función `interpolate` de Remotion para crear animaciones fluidas basadas en el frame actual (`useCurrentFrame`).
- Usa el componente `<Sequence>` para encadenar múltiples elementos visuales y de audio a lo largo del tiempo.
- **Fuentes y Assets**: Carga fuentes de Google Fonts dinámicamente o usa el componente `<Img>` / `<Video>` de Remotion para optimizar la caché y la renderización en Vercel.

---

## 5. Lista de Verificación de Calidad Frontend

Antes de desplegar en Vercel, verifica estos puntos:
- [ ] No se usan emojis como íconos (usa SVGs de Heroicons o Lucide).
- [ ] Todos los elementos interactivos tienen `cursor-pointer` y efectos hover suaves (150-300ms).
- [ ] Los contrastes de colores oscuros están validados (mínimo 4.5:1).
- [ ] El diseño es responsivo (320px, 768px, 1024px, 1440px) y no hay scroll horizontal en móvil.
- [ ] Las imágenes y assets tienen textos alternativos (`alt`) y están optimizados.
