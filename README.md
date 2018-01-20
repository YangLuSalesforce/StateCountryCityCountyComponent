# SFDX State/Country/County/City App

## Dev, Build and Test


## Resources


## Description of Files and Directories


## Issues
* Component works as expected, but business requirements were unclear and some possible improvements are listed below. 
* **State/Country/County/City** are terms applicable to the United States but not necessarily to all nations. 
  * For example, Canada has **Provinces** rather than States.
  * China uses **Districts** rather than counties. 
* Lookup fields on the custom objects may need to be required. 
* How the data and the relationships between the records are stored is not clearly defined. 
  * This implementation creates four custom objects, but this may not be practical in production. 
  * If dependent picklists were to be used, their maximum size of **300** becomes a possible limitation.  
* The Salesforce **State and Country Picklists** feature is not used here. 