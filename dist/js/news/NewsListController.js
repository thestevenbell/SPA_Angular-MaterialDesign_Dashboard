(function(){

  angular
       .module('news')
       .controller('NewsListController', [
          'NewsDataService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
          NewsListController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function NewsListController( NewsDataService, PresidentsController, $mdSidenav, $mdBottomSheet, $timeout, $log ) {
    var self = this;

    self.selected     = null;
    self.news        = [ ];
    self.selectNews   = selectNews;
    self.toggleList   = toggleNewsList;
    self.makeContact  = makeContact;

    // Load all registered news
    NewsDataService
          .loadAllNews()
          .then( function( news ) {
            console.log(">>>>>> NEWS" + news[0]);
            // console.log("###### NEWS NEWS news[1]" + "  " + news[1]);
            // console.log("###### NEWS NEWS stringify" + "  " + JSON.stringify(news));
            self.news = news;
            console.log("OBJECT.KEYS" + Object.keys(self.news));
            console.log("self.news[0].url" + self.news[0].url);
            // self.news.forEach(function (content) {
            //   console.log("++++++" + content[0].byline);
            // });
            // self.selected = news[0];
            // console.log("self.selected from NewsListController call to NewsDataService" + self.selected);
          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectNews ( news ) {
      self.selected = angular.isNumber(news) ? $scope.news[news] : news;
    }

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleNewsList() {
        $mdSidenav('left').toggle();
    }

    /**
     * Show the bottom sheet with the ContactSheet view
     */
    function makeContact(selectedNews) {
        $mdBottomSheet.show({
          controllerAs  : "vm",
          templateUrl   : './contactSheet.html',
          controller    : [ '$mdBottomSheet', ContactSheetController],
          parent        : angular.element(document.getElementById('content'))
        }).then(function(clickedItem) {
          $log.debug( clickedItem.name + ' clicked!');
        });

        /**
         * News ContactSheet controller
         */
        function ContactSheetController( $mdBottomSheet ) {
          this.news = selectedNews;
          this.items = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'assets/svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'assets/svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'assets/svg/hangouts.svg'}
          ];
          this.contactNews = function(action) {
            // The actually contact process has not been implemented...
            // so just hide the bottomSheet

            $mdBottomSheet.hide(action);
          };
        }
    }

  }

})();
