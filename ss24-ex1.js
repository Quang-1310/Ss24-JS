let chosse;
let arr;
do{
    chosse = +prompt(`        ============ MENU =============
        1:Nhập mảng 
        2:Hiển thị mảng
        3:Tìm phần tử lớn nhất và nhỏ nhất trong mảng
        4:Tính tổng các phần tử trong mảng
        5:Tìm số lần xuất hiện của một phần tử trong mảng 
        6:Sắp xếp mảng theo thứ tự tăng dần 
        0: Thoát chương trình`);
    switch (chosse){
        case 1:
            let sizeArr = +prompt("Mời bạn nhập số lượng phần tử");
            let stringArr = prompt("Mời bạn nhập các phần tử cách nhau bằng dấu ','"); 
            arr = stringArr.split(",");
            break;
        case 2:
            console.log(arr);
            break;
        case 3:
            let temp;
            for(let i = 0; i < arr.length; i++){
                for(let j = i + 1; j <= arr.length - 1; j++){
                    if(arr[j] < arr[i]){
                        temp = arr[j];
                        arr[j] = arr[i];
                        arr[i] = temp;
                    }
                }
            }
            console.log(`Số lớn nhất trong mảng là ${arr[0]}`);
            console.log(`Số nhỏ nhất trong mảng là ${arr[arr.length - 1]}`);
            break;
        case 4:
            let total = 0;
            for(let i = 0; i < arr.length; i++){
                total += +arr[i];
            }
            console.log(`Tổng các phần tử trong mảng là: ${total}`);
            break;
        case 5:
            let searchNumber = +prompt("Mời bạn nhập phần tử cần thống kê");
            let count = 0;
            for(let i = 0; i < arr.length; i++){
                if(+arr[i] === searchNumber){
                    count++;
                }
            }
            if(count === 0){
                console.log("Số bạn cần thống kê không có trong mảng")
            }
            else{
                console.log(`Số ${searchNumber} xuất hiện ${count} lần`)
            }
            break;

        case 6:
            let tempoary;
            for(let i = 0; i < arr.length; i++){
                for(let j = i + 1; j <= arr.length - 1; j++){
                    if(arr[j] < arr[i]){
                        tempoary = arr[j];
                        arr[j] = arr[i];
                        arr[i] = tempoary;
                    }
                }
            }
            break;

            case 0:
                break;
        default:
            alert("Lựa chọn nhập không hợp lệ");
    }

}while(chosse !== 0);




