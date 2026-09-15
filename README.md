# WebDev
# Assignment 1: HTML & CSS Basics

**Name:** Yerkebulan Korganbek  
**Group:** IT-2501  

## Brief Summary of Work Process
In this project, I created a personal portfolio website as a way of exercising some basic web development skills. I began with the HTML structure, using the standard HTML boilerplate code and tags for creating sections for my biography, hobbies, and class schedule. I used different HTML tags such as the ordered list, unordered list, a table, links, and a contact form.

For the design part, I employed inline CSS, internal CSS, and external CSS for setting the font styles, colors, and background. I have used modern approaches such as using CSS Grid and Flexbox as well as the old school table design layout method. In addition, I have used some concepts regarding the CSS box model, positioning (static, relative, absolute), and float properties.

---

## Assignment Parts & Screenshots

### Part 1: Introduction to HTML

<img width="1021" height="788" alt="image" src="https://github.com/user-attachments/assets/2fe13fb1-5cb2-4046-8e65-356dd817df75" />
<img width="852" height="884" alt="image" src="https://github.com/user-attachments/assets/615e5443-1b86-40a5-aa23-d90f1494d1dd" />
<img width="874" height="843" alt="image" src="https://github.com/user-attachments/assets/5ec550b0-7a22-46d3-89de-9906f5387a5f" />

**Process Explanations**
* **Step 0 (Boilerplate):** The boilerplate was added to define the structure of the HTML5 page. It is comprised of the `<!DOCTYPE html>`, and the basic tags such as `<html>`, `<head>`, `<title>`, and `<body>`.
* **Step 1 (Text Structure):** I defined the information hierarchy by using the hierarchy of headings from `<h1>` down to `<h3>` for the purpose of displaying my name, major, and sections of titles along with the use of `<p>` tag to show the "About Me" paragraph.  
* **Step 2 (Lists):** For listing out my hobbies, I used the ordered list with `<ol>` tag, while for my favorites sites, I used the unordered list with `<ul>` tag.  
* **Step 3 (Images & Links):** I used an image of me using the `<img>` tag to show my profile picture, along with two anchor `<a>` tags which link to external web pages and work perfectly fine.  
* **Step 4 (Buttons):** An HTML button with text "Click Me" was added to show a button example.

---

### Part 2: Intermediate HTML

<img width="1150" height="866" alt="image" src="https://github.com/user-attachments/assets/57d3f085-1363-437e-9e38-f1044004511d" />
<img width="914" height="689" alt="image" src="https://github.com/user-attachments/assets/e560cd00-a5da-46ab-9d7f-55efb21ff00b" />
<img width="1224" height="772" alt="image" src="https://github.com/user-attachments/assets/64adcf2b-ab2a-4620-bfda-15a18689da3a" />

**Process Explanations**
* **Step 5 (Tables):** I designed a weekly timetable based on the `<table>` element by using `<thead>` and `<th>` for the headings (Subject, Day, Time) and inserting data using `<tbody>`, table rows `<tr>`, and table data `<td>`. 
* **Step 6 (Table Layout):** I finished the task of making a two-column webpage design entirely through an HTML table. I made one row with only one `<td>` used as the left-side navigation pane and another `<td>` as the content section. 
* **Step 7 (Emojis):** I integrated visual language to a paragraph of text using three different emojis using their HTML decimal character codes (`&#128640;`, `&#127912;`, `&#128522;`). 
* **Step 8 (HTML Forms):** I created a user contact form using the `<form>` element (which has the POST method) and labeled each of the `<input>` elements using the `for` and `id` attributes. I used certain input types such as text type for names and email type for emails, and even a color picker and ended the form with a submit button.

---

### Part 3: Introduction to CSS
*Applied inline, internal, and external CSS styles. Used element, class, and ID selectors to differentiate styling across the page.*


<img width="752" height="842" alt="Снимок экрана 2026-09-15 141932" src="https://github.com/user-attachments/assets/c3c94ca1-227f-49ea-8ae8-c970cfb07cd2" />
<img width="1886" height="847" alt="Снимок экрана 2026-09-15 141945" src="https://github.com/user-attachments/assets/f694ab55-1021-4f5a-a31a-056adcf20872" />
<img width="1891" height="128" alt="Снимок экрана 2026-09-15 141951" src="https://github.com/user-attachments/assets/219d302d-524d-4626-acdc-e82fe0c61944" />
<img width="1199" height="908" alt="Снимок экрана 2026-09-15 142009" src="https://github.com/user-attachments/assets/4812f493-d76b-4ad4-8215-697a6e3fb6ba" />
<img width="1567" height="780" alt="Снимок экрана 2026-09-15 142016" src="https://github.com/user-attachments/assets/75c1ad51-6600-40eb-aeb4-c7ad1b31ce4b" />
<img width="852" height="344" alt="Снимок экрана 2026-09-15 142100" src="https://github.com/user-attachments/assets/ae06fb30-0f88-489c-bb48-0be203a04fa8" />


**Process Explanations**
* **Step 9 (Introduction to CSS):** I used CSS in the project to have full control over the styling of the webpage, such as fonts, colors, spaces, and layout.  
* **Step 10 (Inline CSS):** To illustrate the concept of inline styling, I added a `style` attribute to a `<p>` tag, where I set the color of its text to a particular hex code (`#b24735`).  
* **Step 11 (Internal CSS):** I applied the concept of internal styling by adding a `<style>` tag inside the `<head>` section of the document. Here, I created a custom class (`.internal-css-example`) that adds letter spacing and a colored bottom border to a particular paragraph.  
* **Step 12 (External CSS):** I linked an external stylesheet (`../style.css`) through the `<link>` tag. The external style sheet does a great job in providing the main global styles for the page.  
* **Step 13 (CSS Syntax and Selectors):** In order to style the contents, I have used the three main CSS selectors: element selectors, class selectors (`.highlight`), and id selectors (`#main-heading-demo`).
* **Step 14 (Classes and IDs):** I illustrated the difference between classes and IDs by using the `.highlight` class on several paragraphs and making sure that the ID selector was used exclusively on one specific heading.

---

### Part 4: Intermediate CSS
*Added a favicon, used `<div>` elements for grouping (header, main, footer), applied the box model (margins, padding, borders), and demonstrated static, relative, and absolute positioning alongside float and clear properties.*

<img width="898" height="800" alt="Снимок экрана 2026-09-15 141028" src="https://github.com/user-attachments/assets/7f27153b-b0a2-4086-bde8-30f3d517e9c5" />
<img width="860" height="730" alt="Снимок экрана 2026-09-15 141104" src="https://github.com/user-attachments/assets/fd3ecf82-3024-420d-9654-5d42748de21e" />
<img width="876" height="755" alt="Снимок экрана 2026-09-15 141121" src="https://github.com/user-attachments/assets/969bd2d8-6b8e-4302-96be-40086b638f7e" />
<img width="1327" height="847" alt="Снимок экрана 2026-09-15 141150" src="https://github.com/user-attachments/assets/9cc3c627-7b72-4bc8-b234-3c670815e595" />
<img width="1062" height="815" alt="Снимок экрана 2026-09-15 141219" src="https://github.com/user-attachments/assets/0f5af1e9-a9e0-409b-9d69-10609b91097c" />
<img width="1054" height="753" alt="Снимок экрана 2026-09-15 141240" src="https://github.com/user-attachments/assets/63d8d176-86e5-49cb-8f43-1ebb79f5eeff" />



**Process Explanations**
* **Step 15 (Favicons):** I have added a custom `logo/favicon.png` to the website through the use of `<link rel="icon">` within the `<head>` of the HTML document.  
* **Step 16 (HTML Divs):** I have created various divs with classes such as `.container`, `.intro`, and `.box` which allow me to group related content. This helps me to set background color, borders, and flexboxes on different parts of the webpage.  
* **Step 17 (Box Model):** I have actively manipulated the CSS box model of various elements such as `.box` and `.profile-card` by setting up padding for inner space, margins for outer space between elements and border.  
* **Step 18 (CSS Positioning):** I have created a position example container where I used positioning on three elements, `.static` for regular positioning in document flow, `.relative` for 15px up and left positioning from default and `.absolute` for bottom-right positioning relative to its container.
* **Step 19 (CSS Sizing):** I employed a mixture of measurements in sizing elements, with percentages (`width: 90%`) being used for responsive container sizes, ems (`font-size: 3em`) for flexible heading text, and pixel measurements (`padding: 25px`) for accurate spacing. 
* **Step 20 (Float and Clear):** I demonstrated my ability to create layouts by removing two `<span>` elements from the normal flow through the use of `float: left` and `float: right`, respectively. I added `clear: both` to the next paragraph element to ensure that its content is not wrapped around the span elements. 
* **Step 21 (Publishing):** I have been able to push the HTML, CSS, and image files into a public GitHub repository and hosted the webpage through GitHub Pages.
