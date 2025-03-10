let chosse;
let arr;
let arrEven = [];
let arrOdd = [];
do{
    chosse = +prompt(`        ============ MENU =============
        1:Nhập mảng số nguyên
        2:Hiển thị mảng
        3:Tìm các phần tử chẵn và lẻ
        4:Tính trung bình cộng của mảng
        5:Xóa phần tử tại vị trí chỉ định
        6:Tìm phần tử lớn thứ hai trong mảng
        7: Thoát chương trình`);
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
            for(let i = 0 ; i < arr.length; i++){
                if(+arr[i] % 2 === 0){
                    arrEven.push(arr[i]);
                }
                else{
                    arrOdd.push(arr[i]);
                }
            }
            console.log(`Các phần tử chẵn có trong mảng là: ${arrEven}`);
            console.log(`Các phần tử lẻ có trong mảng là: ${arrOdd}`);
            break;
        case 4:
            let total = 0;
            for(let i = 0; i < arr.length; i++){
                total += +arr[i];
            }
            console.log(`Trung bình cộng các phần tử trong mảng là: ${total / arr.length}`);
            break;
        case 5:
            let indexNumberDele = +prompt("Mời bạn nhập vị trí phần tử cần xoá");
                if(indexNumberDele <= arr.length){
                    arr.splice(indexNumberDele - 1,1);
                }
                else{
                    console.log("Vị trí nhập không hợp lệ")
                }
            break;

        case 6:
            let max1 = arr[0];
            let max2 = 0;
            for(let i = 1; i < arr.length; i++){
                if(arr[i] > max1){
                    max2 = max1;
                    max1 = arr[i]
                }
                else if(arr[i] > max2){
                    max2 = arr[i];
                }
            }
            console.log(`Phần tử lớn thứ 2 trong mảng là ${max2}`);
            break;

            case 7:
                break;
        default:
            alert("Lựa chọn nhập không hợp lệ");
    }

}while(chosse !== 7);




