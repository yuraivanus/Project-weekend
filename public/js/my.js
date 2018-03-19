const app = angular.module('app', ['ngRoute']);
const socket = io.connect();

app.config(['$locationProvider', function ($locationProvider)
    {
        $locationProvider.hashPrefix('');
        $locationProvider.html5Mode(true);
           }]);

app.config(function ($routeProvider) {
    $routeProvider
        .otherwise({
            redirectTo: '/'
        });
});









app.controller('MyCtrl', function () {});


app.directive('menuBlock', function () {
    return {
        replace: true,
        templateUrl: 'template/menu.html',
        controller: function ($scope) {
            $scope.homePage = false;
            $scope.favouritePage = false;
            $scope.wishPage = false;

            $scope.home = function () {

                $scope.homePage = true;
                $scope.favouritePage = false;
                $scope.wishPage = false;


            }

            $scope.favourite = function () {

                $scope.homePage = false;
                $scope.favouritePage = true;
                $scope.wishPage = false;

            }

            $scope.wish = function () {

                $scope.homePage = false;
                $scope.favouritePage = false;
                $scope.wishPage = true;

            }
        }
    }
})

app.directive('pageBlock', function () {
    return {
        replace: true,
        templateUrl: 'template/page.html',
        controller: function ($scope) {

            // Get the modal
            var modal = document.getElementById('myModal');

            // Get the button that opens the modal
            var btn = document.getElementById("myBtn");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks the button, open the modal 
            btn.onclick = function () {
                modal.style.display = "block";
            }

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function (event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }
            
            
            $('#img1').on('click', function () {
                $('.icon_plus1').css('display', 'inline-block');
                $('.icon_plus1').css('overflow', 'hidden');
                $('#img1').css('display', 'none');
            });
            
            $('.icon_plus1').on('click', function () {
                $('.icon_plus1').css('display', 'none');
                $('#img1').css('display', 'inline-block');
            });
            
            
            $('#img2').on('click', function () {
                $('.icon_plus2').css('display', 'inline-block');
                $('.icon_plus2').css('overflow', 'hidden');
                $('#img2').css('display', 'none');
            });

            $('.icon_plus2').on('click', function () {
                $('.icon_plus2').css('display', 'none');
                $('#img2').css('display','inline-block');
            });
            
            $('#img3').on('click', function () {
                $('.icon_plus3').css('display', 'inline-block');
                $('.icon_plus3').css('overflow', 'hidden');
                $('#img3').css('display', 'none');
            });

            $('.icon_plus3').on('click', function () {
                $('.icon_plus3').css('display', 'none');
                $('#img3').css('display','inline-block');
            });
            
            $('#img4').on('click', function () {
                $('.icon_plus4').css('display', 'inline-block');
                $('.icon_plus4').css('overflow', 'hidden');
                $('#img4').css('display', 'none');
            });

            $('.icon_plus4').on('click', function () {
                $('.icon_plus4').css('display', 'none');
                $('#img4').css('display','inline-block');
            });
            
            $('#img5').on('click', function () {
                $('.icon_plus5').css('display', 'inline-block');
                $('.icon_plus5').css('overflow', 'hidden');
                $('#img5').css('display', 'none');
            });

            $('.icon_plus5').on('click', function () {
                $('.icon_plus5').css('display', 'none');
                $('#img5').css('display','inline-block');
            });
            
            $('#img6').on('click', function () {
                $('.icon_plus6').css('display', 'inline-block');
                $('.icon_plus6').css('overflow', 'hidden');
                $('#img6').css('display', 'none');
            });

            $('.icon_plus6').on('click', function () {
                $('.icon_plus6').css('display', 'none');
                $('#img6').css('display','inline-block');
            });
            
            $('#img7').on('click', function () {
                $('.icon_plus7').css('display', 'inline-block');
                $('.icon_plus7').css('overflow', 'hidden');
                $('#img7').css('display', 'none');
            });

            $('.icon_plus7').on('click', function () {
                $('.icon_plus7').css('display', 'none');
                $('#img7').css('display','inline-block');
            });
            
            $('#img8').on('click', function () {
                $('.icon_plus8').css('display', 'inline-block');
                $('.icon_plus8').css('overflow', 'hidden');
                $('#img8').css('display', 'none');
            });

            $('.icon_plus8').on('click', function () {
                $('.icon_plus8').css('display', 'none');
                $('#img8').css('display','inline-block');
            });
            
            $('#img9').on('click', function () {
                $('.icon_plus9').css('display', 'inline-block');
                $('.icon_plus9').css('overflow', 'hidden');
                $('#img9').css('display', 'none');
            });

            $('.icon_plus9').on('click', function () {
                $('.icon_plus9').css('display', 'none');
                $('#img9').css('display','inline-block');
            });
            
            $('#img10').on('click', function () {
                $('.icon_plus10').css('display', 'inline-block');
                $('.icon_plus10').css('overflow', 'hidden');
                $('#img10').css('display', 'none');
            });

            $('.icon_plus10').on('click', function () {
                $('.icon_plus10').css('display', 'none');
                $('#img10').css('display','inline-block');
            });
            
            $('#img11').on('click', function () {
                $('.icon_plus11').css('display', 'inline-block');
                $('.icon_plus11').css('overflow', 'hidden');
                $('#img11').css('display', 'none');
            });

            $('.icon_plus11').on('click', function () {
                $('.icon_plus11').css('display', 'none');
                $('#img11').css('display','inline-block');
            });
            
            $('#img12').on('click', function () {
                $('.icon_plus12').css('display', 'inline-block');
                $('.icon_plus12').css('overflow', 'hidden');
                $('#img12').css('display', 'none');
            });

            $('.icon_plus12').on('click', function () {
                $('.icon_plus12').css('display', 'none');
                $('#img12').css('display','inline-block');
            });
            
            $('#img13').on('click', function () {
                $('.icon_plus13').css('display', 'inline-block');
                $('.icon_plus13').css('overflow', 'hidden');
                $('#img13').css('display', 'none');
            });

            $('.icon_plus13').on('click', function () {
                $('.icon_plus13').css('display', 'none');
                $('#img13').css('display','inline-block');
            });
            
            $('#img14').on('click', function () {
                $('.icon_plus14').css('display', 'inline-block');
                $('.icon_plus14').css('overflow', 'hidden');
                $('#img14').css('display', 'none');
            });

            $('.icon_plus14').on('click', function () {
                $('.icon_plus14').css('display', 'none');
                $('#img14').css('display','inline-block');
            });
            
            $('#img15').on('click', function () {
                $('.icon_plus15').css('display', 'inline-block');
                $('.icon_plus15').css('overflow', 'hidden');
                $('#img15').css('display', 'none');
            });

            $('.icon_plus15').on('click', function () {
                $('.icon_plus15').css('display', 'none');
                $('#img15').css('display','inline-block');
            });
            
            $('#img16').on('click', function () {
                $('.icon_plus16').css('display', 'inline-block');
                $('.icon_plus16').css('overflow', 'hidden');
                $('#img16').css('display', 'none');
            });

            $('.icon_plus16').on('click', function () {
                $('.icon_plus16').css('display', 'none');
                $('#img16').css('display','inline-block');
            });
            
            $('#img17').on('click', function () {
                $('.icon_plus17').css('display', 'inline-block');
                $('.icon_plus17').css('overflow', 'hidden');
                $('#img17').css('display', 'none');
            });

            $('.icon_plus17').on('click', function () {
                $('.icon_plus17').css('display', 'none');
                $('#img17').css('display','inline-block');
            });
            
            $('#img18').on('click', function () {
                $('.icon_plus18').css('display', 'inline-block');
                $('.icon_plus18').css('overflow', 'hidden');
                $('#img18').css('display', 'none');
            });

            $('.icon_plus18').on('click', function () {
                $('.icon_plus18').css('display', 'none');
                $('#img18').css('display','inline-block');
            });
            
            $('#img19').on('click', function () {
                $('.icon_plus19').css('display', 'inline-block');
                $('.icon_plus19').css('overflow', 'hidden');
                $('#img19').css('display', 'none');
            });

            $('.icon_plus19').on('click', function () {
                $('.icon_plus19').css('display', 'none');
                $('#img19').css('display','inline-block');
            });
            
            $('#img20').on('click', function () {
                $('.icon_plus20').css('display', 'inline-block');
                $('.icon_plus20').css('overflow', 'hidden');
                $('#img20').css('display', 'none');
            });

            $('.icon_plus20').on('click', function () {
                $('.icon_plus20').css('display', 'none');
                $('#img20').css('display','inline-block');
            });
            
            $('#img21').on('click', function () {
                $('.icon_plus21').css('display', 'inline-block');
                $('.icon_plus21').css('overflow', 'hidden');
                $('#img21').css('display', 'none');
            });

            $('.icon_plus21').on('click', function () {
                $('.icon_plus21').css('display', 'none');
                $('#img21').css('display','inline-block');
            });
            
            $('#img22').on('click', function () {
                $('.icon_plus22').css('display', 'inline-block');
                $('.icon_plus22').css('overflow', 'hidden');
                $('#img22').css('display', 'none');
            });

            $('.icon_plus22').on('click', function () {
                $('.icon_plus22').css('display', 'none');
                $('#img22').css('display','inline-block');
            });
            
            $('#img23').on('click', function () {
                $('.icon_plus23').css('display', 'inline-block');
                $('.icon_plus23').css('overflow', 'hidden');
                $('#img23').css('display', 'none');
            });

            $('.icon_plus23').on('click', function () {
                $('.icon_plus23').css('display', 'none');
                $('#img23').css('display','inline-block');
            });
            
            $('#img24').on('click', function () {
                $('.icon_plus24').css('display', 'inline-block');
                $('.icon_plus24').css('overflow', 'hidden');
                $('#img24').css('display', 'none');
            });

            $('.icon_plus24').on('click', function () {
                $('.icon_plus24').css('display', 'none');
                $('#img24').css('display','inline-block');
            });
            
            $('#img25').on('click', function () {
                $('.icon_plus25').css('display', 'inline-block');
                $('.icon_plus25').css('overflow', 'hidden');
                $('#img25').css('display', 'none');
            });

            $('.icon_plus25').on('click', function () {
                $('.icon_plus25').css('display', 'none');
                $('#img25').css('display','inline-block');
            });
            
            $('#img26').on('click', function () {
                $('.icon_plus26').css('display', 'inline-block');
                $('.icon_plus26').css('overflow', 'hidden');
                $('#img26').css('display', 'none');
            });

            $('.icon_plus26').on('click', function () {
                $('.icon_plus26').css('display', 'none');
                $('#img26').css('display','inline-block');
            });
            
            $('#img27').on('click', function () {
                $('.icon_plus27').css('display', 'inline-block');
                $('.icon_plus27').css('overflow', 'hidden');
                $('#img27').css('display', 'none');
            });

            $('.icon_plus27').on('click', function () {
                $('.icon_plus27').css('display', 'none');
                $('#img27').css('display','inline-block');
            });
            
            $('#img28').on('click', function () {
                $('.icon_plus28').css('display', 'inline-block');
                $('.icon_plus28').css('overflow', 'hidden');
                $('#img28').css('display', 'none');
            });

            $('.icon_plus28').on('click', function () {
                $('.icon_plus28').css('display', 'none');
                $('#img28').css('display','inline-block');
            });
            
            $('#img29').on('click', function () {
                $('.icon_plus29').css('display', 'inline-block');
                $('.icon_plus29').css('overflow', 'hidden');
                $('#img29').css('display', 'none');
            });

            $('.icon_plus29').on('click', function () {
                $('.icon_plus29').css('display', 'none');
                $('#img29').css('display','inline-block');
            });
            
            $('#img30').on('click', function () {
                $('.icon_plus30').css('display', 'inline-block');
                $('.icon_plus30').css('overflow', 'hidden');
                $('#img30').css('display', 'none');
            });

            $('.icon_plus30').on('click', function () {
                $('.icon_plus30').css('display', 'none');
                $('#img30').css('display','inline-block');
            });
            
            $('#img31').on('click', function () {
                $('.icon_plus31').css('display', 'inline-block');
                $('.icon_plus31').css('overflow', 'hidden');
                $('#img31').css('display', 'none');
            });

            $('.icon_plus31').on('click', function () {
                $('.icon_plus31').css('display', 'none');
                $('#img31').css('display','inline-block');
            });
            
            $('#img32').on('click', function () {
                $('.icon_plus32').css('display', 'inline-block');
                $('.icon_plus32').css('overflow', 'hidden');
                $('#img32').css('display', 'none');
            });

            $('.icon_plus32').on('click', function () {
                $('.icon_plus32').css('display', 'none');
                $('#img32').css('display','inline-block');
            });
            
            $('#img33').on('click', function () {
                $('.icon_plus33').css('display', 'inline-block');
                $('.icon_plus33').css('overflow', 'hidden');
                $('#img33').css('display', 'none');
            });

            $('.icon_plus33').on('click', function () {
                $('.icon_plus33').css('display', 'none');
                $('#img33').css('display','inline-block');
            });
            
            $('#img34').on('click', function () {
                $('.icon_plus34').css('display', 'inline-block');
                $('.icon_plus34').css('overflow', 'hidden');
                $('#img34').css('display', 'none');
            });

            $('.icon_plus34').on('click', function () {
                $('.icon_plus34').css('display', 'none');
                $('#img34').css('display','inline-block');
            });
            
            $('#img35').on('click', function () {
                $('.icon_plus35').css('display', 'inline-block');
                $('.icon_plus35').css('overflow', 'hidden');
                $('#img35').css('display', 'none');
            });

            $('.icon_plus35').on('click', function () {
                $('.icon_plus35').css('display', 'none');
                $('#img35').css('display','inline-block');
            });
            
            $('#img36').on('click', function () {
                $('.icon_plus36').css('display', 'inline-block');
                $('.icon_plus36').css('overflow', 'hidden');
                $('#img36').css('display', 'none');
            });

            $('.icon_plus36').on('click', function () {
                $('.icon_plus36').css('display', 'none');
                $('#img36').css('display','inline-block');
            });
            
            $('#img37').on('click', function () {
                $('.icon_plus37').css('display', 'inline-block');
                $('.icon_plus37').css('overflow', 'hidden');
                $('#img37').css('display', 'none');
            });

            $('.icon_plus37').on('click', function () {
                $('.icon_plus37').css('display', 'none');
                $('#img37').css('display','inline-block');
            });
            
            $('#img38').on('click', function () {
                $('.icon_plus38').css('display', 'inline-block');
                $('.icon_plus38').css('overflow', 'hidden');
                $('#img38').css('display', 'none');
            });

            $('.icon_plus38').on('click', function () {
                $('.icon_plus38').css('display', 'none');
                $('#img38').css('display','inline-block');
            });
            
            $('#img39').on('click', function () {
                $('.icon_plus39').css('display', 'inline-block');
                $('.icon_plus39').css('overflow', 'hidden');
                $('#img39').css('display', 'none');
            });

            $('.icon_plus39').on('click', function () {
                $('.icon_plus39').css('display', 'none');
                $('#img39').css('display','inline-block');
            });
            
            $('#img40').on('click', function () {
                $('.icon_plus40').css('display', 'inline-block');
                $('.icon_plus40').css('overflow', 'hidden');
                $('#img40').css('display', 'none');
            });

            $('.icon_plus40').on('click', function () {
                $('.icon_plus40').css('display', 'none');
                $('#img40').css('display','inline-block');
            });
            
            $('#img41').on('click', function () {
                $('.icon_plus41').css('display', 'inline-block');
                $('.icon_plus41').css('overflow', 'hidden');
                $('#img41').css('display', 'none');
            });

            $('.icon_plus41').on('click', function () {
                $('.icon_plus41').css('display', 'none');
                $('#img41').css('display','inline-block');
            });
            
            $('#img42').on('click', function () {
                $('.icon_plus42').css('display', 'inline-block');
                $('.icon_plus42').css('overflow', 'hidden');
                $('#img42').css('display', 'none');
            });

            $('.icon_plus42').on('click', function () {
                $('.icon_plus42').css('display', 'none');
                $('#img42').css('display','inline-block');
            });
            
            $('#img43').on('click', function () {
                $('.icon_plus43').css('display', 'inline-block');
                $('.icon_plus43').css('overflow', 'hidden');
                $('#img43').css('display', 'none');
            });

            $('.icon_plus43').on('click', function () {
                $('.icon_plus43').css('display', 'none');
                $('#img43').css('display','inline-block');
            });
            
            $('#img44').on('click', function () {
                $('.icon_plus44').css('display', 'inline-block');
                $('.icon_plus44').css('overflow', 'hidden');
                $('#img44').css('display', 'none');
            });

            $('.icon_plus44').on('click', function () {
                $('.icon_plus44').css('display', 'none');
                $('#img44').css('display','inline-block');
            });
            
            $('#img45').on('click', function () {
                $('.icon_plus45').css('display', 'inline-block');
                $('.icon_plus45').css('overflow', 'hidden');
                $('#img45').css('display', 'none');
            });

            $('.icon_plus45').on('click', function () {
                $('.icon_plus45').css('display', 'none');
                $('#img45').css('display','inline-block');
            });
            
            $('#img46').on('click', function () {
                $('.icon_plus46').css('display', 'inline-block');
                $('.icon_plus46').css('overflow', 'hidden');
                $('#img46').css('display', 'none');
            });

            $('.icon_plus46').on('click', function () {
                $('.icon_plus46').css('display', 'none');
                $('#img46').css('display','inline-block');
            });
            
            $('#img47').on('click', function () {
                $('.icon_plus47').css('display', 'inline-block');
                $('.icon_plus47').css('overflow', 'hidden');
                $('#img47').css('display', 'none');
            });

            $('.icon_plus47').on('click', function () {
                $('.icon_plus47').css('display', 'none');
                $('#img47').css('display','inline-block');
            });
            
            $('#img48').on('click', function () {
                $('.icon_plus48').css('display', 'inline-block');
                $('.icon_plus48').css('overflow', 'hidden');
                $('#img48').css('display', 'none');
            });

            $('.icon_plus48').on('click', function () {
                $('.icon_plus48').css('display', 'none');
                $('#img48').css('display','inline-block');
            });
            
            $('#img49').on('click', function () {
                $('.icon_plus49').css('display', 'inline-block');
                $('.icon_plus49').css('overflow', 'hidden');
                $('#img49').css('display', 'none');
            });

            $('.icon_plus49').on('click', function () {
                $('.icon_plus49').css('display', 'none');
                $('#img49').css('display','inline-block');
            });
            
            
            $('#img50').on('click', function () {
                $('.icon_plus50').css('display', 'inline-block');
                $('.icon_plus50').css('overflow', 'hidden');
                $('#img50').css('display', 'none');
            });

            $('.icon_plus50').on('click', function () {
                $('.icon_plus50').css('display', 'none');
                $('#img50').css('display','inline-block');
            });
            
            $('#img51').on('click', function () {
                $('.icon_plus51').css('display', 'inline-block');
                $('.icon_plus51').css('overflow', 'hidden');
                $('#img51').css('display', 'none');
            });

            $('.icon_plus51').on('click', function () {
                $('.icon_plus51').css('display', 'none');
                $('#img51').css('display','inline-block');
            });

            $('#saveplace').on('click', function () {
              $('#img45')
                console.log ($('#img45'));
            })


        }
    }
})
