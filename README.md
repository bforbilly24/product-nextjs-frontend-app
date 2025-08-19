# Developer Tool NextJS Frontend App

<img width="960" height="540" alt="Image" src="https://github.com/user-attachments/assets/8a1d4a8f-0538-44c7-9ff1-3a11329fe7b3" />

I've received a fair number of asks to build more components that look like the [neobrustalism](https://www.neobrutalism.dev/) website. Instead, I built a full template 🫡.

This clean, bold, neobrutalist landing page template makes for a great starting point for your next startup or side project. Whether that be a venture-backed SaaS company or a side project for your portfolio.

This template contains a landing page built with ReactJS on top of NextJS, TailwindCSS, and Framer Motion. You'll find downloads for both JavaScript and TypeScript.

I opted to stick with the NextJS pages router to keep it simple for anyone new to NextJS or wanting to migrate this template out of the framework.

## 🚀 Features

- **Modern Stack**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Magic UI Components**: Beautiful pre-built components with smooth animations
- **Developer-Focused Design**: Tailored specifically for developer tools, APIs, and SDKs
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Interactive Elements**: Hero animations, feature selectors, and engaging UI components
- **Dark Mode**: Theme switching with next-themes
- **Blog System**: Built-in MDX blog with syntax highlighting
- **Performance Optimized**: SEO-friendly with optimized fonts and images
- **Easy Configuration**: Setup takes minutes with modern tooling

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives + Magic UI + Shadcn/ui
- **Typography**: Optimized font loading with Geist
- **Icons**: Lucide React icons
- **Animation**: Framer Motion
- **Theme**: Next-themes for dark/light mode
- **Content**: MDX for blog posts with syntax highlighting
- **Development**: TypeScript, ESLint

## 📦 Getting Started

### Prerequisites

Make sure you have Node.js 18+ installed on your machine.

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bforbilly24/devtool-nextjs-frontend-app.git
cd devtool-nextjs-frontend-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## 📁 Project Structure

```
devtool-nextjs-frontend-app/
├── 📁 src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── globals.css        # Global styles
│   │   ├── sitemap.ts         # SEO sitemap
│   │   ├── (marketing)/       # Marketing pages
│   │   │   └── blog/          # Blog section
│   │   └── og/                # Open Graph images
│   ├── components/            # Reusable components
│   │   ├── sections/          # Landing page sections
│   │   │   ├── hero.tsx
│   │   │   ├── features.tsx
│   │   │   ├── examples.tsx
│   │   │   ├── use-cases.tsx
│   │   │   ├── pricing.tsx
│   │   │   ├── testimonials.tsx
│   │   │   ├── statistics.tsx
│   │   │   ├── community.tsx
│   │   │   ├── blog.tsx
│   │   │   ├── cta.tsx
│   │   │   ├── header.tsx
│   │   │   ├── footer.tsx
│   │   │   └── logos.tsx
│   │   └── ui/               # Base UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── accordion.tsx
│   │       ├── badge.tsx
│   │       ├── avatar.tsx
│   │       ├── input.tsx
│   │       ├── label.tsx
│   │       ├── drawer.tsx
│   │       ├── marquee.tsx
│   │       ├── ripple.tsx
│   │       ├── flickering-grid.tsx
│   │       └── orbiting-circles.tsx
│   ├── assets/               # Static assets
│   │   └── fonts/           # Custom fonts
│   └── lib/                 # Utilities & config
│       ├── config.tsx       # Site configuration
│       ├── utils.ts         # Utility functions
│       ├── blog.ts          # Blog utilities
│       ├── fonts.ts         # Font configurations
│       └── animation.ts     # Animation utilities
├── 📁 content/              # MDX blog posts
│   ├── introducing-dev-ai.mdx
│   ├── how-dev-ai.mdx
│   └── why-dev-ai.mdx
├── 📁 public/              # Public assets
│   ├── author.jpg
│   ├── dashboard.png
│   ├── preview.gif
│   └── preview.mp4
├── 📄 package.json
├── 📄 tailwind.config.ts
├── 📄 next.config.mjs
└── 📄 tsconfig.json
```

## 🎨 Components

This project includes various pre-built components:

- **Hero Section**: Eye-catching developer tool hero with video previews and animations
- **Examples Section**: Interactive examples showcasing your tool's capabilities
- **Use Cases**: Real-world applications and use cases for your developer tool
- **Features Section**: Feature selector highlighting key functionalities
- **Statistics Section**: Data-driven metrics and achievements
- **Pricing Section**: Pricing plans with detailed feature comparisons
- **Testimonials**: Client testimonials with smooth animations
- **Community Section**: Developer community engagement
- **Blog Section**: Latest articles and announcements
- **CTA Section**: Call-to-action with compelling messaging
- **Magic UI Effects**: Flickering grid, orbiting circles, ripple effects, and more

## 🚀 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## ⚙️ Configuration

### Customizing Content
- Edit site configuration in `src/lib/config.tsx`
- Modify landing page sections in `src/components/sections/`
- Update blog posts in `content/` directory (MDX format)
- Customize theme settings in `src/components/theme-provider.tsx`

### Styling
- Modify `tailwind.config.ts` for custom colors and design tokens
- Theme switching is handled by `next-themes`
- Global styles are in `src/app/globals.css`

### Components
- Base components are in `src/components/ui/`
- Landing page specific components are in `src/components/sections/`
- Reusable utilities are in `src/lib/`

### Blog System
- Add new blog posts as MDX files in the `content/` directory
- Syntax highlighting powered by `rehype-pretty-code` and `shiki`
- Blog configuration in `src/lib/blog.ts`

## 📚 Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework
- [Magic UI](https://magicui.design/) - Beautiful animated components
- [Shadcn/ui](https://ui.shadcn.com/) - Beautifully designed components
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Framer Motion](https://www.framer.com/motion/) - Production-ready motion library for React
- [MDX](https://mdxjs.com/) - Markdown for the component era

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbforbilly24%2Fdevtool-nextjs-frontend-app)

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Other Deployment Options

You can also deploy this application on:
- **Netlify**: Connect your Git repository for automatic deployments
- **AWS Amplify**: Full-stack deployment with hosting and backend services
- **Railway**: Simple deployment with Git integration
- **DigitalOcean App Platform**: Container-based deployment

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Halim Putra**

- GitHub: [@bforbilly24](https://github.com/bforbilly24)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/bforbilly24/devtool-nextjs-frontend-app/issues).

## ⭐ Show your support

Give a ⭐️ if this project helped you!
