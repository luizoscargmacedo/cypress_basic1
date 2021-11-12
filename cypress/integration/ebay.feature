@ebay
Feature: Ebay
As a user I want to find products on Ebay page

@ebay_search
Scenario: Validate the Ebay search
Given already on ebay page
When product search is executed
Then a result page appears