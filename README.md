# Portfolio Website

This portfolio is built as a static website using HTML, CSS, and JavaScript. It can be deployed easily using GitHub Pages, Vercel, Netlify, or any static hosting platform.

## Live Demo
 
If deployed on Vercel, the live URL will look similar to:

```text
https://your-project-name.vercel.app
```

## Features

- Interactive hero section with animated cyber-style background
- Access-granted loading animation
- Dark and light mode toggle
- Skill orbit / constellation animation
- Dynamic skills and project rendering using JavaScript
- Responsive layout for desktop, tablet, and mobile screens
- Dedicated sections for About, Skills, Projects, Education, Achievements, and Contact
- Contact form using `mailto:`
- Clean static structure suitable for GitHub Pages and Vercel deployment

## Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript

### Styling and UI

- Responsive CSS Grid and Flexbox
- CSS custom properties / variables
- CSS animations
- Dark and light theme support
- Google Fonts: Inter and JetBrains Mono

### JavaScript Features

- Dynamic skill cards
- Dynamic project cards
- Theme toggle with `localStorage`
- Canvas-based animated background
- Loading screen animation

### Deployment

- GitHub Pages
- Vercel

### Version Control

- Git
- GitHub

## Project Structure

```text
portfolio/
  index.html
  styles.css
  script.js
  README.md
```

## Deployment Using GitHub Pages

1. Create a GitHub repository.
2. Upload these files directly to the repository root:

```text
index.html
styles.css
script.js
README.md
```

3. Go to repository **Settings**.
4. Open **Pages**.
5. Set:

```text
Source: Deploy from a branch
Branch: main
Folder: /root
```

6. Click **Save**.
7. Wait a few minutes for deployment.

Your GitHub Pages link will look like:

```text
https://your-username.github.io/repository-name/
```

## Deployment Using Vercel

1. Push or upload the project to GitHub.
2. Go to [Vercel](https://vercel.com).
3. Sign in with GitHub.
4. Click **Add New Project**.
5. Import the portfolio repository.
6. Use these settings:

```text
Framework Preset: Other
Root Directory: ./
Build Command: Leave empty
Output Directory: Leave empty
Install Command: Leave empty
```

7. Click **Deploy**.
8. After deployment, Vercel will provide a live URL.

Example:

```text
https://portfolio.vercel.app
```

## Important Notes

- Keep `index.html` in the root of the repository.
- Do not place all files inside an extra folder when uploading to GitHub.
- If using GitHub Pages, the repository must be public unless you have a paid/private Pages setup.
- If using Vercel, the project should show status as **Ready** after deployment.
- After editing files on GitHub, GitHub Pages or Vercel may take a few minutes to show the latest changes.

