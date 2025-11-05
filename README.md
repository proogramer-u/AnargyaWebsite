# Anargya Formula Car Landing Page 

Static landing page for the Anargya ITS Indonesia electric Formula Student team.  
Built with semantic HTML, responsive CSS, and a tiny amount of vanilla JS for the navigation.

## Project structure

```text
AnargyaWebsite/
├── Index.html          # Page markup
├── Index.css           # Global styles and responsive layout
├── main.js             # Mobile navigation toggle
└── assets/
    └── images/         # Team, car, and logo imagery (placeholders included)
```

The `assets/images` folder currently contains lightweight SVG placeholders so the layout renders even without the final photography. Replace each placeholder with the real images that follow the same filenames:

| Target file | Suggested source from assignment |
|-------------|----------------------------------|
| `hero-car.png` | Launch photo of the car on stage |
| `model-2.png` | Render of Mark 2.0 (green/black) |
| `model-3.png` | Render of Mark 3.0 (carbon body) |
| `about-team.jpg` | Group photo with car & banners |
| `team-electrical.jpg` | Electrical division photo |
| `team-mechanical.jpg` | Mechanical division photo |
| `team-nontechnical.jpg` | Non-technical division meeting |
| `anargya-logo.png` | Official circular team logo |

Keep the placeholder SVG files – browsers fall back to them whenever the PNG/JPG file is absent.

## Getting started

No build tools required. Open `Index.html` directly in a browser, or start a lightweight dev server such as:

```bash
npx serve .
```

## Customising the content

- Update section copy inside `Index.html` to reflect the latest achievements or figures.
- Adjust colour tokens, spacing, or typography in `Index.css` under the `:root` declaration.
- Swap button links with live pages, forms, or social channels when available.

## Responsiveness

The layout uses modern CSS (flexbox + CSS grid). It has breakpoints at ~960px and ~680px to keep navigation, grids, and hero layouts accessible on tablets and phones.

## License

Feel free to adapt this project for the university assignment or future presentations.
