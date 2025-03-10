let matrix = [];
let rows;
let cols;
do{
    chosse = +prompt(`        ============ MENU =============
        1. Nhập mảng 2 chiều
        2. Hiển thị mảng 2 chiều
        3. Tính tổng các phần tử trong mảng
        4. Tính tổng đường chéo chính
        5. Tính tổng đường chéo phụ
        6. Tính trung bình cộng các phần tử trong một hàng hoặc một cột (Người dùng chọn hàng hoặc cột cần tính toán)
        7. Thoát chương trình`);
        switch(chosse){
            case 1:
                rows = +prompt("Mời bạn nhập số hàng");
                cols = +prompt("Mời bạn nhập số cột");
                for(let i = 0; i < rows; i++){
                    let data = [];
                    for(let j = 0; j < cols; j++){
                        let inputNumber = +prompt("Mời bạn nhập phần tử");
                        data.push(inputNumber);
                    }
                    matrix.push(data);
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
                let totalMainDiagonal = 0;
                for(let i = 0; i < rows; i++){
                    for(let j = 0; j < cols; j++){
                        if(i === j){
                            totalMainDiagonal += +matrix[i][j];
                        }
                    }
                }
                console.log(`Tổng các phần tử trên đường chéo chính là: ${totalMainDiagonal}`);
                break;

            case 5:
                let totalSubdiagonal = 0;
                for(let i = 0; i < rows; i++){
                    for(let j = 0; j < cols; j++){
                        if(i + j === rows - 1){
                            totalSubdiagonal += +matrix[i][j];
                        }
                    }
                }
                console.log(`Tổng các phần tử trên đường chéo phụ là: ${totalSubdiagonal}`);
                break;

            case 6:
                let averageOfRow = 0;
                let averageOfCol = 0;           
                let input = prompt("Bạn muốn tính tổng hàng hay cột (hàng-cột)");
                let numberRowOrCol = 0;
                if(input === "hàng"){
                    numberRowOrCol = +prompt("Bạn muốn tính tổng ở hàng thứ mấy");
                    for(let j = 0; j < cols; j++){
                        averageOfRow += matrix[numberRowOrCol][j];
                    }
                    averageOfRow = averageOfRow / cols;
                    console.log(`Trung bình cộng các phần tử ở hàng ${numberRowOrCol} bằng: ${averageOfRow}`);
                }
                else if(input === "cột"){
                    numberRowOrCol = +prompt("Bạn muốn tính tổng ở cột thứ mấy");
                    for(let i = 0; i < rows; i++){
                        averageOfCol += matrix[i][numberRowOrCol];
                    }
                    averageOfCol = averageOfCol / rows;
                    console.log(`Trung bình cộng các phần tử ở cột ${numberRowOrCol} bằng: ${averageOfCol}`);
                }

 
                break;
        }
}while(chosse !== 7);
