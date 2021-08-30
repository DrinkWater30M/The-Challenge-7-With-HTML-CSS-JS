const eHeaderNavigations = document.querySelectorAll(".header-top .navigation .title");
const eListHeaderNavigations = document.querySelectorAll(".header-top .navigation .navigation-list");
const eIconHeaderNavigations = document.querySelectorAll(".header-top .navigation h4");
const eMenu = document.querySelector("header .header-top .menu");
const eButtonMenu = document.querySelector("header .header-top .button-menu");

function main(){
    // Js for navigation
    eHeaderNavigations.forEach(function(eHeaderNavigation, index){
        eHeaderNavigation.addEventListener('click', function(){
            //Delete all active except itsefl
            eListHeaderNavigations.forEach(function(eListHeaderNavigation, indexList){
                if(index !== indexList){
                    eListHeaderNavigation.classList.remove("active");
                }
            })

            eIconHeaderNavigations.forEach(function(eIconHeaderNavigation, indexIcon){
                if(index !== indexIcon){
                    eIconHeaderNavigation.classList.remove("active");
                }
            })

            //Add active for item that was click
            eListHeaderNavigations[index].classList.toggle("active");
            eIconHeaderNavigations[index].classList.toggle("active");
        })
    })

    // Js for Menu
    eButtonMenu.addEventListener('click', function(){
        this.classList.toggle("active");
        eMenu.classList.toggle("active");
    })
}

main();