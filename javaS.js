const music= new Audio('music/2.mp3');

let masterPlay = document.getElementById(`masterPlay`);


    
masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <=0){
        music.play();
        waves.classList.add(`active1`);
        
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        waves.classList.remove(`active1`);
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }  
})

const songs =[
    {
        id:1,
        songName:`Believer <br> 
        <div class="subtitle">Imagine Dragons</div>`,
        poster:"image/1.jpg"
    },
    {
        id:2,
        songName:` Vande Mataram<br> 
        <div class="subtitle">A.R. Rehman</div>`,
        poster:"image/2.jpg"      
    },
    {
        id:3,
        songName:`Naacho Naacho <br> 
        <div class="subtitle">Vishal Mishra</div>`,
        poster:"image/3.jpg"
    },
    {
        id:4,
        songName:`Kesariya<br> 
        <div class="subtitle">Arjit Singh</div>`,
        poster:"image/4.jpg"
    },
    {
        id:5,
        songName:`Mera Safar <br> 
        <div class="subtitle">Iqlipse Nova</div>`,
        poster:"image/5.jpg"
    },
    {
        id:6,
        songName:`Kolaveri<br> 
        <div class="subtitle">Dhanush</div>`,
        poster:"image/6.jpg"
    },
    {
        id:7,
        songName:`Srivalli<br> 
        <div class="subtitle">Javed Ali</div>`,
        poster:"image/7.jpg"
    },
    {
        id:8,
        songName:`Shape Of You <br> 
        <div class="subtitle">Ed Sheeran</div>`,
        poster:"image/8.jpg"
    },
    {
        id:9,
        songName:`Faded <br> 
        <div class="subtitle">Alan Walker</div>`,
        poster:"image/9.jpg"
    },
    {
        id:10,
        songName:`Galti Se Mistake <br> 
        <div class="subtitle">Arjit Singh</div>`,
        poster:"image/10.jpg"
    },
    {
        id:11,
        songName:`Agar Tum Saath Ho <br> 
        <div class="subtitle">Arjit Singh</div>`,
        poster:"image/11.jpg"
    },
    {
        id:12,
        songName:`Desh Mere <br> 
        <div class="subtitle">Arjit Singh</div>`,
        poster:"image/12.jpg"
    },
    {
        id:13,
        songName:`Patola <br> 
        <div class="subtitle">Guru Randhawa</div>`,
        poster:"image/13.jpg"
    },
    {
        id:14,
        songName:`Suit Suit <br> 
        <div class="subtitle">Guru Randhawa</div>`,
        poster:"image/14.jpg"
    },
    {
        id:15,
        songName:`Morni Banke<br> 
        <div class="subtitle">Neha Kakkar</div>`,
        poster:"image/15.jpg"
    },
    {
        id:16,
        songName:`Lahore <br> 
        <div class="subtitle">Guru Randhawa</div>`,
        poster:"image/16.jpg"
    },
    {
        id:17,
        songName:`Kala Chasma <br> 
        <div class="subtitle">Badshah</div>`,
        poster:"image/17.jpg"
    },
    {
        id:18,
        songName:`Mercy <br> 
        <div class="subtitle">Badshah</div>`,
        poster:"image/18.jpg"
    },
    {
        id:19,
        songName:`Proper Patola <br> 
        <div class="subtitle">Badshah</div>`,
        poster:"image/19.jpg"
    },
    {
        id:20,
        songName:`Zaalima<br> 
        <div class="subtitle">Arjit Singh</div>`,
        poster:"image/20.jpg"
    },
    
]

const makeAllBackgroun = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((es)=>{
        es.style.bagckground ='rgba(1, 80, 145, 0.000)';
    })
}

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((e1)=>{
        e1.classList.add('bi-play-circle-fill');
        e1.classList.remove('bi-pause-circle-fill');
    })
}

let seek=document.getElementById("seek");
let bar2=document.getElementById("bar2");
let dot=document.getElementById("dot");

let index=0,prev=999999999,count=0,i=1;
let title=document.getElementById(`title`);
let poster_master_play = document.getElementById(`poster_master_play`);
let downloading = document.getElementById(`downloading`);
Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
    e.addEventListener('click',(e1)=>{
        index = e1.target.id;
        //console.log(index);
       
        music.src = `music/${index}.mp3`;
        poster_master_play.src = `image/${index}.jpg`;
        let songTitles = songs.filter((ele)=>{
            return ele.id==index;
        });

        songTitles.forEach((elss)=>{
            let { songName }=elss;
            title.innerHTML = songName;
            downloading.setAttribute('download',songName) ;
        });
        downloading.href =`music/${index}.mp3`;

        if(count!=0 && index==prev ){
            music.pause();
            count=0;
            waves.classList.remove(`active1`);
            masterPlay.classList.remove('bi-pause-fill');
            masterPlay.classList.add('bi-play-fill');
            makeAllBackgroun();
            Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = `rgba(1, 80, 145, 0.000)`;
        
            makeAllPlay();
            e1.target.classList.remove('bi-pause-circle-fill');
            e1.target.classList.add('bi-play-circle-fill');

            bar2.style.width = `0%`;
            dot.style.left =`0%`;
        }
        else if(count!=0 && index!=prev || count==0 && index!=prev || count==0 && index==prev){
            music.play();
            waves.classList.add(`active1`);
            count=1;
            masterPlay.classList.remove('bi-play-fill');
            masterPlay.classList.add('bi-pause-fill');

            makeAllBackgroun();
            if(i!=1)
            Array.from(document.getElementsByClassName('songItem'))[prev-1].style.background = `rgba(1, 80, 145, 0.000)`;
            Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = `rgba(1, 80, 145, 0.909)`;
        
            makeAllPlay();
            e1.target.classList.add('bi-pause-circle-fill');
            e1.target.classList.remove('bi-play-circle-fill');
            
            bar2.style.width = `0%`;
            dot.style.left =`0%`;

            
        }  

        prev=index;i++;
        
    });
});




let currentStart = document.getElementById("CurrentStart");
let currentEnd = document.getElementById("CurrentEnd");
music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur/60);
    let sec1 = Math.floor(music_dur % 60);
    
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentEnd.innerText =`${min1}:${sec1}`;

    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);
    
    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentStart.innerText =`${min2}:${sec2}`;


    let progressBar = parseInt((music_curr / music_dur)*100);
    seek.value = progressBar;
    
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left =`${seekbar}%`;
});

seek.addEventListener('change',()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon=document.getElementById('vol_icon');
let vol =document.getElementById('vol');
let vol_bar= document.getElementsByClassName(`vol_bar`)[0];
let vol_dot = document.getElementById('vol_dot');

vol.addEventListener('change',()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value>0 ){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value >50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a =vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
});

let back=document.getElementById('back');
let next=document.getElementById('next');
  
back.addEventListener('click',()=>{
    index-= 1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `music/${index}.mp3`;
    poster_master_play.src = `image/${index}.jpg`;

    music.play();
    waves.classList.add(`active1`);
    
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitle = songs.filter((els)=>{
        return els.id == index;
    });

    songTitle.forEach(elss=>{
        let{songName} = elss;
        title.innerHTML=songName;
    });

    makeAllBackgroun();
    Array.from(document.getElementsByClassName('songItem'))[index].style.background = `rgba(1, 80, 145, 0.000)`;
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = `rgba(1, 80, 145, 0.909)`;
        
    makeAllPlay();
    e1.target.classList.remove('bi-play-circle-fill');
    e1.target.classList.add('bi-pause-circle-fill');
            
        
    
});


next.addEventListener('click',()=>{
    index++;
    if(index>Array.from(document.getElementsByClassName('songItem')).length)
    {
        index=1;
    }
    music.src = `music/${index}.mp3`;
    poster_master_play.src = `image/${index}.jpg`;

    music.play();
    waves.classList.add(`active1`);
    
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitle = songs.filter((els)=>{
        return els.id == index;
    });

    songTitle.forEach(elss=>{
        let{songName} = elss;
        title.innerHTML=songName;
    });

    makeAllBackgroun();
    Array.from(document.getElementsByClassName('songItem'))[index-2].style.background = `rgba(1, 80, 145, 0.000)`;
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = `rgba(1, 80, 145, 0.909)`;

    makeAllPlay();
    e1.target.classList.remove('bi-pause-circle-fill');
    e1.target.classList.add('bi-play-circle-fill');
            
       
    
});


let pop_song_left= document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop')[0];


pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft+=330;
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft-=330;
});

let pop_art_left= document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let art = document.getElementsByClassName('item')[0];


pop_art_left.addEventListener('click',()=>{
    art.scrollLeft-=330;
});
pop_art_right.addEventListener('click',()=>{
    art.scrollLeft+=330;
});


Array.from(document.getElementsByClassName(`songItem`)).forEach((e,i)=>{
    e.getElementsByTagName(`img`)[0].src = songs[i].poster;
    e.getElementsByTagName(`h5`)[0].innerHTML= songs[i].songName;

});




