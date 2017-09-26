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
      if(minutes.length == 1){
        minutes = '0' + minutes
      }

      out = minutes + " : " + seconds;   
      
  
      
      return out;
    };
})
  
.controller('pomCtrl',($scope,$timeout) => {





  
  $scope.myTimer = 1500;
  // $scope.myFixedTimer = $scope.myTimer;
  var myTimerVariable;


  $scope.color = "#4caf50";
  $scope.bgcolor = "#a5d6a7";
  $scope.breakTime = 5 ; //5 minutes
  $scope.workTime = 25; //25 minutes

  var bool = false; //false  --> wrk time not completed

  var myCustomTimer = () => {
    $scope.myTimer--;
    if($scope.myTimer<=0){
      $scope.stop();
      return;
    }
    myTimerVariable = $timeout(myCustomTimer,1000);
  };
  
  

  $scope.start = () => {
    if(!bool){
      $scope.myTimer = $scope.workTime * 60;
      $scope.color = "#4caf50";
      $scope.bgcolor = "#a5d6a7";
    }
    else{
       $scope.myTimer = $scope.breakTime * 60;
       $scope.color = "#d32f2f";
       $scope.bgcolor = "#ef9a9a";
    }
    

    $scope.myFixedTimer = $scope.myTimer;
    myTimerVariable = $timeout(myCustomTimer,1000);
  }



  $scope.stop = () => {
    $timeout.cancel(myTimerVariable);
    //Pomodoro time completed time for break
    bool = !bool;
    if(bool == true){
      $scope.start()
    }
    // Set max and current time to 5 minutes
    //Completed break time Congo



  }

  $scope.reset = () => {
    $timeout.cancel(myTimerVariable);
    $scope.myTimer = $scope.myFixedTimer;
   

  }


  


});