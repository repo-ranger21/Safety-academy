# ASPT Safety Academy

A modern vocational education platform built with Vite + React + TypeScript + Tailwind CSS, designed for safety training and professional development.

## 🚀 Quick Start

### Prerequisites
- Node.js 18 or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Safety-academy
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality
- `npm start` - Serve production build (requires build first)

### Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   └── common/       # Common components
├── layouts/
│   ├── PublicLayout.tsx     # Layout for public pages
│   └── BusinessLayout.tsx   # Layout for business pages
├── pages/
│   ├── Home.tsx
│   ├── Programs.tsx
│   ├── Admissions.tsx
│   ├── About.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   ├── BusinessTools.tsx
│   ├── BusinessGrowthLanding.tsx
│   ├── InstructorPortal.tsx
│   ├── AssessmentSystem.tsx
│   ├── AlumniNetwork.tsx
│   ├── CorporateTraining.tsx
│   └── NotFound.tsx
├── hooks/            # Custom React hooks
├── context/          # React context providers
├── assets/           # Static assets
├── styles/           # CSS files
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
├── App.tsx
└── main.tsx
```

### Technology Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Routing**: React Router DOM 6
- **Linting**: ESLint with TypeScript support

## 🌐 Deployment

### Replit (Recommended)

The project is optimized for Replit deployment with the included `.replit` configuration:

1. Import the repository to Replit
2. The environment will automatically install dependencies
3. Run the project using the "Run" button
4. The app will be available at your Replit subdomain

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

Create `vercel.json` for custom configuration:
```json
{
  "routes": [
    { "handle": "filesystem" },
    { "src": "/.*", "dest": "/index.html" }
  ]
}
```

### GitHub Pages

1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages
3. Configure your repository settings for Pages deployment

For automated deployment, add this GitHub Action to `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on git push

## 🎨 Features

### Public Pages
- **Home**: Landing page with hero section and features
- **Programs**: Course offerings and curriculum details
- **Admissions**: Application process and requirements
- **About**: Company information and mission
- **Testimonials**: Student success stories
- **Contact**: Contact information and form

### Business Portal
- **Business Tools**: Safety management tools and utilities
- **Business Growth**: Growth-focused landing page
- **Instructor Portal**: Dashboard for instructors
- **Assessment System**: Student evaluation and grading
- **Alumni Network**: Graduate networking platform
- **Corporate Training**: Enterprise training solutions

### Technical Features
- Responsive design with Tailwind CSS
- TypeScript for type safety
- Modular component architecture
- SEO-friendly routing
- Production-ready build optimization
- Modern development workflow

## 🎯 Customization

### Styling
- Modify `tailwind.config.js` for theme customization
- Update color palette in the config file
- Add custom CSS in `src/styles/index.css`

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.tsx`
3. Update navigation in appropriate layout

### Environment Variables
Create `.env` file for environment-specific settings:
```
VITE_API_URL=your-api-url
VITE_APP_NAME=ASPT Safety Academy
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a Pull Request

### Code Style
- Follow TypeScript best practices
- Use functional components with hooks
- Maintain consistent file structure
- Add proper TypeScript types
- Follow Tailwind CSS conventions

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact: info@asptsafetyacademy.com
- Documentation: [Coming Soon]

## 🔄 Version History

- **v0.0.0** - Initial project scaffold with complete feature set