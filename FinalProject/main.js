function message(){
	
    var message = "Please insert 'ocean' or 'mountain'";
    var result = prompt(message);
    switch(result){
        case 'ocean':
            alert("좌측 Ocean에서 속초, 고성에 대해 소개하고 있습니다.");
            break;
        case 'mountain':
            alert("좌측 Mountain에서 인제, 남해, 단양에 대해 소개하고 있습니다.");
            break;
        default:
            alert("재입력 부탁드립니다.");
    }
}
