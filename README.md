# Potions Plus

A static potion recipe guide site built with plain HTML, CSS, and JavaScript.

## Run locally

Because this project loads local image assets, run it from a local web server (not directly from the file system).

1. From the project root, start a server:

```bash
python3 -m http.server 8000
```

2. Open:

```text
http://localhost:8000
```

3. Stop the server with `Ctrl+C`.

## Push to GitHub

1. Create an empty GitHub repo (for example: `potions-plus`).
2. Add your remote:

```bash
git remote add origin https://github.com/<YOUR_USERNAME>/potions-plus.git
```

3. Commit and push:

```bash
git add .
git commit -m "Add README and GitHub Pages deploy workflow"
git push -u origin master
```

If your default branch is `main`, push `main` instead:

```bash
git push -u origin main
```

## Release with GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/pages.yml` that deploys this static site to GitHub Pages.

1. In GitHub, open **Settings > Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `master` or `main`.
4. Wait for the **Deploy static content to Pages** workflow to finish.

Your live URL will be:

```text
https://<YOUR_USERNAME>.github.io/potions-plus/
```

If your repository name is `<YOUR_USERNAME>.github.io`, your site URL is:

```text
https://<YOUR_USERNAME>.github.io/
```
