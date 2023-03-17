Feature: Activate $15 Plan
    As a rebelian user i want to activate %15 plan for prepaid user
    @sap
    Scenario: Test application authenication page header
        Given User login as TEST_TEAM into sap care portal
        When I select option "Shop/Activation" from left side menu
        And I click on sap care button "BYOD"
        And I enter area zipcode "98122"
        And I enter IMEI code "355619081274498"
        And I enter SIM number "8901260998780464682"
        And I validate the details entered
        And I select the sap care plan "$15 Connect by TMO"
        And I click on sap care button "Review Cart"
        And I click review cart button "Next"
        And I enter customer first name as "TestName"
        And I enter customer last name as "TestLastName"
        And I enter customer PIN as "123456"
        And I validate the address details entered
        # And I enter customer information details:
        #     | Fields            | Values          |
        #     | First Name        | FName           |
        #     | Last Name         | LName           |
        #     | Profile Email     | fname@gmail.com |
        #     | PIN               | 123456          |
        #     | SSN               | 987656765       |
        #     | Contact Phone No: | 98756876567     |

