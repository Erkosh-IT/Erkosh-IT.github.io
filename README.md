# Assignment 2: Flexbox and Grid

**Name:** Yerkebulan Korganbek

**Group:** IT-2501

## Project URL

https://github.com/Erkosh-IT/Erkosh-IT.github.io


https://erkosh-it.github.io/

## How to open

Open `assignment2/index.html` in a browser. Use the Portfolio link to open `assignment2/portfolio.html`.
The project uses only HTML and CSS. No installation is needed.

## Part 1. Flexbox

### Task 0. Navigation Bar

The header uses `display: flex`. `justify-content: space-between` places the logo on the left and the links on the right. `align-items: center` centres them vertically. The link list also uses Flexbox and `gap`.

![Task 0: navigation bar](assignment2/screenshots/task0-navigation.png)

### Task 1. Card Row

Three cards contain an image, title, text, and button. The row uses Flexbox, `gap: 20px`, and `align-items: stretch` for equal heights. Each card uses a column direction. `flex-grow: 1` lets the text fill the remaining space to keep buttons at the bottom. Hovering changes the background to light gray. The buttons open the gallery.

![Task 1: three equal-height cards](assignment2/screenshots/task1-cards.png)

## Part 2. Grid System

### Task 2. Page Layout with Grid Areas

The layout uses two columns and three rows. `grid-template-areas` places the header across the top, the sidebar on the left, the main content on the right, and the footer across the bottom. Each section has a matching `grid-area`.

![Task 2: named grid areas](assignment2/screenshots/task2-grid.png)

### Task 3. Image Gallery

Nine local images use three equal columns with `repeat(3, 1fr)`. Three equal rows use `repeat(3, 1fr)`, with a 15px gap. Images use `width: 100%` and keep their original proportions. A caption appears on hover using `display: none` and `display: block`.

![Task 3: gallery with a visible hover caption](assignment2/screenshots/task3-gallery.png)

## Part 3. Combining Flexbox and Grid

### Task 4. Portfolio Page

The portfolio header uses Flexbox. The main section uses Grid with `2fr 1fr` columns: projects on the left and information on the right. Each project card uses Flexbox in a column to arrange its title, description, and button. The footer spans the page below the main section.

![Task 4: portfolio page](assignment2/screenshots/task4-portfolio.png)

## Brief Summary of Work Process

The HTML structure was created first, followed by the Flexbox navigation and cards. Next, named Grid areas and the photo gallery were added. The portfolio combines both layout methods. Flexbox wrapping lets the navigation and cards fit smaller screens. Grid columns use fractions of the available width. Finally, the pages were checked in a browser and screenshots were saved for this report.

## Lecture Topics Used

- Week 1: headings, paragraphs, lists, links, images, forms, and buttons.
- Week 2: an external stylesheet, class and descendant selectors, Arial, named colors, margins, padding, borders, and relative/absolute positioning.
- Week 3: Flexbox direction, wrapping, alignment, growing and basis; Grid columns, rows, gaps, `fr`, `repeat()`, and grid areas.
- The assignment also requires hover effects and named grid areas. The hover rules use a simple background change and a caption that appears.

The design uses Arial, black text, white and light-gray backgrounds, plain borders, and blue links.

## Image Sources

Photos were downloaded from [Lorem Picsum](https://picsum.photos/) and saved in `assignment2/images` so the pages work offline. The photo IDs, in order, are 1018, 237, 1015, 870, 1043, 1062, 1016, 1031, and 1036.

## Previous Assignment

[Assignment 1 report](assignment1/README.md)
