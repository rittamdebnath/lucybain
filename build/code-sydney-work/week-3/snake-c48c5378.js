function Snake(t){var i;return this.init=function(t){return i=[[t/2,t/2]],this},this.head=function(){return i[0]},this.move=function(t){var n=this.head();n=[n[0]+t[0],n[1]+t[1]],i.unshift(n),i.pop()},this.hitSelf=function(){for(var t=1;t<i.length;t++)if(Utils.arraysEqual(this.head(),i[t]))return!0;return!1},this.remove=function(){$(".snake").text("")},this.display=function(){this.remove();for(var t=0;t<i.length;t++)Utils.cell(i[t]).text("O").addClass("snake")},this.getLocations=function(){return i},this.lengthen=function(t){t=[-1*t[0],-1*t[1]];var n=[this.head()[0]+t[0],this.head()[1]+t[1]];i.push(n)},this.hitCell=function(t){return Utils.arraysEqual(this.head(),t)},this.hasBody=function(){return i>1},this.init(t)}