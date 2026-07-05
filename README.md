# Chesta Gupta Portfolio

This is a static interactive portfolio built with HTML, CSS, and JavaScript.

## Files

- `index.html` - page structure and content
- `styles.css` - responsive colorful design, dark/light mode, orbit animation
- `script.js` - project filters, theme toggle, boot animation, skill/project data

## How to add more projects later

Open `script.js` and add a new object inside the `projects` array:

```js
{
  title: "Project Name",
  type: "Frontend",
  status: "Shipped",
  featured: false,
  description: "Short project description.",
  stack: ["React", "Tailwind", "API"],
  features: ["Feature one", "Feature two", "Feature three"],
  github: "https://github.com/your/project"
}
```

## GitHub Pages

Upload these files to a GitHub repository and enable GitHub Pages from the repository settings.
