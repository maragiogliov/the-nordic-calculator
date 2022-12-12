# Multi Step Progressive Form Carbon Footprint Calculator Created with React and Carbon IBM Design System for Nordic Waves Denmark.

As we don't want to reinvent the wheel we are going to guide our project with a pre-existent website calculator: https://www.carbonfootprint.com/calculator.aspx

After having the UI on place we are going to add the functionality.

# 1/3 Grid System

block = 1
sub-block = 1/3

If you go to WelcomePage you can see frame-calculator this is the regulator for the width and height of the view. This frame is divided by 3 vertically and by 2 horizontally

There is: 

Frame-calculator
    block-top
        .title
    block-middle
        .country
        .date
            .date-text
            .hide-text
            .date-picker
    block-bottom    
        .block-bottom-top
        .navigation-container

for the position we are using Flex 
to see the grid, uncomment the background color # my-carbon-calculator
