# Nambirajan R S: Portfolio

Personal portfolio website. Plain HTML/CSS/JS with no build step.

## Files
| File | What it is |
|---|---|
| `data.js` | **All your content.** Edit this file to update the site. |
| `index.html` | Page structure |
| `style.css` | Design (colours are at the top under `:root`) |
| `script.js` | Renders `data.js` into the page plus animations |
| `resume.pdf` | Downloaded by the "Download resume" button |

## Edit
1. Open `data.js` in VS Code, change text, and save.
2. Double-click `index.html` (or refresh the browser) to preview.
3. Add a photo: put `photo.jpg` (square) in this folder and set `photo: "photo.jpg"`.
4. Update the resume: replace `resume.pdf` with the new file, keeping the same name.

## Publish free on GitHub Pages
1. Go to GitHub, click **New repository**, and name it exactly **`nambirajan-rs.github.io`**. Make it Public and create it.
2. Click **uploading an existing file**, drag in every file from this folder, and click **Commit changes**.
3. Go to **Settings → Pages → Build and deployment** and set Source to *Deploy from a branch*, Branch to `main` / `(root)`. Save.
4. After about 1–2 minutes the site is live at **https://nambirajan-rs.github.io**

To update later, open the repo, select **Add file → Upload files**, upload the changed file (e.g. `data.js`), and commit. The site refreshes in about a minute.

### Using git instead (optional)
```powershell
cd E:\portfolio
git init
git add .
git commit -m "Portfolio website"
git branch -M main
git remote add origin https://github.com/nambirajan-rs/nambirajan-rs.github.io.git
git push -u origin main
```
