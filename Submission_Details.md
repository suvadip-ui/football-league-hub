# Submission Details

## 1. Learner Name (For certificate)

Suvadip Kolay

## 2. Roll Number

251450213249

## 3. Name of the Project (Choose from 1-6)

**05. Brand-Safe Content and Campaign Studio: Suvadip's Content Studio**

The product interface is named **Football League Hub**. The above title is the selected submission option; it does not need to appear in the app interface.

## 4. Description of the project (50 words)

Suvadip's Content Studio is a brand-safe football content generator for an independent sports journalist. It turns a visible, approved fact pack from Football League Hub into reviewable match previews or social posts. Gemini or Groq generates drafts; human review, source visibility and an optional Slack demonstration keep editorial decisions controlled.

## 5. Problem / Opportunity Statement (50 words)

Independent sports journalists need timely football updates, but gathering facts, drafting content and checking claims across sources can be slow and risks unsupported statements. The project creates an approved fact pack: the dashboard supplies context, while Content Studio generates a constrained draft for human verification before sharing.

## 6. AI Tools / Applications used

- Google AI Studio / Gemini API - fact-constrained draft match previews and social posts in Suvadip's Content Studio.
- Groq API - optional server-side backup for fact-constrained drafts when Gemini is temporarily unavailable.
- ChatGPT / Codex - development assistance and project documentation support.
- Vercel - secure serverless deployment for private API keys.
- football-data.org - current-season football tables and fixtures.
- Slack incoming webhook - optional private demo-channel posting after a human review and confirmation.

## 7. Potential outcome / benefits from the project (50 words)

The project supports faster, more controlled football-journalism drafting while preserving editorial ownership. Its usefulness can be measured by drafts approved without revision and time from an approved fact pack to a reviewable draft, compared with manual drafting. The dashboard remains a useful context and source-checking tool for the workflow.

## 8. Access to project files / data

This submission package contains the complete source folder, supporting PDFs, interface screenshots and README instructions. Extract `Project Files.zip` and open `README.md` for the recommended live and local testing steps. Private API keys and webhook addresses are deliberately excluded from the submitted files.

## Evaluation metrics and deployment limitations

Suggested success metrics are: (1) percentage of drafts approved without a revision request, and (2) average time from approved fact pack to a reviewable draft compared with manual writing. These can be recorded during a supervised test session.

Current limitations: live league coverage depends on the football-data.org plan; ISL remains a clearly labelled sample-data view; and Gemini or Groq may be temporarily unavailable, in which case the product visibly provides a fact-only template rather than representing it as AI output. A public production deployment would require API-quota monitoring, data-coverage review and continued human editorial approval.
