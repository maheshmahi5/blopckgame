import { Component, OnInit } from '@angular/core';
import * as _ from 'underscore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  start = false;
  hide = false;
  block1 = true;
  block2 = true;
  block3 = true;
  block4 = true;
  block5 = true;
  block6 = true;
  block7 = true;
  block8 = true;
  block9 = true;
  block10 = true;
  block11 = true;
  block12 = true;
  block13 = true;
  block14 = true;
  block15 = true;
  block16 = true;
  block17 = true;
  block18 = true;
  block19 = true;
  block20 = true;
  gblock1 = false;
  gblock2 = false;
  gblock3 = false;
  gblock4 = false;
  gblock5 = false;
  gblock6 = false;
  gblock7 = false;
  gblock8 = false;
  gblock9 = false;
  gblock10 = false;
  gblock11 = false;
  gblock12 = false;
  gblock13 = false;
  gblock14 = false;
  gblock15 = false;
  gblock16 = false;
  gblock17 = false;
  gblock18 = false;
  gblock19 = false;
  gblock20 = false;
  str1 = null;
  str2 = null;
  item: any = [];
  check: any = [];
  score = 0 ;
  buttonsdisable = false;
  alwaysdisable = false;
  timeLeft : number = 40;
  interval;
  pause = true;
  gameOver = false;
  item1: any

  constructor() {}
  
  ngOnInit() {
    // this.item = _.sample([5,6,9,3,2,8,1,0,4,7,1,2,3,4,5,6,7,8,9,0],20)
    // console.log(this.item)

    this.item =_.sample(['A','B','C','D','E','F','G','H','I','J','A','B','C','D','E','F','G','H','I','J'],20)
    console.log(this.item)
  }
  startGame() {
    this.start = true ;
    this.hide = true;
    // this.alwaysdisable = truASDe;
    this.StartTimer();
  }
  StartTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.gameOver = true;
        this.start == false;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
    this.start = false;
    this.pause = false;
  }

  restartTimer() {
    this.start = true;
    this.pause = true;
    this.StartTimer();  
  }

  lock1() {
    this.block1 = false;
    console.log(this.block1);
    console.log(this.str1)
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[0];
      console.log(this.str1);
      this.check = 1;
    } else {
      this.str2=this.item[0];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock1 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block1= true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }

  lock2() {
    this.block2 = false;
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[1];
      console.log(this.str1);
      this.check = 2;
    } else {
      this.str2=this.item[1];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock2 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block2= true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }

  lock3() {
    this.block3 = false;
    console.log(this.str1)
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[2];
      console.log(this.str1);
      this.check = 3;
    } else {
      this.str2=this.item[2];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock3 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block3= true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }

  lock4() {
    this.block4 = false;
    console.log(this.str1)
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[3];
      console.log(this.str1);
      this.check = 4;
    } else {
      this.str2=this.item[3];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock4 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block4= true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }

  lock5() {
    this.block5 = false;
    console.log(this.str1)
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[4];
      console.log(this.str1);
      this.check = 5;
    } else {
      this.str2=this.item[4];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock5 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block5= true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }

  lock6() {
    this.block6 = false;
    console.log(this.str1)
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[5];
      console.log(this.str1);
      this.check = 6;
    } else {
      this.str2=this.item[5];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock6 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block6= true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }

  lock7() {
    this.block7 = false;
    console.log(this.str1)
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[6];
      console.log(this.str1);
      this.check = 7;
    } else {
      this.str2=this.item[6];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock7 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block7= true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }

  lock8() {
    this.block8 = false;
    console.log(this.str1)
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[7];
      console.log(this.str1);
      this.check = 8;
    } else {
      this.str2=this.item[7];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock8 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block8= true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }

  lock9() {
    this.block9 = false;
    console.log(this.str1)
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[8];
      console.log(this.str1);
      this.check = 9;
    } else {
      this.str2=this.item[8];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock9 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block9= true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }

  lock10 () {
    this.block10 = false;
    console.log(this.str1)
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[9];
      console.log(this.str1);
      this.check = 10;
    } else {
      this.str2=this.item[9];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock10 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block10= true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }

  lock11 () {
    this.block11 = false;
    console.log(this.str1)
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[10];
      console.log(this.str1);
      this.check = 11;
    } else {
      this.str2=this.item[10];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock11 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block11= true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }

  lock12 () {
    this.block12 = false;
    console.log(this.str1)
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[11];
      console.log(this.str1);
      this.check = 12;
    } else {
      this.str2=this.item[11];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock12 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block12= true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }

  lock13 () {
    this.block13 = false;
    console.log(this.str1)
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[12];
      console.log(this.str1);
      this.check = 13;
    } else {
      this.str2=this.item[12];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock13 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block13= true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }

  lock14 () {
    this.block14 = false;
    console.log(this.str1)
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[13];
      console.log(this.str1);
      this.check = 14;
    } else {
      this.str2=this.item[13];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock14 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block14= true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }

  lock15 () {
    this.block15 = false;
    console.log(this.str1)
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[14];
      console.log(this.str1);
      this.check = 15;
    } else {
      this.str2=this.item[14];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock15 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block15= true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }

  lock16 () {
    this.block16= false;
    console.log(this.str1)
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[15];
      console.log(this.str1);
      this.check = 16;
    } else {
      this.str2=this.item[15];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock16 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block16= true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }

  lock17 () {
    this.block17 = false;
    console.log(this.str1)
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[16];
      console.log(this.str1);
      this.check = 17;
    } else {
      this.str2=this.item[16];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock17 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block17= true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }

  lock18 () {
    this.block18 = false;
    console.log(this.str1)
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[17];
      console.log(this.str1);
      this.check = 18;
    } else {
      this.str2=this.item[17];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock18 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block18= true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }

  lock19 () {
    this.block19 = false;
    console.log(this.str1)
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[18];
      console.log(this.str1);
      this.check = 19;
    } else {
      this.str2=this.item[18];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock19 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block19= true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }

  lock20 () {
    this.block20 = false;
    console.log(this.str1)
    console.log(this.str2);
    if(this.str1 == null) {
      this.str1=this.item[19];
      console.log(this.str1);
      this.check = 20;
    } else {
      this.str2=this.item[19];
      console.log(this.str2);
    }
    if(this.str1 !== null && this.str2 !== null) {
      this.buttonsdisable = true;
      if(this.str1 === this.str2) {
        console.log(this.str1);
        console.log(this.str2);
        console.log('check');
        if(this.check === 1) {
          this.gblock1= true;
        }
        if(this.check === 2) {
          this.gblock2= true;
        }
        if(this.check === 3) {
          this.gblock3= true;
        }
        if(this.check === 4) {
          this.gblock4= true;
        }
        if(this.check === 5) {
          this.gblock5= true;
        }
        if(this.check === 6) {
          this.gblock6= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 7) {
          this.gblock7= true;
        }
        if(this.check === 8) {
          this.gblock8= true;
        }
        if(this.check === 9) {
          this.gblock9= true;
        }
        if(this.check === 10) {
          this.gblock10= true;
        }
        if(this.check === 11) {
          this.gblock11= true;
        }
        if(this.check === 12) {
          this.gblock12= true;
        }
        if(this.check === 13) {
          this.gblock13= true;
        }
        if(this.check === 14) {
          this.gblock14= true;
        }
        if(this.check === 15) {
          this.gblock15= true;
        }
        if(this.check === 16) {
          this.gblock16= true;
        }
        if(this.check === 17) {
          this.gblock17= true;
        }
        if(this.check === 18) {
          this.gblock18= true;
        }
        if(this.check === 19) {
          this.gblock19= true;
        }
        if(this.check === 20) {
          this.gblock20 = true;
        } 
        this.str1 = null;
        this.str2 = null;
        this.gblock20 = true;
        this.check = '';
        this.score = this.score + 1;
        this.buttonsdisable = false;
      }
      if(this.str2 !== this.str1) {
        console.log('else')
        this.str1 = null;
        this.str2 = null;
        console.log(this.str1);
        console.log(this.str2);
        setTimeout(()=>{ 
          this.block20 = true;
          console.log('timeout')
          if(this.check === 1) {
            this.block1= true;
          }
          if(this.check === 2) {
            this.block2= true;
          }
          if(this.check === 3) {
            this.block3= true;
          }
          if(this.check === 4) {
            this.block4= true;
          }
          if(this.check === 5) {
            this.block5= true;
          }
          if(this.check === 6) {
            this.block6= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 7) {
            this.block7= true;
          }
          if(this.check === 8) {
            this.block8= true;
          }
          if(this.check === 9) {
            this.block9= true;
          }
          if(this.check === 10) {
            this.block10= true;
          }
          if(this.check === 11) {
            this.block11= true;
          }
          if(this.check === 12) {
            this.block12= true;
          }
          if(this.check === 13) {
            this.block13= true;
          }
          if(this.check === 14) {
            this.block14= true;
          }
          if(this.check === 15) {
            this.block15= true;
          }
          if(this.check === 16) {
            this.block16= true;
          }
          if(this.check === 17) {
            this.block17= true;
          }
          if(this.check === 18) {
            this.block18= true;
          }
          if(this.check === 19) {
            this.block19= true;
          }
          if(this.check === 20) {
            this.block20 = true;
          } 
          this.buttonsdisable = false; 
          
     }, 1000);
        

      }
    }
  }
}
