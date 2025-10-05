# Smart Event Analytics Platform

**Smart Event** — A modern event management & analytics platform that helps organizers create events, manage attendees, collect feedback, and view actionable analytics.

---

## 🚀 Overview

Smart Event is a full-stack project built for portfolio and learning purposes. It demonstrates:

* Event CRUD (Create / Read / Update / Delete)
* User registration & authentication
* Attendee check-in & management
* Comments / feedback system
* Analytics dashboard (attendance, sentiment of feedback)
* Integration with an analytics microservice

---

## 🧩 Key Features

* Event management (create / edit / delete / list)
* User roles (organizer / attendee)
* Real-time updates (websockets or polling)
* Feedback & comments with sentiment analysis (AI microservice)
* Responsive dashboard with charts and filters
* Component library documented with Storybook

---

## 🛠️ Tech Stack

**Frontend**

* SvelteKit + TypeScript
* TailwindCSS
* GSAP (optional animations)
* Storybook

**Backend**

* Go (Chi) — REST API
* PostgreSQL — database
* Prisma / GORM — ORM (optional)
* Python (FastAPI) — analytics & ML microservice

**Dev / Deploy**

* Git / GitHub
* Vercel (frontend)
* Render / Fly.io (backend)
* Supabase / Neon (Postgres) — optional hosted DB

---

## ⚙️ Quick Start (Frontend)

```bash
# clone project
git clone https://github.com/<yourusername>/smart-event-analytics-platform.git
cd smart-event-analytics-platform

# frontend
cd smartevent-frontend
npm install
npm run dev
# open http://localhost:5173
```

Backend and analytics service setup instructions are provided in `/smartevent-backend/README.md` and `/backend-py/README.md` respectively once implemented.

---

## 🧾 Repository Structure (planned)

```
smart-event-analytics-platform/
├─ smartevent-frontend/     # SvelteKit app
├─ smartevent-backend/      # Go API (Chi + GORM/Prisma)
├─ backend-py/              # Python analytics (FastAPI)
├─ docs/                    # architecture diagrams, roadmap
└─ README.md
```

---

## 🔐 License & Ownership (Important)

**Copyright © 2025 [Marc Samuel Canales]. All rights reserved.**

This repository is published for **portfolio and educational purposes only**.
**Unauthorized copying, use, modification, distribution, or claiming this project (in whole or in part) as your own work is strictly prohibited.** If I (the owner) discover that someone has used my code, modified it slightly, or presented it as their own without my express written permission, I will pursue all available legal remedies.

If you wish to use or adapt any part of this project, contact: `marcsamuelcanales.26@gmail.com` to request permission and licensing terms.

---

## 📌 Reporting Misuse

If you find this project being used without permission, please:

1. Contact me at `marcsamuelcanales.26@gmail.com` with links and details.
2. You may also report the repository to GitHub (copyright infringement / DMCA) or other hosting providers where the infringing content appears.

---

Thank you for checking out Smart Event.
— **[Marc Samuel Canales]**
