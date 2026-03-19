# Restaurant Insight-to-Action Engine
### MSIS 522 — Team 9

## What We Built

The **Restaurant Insight-to-Action Engine** is an end-to-end NLP analytics system that transforms unstructured customer reviews into a prioritized, compliance-ready business roadmap for independent restaurant operators.

The system runs a four-stage pipeline:

1. **PII De-identification** — regex scrubbing masks emails, phone numbers, and URLs before any analysis
2. **TF-IDF Feature Engineering** — reviews are encoded into a 1,000-dimensional vector space
3. **Unsupervised K-Means Clustering (K=6)** — groups semantically similar reviews into operational themes (e.g. Price & Speed Issues, Ambience, Dessert Highlights)
4. **Prescriptive Action Mapping** — weighted sentiment scoring triggers a `Promote` or `Fix` label for each theme, producing a ranked weekly action roadmap

The live app is built with **Streamlit** and **Plotly** and is deployed at:
**https://restaurantinsighttool-khurc5nhj5pewuzwfpdzcq.streamlit.app**

This repository contains the **project showcase webpage** — a polished, interactive summary of our work.

---

## How to Run the Showcase Webpage Locally

**Requirements:** Node.js (v18 or later)

```bash
# 1. Clone the repository
git clone https://github.com/martguan-code/msis522-team9-project-final.git
cd msis522-team9-project-final

# 2. Install dependencies
npm install

# 3. Start the local development server
npm run dev
```

Then open your browser and go to **http://localhost:5173**

---

## Project Links

| Resource | URL |
|---|---|
| Live Streamlit App | https://restaurantinsighttool-khurc5nhj5pewuzwfpdzcq.streamlit.app |
| Demo Recording | https://drive.google.com/file/d/16UEPjB-FotKIaTTrx8zJUxYL76V8i6vm/view?resourcekey |
| Slide Deck | https://docs.google.com/presentation/d/1hSQKZ6Y-BsgNZJI37ip5ACbKfZVcaTy7/edit |
| Technical Report | https://docs.google.com/document/d/1Tzt3CxcknKH0k9eHs8VZ4hoY8cT5n336xQHSyCbrf84/edit?usp=sharing |

---

## Team

MSIS 522 — Team 9 (4 members)

Parul Sachdev

Tanima Shrivastava

Martin Guan

James Kaminju

