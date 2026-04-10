# Foridul Ibne Qauser — Portfolio

A FAANG-level animated developer portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headings), DM Sans (body), JetBrains Mono (code)

## 📁 Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout with font imports
│   ├── page.tsx            # Main page assembling all sections
│   └── globals.css         # Global styles, utilities, animations
├── components/
│   ├── Navbar.tsx          # Sticky navbar with scroll progress bar
│   ├── Footer.tsx          # Footer with socials and links
│   ├── ui/
│   │   ├── FadeIn.tsx      # Reusable Framer Motion wrappers
│   │   └── SectionHeader.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── TechStackSection.tsx
│       ├── ProjectsSection.tsx
│       ├── ExperienceSection.tsx
│       ├── AchievementsSection.tsx
│       └── ContactSection.tsx
├── hooks/
│   ├── useScrollProgress.ts
│   └── useTypingEffect.ts
└── lib/
    └── utils.ts
```

## ⚙️ Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🎨 Customization Guide

### 1. Personal Info
- **Name/Role**: Edit `HeroSection.tsx`
- **About text**: Edit `AboutSection.tsx`
- **Email**: Edit `ContactSection.tsx` → `href="mailto:your@email.com"`

### 2. Social Links
Search for `https://github.com/your-username` and replace across all files:
- `Navbar.tsx`
- `HeroSection.tsx`
- `ContactSection.tsx`
- `Footer.tsx`

### 3. Profile Photo
In `HeroSection.tsx`, find the comment `{/* Replace with: <Image ... /> */}` and replace the placeholder div with:
```tsx
import Image from "next/image";
<Image src="/profile.jpg" alt="Foridul Ibne Qauser" fill className="object-cover" />
```
Then place `profile.jpg` in `/public/`.

### 4. CV Link
Replace `https://drive.google.com/your-cv-link` with your actual Google Drive link in:
- `Navbar.tsx`
- `HeroSection.tsx`

### 5. Projects
Edit the `projects` array in `ProjectsSection.tsx`:
- Update GitHub URLs
- Update live demo URLs
- Replace screenshot placeholders with actual `<Image>` components

### 6. Contact Form
The form currently simulates a submission. To connect to a real backend:
- Use EmailJS: https://www.emailjs.com/
- Use Resend API: https://resend.com/
- Use Formspree: https://formspree.io/

## 🎬 Animation Features

- **Scroll-triggered fade-ins** on all sections (Framer Motion `whileInView`)
- **Staggered children** animations on skill/project grids
- **Typing effect** in hero for role names
- **Animated counters** in achievements section
- **Floating badges** in hero with loop animations
- **Scroll progress bar** at top of page
- **Micro-interactions**: hover scale, glow borders, translate effects
- **Page-load** entrance animations on hero elements

## 📱 Responsive

- Mobile-first design
- Hamburger menu on mobile
- Responsive grid layouts for all sections
- Touch-friendly interaction targets

## 🌐 Deployment

Deploy to Vercel in one click:
```bash
npx vercel
```
