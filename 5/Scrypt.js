function upd()
{
    minPrice=5790;
    delivery=0;
    qwe=0;
    ew=0;
    sam=0;
    kol=document.getElementById('kol-vo').value;
    var rad=document.getElementsByName('package');
    var chad=document.getElementsByName('box1');
    for(var i=0;i<rad.length;i++)
    {
        if (rad[i].checked)
        {
            Food=0;
            home=0;
            FullStack=0;
            if(i==0 && document.getElementById('p1').hidden!=true)
            {
                Food = 850;
                home = 0;
                FullStack = 0;
                document.getElementById('tb').value=kol*minPrice+Food+home+FullStack+delivery+qwe+ew+sam +'rub';
            }
            else{Food=0;}
            if(i==2 && document.getElementById('p3').hidden!=true)
            {
                Food = 0;
                home = 0;
                FullStack = 1970;
                document.getElementById('tb').value=kol*minPrice+Food+home+FullStack+delivery+qwe+ew+sam +'rub';
            }
            else{FullStack=0;}
            if(i==1 && document.getElementById('p2').hidden!=true)
            {
                Food = 0;
                home = 530;
                FullStack = 0;
                document.getElementById('tb').value=kol*minPrice+Food+home+FullStack+delivery+qwe+ew+sam +'rub';
            }
            else{home=0;}
            document.getElementById('tb').value=kol*minPrice+Food+home+FullStack+delivery+qwe+ew+sam +'rub';
        }
    }
    if (document.getElementById('HiddenPanel').hidden==false)
    {
        for(var i=0;i<chad.length;i++)
        {
            if (chad[i].checked)
            {
                if(i==0 && document.getElementById('c1').hidden!=true)
                {
                    delivery = 100;
                }
                if(i==1 && document.getElementById('c2').hidden!=true)
                {
                    sam=620;
                }
                if(i==2 && document.getElementById('c3').hidden!=true)
                {
                    ew=260;
                }
                if(i==3 && document.getElementById('c4').hidden!=true)
                {
                    qwe=30;
                }
            }
            else
            {
                if(i==0 && document.getElementById('c1').hidden!=true)
                {
                    delivery = 0;
                }
                if(i==1 && document.getElementById('c2').hidden!=true)
                {
                    sam=0;
                }
                if(i==2 && document.getElementById('c3').hidden!=true)
                {
                    ew=0;
                }
                if(i==3 && document.getElementById('c4').hidden!=true)
                {
                    qwe=0;
                }
            }
            document.getElementById('tb').value=kol*minPrice+Food+home+FullStack+delivery+qwe+ew+sam +'rub';
        }
    }
    else
    {
        document.getElementById('tb').value=kol*minPrice+Food+home+FullStack+'rub';
    }
    document.getElementById('tb').value=kol*minPrice+Food+home+FullStack+delivery+qwe+ew+sam +'rub';

}
function pet(a)
{
    var max;
    document.getElementById('HiddenPanel').hidden=false;
    if(document.getElementById('Cheki').hidden && a!=1)
    {
        document.getElementById('Cheki').hidden=false;
    }
    if (a==1)
    {
        document.getElementById('HiddenPanel').hidden=true;
        document.getElementById('Cheki').hidden=true;
        document.getElementById('p1').hidden=true;
        document.getElementById('p2').hidden=true;
        document.getElementById('p3').hidden=true;
        upd();
    }
    if (a==2)
    {
        document.getElementById('HiddenPanel').hidden=true;
        document.getElementById('p1').hidden=false;
        document.getElementById('p2').hidden=false;
        document.getElementById('p3').hidden=false;
        upd();
    }
    if (a==3)
    {
        document.getElementById('c1').hidden=false;
        document.getElementById('c2').hidden=true;
        document.getElementById('c3').hidden=false;
        document.getElementById('c4').hidden=true;
        document.getElementById('Cheki').hidden=true;
        upd();
    }
    if (a==4)
    {
        document.getElementById('c1').hidden=false;
        document.getElementById('c2').hidden=true;
        document.getElementById('c3').hidden=false;
        document.getElementById('c4').hidden=true;
        document.getElementById('p1').hidden=false;
        document.getElementById('p2').hidden=true;
        document.getElementById('p3').hidden=false;
        upd();
    }
}
function al()
{
    alert('Это тестовый сайт, выполненый для университета')
}
   