// Bài Tập 1: Tính Hóa Đơn Mua Sắm
let price = parseFloat(prompt("Nhập giá sản phẩm:"));
let quantity = parseInt(prompt("Nhập số lượng:"));
let total = price * quantity;
total -= total * 0.1; // giảm giá 10%
total += total * 0.05; // thuế VAT 5%
console.log("Tổng hóa đơn sau giảm giá + VAT là:", total);

// Bài Tập 2: Kiểm Tra Số Chẵn/Lẻ
let number = parseInt(prompt("Nhập một số:"));
if (number % 2 === 0) {
  console.log(number + " là số Chẵn");
} else {
  console.log(number + " là số Lẻ");
}

// Bài Tập 3: Máy Tính BMI
let weight = parseFloat(prompt("Nhập cân nặng (kg):"));
let height = parseFloat(prompt("Nhập chiều cao (m):"));
let bmi = weight / (height * height);
if (bmi < 18.5) {
  console.log("BMI =", bmi.toFixed(2), "→ Gầy");
} else if (bmi >= 25) {
  console.log("BMI =", bmi.toFixed(2), "→ Béo");
} else {
  console.log("BMI =", bmi.toFixed(2), "→ Bình thường");
}

// Bài Tập 4: Kiểm Tra Đăng Nhập
let username = prompt("Nhập username:");
let password = prompt("Nhập password:");
if (username === "admin" && password === "123") {
  console.log("Đăng nhập thành công");
} else {
  console.log("Sai username hoặc password");
}

// Bài Tập 5: Kiểm Tra Năm Nhuận
let year = parseInt(prompt("Nhập năm:"));
if (year > 0) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(year + " là năm nhuận");
  } else {
    console.log(year + " không phải là năm nhuận");
  }
} else {
  console.log("Vui lòng nhập năm > 0");
}
