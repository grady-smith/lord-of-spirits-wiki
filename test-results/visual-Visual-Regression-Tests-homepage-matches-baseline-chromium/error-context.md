# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual.spec.ts >> Visual Regression Tests >> homepage matches baseline
- Location: tests/visual.spec.ts:4:3

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  Expected an image 1280px by 1726px, received 1280px by 1487px. 80688 pixels (ratio 0.04 of all image pixels) are different.

  Snapshot: homepage.png

Call log:
  - Expect "toHaveScreenshot(homepage.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - Expected an image 1280px by 1726px, received 1280px by 1487px. 80693 pixels (ratio 0.04 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 1 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 250ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 6 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 500ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - Expected an image 1280px by 1726px, received 1280px by 1487px. 80688 pixels (ratio 0.04 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - heading "Lord of Spirits Wiki" [level=2] [ref=e5]:
      - link "Lord of Spirits Wiki" [ref=e6] [cursor=pointer]:
        - /url: .
    - generic [ref=e7]:
      - button "Search Search" [ref=e10] [cursor=pointer]:
        - img "Search" [ref=e11]
        - paragraph [ref=e15]: Search
      - button "Dark mode" [ref=e17] [cursor=pointer]:
        - img "Dark mode" [ref=e18]
      - button "Reader mode" [ref=e21] [cursor=pointer]:
        - img "Reader mode" [ref=e22]
    - generic [ref=e25]:
      - button "Explorer" [expanded] [ref=e26] [cursor=pointer]:
        - heading "Explorer" [level=2] [ref=e27]
        - img [ref=e28]
      - group [ref=e29]:
        - list [ref=e30]:
          - listitem [ref=e31]:
            - generic [ref=e32]:
              - img [ref=e33] [cursor=pointer]
              - link "concepts" [ref=e35] [cursor=pointer]:
                - /url: ./concepts/
          - listitem [ref=e36]:
            - generic [ref=e37]:
              - img [ref=e38] [cursor=pointer]
              - link "transcripts" [ref=e40] [cursor=pointer]:
                - /url: ./transcripts/
          - listitem [ref=e41]
  - generic [ref=e42]:
    - generic [ref=e44]:
      - heading "Welcome to the Lord of Spirits Wiki" [level=1] [ref=e45]
      - paragraph [ref=e46]:
        - generic [ref=e47]:
          - text: "Last updated:"
          - time [ref=e48]: May 23, 2026
          - text: ","
        - text: 1 min read
    - article [ref=e49]:
      - heading "The Lord of Spirits Knowledge Graph" [level=1] [ref=e50]:
        - text: The Lord of Spirits Knowledge Graph
        - link [ref=e51] [cursor=pointer]:
          - /url: "#the-lord-of-spirits-knowledge-graph"
          - img [ref=e52]
      - paragraph [ref=e55]:
        - text: Welcome to the autonomous, AI-generated wiki for the
        - emphasis [ref=e56]: Lord of Spirits
        - text: podcast, hosted by Fr. Andrew Stephen Damick and Fr. Stephen De Young.
      - paragraph [ref=e57]: This repository contains fully transcribed, deeply interlinked episodes and a comprehensive encyclopedia of the ancient, mystical theology discussed on the show.
      - heading "Explore the Cosmology" [level=2] [ref=e58]:
        - text: Explore the Cosmology
        - link [ref=e59] [cursor=pointer]:
          - /url: "#explore-the-cosmology"
          - img [ref=e60]
      - paragraph [ref=e63]:
        - text: Using the
        - strong [ref=e64]: Explorer
        - text: "in the sidebar, you can navigate between:"
      - list [ref=e65]:
        - listitem [ref=e66]:
          - strong [ref=e67]: Transcripts
          - text: ": Read through 140+ fully transcribed podcast episodes, complete with timestamps."
        - listitem [ref=e68]:
          - strong [ref=e69]: Concepts
          - text: ": Dive into our AI-generated encyclopedia containing over 400 unique theological and historical definitions."
      - paragraph [ref=e70]:
        - text: To view the full list of transcripts, visit the
        - link "Transcripts Folder" [ref=e71] [cursor=pointer]:
          - /url: https://lord-of-spirits-wiki.stevenjaysmith.workers.dev/transcripts/
          - text: Transcripts Folder
          - img [ref=e72]
        - text: .
      - heading "Core Pillars" [level=3] [ref=e74]:
        - text: Core Pillars
        - link [ref=e75] [cursor=pointer]:
          - /url: "#core-pillars"
          - img [ref=e76]
      - paragraph [ref=e79]: "To get started, try exploring some of these core concepts:"
      - list [ref=e80]:
        - listitem [ref=e81]:
          - link "Theosis" [ref=e82] [cursor=pointer]:
            - /url: ./concepts/Theosis
        - listitem [ref=e83]:
          - link "Divine Council" [ref=e84] [cursor=pointer]:
            - /url: ./concepts/Divine-Council
        - listitem [ref=e85]:
          - link "Nephilim" [ref=e86] [cursor=pointer]:
            - /url: ./concepts/Nephilim
        - listitem [ref=e87]:
          - link "Chaoskampf" [ref=e88] [cursor=pointer]:
            - /url: ./concepts/Chaoskampf
        - listitem [ref=e89]:
          - link "Angel of the Lord" [ref=e90] [cursor=pointer]:
            - /url: ./concepts/Angel-of-the-Lord
      - paragraph [ref=e91]:
        - emphasis [ref=e92]: Generated autonomously by the Antigravity Swarm Architecture.
    - separator [ref=e93]
  - generic [ref=e94]:
    - generic [ref=e95]:
      - heading "Graph View" [level=3] [ref=e96]
      - button "Global Graph" [ref=e100] [cursor=pointer]:
        - img [ref=e101]
    - generic [ref=e103]:
      - button "Table of Contents" [expanded] [ref=e104] [cursor=pointer]:
        - heading "Table of Contents" [level=3] [ref=e105]
        - img [ref=e106]
      - list [ref=e108]:
        - listitem [ref=e109]:
          - link "The Lord of Spirits Knowledge Graph" [ref=e110] [cursor=pointer]:
            - /url: "#the-lord-of-spirits-knowledge-graph"
        - listitem [ref=e111]:
          - link "Explore the Cosmology" [ref=e112] [cursor=pointer]:
            - /url: "#explore-the-cosmology"
        - listitem [ref=e113]:
          - link "Core Pillars" [ref=e114] [cursor=pointer]:
            - /url: "#core-pillars"
        - listitem [ref=e115]
  - contentinfo [ref=e116]:
    - separator [ref=e117]
    - generic [ref=e118]:
      - heading "Disclaimer & Copyright Notice" [level=3] [ref=e119]
      - paragraph [ref=e120]:
        - strong [ref=e121]: "Unofficial Fan Project:"
        - text: This website is an independent, non-commercial fan repository and is not affiliated with, endorsed by, or officially connected to Ancient Faith Ministries, Inc., or the hosts of the show.
      - paragraph [ref=e122]:
        - strong [ref=e123]: "Copyright Attribution:"
        - text: "All original podcast audio, titles, theology concepts, and primary source material belong exclusively to the original creators and copyright holders:"
        - strong [ref=e124]: © 2020–2026 Ancient Faith Ministries, Inc.
        - text: ", Fr. Andrew Stephen Damick, and Fr. Stephen De Young."
      - paragraph [ref=e125]:
        - strong [ref=e126]: "AI & Transcription Notice:"
        - text: The summaries, transcripts, and knowledge graph connections found here are autonomously generated and indexed using artificial intelligence. Because these materials are machine-processed, they may contain transcription errors, mishearings, or inaccuracies. For the official, authoritative, and definitive audio versions of all episodes, please visit the official
        - link "Ancient Faith Radio Lord of Spirits Page" [ref=e127] [cursor=pointer]:
          - /url: https://www.ancientfaith.com/podcasts/lordofspirits/
        - text: .
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Visual Regression Tests', () => {
  4  |   test('homepage matches baseline', async ({ page }) => {
  5  |     await page.goto('/');
  6  |     
  7  |     // Give time for any fonts or initial animations to settle
  8  |     await page.waitForTimeout(500); 
  9  | 
  10 |     // Take full page screenshot and compare
> 11 |     await expect(page).toHaveScreenshot('homepage.png', { fullPage: true });
     |                        ^ Error: expect(page).toHaveScreenshot(expected) failed
  12 |   });
  13 | 
  14 |   // We can add more tests here for other pages, e.g., tags, specific long-form articles
  15 |   test('tags page matches baseline', async ({ page }) => {
  16 |     // If a tags page exists:
  17 |     // await page.goto('/tags');
  18 |     // await page.waitForTimeout(500);
  19 |     // await expect(page).toHaveScreenshot('tags.png', { fullPage: true });
  20 |   });
  21 | });
  22 | 
```