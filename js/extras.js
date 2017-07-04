function get_val(name)
{
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results)
	return results[1] || 0;
}

function sms_confirmation_data(phone,addr)
{
    var sms_cd=$.ajax( {
		url: "https://sms.report/api/?phone="+encodeURIComponent(phone)+"&currency=SIB&addr="+addr+"&s=perevod.io",
		type: "GET",
		async: false
	    }).responseText;
    if (sms_cd)
    {
	try
	{
	    sms_cd=JSON.parse(sms_cd);
	}
	catch (e)
	{
	    return;
	}
	return sms_cd;
    }
}

function sms_confirmation_data_sync(phone,addr,f)
{
    $.ajax( {
		url: "https://sib.report/api/?phone="+encodeURIComponent(phone)+"&currency=SIB&addr="+addr+"&s=perevod.io",
		type: "GET",
		success: function(data) {
		    try
		    {
			var sms_cd=JSON.parse(data);
		    }
		    catch (e)
		    {
			return;
		    }
		    f(sms_cd);
		}
	    });
}

