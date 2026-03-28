import { DiaryEntry } from './types';

export const vi: DiaryEntry = {
  date: '2026-03-28',
  title: 'Tổng quan STLC & JavaScript Ngày 4: DOM Manipulation',
  content: (
    <>
      <p>
        Hôm nay mình học về Software Testing Life Cycle (STLC) — vòng đời kiểm
        thử phần mềm với 6 giai đoạn, đồng thời so sánh với SDLC. Phần
        JavaScript học cách thao tác trực tiếp với các phần tử HTML và style
        thông qua DOM.
      </p>

      <h4>STLC - Software Testing Life Cycle</h4>
      <p>
        STLC là một quy trình gồm các hoạt động kiểm thử được thực hiện theo thứ
        tự để đảm bảo chất lượng phần mềm. STLC có 6 giai đoạn chính.
      </p>

      <h4>6 Giai đoạn của STLC</h4>
      <pre>
        <code>{`STLC - Software Testing Life Cycle:
┌─────┬──────────────────────────────────┬────────────────────────────────────┐
│  #  │ Giai đoạn                        │ Hoạt động chính                    │
├─────┼──────────────────────────────────┼────────────────────────────────────┤
│  1  │ Requirement Analysis             │ Review yêu cầu, xác định testable  │
│     │ (Phân tích yêu cầu)              │ requirements, chuẩn bị RTM         │
├─────┼──────────────────────────────────┼────────────────────────────────────┤
│  2  │ Test Planning                    │ Xác định scope, nguồn lực, lịch    │
│     │ (Lập kế hoạch kiểm thử)          │ trình, rủi ro, chiến lược test     │
├─────┼──────────────────────────────────┼────────────────────────────────────┤
│  3  │ Test Case Development            │ Viết test cases, test scripts,     │
│     │ (Phát triển test case)           │ chuẩn bị test data                 │
├─────┼──────────────────────────────────┼────────────────────────────────────┤
│  4  │ Test Environment Setup           │ Cài đặt môi trường, cấu hình,      │
│     │ (Cài đặt môi trường)             │ smoke test để xác nhận sẵn sàng    │
├─────┼──────────────────────────────────┼────────────────────────────────────┤
│  5  │ Test Execution                   │ Chạy test cases, ghi nhận kết      │
│     │ (Thực thi kiểm thử)              │ quả, báo cáo bug, retest           │
├─────┼──────────────────────────────────┼────────────────────────────────────┤
│  6  │ Test Cycle Closure               │ Tổng kết, phân tích metrics,       │
│     │ (Kết thúc chu kỳ kiểm thử)       │ lessons learned, báo cáo cuối      │
└─────┴──────────────────────────────────┴────────────────────────────────────┘`}</code>
      </pre>

      <h4>Chi tiết từng giai đoạn</h4>
      <ul>
        <li>
          <strong>1. Requirement Analysis:</strong> QA phân tích yêu cầu để hiểu
          những gì cần kiểm thử. Output: RTM (Requirements Traceability Matrix)
          — ma trận truy xuất yêu cầu.
        </li>
        <li>
          <strong>2. Test Planning:</strong> Tester trưởng lập Test Plan — tài
          liệu định nghĩa scope, chiến lược, nguồn lực, timeline và rủi ro.
        </li>
        <li>
          <strong>3. Test Case Development:</strong> Viết test cases chi tiết
          dựa trên yêu cầu. Mỗi test case gồm: ID, mô tả, bước thực hiện, dữ
          liệu đầu vào, kết quả mong đợi.
        </li>
        <li>
          <strong>4. Test Environment Setup:</strong> Chuẩn bị môi trường test
          (server, database, cấu hình). Chạy smoke test để xác nhận môi trường
          hoạt động trước khi test chính thức.
        </li>
        <li>
          <strong>5. Test Execution:</strong> Thực thi test cases theo kế hoạch.
          Ghi nhận Pass/Fail, báo cáo defect, retest sau khi fix bug, regression
          test.
        </li>
        <li>
          <strong>6. Test Cycle Closure:</strong> Đánh giá kết quả, so sánh với
          exit criteria, viết Test Summary Report, rút kinh nghiệm cho chu kỳ
          sau.
        </li>
      </ul>

      <h4>So sánh STLC với SDLC</h4>
      <pre>
        <code>{`SDLC vs STLC:
┌──────────────────────┬──────────────────────────────┬────────────────────────────────┐
│ Tiêu chí             │ SDLC                         │ STLC                           │
├──────────────────────┼──────────────────────────────┼────────────────────────────────┤
│ Viết tắt             │ Software Development LC      │ Software Testing LC            │
│ Mục tiêu             │ Phát triển phần mềm          │ Kiểm thử phần mềm              │
│ Người thực hiện      │ Developer + toàn team        │ QA / Tester                    │
│ Phạm vi              │ Toàn bộ vòng đời phần mềm    │ Chỉ hoạt động kiểm thử         │
│ Bắt đầu từ           │ Yêu cầu (Requirements)       │ Yêu cầu (Requirements)         │
│ Kết thúc             │ Bảo trì (Maintenance)        │ Test Cycle Closure             │
│ Output chính         │ Phần mềm hoạt động           │ Test reports, quality sign-off │
│ Quan hệ              │ STLC là một phần của SDLC    │ Chạy song song với SDLC        │
└──────────────────────┴──────────────────────────────┴────────────────────────────────┘`}</code>
      </pre>

      <h4>Sơ đồ SDLC chứa STLC</h4>
      <pre>
        <code>{`SDLC:
┌────────────────────────────────────────────────────────────┐
│  Requirements → Design → Development → Testing → Deploy    │
│                                           ↑                │
│                                    [STLC diễn ra tại đây]  │
│                                                            │
│  STLC phases:                                              │
│  Req Analysis → Test Planning → Test Case Dev              │
│  → Env Setup → Test Execution → Closure                    │
└────────────────────────────────────────────────────────────┘

Điểm khác biệt chính:
• SDLC: Quản lý TOÀN BỘ quá trình tạo ra phần mềm
• STLC: Quản lý quá trình KIỂM TRA phần mềm (subset của SDLC)
• Testing không chỉ xảy ra ở phase "Testing" của SDLC
  → QA bắt đầu ngay từ Requirement Analysis!`}</code>
      </pre>

      <h4>JavaScript Ngày 4: DOM Manipulation</h4>
      <p>
        Mục tiêu: Đọc và chỉnh sửa các phần tử HTML và style trực tiếp từ
        JavaScript thông qua DOM (Document Object Model).
      </p>

      <h4>querySelector & getElementById</h4>
      <pre>
        <code>{`// getElementById - Tìm theo ID (nhanh nhất)
const title = document.getElementById('main-title');
console.log(title); // <h1 id="main-title">...</h1>

// querySelector - Tìm phần tử đầu tiên khớp CSS selector
const btn = document.querySelector('.btn-primary');
const input = document.querySelector('input[type="email"]');
const firstLi = document.querySelector('ul > li');

// querySelectorAll - Tìm TẤT CẢ phần tử khớp → NodeList
const allBtns = document.querySelectorAll('.btn');
const allInputs = document.querySelectorAll('form input');

// Duyệt qua NodeList
allBtns.forEach(btn => {
  btn.style.opacity = '0.8';
});

// Chuyển NodeList → Array nếu cần array methods
const btnsArray = Array.from(allBtns);
const enabledBtns = btnsArray.filter(btn => !btn.disabled);

// Tìm trong một element con (không phải toàn document)
const form = document.querySelector('#login-form');
const formInputs = form.querySelectorAll('input'); // Chỉ trong form`}</code>
      </pre>

      <h4>innerHTML & textContent</h4>
      <pre>
        <code>{`const container = document.querySelector('#content');

// textContent - Đọc/ghi text thuần (an toàn, không parse HTML)
console.log(container.textContent); // Toàn bộ text, không có thẻ HTML

container.textContent = 'Hello World'; // Ghi đè, escape HTML tự động
// → An toàn, tránh XSS attacks

// innerHTML - Đọc/ghi cả HTML (cẩn thận với XSS)
console.log(container.innerHTML); // Trả về chuỗi HTML đầy đủ

container.innerHTML = '<strong>Xin chào</strong> <em>thế giới</em>';
// → Browser parse và render HTML

// CẢNH BÁO: Không dùng innerHTML với dữ liệu từ user!
// const userInput = getUserInput();
// container.innerHTML = userInput; // ❌ XSS vulnerability!
// container.textContent = userInput; // ✅ An toàn

// innerText vs textContent
// textContent: tất cả text kể cả hidden elements
// innerText: chỉ text đang hiển thị (nhận biết CSS)
const hidden = document.querySelector('#hidden-text');
console.log(hidden.textContent); // Trả về text dù hidden
console.log(hidden.innerText);   // "" nếu display: none`}</code>
      </pre>

      <h4>classList (add, remove, toggle)</h4>
      <pre>
        <code>{`const card = document.querySelector('.card');

// Thêm class
card.classList.add('active');
card.classList.add('highlight', 'selected'); // Thêm nhiều class cùng lúc

// Xóa class
card.classList.remove('inactive');
card.classList.remove('old-class', 'another-class');

// Toggle - Thêm nếu chưa có, xóa nếu đã có
card.classList.toggle('expanded');

// Toggle với force param
card.classList.toggle('visible', true);  // Luôn thêm
card.classList.toggle('visible', false); // Luôn xóa

// Kiểm tra có class không
if (card.classList.contains('active')) {
  console.log('Card đang active');
}

// Replace một class
card.classList.replace('old-theme', 'new-theme');

// Ví dụ thực tế: Dark mode toggle
const toggleBtn = document.querySelector('#dark-mode-btn');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode')
    ? 'Light Mode'
    : 'Dark Mode';
});`}</code>
      </pre>

      <h4>createElement & appendChild</h4>
      <pre>
        <code>{`// Tạo element mới
const newDiv = document.createElement('div');
const newPara = document.createElement('p');
const newImg = document.createElement('img');

// Thiết lập nội dung và thuộc tính
newDiv.textContent = 'Đây là div mới';
newDiv.classList.add('card', 'new-card');

newPara.innerHTML = 'Xin chào <strong>thế giới</strong>';

newImg.src = '/images/photo.jpg';
newImg.alt = 'Ảnh mô tả';

// Thêm vào DOM
const container = document.querySelector('#container');

container.appendChild(newDiv);       // Thêm vào cuối
container.prepend(newPara);          // Thêm vào đầu
container.insertBefore(newImg, newDiv); // Chèn trước một element

// insertAdjacentElement - Linh hoạt hơn
const target = document.querySelector('#target');
target.insertAdjacentElement('beforebegin', newDiv); // Trước target
target.insertAdjacentElement('afterbegin', newDiv);  // Đầu trong target
target.insertAdjacentElement('beforeend', newDiv);   // Cuối trong target
target.insertAdjacentElement('afterend', newDiv);    // Sau target

// Ví dụ: Tạo danh sách từ data
const students = ['An', 'Bình', 'Chi', 'Dung'];
const ul = document.createElement('ul');

students.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  li.classList.add('student-item');
  ul.appendChild(li);
});

document.querySelector('#student-list').appendChild(ul);

// Xóa element
const toRemove = document.querySelector('.old-item');
toRemove.remove(); // Xóa chính nó

// Hoặc xóa element con
container.removeChild(container.firstElementChild);`}</code>
      </pre>

      <h4>Modifying attributes & styles</h4>
      <pre>
        <code>{`const link = document.querySelector('a#main-link');

// Đọc/ghi attributes
link.getAttribute('href');          // Đọc giá trị attribute
link.setAttribute('href', '/new'); // Ghi attribute
link.setAttribute('target', '_blank');
link.removeAttribute('disabled');  // Xóa attribute
link.hasAttribute('disabled');     // Kiểm tra có attribute không

// Một số thuộc tính có property tương ứng (nhanh hơn)
const input = document.querySelector('input');
input.value = 'Hello';       // Thay vì setAttribute('value', 'Hello')
input.disabled = true;       // Thay vì setAttribute('disabled', '')
input.checked = false;       // Với checkbox/radio

// data-* attributes → dataset
// HTML: <div data-user-id="123" data-role="admin">
const card = document.querySelector('.user-card');
console.log(card.dataset.userId); // "123"
console.log(card.dataset.role);   // "admin"
card.dataset.status = 'active';   // Thêm data-status="active"

// Chỉnh sửa styles trực tiếp (inline styles)
const box = document.querySelector('.box');

box.style.backgroundColor = 'blue'; // camelCase thay vì background-color
box.style.fontSize = '18px';
box.style.display = 'none';  // Ẩn element
box.style.display = '';      // Xóa inline style (trả về CSS gốc)

// Đọc computed style (style thực tế đang áp dụng)
const computedStyle = getComputedStyle(box);
console.log(computedStyle.backgroundColor); // rgb(0, 0, 255)
console.log(computedStyle.width);           // "200px"

// Thực tế: Nên dùng classList thay vì style trực tiếp
// ❌ Tránh:
box.style.backgroundColor = 'red';
box.style.color = 'white';
box.style.padding = '10px';

// ✅ Tốt hơn: Định nghĩa class trong CSS, toggle bằng JS
box.classList.add('highlighted'); // CSS: .highlighted { background: red; ... }`}</code>
      </pre>

      <h4>Ví dụ thực tế: Todo List với DOM</h4>
      <pre>
        <code>{`// HTML: <input id="todo-input"> <button id="add-btn"> <ul id="todo-list">

const input = document.querySelector('#todo-input');
const addBtn = document.querySelector('#add-btn');
const todoList = document.querySelector('#todo-list');

function createTodoItem(text) {
  const li = document.createElement('li');
  li.classList.add('todo-item');

  const span = document.createElement('span');
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Xóa';
  deleteBtn.classList.add('delete-btn');

  // Xóa khi nhấn nút
  deleteBtn.addEventListener('click', () => li.remove());

  // Toggle hoàn thành khi nhấn text
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  return li;
}

addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return;

  const item = createTodoItem(text);
  todoList.appendChild(item);
  input.value = ''; // Reset input
  input.focus();
});

// Thêm bằng phím Enter
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addBtn.click();
});`}</code>
      </pre>

      <p>
        <strong>Nhận xét:</strong> STLC giúp mình hiểu rõ rằng kiểm thử không
        chỉ là &quot;chạy test&quot; — đó là cả một quy trình từ phân tích yêu
        cầu đến tổng kết. STLC là tập con của SDLC nhưng đóng vai trò trọng yếu
        trong việc đảm bảo chất lượng. Về DOM Manipulation, đây là nền tảng để
        xây dựng giao diện tương tác — hiểu rõ <code>querySelector</code>,{' '}
        <code>classList</code>, <code>createElement</code> giúp mình có thể tạo
        ra các tính năng dynamic mà không cần framework!
      </p>
    </>
  ),
};

export const en: DiaryEntry = {
  date: '2026-03-28',
  title: 'STLC Overview & JavaScript Day 4: DOM Manipulation',
  content: (
    <>
      <p>
        Today I studied the Software Testing Life Cycle (STLC) — its 6 phases in
        detail — and compared it with SDLC. On the JavaScript side, I learned
        how to read and modify HTML elements and styles directly using the DOM.
      </p>

      <h4>STLC - Software Testing Life Cycle</h4>
      <p>
        STLC is a sequence of testing activities carried out methodically to
        ensure software quality. It consists of 6 main phases.
      </p>

      <h4>The 6 Phases of STLC</h4>
      <pre>
        <code>{`STLC - Software Testing Life Cycle:
┌─────┬──────────────────────────────────┬────────────────────────────────────┐
│  #  │ Phase                            │ Key Activities                     │
├─────┼──────────────────────────────────┼────────────────────────────────────┤
│  1  │ Requirement Analysis             │ Review requirements, identify      │
│     │                                  │ testable items, prepare RTM        │
├─────┼──────────────────────────────────┼────────────────────────────────────┤
│  2  │ Test Planning                    │ Define scope, resources, schedule, │
│     │                                  │ risks, and test strategy           │
├─────┼──────────────────────────────────┼────────────────────────────────────┤
│  3  │ Test Case Development            │ Write test cases, test scripts,    │
│     │                                  │ prepare test data                  │
├─────┼──────────────────────────────────┼────────────────────────────────────┤
│  4  │ Test Environment Setup           │ Configure environment, run smoke   │
│     │                                  │ tests to confirm readiness         │
├─────┼──────────────────────────────────┼────────────────────────────────────┤
│  5  │ Test Execution                   │ Run test cases, log results,       │
│     │                                  │ report bugs, retest fixes          │
├─────┼──────────────────────────────────┼────────────────────────────────────┤
│  6  │ Test Cycle Closure               │ Summarize results, analyze metrics,│
│     │                                  │ lessons learned, final report      │
└─────┴──────────────────────────────────┴────────────────────────────────────┘`}</code>
      </pre>

      <h4>Phase Details</h4>
      <ul>
        <li>
          <strong>1. Requirement Analysis:</strong> QA analyzes requirements to
          understand what needs testing. Output: RTM (Requirements Traceability
          Matrix) linking requirements to test cases.
        </li>
        <li>
          <strong>2. Test Planning:</strong> The test lead creates a Test Plan
          document defining scope, strategy, resources, timeline, and risks.
        </li>
        <li>
          <strong>3. Test Case Development:</strong> Write detailed test cases
          based on requirements. Each includes: ID, description, steps, input
          data, and expected result.
        </li>
        <li>
          <strong>4. Test Environment Setup:</strong> Prepare the test
          environment (servers, databases, config). Run a smoke test to confirm
          the environment is ready before formal testing.
        </li>
        <li>
          <strong>5. Test Execution:</strong> Execute test cases per the plan.
          Record Pass/Fail results, report defects, retest fixes, run regression
          tests.
        </li>
        <li>
          <strong>6. Test Cycle Closure:</strong> Evaluate results against exit
          criteria, write the Test Summary Report, and capture lessons learned
          for the next cycle.
        </li>
      </ul>

      <h4>STLC vs SDLC Comparison</h4>
      <pre>
        <code>{`SDLC vs STLC:
┌──────────────────────┬──────────────────────────────┬────────────────────────────────┐
│ Criterion            │ SDLC                         │ STLC                           │
├──────────────────────┼──────────────────────────────┼────────────────────────────────┤
│ Full name            │ Software Development LC      │ Software Testing LC            │
│ Goal                 │ Develop software             │ Test software                  │
│ Who does it          │ Developers + full team       │ QA / Testers                   │
│ Scope                │ Entire software lifecycle    │ Testing activities only        │
│ Starts from          │ Requirements                 │ Requirements                   │
│ Ends at              │ Maintenance                  │ Test Cycle Closure             │
│ Main output          │ Working software             │ Test reports, quality sign-off │
│ Relationship         │ STLC is a subset of SDLC     │ Runs in parallel with SDLC     │
└──────────────────────┴──────────────────────────────┴────────────────────────────────┘`}</code>
      </pre>

      <h4>SDLC containing STLC</h4>
      <pre>
        <code>{`SDLC:
┌──────────────────────────────────────────────────────────┐
│  Requirements → Design → Development → Testing → Deploy  │
│                                           ↑              │
│                                    [STLC happens here]   │
│                                                          │
│  STLC phases:                                            │
│  Req Analysis → Test Planning → Test Case Dev            │
│  → Env Setup → Test Execution → Closure                  │
└──────────────────────────────────────────────────────────┘

Key difference:
• SDLC: Manages the ENTIRE process of creating software
• STLC: Manages the TESTING process (a subset of SDLC)
• Testing doesn't only happen in the "Testing" phase of SDLC
  → QA starts from Requirement Analysis!`}</code>
      </pre>

      <h4>JavaScript Day 4: DOM Manipulation</h4>
      <p>
        Goal: Read and modify HTML elements and styles directly from JavaScript
        using the DOM (Document Object Model).
      </p>

      <h4>querySelector & getElementById</h4>
      <pre>
        <code>{`// getElementById - Find by ID (fastest)
const title = document.getElementById('main-title');
console.log(title); // <h1 id="main-title">...</h1>

// querySelector - Find first element matching CSS selector
const btn = document.querySelector('.btn-primary');
const input = document.querySelector('input[type="email"]');
const firstLi = document.querySelector('ul > li');

// querySelectorAll - Find ALL matching elements → NodeList
const allBtns = document.querySelectorAll('.btn');
const allInputs = document.querySelectorAll('form input');

// Iterate over NodeList
allBtns.forEach(btn => {
  btn.style.opacity = '0.8';
});

// Convert NodeList → Array if you need array methods
const btnsArray = Array.from(allBtns);
const enabledBtns = btnsArray.filter(btn => !btn.disabled);

// Search within a specific element (not the whole document)
const form = document.querySelector('#login-form');
const formInputs = form.querySelectorAll('input'); // Only inside form`}</code>
      </pre>

      <h4>innerHTML & textContent</h4>
      <pre>
        <code>{`const container = document.querySelector('#content');

// textContent - Read/write plain text (safe, does not parse HTML)
console.log(container.textContent); // All text content, no HTML tags

container.textContent = 'Hello World'; // Overwrites, auto-escapes HTML
// → Safe, prevents XSS attacks

// innerHTML - Read/write HTML markup (be careful of XSS)
console.log(container.innerHTML); // Returns full HTML string

container.innerHTML = '<strong>Hello</strong> <em>World</em>';
// → Browser parses and renders the HTML

// WARNING: Never use innerHTML with user-provided data!
// const userInput = getUserInput();
// container.innerHTML = userInput; // ❌ XSS vulnerability!
// container.textContent = userInput; // ✅ Safe

// innerText vs textContent
// textContent: all text including hidden elements
// innerText: only visible text (CSS-aware)
const hidden = document.querySelector('#hidden-text');
console.log(hidden.textContent); // Returns text even if hidden
console.log(hidden.innerText);   // "" if display: none`}</code>
      </pre>

      <h4>classList (add, remove, toggle)</h4>
      <pre>
        <code>{`const card = document.querySelector('.card');

// Add a class
card.classList.add('active');
card.classList.add('highlight', 'selected'); // Add multiple at once

// Remove a class
card.classList.remove('inactive');
card.classList.remove('old-class', 'another-class');

// Toggle - Add if absent, remove if present
card.classList.toggle('expanded');

// Toggle with force param
card.classList.toggle('visible', true);  // Always add
card.classList.toggle('visible', false); // Always remove

// Check if a class exists
if (card.classList.contains('active')) {
  console.log('Card is active');
}

// Replace one class with another
card.classList.replace('old-theme', 'new-theme');

// Real-world example: Dark mode toggle
const toggleBtn = document.querySelector('#dark-mode-btn');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleBtn.textContent = document.body.classList.contains('dark-mode')
    ? 'Light Mode'
    : 'Dark Mode';
});`}</code>
      </pre>

      <h4>createElement & appendChild</h4>
      <pre>
        <code>{`// Create new elements
const newDiv = document.createElement('div');
const newPara = document.createElement('p');
const newImg = document.createElement('img');

// Set content and attributes
newDiv.textContent = 'This is a new div';
newDiv.classList.add('card', 'new-card');

newPara.innerHTML = 'Hello <strong>World</strong>';

newImg.src = '/images/photo.jpg';
newImg.alt = 'Photo description';

// Insert into the DOM
const container = document.querySelector('#container');

container.appendChild(newDiv);          // Append to end
container.prepend(newPara);             // Insert at start
container.insertBefore(newImg, newDiv); // Insert before an element

// insertAdjacentElement - More flexible positioning
const target = document.querySelector('#target');
target.insertAdjacentElement('beforebegin', newDiv); // Before target
target.insertAdjacentElement('afterbegin', newDiv);  // First inside target
target.insertAdjacentElement('beforeend', newDiv);   // Last inside target
target.insertAdjacentElement('afterend', newDiv);    // After target

// Example: Build a list from data
const students = ['An', 'Binh', 'Chi', 'Dung'];
const ul = document.createElement('ul');

students.forEach(name => {
  const li = document.createElement('li');
  li.textContent = name;
  li.classList.add('student-item');
  ul.appendChild(li);
});

document.querySelector('#student-list').appendChild(ul);

// Remove an element
const toRemove = document.querySelector('.old-item');
toRemove.remove(); // Removes itself

// Or remove a child element
container.removeChild(container.firstElementChild);`}</code>
      </pre>

      <h4>Modifying attributes & styles</h4>
      <pre>
        <code>{`const link = document.querySelector('a#main-link');

// Read/write attributes
link.getAttribute('href');           // Read attribute value
link.setAttribute('href', '/new');  // Set attribute
link.setAttribute('target', '_blank');
link.removeAttribute('disabled');   // Remove attribute
link.hasAttribute('disabled');      // Check if attribute exists

// Some attributes have direct properties (faster)
const input = document.querySelector('input');
input.value = 'Hello';       // vs setAttribute('value', 'Hello')
input.disabled = true;       // vs setAttribute('disabled', '')
input.checked = false;       // For checkbox/radio

// data-* attributes → dataset
// HTML: <div data-user-id="123" data-role="admin">
const card = document.querySelector('.user-card');
console.log(card.dataset.userId); // "123"
console.log(card.dataset.role);   // "admin"
card.dataset.status = 'active';   // Sets data-status="active"

// Direct style manipulation (inline styles)
const box = document.querySelector('.box');

box.style.backgroundColor = 'blue'; // camelCase instead of background-color
box.style.fontSize = '18px';
box.style.display = 'none';  // Hide element
box.style.display = '';      // Remove inline style (restore CSS default)

// Read computed style (the actual applied style)
const computedStyle = getComputedStyle(box);
console.log(computedStyle.backgroundColor); // rgb(0, 0, 255)
console.log(computedStyle.width);           // "200px"

// Best practice: Use classList instead of direct style
// ❌ Avoid:
box.style.backgroundColor = 'red';
box.style.color = 'white';
box.style.padding = '10px';

// ✅ Better: Define class in CSS, toggle with JS
box.classList.add('highlighted'); // CSS: .highlighted { background: red; ... }`}</code>
      </pre>

      <h4>Real-world example: Todo List with DOM</h4>
      <pre>
        <code>{`// HTML: <input id="todo-input"> <button id="add-btn"> <ul id="todo-list">

const input = document.querySelector('#todo-input');
const addBtn = document.querySelector('#add-btn');
const todoList = document.querySelector('#todo-list');

function createTodoItem(text) {
  const li = document.createElement('li');
  li.classList.add('todo-item');

  const span = document.createElement('span');
  span.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');

  // Remove on button click
  deleteBtn.addEventListener('click', () => li.remove());

  // Toggle complete on text click
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  return li;
}

addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (!text) return;

  const item = createTodoItem(text);
  todoList.appendChild(item);
  input.value = ''; // Reset input
  input.focus();
});

// Add on Enter key
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addBtn.click();
});`}</code>
      </pre>

      <p>
        <strong>Takeaway:</strong> STLC helped me see that testing is far more
        than just &quot;running tests&quot; — it&apos;s a structured process
        from requirement analysis to cycle closure. STLC is a subset of SDLC but
        plays a crucial role in quality assurance. On the DOM side, mastering{' '}
        <code>querySelector</code>, <code>classList</code>, and{' '}
        <code>createElement</code> gives me the foundation to build interactive
        UIs without relying on a framework!
      </p>
    </>
  ),
};
