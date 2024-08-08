import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Fade extends Highway.Transition{
    in(from, to , done){

    const tl=new TimelineLite();
    tl.fromTo(to, 0.5, {left:'-100%', top:`${((document.getElementById('body2').getBoundingClientRect().top + (document.getElementById('body2').getBoundingClientRect().height/2))/Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ))*100}%`},{left:'0%'}).fromTo(to, 0.5, {height:'2vh'},{height:'90vh', top:`${(document.getElementById('body2').getBoundingClientRect().top/Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight ))*100}%`, onComplete: function(){
        done();
    }})

    }
    out({ form, done }){
        done();

    }
}

export default Fade;