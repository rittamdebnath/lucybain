function Cell(t,i){this.bomb=!1,this.flagged=!1,this.count=0,this.found=!1,this.row=t,this.col=i}Cell.prototype.show=function(){return this.found?this.displayed():" "},Cell.prototype.displayed=function(){return this.bomb?"B":this.flagged?"F":this.count?this.count:"-"};