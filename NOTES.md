# Code Harmony v2 — Development Notes

> Last updated: March 19, 2026

## Project Overview

Complete rebuild of [codeharmony.dev](https://codeharmony.dev) from scratch.

| Property | Value |
|----------|-------|
| **Repo** | https://github.com/sahilkumar1012/code-harmony-v2 |
| **Original v1** | https://github.com/sahilkumar1012/code-harmony |
| **Local Path** | `C:\Users\sahilsahil\source\code-harmony-v2` |
| **Live v1** | https://codeharmony.dev |
| **Firebase Project** | `codeharmonyapp` |
| **Tech Stack** | React 18 + Vite + Tailwind CSS 3 + Firebase + Framer Motion |
| **Theme** | Dark-first with light toggle (persisted in localStorage) |

---

## What's Built (v2 Current State)

### Pages
| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero (animated gradient, stats counters), ServicesGrid, MentorShowcase (top 4), TestimonialSlider (with profile photos), YouTubeSection (3 videos), FAQAccordion |
| Mentors | `/mentors` | 8 mentors, filterable by expertise (Frontend, Backend, DSA, System Design, Product Management), company badges, LinkedIn + Topmate links, "Become a Mentor" CTA |
| DSA Sheet | `/dsa` | Interactive table with 63 LeetCode problems, topic filter (15+ topics), search, sort by difficulty/completion, progress bar, localStorage tracking, YouTube explanation links |
| About | `/about` | Mission statement, YouTube channel + Discord community CTAs |
| Contact | `/contact` | Email (codeharmonyofficial@gmail.com), social links |
| Login | `/login` | Google Auth via Firebase |

### Components
| Component | Location | Notes |
|-----------|----------|-------|
| Navbar | `src/components/layout/Navbar.jsx` | Glassmorphism, sticky, mobile hamburger drawer (Framer Motion), dark/light toggle, auth avatar dropdown |
| Footer | `src/components/layout/Footer.jsx` | Centered layout matching v1 — brand-colored social icons with scale hover animation, Contact Us button, floating WhatsApp, copyright |
| Hero | `src/components/sections/Hero.jsx` | Animated gradient bg, gradient text heading, 2 CTA buttons, stats counters |
| ServicesGrid | `src/components/sections/ServicesGrid.jsx` | 3 cards — Mentorship, DSA Prep, Mock Interviews |
| MentorShowcase | `src/components/sections/MentorShowcase.jsx` | Top 4 mentors preview on home, "View All Mentors →" link |
| TestimonialSlider | `src/components/sections/TestimonialSlider.jsx` | Review carousel with profile photos, navigation dots, arrow buttons |
| YouTubeSection | `src/components/sections/YouTubeSection.jsx` | 3 embedded YouTube videos, channel link button |
| FAQAccordion | `src/components/sections/FAQAccordion.jsx` | 6 DSA/mentorship FAQs, animated expand/collapse |

### Data Files
| File | Content |
|------|---------|
| `src/data/mentors.js` | 8 mentors with companies, LinkedIn, Topmate, expertise, profile image URLs |
| `src/data/problems.js` | 63 LeetCode problems with difficulty, topics, tags, YouTube links |
| `src/data/reviews.js` | 5 mentee reviews with profile photo paths |
| `src/data/faq.js` | 6 FAQ items about DSA and mentorship |
| `src/data/videos.js` | 3 YouTube video IDs and titles |

### Infrastructure
| File | Purpose |
|------|---------|
| `src/context/ThemeContext.jsx` | Dark/light mode context, localStorage persistence |
| `src/context/AuthContext.jsx` | Firebase Google Auth, onAuthStateChanged listener |
| `src/lib/firebase.js` | Firebase config (reads from VITE_FIREBASE_* env vars) |
| `.firebaserc` | Firebase project: `codeharmonyapp` |
| `firebase.json` | Hosting config — serves from `dist/`, SPA rewrites |

### Documentation (`docs/`)
| File | Content |
|------|---------|
| `architecture.html` | Component diagram, tech stack, data flow, folder structure, deployment pipeline |
| `firebase-setup.html` | 9-step Firebase setup guide, env vars, local dev, CI/CD |
| `style.css` | Shared dark theme CSS for docs |

---

## Git History
```
954cb48 Add mentee profile photos to testimonial slider
481d779 Footer: use permanent brand colors on icons with scale hover animation
36f69d7 Revert footer to original centered style with social icons row
f603f4f Replace DSA PDF viewer with interactive problem-tracking sheet
94644f1 Add DSA.pdf and rename nav link to DSA Sheet
402e622 Code Harmony v2: Complete rebuild with React + Vite + Tailwind CSS
```

---

## Pending / TODO

### High Priority
- [ ] **Deploy to Firebase** — Create `.env` with Firebase config keys, run `npm run build && firebase deploy`
- [ ] **Connect DSA tracking to Firestore** — Currently localStorage, should sync with user account
- [ ] **WhatsApp link** — Replace placeholder number in Footer.jsx with real number
- [ ] **Mentor profile photos** — Currently using GitHub raw URLs, should download locally

### Medium Priority
- [ ] **Leaderboard modal** — Existed in v1 (shows students by problems solved from Firestore)
- [ ] **Mentor onboarding form** — Existed in v1 (`/mentorship/onboard` route)
- [ ] **Google Analytics** — Add GA4 tracking (tag: G-D7JVP17LS5)
- [ ] **SEO meta tags** — Per-page OG tags, descriptions
- [ ] **Code splitting** — Bundle is 709KB, use dynamic imports for pages

### Nice to Have
- [ ] Blog / Articles section
- [ ] Dark/light toggle animation
- [ ] Mentor search by company name
- [ ] Problem streak tracker
- [ ] PWA support (service worker, offline)

---

## Firebase Deployment (Quick Reference)

```bash
# 1. Create .env file in project root
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=codeharmonyapp.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=codeharmonyapp
VITE_FIREBASE_STORAGE_BUCKET=codeharmonyapp.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# 2. Install Firebase CLI (if not already)
npm install -g firebase-tools

# 3. Login
firebase login

# 4. Build & Deploy
npm run build
firebase deploy
```

---

## Related Project: CalendarAlarm

| Property | Value |
|----------|-------|
| **Repo** | https://github.com/sahilkumar1012/CalendarAlarm |
| **Local Path** | `C:\Users\sahilsahil\source\CalendarAlarm` |
| **Status** | Clean, all pushed to `personal` remote |
| **docs/ added** | architecture.html, setup-guide.html, technical-reference.html |
| **Pending** | 2 commits unpushed to `origin` (work remote — auth issue) |

---

## Social Links (Code Harmony)
- YouTube: https://youtube.com/@CodeHarmonydev
- Discord: https://discord.gg/p3vtnzFbn5
- LinkedIn: https://www.linkedin.com/company/codeharmonydev/
- X/Twitter: https://x.com/codeharmonyHQ
- Instagram: https://instagram.com/codeharmony.dev
- Telegram: https://t.me/codeharmonydev
- Email: codeharmonyofficial@gmail.com
- Topmate (Sahil): https://topmate.io/hisahil
