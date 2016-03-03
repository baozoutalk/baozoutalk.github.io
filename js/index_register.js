//校验注册表单
function checkRegisterForm()
{
	//用户名
	var user_name = $('#fast_user_name').val();
	if(user_name.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) == null)
	{
		alert('请填写正确的邮箱地址');
		return false;
	}	
	//密码
	var password = $('#fast_password').val();
	if(password == "")
	{
		alert('密码不能为空');
		return false;		
	}	
	if(password.length < 6 || password.length > 20)
	{
		alert('密码长度应在6-20位之间');
		return false;			
	}
    //mobile
	var mobile = $('#fast_mobile').val();
	if(mobile.match(/^1[0-9]{10}$/) == null)
	{
		alert('请填写正确的手机号码');
		return false;	
	}
	else{
		return true;
		}
    //推荐人的手机号码是否合法,合法返回true提交，不合法返回false取消提交
	//return validate_recommen_mobile();
	
}
function validate_recommen_mobile() {
    var mobile = $('#fast_mobile').val();
    var recommenMobile = trimStr($('#recommen_mobile').val())||'没有推荐人请留空';
    if(recommenMobile != '' && recommenMobile != '没有推荐人请留空' && recommenMobile != '推荐人手机号没有请留空'){
        if(recommenMobile.match(/^1[0-9]{10}$/) == null && recommenMobile.toLowerCase() != 'dcm' && recommenMobile!='1335151') {
            alert('请填写正确的推荐人手机号码，没有推荐人请留空！');
            return false;
        }else if(mobile == recommenMobile){
            alert('推荐人手机号不可以写自己的手机号哦，亲！');
            return false;
        }else{
            return true;
        }
    }else{
        return true;
    }
}


//去掉前后空格
function trimStr(value) {
    return value.replace(/(^\s*)|(\s*$)/g, "");
}