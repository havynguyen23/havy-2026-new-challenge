import { DiaryEntry } from './types';

export const vi: DiaryEntry = {
  date: '2026-03-29',
  title: 'Ôn tập STLC & JavaScript Ngày 5: Sự kiện (Events)',
  content: (
    <>
      <p>
        Hôm nay mình ôn lại toàn bộ 6 giai đoạn của STLC với trọng tâm vào
        entry/exit criteria từng giai đoạn, đồng thời củng cố so sánh STLC và
        SDLC. Phần JavaScript học cách lắng nghe và xử lý tương tác của người
        dùng thông qua các sự kiện (events).
      </p>

      <h4>Ôn tập STLC - 6 Giai đoạn chi tiết</h4>
      <p>
        Mỗi giai đoạn trong STLC đều có <strong>Entry Criteria</strong> (điều
        kiện để bắt đầu) và <strong>Exit Criteria</strong> (điều kiện để kết
        thúc/chuyển sang giai đoạn tiếp theo) cùng với{' '}
        <strong>Deliverables</strong> (sản phẩm đầu ra).
      </p>

      <pre>
        <code>{`STLC - Entry/Exit Criteria & Deliverables:
┌───┬──────────────────────────┬──────────────────────────────┬──────────────────────────────┬──────────────────────────────┐
│ # │ Giai đoạn                │ Entry Criteria               │ Exit Criteria                │ Deliverables                 │
├───┼──────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ 1 │ Requirement Analysis     │ - Tài liệu yêu cầu sẵn có    │ - Tất cả yêu cầu đã phân     │ - RTM (Traceability Matrix)  │
│   │                          │ - QA team được phân công     │   tích và phân loại          │ - Danh sách câu hỏi/làm rõ   │
├───┼──────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ 2 │ Test Planning            │ - RTM đã hoàn thành          │ - Test Plan được duyệt       │ - Test Plan document         │
│   │                          │ - Yêu cầu đã được làm rõ     │ - Nguồn lực, timeline xác    │ - Effort estimation          │
│   │                          │                              │   nhận                       │                              │
├───┼──────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ 3 │ Test Case Development    │ - Test Plan được duyệt       │ - Test cases được review     │ - Test cases/scripts         │
│   │                          │ - RTM sẵn sàng               │   và sign-off                │ - Test data                  │
│   │                          │                              │ - RTM được cập nhật          │                              │
├───┼──────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ 4 │ Test Environment Setup   │ - Test Plan sẵn sàng         │ - Môi trường hoạt động       │ - Môi trường test sẵn sàng   │
│   │                          │ - Test data đã chuẩn bị      │ - Smoke test pass            │ - Smoke test results         │
├───┼──────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ 5 │ Test Execution           │ - Test cases được sign-off   │ - Tất cả test cases chạy     │ - Test execution report      │
│   │                          │ - Môi trường đã sẵn sàng     │ - Defects đã được báo cáo    │ - Defect report              │
│   │                          │ - Build sẵn sàng để test     │ - Exit criteria đạt được     │ - RTM cập nhật kết quả       │
├───┼──────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ 6 │ Test Cycle Closure       │ - Test Execution hoàn thành  │ - Test Summary Report        │ - Test Summary Report        │
│   │                          │ - Defects đã được giải quyết │   được duyệt                 │ - Lessons learned document   │
└───┴──────────────────────────┴──────────────────────────────┴──────────────────────────────┴──────────────────────────────┘`}</code>
      </pre>

      <h4>So sánh STLC với SDLC — Nhìn sâu hơn</h4>
      <pre>
        <code>{`SDLC vs STLC - So sánh toàn diện:
┌──────────────────────┬──────────────────────────────┬────────────────────────────────┐
│ Tiêu chí             │ SDLC                         │ STLC                           │
├──────────────────────┼──────────────────────────────┼────────────────────────────────┤
│ Viết tắt             │ Software Development LC      │ Software Testing LC            │
│ Mục tiêu             │ Xây dựng phần mềm            │ Đảm bảo chất lượng phần mềm    │
│ Người thực hiện      │ Developer + toàn team        │ QA / Tester                    │
│ Phạm vi              │ Toàn bộ vòng đời             │ Chỉ hoạt động kiểm thử         │
│ Giai đoạn            │ 6-8 giai đoạn (tùy mô hình)  │ 6 giai đoạn cố định            │
│ Bắt đầu từ           │ Requirements                 │ Requirements                   │
│ Kết thúc             │ Maintenance                  │ Test Cycle Closure             │
│ Focus                │ Tính năng & chức năng        │ Chất lượng & defects           │
│ Output               │ Phần mềm hoạt động           │ Test reports, quality sign-off │
│ Quan hệ              │ STLC là một phần của SDLC    │ Chạy song song với SDLC        │
└──────────────────────┴──────────────────────────────┴────────────────────────────────┘

Điểm quan trọng cần nhớ:
• STLC ⊂ SDLC: Testing không tách rời mà là một phần của SDLC
• QA tham gia từ sớm: Ngay từ Requirement Analysis, không chờ đến "Testing phase"
• Testing phase của SDLC ≠ toàn bộ STLC: STLC bắt đầu trước và kết thúc sau
• Mục tiêu cuối cùng: Cả hai đều hướng đến phần mềm chất lượng cao`}</code>
      </pre>

      <h4>JavaScript Ngày 5: Xử lý sự kiện (Event Handling)</h4>
      <p>
        Mục tiêu: Phản hồi các tương tác của người dùng như click, nhập liệu và
        thao tác bàn phím.
      </p>

      <h4>addEventListener</h4>
      <pre>
        <code>{`// Cú pháp cơ bản
element.addEventListener(eventType, handlerFunction);

const btn = document.querySelector('#submit-btn');

// Cách 1: Named function (có thể remove sau)
function handleClick() {
  console.log('Đã click!');
}
btn.addEventListener('click', handleClick);
btn.removeEventListener('click', handleClick); // Xóa được

// Cách 2: Arrow function (không thể remove vì không có reference)
btn.addEventListener('click', () => {
  console.log('Đã click!');
});

// Ưu điểm của addEventListener vs onclick
// ✅ addEventListener: Thêm được nhiều handler cho cùng 1 event
btn.addEventListener('click', handler1);
btn.addEventListener('click', handler2); // Cả 2 đều chạy

// ❌ onclick: Handler sau ghi đè handler trước
btn.onclick = handler1;
btn.onclick = handler2; // Chỉ handler2 chạy

// Options (tùy chọn thứ 3)
btn.addEventListener('click', handler, {
  once: true,    // Chỉ chạy 1 lần rồi tự remove
  capture: false, // Sử dụng bubbling (mặc định)
  passive: true,  // Không gọi preventDefault (tối ưu scroll)
});`}</code>
      </pre>

      <h4>click, input, submit events</h4>
      <pre>
        <code>{`// --- click event ---
const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
  console.log('Click tại:', e.clientX, e.clientY); // Tọa độ chuột
});

// dblclick: double click
btn.addEventListener('dblclick', () => console.log('Double click!'));

// --- input event ---
// Kích hoạt mỗi khi giá trị thay đổi (gõ phím, paste, xóa)
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', (e) => {
  console.log('Giá trị hiện tại:', e.target.value);
  // Ví dụ: live character count
  document.querySelector('#char-count').textContent = e.target.value.length;
});

// change vs input
// input: kích hoạt ngay khi gõ (real-time)
// change: kích hoạt sau khi mất focus VÀ giá trị thay đổi
nameInput.addEventListener('change', (e) => {
  console.log('Đã thay đổi thành:', e.target.value);
});

// --- submit event ---
// Chỉ dùng trên <form>, kích hoạt khi submit form
const form = document.querySelector('#login-form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Ngăn reload trang (quan trọng!)

  const username = form.querySelector('#username').value;
  const password = form.querySelector('#password').value;

  if (!username || !password) {
    alert('Vui lòng điền đầy đủ thông tin');
    return;
  }

  console.log('Đăng nhập với:', username);
  // Gửi dữ liệu lên server...
});`}</code>
      </pre>

      <h4>Event object & preventDefault</h4>
      <pre>
        <code>{`// Event object chứa thông tin về sự kiện
document.querySelector('#link').addEventListener('click', (e) => {
  // Thuộc tính phổ biến của Event object:
  console.log(e.type);          // "click" - loại sự kiện
  console.log(e.target);        // Element người dùng thực sự click vào
  console.log(e.currentTarget); // Element gắn event listener
  console.log(e.timeStamp);     // Thời điểm xảy ra sự kiện (ms)

  // Dừng hành vi mặc định của trình duyệt
  e.preventDefault();
  // Dùng khi: ngăn link chuyển trang, ngăn form reload, ngăn context menu...
});

// Ví dụ: Ngăn link chuyển trang
document.querySelectorAll('a.internal').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    // Xử lý điều hướng bằng JS (SPA routing)
    navigateTo(href);
  });
});

// stopPropagation: Ngăn event lan lên các phần tử cha
// (khác với preventDefault — ngăn hành vi mặc định)
const inner = document.querySelector('.inner');
inner.addEventListener('click', (e) => {
  e.stopPropagation(); // Click vào inner KHÔNG lan lên outer
  console.log('Inner clicked');
});

document.querySelector('.outer').addEventListener('click', () => {
  console.log('Outer clicked'); // Không chạy nếu click vào inner
});

// stopImmediatePropagation: Ngăn cả các listener khác trên cùng element
btn.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  console.log('Handler 1'); // Chạy
});
btn.addEventListener('click', () => {
  console.log('Handler 2'); // KHÔNG chạy
});`}</code>
      </pre>

      <h4>Event Delegation</h4>
      <pre>
        <code>{`// Vấn đề: Thêm listener cho từng item — tốn bộ nhớ, không hoạt động với
// items tạo động sau này
document.querySelectorAll('.todo-item').forEach(item => {
  item.addEventListener('click', handleClick); // ❌ Kém hiệu quả
});

// Giải pháp: Event Delegation — Gắn 1 listener vào phần tử cha
// Event bubble lên từ con → cha, dùng e.target để xác định nguồn
const todoList = document.querySelector('#todo-list');

todoList.addEventListener('click', (e) => {
  // Kiểm tra xem có phải phần tử mình muốn không
  if (e.target.classList.contains('delete-btn')) {
    e.target.closest('li').remove();
    return;
  }

  if (e.target.classList.contains('todo-text')) {
    e.target.closest('li').classList.toggle('completed');
    return;
  }
});

// closest() - Tìm tổ tiên gần nhất khớp selector (đi từ dưới lên)
// Rất hữu ích trong event delegation để tìm phần tử cha
document.querySelector('#product-grid').addEventListener('click', (e) => {
  const card = e.target.closest('.product-card');
  if (!card) return; // Click ra ngoài card

  const productId = card.dataset.id;
  console.log('Xem sản phẩm:', productId);
});

// Ưu điểm của Event Delegation:
// ✅ 1 listener thay vì N listener → tiết kiệm bộ nhớ
// ✅ Tự động hoạt động với elements được thêm vào sau
// ✅ Code gọn hơn, dễ quản lý`}</code>
      </pre>

      <h4>Keyboard events</h4>
      <pre>
        <code>{`// keydown: Khi nhấn phím xuống (lặp lại nếu giữ phím)
// keyup: Khi thả phím ra
// keypress: Đã DEPRECATED, không dùng nữa

document.addEventListener('keydown', (e) => {
  console.log(e.key);     // "Enter", "a", "ArrowLeft", " " (space)...
  console.log(e.code);    // "Enter", "KeyA", "ArrowLeft", "Space"...
  console.log(e.keyCode); // Số (deprecated, tránh dùng)

  // e.key: Giá trị phím (phụ thuộc ngôn ngữ/bàn phím)
  // e.code: Vị trí vật lý phím (không đổi dù layout bàn phím)
});

// Modifier keys
document.addEventListener('keydown', (e) => {
  console.log(e.ctrlKey);  // true nếu đang giữ Ctrl
  console.log(e.shiftKey); // true nếu đang giữ Shift
  console.log(e.altKey);   // true nếu đang giữ Alt
  console.log(e.metaKey);  // true nếu đang giữ Cmd (Mac) / Win (Windows)

  // Ví dụ: Ctrl+S để save
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault(); // Ngăn hành vi save của trình duyệt
    saveDocument();
  }

  // Ví dụ: Escape để đóng modal
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Ví dụ thực tế: Navigation bằng phím mũi tên
const items = document.querySelectorAll('.menu-item');
let currentIndex = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    currentIndex = Math.min(currentIndex + 1, items.length - 1);
    items[currentIndex].focus();
  }

  if (e.key === 'ArrowUp') {
    e.preventDefault();
    currentIndex = Math.max(currentIndex - 1, 0);
    items[currentIndex].focus();
  }

  if (e.key === 'Enter') {
    items[currentIndex].click();
  }
});`}</code>
      </pre>

      <h4>Ví dụ thực tế: Form với đầy đủ Event Handling</h4>
      <pre>
        <code>{`// HTML:
// <form id="signup-form">
//   <input id="email" type="email" placeholder="Email">
//   <span id="email-error" class="error"></span>
//   <input id="password" type="password" placeholder="Mật khẩu">
//   <button type="submit">Đăng ký</button>
// </form>

const form = document.querySelector('#signup-form');
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');
const passwordInput = document.querySelector('#password');

// Validate email real-time khi nhập
emailInput.addEventListener('input', (e) => {
  const value = e.target.value;
  const isValid = value.includes('@') && value.includes('.');

  emailError.textContent = isValid || !value ? '' : 'Email không hợp lệ';
  emailInput.classList.toggle('invalid', !!value && !isValid);
});

// Hiện/ẩn password khi nhấn Ctrl+H
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'h') {
    e.preventDefault();
    passwordInput.type =
      passwordInput.type === 'password' ? 'text' : 'password';
  }
});

// Xử lý submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    alert('Vui lòng điền đầy đủ');
    return;
  }

  console.log('Đăng ký:', { email });
  form.reset(); // Reset tất cả fields
});`}</code>
      </pre>

      <p>
        <strong>Nhận xét:</strong> Ôn lại STLC giúp mình hiểu rõ hơn vai trò của
        entry/exit criteria — đây là thứ QA cần nắm để biết khi nào được bắt đầu
        và khi nào được kết thúc một giai đoạn. Về Events trong JavaScript,{' '}
        <code>addEventListener</code> kết hợp với event delegation là pattern
        cực kỳ quan trọng — thay vì gắn hàng chục listener, chỉ cần 1 listener
        trên phần tử cha là đủ xử lý mọi thứ bên trong!
      </p>
    </>
  ),
};

export const en: DiaryEntry = {
  date: '2026-03-29',
  title: 'STLC Review & JavaScript Day 5: Events',
  content: (
    <>
      <p>
        Today I reviewed all 6 phases of STLC with a focus on entry/exit
        criteria per phase, and reinforced the STLC vs SDLC comparison. On the
        JavaScript side, I learned how to listen and respond to user
        interactions through events.
      </p>

      <h4>STLC Review — 6 Phases in Detail</h4>
      <p>
        Each STLC phase has <strong>Entry Criteria</strong> (conditions to start
        the phase), <strong>Exit Criteria</strong> (conditions to finish and
        move on), and <strong>Deliverables</strong> (outputs produced).
      </p>

      <pre>
        <code>{`STLC - Entry/Exit Criteria & Deliverables:
┌───┬──────────────────────────┬──────────────────────────────┬──────────────────────────────┬──────────────────────────────┐
│ # │ Phase                    │ Entry Criteria               │ Exit Criteria                │ Deliverables                 │
├───┼──────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ 1 │ Requirement Analysis     │ - Requirements docs available│ - All requirements analyzed  │ - RTM (Traceability Matrix)  │
│   │                          │ - QA team assigned           │   and categorized            │ - Clarification questions    │
├───┼──────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ 2 │ Test Planning            │ - RTM completed              │ - Test Plan reviewed         │ - Test Plan document         │
│   │                          │ - Requirements clarified     │   and approved               │ - Effort estimation          │
│   │                          │                              │ - Resources & timeline set   │                              │
├───┼──────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ 3 │ Test Case Development    │ - Test Plan approved         │ - Test cases reviewed        │ - Test cases/scripts         │
│   │                          │ - RTM available              │   and signed off             │ - Test data prepared         │
│   │                          │                              │ - RTM updated                │                              │
├───┼──────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ 4 │ Test Environment Setup   │ - Test Plan ready            │ - Environment is functional  │ - Ready test environment     │
│   │                          │ - Test data prepared         │ - Smoke test passes          │ - Smoke test results         │
├───┼──────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ 5 │ Test Execution           │ - Test cases signed off      │ - All test cases executed    │ - Test execution report      │
│   │                          │ - Environment ready          │ - Defects logged             │ - Defect report              │
│   │                          │ - Build available for test   │ - Exit criteria met          │ - Updated RTM with results   │
├───┼──────────────────────────┼──────────────────────────────┼──────────────────────────────┼──────────────────────────────┤
│ 6 │ Test Cycle Closure       │ - Test Execution complete    │ - Test Summary Report        │ - Test Summary Report        │
│   │                          │ - Defects resolved           │   approved                   │ - Lessons learned document   │
└───┴──────────────────────────┴──────────────────────────────┴──────────────────────────────┴──────────────────────────────┘`}</code>
      </pre>

      <h4>STLC vs SDLC — Deeper Comparison</h4>
      <pre>
        <code>{`SDLC vs STLC - Full comparison:
┌──────────────────────┬──────────────────────────────┬────────────────────────────────┐
│ Criterion            │ SDLC                         │ STLC                           │
├──────────────────────┼──────────────────────────────┼────────────────────────────────┤
│ Full name            │ Software Development LC      │ Software Testing LC            │
│ Goal                 │ Build software               │ Ensure software quality        │
│ Who does it          │ Developers + full team       │ QA / Testers                   │
│ Scope                │ Entire software lifecycle    │ Testing activities only        │
│ Phases               │ 6-8 phases (varies by model) │ 6 fixed phases                 │
│ Starts from          │ Requirements                 │ Requirements                   │
│ Ends at              │ Maintenance                  │ Test Cycle Closure             │
│ Focus                │ Features & functionality     │ Quality & defects              │
│ Main output          │ Working software             │ Test reports, quality sign-off │
│ Relationship         │ STLC is a subset of SDLC     │ Runs in parallel with SDLC     │
└──────────────────────┴──────────────────────────────┴────────────────────────────────┘

Key takeaways:
• STLC ⊂ SDLC: Testing is embedded within the development lifecycle, not separate
• QA joins early: From Requirement Analysis, not just the "Testing phase"
• SDLC testing phase ≠ entire STLC: STLC starts before and ends after it
• Shared end goal: Both aim to deliver high-quality software`}</code>
      </pre>

      <h4>JavaScript Day 5: Event Handling</h4>
      <p>
        Goal: Respond to user interactions like clicks, inputs, and keyboard
        actions.
      </p>

      <h4>addEventListener</h4>
      <pre>
        <code>{`// Basic syntax
element.addEventListener(eventType, handlerFunction);

const btn = document.querySelector('#submit-btn');

// Approach 1: Named function (can be removed later)
function handleClick() {
  console.log('Clicked!');
}
btn.addEventListener('click', handleClick);
btn.removeEventListener('click', handleClick); // Can be removed

// Approach 2: Arrow function (cannot be removed — no reference)
btn.addEventListener('click', () => {
  console.log('Clicked!');
});

// addEventListener vs onclick
// ✅ addEventListener: Multiple handlers for the same event
btn.addEventListener('click', handler1);
btn.addEventListener('click', handler2); // Both run

// ❌ onclick: Second handler overwrites the first
btn.onclick = handler1;
btn.onclick = handler2; // Only handler2 runs

// Options (third argument)
btn.addEventListener('click', handler, {
  once: true,    // Auto-remove after first trigger
  capture: false, // Use bubbling phase (default)
  passive: true,  // Cannot call preventDefault (optimizes scroll)
});`}</code>
      </pre>

      <h4>click, input, submit events</h4>
      <pre>
        <code>{`// --- click event ---
const btn = document.querySelector('#btn');
btn.addEventListener('click', (e) => {
  console.log('Clicked at:', e.clientX, e.clientY); // Mouse coordinates
});

// dblclick: double click
btn.addEventListener('dblclick', () => console.log('Double clicked!'));

// --- input event ---
// Fires every time the value changes (typing, paste, delete)
const nameInput = document.querySelector('#name');
nameInput.addEventListener('input', (e) => {
  console.log('Current value:', e.target.value);
  // Example: live character count
  document.querySelector('#char-count').textContent = e.target.value.length;
});

// change vs input
// input: fires immediately on every keystroke (real-time)
// change: fires on blur AND only if the value changed
nameInput.addEventListener('change', (e) => {
  console.log('Changed to:', e.target.value);
});

// --- submit event ---
// Only on <form>, fires when the form is submitted
const form = document.querySelector('#login-form');
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent page reload (important!)

  const username = form.querySelector('#username').value;
  const password = form.querySelector('#password').value;

  if (!username || !password) {
    alert('Please fill in all fields');
    return;
  }

  console.log('Logging in as:', username);
  // Send data to server...
});`}</code>
      </pre>

      <h4>Event object & preventDefault</h4>
      <pre>
        <code>{`// The Event object holds information about the event
document.querySelector('#link').addEventListener('click', (e) => {
  // Common Event object properties:
  console.log(e.type);          // "click" — the event type
  console.log(e.target);        // The element the user actually interacted with
  console.log(e.currentTarget); // The element the listener is attached to
  console.log(e.timeStamp);     // When the event occurred (ms)

  // Prevent the browser's default behavior
  e.preventDefault();
  // Use cases: stop link navigation, stop form reload, stop context menu...
});

// Example: Prevent link navigation
document.querySelectorAll('a.internal').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    // Handle navigation in JS (SPA routing)
    navigateTo(href);
  });
});

// stopPropagation: Prevent event from bubbling up to parent elements
// (different from preventDefault — that stops default browser behavior)
const inner = document.querySelector('.inner');
inner.addEventListener('click', (e) => {
  e.stopPropagation(); // Click on inner does NOT bubble to outer
  console.log('Inner clicked');
});

document.querySelector('.outer').addEventListener('click', () => {
  console.log('Outer clicked'); // Does not run if inner was clicked
});

// stopImmediatePropagation: Also prevents other listeners on the same element
btn.addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  console.log('Handler 1'); // Runs
});
btn.addEventListener('click', () => {
  console.log('Handler 2'); // Does NOT run
});`}</code>
      </pre>

      <h4>Event Delegation</h4>
      <pre>
        <code>{`// Problem: Adding a listener to each item wastes memory and
// won't work for dynamically added items
document.querySelectorAll('.todo-item').forEach(item => {
  item.addEventListener('click', handleClick); // ❌ Inefficient
});

// Solution: Event Delegation — attach ONE listener to the parent
// Events bubble up from child → parent; use e.target to identify the source
const todoList = document.querySelector('#todo-list');

todoList.addEventListener('click', (e) => {
  // Check if the clicked element is what we care about
  if (e.target.classList.contains('delete-btn')) {
    e.target.closest('li').remove();
    return;
  }

  if (e.target.classList.contains('todo-text')) {
    e.target.closest('li').classList.toggle('completed');
    return;
  }
});

// closest() - Finds the nearest ancestor matching a selector (walks up)
// Very useful in event delegation to find the parent container
document.querySelector('#product-grid').addEventListener('click', (e) => {
  const card = e.target.closest('.product-card');
  if (!card) return; // Clicked outside any card

  const productId = card.dataset.id;
  console.log('Viewing product:', productId);
});

// Benefits of Event Delegation:
// ✅ 1 listener instead of N listeners → less memory
// ✅ Automatically works for elements added later
// ✅ Cleaner, easier-to-manage code`}</code>
      </pre>

      <h4>Keyboard events</h4>
      <pre>
        <code>{`// keydown: Fires when a key is pressed (repeats if held)
// keyup: Fires when a key is released
// keypress: DEPRECATED — do not use

document.addEventListener('keydown', (e) => {
  console.log(e.key);     // "Enter", "a", "ArrowLeft", " " (space)...
  console.log(e.code);    // "Enter", "KeyA", "ArrowLeft", "Space"...
  console.log(e.keyCode); // Number (deprecated, avoid)

  // e.key: The key value (language/layout dependent)
  // e.code: Physical key position (stays the same regardless of layout)
});

// Modifier keys
document.addEventListener('keydown', (e) => {
  console.log(e.ctrlKey);  // true if Ctrl is held
  console.log(e.shiftKey); // true if Shift is held
  console.log(e.altKey);   // true if Alt is held
  console.log(e.metaKey);  // true if Cmd (Mac) / Win key is held

  // Example: Ctrl+S to save
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault(); // Prevent browser's save dialog
    saveDocument();
  }

  // Example: Escape to close modal
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Real-world example: Arrow key navigation
const items = document.querySelectorAll('.menu-item');
let currentIndex = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault();
    currentIndex = Math.min(currentIndex + 1, items.length - 1);
    items[currentIndex].focus();
  }

  if (e.key === 'ArrowUp') {
    e.preventDefault();
    currentIndex = Math.max(currentIndex - 1, 0);
    items[currentIndex].focus();
  }

  if (e.key === 'Enter') {
    items[currentIndex].click();
  }
});`}</code>
      </pre>

      <h4>Real-world example: Form with full Event Handling</h4>
      <pre>
        <code>{`// HTML:
// <form id="signup-form">
//   <input id="email" type="email" placeholder="Email">
//   <span id="email-error" class="error"></span>
//   <input id="password" type="password" placeholder="Password">
//   <button type="submit">Sign Up</button>
// </form>

const form = document.querySelector('#signup-form');
const emailInput = document.querySelector('#email');
const emailError = document.querySelector('#email-error');
const passwordInput = document.querySelector('#password');

// Real-time email validation on input
emailInput.addEventListener('input', (e) => {
  const value = e.target.value;
  const isValid = value.includes('@') && value.includes('.');

  emailError.textContent = isValid || !value ? '' : 'Invalid email address';
  emailInput.classList.toggle('invalid', !!value && !isValid);
});

// Toggle password visibility with Ctrl+H
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'h') {
    e.preventDefault();
    passwordInput.type =
      passwordInput.type === 'password' ? 'text' : 'password';
  }
});

// Handle form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    alert('Please fill in all fields');
    return;
  }

  console.log('Signing up:', { email });
  form.reset(); // Reset all fields
});`}</code>
      </pre>

      <p>
        <strong>Takeaway:</strong> Reviewing STLC with entry/exit criteria
        clarified when QA can officially start or finish each phase — it&apos;s
        not arbitrary, there are concrete conditions. For JavaScript events,
        <code>addEventListener</code> combined with event delegation is a
        powerful pattern: instead of attaching dozens of listeners, one listener
        on the parent handles everything inside it — including elements added
        dynamically!
      </p>
    </>
  ),
};
