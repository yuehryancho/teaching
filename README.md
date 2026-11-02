# teaching

Course pages for Yueh (Ryan) Cho's classes at National Taiwan University, served at <https://yuehryancho.github.io/teaching/>. The look follows the lab site at <https://yuehryancho.github.io/lab/>.

## Layout

```
index.html          course list
assets/site.css     shared styles (tokens copied from the lab site)
assets/week.js      highlights the next class in each schedule
biot7035/           Plant Physiology and Stress Responses
bfn5013/            Introduction of Protein Homeostasis
bfn5007/            Biotechnology Core Techniques (DNA module)
plant-biology/      Plant Biology (115-2, new; draft)
organelle-biology/  Organelle Biology (115-2, new; draft)
plant-lipids/       Plant Lipids (115-2, new; draft)
```

## Draft course pages

New courses go up as drafts before they are in the NTU catalog. A draft page carries `<meta name="robots" content="noindex, follow">` and a "Draft outline" notice, and stays out of the root `sitemap.xml`. Once the course code and credits are confirmed:

1. Add the code and credits to the page's hero line, the "Code and credits" row, and the course card in `index.html`.
2. Remove the draft notice and change `noindex` to `index`.
3. Add the page URL to `sitemap.xml` in the `yuehryancho.github.io` repository.

## Adding lecture slides

1. Save the slides as PDF in the course's `slides/` folder, named by week, for example `biot7035/slides/W02_water-relations.pdf`.
2. In that course's `index.html`, replace the `—` in the week's Slides cell with a link:
   `<a href="slides/W02_water-relations.pdf">PDF</a>`

GitHub rejects files over 100 MB, and a Pages site should stay under 1 GB in total, so compress large slide decks before adding them. Slides on this site are public: remove or credit third-party figures first.
