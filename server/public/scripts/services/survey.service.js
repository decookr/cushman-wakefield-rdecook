myApp.service('SurveyService', function($http, $location){
    console.log('SurveyService Loaded');
    var self = this;

    self.demographics = { list: [] };
    self.location = { list: [] };
    self.amenities = { list: [] };
    self.brand = { list: [] };
    self.retention = { list: [] };

    self.selectedResponse = {};


//request to populate demographic questions and possible answers.
    self.getDemographics = function () {
        $http({
            method: 'GET',
            url: '/survey'
        }).then(function (response) {
            console.log('response', response);
            for (let i = 0; i < response.data.length; i++) {
            self.demographics.list.push(response.data[i]);//this fills up the questions array with the table from the database.
            console.log('demographics info:',self.demographics.list);
            }          
        });
    }

//request to populate location questions and possible answers.
    self.getLocation = function () {
        $http({
            method: 'GET',
            url: 'survey/location'
        }).then(function (response) {
            console.log('response', response);
            for (let i = 0; i < response.data.length; i++) {
            self.location.list.push(response.data[i]);//this fills up the questions array with the table from the database.
            }          
        });
    }

//request to populate amenities questions and possible answers.
    self.getAmenities = function () {
        $http({
            method: 'GET',
            url: 'survey/amenities'
        }).then(function (response) {
            console.log('response', response);
            for (let i = 0; i < response.data.length; i++) {
            self.amenities.list.push(response.data[i]);//this fills up the questions array with the table from the database.
            }          
        });
    }

//request to populate brand questions and possible answers.
    self.getBrand = function () {
        $http({
            method: 'GET',
            url: 'survey/brand'
        }).then(function (response) {
            console.log('response', response);
            for (let i = 0; i < response.data.length; i++) {
            self.brand.list.push(response.data[i]);//this fills up the questions array with the table from the database.
            }          
        });
    }

//request to populate retention questions and possible answers.
    self.getRetention = function () {
        $http({
            method: 'GET',
            url: 'survey/retention'
        }).then(function (response) {
            console.log('response', response);
            for (let i = 0; i < response.data.length; i++) {
            self.retention.list.push(response.data[i]);//this fills up the questions array with the table from the database.
            }          
        });
    }

//adding question responses to the database
  self.saveResponse = function () {
    console.log('in saveResponse');
    $http({
      method: 'POST',
      url: '/survey',
      data: self.selectedResponse
    }).then(function (response) {
      console.log('response', response);
      
    })
  };

});