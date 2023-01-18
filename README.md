# Multi Step Progressive Form Carbon Footprint Calculator Created with React and Carbon IBM Design System for Nordic Waves Denmark.

As we don't want to reinvent the wheel we are going to guide our project with a pre-existent website calculator: https://www.carbonfootprint.com/calculator.aspx

After having the UI on place we are going to add the functionality.

# 1/3 Grid System

block = 1
sub-block = 1/3

If you go to WelcomePage you can see frame-calculator this is the regulator for the width and height of the view. This frame is divided by 3 vertically and by 2 or 3 (33 66 99) .horizontally

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



# State Management with Redux-Toolkit (hell yeah)
In the Carbon Footprint Calculator, the state of the selected country, transportation, electricity, waste, and footprint is managed using Redux :). 

The component retrieves the state from the store using the useSelector hook and updates the state by dispatching actions using the useDispatch hook.

The component also renders the select input, input fields, and calculate button that allow users to input data and calculate the carbon footprint. 

The component dispatches actions to update the state of the selected country, transportation, electricity, waste and footprint when the user makes a selection or clicks the calculate button.

The state is stored in the store, which is created and configured in the store.js file and the state management is done by creating slice and actions in the carbon.js file.

The component is connected to the Redux store using the connect function, which allows it to access the state and dispatch actions.

The routing is done using React Router, where the component is rendered based on the URLs, the component is split into 3 components, welcome page, calculation page and result page.