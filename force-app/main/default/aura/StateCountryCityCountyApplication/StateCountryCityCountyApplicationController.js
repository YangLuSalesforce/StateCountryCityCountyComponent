({
    /**
     * Loads the country list
     */
	doInit : function(component, event, helper) {
		var action = component.get("c.getCountries");
 
		// Call server side controller method
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                // Set countries
				component.set("v.countries", response.getReturnValue());
            }
        });
        
        $A.enqueueAction(action);
    },
    
    /**
     * Loads the state list
     */
	updateStates : function(component, event, helper) {
		var action = component.get("c.getStates");
        
        // Get selected Country
        action.setParams({ countryId : component.find("selectCountry").get("v.value") });
 
		// Call server side controller method
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
				component.set("v.states", response.getReturnValue());
            }
        });
        
        $A.enqueueAction(action);
    },
    
    /**
     * Loads the city list
     */
	updateCities : function(component, event, helper) {
		var action = component.get("c.getCities");
        
        // Get selected Country
        action.setParams({ stateId : component.find("selectState").get("v.value") });
 
		// Call server side controller method
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
				component.set("v.cities", response.getReturnValue());
            }
        });
        
        $A.enqueueAction(action);
    },
    
    /**
     * Populates the county
     */
	updateCounty : function(component, event, helper) {
		var action = component.get("c.getCounty");
        
        // Get county's ID for selected city
        action.setParams({ countyId : component.find("selectCity").get("v.value") });
 
		// Call server side controller method
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
				component.set("v.counties", response.getReturnValue());
            }
        });
        
        $A.enqueueAction(action);
    }
    
})