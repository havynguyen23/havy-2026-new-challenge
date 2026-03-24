import { DiaryEntry } from './types';

export const vi: DiaryEntry = {
  date: '2026-03-24',
  title:
    'Verification vs Validation & CSS: Transitions, Animations & Custom Properties',
  content: (
    <>
      <p>
        Hôm nay mình học về sự khác biệt giữa Verification và Validation trong
        kiểm thử phần mềm, cùng với static testing và dynamic testing. Về CSS,
        mình tìm hiểu cách thêm chuyển động và theming động cho trang web bằng
        transitions, keyframe animations và custom properties.
      </p>

      <h4>Software Testing - Ngày 10: Verification vs Validation</h4>

      <h4>Verification - &quot;Xây đúng cách&quot;</h4>
      <p>
        Verification kiểm tra xem sản phẩm có được xây dựng{' '}
        <em>đúng theo đặc tả/yêu cầu</em> hay không. Câu hỏi chính:{' '}
        <strong>&quot;Are we building the product right?&quot;</strong>
      </p>
      <ul>
        <li>
          Tập trung vào <strong>quy trình</strong> và <strong>tài liệu</strong>
        </li>
        <li>
          Thường thực hiện <strong>không cần chạy code</strong> (static)
        </li>
        <li>
          <strong>Ví dụ:</strong> Review requirements, review code, kiểm tra
          thiết kế, walkthrough tài liệu
        </li>
        <li>
          <strong>Phát hiện:</strong> Requirements mâu thuẫn, thiết kế không
          đúng spec, code không theo chuẩn
        </li>
      </ul>

      <h4>Validation - &quot;Xây đúng thứ&quot;</h4>
      <p>
        Validation kiểm tra xem sản phẩm có <em>đáp ứng nhu cầu thực tế</em> của
        người dùng hay không. Câu hỏi chính:{' '}
        <strong>&quot;Are we building the right product?&quot;</strong>
      </p>
      <ul>
        <li>
          Tập trung vào <strong>sản phẩm cuối cùng</strong>
        </li>
        <li>
          Thường thực hiện bằng cách <strong>chạy phần mềm</strong> (dynamic)
        </li>
        <li>
          <strong>Ví dụ:</strong> User Acceptance Testing (UAT), beta testing,
          demo cho khách hàng, A/B testing
        </li>
        <li>
          <strong>Phát hiện:</strong> Sản phẩm không hữu ích, UX kém, tính năng
          không cần thiết, thiếu tính năng quan trọng
        </li>
      </ul>

      <h4>So sánh Verification vs Validation</h4>
      <pre>
        <code>{`┌──────────────────┬─────────────────────────────┬──────────────────────────┐
│                  │        Verification         │        Validation        │
├──────────────────┼─────────────────────────────┼──────────────────────────┤
│ Câu hỏi          │ Building it right?          │ Building the right one?  │
│ Tập trung        │ Quy trình, tài liệu         │ Sản phẩm cuối cùng       │
│ Khi nào          │ Trong quá trình phát triển  │ Sau khi hoàn thành       │
│ Phương pháp      │ Review, inspection          │ Testing, demo, UAT       │
│ Có chạy code?    │ Không (Static)              │ Có (Dynamic)             │
│ Ví dụ            │ Code review, walkthrough    │ UAT, beta test           │
│ Phát hiện        │ Sai sót trong quy trình     │ Sản phẩm không phù hợp   │
└──────────────────┴─────────────────────────────┴──────────────────────────┘`}</code>
      </pre>

      <h4>Ví dụ thực tế</h4>
      <p>Giả sử bạn được yêu cầu xây một ứng dụng đặt đồ ăn cho khách hàng:</p>
      <ul>
        <li>
          <strong>Verification:</strong> Kiểm tra code có implement đúng theo
          wireframe và requirements không? Menu có hiển thị đúng giá không?
          Logic tính tổng đơn hàng có đúng không? Code có theo coding standards
          không?
        </li>
        <li>
          <strong>Validation:</strong> Khách hàng thực sự dùng thử app - họ có
          thể đặt đồ ăn dễ dàng không? Flow đặt hàng có trực quan không? App có
          giải quyết đúng vấn đề mà khách hàng gặp phải không?
        </li>
      </ul>

      <h4>Static Testing vs Dynamic Testing</h4>

      <h4>Static Testing - Kiểm thử không chạy code</h4>
      <p>
        Static testing kiểm tra phần mềm <strong>mà không thực thi</strong>{' '}
        chương trình. Phát hiện lỗi sớm trước khi code được chạy.
      </p>
      <ul>
        <li>
          <strong>Review (Informal review):</strong> Đồng nghiệp đọc và nhận xét
          code/tài liệu một cách không chính thức
        </li>
        <li>
          <strong>Walkthrough:</strong> Tác giả trình bày code/tài liệu cho
          nhóm, nhận phản hồi
        </li>
        <li>
          <strong>Inspection:</strong> Quy trình review chính thức nhất - có
          checklist, moderator, và quy trình ghi nhận defect
        </li>
        <li>
          <strong>Static analysis:</strong> Dùng công cụ tự động phân tích code
          (ESLint, SonarQube, TypeScript compiler)
        </li>
      </ul>

      <h4>Dynamic Testing - Kiểm thử bằng cách chạy code</h4>
      <p>
        Dynamic testing kiểm tra phần mềm bằng cách{' '}
        <strong>thực thi chương trình</strong> với dữ liệu đầu vào và kiểm tra
        kết quả đầu ra.
      </p>
      <ul>
        <li>
          <strong>Unit testing:</strong> Test từng function/component riêng lẻ
        </li>
        <li>
          <strong>Integration testing:</strong> Test sự kết hợp giữa các module
        </li>
        <li>
          <strong>System testing:</strong> Test toàn bộ hệ thống
        </li>
        <li>
          <strong>UAT:</strong> Người dùng thực tế test sản phẩm
        </li>
      </ul>

      <h4>So sánh Static vs Dynamic Testing</h4>
      <pre>
        <code>{`┌──────────────────┬──────────────────────────┬──────────────────────────┐
│                  │      Static Testing      │      Dynamic Testing     │
├──────────────────┼──────────────────────────┼──────────────────────────┤
│ Chạy code?       │ Không                    │ Có                       │
│ Khi nào          │ Sớm trong SDLC           │ Sau khi có code chạy được│
│ Tìm được gì      │ Lỗi cú pháp, vi phạm     │ Lỗi logic, performance,  │
│                  │ chuẩn, lỗi logic rõ ràng │ runtime errors           │
│ Chi phí          │ Thấp                     │ Cao hơn                  │
│ Công cụ          │ ESLint, SonarQube        │ Jest, Selenium, Cypress  │
│ Ví dụ            │ Code review, linting     │ Run test cases           │
└──────────────────┴──────────────────────────┴──────────────────────────┘`}</code>
      </pre>

      <h4>Mối quan hệ giữa các khái niệm</h4>
      <pre>
        <code>{`Verification ←→ Static Testing
  "Xây đúng cách" → Review, inspect mà không cần chạy code

Validation ←→ Dynamic Testing
  "Xây đúng thứ" → Chạy phần mềm để kiểm tra với người dùng

Lưu ý: Đây là mối tương quan, không phải tương đương hoàn toàn.
- Verification có thể dùng dynamic testing (test đúng spec)
- Validation có thể dùng static testing (review requirements với users)`}</code>
      </pre>

      <h4>CSS - Ngày 4: Transitions, Animations & Custom Properties</h4>
      <p>
        Mục tiêu: Thêm chuyển động và theming động cho trang web bằng CSS
        transitions, keyframe animations và custom properties.
      </p>

      <h4>transition - Chuyển đổi mượt mà</h4>
      <p>
        Transition tạo hiệu ứng chuyển đổi mượt giữa hai trạng thái CSS. Thay vì
        thay đổi đột ngột, thuộc tính sẽ thay đổi dần trong khoảng thời gian
        được chỉ định.
      </p>
      <pre>
        <code>{`/* Cú pháp đầy đủ */
.button {
  background: #3b82f6;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;

  /* transition: property duration timing-function delay */
  transition: background 0.3s ease;
}

.button:hover {
  background: #1d4ed8;
}

/* Nhiều thuộc tính */
.card {
  transform: translateY(0);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

/* Tất cả thuộc tính */
.element {
  transition: all 0.3s ease;
  /* Cẩn thận: có thể ảnh hưởng performance */
}`}</code>
      </pre>

      <h4>Timing functions</h4>
      <pre>
        <code>{`/* Các timing function phổ biến */
transition: all 0.3s ease;        /* Chậm → nhanh → chậm (mặc định) */
transition: all 0.3s ease-in;     /* Chậm → nhanh */
transition: all 0.3s ease-out;    /* Nhanh → chậm */
transition: all 0.3s ease-in-out; /* Chậm → nhanh → chậm (đối xứng) */
transition: all 0.3s linear;      /* Tốc độ đều */

/* Custom với cubic-bezier */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);`}</code>
      </pre>

      <h4>@keyframes & animation - Hiệu ứng phức tạp</h4>
      <p>
        Keyframes cho phép tạo animation với nhiều bước, chạy tự động mà không
        cần trigger (hover, click). Mạnh mẽ hơn transition vì có thể định nghĩa
        nhiều giai đoạn.
      </p>
      <pre>
        <code>{`/* Định nghĩa animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Sử dụng animation */
.element {
  animation: fadeIn 0.5s ease forwards;
  /* animation: name duration timing fill-mode */
}

/* Nhiều bước (keyframes) */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.badge {
  animation: pulse 2s ease-in-out infinite;
  /* infinite = lặp mãi */
}

/* Animation properties đầy đủ */
.element {
  animation-name: fadeIn;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-delay: 0.2s;
  animation-iteration-count: 1;    /* hoặc infinite */
  animation-direction: normal;      /* hoặc reverse, alternate */
  animation-fill-mode: forwards;    /* Giữ trạng thái cuối */
}`}</code>
      </pre>

      <h4>transform - Biến đổi phần tử</h4>
      <p>
        Transform thay đổi hình dạng, vị trí, kích thước của phần tử mà không
        ảnh hưởng đến layout (không đẩy các phần tử khác).
      </p>
      <pre>
        <code>{`/* translate - Di chuyển */
.element {
  transform: translateX(20px);     /* Sang phải 20px */
  transform: translateY(-10px);    /* Lên trên 10px */
  transform: translate(20px, -10px); /* Cả X và Y */
}

/* scale - Phóng to/thu nhỏ */
.element {
  transform: scale(1.5);           /* Phóng to 150% */
  transform: scale(0.8);           /* Thu nhỏ 80% */
  transform: scaleX(2);            /* Kéo ngang gấp đôi */
}

/* rotate - Xoay */
.element {
  transform: rotate(45deg);        /* Xoay 45 độ theo chiều kim đồng hồ */
  transform: rotate(-90deg);       /* Xoay ngược 90 độ */
}

/* Kết hợp nhiều transform */
.card:hover {
  transform: translateY(-8px) scale(1.02) rotate(1deg);
}`}</code>
      </pre>

      <h4>CSS Custom Properties (--var) - Biến CSS</h4>
      <p>
        Custom properties (CSS variables) cho phép lưu trữ giá trị và tái sử
        dụng trong toàn bộ stylesheet. Đặc biệt hữu ích cho theming và
        responsive design.
      </p>
      <pre>
        <code>{`/* Định nghĩa biến (thường ở :root) */
:root {
  --color-primary: #3b82f6;
  --color-primary-dark: #1d4ed8;
  --color-text: #1f2937;
  --color-bg: #ffffff;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --radius: 8px;
  --shadow: 0 1px 3px rgba(0,0,0,0.1);
}

/* Sử dụng biến với var() */
.button {
  background: var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.button:hover {
  background: var(--color-primary-dark);
}

/* Giá trị fallback */
.element {
  color: var(--color-accent, #ff6600);
  /* Nếu --color-accent chưa được định nghĩa, dùng #ff6600 */
}`}</code>
      </pre>

      <h4>Dark mode với Custom Properties</h4>
      <pre>
        <code>{`/* Light theme (mặc định) */
:root {
  --color-text: #1f2937;
  --color-bg: #ffffff;
  --color-card: #f9fafb;
  --color-border: #e5e7eb;
}

/* Dark theme */
[data-theme="dark"] {
  --color-text: #f9fafb;
  --color-bg: #111827;
  --color-card: #1f2937;
  --color-border: #374151;
}

/* Components dùng biến - tự động thay đổi theo theme */
body {
  color: var(--color-text);
  background: var(--color-bg);
}

.card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
}

/* Hoặc dùng prefers-color-scheme */
@media (prefers-color-scheme: dark) {
  :root {
    --color-text: #f9fafb;
    --color-bg: #111827;
  }
}`}</code>
      </pre>

      <h4>Hover & Focus Effects - Ví dụ thực tế</h4>
      <pre>
        <code>{`/* Button với đầy đủ hiệu ứng */
.btn {
  background: var(--color-primary);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.btn:active {
  transform: translateY(0);
  box-shadow: none;
}

.btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Card với hover animation */
.card {
  background: var(--color-card);
  border-radius: var(--radius);
  padding: var(--spacing-lg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}

/* Input với focus effect */
.input {
  border: 2px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--spacing-sm) var(--spacing-md);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  outline: none;
}`}</code>
      </pre>

      <p>
        <strong>Nhận xét:</strong> Verification vs Validation là một trong những
        khái niệm nền tảng quan trọng nhất trong testing - giúp hiểu rõ tại sao
        cần cả hai loại kiểm thử. Một sản phẩm có thể &quot;đúng về mặt kỹ
        thuật&quot; nhưng &quot;sai về mặt giá trị&quot;. Static testing giúp
        bắt lỗi sớm và rẻ, dynamic testing đảm bảo phần mềm hoạt động đúng khi
        chạy thực tế. Về CSS, transitions và animations mang lại sự sống động
        cho giao diện, trong khi custom properties là nền tảng cho dynamic
        theming - đặc biệt là dark mode, một tính năng gần như bắt buộc cho web
        hiện đại.
      </p>
    </>
  ),
};

export const en: DiaryEntry = {
  date: '2026-03-24',
  title:
    'Verification vs Validation & CSS: Transitions, Animations & Custom Properties',
  content: (
    <>
      <p>
        Today I studied the difference between Verification and Validation in
        software testing, along with static testing and dynamic testing. For
        CSS, I explored how to add motion and dynamic theming to pages using
        transitions, keyframe animations, and custom properties.
      </p>

      <h4>Software Testing - Day 10: Verification vs Validation</h4>

      <h4>Verification - &quot;Building it right&quot;</h4>
      <p>
        Verification checks whether the product is being built{' '}
        <em>correctly according to specifications</em>. The key question:{' '}
        <strong>&quot;Are we building the product right?&quot;</strong>
      </p>
      <ul>
        <li>
          Focuses on <strong>process</strong> and <strong>documentation</strong>
        </li>
        <li>
          Typically performed <strong>without executing code</strong> (static)
        </li>
        <li>
          <strong>Examples:</strong> Requirements review, code review, design
          inspection, document walkthrough
        </li>
        <li>
          <strong>Detects:</strong> Contradicting requirements, design not
          matching spec, code not following standards
        </li>
      </ul>

      <h4>Validation - &quot;Building the right thing&quot;</h4>
      <p>
        Validation checks whether the product{' '}
        <em>meets the actual needs of users</em>. The key question:{' '}
        <strong>&quot;Are we building the right product?&quot;</strong>
      </p>
      <ul>
        <li>
          Focuses on the <strong>final product</strong>
        </li>
        <li>
          Typically performed by <strong>running the software</strong> (dynamic)
        </li>
        <li>
          <strong>Examples:</strong> User Acceptance Testing (UAT), beta
          testing, customer demos, A/B testing
        </li>
        <li>
          <strong>Detects:</strong> Product not useful, poor UX, unnecessary
          features, missing critical features
        </li>
      </ul>

      <h4>Verification vs Validation comparison</h4>
      <pre>
        <code>{`┌──────────────────┬──────────────────────────┬──────────────────────────┐
│                  │      Verification        │      Validation          │
├──────────────────┼──────────────────────────┼──────────────────────────┤
│ Question         │ Building it right?       │ Building the right one?  │
│ Focus            │ Process, documentation   │ Final product            │
│ When             │ During development       │ After completion         │
│ Methods          │ Review, inspection       │ Testing, demo, UAT       │
│ Runs code?       │ No (Static)              │ Yes (Dynamic)            │
│ Example          │ Code review, walkthrough │ UAT, beta test           │
│ Detects          │ Process deviations       │ Product-market mismatch  │
└──────────────────┴──────────────────────────┴──────────────────────────┘`}</code>
      </pre>

      <h4>Real-world example</h4>
      <p>Suppose you are asked to build a food ordering app for customers:</p>
      <ul>
        <li>
          <strong>Verification:</strong> Does the code implement the wireframe
          and requirements correctly? Does the menu display the right prices? Is
          the order total calculation logic correct? Does the code follow coding
          standards?
        </li>
        <li>
          <strong>Validation:</strong> Real customers try the app — can they
          order food easily? Is the ordering flow intuitive? Does the app
          actually solve the problem customers face?
        </li>
      </ul>

      <h4>Static Testing vs Dynamic Testing</h4>

      <h4>Static Testing - Testing without executing code</h4>
      <p>
        Static testing examines software{' '}
        <strong>without running the program</strong>. It catches defects early,
        before the code is ever executed.
      </p>
      <ul>
        <li>
          <strong>Review (Informal review):</strong> Colleagues read and comment
          on code/documents informally
        </li>
        <li>
          <strong>Walkthrough:</strong> The author presents code/documents to
          the team and receives feedback
        </li>
        <li>
          <strong>Inspection:</strong> The most formal review process — with a
          checklist, moderator, and a structured defect-logging procedure
        </li>
        <li>
          <strong>Static analysis:</strong> Automated tools analyze code
          (ESLint, SonarQube, TypeScript compiler)
        </li>
      </ul>

      <h4>Dynamic Testing - Testing by running code</h4>
      <p>
        Dynamic testing examines software by{' '}
        <strong>executing the program</strong> with input data and checking the
        output.
      </p>
      <ul>
        <li>
          <strong>Unit testing:</strong> Testing individual functions/components
          in isolation
        </li>
        <li>
          <strong>Integration testing:</strong> Testing the interaction between
          modules
        </li>
        <li>
          <strong>System testing:</strong> Testing the entire system end to end
        </li>
        <li>
          <strong>UAT:</strong> Real users test the product
        </li>
      </ul>

      <h4>Static vs Dynamic Testing comparison</h4>
      <pre>
        <code>{`┌──────────────────┬───────────────────────────┬──────────────────────────┐
│                  │       Static Testing      │      Dynamic Testing     │
├──────────────────┼───────────────────────────┼──────────────────────────┤
│ Runs code?       │ No                        │ Yes                      │
│ When             │ Early in the SDLC         │ After code is executable │
│ Finds            │ Syntax errors, standard   │ Logic errors, performance│
│                  │ violations, obvious logic │ issues, runtime errors   │
│ Cost             │ Low                       │ Higher                   │
│ Tools            │ ESLint, SonarQube         │ Jest, Selenium, Cypress  │
│ Example          │ Code review, linting      │ Running test cases       │
└──────────────────┴───────────────────────────┴──────────────────────────┘`}</code>
      </pre>

      <h4>Relationship between the concepts</h4>
      <pre>
        <code>{`Verification ←→ Static Testing
  "Building it right" → Review, inspect without running code

Validation ←→ Dynamic Testing
  "Building the right thing" → Run software to verify with users

Note: This is a correlation, not an exact equivalence.
- Verification can use dynamic testing (testing against spec)
- Validation can use static testing (reviewing requirements with users)`}</code>
      </pre>

      <h4>CSS - Day 4: Transitions, Animations & Custom Properties</h4>
      <p>
        Goal: Add motion and dynamic theming to pages using CSS transitions,
        keyframe animations, and custom properties.
      </p>

      <h4>transition - Smooth state changes</h4>
      <p>
        Transitions create smooth changes between two CSS states. Instead of an
        abrupt switch, properties change gradually over a specified duration.
      </p>
      <pre>
        <code>{`/* Full syntax */
.button {
  background: #3b82f6;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;

  /* transition: property duration timing-function delay */
  transition: background 0.3s ease;
}

.button:hover {
  background: #1d4ed8;
}

/* Multiple properties */
.card {
  transform: translateY(0);
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
}

/* All properties */
.element {
  transition: all 0.3s ease;
  /* Caution: may affect performance */
}`}</code>
      </pre>

      <h4>Timing functions</h4>
      <pre>
        <code>{`/* Common timing functions */
transition: all 0.3s ease;        /* Slow → fast → slow (default) */
transition: all 0.3s ease-in;     /* Slow → fast */
transition: all 0.3s ease-out;    /* Fast → slow */
transition: all 0.3s ease-in-out; /* Slow → fast → slow (symmetric) */
transition: all 0.3s linear;      /* Constant speed */

/* Custom with cubic-bezier */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);`}</code>
      </pre>

      <h4>@keyframes & animation - Complex effects</h4>
      <p>
        Keyframes let you create multi-step animations that run automatically
        without a trigger (hover, click). More powerful than transitions because
        you can define multiple stages.
      </p>
      <pre>
        <code>{`/* Define the animation */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Use the animation */
.element {
  animation: fadeIn 0.5s ease forwards;
  /* animation: name duration timing fill-mode */
}

/* Multiple steps */
@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.badge {
  animation: pulse 2s ease-in-out infinite;
  /* infinite = loop forever */
}

/* Full animation properties */
.element {
  animation-name: fadeIn;
  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-delay: 0.2s;
  animation-iteration-count: 1;    /* or infinite */
  animation-direction: normal;      /* or reverse, alternate */
  animation-fill-mode: forwards;    /* Keep end state */
}`}</code>
      </pre>

      <h4>transform - Element transformations</h4>
      <p>
        Transform changes the shape, position, and size of an element without
        affecting the layout (it does not push other elements around).
      </p>
      <pre>
        <code>{`/* translate - Move */
.element {
  transform: translateX(20px);     /* Move right 20px */
  transform: translateY(-10px);    /* Move up 10px */
  transform: translate(20px, -10px); /* Both X and Y */
}

/* scale - Resize */
.element {
  transform: scale(1.5);           /* Scale up to 150% */
  transform: scale(0.8);           /* Scale down to 80% */
  transform: scaleX(2);            /* Double width */
}

/* rotate - Spin */
.element {
  transform: rotate(45deg);        /* Rotate 45° clockwise */
  transform: rotate(-90deg);       /* Rotate 90° counter-clockwise */
}

/* Combine multiple transforms */
.card:hover {
  transform: translateY(-8px) scale(1.02) rotate(1deg);
}`}</code>
      </pre>

      <h4>CSS Custom Properties (--var) - CSS Variables</h4>
      <p>
        Custom properties (CSS variables) store values for reuse throughout your
        stylesheet. They are especially useful for theming and responsive
        design.
      </p>
      <pre>
        <code>{`/* Define variables (usually on :root) */
:root {
  --color-primary: #3b82f6;
  --color-primary-dark: #1d4ed8;
  --color-text: #1f2937;
  --color-bg: #ffffff;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --radius: 8px;
  --shadow: 0 1px 3px rgba(0,0,0,0.1);
}

/* Use variables with var() */
.button {
  background: var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
}

.button:hover {
  background: var(--color-primary-dark);
}

/* Fallback values */
.element {
  color: var(--color-accent, #ff6600);
  /* If --color-accent is not defined, use #ff6600 */
}`}</code>
      </pre>

      <h4>Dark mode with Custom Properties</h4>
      <pre>
        <code>{`/* Light theme (default) */
:root {
  --color-text: #1f2937;
  --color-bg: #ffffff;
  --color-card: #f9fafb;
  --color-border: #e5e7eb;
}

/* Dark theme */
[data-theme="dark"] {
  --color-text: #f9fafb;
  --color-bg: #111827;
  --color-card: #1f2937;
  --color-border: #374151;
}

/* Components use variables — they update automatically */
body {
  color: var(--color-text);
  background: var(--color-bg);
}

.card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
}

/* Or use prefers-color-scheme */
@media (prefers-color-scheme: dark) {
  :root {
    --color-text: #f9fafb;
    --color-bg: #111827;
  }
}`}</code>
      </pre>

      <h4>Hover & Focus Effects - Practical examples</h4>
      <pre>
        <code>{`/* Button with full effects */
.btn {
  background: var(--color-primary);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn:hover {
  background: var(--color-primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
}

.btn:active {
  transform: translateY(0);
  box-shadow: none;
}

.btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Card with hover animation */
.card {
  background: var(--color-card);
  border-radius: var(--radius);
  padding: var(--spacing-lg);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.1);
}

/* Input with focus effect */
.input {
  border: 2px solid var(--color-border);
  border-radius: var(--radius);
  padding: var(--spacing-sm) var(--spacing-md);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.input:focus {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  outline: none;
}`}</code>
      </pre>

      <p>
        <strong>Takeaway:</strong> Verification vs Validation is one of the most
        important foundational concepts in testing — it clarifies why both types
        of checks are needed. A product can be &quot;technically correct&quot;
        yet &quot;wrong in value.&quot; Static testing catches defects early and
        cheaply; dynamic testing ensures software works correctly at runtime.
        For CSS, transitions and animations bring interfaces to life, while
        custom properties are the foundation for dynamic theming — especially
        dark mode, which is practically a requirement for modern web
        applications.
      </p>
    </>
  ),
};
