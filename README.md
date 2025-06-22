# Portfolio Mohammed Ben Aicha - Astro.js

This is a modern portfolio website built with [Astro.js](https://astro.build/), showcasing Mohammed Ben Aicha's professional and educational projects as a Web and Data Developer.

## 🚀 Features

- **Modern Design**: Clean, responsive design with smooth animations
- **Performance**: Built with Astro.js for optimal performance and fast loading
- **Responsive**: Mobile-first design that works on all devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Contact Form**: Functional contact form using Formspree
- **Accessibility**: Semantic HTML and proper ARIA attributes

## 📁 Project Structure

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Skills.astro
│   │   ├── Parcours.astro
│   │   ├── Projects.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
└── package.json
```

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 🛠️ Setup Instructions

### Prerequisites

1. **Install Node.js**: Download and install Node.js from [nodejs.org](https://nodejs.org/)
   - Choose the LTS version (recommended)
   - This will also install npm (Node Package Manager)

### Installation Steps

1. **Clone or download this project**
2. **Open a terminal** in the project directory
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
5. **Open your browser** and go to `http://localhost:4321`

### Building for Production

To build the site for production:

```bash
npm run build
```

The built site will be in the `dist/` folder, ready to deploy to any static hosting service.

## 🎨 Sections

- **Hero**: Introduction with name and profession
- **About**: Brief personal description
- **Skills**: Technical skills with icons
- **Parcours**: Educational and professional timeline
- **Projects**: Portfolio of completed projects
- **Contact**: Contact form and social links

## 🌐 Deployment

This site can be deployed to:
- [Netlify](https://netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)
- Any static hosting service

## 📱 Technologies Used

- **Astro.js**: Static site generator
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Interactive functionality
- **Font Awesome**: Icons
- **Formspree**: Contact form handling

## 📝 Customization

To customize this portfolio for your own use:

1. **Update personal information** in each component
2. **Replace projects** in `src/components/Projects.astro`
3. **Update timeline** in `src/components/Parcours.astro`
4. **Change contact form action** in `src/components/Contact.astro`
5. **Update colors** in the CSS custom properties in `src/layouts/Layout.astro`

## 📄 License

This project is based on the original portfolio from [Saijoken/saijoken.github.io](https://github.com/Saijoken/saijoken.github.io) and has been rebuilt using Astro.js.

---

Built with ❤️ using Astro.js 