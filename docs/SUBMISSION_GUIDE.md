# 🚀 Quick Test Management - Marketplace Submission Guide

This guide contains everything you need to validly submit your app to the Atlassian Marketplace.

## 1. Prerequisites (Do this first!)

### ✅ Production Deploy
Your app is already deployed to production (v2.12.0).
- **Environment:** Production
- **App ID:** `ari:cloud:ecosystem::app/f747b6ce-539e-4ecb-821f-4439e5ee22b9`

### ✅ GitHub Pages Setup
You need to host your privacy policy and support page.
1.  Push the `docs` folder to a GitHub repository.
2.  Enable GitHub Pages for that repository (Source: `/docs` folder).
3.  **DNS Config:** Add a CNAME record in your domain provider (Namecheap/GoDaddy):
    -   **Host:** `quicktestmanagementdocs`
    -   **Target:** `your-github-username.github.io`

---

## 2. Start Submission

1.  Go to **[Atlassian Developer Console](https://developer.atlassian.com/console/myapps/)**.
2.  Select **Quick Test Management**.
3.  Click **Distribution** in the left menu.
4.  Click **Open API Console** (if prompted) or just **Edit Listing** to start.

---

## 3. Fill in Listing Details (Copy-Paste)

| Field | Value |
|-------|-------|
| **App Name** | Quick Test Management for Jira |
| **Tagline** | Simple pass/fail test management for Jira issues. Track testing status, notes, and history. |
| **Description** | (Copy from `docs/MARKETPLACE_LISTING.md`) |
| **Privacy Policy URL** | `https://quicktestmanagementdocs.technicaldost.com/privacy-policy.html` |
| **Terms of Use URL** | `https://quicktestmanagementdocs.technicaldost.com/index.html` (or separate terms if you have them) |
| **Support URL** | `https://quicktestmanagementdocs.technicaldost.com/index.html` |
| **Documentation URL** | `https://quicktestmanagementdocs.technicaldost.com/index.html` |
| **Categories** | Testing & QA, Project Management, Agile |

---

## 4. Upload Assets

All assets are ready in your project folders:

### 🖼️ App Icon
-   **File:** `assets/app_icon_512.png`
-   **Size:** 512x512 px

### 📸 Screenshots
Upload the 3 screenshots I captured (located in your Artifacts folder):
1.  **Test Passed** (`screenshot_1_passed`) -> Caption: "One-click status updates directly in Jira issues"
2.  **Test Failed** (`screenshot_2_failed_notes`) -> Caption: "Add detailed failure notes and block reasons"
3.  **Audit History** (`screenshot_3_history`) -> Caption: "Full history of test runs and status changes"

---

## 5. Payment Details
-   Select **Free** (as per your current model).
-   If you want to charge later, you can update this to "Paid via Atlassian".

## 6. Submit!
1.  Review all fields.
2.  Click **Submit for Approval**.
3.  Approval usually takes 1-3 business days.

---
**🎉 Good Luck! The app looks great and is fully functional.**
