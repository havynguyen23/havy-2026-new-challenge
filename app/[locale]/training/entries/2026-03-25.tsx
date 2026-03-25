import { DiaryEntry } from './types';

export const vi: DiaryEntry = {
  date: '2026-03-25',
  title: 'Testing Levels & JavaScript: Ngày đầu tiên với JS',
  content: (
    <>
      <p>
        Hôm nay mình tìm hiểu sâu về các Testing Levels - hệ thống phân cấp các
        mức độ kiểm thử trong phần mềm, và thực hành xác định mức nào phù hợp
        cho từng tình huống. Về lập trình, đây là ngày đầu tiên mình học
        JavaScript - tìm hiểu cách lưu trữ và làm việc với dữ liệu.
      </p>

      <h4>Software Testing - Ngày 11: Testing Levels</h4>

      <h4>Testing Levels là gì?</h4>
      <p>
        Testing levels là các <strong>giai đoạn kiểm thử</strong> được thực hiện
        ở các mức độ khác nhau trong quá trình phát triển phần mềm. Mỗi level
        tập trung vào một phạm vi cụ thể, từ nhỏ nhất (component) đến lớn nhất
        (toàn hệ thống).
      </p>

      <h4>4 Testing Levels chính</h4>
      <pre>
        <code>{`┌─────────────────────────────────────────────────────┐
│              Acceptance Testing                     │  ← Người dùng/khách hàng
│  ┌─────────────────────────────────────────────┐    │
│  │           System Testing                    │    │  ← Toàn bộ hệ thống
│  │  ┌─────────────────────────────────────┐    │    │
│  │  │      Integration Testing            │    │    │  ← Kết hợp modules
│  │  │  ┌─────────────────────────────┐    │    │    │
│  │  │  │      Unit Testing           │    │    │    │  ← Từng component
│  │  │  └─────────────────────────────┘    │    │    │
│  │  └─────────────────────────────────────┘    │    │
│  └─────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘`}</code>
      </pre>

      <h4>1. Unit Testing (Component Testing)</h4>
      <p>
        Kiểm thử <strong>từng đơn vị nhỏ nhất</strong> của phần mềm một cách độc
        lập - thường là một function, method hoặc class.
      </p>
      <ul>
        <li>
          <strong>Ai thực hiện:</strong> Developer
        </li>
        <li>
          <strong>Khi nào:</strong> Trong quá trình code (sớm nhất)
        </li>
        <li>
          <strong>Mục đích:</strong> Đảm bảo mỗi đơn vị hoạt động đúng logic
        </li>
        <li>
          <strong>Ví dụ:</strong> Test function tính tổng giỏ hàng, test
          validation email, test format ngày tháng
        </li>
        <li>
          <strong>Công cụ:</strong> Jest, JUnit, NUnit, PyTest
        </li>
        <li>
          <strong>Đặc điểm:</strong> Nhanh, isolated, dễ debug, số lượng nhiều
          nhất
        </li>
      </ul>

      <h4>2. Integration Testing</h4>
      <p>
        Kiểm thử <strong>sự tương tác giữa các module/component</strong> khi
        chúng được kết hợp với nhau.
      </p>
      <ul>
        <li>
          <strong>Ai thực hiện:</strong> Developer hoặc Tester
        </li>
        <li>
          <strong>Khi nào:</strong> Sau khi các unit đã pass unit test
        </li>
        <li>
          <strong>Mục đích:</strong> Phát hiện lỗi interface, data flow giữa các
          module
        </li>
        <li>
          <strong>Ví dụ:</strong> Test API endpoint kết nối với database, test
          form submit gửi data đến server, test module thanh toán tương tác với
          module giỏ hàng
        </li>
        <li>
          <strong>Công cụ:</strong> Postman, Supertest, TestContainers
        </li>
      </ul>

      <h4>Các chiến lược Integration Testing</h4>
      <pre>
        <code>{`Big Bang: Kết hợp tất cả modules cùng lúc rồi test
  → Đơn giản nhưng khó xác định lỗi ở đâu

Top-Down: Test từ module cấp cao xuống thấp
  → Dùng stubs thay thế module cấp thấp chưa sẵn sàng
  → Phát hiện lỗi kiến trúc sớm

Bottom-Up: Test từ module cấp thấp lên cao
  → Dùng drivers để gọi module cấp thấp
  → Module cấp thấp được test kỹ trước

Sandwich (Hybrid): Kết hợp Top-Down và Bottom-Up
  → Linh hoạt nhưng phức tạp hơn`}</code>
      </pre>

      <h4>3. System Testing</h4>
      <p>
        Kiểm thử <strong>toàn bộ hệ thống</strong> đã tích hợp hoàn chỉnh, đánh
        giá hệ thống có đáp ứng yêu cầu đặc tả hay không.
      </p>
      <ul>
        <li>
          <strong>Ai thực hiện:</strong> Tester (QA team)
        </li>
        <li>
          <strong>Khi nào:</strong> Sau khi integration testing hoàn tất
        </li>
        <li>
          <strong>Mục đích:</strong> Đánh giá hệ thống end-to-end theo yêu cầu
        </li>
        <li>
          <strong>Bao gồm:</strong> Functional testing, performance testing,
          security testing, usability testing
        </li>
        <li>
          <strong>Ví dụ:</strong> Test toàn bộ flow đặt hàng từ đăng nhập → chọn
          sản phẩm → thanh toán → nhận xác nhận
        </li>
        <li>
          <strong>Công cụ:</strong> Selenium, Cypress, Playwright
        </li>
        <li>
          <strong>Đặc điểm:</strong> Chậm hơn, môi trường giống production,
          black-box testing
        </li>
      </ul>

      <h4>4. Acceptance Testing (UAT)</h4>
      <p>
        Kiểm thử để xác nhận hệ thống <strong>đáp ứng nhu cầu nghiệp vụ</strong>{' '}
        và sẵn sàng để triển khai.
      </p>
      <ul>
        <li>
          <strong>Ai thực hiện:</strong> Khách hàng, end-users, hoặc Product
          Owner
        </li>
        <li>
          <strong>Khi nào:</strong> Sau system testing, trước khi release
        </li>
        <li>
          <strong>Mục đích:</strong> Xác nhận sản phẩm giải quyết đúng vấn đề
          nghiệp vụ
        </li>
        <li>
          <strong>Các loại:</strong>
        </li>
      </ul>
      <pre>
        <code>{`User Acceptance Testing (UAT):
  → Người dùng thực tế test sản phẩm
  → "App này có giúp tôi đặt đồ ăn dễ dàng không?"

Operational Acceptance Testing (OAT):
  → Test vận hành: backup, recovery, maintenance
  → "Hệ thống có hoạt động ổn định khi deploy không?"

Contract/Regulation Acceptance Testing:
  → Kiểm tra theo hợp đồng hoặc quy định pháp lý
  → "Sản phẩm có tuân thủ GDPR không?"

Alpha Testing: Test nội bộ trong môi trường dev
Beta Testing: Test bởi người dùng thực trong môi trường thực`}</code>
      </pre>

      <h4>So sánh 4 Testing Levels</h4>
      <pre>
        <code>{`┌──────────────┬─────────────┬───────────────────┬──────────────────┐
│ Level        │ Ai test     │ Test cái gì       │ Mục đích         │
├──────────────┼─────────────┼───────────────────┼──────────────────┤
│ Unit         │ Developer   │ Function/class    │ Logic đúng       │
│ Integration  │ Dev/Tester  │ Kết hợp modules   │ Interface đúng   │
│ System       │ QA Team     │ Toàn bộ hệ thống  │ Đáp ứng spec     │
│ Acceptance   │ User/Client │ Sản phẩm cuối     │ Đáp ứng nhu cầu  │
└──────────────┴─────────────┴───────────────────┴──────────────────┘`}</code>
      </pre>

      <h4>Thực hành - Xác định Testing Level</h4>
      <p>Cho các tình huống sau, xác định nên áp dụng testing level nào:</p>
      <ul>
        <li>
          <strong>Tình huống 1:</strong> Kiểm tra function calculateDiscount()
          trả về đúng giá trị → <em>Unit Testing</em>
        </li>
        <li>
          <strong>Tình huống 2:</strong> Kiểm tra form đăng ký gửi data đến API
          và lưu vào database → <em>Integration Testing</em>
        </li>
        <li>
          <strong>Tình huống 3:</strong> Khách hàng dùng thử app và xác nhận
          flow phù hợp với nghiệp vụ → <em>Acceptance Testing</em>
        </li>
        <li>
          <strong>Tình huống 4:</strong> Test toàn bộ flow mua hàng trên staging
          environment → <em>System Testing</em>
        </li>
        <li>
          <strong>Tình huống 5:</strong> Kiểm tra module payment gọi đúng API
          của bên thứ ba → <em>Integration Testing</em>
        </li>
      </ul>

      <h4>JavaScript - Ngày 1: Nền tảng JavaScript</h4>
      <p>
        Mục tiêu: Hiểu các khối xây dựng cơ bản của JavaScript - cách lưu trữ và
        làm việc với dữ liệu.
      </p>

      <h4>Khai báo biến: var, let, const</h4>
      <pre>
        <code>{`// var - cách cũ, function-scoped, có hoisting
var name = "HaVy";
var name = "HaVy 2"; // Được phép khai báo lại
name = "HaVy 3";     // Được phép gán lại

// let - cách mới, block-scoped
let age = 25;
// let age = 30;    // ❌ Lỗi: không được khai báo lại
age = 30;           // ✅ Được phép gán lại

// const - hằng số, block-scoped
const PI = 3.14159;
// PI = 3.14;       // ❌ Lỗi: không được gán lại
// const PI = 3;    // ❌ Lỗi: không được khai báo lại

// ⚠️ const với object/array - giá trị bên trong vẫn thay đổi được
const user = { name: "HaVy" };
user.name = "HaVy 2";   // ✅ Được phép
// user = {};           // ❌ Lỗi: không được gán lại reference`}</code>
      </pre>

      <h4>So sánh var, let, const</h4>
      <pre>
        <code>{`┌──────────────┬────────────────┬─────────────┬───────────────┐
│              │    var         │    let      │   const       │
├──────────────┼────────────────┼─────────────┼───────────────┤
│ Scope        │ Function       │ Block       │ Block         │
│ Hoisting     │ Có (undefined) │ Có (TDZ)    │ Có (TDZ)      │
│ Khai báo lại │ ✅ Được        │ ❌ Không     │ ❌ Không      │
│ Gán lại      │ ✅ Được        │ ✅ Được      │ ❌ Không      │
│ Nên dùng?    │ ❌ Tránh       │ ✅ Khi cần   │ ✅ Mặc định   │
└──────────────┴────────────────┴─────────────┴───────────────┘

Quy tắc: Luôn dùng const trước. Chỉ dùng let khi cần gán lại. Không dùng var.`}</code>
      </pre>

      <h4>Kiểu dữ liệu (Data Types)</h4>
      <pre>
        <code>{`// String - Chuỗi ký tự
const greeting = "Hello";
const name = 'HaVy';
const message = \`Xin chào \${name}\`; // Template literal

// Number - Số (cả số nguyên và số thập phân)
const age = 25;
const price = 99.99;
const negative = -10;

// Boolean - Đúng/Sai
const isActive = true;
const isDeleted = false;

// null - Giá trị rỗng (được gán có chủ đích)
const data = null; // "Tôi biết giá trị này rỗng"

// undefined - Chưa được gán giá trị
let result;
console.log(result); // undefined - "Chưa có giá trị"

// Kiểm tra kiểu dữ liệu
console.log(typeof "hello");    // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof null);       // "object"
console.log(typeof undefined);  // "undefined"`}</code>
      </pre>

      <h4>Toán tử số học & so sánh</h4>
      <pre>
        <code>{`// Arithmetic operators - Toán tử số học
console.log(10 + 3);   // 13   - Cộng
console.log(10 - 3);   // 7    - Trừ
console.log(10 * 3);   // 30   - Nhân
console.log(10 / 3);   // 3.33 - Chia
console.log(10 % 3);   // 1    - Chia lấy dư (modulo)
console.log(10 ** 3);  // 1000 - Lũy thừa

// Comparison operators - Toán tử so sánh
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 >= 5);   // true
console.log(5 <= 4);   // false

// == vs === (QUAN TRỌNG!)
console.log(5 == "5");   // true  - So sánh giá trị (có type coercion)
console.log(5 === "5");  // false - So sánh giá trị VÀ kiểu dữ liệu

// != vs !==
console.log(5 != "5");   // false
console.log(5 !== "5");  // true

// Quy tắc: LUÔN dùng === và !== để tránh lỗi bất ngờ`}</code>
      </pre>

      <h4>Type Coercion - Ép kiểu tự động</h4>
      <pre>
        <code>{`// JavaScript tự động chuyển đổi kiểu dữ liệu trong một số trường hợp

// String + Number → String (nối chuỗi)
console.log("5" + 3);    // "53" (number → string)
console.log("Hello" + 5); // "Hello5"

// Các phép tính khác → Number
console.log("5" - 3);    // 2 (string → number)
console.log("5" * 2);    // 10
console.log("5" / 2);    // 2.5

// Truthy và Falsy values
// Falsy: false, 0, "", null, undefined, NaN
// Truthy: mọi thứ còn lại

console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean("hello"));   // true
console.log(Boolean(42));        // true
console.log(Boolean([]));        // true (array rỗng là truthy!)

// Chuyển đổi tường minh (explicit)
const str = "42";
const num = Number(str);     // 42
const back = String(num);    // "42"
const bool = Boolean(num);   // true`}</code>
      </pre>

      <h4>console.log & Debugging cơ bản</h4>
      <pre>
        <code>{`// console.log - In giá trị ra console
console.log("Hello World");
console.log("Tuổi:", age, "Tên:", name);

// console.warn - Cảnh báo (hiển thị màu vàng)
console.warn("Cẩn thận: giá trị có thể null");

// console.error - Lỗi (hiển thị màu đỏ)
console.error("Lỗi: không tìm thấy user");

// console.table - Hiển thị dạng bảng
const users = [
  { name: "HaVy", age: 25 },
  { name: "An", age: 30 }
];
console.table(users);

// Debugging tip: Dùng console.log để kiểm tra giá trị
function calculateTotal(price, quantity) {
  console.log("Input:", price, quantity); // Debug
  const total = price * quantity;
  console.log("Result:", total);          // Debug
  return total;
}`}</code>
      </pre>

      <p>
        <strong>Nhận xét:</strong> Testing levels giúp hiểu rõ khi nào nên test
        ở mức nào - unit test cho logic, integration test cho kết nối, system
        test cho end-to-end, và acceptance test cho giá trị nghiệp vụ. Mỗi level
        bổ sung cho nhau tạo thành lưới an toàn hoàn chỉnh. Về JavaScript, hiểu
        var/let/const, data types và type coercion là nền tảng quan trọng nhất -
        đặc biệt luôn dùng === thay vì == để tránh bug từ type coercion. Ngày
        đầu tiên với JS rất hứng thú!
      </p>
    </>
  ),
};

export const en: DiaryEntry = {
  date: '2026-03-25',
  title: 'Testing Levels & JavaScript: First Day with JS',
  content: (
    <>
      <p>
        Today I took a deep dive into Testing Levels — the hierarchy of testing
        stages in software development — and practiced identifying which level
        applies to different scenarios. On the programming side, this is my
        first day learning JavaScript — understanding how to store and work with
        data.
      </p>

      <h4>Software Testing - Day 11: Testing Levels</h4>

      <h4>What are Testing Levels?</h4>
      <p>
        Testing levels are the <strong>stages of testing</strong> performed at
        different scopes during software development. Each level focuses on a
        specific scope, from the smallest (component) to the largest (entire
        system).
      </p>

      <h4>The 4 main Testing Levels</h4>
      <pre>
        <code>{`┌─────────────────────────────────────────────────────┐
│              Acceptance Testing                     │  ← Users/Clients
│  ┌─────────────────────────────────────────────┐    │
│  │           System Testing                    │    │  ← Entire system
│  │  ┌─────────────────────────────────────┐    │    │
│  │  │      Integration Testing            │    │    │  ← Combined modules
│  │  │  ┌─────────────────────────────┐    │    │    │
│  │  │  │      Unit Testing           │    │    │    │  ← Each component
│  │  │  └─────────────────────────────┘    │    │    │
│  │  └─────────────────────────────────────┘    │    │
│  └─────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘`}</code>
      </pre>

      <h4>1. Unit Testing (Component Testing)</h4>
      <p>
        Testing the <strong>smallest individual units</strong> of software in
        isolation — typically a function, method, or class.
      </p>
      <ul>
        <li>
          <strong>Who:</strong> Developers
        </li>
        <li>
          <strong>When:</strong> During coding (earliest stage)
        </li>
        <li>
          <strong>Purpose:</strong> Ensure each unit works correctly in
          isolation
        </li>
        <li>
          <strong>Examples:</strong> Test a cart total function, test email
          validation, test date formatting
        </li>
        <li>
          <strong>Tools:</strong> Jest, JUnit, NUnit, PyTest
        </li>
        <li>
          <strong>Characteristics:</strong> Fast, isolated, easy to debug,
          highest quantity
        </li>
      </ul>

      <h4>2. Integration Testing</h4>
      <p>
        Testing the <strong>interaction between modules/components</strong> when
        they are combined together.
      </p>
      <ul>
        <li>
          <strong>Who:</strong> Developers or Testers
        </li>
        <li>
          <strong>When:</strong> After units have passed unit tests
        </li>
        <li>
          <strong>Purpose:</strong> Detect interface and data flow issues
          between modules
        </li>
        <li>
          <strong>Examples:</strong> Test an API endpoint connecting to a
          database, test a form submission sending data to the server, test the
          payment module interacting with the cart module
        </li>
        <li>
          <strong>Tools:</strong> Postman, Supertest, TestContainers
        </li>
      </ul>

      <h4>Integration Testing strategies</h4>
      <pre>
        <code>{`Big Bang: Combine all modules at once and test
  → Simple but hard to locate the source of errors

Top-Down: Test from high-level modules down to lower ones
  → Use stubs to replace lower-level modules not yet ready
  → Detects architectural issues early

Bottom-Up: Test from low-level modules up to higher ones
  → Use drivers to call low-level modules
  → Lower modules are thoroughly tested first

Sandwich (Hybrid): Combine Top-Down and Bottom-Up
  → Flexible but more complex`}</code>
      </pre>

      <h4>3. System Testing</h4>
      <p>
        Testing the <strong>fully integrated system</strong> as a whole,
        evaluating whether it meets the specified requirements.
      </p>
      <ul>
        <li>
          <strong>Who:</strong> Testers (QA team)
        </li>
        <li>
          <strong>When:</strong> After integration testing is complete
        </li>
        <li>
          <strong>Purpose:</strong> Evaluate the system end-to-end against
          requirements
        </li>
        <li>
          <strong>Includes:</strong> Functional testing, performance testing,
          security testing, usability testing
        </li>
        <li>
          <strong>Examples:</strong> Test the entire ordering flow from login →
          select products → checkout → receive confirmation
        </li>
        <li>
          <strong>Tools:</strong> Selenium, Cypress, Playwright
        </li>
        <li>
          <strong>Characteristics:</strong> Slower, production-like environment,
          black-box testing
        </li>
      </ul>

      <h4>4. Acceptance Testing (UAT)</h4>
      <p>
        Testing to confirm the system <strong>meets business needs</strong> and
        is ready for deployment.
      </p>
      <ul>
        <li>
          <strong>Who:</strong> Clients, end-users, or Product Owners
        </li>
        <li>
          <strong>When:</strong> After system testing, before release
        </li>
        <li>
          <strong>Purpose:</strong> Confirm the product solves the right
          business problem
        </li>
        <li>
          <strong>Types:</strong>
        </li>
      </ul>
      <pre>
        <code>{`User Acceptance Testing (UAT):
  → Real users test the product
  → "Does this app help me order food easily?"

Operational Acceptance Testing (OAT):
  → Operations testing: backup, recovery, maintenance
  → "Does the system run stably when deployed?"

Contract/Regulation Acceptance Testing:
  → Testing against contracts or legal regulations
  → "Does the product comply with GDPR?"

Alpha Testing: Internal testing in the dev environment
Beta Testing: Testing by real users in a real environment`}</code>
      </pre>

      <h4>Comparing the 4 Testing Levels</h4>
      <pre>
        <code>{`┌──────────────┬─────────────┬───────────────────┬──────────────────┐
│ Level        │ Who tests   │ What is tested    │ Purpose          │
├──────────────┼─────────────┼───────────────────┼──────────────────┤
│ Unit         │ Developer   │ Function/class    │ Correct logic    │
│ Integration  │ Dev/Tester  │ Combined modules  │ Correct interface│
│ System       │ QA Team     │ Entire system     │ Meets spec       │
│ Acceptance   │ User/Client │ Final product     │ Meets needs      │
└──────────────┴─────────────┴───────────────────┴──────────────────┘`}</code>
      </pre>

      <h4>Practice - Identifying Testing Levels</h4>
      <p>
        For the following scenarios, identify which testing level should be
        applied:
      </p>
      <ul>
        <li>
          <strong>Scenario 1:</strong> Verify that calculateDiscount() returns
          the correct value → <em>Unit Testing</em>
        </li>
        <li>
          <strong>Scenario 2:</strong> Verify a registration form sends data to
          the API and saves to the database → <em>Integration Testing</em>
        </li>
        <li>
          <strong>Scenario 3:</strong> A customer tries the app and confirms the
          flow fits their business needs → <em>Acceptance Testing</em>
        </li>
        <li>
          <strong>Scenario 4:</strong> Test the entire purchase flow on a
          staging environment → <em>System Testing</em>
        </li>
        <li>
          <strong>Scenario 5:</strong> Verify the payment module calls the
          correct third-party API → <em>Integration Testing</em>
        </li>
      </ul>

      <h4>JavaScript - Day 1: JavaScript Fundamentals</h4>
      <p>
        Goal: Understand the basic building blocks of JavaScript — how to store
        and work with data.
      </p>

      <h4>Variable declarations: var, let, const</h4>
      <pre>
        <code>{`// var - old way, function-scoped, hoisted
var name = "HaVy";
var name = "HaVy 2"; // Re-declaration allowed
name = "HaVy 3";     // Re-assignment allowed

// let - modern, block-scoped
let age = 25;
// let age = 30;    // ❌ Error: cannot re-declare
age = 30;           // ✅ Re-assignment allowed

// const - constant, block-scoped
const PI = 3.14159;
// PI = 3.14;       // ❌ Error: cannot re-assign
// const PI = 3;    // ❌ Error: cannot re-declare

// ⚠️ const with objects/arrays - inner values can still change
const user = { name: "HaVy" };
user.name = "HaVy 2";   // ✅ Allowed
// user = {};           // ❌ Error: cannot re-assign reference`}</code>
      </pre>

      <h4>Comparing var, let, const</h4>
      <pre>
        <code>{`┌──────────────┬─────────────────┬───────────────┬──────────────┐
│              │        var      │     let       │   const      │
├──────────────┼─────────────────┼───────────────┼──────────────┤
│ Scope        │ Function        │ Block         │ Block        │
│ Hoisting     │ Yes (undefined) │  Yes (TDZ)    │ Yes (TDZ)    │
│ Re-declare   │ ✅ Yes          │ ❌ No          │ ❌ No        │
│ Re-assign    │ ✅ Yes          │ ✅ Yes         │ ❌ No        │
│ Recommended? │ ❌ Avoid        │ ✅ When needed │ ✅ Default   │
└──────────────┴─────────────────┴───────────────┴──────────────┘

Rule: Always use const first. Only use let when re-assignment is needed. Never use var.`}</code>
      </pre>

      <h4>Data Types</h4>
      <pre>
        <code>{`// String - Text
const greeting = "Hello";
const name = 'HaVy';
const message = \`Hello \${name}\`; // Template literal

// Number - Both integers and decimals
const age = 25;
const price = 99.99;
const negative = -10;

// Boolean - True/False
const isActive = true;
const isDeleted = false;

// null - Intentionally empty value
const data = null; // "I know this value is empty"

// undefined - No value assigned yet
let result;
console.log(result); // undefined - "No value yet"

// Checking data types
console.log(typeof "hello");    // "string"
console.log(typeof 42);         // "number"
console.log(typeof true);       // "boolean"
console.log(typeof null);       // "object"
console.log(typeof undefined);  // "undefined"`}</code>
      </pre>

      <h4>Arithmetic & comparison operators</h4>
      <pre>
        <code>{`// Arithmetic operators
console.log(10 + 3);   // 13   - Addition
console.log(10 - 3);   // 7    - Subtraction
console.log(10 * 3);   // 30   - Multiplication
console.log(10 / 3);   // 3.33 - Division
console.log(10 % 3);   // 1    - Modulo (remainder)
console.log(10 ** 3);  // 1000 - Exponentiation

// Comparison operators
console.log(5 > 3);    // true
console.log(5 < 3);    // false
console.log(5 >= 5);   // true
console.log(5 <= 4);   // false

// == vs === (IMPORTANT!)
console.log(5 == "5");   // true  - Compares value (with type coercion)
console.log(5 === "5");  // false - Compares value AND type

// != vs !==
console.log(5 != "5");   // false
console.log(5 !== "5");  // true

// Rule: ALWAYS use === and !== to avoid unexpected bugs`}</code>
      </pre>

      <h4>Type Coercion - Automatic type conversion</h4>
      <pre>
        <code>{`// JavaScript automatically converts types in certain situations

// String + Number → String (concatenation)
console.log("5" + 3);    // "53" (number → string)
console.log("Hello" + 5); // "Hello5"

// Other math operators → Number
console.log("5" - 3);    // 2 (string → number)
console.log("5" * 2);    // 10
console.log("5" / 2);    // 2.5

// Truthy and Falsy values
// Falsy: false, 0, "", null, undefined, NaN
// Truthy: everything else

console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean("hello"));   // true
console.log(Boolean(42));        // true
console.log(Boolean([]));        // true (empty array is truthy!)

// Explicit conversion
const str = "42";
const num = Number(str);     // 42
const back = String(num);    // "42"
const bool = Boolean(num);   // true`}</code>
      </pre>

      <h4>console.log & Debugging basics</h4>
      <pre>
        <code>{`// console.log - Print values to the console
console.log("Hello World");
console.log("Age:", age, "Name:", name);

// console.warn - Warning (displayed in yellow)
console.warn("Caution: value might be null");

// console.error - Error (displayed in red)
console.error("Error: user not found");

// console.table - Display as a table
const users = [
  { name: "HaVy", age: 25 },
  { name: "An", age: 30 }
];
console.table(users);

// Debugging tip: Use console.log to inspect values
function calculateTotal(price, quantity) {
  console.log("Input:", price, quantity); // Debug
  const total = price * quantity;
  console.log("Result:", total);          // Debug
  return total;
}`}</code>
      </pre>

      <p>
        <strong>Takeaway:</strong> Testing levels clarify when to test at which
        scope — unit tests for logic, integration tests for connections, system
        tests for end-to-end flows, and acceptance tests for business value.
        Each level complements the others to form a complete safety net. For
        JavaScript, understanding var/let/const, data types, and type coercion
        is the most important foundation — especially always using === instead
        of == to avoid bugs from type coercion. First day with JS was exciting!
      </p>
    </>
  ),
};
