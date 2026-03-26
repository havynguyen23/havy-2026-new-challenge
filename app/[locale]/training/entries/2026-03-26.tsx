import { DiaryEntry } from './types';

export const vi: DiaryEntry = {
  date: '2026-03-26',
  title: 'Testing Approaches & JavaScript: Điều kiện, Vòng lặp & Hàm',
  content: (
    <>
      <p>
        Hôm nay mình học về các Testing Approaches - so sánh cách tiếp cận chủ
        động (proactive) và phản ứng (reactive) trong kiểm thử, cùng với kiểm
        thử dựa trên rủi ro (risk-based testing). Về JavaScript, mình học cách
        điều khiển luồng chương trình với điều kiện, vòng lặp và tổ chức code
        thành các hàm tái sử dụng.
      </p>

      <h4>Software Testing - Ngày 12: Testing Approaches</h4>

      <h4>Proactive vs Reactive Approaches</h4>
      <p>
        Hai cách tiếp cận chính trong kiểm thử phần mềm, khác nhau về{' '}
        <strong>thời điểm</strong> bắt đầu hoạt động kiểm thử.
      </p>

      <h4>Proactive Approach (Chủ động)</h4>
      <p>
        Bắt đầu kiểm thử <strong>càng sớm càng tốt</strong>, ngay từ giai đoạn
        thiết kế và phân tích yêu cầu, trước khi code được viết.
      </p>
      <ul>
        <li>
          <strong>Đặc điểm:</strong> Thiết kế test case dựa trên requirements và
          design documents
        </li>
        <li>
          <strong>Ưu điểm:</strong> Phát hiện lỗi sớm → chi phí sửa thấp, ngăn
          ngừa defect thay vì chỉ tìm defect
        </li>
        <li>
          <strong>Ví dụ:</strong> Review requirements để tìm mâu thuẫn, viết
          test case trước khi code (TDD), review design để phát hiện vấn đề kiến
          trúc
        </li>
        <li>
          <strong>Phương pháp:</strong> Test-Driven Development (TDD), Review
          requirements, Static testing
        </li>
      </ul>

      <h4>Reactive Approach (Phản ứng)</h4>
      <p>
        Bắt đầu kiểm thử <strong>sau khi phần mềm đã được phát triển</strong>,
        tập trung vào việc tìm lỗi trong sản phẩm đã có.
      </p>
      <ul>
        <li>
          <strong>Đặc điểm:</strong> Test dựa trên phần mềm đã hoạt động
        </li>
        <li>
          <strong>Ưu điểm:</strong> Tìm lỗi thực tế trong sản phẩm, phù hợp khi
          requirements thay đổi liên tục
        </li>
        <li>
          <strong>Ví dụ:</strong> Exploratory testing, test sau khi nhận build
          mới, bug hunting
        </li>
        <li>
          <strong>Phương pháp:</strong> Exploratory testing, Error guessing,
          Ad-hoc testing
        </li>
      </ul>

      <h4>So sánh Proactive vs Reactive</h4>
      <pre>
        <code>{`┌──────────────────┬─────────────────────────┬─────────────────────────┐
│                  │ Proactive               │ Reactive                │
├──────────────────┼─────────────────────────┼─────────────────────────┤
│ Thời điểm        │ Sớm (trước khi code)    │ Muộn (sau khi code)     │
│ Mục tiêu         │ Ngăn ngừa defect        │ Tìm defect              │
│ Chi phí sửa lỗi  │ Thấp                    │ Cao                     │
│ Dựa trên         │ Requirements/Design     │ Phần mềm thực tế        │
│ Ví dụ            │ TDD, Review, Static     │ Exploratory, Ad-hoc     │
└──────────────────┴─────────────────────────┴─────────────────────────┘

→ Thực tế: Kết hợp cả hai để đạt hiệu quả tốt nhất!`}</code>
      </pre>

      <h4>Risk-Based Testing</h4>
      <p>
        Là phương pháp <strong>ưu tiên kiểm thử dựa trên mức độ rủi ro</strong>{' '}
        của từng chức năng/module. Tập trung nguồn lực vào những phần có rủi ro
        cao nhất.
      </p>

      <h4>Rủi ro là gì trong testing?</h4>
      <pre>
        <code>{`Rủi ro = Khả năng xảy ra (Likelihood) × Mức độ ảnh hưởng (Impact)

Ví dụ cho ứng dụng e-commerce:
┌─────────────────────┬──────────────┬──────────────┬──────────────┐
│ Chức năng           │ Likelihood   │ Impact       │ Risk Level   │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ Thanh toán          │ Trung bình   │ Rất cao      │ Cao          │
│ Đăng nhập           │ Cao          │ Cao          │ Cao          │
│ Tìm kiếm sản phẩm   │ Trung bình   │ Trung bình   │ Trung bình   │
│ Đổi màu giao diện   │ Thấp         │ Thấp         │ Thấp         │
└─────────────────────┴──────────────┴──────────────┴──────────────┘`}</code>
      </pre>

      <h4>Quy trình Risk-Based Testing</h4>
      <ul>
        <li>
          <strong>Bước 1:</strong> Xác định rủi ro - Liệt kê tất cả chức năng và
          đánh giá rủi ro
        </li>
        <li>
          <strong>Bước 2:</strong> Phân loại rủi ro - Xếp hạng High/Medium/Low
        </li>
        <li>
          <strong>Bước 3:</strong> Phân bổ nguồn lực - Dành nhiều test effort
          cho rủi ro cao
        </li>
        <li>
          <strong>Bước 4:</strong> Test theo thứ tự ưu tiên - Test chức năng rủi
          ro cao trước
        </li>
      </ul>

      <h4>Lợi ích của Risk-Based Testing</h4>
      <ul>
        <li>Tối ưu hóa thời gian và nguồn lực testing</li>
        <li>Đảm bảo các chức năng quan trọng nhất được test kỹ</li>
        <li>Giúp đưa ra quyết định khi thời gian bị giới hạn</li>
        <li>Cung cấp cơ sở để giao tiếp với stakeholders về coverage</li>
      </ul>

      <h4>JavaScript - Ngày 2: Điều kiện, Vòng lặp & Hàm</h4>
      <p>
        Mục tiêu: Điều khiển luồng chương trình với điều kiện và vòng lặp, tổ
        chức code thành các hàm tái sử dụng.
      </p>

      <h4>if/else & switch</h4>
      <pre>
        <code>{`// if/else - Rẽ nhánh cơ bản
const score = 85;

if (score >= 90) {
  console.log("Xuất sắc");
} else if (score >= 70) {
  console.log("Khá");      // ← Kết quả này
} else if (score >= 50) {
  console.log("Trung bình");
} else {
  console.log("Yếu");
}

// Ternary operator - if/else ngắn gọn
const result = score >= 50 ? "Đậu" : "Rớt";
console.log(result); // "Đậu"

// switch - Khi so sánh một giá trị với nhiều trường hợp
const day = "Monday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Ngày làm việc");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Cuối tuần");
    break;
  default:
    console.log("Ngày không hợp lệ");
}

// Logical operators trong điều kiện
const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {       // AND - Cả hai đều đúng
  console.log("Được lái xe");
}
if (age < 13 || age > 65) {          // OR - Một trong hai đúng
  console.log("Giảm giá vé");
}
if (!hasLicense) {                    // NOT - Phủ định
  console.log("Cần bằng lái");
}`}</code>
      </pre>

      <h4>for, while, for...of loops</h4>
      <pre>
        <code>{`// for loop - Khi biết trước số lần lặp
for (let i = 0; i < 5; i++) {
  console.log("Lần lặp:", i); // 0, 1, 2, 3, 4
}

// while loop - Khi không biết trước số lần lặp
let count = 0;
while (count < 3) {
  console.log("Count:", count); // 0, 1, 2
  count++;
}

// do...while - Luôn chạy ít nhất 1 lần
let input;
do {
  input = "valid"; // Giả lập input
  console.log("Đã nhận input");
} while (input === "");

// for...of - Duyệt qua từng phần tử (array, string)
const fruits = ["Táo", "Cam", "Xoài"];
for (const fruit of fruits) {
  console.log(fruit); // "Táo", "Cam", "Xoài"
}

// Duyệt qua string
for (const char of "Hello") {
  console.log(char); // "H", "e", "l", "l", "o"
}

// break và continue
for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // Bỏ qua i = 3
  if (i === 7) break;    // Dừng khi i = 7
  console.log(i);        // 0, 1, 2, 4, 5, 6
}`}</code>
      </pre>

      <h4>Function declarations & expressions</h4>
      <pre>
        <code>{`// Function Declaration - Khai báo hàm
function greet(name) {
  return "Xin chào, " + name + "!";
}
console.log(greet("HaVy")); // "Xin chào, HaVy!"

// Function Expression - Gán hàm vào biến
const add = function(a, b) {
  return a + b;
};
console.log(add(3, 5)); // 8

// Sự khác biệt: Hoisting
// Function declaration được hoisted → gọi trước khi khai báo được
sayHi(); // ✅ Hoạt động!
function sayHi() {
  console.log("Hi!");
}

// Function expression KHÔNG được hoisted
// sayBye(); // ❌ Lỗi: Cannot access before initialization
const sayBye = function() {
  console.log("Bye!");
};

// Default parameters - Giá trị mặc định
function createUser(name, role = "user") {
  return { name, role };
}
console.log(createUser("HaVy"));          // { name: "HaVy", role: "user" }
console.log(createUser("Admin", "admin")); // { name: "Admin", role: "admin" }`}</code>
      </pre>

      <h4>Arrow functions</h4>
      <pre>
        <code>{`// Arrow function - Cú pháp ngắn gọn hơn
const multiply = (a, b) => {
  return a * b;
};

// Rút gọn: Nếu chỉ có 1 expression → bỏ {} và return
const double = (n) => n * 2;
console.log(double(5)); // 10

// Rút gọn: Nếu chỉ có 1 tham số → bỏ ()
const square = n => n * n;
console.log(square(4)); // 16

// Không có tham số → cần ()
const sayHello = () => "Hello!";
console.log(sayHello()); // "Hello!"

// Arrow function với array methods
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

const sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum); // 15`}</code>
      </pre>

      <h4>Scope & Hoisting</h4>
      <pre>
        <code>{`// Global scope - Truy cập được ở mọi nơi
const globalVar = "Tôi là global";

function testScope() {
  // Function scope
  const functionVar = "Tôi là function scope";
  console.log(globalVar);    // ✅ Truy cập được

  if (true) {
    // Block scope
    const blockVar = "Tôi là block scope";
    let blockLet = "Block let";
    var functionScoped = "Var là function scope!";

    console.log(functionVar); // ✅ Truy cập được
    console.log(blockVar);    // ✅ Truy cập được
  }

  console.log(functionScoped); // ✅ var là function scope
  // console.log(blockVar);    // ❌ Lỗi: block scope
  // console.log(blockLet);    // ❌ Lỗi: block scope
}

// Hoisting - JavaScript "đưa" khai báo lên đầu scope
console.log(x);    // undefined (var được hoisted, giá trị thì không)
var x = 5;

// console.log(y); // ❌ ReferenceError (TDZ - Temporal Dead Zone)
let y = 10;

// TDZ (Temporal Dead Zone)
// Vùng từ đầu block đến dòng khai báo let/const
// Truy cập biến trong TDZ → ReferenceError
{
  // TDZ cho myVar bắt đầu ở đây
  // console.log(myVar); // ❌ ReferenceError
  const myVar = "safe"; // TDZ kết thúc
  console.log(myVar);   // ✅ "safe"
}`}</code>
      </pre>

      <p>
        <strong>Nhận xét:</strong> Proactive approach giúp phát hiện lỗi sớm với
        chi phí thấp, trong khi reactive approach tìm lỗi thực tế trong sản phẩm
        - kết hợp cả hai là tốt nhất. Risk-based testing giúp tối ưu nguồn lực
        bằng cách tập trung vào chức năng quan trọng nhất. Về JavaScript, hiểu
        rõ if/else, switch, vòng lặp và đặc biệt là sự khác biệt giữa function
        declaration, expression và arrow function giúp viết code linh hoạt hơn.
        Scope và hoisting là concepts cốt lõi cần nắm vững để tránh bug khó phát
        hiện!
      </p>
    </>
  ),
};

export const en: DiaryEntry = {
  date: '2026-03-26',
  title: 'Testing Approaches & JavaScript: Conditionals, Loops & Functions',
  content: (
    <>
      <p>
        Today I learned about Testing Approaches — comparing proactive vs
        reactive approaches in testing, along with risk-based testing basics. On
        the JavaScript side, I learned how to control program logic with
        conditionals and loops, and organize code into reusable functions.
      </p>

      <h4>Software Testing - Day 12: Testing Approaches</h4>

      <h4>Proactive vs Reactive Approaches</h4>
      <p>
        Two main approaches in software testing, differing in{' '}
        <strong>when</strong> testing activities begin.
      </p>

      <h4>Proactive Approach</h4>
      <p>
        Start testing <strong>as early as possible</strong>, from the design and
        requirements analysis phase, before any code is written.
      </p>
      <ul>
        <li>
          <strong>Characteristics:</strong> Design test cases based on
          requirements and design documents
        </li>
        <li>
          <strong>Advantages:</strong> Detect defects early → lower fix cost,
          prevent defects rather than just finding them
        </li>
        <li>
          <strong>Examples:</strong> Review requirements for contradictions,
          write test cases before code (TDD), review design for architectural
          issues
        </li>
        <li>
          <strong>Methods:</strong> Test-Driven Development (TDD), Requirements
          review, Static testing
        </li>
      </ul>

      <h4>Reactive Approach</h4>
      <p>
        Start testing <strong>after software has been developed</strong>,
        focusing on finding defects in the existing product.
      </p>
      <ul>
        <li>
          <strong>Characteristics:</strong> Test based on working software
        </li>
        <li>
          <strong>Advantages:</strong> Find real defects in the product,
          suitable when requirements change frequently
        </li>
        <li>
          <strong>Examples:</strong> Exploratory testing, testing after
          receiving a new build, bug hunting
        </li>
        <li>
          <strong>Methods:</strong> Exploratory testing, Error guessing, Ad-hoc
          testing
        </li>
      </ul>

      <h4>Comparing Proactive vs Reactive</h4>
      <pre>
        <code>{`┌──────────────────┬─────────────────────────┬─────────────────────────┐
│                  │ Proactive               │ Reactive                │
├──────────────────┼─────────────────────────┼─────────────────────────┤
│ Timing           │ Early (before coding)   │ Late (after coding)     │
│ Goal             │ Prevent defects         │ Find defects            │
│ Fix cost         │ Low                     │ High                    │
│ Based on         │ Requirements/Design     │ Actual software         │
│ Examples         │ TDD, Review, Static     │ Exploratory, Ad-hoc     │
└──────────────────┴─────────────────────────┴─────────────────────────┘

→ In practice: Combine both for the best results!`}</code>
      </pre>

      <h4>Risk-Based Testing</h4>
      <p>
        A method that <strong>prioritizes testing based on risk level</strong>{' '}
        of each feature/module. Focus resources on the highest-risk areas.
      </p>

      <h4>What is risk in testing?</h4>
      <pre>
        <code>{`Risk = Likelihood × Impact

Example for an e-commerce application:
┌─────────────────────┬──────────────┬──────────────┬──────────────┐
│ Feature             │ Likelihood   │ Impact       │ Risk Level   │
├─────────────────────┼──────────────┼──────────────┼──────────────┤
│ Payment             │ Medium       │ Very High    │ High         │
│ Login               │ High         │ High         │ High         │
│ Product Search      │ Medium       │ Medium       │ Medium       │
│ Theme Color Change  │ Low          │ Low          │ Low          │
└─────────────────────┴──────────────┴──────────────┴──────────────┘`}</code>
      </pre>

      <h4>Risk-Based Testing Process</h4>
      <ul>
        <li>
          <strong>Step 1:</strong> Identify risks - List all features and assess
          their risks
        </li>
        <li>
          <strong>Step 2:</strong> Classify risks - Rank as High/Medium/Low
        </li>
        <li>
          <strong>Step 3:</strong> Allocate resources - Dedicate more test
          effort to high risks
        </li>
        <li>
          <strong>Step 4:</strong> Test by priority - Test high-risk features
          first
        </li>
      </ul>

      <h4>Benefits of Risk-Based Testing</h4>
      <ul>
        <li>Optimize testing time and resources</li>
        <li>Ensure the most critical features are thoroughly tested</li>
        <li>Help make decisions when time is limited</li>
        <li>Provide a basis for communicating coverage to stakeholders</li>
      </ul>

      <h4>JavaScript - Day 2: Conditionals, Loops & Functions</h4>
      <p>
        Goal: Control program logic with conditionals and loops, and organize
        code into reusable functions.
      </p>

      <h4>if/else & switch</h4>
      <pre>
        <code>{`// if/else - Basic branching
const score = 85;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 70) {
  console.log("Good");      // ← This result
} else if (score >= 50) {
  console.log("Average");
} else {
  console.log("Poor");
}

// Ternary operator - Short if/else
const result = score >= 50 ? "Pass" : "Fail";
console.log(result); // "Pass"

// switch - When comparing one value against many cases
const day = "Monday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log("Weekday");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;
  default:
    console.log("Invalid day");
}

// Logical operators in conditions
const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {       // AND - Both must be true
  console.log("Can drive");
}
if (age < 13 || age > 65) {          // OR - One must be true
  console.log("Discounted ticket");
}
if (!hasLicense) {                    // NOT - Negation
  console.log("Need a license");
}`}</code>
      </pre>

      <h4>for, while, for...of loops</h4>
      <pre>
        <code>{`// for loop - When you know the number of iterations
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i); // 0, 1, 2, 3, 4
}

// while loop - When you don't know the number of iterations
let count = 0;
while (count < 3) {
  console.log("Count:", count); // 0, 1, 2
  count++;
}

// do...while - Always runs at least once
let input;
do {
  input = "valid"; // Simulated input
  console.log("Received input");
} while (input === "");

// for...of - Iterate over each element (array, string)
const fruits = ["Apple", "Orange", "Mango"];
for (const fruit of fruits) {
  console.log(fruit); // "Apple", "Orange", "Mango"
}

// Iterate over a string
for (const char of "Hello") {
  console.log(char); // "H", "e", "l", "l", "o"
}

// break and continue
for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // Skip i = 3
  if (i === 7) break;    // Stop at i = 7
  console.log(i);        // 0, 1, 2, 4, 5, 6
}`}</code>
      </pre>

      <h4>Function declarations & expressions</h4>
      <pre>
        <code>{`// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("HaVy")); // "Hello, HaVy!"

// Function Expression - Assign a function to a variable
const add = function(a, b) {
  return a + b;
};
console.log(add(3, 5)); // 8

// The difference: Hoisting
// Function declarations are hoisted → can be called before declaration
sayHi(); // ✅ Works!
function sayHi() {
  console.log("Hi!");
}

// Function expressions are NOT hoisted
// sayBye(); // ❌ Error: Cannot access before initialization
const sayBye = function() {
  console.log("Bye!");
};

// Default parameters
function createUser(name, role = "user") {
  return { name, role };
}
console.log(createUser("HaVy"));          // { name: "HaVy", role: "user" }
console.log(createUser("Admin", "admin")); // { name: "Admin", role: "admin" }`}</code>
      </pre>

      <h4>Arrow functions</h4>
      <pre>
        <code>{`// Arrow function - Shorter syntax
const multiply = (a, b) => {
  return a * b;
};

// Shorthand: Single expression → omit {} and return
const double = (n) => n * 2;
console.log(double(5)); // 10

// Shorthand: Single parameter → omit ()
const square = n => n * n;
console.log(square(4)); // 16

// No parameters → need ()
const sayHello = () => "Hello!";
console.log(sayHello()); // "Hello!"

// Arrow functions with array methods
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

const sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum); // 15`}</code>
      </pre>

      <h4>Scope & Hoisting</h4>
      <pre>
        <code>{`// Global scope - Accessible everywhere
const globalVar = "I am global";

function testScope() {
  // Function scope
  const functionVar = "I am function scope";
  console.log(globalVar);    // ✅ Accessible

  if (true) {
    // Block scope
    const blockVar = "I am block scope";
    let blockLet = "Block let";
    var functionScoped = "var is function scope!";

    console.log(functionVar); // ✅ Accessible
    console.log(blockVar);    // ✅ Accessible
  }

  console.log(functionScoped); // ✅ var is function scope
  // console.log(blockVar);    // ❌ Error: block scope
  // console.log(blockLet);    // ❌ Error: block scope
}

// Hoisting - JavaScript "moves" declarations to the top of scope
console.log(x);    // undefined (var is hoisted, value is not)
var x = 5;

// console.log(y); // ❌ ReferenceError (TDZ - Temporal Dead Zone)
let y = 10;

// TDZ (Temporal Dead Zone)
// The zone from the start of a block to the declaration line
// Accessing a variable in the TDZ → ReferenceError
{
  // TDZ for myVar starts here
  // console.log(myVar); // ❌ ReferenceError
  const myVar = "safe"; // TDZ ends
  console.log(myVar);   // ✅ "safe"
}`}</code>
      </pre>

      <p>
        <strong>Takeaway:</strong> The proactive approach catches defects early
        at low cost, while the reactive approach finds real defects in the
        product — combining both yields the best results. Risk-based testing
        optimizes resources by focusing on the most critical features. For
        JavaScript, understanding if/else, switch, loops, and especially the
        differences between function declarations, expressions, and arrow
        functions enables writing more flexible code. Scope and hoisting are
        core concepts to master for avoiding hard-to-find bugs!
      </p>
    </>
  ),
};
