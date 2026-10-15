# Vercel deployment records: birthcreative/birthcreative-website

Audited 2026-10-15T03:48:38.755Z (UTC). This document records 1 existing Vercel project from this repository. It is stored on `docs/vercel-deployment-records-2026-10-15` so documentation does not replace current production artifacts. The source branch can be ahead of, behind, or different from a CLI-uploaded live artifact.

## How to read this record

Each project has its own deployment history, stable ID, domains and settings below. Shared source does not imply interchangeable domains, environments or schedulers. This is a bounded retrospective snapshot, not a claim that all historical deployments have been audited.

- [client-birthcreative-website](#client-birthcreative-website)

## client-birthcreative-website

Client creative studio website. The production deployment is attributed to a CI-only change adding a secret scan. That commit does not itself describe a visual redesign; earlier deployment entries contain the layout and image changes.

### Project and deployment settings

| Setting | Recorded value |
| --- | --- |
| Purpose | Creative studio website. |
| Vercel project | [client-birthcreative-website](https://vercel.com/thejclabs/client-birthcreative-website) |
| Stable project ID | `prj_MRUxLRZhSAliRCL3liTdkmg3zRSm` |
| Owner team | thejclabs (existing Pro team) |
| Deployment login | access@thejclabs.com; verified GitHub author identity required |
| Source repository | [birthcreative/birthcreative-website](https://github.com/birthcreative/birthcreative-website) |
| Configured production branch | `main` |
| Project root | Repository root |
| Project framework override | `nextjs` |
| Project build command override | Not explicitly set |
| Project install command override | Not explicitly set |
| Project output directory override | Not explicitly set |
| Node version | `24.x` |
| Vercel Authentication scope | `all_except_custom_domains` |

No environment values, credentials or private report data are included here. A null project override does not mean no build happens: repository configuration and framework defaults may supply it.

### Configured domains

| Existing domain | Redirect destination | Branch restriction | Verified by Vercel |
| --- | --- | --- | --- |
| [birthcreative-website.vercel.app](https://birthcreative-website.vercel.app) | None | None | Yes |

Domain attachment is not proof of a working application. Preserve these names and redirect settings when maintaining the project.

### Current production target at audit time

- Deployment ID: `dpl_9KzHxH16k4yVLZ8xWqAeN5uRqfKa`.
- State: **READY**.
- Created: 2026-08-19T19:55:41.539Z.
- Source: git; attributed branch: `main`.
- Artifact URL: [birthcreative-website-e6gixbclw-thejclabs.vercel.app](https://birthcreative-website-e6gixbclw-thejclabs.vercel.app).
- Source commit: [403f53d974f785f303b69d5f8e2e2461b888427f](https://github.com/birthcreative/birthcreative-website/commit/403f53d974f785f303b69d5f8e2e2461b888427f).
- Recorded commit message: ci: add gitleaks secret scan on push and PR.

| Deployment-time setting | Recorded value |
| --- | --- |
| Framework | nextjs |
| Build command | No explicit override recorded |
| Install command | No explicit override recorded |
| Output directory | No explicit override recorded |
| Node version | `24.x` |

### Recent deployment history

The table contains up to ten most recent retained attempts, including previews and unsuccessful attempts. Titles are recorded Git metadata, not a fresh code audit. READY is a platform build state; functional testing, data accuracy and provider delivery were not revalidated by this documentation task.

| Created (UTC) | State / target | Deployment artifact | Source commit / branch | Recorded change |
| --- | --- | --- | --- | --- |
| 2026-08-19T19:55:41.539Z | READY / production | [dpl_9KzHxH16k4yVLZ8xWqAeN5uRqfKa](https://birthcreative-website-e6gixbclw-thejclabs.vercel.app) | [403f53d974](https://github.com/birthcreative/birthcreative-website/commit/403f53d974f785f303b69d5f8e2e2461b888427f); main | ci: add gitleaks secret scan on push and PR |
| 2026-08-19T19:24:05.481Z | READY / production | [dpl_H74MhDJ9RTTUyAweESiFk9XCxr7h](https://birthcreative-website-3gvmo6j55-thejclabs.vercel.app) | [6506dd3809](https://github.com/birthcreative/birthcreative-website/commit/6506dd380946ccdefb5fa42706f3b7a9a33eddc8); main | chore: add gitleaks pre-commit hook |
| 2026-07-01T07:11:37.050Z | READY / production | [dpl_54w5Ck4AefpfEUxdd2bQcKTAde1s](https://birthcreative-website-5iqd3x765-thejclabs.vercel.app) | [4b1fc6575b](https://github.com/birthcreative/birthcreative-website/commit/4b1fc6575b7daf51323f1111ecad072d15fa944f); main | Fix layout and images to match original site exactly |
| 2026-07-01T04:34:17.338Z | READY / production | [dpl_3tVW2KqynfhyuEPt4X2LzZ2XvJdF](https://birthcreative-website-4asyz0pyh-thejclabs.vercel.app) | [050093db64](https://github.com/birthcreative/birthcreative-website/commit/050093db64d2211016e27bbd5732f8b4a42e7e4c); main | Initial commit: Birth Creative website - Next.js + Tailwind static site |

The API returned no next page for this bounded snapshot. The production target above is authoritative for this snapshot even when the newest listed deployment is a preview.

### Native organization change

At 2026-10-15T03:32:49.857Z, the existing project was renamed from `birthcreative-website` to `client-birthcreative-website`. The stable project ID, existing team and domains were retained. Immediate read-back checks confirmed the expected name and unchanged team, configuration hash, domain configuration and production target. This administrative rename did not itself build or release application code.

The pre-organization production target was `dpl_9KzHxH16k4yVLZ8xWqAeN5uRqfKa`. It still matches the production target in this documentation snapshot. The final organization audit preserved all configured domains on the 19 remaining projects. The separately hosted project directory was retired; native Vercel prefixes are the organizational system.

### Repository build and checks

These commands are declared in the repository at audit time. They may differ from the source of an older production artifact; this task did not execute them or change dependencies.

| Script | Command |
| --- | --- |
| `build` | `next build` |
| `lint` | `eslint` |

See the existing [repository README](https://github.com/birthcreative/birthcreative-website/blob/main/README.md) for application-specific context. Dated README claims are historical unless independently verified.

### Next deployment record

For every future release, append the UTC timestamp, intended project ID/environment, exact source SHA (or archived uploaded-tree identifier), deployment ID, concise change summary, tests actually run, live-domain checks, migrations/configuration changes by name only, remaining limitations, and the previous known-good artifact. Distinguish attempted, preview and live releases. Keep missing evidence explicit. Authenticate through access@thejclabs.com in the existing thejclabs team and verify the project by ID before any release.


## Production repair — October 15, 2026 (UTC)

The contact and onboarding forms now deliver submissions to the owner inbox. Both user-approved verification submissions were accepted by the application and marked delivered by the mail provider: contact at 06:27:34 UTC, onboarding at 06:32:15 UTC. No customer information was used.

- Project: `prj_MRUxLRZhSAliRCL3liTdkmg3zRSm`, existing `thejclabs` Pro team; deployment login verified as `access@thejclabs.com`.
- Production deployment: `dpl_EJnNKgL8oDahntmra9LRRnZNMTuc`, staged with production settings before promotion. Source upload: local commit `f93c7e7b29db496886ae18ec8c6c3bc426fc4950`, Git tree `406823b12500a2d135f439f1080b335cf07fd86e`, based on `403f53d974f785f303b69d5f8e2e2461b888427f`. Repository publication of the source remains pending; this is a CLI-uploaded artifact.
- Changes: shared form handler and server delivery endpoint; field validation, honeypot, bounded requests, instance rate limiting, provider idempotency and timeouts. Errors preserve entries; success appears only after provider acceptance.
- Checks actually performed: four functional tests, TypeScript and production build; foreign-origin rejection; missing-configuration failure; browser error feedback retaining entries; both staged forms submitted with explicit owner approval; provider delivered status for both; live contact form readback after promotion.
- Configuration added by name only: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`. No database migration. The sending credential is restricted to the existing verified sending domain.
- Existing live address remains `https://birthcreative-website.vercel.app`. No domain attachment or redirect was edited.
- Previous known-good artifact for rollback: `dpl_9KzHxH16k4yVLZ8xWqAeN5uRqfKa`. That artifact rendered the forms but lacked delivery handlers.

The earlier documentation preview is distinct from this tested production repair. Rate limiting is per server instance; mail-provider acceptance and delivery do not guarantee future inbox placement.


