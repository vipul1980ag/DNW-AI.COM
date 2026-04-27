# DNW-AI Website — Quick Reference Card

## Live URLs
| | URL |
|---|---|
| Main site | https://www.dnw-ai.com |
| Railway internal | https://q5pv3uss.up.railway.app |
| Safe2Go | https://safe2go.dnw-ai.com |
| Transportation Optimizer | https://toc.dnw-ai.com |
| Park As You Desire | https://park.dnw-ai.com |
| Allsorter | https://allsorter.dnw-ai.com |

---

## Code & Hosting
| | |
|---|---|
| Local folder | C:\Users\vipul\dnw-ai\ |
| GitHub repo | https://github.com/vipul1980ag/DNW-AI.COM.git |
| Hosting | Railway (auto-deploys on git push) |
| Railway port | 8080 |
| Domain registrar | Spaceship |

---

## Pages
| Page | File |
|---|---|
| Home | index.html |
| Our Services | services.html |
| Tools & Tips | tools.html |
| Industries | industries.html |
| About Us | about.html |
| Blog | blog.html |
| Contact Us | contact.html |

---

## How to Make Changes

### 1. Edit files locally
Open any .html file in C:\Users\vipul\dnw-ai\

### 2. Push to GitHub
```
cd C:\Users\vipul\dnw-ai
git add .
git commit -m "your change description"
git push
```

### 3. Done — Railway auto-redeploys in ~1 min

---

## Key Files
| File | Purpose |
|---|---|
| server.js | Express static server (Railway entry point) |
| assets/style.css | All styles & design system |
| assets/main.js | Mobile nav, scroll animations, contact form |
| package.json | Node dependencies (express) |

---

## Design System
| Token | Value |
|---|---|
| Primary (navy) | #0a1f44 |
| Secondary (blue) | #1a6cf0 |
| Accent (gold) | #f0a500 |
| Font | Segoe UI / system sans-serif |

---

## DNS (Spaceship)
| Record | Type | Points to |
|---|---|---|
| www | CNAME | q5pv3uss.up.railway.app |
| safe2go | CNAME | (Railway service when ready) |
| toc | CNAME | (Railway service when ready) |
| park | CNAME | (Railway service when ready) |
| allsorter | CNAME | (Railway service when ready) |

---

## Railway Environment Variables
| Key | Value |
|---|---|
| NODE_ENV | production |
| PORT | 8080 |

---

*Last updated: April 2026*
