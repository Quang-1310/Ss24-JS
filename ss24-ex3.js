let chosse;
let arr;
let arrEven = [];
let arrOdd = [];
do{
    chosse = +prompt(`        ============ MENU =============
        1:Nhập mảng số nguyên
        2:Hiển thị mảng
        3:Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó
        4:Tính tổng và trung bình cộng của các số dương trong mảng
        5:Đảo ngược mảng
        6:Kiểm tra mảng có đối xứng không
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
            let max = arr[0];
            let indexNumberMax = 0;
            for(let i = 1; i < arr.length; i++){    
                if(arr[i] > max){
                    max = arr[i];
                    indexNumberMax = i;
                }
            }
            console.log(`Phần tử lớn nhất trong mảng là: ${max}`);
            console.log(`Vị trí của phần tử lớn nhất trong mảng là: ${indexNumberMax}`);
            break;
        case 4:
            let total = 0;
            for(let i = 0; i < arr.length; i++){
                total += +arr[i];
            }
            console.log(`Tổng các phần tử trong mảng là: ${total}`);
            console.log(`Trung bình cộng các phần tử trong mảng là: ${total / arr.length}`);
            break;
        case 5:
            let arrReverse = [];
            flag = -1;
            for(let i = arr.length - 1; i >= 0; i--){
                arrReverse.push(arr[i]);
            }
            console.log(`Mảng đảo ngược là: ${arrReverse}`);

        case 6:
            let arrSymmetry = [];
            flag = -1;
            for(let i = arr.length - 1; i >= 0; i--){
                arrSymmetry.push(arr[i]);
            }
            for(let i = 0; i < arr.length; i++){
                if(+arr[i] !== +arrSymmetry[i]){
                    console.log("Mảng không đối xứng");
                    flag = 1;
                    break;
                }
            }
            if(flag === -1){
                console.log("Mảng đối xứng");
            }

            case 7:
                break;
        default:
            alert("Lựa chọn nhập không hợp lệ");
    }

}while(chosse !== 7);




