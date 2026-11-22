# Ricardo Guilherme — Developer Portfolio

A personal portfolio for Ricardo Dias Guilherme, a Computer Science student at the University Polytechnic of Beja, Portugal. It presents his interests, technologies, verified personal project, and availability for a curricular internship in a responsive interface with beige backgrounds and brown accents.

The website also supports the individual Group Dynamics and Communication assignment. **It is not ready for submission until the real CV and introduction video have been added, checked, and published at a working public URL.** No deployment is performed automatically.

## Technology and design decisions

- **React and JavaScript (JSX):** functional components keep the sections independent and reusable. Content lives in one data module so updates do not require rewriting layouts.
- **Vite:** a small development and production build setup; no additional application framework or backend is needed.
- **Modern CSS:** shared design tokens, responsive grids, visible focus states, and reduced-motion support provide a consistent visual system without a UI library.
- **Typography:** DM Sans and Manrope are loaded from Google Fonts when available, with system font fallbacks for offline use or blocked font requests.
- **Native HTML:** semantic sections, anchor navigation, email links, and HTML5 video use browser features directly.
- **Git:** recommended for tracking your future edits. The supplied workspace did not contain an existing Git repository; remote creation and publication are separate user actions.

The project card describes only the verified Task Management REST API; there are no invented projects, metrics, social profiles, or credentials.

## Getting started

Install Node.js 22.12 or newer with npm, then open a terminal in this directory:

```sh
npm install
npm run dev
```

Open the local address printed by Vite. Stop the server with `Ctrl+C`.

On Windows, if PowerShell blocks `npm.ps1`, use `npm.cmd install` and `npm.cmd run dev` instead. The same substitution works for the other commands; changing the system execution policy is unnecessary.

## Production build and local preview

```sh
npm run build
npm run preview
```

The build writes the static website to `dist/`. Open the preview address printed in the terminal and check the production version. `npm run preview` is a local verification server, not a public deployment service.

## Folder structure

```text
public/
  profile.jpg               # Optional portrait for the home section
  cv.pdf                    # Add your real CV here
  videos/
    pitch.mp4               # Add your real introduction video here
    pitch.vtt               # Optional English WebVTT captions
src/
  components/               # Navbar, Footer, SectionHeading, ProjectCard, Icon
  data/portfolio.js         # Verified content, skills, project data, social links
  hooks/useLocalAsset.js    # Handles a local video's failed load
  sections/                 # Hero, About, Skills, Projects, VideoPitch, Resume, Contact
  styles/global.css         # Design tokens, layout, responsive styles, accessibility
  App.jsx                   # Page composition
  main.jsx                  # React entry point
docs/
  video-pitch-script.md
  submission-checklist.md
index.html                  # Page title, description, favicon reference
package.json                # Dependencies and development commands
vite.config.js              # React build setup and local asset discovery
```

The asset entries in this tree describe the expected locations; they are not supplied placeholder files.

## Editing content

Update `src/data/portfolio.js` for profile information, education, technical and interpersonal skills, language information, and project descriptions. Keep statements consistent with your real experience, CV, and video. Edit the section components when changing a layout, and use the CSS custom properties in `src/styles/global.css` to adjust the visual identity.

Update the title and meta description in `index.html` if your professional focus changes. The footer year is generated automatically.

### Adding your portrait

Save your photo as `public/profile.jpg`. The home section also accepts `public/profile.jpeg`, `public/profile.png`, or `public/profile.webp`, in that order. Keep just one of these files in `public/`.

The home page uses a 4:5 frame. Restart the development server or rebuild for production after adding the photo. The frame appears when the photo loads.

### Adding a verified project

Add another object to the exported `projects` array. Follow the existing project's shape:

```js
{
  id: 'unique-project-id',
  title: 'Verified project title',
  category: 'Personal project',
  description: 'A factual description of what you built.',
  technologies: ['Java', 'Spring Boot'],
  features: ['A functionality you implemented'],
  demonstrates: 'Skills demonstrated by the work',
  repositoryUrl: null,
}
```

The shared project card renders each entry. Keep `repositoryUrl` as `null` until you have checked the exact repository URL and confirmed that recruiters can access it. Do not add projects simply to fill space.

### Adding the CV

1. Export your current, genuine CV as a readable PDF.
2. Save it at `public/cv.pdf` with that exact filename.
3. Restart the development server, or rebuild for production.
4. Check both the view and download actions in the CV section. Open the downloaded PDF and confirm that its contents are up to date.

`vite.config.js` checks for nonempty local asset files when the server starts or a production build runs, using Node's filesystem APIs. The resulting URLs are passed to the app through `import.meta.env.PORTFOLIO_ASSETS`. The CV links appear when the PDF is detected. Open the PDF yourself to confirm that it displays correctly.

### Adding the introduction video

1. Use `docs/video-pitch-script.md` as a factual starting point and personalise the delivery.
2. Record the actual introduction in English. **The final video must be no longer than 60 seconds.** Time your recording; a script word count cannot guarantee the duration.
3. Export an MP4 supported by your target browsers, preferably H.264 video with AAC audio.
4. Save it at `public/videos/pitch.mp4`.
5. Optionally add accurate English captions at `public/videos/pitch.vtt` in WebVTT format. Captions are strongly recommended for accessibility.
6. Restart the development server or rebuild, then test playback, audio, controls, duration, and mobile display.

The page uses an HTML5 video when the real file is present. Playback controls are enabled only after the browser reports a finite, positive duration of no more than 60 seconds. The player is hidden if the file is missing, fails to load, or exceeds the duration limit. Always verify the actual file yourself before submitting.

### Configuring verified profile links

Set `profile.links.github` and `profile.links.linkedin` in `src/data/portfolio.js` to your exact, verified HTTPS profile URLs. They start as `null`, so unavailable profiles are not linked. Project repositories have their own `repositoryUrl` field. Check all links in a private browser window before publication.

The contact email is a functional `mailto:` link. It opens the visitor's configured email application; there is no contact form or message-sending backend.

## Accessibility and review

The interface includes keyboard navigation, a mobile navigation menu, visible focus indicators, semantic headings, and reduced-motion styles. Before submitting, manually check:

- Keyboard-only use, including menu opening, closing, and section navigation.
- Readability and absence of horizontal scrolling at 320 px, tablet, and desktop widths.
- Every navigation link, the email action, verified profile links, and repository links.
- Real PDF viewing/downloading and real video playback with captions where available.
- Consistency of names, education, skills, and curricular internship objectives across all three materials.

Run the production build after every content or asset change. Build success validates compilation; it does not replace checking real media and browser interactions.

## Publishing to Vercel when you choose to

No GitHub push, remote resource creation, or deployment is included in this local implementation. When you are ready:

1. Complete `docs/submission-checklist.md`, including the real CV and video.
2. Create or use a Git repository, review what will be published, and push it to your chosen Git provider.
3. Import that repository into a Vercel project. Check the detected Vite settings: build command `npm run build`, output directory `dist`, and the repository root as the application root.
4. Deploy, then open the returned public URL in a private browser window. Recheck navigation, downloads, video playback, and mobile layout there.
5. Record the verified URL in your assignment submission and checklist.

Vercel can detect supported frameworks and configure their build settings automatically; confirm the selected settings before deployment. See the official [Vercel build configuration documentation](https://vercel.com/docs/builds/configure-a-build) and [Vite static deployment guide](https://vite.dev/guide/static-deploy.html).

For a static Vite site using in-page anchor links, no backend, secret credentials, or client-side router rewrites are required.
