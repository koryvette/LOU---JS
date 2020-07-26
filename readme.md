# What's Up Louisville? (Code Louisville project)

## Description  
This website was created as the front-end project in Code Louisville.  Since that first course, I have continued to develope and improve the information on this site.  For this course, the goal of this project is to utilize Javascript to load events from an API or a CSV file.  Also, I will try to limit the results displayed to only show future events.  
  
## Files Used
Here are the pages included in this site:  

HTML
* index.html (home page)
  
CSS  
* flex_bootstrap.css  
* https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css  
* https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css
  
  
Although Javascript was used throughtout this site for various tasks, the files used for this project are:    
* index.js  
* LOU/ApiLoad.js

## Instructions  
The following functionality has been added to this site:
  
* This project will require the use of:  
   * Node  
   * Express
   * xml2js  
   * Moment.JS
* In the Command Prompt, change the directory to the folder where the project is saved.
* Once the directory is changed, type "node index.js" in the Command Prompt.  
* Open you web browser.  
* in the address bar of your web brower, type "localhost:3100".
* The page should load with data from the API.  It may take a minute or two, due to the amount of data, but be patient.    

## Funtionality  
The following functionality has been added to this site:
  
* A function was created to capture the current month, based on today's date.  This data is used as part of the actual API.  
* Once the date/month is captured, the value is added to the API string.  
* The API is used to obtain events for the current month.  
    * Although events are requested by month, the API will return events outside that particular month.  This will be limited using another function later in the process.  
* Once data is obtained from the API, XML is converted to JSON.  
* Converted JSON data is sent to client, where it is prepared for use in webpage.  
* Using string interpolation, HTML is scripted and sent to the correct DIV (tileLaout) in the index.html page.  
* HTML is also added to another DIV (tableLayout) for viewing in a table format.  By clicking the button on the right-hand side, you can toggle between tile and table views.  
* Since more data than the current month is returned from the API, Moment.JS is used to remove items outside the current month.  
* Using Moment.JS, each event will also display the amount of days/time remaining until the event occurs.  
* For comparison, a hardcoded version of this site and data is also available through github/pages using the link below:  
  https://koryvette.github.io/eventcalendar

  
## Known Issues  
Here are a few known issues with the site:  
* "New Event" form does not post information.  This is a mock-up form to be used later when tied to a database.  
* Pagination doesn't pick up the correct # of pages/items.  
* Columns do not align correctly across table, leaving empty space on some pages.  However, the data from the API should be displayed.  


