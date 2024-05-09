Feature: Google Main Page


    Scenario: Download Functionality
    Given I open Application
    And Enter "itadmin_gst_michelin_uat3" and "itadmin@123" in username and password
    And Click on Login Button
    When User Selects the GSTR1 Option
    And Go to Fetch Page
    And Apply filter on State and Financial Year
    Then Verify the DownloadedFile