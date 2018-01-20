# SFDX State/Country/County/City App
A Lightning component that allows the user to select a Country, State, and City. 

Selecting a Country will populate the State picklist. 
Selecting a State will populate the City picklist. 

When City is selected, the associated County is automatically populated. 

## Dev, Build and Test

## Resources
Screenshot.png shows demo of working product on a test page. 

## Description of Files and Directories
Contains the entire SFDX package necessary to deploy the component to a scratch org. 

Does NOT contain test data. 

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
* No Permission Sets have been configured for the custom objects. 
* No errors are currently shown when a selected country/state/city have no associated records. 
* Unit tests were not written due to simplicity of component and lack of complex business logic. 