/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let cost_per_day = 35;
let calculated_cost = 0;
let total_cost = document.getElementById("calculated-cost");
let clicked_days = 0;
let monday = document.getElementById("monday");
let monday_counter = 0;
let tuesday = document.getElementById("tuesday");
let tuesday_counter = 0;
let wednesday = document.getElementById("wednesday");
let wednesday_counter = 0;
let thursday = document.getElementById("thursday");
let thursday_counter = 0;
let friday = document.getElementById("friday");
let friday_counter = 0;
let clear_days = document.getElementById("clear-button");
let half_day = document.getElementById("half");
let full_day = document.getElementById("full");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function mondayHandler(){;
    if(monday_counter == 0){
        clicked_days = clicked_days + 1;
        monday.classList.add("clicked");
        monday_counter = 1;
        recalculate();
    }else{
        monday.classList.remove("clicked");
        clicked_days = clicked_days - 1;
        monday_counter = 0;
        recalculate();
    }
    
}

function tuesdayHandler(){
    if(tuesday_counter == 0){
        clicked_days = clicked_days + 1;
        tuesday.classList.add("clicked");
        tuesday_counter = 1;
        recalculate();
    }else{
        tuesday.classList.remove("clicked");
        clicked_days = clicked_days - 1;
        tuesday_counter = 0;
        recalculate();
    }
    
}

function wednesdayHandler(){
    if(wednesday_counter == 0){
        clicked_days = clicked_days + 1;
        wednesday.classList.add("clicked");
        wednesday_counter = 1;
        recalculate();
    }else{
        wednesday.classList.remove("clicked");
        clicked_days = clicked_days - 1;
        wednesday_counter = 0;
        recalculate();
    }
    
}

function thursdayHandler(){
    if(thursday_counter == 0){
        clicked_days = clicked_days + 1;
        thursday.classList.add("clicked");
        thursday_counter = 1;
        recalculate();
    }else{
        thursday.classList.remove("clicked");
        clicked_days = clicked_days - 1;
        thursday_counter = 0;
        recalculate();
    }
    
}

function fridayHandler(){
    if(friday_counter == 0){
        clicked_days = clicked_days + 1;
        friday.classList.add("clicked");
        friday_counter = 1;
        recalculate();
    }else{
        friday.classList.remove("clicked");
        clicked_days = clicked_days - 1;
        friday_counter = 0;
        recalculate();
    }
    
}

monday.addEventListener("click",mondayHandler);
tuesday.addEventListener("click",tuesdayHandler);
wednesday.addEventListener("click",wednesdayHandler);
thursday.addEventListener("click",thursdayHandler);
friday.addEventListener("click",fridayHandler);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearHandler(){
    clicked_days = 0;
    monday.classList.remove("clicked");
    monday_counter = 0;
    tuesday.classList.remove("clicked");
    tuesday_counter = 0;
    wednesday.classList.remove("clicked");
    wednesday_counter = 0;
    thursday.classList.remove("clicked");
    thursday_counter = 0;
    friday.classList.remove("clicked");
    friday_counter = 0;
    half_day.classList.remove("clicked");
    full_day.classList.add("clicked");
    total_cost.innerHTML = 0;
    calculated_cost = 0;
    cost_per_day = 35;
}

clear_days.addEventListener("click",clearHandler);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function halfDayHandler(){
    cost_per_day = 20;
    half_day.classList.add("clicked");
    full_day.classList.remove("clicked");
    recalculate();
}

half_day.addEventListener("click",halfDayHandler);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fullDayHandler(){
    cost_per_day = 35;
    full_day.classList.add("clicked");
    half_day.classList.remove("clicked");
    recalculate();
}

full_day.addEventListener("click",fullDayHandler);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function recalculate(){
    calculated_cost = cost_per_day * clicked_days;
    total_cost.innerHTML = calculated_cost;
}
