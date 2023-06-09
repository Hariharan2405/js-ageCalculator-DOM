var dt=document.querySelector(".date");
var mn=document.querySelector(".month");
var yr=document.querySelector(".year");
var btn=document.querySelector(".submit");
var opt=document.querySelector(".output");

btn.addEventListener("click",function(){
	var date=new Date(`${yr.value} ${mn.value} ${dt.value}`);
	var nowDate=new Date();
	var y=date.getFullYear();
	var y1=nowDate.getFullYear();
	var m=date.getMonth();
	var m1=nowDate.getMonth();
	var d=date.getDate();
	var d1=nowDate.getDate();
	if(date.getTime()<nowDate.getTime()){
		if(m1>=m && d1>=d){
			var year=y1-y;
			var month=m1-m;
			var day=d1-d
		}
		else if(m1>m && d1<d){
			var year=y1-y;
			var month=m1-m-1
			if(m1==1 || m1==3 || m1==5 || m1==7 || m1==8 || m1==10){
				var day=31-d+d1;
			}
			else if(m1==2){
				if(y1%4==0){
					var day=29-d+d1;
				}
				else{
					var day=28-d+d1;
				}
			}
			else{
				var day=30-d+d1;
			}
		}
		else if(m1==m && d1<d){
			var year=y1-y-1;
			var month=(11-m)+m1;
			if(m1==1 || m1==3 || m1==5 || m1==7 || m1==8 || m1==10){
				var day=31-d+d1;
			}
			else if(m1==2){
				if(y1%4==0){
					var day=29-d+d1;
				}
				else{
					var day=28-d+d1;
				}
			}
			else{
				var day=30-d+d1;
			}
		}
		else if(m1<m && d1>=d){
			var year=y1-y-1;
			var month=(11-m)+m1;
			var day=d1-d;
		}
		else{
			var year=y1-y-1;
			var month=12+(m1-m);
			if(m1==1 || m1==3 || m1==5 || m1==7 || m1==8 || m1==10){
				var day=31-d+d1;
			}
			else if(m1==2){
				if(y1%4==0){
					var day=29-d+d1;
				}
				else{
					var day=28-d+d1;
				}
			}
			else{
				var day=30-d+d1;
			}
		}
		
		opt.innerHTML=`${year} Years ${month} Months ${day} Days`
		opt.style.color="#fff";
	}
	else{
		opt.innerHTML="Please Enter the correct value"
		opt.style.color="red";
	}
})



