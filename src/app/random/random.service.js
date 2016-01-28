angular
  .module('whackamole.random')
  .factory('random', function (mathRandom) {

    return {
      nextBetween: nextBetween
    };

    function nextBetween(minValue) {
      return {
        and: function (maxValue) {
          var offset = minValue;
          var rangeLength = maxValue - minValue;
          return offset + rangeLength * mathRandom.next();
        }
      }
    }
  });
