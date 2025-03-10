let matrix = [];
let rows;
let cols;
do{
    chosse = +prompt(`        ============ MENU =============
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó
        5. Tính trung bình cộng các phần tử của một hàng cụ thể
        6. Đảo ngược các hàng trong mảng
        7. Thoát chương trình`);
        switch(chosse){
            case 1:
                rows = +prompt("Mời bạn nhập số hàng");
                cols = +prompt("Mời bạn nhập số cột");
                for(let i = 0; i < rows; i++){
                    let td = [];
                    for(let j = 0; j < cols; j++){
                        let number = +prompt("Mời nhập phần tử: ");
                        td.push(number);
                    }
                    matrix.push(td);
                }    
                break;

            case 2:
                console.log(matrix);
                break; 
            
            case 3:
                let total = 0;
                for(let i = 0; i < rows; i++){
                    for(let j = 0; j < cols; j++){
                        total += +matrix[i][j];
                    }
                }
                console.log(`Tổng các phần tử có trong mảng là: ${total}`);
                break;
            case 4:
                let max = matrix[0][0];
                let indexRow = 0;
                let indexCol = 0;
                for(let i = 0; i < rows; i++){
                    for(let j = 0; j < cols; j++){
                        if(matrix[i][j] > max){
                            max = matrix[i][j];
                            indexRow = i; 
                            indexCol = j;
                        }
                    }
                }
                console.log(`Phần tử lớn nhất là: ${max} ở hàng: ${indexRow} cột: ${indexCol}`);
                break;

            case 5:
                let numberRow = +prompt("Mời bạn nhập hàng cần tính ");
                let sumOfRow = 0;
                for(let j = 0; j < cols; j++){
                    sumOfRow += matrix[numberRow][j];
                }
                console.log(`Trung bình cộng các phần tử ở hàng ${numberRow} bằng: ${sumOfRow / cols}`);
                break;

            case 6:
                let matrixReverse = [];
                for(let i = 0; i < rows; i++){
                    matrixReverse.push(matrix[i].reverse());
                }         
                console.log(matrixReverse);
        }
}while(chosse !== 7);
