function setMilkRate()
{
	var tomjs=document.f1.tom.value;

	if(tomjs=="Cow")
	{
		document.f1.rate.value=40;
	}
	if(tomjs=="Buffalo")
	{
		document.f1.rate.value=50;
	}
}//end of function

function bill()
{
	var rate=parseInt(document.f1.rate.value);
	var qty=parseInt(document.f1.qty.value);

	var bill=rate * qty;
	document.f1.billamt.value=bill;

}