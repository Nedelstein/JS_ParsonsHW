
let setUpToolTip = function(){
    let tooltip = "";
    let tooltipDiv = document.querySelector(".div-tooltip");
    let tooltipElements = Array.from(document.querySelectorAll(".hover-reveal"));

        let displayToolTip = function(e, obj){
            tooltip = obj.dataset.tooltip;
            tooltipDiv.innerHTML = tooltip;
            tooltipDiv.style.top = e.pageY + "px";
            tooltipDiv.style.left = e.pageX + "px";
            // tooltipDiv.style.opacity = 1;
            fadeIn(tooltipDiv);
        };

        let fadeOut = function(element){
            let op = 1;
            let duration = setInterval(function(){
                if(op <= 0){
                    clearInterval(duration);
                    element.style.opacity = 0;
                }
                element.style.opacity = op;
                op -= 0.1;
            }, 15);
        };

        let fadeIn = function(element){
            let op = 0;
            let duration = setInterval(function(){
                if(op >= 1){
                    clearInterval(duration);
                }
                element.style.opacity = op;
                op += 0.1;
            }, 15);
        };

        tooltipElements.forEach(function(elem) {
            let timeout;
            elem.addEventListener("mouseenter", function(e){
                let that = this;
                timeout = setTimeout(function(){
                    displayToolTip(e, that);
                }, 500);
                
            });
            elem.addEventListener("mouseleave", function(e){
                // tooltipDiv.style.opacity = op;
                clearTimeout(timeout);
                fadeOut(tooltipDiv);
            });
        });

};

setUpToolTip();