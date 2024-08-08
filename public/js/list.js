// var dict={"1":0,"2":0,"3":0, "4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0};


// var dict={"1":0,"2":0,"3":0, "4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0};

// function getin(name) {

//     console.log(dict[name]);

//     if (dict[name]==0){
//         dict[name]+=1;
//         document.getElementById(name).style.position='absolute';
//     }
//     else if(dict[name]==1){
//         dict[name]-=1;
//         document.getElementById(name).style.position='relative';
//     }

//     // document.getElementById(name).style.position='absolute';

// }

// document.querySelectorAll('.buttons').forEach(button =>{
//     const checkbox=button.nextElementSibling;
//     button.addEventListener('click',()=>{
//         button.classList.toggle('buttons--active');
//         if(button.classList.contains('buttons--active')){
//             // accordContent.style.display='absolute';
//         } else{
//             // accordContent.style.display = 'relative';

//         }
//     });
// });

// var checkbox = document.querySelector("input[name=checkbox]");

// checkbox.addEventListener('change', function() {
//   if (this.checked) {
//     console.log("Checkbox is checked..");
//   } else {
//     console.log("Checkbox is not checked..");
//   }
// });
{/* <input type="checkbox" name="checkbox" /> */ }

// if($(button,'#reverse').length == 1) { // checks if the element is in the second column
//     $(button).clone().appendTo("#reverse");

// }

// if($(button,'#but_container1').length == 1) { // checks if the element is in the first column
//     clone = $(button).clone(true).appendTo("#but_container1");

// }


//-----------------------------------------------------------------------------------------------------------


var bigheight = document.getElementById("big_box").getBoundingClientRect().height;
var bigbox = document.getElementById("big_box");
var buttonheight = 0;
var width = 0;
var allbuttons = document.getElementsByClassName("buttons");
var check = 0;
var list_of_buttons_in_box = [];

document.querySelectorAll('.buttons, .buttons2').forEach(button => {
    // const checkbox=button.nextElementSibling;
    var checkbox = button.querySelector('input[type="checkbox"]');
    var data2 = button.getBoundingClientRect();
    var data = document.getElementById("mixbox").getBoundingClientRect();
    // console.log(checkbox);

    checkbox.addEventListener('change', () => {

        if (check>=3) {
            checking();
        }


        if (checkbox.checked && check < 3) {
            var box = document.getElementById("mixbox");

            window.scrollTo(0, data.top);

            document.getElementById("mixbox").style.opacity = 1;

            // var list= document.getElementById("list");
            // list.appendChild(button);
            button.classList.toggle('buttons--active');
            // checkbox.classList.toggle('hide');
            button.style.transition = 'all 0.3s ease-in-out';

            // box.style.top = `${-buttonheight}px`;
            var clone = jQuery.extend(true, {}, $(button));
            clone.style.transition = 'all 0.3s ease-in-out';


            clone.style.transform = `translate3d(${data.left - data2.left - ($(button).outerWidth() / 2) + 4}px,${data.y - data2.y + 5}px,0px)`;
            // buttonheight += ($(button).outerHeight() + 10);

            // box.style.height = `${buttonheight + 15}px`;

            list_of_buttons_in_box.push(button.getAttribute("name"));


            // list_of_buttons_in_box.forEach(element => {

            //     var element2 = $(`[name='${element}']`);
            //     var elements = document.getElementsByName(`${element}`);
            //     var id = elements[0].getAttribute('id');

            //     var styles = element2.css('-webkit-transform');
            //     var left = styles.slice(19,26);
            //     var top = styles.slice(28,styles.length-1);
            //     // document.getElementById(id).style.transform = `translate3d(${left}px,${parseInt(top)+$(button).outerHeight()+10}px,0px)`;
                                
            // });

            // if(check==0){
            //     console.log("I am in if and the value of check is",check);  
            //     box.style.width = `${data2.width + 22}px`;
            //     width=0;
            // }

            if (data2['width'] + 20 > width) {
                box.style.width = `${data2['width'] + 22}px`;
                width = data2['width'] + 22;
            }

            var list=document.getElementById("list"+`${button.id}`);
            list.appendChild(button);

            check += 1;

            
            // bigbox.style.height = `${bigheight}`;
            // console.log(bigheight);
            // console.log($(height).position().left);

            //   console.log("Checkbox is checked..");
        }

        else {
            // if (check < 3 || list_of_buttons_in_box.includes(button.getAttribute("name"))) {
                
            //     list_of_buttons_in_box.splice(list_of_buttons_in_box.indexOf(button.getAttribute("name")),1);
            //     console.log("The list after popping: ",button.getAttribute("name"),": ",list_of_buttons_in_box);

            //     button.classList.remove('buttons--active');

            //     window.scrollTo(0, data2.top);

            //     console.log(list_of_buttons_in_box);

            //     buttonheight -= ($(button).outerHeight() + 10);

            //     list_of_buttons_in_box.forEach(element => {

            //         var element2 = $(`[name='${element}']`);
            //         var elements = document.getElementsByName(`${element}`);
            //         var id = elements[0].getAttribute('id');

            //         if (element2.offset().top < $(button).offset().top) {
            //             // console.log("The top of the element you selected: ", $(button).offset().top);
            //             // console.log("The top of the element above it: ", element2.offset().top);
            //             // console.log("Moving", id, 'at',element2.offset().top + $(button).outerHeight());
            //             // console.log("Moving", id, 'at',document.getElementById(id).getBoundingClientRect().height);
            //             // console.log("Moving", id, 'at',data.left - data2.left - ($(button).outerWidth() / 2) + 4);
            //             var styles = element2. css('-webkit-transform');
            //             var left = styles.slice(19,26);
            //             var top = styles.slice(28,styles.length-1);
            //             // console.log(top);
            //             // console.log(parseInt(top)+$(button).outerHeight()+10);
            //             document.getElementById(id).style.transform = `translate3d(${left}px,${parseInt(top)}px,0px)`;
            //         }
            //         else{

            //             var styles = element2. css('-webkit-transform');
            //             var left = styles.slice(19,26);
            //             var top = styles.slice(28,styles.length-1);
            //             // console.log(top);
            //             // console.log(parseInt(top)+$(button).outerHeight()+10);
            //             document.getElementById(id).style.transform = `translate3d(${left}px,${parseInt(top)-$(button).outerHeight()}px,0px)`;

            //         }

            //     });

                // checkbox.classList.remove('hide');
                // button.style.transition = 'all 0.3s ease-in-out';
                // $(button).clone().style.transform = `translate3d(0px,0px,0px)`
                // button.style.top = 'auto';
                // button.style.left = `auto`;

                var mixingbox = document.getElementById("mixbox");

                // var box_data = mixingbox.getBoundingClientRect();

                // mixingbox.style.height = `${box_data.height - $(button).outerHeight() - 10}px`

                // mixingbox.style.top = `${-buttonheight + $(button).outerHeight()}px`;

                check -= 1;

                console.log("The id of the buttons is: ",button.id);
                var list1=document.getElementById(`${parseInt(button.id)+100}`);
                list1.appendChild(button);

                if (check == 0) {
                    mixingbox.style.opacity = 0;
                }

                // console.log(bigheight);           

                // console.log("Checkbox is not checked..");

            

        }
    });
});


function box_change() {
    var box = document.getElementById("mixbox");
    box.style.borderTop = "4px solid navy";
}

function box_change2() {
    var box = document.getElementById("mixbox");
    box.style.borderTop = "4px solid transparent";

}

function checking(checked = false) {
    document.querySelectorAll('.buttons, .buttons2').forEach(buttons=>{
        console.log(buttons.getAttribute("name"));
        if (list_of_buttons_in_box.includes(buttons.getAttribute("name"))) {
                        
        }
        else{
            buttons.querySelector('input[type="checkbox"]').checked=checked;
        }
    })
    // cbs.forEach((cb) => {
    //     cb.checked = checked;
    // });
}

function submitting() {
    // var border=document.getElementById("mixbox");
    // border.style.borderTop="black";
}

function hoveroncerti() {

}