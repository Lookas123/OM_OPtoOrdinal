function OPtoOrd(op, base){
    if(op<=0)return ""
    if(op<base)return op
    let ord=[]
    let powers = [0,0,0]
    let origOP = op;
    for(i=2; i>=0; i--){
        while(true){
        if(op>=base**(10**i)){ 
            powers[i]+=1; 
            op/=10**(10**i);
        }else break;
        }
    }
    let divisor = Math.floor(op)
    if(divisor==1||divisor==0)divisor="";
    ord+=powersToSingleOrd(powers)+divisor;
    let thingy = OPtoOrd((origOP-(10**(100*(powers[2])+powers[1]*10+powers[0])*(divisor==""?1:divisor))), base);
    ord+=thingy==""?"":"+"+thingy
    return ord;
    
}
function powersToSingleOrd(powers){
    if(powers[2]>0){
        if(powers[1]>0){
            if(powers[0]>0)return "w^(w^(2)+"+(powers[2]==2?2:"")+"w"+powers[1]+"+"+powers[0]+")";
            else return "w^(w^(2)"+(powers[2]==2?2:"")+"w"+powers[1]+")";
        }
        else if(powers[0]>0)return "w^(w^(2)"+(powers[2]==2?2:"")+"+"+powers[0]+")";
        else return "w^(w^(2)"+(powers[2]==2?2:"")+")";
    }
    else if(powers[1]>0){
        if(powers[0]>0)return "w^(w"+powers[1]+"+"+powers[0]+")";
        else return "w^(w"+powers[1]+")";
    }
    else if(powers[0]>0) return "w"+(powers[0]>1?"^"+powers[0]:"");
    else return ""
}
const op = document.getElementById("op");
const base = document.getElementById("base");
const display = document.getElementById("disp");
function calculateStuff(){
    let OP=op.value;
    let Base=base.value;
    display.innerHTML=OPtoOrd(OP, Base)
}