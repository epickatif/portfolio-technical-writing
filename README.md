# Armando Salazar - Technical Writer Portfolio

A modern, responsive portfolio website showcasing technical writing expertise, API documentation projects, and professional experience.

## 🚀 Features

- **Modern Design**: Clean, professional layout with purple gradient theme
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and hover effects using Framer Motion
- **Fast**: Built with Next.js 14 and optimized for performance
- **Accessible**: Screen reader friendly with proper semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **Language**: TypeScript
- **Deployment**: Ready for Vercel, Netlify, or Railway

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and utility classes
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Homepage
├── components/
│   ├── sections/            # Main page sections
│   │   ├── Hero.tsx         # Hero section with intro
│   │   ├── Portfolio.tsx    # Portfolio showcase
│   │   ├── Skills.tsx       # Skills and expertise
│   │   └── Contact.tsx      # Contact information
│   ├── ui/                  # Reusable UI components
│   │   ├── Button.tsx       # Custom button component
│   │   ├── Card.tsx         # Card component with variants
│   │   └── LoadingState.tsx # Loading states
│   ├── Navigation.tsx       # Navigation component
│   ├── ScrollIndicator.tsx  # Scroll progress indicator
│   └── SectionDivider.tsx   # Section dividers
public/
├── images/                  # Image assets
└── resume.pdf              # Resume file
```

## 🎨 Design Features

- **Purple Gradient Theme**: Professional purple color palette
- **Glass Morphism**: Modern glass effect cards
- **Smooth Animations**: Entrance animations and hover effects
- **Typography**: Clean, readable typography with proper hierarchy
- **Interactive Elements**: Hover states and micro-interactions

## 📱 Sections

1. **Hero**: Introduction with call-to-action buttons and LinkedIn quick access
2. **Portfolio**: Showcase of technical writing projects and documentation
3. **Skills**: Technical skills, tools, and certifications
4. **Contact**: Multiple contact methods with direct links

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/armando-salazar/portfolio-technical-writing.git
cd portfolio-technical-writing
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Build and Deploy

### Build for production:
```bash
npm run build
npm start
```

### Deploy to Vercel:
```bash
npx vercel
```

### Deploy to Railway:
```bash
railway login
railway init
railway up
```

## 🎯 Customization

To customize this portfolio for your own use:

1. Update personal information in the components
2. Replace the resume file in `/public/resume.pdf`
3. Update contact information and social links
4. Modify the color scheme in `tailwind.config.ts`
5. Add your own portfolio projects and skills

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Armando Salazar**
- Email: armando.salazar.andrade@gmail.com
- LinkedIn: [/in/armando-slzr](https://www.linkedin.com/in/armando-slzr/)
- WhatsApp: +52 333 166 5661

---

Built with ❤️ using Next.js and Tailwind CSS
