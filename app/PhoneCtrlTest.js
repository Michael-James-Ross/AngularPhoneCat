describe('PhoneCat controllers', function() {
    
    beforeEach(function() {
        module('phonecatApp');
    });

    describe('PhoneListCtrl', function(){

        it('should create "phones" model with 3 phones', inject(function($controller) {
            var scope = {},
                ctrl = $controller('PhoneListController', { $scope: scope });

            expect(scope.phones.length).toBe(3);
        }));
    });
});
