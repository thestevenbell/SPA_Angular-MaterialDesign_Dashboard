(function(){
  'use strict';

  angular.module('news')
         .service('NewsDataService', ['$http', NewsDataService]);

  // NewsDataService.$inject = ['$http'];

  function NewsDataService($http){
    console.log("NewsDataService");
    var self = this;
    self.all = [];
    self.news = [];
    self.respond = [];
    var topStories = [],
        returnedValues = [],
        eachTopStory = {};

    function extractValues(parsedJSONres) {
    topStories = [];
    parsedJSONres.zoneContents.forEach( function (content) {
        if (content.type == 'container' && content.title == 'Top stories') {
            topStories = content.containerContents;
            return;
        } else {
            return {error: 'no Top Stories'} ;
        }
    });
    // console.log(topStories);
    return JSON.stringify(topStories, null, 4);
  }

  function getEachTopStory(topStories)   {
      topStories.forEach( function (stories) {
          eachTopStory = new Object();
          eachTopStory.url = `http://www.cnn.com${stories.cardContents.url}`;
          eachTopStory.headline = stories.cardContents.headlinePlainText;
          eachTopStory.imageUrl = stories.cardContents.media.elementContents.cuts['full16x9'].uri;
          eachTopStory.byLine = stories.cardContents.auxiliaryText;
          returnedValues += JSON.stringify(eachTopStory);
      // console.log("EACHTOPSTORY:  " + JSON.stringify(eachTopStory));
      });
      return  returnedValues;
  }

      return {
        loadAllNews : function loadNews(){
        self.news = [];
        self.all = [];
        self.respond = [];
        return $http
          .get("http://www.cnn.com/data/ocs/section/index.html:homepage1-zone-1.json")
          .then(function(response){
             var parsedJSONres = response.data;
            extractValues(parsedJSONres);
            self.news = getEachTopStory(topStories);
            // console.log(response.data);
            return self.news;
          });
        }
      };

  }

  }


  /**
   * NewsDataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  // function NewsDataService($q){
  //   console.log("NewsDataService");
  //   var news = [
  //     {
  //       name: 'Lia Lugo',
  //       avatar: 'svg-1',
  //     {
  //       name: 'Gener Delosreyes',
  //       avatar: 'svg-3',
  //       content: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS."
  //     },
  //     {
  //       name: 'Lawrence Ray',
  //       avatar: 'svg-4',
  //       content: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.'
  //     },
  //     {
  //       name: 'Ernesto Urbina',
  //       avatar: 'svg-5',
  //       content: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.'
  //     },
  //     {
  //       name: 'Gani Ferrer',
  //       avatar: 'svg-6',
  //       content: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada."
  //     }
  //   ];

  //   // Promise-based API
  //   return {
  //     loadAllNews : function() {
  //       // Simulate async nature of real remote calls
  //       return $q.when(news);
  //     }
  //   };
  // }

  // content: 'I love cheese, especially airedale queso. Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.'
  //     },
  //     {
  //       name: 'George Duke',
  //       avatar: 'svg-2',
  //       content: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.'
  //     },


)();
