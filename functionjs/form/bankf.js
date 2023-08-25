
function bank_discount()
{
	var name=document.f1.fname.value +"  "+document.f1.lname.value;
	document.f1.fullname.value=name;


	var disjs=document.f1.dis.value;
	var amt=parseInt(document.f1.billamt.value)
	if(disjs=="Axis Bank 20%")
	{
		document.f1.discount_amt.value=amt*0.20;

	}
	if(disjs=="HDFC Bank 30%")
	{
		document.f1.discount_amt.value=amt*0.30;
		
	}
	if(disjs=="ICIC Bank 10%")
	{
		document.f1.discount_amt.value=amt*0.10;

	}
	var discount=parseInt(f1.discount_amt.value)
	document.f1.fb_amt.value=amt-discount;


}

