// 유효성 검증 - 입력을 정확하게 하도록 제한하는 절차
function checkMember(){
    var form = document.regForm;
    var id = form.memberid.value;
    var pwd1 = form.passwd.value;
    var pwd2 = form.passwd_confirm.value;
    var name = form.name.value;
    var age = form.age.value;
    var date = form.reg_date.value;

    var regEx = /^[0-9A-Za-z]{4,8}$/;

    if(id.length != 5){
        alert("아이디는 5자만 입력 가능합니다.");
        form.id.select();
        return false;
    }else if(!regEx.test(pwd1)){
        alert("비밀번호는 4자에서 8자까지 영문과 숫자를 포함해서 입력해주세요.");
        form.pwd1.select();
        return false;
    }else if(pwd1 != pwd2){
        alert("비밀번호를 동일하게 입력해주세요.");
        form.pwd2.select();
        return false;
    }else if(name == ""){
        alert("이름은 필수 입력 항목입니다.");
        form.name.focus();
        return false;
    }else if(date == ""){
        alert("가입일은 필수 입력 항목입니다.");
        form.date.focus();
        return false;
    }else{
        form.submit();
    }
}