public with sharing class StateCountryCityCountyController {
    @AuraEnabled
    public static List<Country__c> getCountries() {
        List<Country__c> countries = [SELECT Id, Name FROM Country__c];
        
        return countries;
    }

    @AuraEnabled
    public static List<State__c> getStates(Id countryId) {
        // Find all states looking up to this country
        List<State__c> states = [SELECT Id, Name FROM State__c WHERE Country__c = :countryId];

        return states;
    }

    @AuraEnabled
    public static List<City__c> getCities(Id stateId) {
        // Find all states looking up to this country
        List<City__c> cities = [SELECT Id, County__c, Name FROM City__c WHERE State__c = :stateId];

        return cities;
    }

    @AuraEnabled
    public static List<County__c> getCounty(Id countyId) {
        List<County__c> county = [SELECT Id, Name FROM County__c WHERE Id = :countyId];
        
        System.debug(county);

        return county;
    }
}