# Quick Test Management for Jira: resubmission sheet

Production version deployed: **3.1.0** (Forge). Previous rejection (2026-01-10): *Timeout*: reviewer questions went unanswered.

## Before clicking Resubmit

- [ ] Vendor → **Payment** filled in (shared with My Private Notes)
- [ ] `support@technicaldost.com` receives mail
- [ ] **Privacy & Security** tab → Edit (see below). The new Jira scopes must be declared.
- [ ] **Details** tab → replace banner, highlights and logo with the files in this folder
- [ ] App → **Resubmit**. Reply to any Atlassian email within 2 days.

## Images (this folder)

| Listing field | File |
|---|---|
| Logo (144×144) | `logo-144.png` |
| Banner (1120×548) | `banner-1120x548.png` |
| Highlight 1 / cropped | `highlight-1-1840x900.png` / `highlight-1-cropped-580x330.png` |
| Highlight 2 / cropped | `highlight-2-1840x900.png` / `highlight-2-cropped-580x330.png` |
| Highlight 3 / cropped | `highlight-3-1840x900.png` / `highlight-3-cropped-580x330.png` |

The UI in every image is a render of the app's own production HTML/CSS/JS with sample data. Backgrounds were generated with Codex CLI (no text, logos or UI).

## Highlights (title ≤ 50 chars, summary ≤ 220 chars)

1. **One-click test results**
   Record Pass, Fail, Blocked or Testing right on the issue, with notes that save automatically.
2. **Every test run, recorded**
   See the last 10 runs with their notes and timing, so nobody has to ask what happened.
3. **Searchable with JQL**
   Find every failing or blocked issue in Jira search, filters and dashboards with testStatus = failed or testStatusUpdated >= -7d.

## Privacy & Security tab: changes for 3.x

- **Integration permissions**: add `read:jira-work` and `write:jira-work`.
  Justification: *read:jira-work checks, as the signed-in user, that they have Edit issue permission before recording a result. write:jira-work stores the current result as a Jira issue property so it can be searched with JQL (testStatus).*
- **Personal data**: the app no longer stores Atlassian account IDs or any personal data. If the tab previously listed any, remove them.
- No End-User Data outside Atlassian; no app REST APIs.

## Note to the reviewer (paste into the resubmission comment)

> Thanks for the earlier review. Our support mailbox was not receiving mail at the time, which caused the timeout; it is fixed and monitored now. Version 3.1.0 moves storage to @forge/kvs, scopes every request to the issue in the Forge context, requires Edit issue permission (checked with asUser) to record results, checks the license, removes unsafe-inline CSP and external fonts, and no longer stores personal data. New: results are searchable with JQL (`testStatus = failed`, `testStatusUpdated >= -7d`) and there is a Get started page. Documentation: https://quicktestmanagementdocs.technicaldost.com/. No setup or test credentials are needed. Install the app and open any issue.
