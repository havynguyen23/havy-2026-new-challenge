import { DiaryEntry } from './types';

export const vi: DiaryEntry = {
  date: '2026-03-27',
  title: 'Ôn tập Tuần 2 & JavaScript: Mảng, Đối tượng & Collections',
  content: (
    <>
      <p>
        Hôm nay mình ôn tập lại toàn bộ kiến thức Tuần 2 về Software Testing,
        đồng thời học về cách làm việc với các collection dữ liệu trong
        JavaScript — mảng, đối tượng và các built-in methods phổ biến nhất.
      </p>

      <h4>Ôn tập Tuần 2 - Software Testing</h4>
      <p>
        Nhìn lại những gì đã học trong tuần 2 để củng cố kiến thức trước khi
        tiếp tục.
      </p>

      <h4>Tóm tắt các chủ đề Tuần 2</h4>
      <pre>
        <code>{`Tuần 2 - Software Testing:
┌──────┬────────────────────────────────────────────────────────┐
│ Ngày │ Chủ đề                                                 │
├──────┼────────────────────────────────────────────────────────┤
│ 22/3 │ Test Levels: Unit, Integration, System, Acceptance     │
│ 23/3 │ Test Types: Functional, Non-Functional, Structural     │
│ 24/3 │ Static Testing: Reviews & Static Analysis              │
│ 25/3 │ Test Design Techniques: Equivalence, Boundary, etc.    │
│ 26/3 │ Testing Approaches: Proactive, Reactive, Risk-Based    │
└──────┴────────────────────────────────────────────────────────┘`}</code>
      </pre>

      <h4>Các điểm quan trọng cần nhớ</h4>
      <ul>
        <li>
          <strong>Test Levels:</strong> Unit → Integration → System → Acceptance
          — từ nhỏ đến lớn, từ developer đến end-user
        </li>
        <li>
          <strong>Test Types:</strong> Functional (làm đúng không?),
          Non-Functional (làm tốt không?), Structural (code structure có ổn
          không?)
        </li>
        <li>
          <strong>Static Testing:</strong> Không chạy code — review, walkthrough,
          inspection, static analysis
        </li>
        <li>
          <strong>Test Design:</strong> Equivalence Partitioning + Boundary Value
          Analysis = bộ đôi hiệu quả để tìm lỗi biên
        </li>
        <li>
          <strong>Approaches:</strong> Proactive (ngăn ngừa lỗi sớm) + Reactive
          (tìm lỗi thực tế) + Risk-Based (ưu tiên theo rủi ro)
        </li>
      </ul>

      <h4>Sơ đồ tư duy Tuần 2</h4>
      <pre>
        <code>{`Software Testing
├── Test Levels
│   ├── Unit Test        → Kiểm tra từng function/class
│   ├── Integration Test → Kiểm tra sự kết hợp giữa các module
│   ├── System Test      → Kiểm tra toàn bộ hệ thống
│   └── Acceptance Test  → Kiểm tra theo yêu cầu business
│
├── Test Types
│   ├── Functional       → Chức năng đúng không?
│   ├── Non-Functional   → Performance, Security, Usability
│   └── Structural       → Code coverage, paths
│
├── Static Testing
│   ├── Reviews          → Informal, Walkthrough, Inspection
│   └── Static Analysis  → Linting, code metrics
│
├── Test Design
│   ├── Equivalence Partitioning → Nhóm giá trị tương đương
│   ├── Boundary Value Analysis  → Test tại biên
│   ├── Decision Table           → Tổ hợp điều kiện
│   └── State Transition         → Kiểm tra trạng thái
│
└── Testing Approaches
    ├── Proactive  → Bắt đầu sớm (trước khi code)
    ├── Reactive   → Bắt đầu sau khi có sản phẩm
    └── Risk-Based → Ưu tiên theo mức độ rủi ro`}</code>
      </pre>

      <h4>JavaScript - Ngày 3: Mảng, Đối tượng & Collections</h4>
      <p>
        Mục tiêu: Làm việc với các collection dữ liệu sử dụng mảng và đối
        tượng, bao gồm các built-in methods phổ biến nhất.
      </p>

      <h4>Array methods: map, filter, reduce</h4>
      <pre>
        <code>{`const students = [
  { name: "An", score: 85 },
  { name: "Bình", score: 62 },
  { name: "Chi", score: 91 },
  { name: "Dung", score: 48 },
];

// map() - Chuyển đổi mỗi phần tử → tạo mảng mới cùng độ dài
const names = students.map(s => s.name);
console.log(names); // ["An", "Bình", "Chi", "Dung"]

const grades = students.map(s => ({
  name: s.name,
  grade: s.score >= 80 ? "Giỏi" : s.score >= 60 ? "Khá" : "Trung bình"
}));
// [{ name: "An", grade: "Giỏi" }, { name: "Bình", grade: "Khá" }, ...]

// filter() - Lọc phần tử thỏa điều kiện → tạo mảng con
const passed = students.filter(s => s.score >= 60);
console.log(passed.length); // 3 (An, Bình, Chi)

const excellent = students.filter(s => s.score >= 80);
console.log(excellent); // [{ name: "An", score: 85 }, { name: "Chi", score: 91 }]

// reduce() - Gộp mảng thành một giá trị duy nhất
const totalScore = students.reduce((sum, s) => sum + s.score, 0);
console.log(totalScore); // 286

const average = totalScore / students.length;
console.log(average); // 71.5

// Kết hợp map + filter + reduce (method chaining)
const avgPassingScore = students
  .filter(s => s.score >= 60)       // Lọc học sinh đậu
  .map(s => s.score)                 // Lấy điểm số
  .reduce((sum, score, _, arr) => sum + score / arr.length, 0); // Tính trung bình
console.log(avgPassingScore); // ~79.3`}</code>
      </pre>

      <h4>Destructuring</h4>
      <pre>
        <code>{`// Array destructuring - Trích xuất phần tử theo vị trí
const colors = ["đỏ", "xanh", "vàng", "tím"];

const [first, second] = colors;
console.log(first);  // "đỏ"
console.log(second); // "xanh"

// Bỏ qua phần tử
const [, , third] = colors;
console.log(third); // "vàng"

// Rest trong destructuring
const [head, ...tail] = colors;
console.log(head); // "đỏ"
console.log(tail); // ["xanh", "vàng", "tím"]

// Giá trị mặc định
const [a = 1, b = 2, c = 3] = [10, 20];
console.log(a, b, c); // 10, 20, 3

// Object destructuring - Trích xuất theo tên key
const user = { name: "HaVy", age: 25, city: "Hà Nội" };

const { name, age } = user;
console.log(name); // "HaVy"
console.log(age);  // 25

// Đổi tên khi destructure
const { name: userName, city: location } = user;
console.log(userName); // "HaVy"
console.log(location); // "Hà Nội"

// Giá trị mặc định trong object destructuring
const { name: n, role = "user" } = user;
console.log(role); // "user" (vì user không có role)

// Nested destructuring
const company = {
  name: "TechCorp",
  address: { city: "TP.HCM", district: "Q1" }
};
const { address: { city, district } } = company;
console.log(city);     // "TP.HCM"
console.log(district); // "Q1"

// Destructuring trong function parameters
function displayUser({ name, age, role = "user" }) {
  console.log(\`\${name} (\${age}) - \${role}\`);
}
displayUser({ name: "HaVy", age: 25 }); // "HaVy (25) - user"`}</code>
      </pre>

      <h4>Spread & Rest operators</h4>
      <pre>
        <code>{`// Spread (...) - "Trải" các phần tử ra
// 1. Sao chép mảng
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3] - không bị ảnh hưởng
console.log(copy);     // [1, 2, 3, 4]

// 2. Kết hợp mảng
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2, 5];
console.log(combined); // [1, 2, 3, 4, 5]

// 3. Spread với object
const defaults = { theme: "light", lang: "vi", fontSize: 14 };
const userPrefs = { lang: "en", fontSize: 16 };

// Merge objects (giá trị sau ghi đè giá trị trước)
const settings = { ...defaults, ...userPrefs };
console.log(settings);
// { theme: "light", lang: "en", fontSize: 16 }

// 4. Sao chép và thêm property
const original2 = { name: "HaVy", age: 25 };
const updated = { ...original2, age: 26, city: "HCM" };
console.log(updated); // { name: "HaVy", age: 26, city: "HCM" }

// 5. Spread trong function call
const numbers = [3, 1, 4, 1, 5, 9];
console.log(Math.max(...numbers)); // 9

// Rest (...) - Gom các tham số còn lại
// 1. Trong function parameters
function sum(...args) {
  return args.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20));         // 30

// 2. Rest sau tham số thông thường
function logUser(name, age, ...hobbies) {
  console.log(\`\${name} (\${age}): \${hobbies.join(", ")}\`);
}
logUser("HaVy", 25, "coding", "reading", "hiking");
// "HaVy (25): coding, reading, hiking"`}</code>
      </pre>

      <h4>Object properties & methods</h4>
      <pre>
        <code>{`// Shorthand property names
const name = "HaVy";
const age = 25;

// Cách cũ
const user1 = { name: name, age: age };

// Shorthand (khi tên key = tên biến)
const user2 = { name, age };
console.log(user2); // { name: "HaVy", age: 25 }

// Computed property names
const key = "dynamicKey";
const obj = {
  [key]: "value",
  [\`prefix_\${key}\`]: "prefixed value"
};
console.log(obj.dynamicKey);        // "value"
console.log(obj.prefix_dynamicKey); // "prefixed value"

// Methods trong object
const calculator = {
  value: 0,
  add(n) {             // Method shorthand
    this.value += n;
    return this;       // Return this để chaining
  },
  subtract(n) {
    this.value -= n;
    return this;
  },
  result() {
    return this.value;
  }
};

console.log(calculator.add(10).add(5).subtract(3).result()); // 12

// Object built-in methods
const person = { name: "HaVy", age: 25, city: "HN" };

Object.keys(person);    // ["name", "age", "city"]
Object.values(person);  // ["HaVy", 25, "HN"]
Object.entries(person); // [["name","HaVy"], ["age",25], ["city","HN"]]

// Object.assign() - Merge objects (thay đổi target)
const target = { a: 1 };
Object.assign(target, { b: 2 }, { c: 3 });
console.log(target); // { a: 1, b: 2, c: 3 }

// Object.freeze() - Ngăn chỉnh sửa object
const config = Object.freeze({ apiUrl: "https://api.example.com" });
config.apiUrl = "other"; // Bị bỏ qua (strict mode: báo lỗi)
console.log(config.apiUrl); // "https://api.example.com"`}</code>
      </pre>

      <h4>Iterating over objects</h4>
      <pre>
        <code>{`const scores = { An: 85, Bình: 62, Chi: 91, Dung: 48 };

// for...in - Duyệt qua các keys của object
for (const key in scores) {
  console.log(\`\${key}: \${scores[key]}\`);
}
// An: 85
// Bình: 62
// Chi: 91
// Dung: 48

// Object.entries() + for...of - Cách hiện đại hơn
for (const [name, score] of Object.entries(scores)) {
  const grade = score >= 80 ? "Giỏi" : score >= 60 ? "Khá" : "TB";
  console.log(\`\${name}: \${score} (\${grade})\`);
}

// Object.keys() + forEach
Object.keys(scores).forEach(name => {
  console.log(name, scores[name]);
});

// Chuyển object thành mảng để dùng array methods
const topStudents = Object.entries(scores)
  .filter(([, score]) => score >= 80)
  .map(([name, score]) => ({ name, score }))
  .sort((a, b) => b.score - a.score);

console.log(topStudents);
// [{ name: "Chi", score: 91 }, { name: "An", score: 85 }]

// Từ mảng → object (Object.fromEntries)
const doubled = Object.fromEntries(
  Object.entries(scores).map(([name, score]) => [name, score * 2])
);
console.log(doubled); // { An: 170, Bình: 124, Chi: 182, Dung: 96 }`}</code>
      </pre>

      <h4>Tổng hợp: Kết hợp tất cả</h4>
      <pre>
        <code>{`// Ví dụ thực tế: Xử lý dữ liệu học sinh
const classData = [
  { id: 1, name: "An", scores: [85, 90, 78] },
  { id: 2, name: "Bình", scores: [62, 55, 70] },
  { id: 3, name: "Chi", scores: [91, 88, 95] },
  { id: 4, name: "Dung", scores: [48, 52, 45] },
];

const report = classData
  .map(({ name, scores }) => {               // Destructuring trong map
    const avg = scores.reduce((s, n) => s + n, 0) / scores.length;
    return { name, avg: Math.round(avg) };
  })
  .filter(({ avg }) => avg >= 60)            // Chỉ lấy học sinh đậu
  .sort((a, b) => b.avg - a.avg);            // Sắp xếp điểm cao nhất trước

console.log(report);
// [
//   { name: "Chi", avg: 91 },
//   { name: "An", avg: 84 },
//   { name: "Bình", avg: 62 }
// ]

// Thêm rank bằng spread
const rankedReport = report.map((student, index) => ({
  rank: index + 1,
  ...student
}));
// [
//   { rank: 1, name: "Chi", avg: 91 },
//   { rank: 2, name: "An", avg: 84 },
//   { rank: 3, name: "Bình", avg: 62 }
// ]`}</code>
      </pre>

      <p>
        <strong>Nhận xét:</strong> Ôn tập Tuần 2 giúp mình thấy rõ bức tranh
        tổng thể của Software Testing — từ các cấp độ kiểm thử đến các kỹ thuật
        thiết kế test case. Về JavaScript, <code>map/filter/reduce</code> là bộ
        ba không thể thiếu khi xử lý dữ liệu. Destructuring và spread/rest giúp
        code ngắn gọn và dễ đọc hơn nhiều. Kết hợp tất cả lại giúp xử lý dữ
        liệu phức tạp một cách elegant chỉ với vài dòng code!
      </p>
    </>
  ),
};

export const en: DiaryEntry = {
  date: '2026-03-27',
  title: 'Week 2 Review & JavaScript: Arrays, Objects & Collections',
  content: (
    <>
      <p>
        Today I reviewed all Week 2 Software Testing material and learned how to
        work with data collections in JavaScript — arrays, objects, and the most
        commonly used built-in methods.
      </p>

      <h4>Week 2 Review - Software Testing</h4>
      <p>
        Looking back at what was covered in Week 2 to reinforce the knowledge
        before moving forward.
      </p>

      <h4>Week 2 Topics Summary</h4>
      <pre>
        <code>{`Week 2 - Software Testing:
┌───────┬────────────────────────────────────────────────────────┐
│ Date  │ Topic                                                  │
├───────┼────────────────────────────────────────────────────────┤
│ 22/3  │ Test Levels: Unit, Integration, System, Acceptance     │
│ 23/3  │ Test Types: Functional, Non-Functional, Structural     │
│ 24/3  │ Static Testing: Reviews & Static Analysis              │
│ 25/3  │ Test Design Techniques: Equivalence, Boundary, etc.    │
│ 26/3  │ Testing Approaches: Proactive, Reactive, Risk-Based    │
└───────┴────────────────────────────────────────────────────────┘`}</code>
      </pre>

      <h4>Key Points to Remember</h4>
      <ul>
        <li>
          <strong>Test Levels:</strong> Unit → Integration → System → Acceptance
          — from small to large, from developer to end-user
        </li>
        <li>
          <strong>Test Types:</strong> Functional (does it work correctly?),
          Non-Functional (does it work well?), Structural (is the code structure
          sound?)
        </li>
        <li>
          <strong>Static Testing:</strong> No code execution — reviews,
          walkthroughs, inspections, static analysis
        </li>
        <li>
          <strong>Test Design:</strong> Equivalence Partitioning + Boundary
          Value Analysis = an effective duo for finding boundary defects
        </li>
        <li>
          <strong>Approaches:</strong> Proactive (prevent defects early) +
          Reactive (find real defects) + Risk-Based (prioritize by risk)
        </li>
      </ul>

      <h4>Week 2 Mind Map</h4>
      <pre>
        <code>{`Software Testing
├── Test Levels
│   ├── Unit Test        → Test individual functions/classes
│   ├── Integration Test → Test interaction between modules
│   ├── System Test      → Test the full system
│   └── Acceptance Test  → Test against business requirements
│
├── Test Types
│   ├── Functional       → Does it do what it should?
│   ├── Non-Functional   → Performance, Security, Usability
│   └── Structural       → Code coverage, paths
│
├── Static Testing
│   ├── Reviews          → Informal, Walkthrough, Inspection
│   └── Static Analysis  → Linting, code metrics
│
├── Test Design
│   ├── Equivalence Partitioning → Group equivalent values
│   ├── Boundary Value Analysis  → Test at boundaries
│   ├── Decision Table           → Combinations of conditions
│   └── State Transition         → Test state changes
│
└── Testing Approaches
    ├── Proactive  → Start early (before coding)
    ├── Reactive   → Start after product exists
    └── Risk-Based → Prioritize by risk level`}</code>
      </pre>

      <h4>JavaScript - Day 3: Arrays, Objects & Collections</h4>
      <p>
        Goal: Work with collections of data using arrays and objects, including
        common built-in methods.
      </p>

      <h4>Array methods: map, filter, reduce</h4>
      <pre>
        <code>{`const students = [
  { name: "An", score: 85 },
  { name: "Binh", score: 62 },
  { name: "Chi", score: 91 },
  { name: "Dung", score: 48 },
];

// map() - Transform each element → creates new array of same length
const names = students.map(s => s.name);
console.log(names); // ["An", "Binh", "Chi", "Dung"]

const grades = students.map(s => ({
  name: s.name,
  grade: s.score >= 80 ? "Excellent" : s.score >= 60 ? "Good" : "Average"
}));
// [{ name: "An", grade: "Excellent" }, { name: "Binh", grade: "Good" }, ...]

// filter() - Keep elements matching condition → creates subset array
const passed = students.filter(s => s.score >= 60);
console.log(passed.length); // 3 (An, Binh, Chi)

const excellent = students.filter(s => s.score >= 80);
console.log(excellent); // [{ name: "An", score: 85 }, { name: "Chi", score: 91 }]

// reduce() - Collapse array into a single value
const totalScore = students.reduce((sum, s) => sum + s.score, 0);
console.log(totalScore); // 286

const average = totalScore / students.length;
console.log(average); // 71.5

// Chaining map + filter + reduce
const avgPassingScore = students
  .filter(s => s.score >= 60)       // Keep passing students
  .map(s => s.score)                 // Extract scores
  .reduce((sum, score, _, arr) => sum + score / arr.length, 0); // Average
console.log(avgPassingScore); // ~79.3`}</code>
      </pre>

      <h4>Destructuring</h4>
      <pre>
        <code>{`// Array destructuring - Extract elements by position
const colors = ["red", "blue", "yellow", "purple"];

const [first, second] = colors;
console.log(first);  // "red"
console.log(second); // "blue"

// Skip elements
const [, , third] = colors;
console.log(third); // "yellow"

// Rest in destructuring
const [head, ...tail] = colors;
console.log(head); // "red"
console.log(tail); // ["blue", "yellow", "purple"]

// Default values
const [a = 1, b = 2, c = 3] = [10, 20];
console.log(a, b, c); // 10, 20, 3

// Object destructuring - Extract by key name
const user = { name: "HaVy", age: 25, city: "Hanoi" };

const { name, age } = user;
console.log(name); // "HaVy"
console.log(age);  // 25

// Rename while destructuring
const { name: userName, city: location } = user;
console.log(userName); // "HaVy"
console.log(location); // "Hanoi"

// Default values in object destructuring
const { name: n, role = "user" } = user;
console.log(role); // "user" (user has no role)

// Nested destructuring
const company = {
  name: "TechCorp",
  address: { city: "HCMC", district: "D1" }
};
const { address: { city, district } } = company;
console.log(city);     // "HCMC"
console.log(district); // "D1"

// Destructuring in function parameters
function displayUser({ name, age, role = "user" }) {
  console.log(\`\${name} (\${age}) - \${role}\`);
}
displayUser({ name: "HaVy", age: 25 }); // "HaVy (25) - user"`}</code>
      </pre>

      <h4>Spread & Rest operators</h4>
      <pre>
        <code>{`// Spread (...) - "Unpack" elements
// 1. Copy array
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3] - unaffected
console.log(copy);     // [1, 2, 3, 4]

// 2. Merge arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2, 5];
console.log(combined); // [1, 2, 3, 4, 5]

// 3. Spread with objects
const defaults = { theme: "light", lang: "en", fontSize: 14 };
const userPrefs = { lang: "vi", fontSize: 16 };

// Merge objects (later values override earlier ones)
const settings = { ...defaults, ...userPrefs };
console.log(settings);
// { theme: "light", lang: "vi", fontSize: 16 }

// 4. Copy and add a property
const original2 = { name: "HaVy", age: 25 };
const updated = { ...original2, age: 26, city: "HCMC" };
console.log(updated); // { name: "HaVy", age: 26, city: "HCMC" }

// 5. Spread in function calls
const numbers = [3, 1, 4, 1, 5, 9];
console.log(Math.max(...numbers)); // 9

// Rest (...) - Collect remaining arguments
// 1. In function parameters
function sum(...args) {
  return args.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20));         // 30

// 2. Rest after regular parameters
function logUser(name, age, ...hobbies) {
  console.log(\`\${name} (\${age}): \${hobbies.join(", ")}\`);
}
logUser("HaVy", 25, "coding", "reading", "hiking");
// "HaVy (25): coding, reading, hiking"`}</code>
      </pre>

      <h4>Object properties & methods</h4>
      <pre>
        <code>{`// Shorthand property names
const name = "HaVy";
const age = 25;

// Old way
const user1 = { name: name, age: age };

// Shorthand (when key name = variable name)
const user2 = { name, age };
console.log(user2); // { name: "HaVy", age: 25 }

// Computed property names
const key = "dynamicKey";
const obj = {
  [key]: "value",
  [\`prefix_\${key}\`]: "prefixed value"
};
console.log(obj.dynamicKey);        // "value"
console.log(obj.prefix_dynamicKey); // "prefixed value"

// Methods inside objects
const calculator = {
  value: 0,
  add(n) {             // Method shorthand
    this.value += n;
    return this;       // Return this for chaining
  },
  subtract(n) {
    this.value -= n;
    return this;
  },
  result() {
    return this.value;
  }
};

console.log(calculator.add(10).add(5).subtract(3).result()); // 12

// Object built-in methods
const person = { name: "HaVy", age: 25, city: "HN" };

Object.keys(person);    // ["name", "age", "city"]
Object.values(person);  // ["HaVy", 25, "HN"]
Object.entries(person); // [["name","HaVy"], ["age",25], ["city","HN"]]

// Object.assign() - Merge objects (mutates target)
const target = { a: 1 };
Object.assign(target, { b: 2 }, { c: 3 });
console.log(target); // { a: 1, b: 2, c: 3 }

// Object.freeze() - Prevent modifications
const config = Object.freeze({ apiUrl: "https://api.example.com" });
config.apiUrl = "other"; // Silently ignored (strict mode: throws error)
console.log(config.apiUrl); // "https://api.example.com"`}</code>
      </pre>

      <h4>Iterating over objects</h4>
      <pre>
        <code>{`const scores = { An: 85, Binh: 62, Chi: 91, Dung: 48 };

// for...in - Iterate over object keys
for (const key in scores) {
  console.log(\`\${key}: \${scores[key]}\`);
}
// An: 85
// Binh: 62
// Chi: 91
// Dung: 48

// Object.entries() + for...of - More modern approach
for (const [name, score] of Object.entries(scores)) {
  const grade = score >= 80 ? "Excellent" : score >= 60 ? "Good" : "Average";
  console.log(\`\${name}: \${score} (\${grade})\`);
}

// Object.keys() + forEach
Object.keys(scores).forEach(name => {
  console.log(name, scores[name]);
});

// Convert object to array to use array methods
const topStudents = Object.entries(scores)
  .filter(([, score]) => score >= 80)
  .map(([name, score]) => ({ name, score }))
  .sort((a, b) => b.score - a.score);

console.log(topStudents);
// [{ name: "Chi", score: 91 }, { name: "An", score: 85 }]

// Array to object (Object.fromEntries)
const doubled = Object.fromEntries(
  Object.entries(scores).map(([name, score]) => [name, score * 2])
);
console.log(doubled); // { An: 170, Binh: 124, Chi: 182, Dung: 96 }`}</code>
      </pre>

      <h4>Putting it all together</h4>
      <pre>
        <code>{`// Real-world example: Processing student data
const classData = [
  { id: 1, name: "An", scores: [85, 90, 78] },
  { id: 2, name: "Binh", scores: [62, 55, 70] },
  { id: 3, name: "Chi", scores: [91, 88, 95] },
  { id: 4, name: "Dung", scores: [48, 52, 45] },
];

const report = classData
  .map(({ name, scores }) => {               // Destructuring in map
    const avg = scores.reduce((s, n) => s + n, 0) / scores.length;
    return { name, avg: Math.round(avg) };
  })
  .filter(({ avg }) => avg >= 60)            // Keep passing students only
  .sort((a, b) => b.avg - a.avg);            // Sort highest score first

console.log(report);
// [
//   { name: "Chi", avg: 91 },
//   { name: "An", avg: 84 },
//   { name: "Binh", avg: 62 }
// ]

// Add rank using spread
const rankedReport = report.map((student, index) => ({
  rank: index + 1,
  ...student
}));
// [
//   { rank: 1, name: "Chi", avg: 91 },
//   { rank: 2, name: "An", avg: 84 },
//   { rank: 3, name: "Binh", avg: 62 }
// ]`}</code>
      </pre>

      <p>
        <strong>Takeaway:</strong> Reviewing Week 2 gave me a clear picture of
        the full Software Testing landscape — from test levels to test design
        techniques. On the JavaScript side, <code>map/filter/reduce</code> are
        indispensable for data processing. Destructuring and spread/rest make
        code noticeably shorter and more readable. Combining all of these enables
        handling complex data transformations elegantly in just a few lines!
      </p>
    </>
  ),
};
