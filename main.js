
    let count=0;
    let myIconXY;
        myIconXY=[[0,0],[0,0]];

    function mouseMove(e){
            console.log('mouseMove:'+e.pageX+':'+e.pageY);
    let myIcon1;
    let myIcon2;
    let myIcon3;
    let myIcon4;
            myIcon1=document.querySelector('#icon1');
            myIcon2=document.querySelector('#icon2');
            myIcon3=document.querySelector('#icon3');
            myIcon4=document.querySelector('#icon4');
            myIconXY[0][count]=e.pageX;
            myIconXY[1][count]=e.pageY;

        if(count>10){
            let temp1;
                temp1=count-10;
            let temp2;
                temp2=count-20;
            let temp3;
                temp3=count-30;
            let temp4;
                temp4=count-40;
                myIcon1.style.left=myIconXY[0][temp1]+'px';
                myIcon1.style.top=myIconXY[1][temp1]+'px';
                myIcon2.style.left=myIconXY[0][temp2]+'px';
                myIcon2.style.top=myIconXY[1][temp2]+'px';
                myIcon3.style.left=myIconXY[0][temp3]+'px';
                myIcon3.style.top=myIconXY[1][temp3]+'px';
                myIcon4.style.left=myIconXY[0][temp4]+'px';
                myIcon4.style.top=myIconXY[1][temp4]+'px';
            }
            count++
        }