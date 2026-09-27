# Assignment 2: Flexbox and Grid

**Name:** Yerkebulan Korganbek

**Group:** IT-2501

## How to open

Open `index.html` in a browser. Use the Portfolio link to open `portfolio.html`.
The project uses only HTML and CSS. No installation is needed.

## Part 1. Flexbox

### Task 0. Navigation Bar

The header uses `display: flex`. `justify-content: space-between` places the logo on the left and the links on the right. `align-items: center` centres them vertically. The link list also uses Flexbox and `gap`.

![Task 0: navigation bar](screenshots/task0-navigation.png)

### Task 1. Card Row

Three cards contain an image, title, text, and button. The row uses Flexbox, `gap: 20px`, and `align-items: stretch` for equal heights. Each card uses a column direction. `margin-top: auto` pushes the button to the bottom. Hovering adds a shadow. The buttons open the gallery.

![Task 1: three equal-height cards](screenshots/task1-cards.png)

## Part 2. Grid System

### Task 2. Page Layout with Grid Areas

The layout uses two columns and three rows. `grid-template-areas` places the header across the top, the sidebar on the left, the main content on the right, and the footer across the bottom. Each section has a matching `grid-area`.

![Task 2: named grid areas](screenshots/task2-grid.png)

### Task 3. Image Gallery

Nine local images use three equal columns with `repeat(3, 1fr)`. Rows are 180px high, with a 15px gap. A caption appears on hover or keyboard focus. `object-fit: cover` keeps the images from stretching.

![Task 3: gallery with a visible hover caption](screenshots/task3-gallery.png)

## Part 3. Combining Flexbox and Grid

### Task 4. Portfolio Page

The portfolio header uses Flexbox. The main section uses Grid with `2fr 1fr` columns: projects on the left and information on the right. Each project card uses Flexbox in a column to arrange its title, description, and button. The footer spans the page below the main section.

![Task 4: portfolio page](screenshots/task4-portfolio.png)

## Brief Summary of Work Process

The HTML structure was created first, followed by the Flexbox navigation and cards. Next, named Grid areas and the photo gallery were added. The portfolio combines both layout methods. A media query stacks the main layouts and changes the gallery to two columns on screens up to 700px wide. Finally, the pages were checked in a browser and screenshots were saved for this report.

## Image Sources

Photos were downloaded from [Lorem Picsum](https://picsum.photos/) and saved in `images` so the pages work offline. The photo IDs, in order, are 1018, 237, 1015, 870, 1043, 1062, 1016, 1031, and 1036.
