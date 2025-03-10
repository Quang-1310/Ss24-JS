let chosse;
let arr;
let stringArr;
do{
    chosse = +prompt(`        ============ MENU =============
        1. Nhập chuỗi
        2. Hiển thị chuỗi
        3.Tính độ dài của chuỗi
        4.Đếm số lần xuất hiện của một ký tự (Người dùng nhập) trong chuỗi
        5.Kiểm tra chuỗi có phải là chuỗi đối xứng không
        6.Chuyển đổi chuỗi thành chữ in hoa các ký tự đầu tiên của từ
        7:Thoát chương trình`);
    switch (chosse){
        case 1:
            stringArr = prompt("Mời bạn nhập vào 1 chuỗi"); 
            break;
        case 2:
            console.log(stringArr);
            break;
        case 3:
            arr = stringArr.split("");
            let sizeString = arr.length;
            console.log(`Độ dài của chuỗi gồm ${sizeString} ký tự`);
            break;
        case 4:
            let char = prompt("Mời bạn nhập vào 1 ký tự cần thống kê");
            let count = 0;
            let flag = -1;
            for(let i = 0; i < arr.length; i++){
                if(arr[i] === char){
                    flag = 1;
                    count++;
                }
            }
            if(flag === -1){
                console.log("Ký tự bạn cần thống kê không có trong mảng");
            }
            else{
                console.log(`Ký tự bạn nhập xuất hiện ${count} lần`);
            }
            break;
        case 5:
            let arrSymmetry = [];
            let flag1 = -1;
            for(let i = arr.length - 1; i >= 0; i--){
                arrSymmetry.push(arr[i]);
            }
            for(let i = 0; i < arr.length; i++){
                if(arr[i] !== arrSymmetry[i]){
                    console.log("Chuỗi không đối xứng");
                    flag1 = 1;
                    break;
                }
            }
            if(flag1 === -1){
                console.log("Chuỗi đối xứng");
            }
            break;

        case 6:
            case 6:
                let originalString = stringArr.trim(); 
                let result = "";
                for(let i = 0; i < originalString.length; i++){
                    if(i === 0 || originalString[i - 1] === " "){
                        result += originalString[i].toUpperCase();  
                    } 
                    else{
                        result += originalString[i].toLocaleLowerCase(); 
                    }
                }
                console.log(result);
                break;

            case 7:
                break;
        default:
            alert("Lựa chọn nhập không hợp lệ");
    }

}while(chosse !== 7);




