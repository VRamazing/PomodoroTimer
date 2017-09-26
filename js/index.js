angular.module("pomApp",['angular-svg-round-progressbar'])

//converts seconds to minutes
.filter('time', function(){
    return function(input) {
      input = input || '';
      var out = '';
      var minutes =  input/60;
      
      var seconds = (minutes - parseInt(minutes)) * 60;
      seconds = Math.round(seconds);
      //strips floats.
      minutes = parseInt(minutes).toString();
      seconds = parseInt(seconds).toString();

      if(seconds.length == 1){
        seconds = '0' + seconds
      }

      out = minutes + " : " + seconds;   
      
  
      
      return out;
    };
})
  
.controller('pomCtrl',($scope,$timeout) => {





  
  $scope.myTimer = 1535;
  $scope.myFixedTimer = $scope.myTimer;
  var myTimerVariable;



  $scope.breakTime = 5 ; //5 minutes
  $scope.workTime = 25; //25 minutes

  var myCustomTimer = () => {
    $scope.myTimer--;
    if($scope.myTimer<=0){
      $scope.stop();
      return;
    }
    myTimerVariable = $timeout(myCustomTimer,1000);
  };
  
  

  $scope.start = () => {
    myTimerVariable = $timeout(myCustomTimer,1000);
  }



  $scope.stop = () => {
    $timeout.cancel(myTimerVariable);
    //Pomodoro time completed time for break

    // Set max and current time to 5 minutes


  }

  $scope.reset = () => {
    $timeout.cancel(myTimerVariable);
    $scope.myTimer = $scope.myFixedTimer;
    $scope.start 

  }


  


});