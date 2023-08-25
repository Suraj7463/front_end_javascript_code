function Airline()
{
	var tomjs=document.f1.tom.value;
	if(tomjs=="OSr Citizen")
	{
		document.f1.rate.value=4000;
	}
	if(tomjs=="OAdult")
	{
		document.f1.rate.value=10000;
	}
	if(tomjs=="OKid")
	{
		document.f1.rate.value=7000;
	}
	
}
function cost()
{
	var rate=parseInt(document.f1.rate.value);

	var passenger=parseInt(document.f1.passenger.value);
	var cost=rate * passenger;
	document.f1.amtcost.value=cost;
}
function gcost()
{
	var samjs=document.f1.sam.value;
	if(samjs=="OCGST")
	{
		var sam=document.f1.sam.value=20;
		var amtcost=parseInt(document.f1.amtcost.value);
		var gcost= sam * amtcost/100;
		var gstcost=gcost+amtcost;
		document.f1.tcost.value=gstcost;

	}
	if(samjs=="OSGST")
	{
		var sam=document.f1.sam.value=20;
		var amtcost=parseInt(document.f1.amtcost.value);
		var gcost= sam * amtcost/100;
		var gstcost=gcost+amtcost;
		document.f1.tcost.value=gstcost;
	}
	if(samjs=="OBoth")
	{
		var sam=document.f1.sam.value=40;
		var amtcost=parseInt(document.f1.amtcost.value);
		var gcost= sam * amtcost/100;
		var gstcost=gcost+amtcost;
		document.f1.tcost.value=gstcost;
	}
}
