## About the project

This repository contains the pixels art project developed at Trybe, as part of their fundamentals curriculum. The project consists of 
an implementation of a web page that contains a functional color palette that can be used to create pixel drawings. 

## Skills

- Manipulate the DOM

- Manipulate Javascript

## Preview


https://user-images.githubusercontent.com/73790226/170804271-04cb78f7-2280-4e7e-a807-9f18645168a1.mp4


## Mandatory Requirements

In this project, you will implement a pixel art editor.

**In other words, given a color palette and a frame composed of pixels, you will allow the user to paint whatever they want on the frame!** 👩‍🎨

### 1 - Add the title "Color Palette" to the page.

- The title must be inside a `h1` tag with the `id` called `title`;

- Title text must be **exactly** "Color Palette".

**What will be verified:**

- Checks if it contains an `h1` element with the id `title` with the correct title

### 2 - Add a palette containing four different colors to the page.

- The color palette must be an element with `id` called `color-palette`, while each individual color contained in the color palette must have the `class` `color`;

- The background color of each element in the palette must be the color that the element represents. **The only color not allowed in the palette is white.**;

- Each element of the color palette must have a black border, solid and 1 pixel wide;

- The color palette should list all the colors available for use side by side, and should be placed under the heading "Color Palette";

- The color palette must not contain repeated colors.

**What will be verified:**

- The color palette must be an element with `id` called `color-palette`

- Checks if each individual color in the color palette has a `class` called `color`.

- Checks if the background color of each element in the palette is the color that the element represents. **The only color not allowed in the palette is white.**

- Checks if each element of the color palette has a solid black border 1 pixel wide;

- Checks that the palette lists all the colors available for use, side by side.

- Checks if the color palette is positioned under the title \'Color Palette\'

- Checks that the color palette does not contain repeated colors.

### 3 - Add the color **black** as the first color of the color palette.

**What will be verified:**

- Checks if the first color in the palette is black

- Checks if the other colors can be freely chosen.

### 4 - Add a pixel board to the page, with 25 pixels.

- The "pixel" board must be 5 elements wide and 5 elements long;

- The "pixel" board must have the `id` called `pixel-board`, while each individual "pixel" within the board must have the `class` called `pixel`;

- The initial color of the "pixels" inside the board, when opening the page, must be white;

- The "pixel" board should appear below the color palette.

**What will be verified:**

- Checks if the pixel board has the `id` named `pixel-board`

- Checks whether each individual pixel within the board has the `class` named `pixel`.

- Checks if the initial color of the pixels inside the board, when opening the page, is white.

- Checks if the pixel board appears below the color palette

### 5 - Make each pixel board element 40 pixels wide, 40 pixels high and delimited by a 1-pixel black border.

**What will be verified:**

- Checks whether the pixel board has a height and length of 5 elements

- Checks that 40 pixels is the total size of the element, including its content and excluding the black border, which must be created separately.

### 6 - Set black color as initial color. When loading the page, the black color must already be selected to paint the pixels

- The black element must initially have the `class` `selected`;

- Note that the element that must receive the `selected` class must be one of the elements that have the `color` class, as specified in **requirement 2**.

**What will be verified:**

- Checks if the element with black color initially has the `class` `selected`

- Checks that no other color in the palette has the `class` `selected`

### 7 - Clicking on one of the colors in the palette makes it selected and used to fill the pixels in the board.

- The `class` `selected` must be added to the selected color in the palette, at the same time it is removed from the previously selected color;

- Only one of the colors in the palette should have the `class` `selected` at a time;

- Note that the elements that must receive the `selected` class must be the same elements that have the `color` class, as specified in **requirement 2*

**What will be verified:**

- Checks if only one color from the color palette has the `selected` class at a time

- Checks that pixels inside the board don't have the `selected` class when clicked

### 8 - Clicking on a pixel within the board after selecting a color from the palette causes the pixel to be filled with the selected color.

**What will be verified:**

- Checks if when loading the page it should be possible to paint the pixels black

- Checks if after selecting another color in the palette, it is possible to paint the pixels with that color

- Checks if only the pixel that was clicked was filled with the selected color, without influencing the color of the other pixels.

### 9 - Create a button that, when clicked, clears the board by filling the color of all its pixels with white.

**What will be verified:**

- Checks if the button has the `id` named `clear-board`

- Checks if the button is positioned between the color palette and the pixel board

- Checks if the button text is \'Clear\'

- Checks that when clicking the button, the pixel board is completely filled with white

## Bonus Requirements

### 10 - Make the pixel board have its size defined by the user.

- Create an input and a button that allow defining a board of pixels with a size between 5 and 50. When clicking on the button, a board of **N** pixels wide and **N** pixels high must be generated, where **N** is the number entered in the input;

 - That is, if the value passed to the input is 7, clicking on the button will generate a board of 49 pixels (7 pixels wide x 7 pixels high);

- The input must have the `id` called `board-size` and the button must have the `id` called `generate-board`;

- The input must only accept numbers greater than zero. This restriction **must** be done using the attributes of the `input` element;

- The button must contain the text "VQV";

- The input must be positioned between the color palette and the pixel frame;

- The button must be positioned next to the input;

- If no value is placed in the input when clicking the button, show an `alert` with the text: "Invalid board!";

- The new board must have all pixels filled with white color.

**What will be verified:**

- Checks if there is an input with the id `board-size`

- Checks if there is a button with the id `generate-board`

- Checks if the input only accepts numbers greater than zero. This restriction must be done using the attributes of the `input` element

- Checks if the button contains the text \'VQV\'

- Checks if the input is positioned between the color palette and the pixel board

- Checks if the button is positioned next to the input

- Checks if no value is placed in the input when clicking the button, an `alert` is displayed with the text: \'Invalid board!\'

- Checks if clicking on the button with a filled value changes the size of the board.

- Checks if the new board has all pixels filled with white color

### 11 - Limit the minimum and maximum board size.

- If the value entered in the `board-size` input is outside the range of 5 to 50, do:

  - Value less than 5, consider 5 as default;

  - Value greater than 50, consider 50 as default.

**What will be verified:**

- Checks if the maximum height of the board is 50

- Checks if the board height is 5 when a smaller value is put in the input

- Checks if the board height is 50 when a higher value is put in the input

### 12 - Make the palette colors randomly generated when loading the page.

- The color black still needs to be present and should be first in your color palette.

**What will be verified:**

- Checks if the colors generated in the palette are different with each page load

- Checks if black is still present and first in your color palette
