#  🌐 Personal Portfolio

This is my personal developer portfolio, designed to showcase my full-stack projects, technical decisions and development experience.

Visitors can explore each project through an interactive star system, with dedicated sections covering its overview, features, technologies, technical challenge and screenshot gallery.

The project focuses on presenting detailed case studies through an engaging, accessible and fully responsive interface.



## 🔗 Live Demo

**[View My Portfolio Live](https://sobiah.com)**



## ✨ Features

- Fully responsive layout across mobile, tablet and desktop
- Interactive project stars with animated expansion
- Project fragments for overviews, features, technologies, challenges and galleries
- Detailed project panels with live demo and source code links
- Responsive project screenshot galleries
- Data driven project content
- Animated star field background
- Smooth layout and interface animations
- Automatic scrolling when projects are expanded
- Automatic project collapse when scrolled out of view
- Sticky headers within project detail panels
- Background scroll locking while panels are open
- Escape key support for closing project panels
- Visible keyboard focus states
- Reduced motion support
- Responsive desktop and mobile navigation
- Dedicated About, Projects and Contact sections



## 🛠 Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
- Lucide React

### Development & Deployment

- ESLint
- npm
- Git
- GitHub
- Vercel



## ⚙️ How It Works

1. Project information is stored as structured data in a central data file.
2. The Projects section uses this data to generate each interactive project star.
3. Selecting a star expands the project and reveals its surrounding fragments.
4. Each fragment represents a different part of the project case study.
5. Selecting a fragment opens a detailed panel containing the relevant content.
6. Gallery panels display project screenshots alongside live demo and source code links.
7. Only one project can remain expanded at a time.
8. Additional projects can be added by extending the project data without rebuilding the interface.



## 💡 Technical Decisions

### Data driven project content
* Project descriptions, features, technologies, technical challenges, links and screenshots are stored separately from the presentation components.
* This keeps the components reusable and makes it easier to add or update projects without duplicating interface code.

### Interactive project navigation
* Projects are represented as stars rather than conventional portfolio cards. Selecting a star reveals five fragments: Overview, Features, Technologies, Challenge and Gallery.
* This creates a distinctive browsing experience while keeping each project case study organised.

### Responsive project layout

* Projects are displayed in a single column layout on smaller screens and a two column grid on larger screens.
* When a project is selected on desktop, it moves into a full width position so that its fragments have enough room to expand around it.

### Motion and scrolling

* Framer Motion handles project expansion, fragment transitions and detail panel animations.
* When a project opens, the page scrolls it into an appropriate position for the current screen size while respecting reduced motion preferences.

### Project detail panels

* Project information is displayed inside a scrollable overlay panel with a sticky header and blurred backdrop.
* The underlying page is prevented from scrolling while the panel is open, and users can close it using the close button or Escape key.



## 🚀 Getting Started

Clone the repository and install the dependencies: 

```bash
git clone https://github.com/SobiahSelvarajah/ss-my-portfolio.git
cd ss-my-portfolio
npm install
```

Then start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.



## 📦 Production Build

To create an optimised production build:

```bash
npm run build
```

Then run the production server with:

```bash 
npm start
```



## 📱 Responsive Design

This portfolio was designed and tested across mobile, tablet and desktop layouts. Navigation, project positioning, fragment layouts, detail panels and screenshot galleries adapt across breakpoints to maintain readable content, accessible controls and consistent spacing.



## 📌 Project Status 

The portfolio is feature complete, deployed on Vercel and available through a custom domain.



## 📄 Licence

This project is licensed under the MIT Licence.