# Typing Skill Test

A web-based typing skill test simulator designed to help users prepare for Government Exam typing tests.  
It mimics the interface and environment used by official commission software, complete with a countdown timer, error detection, and WPM calculation.

**Live Demo:** [Typing Skill Test](https://lovnishverma.github.io/Typing-Test/)

<img width="691" height="706" alt="image" src="https://github.com/user-attachments/assets/79a7932a-76a4-4274-a4e6-4358a90a0a52" />


---

## 📌 Major Features

- **Realistic UI:** Interface designed similar to Government skill test software.
- **Countdown Timer:** Standard 10-minute test duration with mini countdown start.
- **Live Typing Area:** Textarea with pre-wrap formatting and Times New Roman font.
- **Error Detection:** Detects spelling mistakes, extra spaces, and repeated words (requires `words_dictionary.json`).
- **Statistics Panel:**
  - Mistakes count
  - Extra spaces
  - Repeated words
  - Total errors
  - Total words
  - Total strokes
  - Accuracy percentage
  - Net typing speed (WPM)
- **Responsive Layout:** Works on desktop and mobile devices.
- **Standalone:** Runs entirely in the browser without server-side processing.

---

## 📂 Repository Structure

```

.
├── apple-touch-icon.png
├── data.json
├── favicon.png
├── html2canvas.js
├── index.html              # Main Typing Test page
├── logo-typing.svg
├── logo.svg
├── lovnishverma.png
├── styles.css
├── script.js                  # Main typing logic (obfuscated)
├── love.json
├── love.svg
├── strokes.html            # WPM calculator page
├── strokes.js
├── typing.html
├── words_dictionary.json   # English words list for spell check
├── wpmcalculator.html
└── README.md              # This File (Documentation)

````

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/lovnishverma/Typing-Test.git
cd Typing-Test
````

### 2️⃣ Run locally

You can open `index.html` directly in a browser,
but to ensure dictionary loading works, serve the files via a local HTTP server:

```bash
# Python 3
python -m http.server 8000

# Node.js
npx serve
```

Then visit:

```
http://localhost:8000
```

---

## 🛠 How It Works

1. **Start Test** → Click the "Start Test" button.
2. A **mini countdown** appears before the timer begins.
3. Type into the provided textarea.
4. At the end of 10 minutes (or when you stop), the script:

   * Compares your typed words to the dictionary (`words_dictionary.json`).
   * Highlights errors, repeated words, and extra spaces.
   * Displays statistics in the results overlay.

---

## 📄 Notes on Dictionary

* The script (`script.js`) fetches the **`words_dictionary.json`** file for spell-checking.
* For GitHub Pages hosting, the file must be in the **root directory** (already included in this repo).
* If running locally, you must use a local server — AJAX requests will fail with `file://` paths due to browser restrictions.

---

## 🌐 Deployment

This repository is configured for **GitHub Pages**:

1. Push your changes to the `main` branch.
2. Enable GitHub Pages in your repository settings:

   * **Source:** Deploy from branch → `main`
   * **Folder:** `/ (root)`
3. Access your site at:

   ```
   https://<your-username>.github.io/Typing-Test/
   ```

Already live at:
[https://lovnishverma.github.io/Typing-Test/](https://lovnishverma.github.io/Typing-Test/)

---

## 📸 Screenshot

![Screenshot](lovnishverma.png)

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE) (or specify your license).

---

## ✨ Credits

* **Word Dictionary:** [dwyl/english-words](https://github.com/dwyl/english-words)
* **Author:** [Lovnish Verma](https://github.com/lovnishverma)


---
