import { DiaryEntry } from './types';

export const vi: DiaryEntry = {
  date: '2026-03-21',
  title: 'Ôn tập Testing tuần 1 & CSS: Selectors, Specificity và Box Model',
  content: (
    <>
      <p>
        Hôm nay là ngày cuối tuần ôn tập - nhìn lại toàn bộ kiến thức Testing đã học
        trong tuần, tạo flashcard tóm tắt và tập giải thích bằng ngôn ngữ của mình.
        Về CSS, mình bắt đầu học cách các quy tắc CSS được áp dụng: selectors, specificity,
        cascade và box model - nền tảng kiểm soát layout và spacing.
      </p>

      <h4>Software Testing - Ngày 6: Ôn tập tuần 1</h4>

      <h4>Flashcard tóm tắt - Các loại Testing</h4>
      <ul>
        <li>
          <strong>Unit Testing</strong> - Test một function/module độc lập, không phụ thuộc
          bên ngoài. Fast, isolated, deterministic. Viết nhiều nhất trong pyramid.
        </li>
        <li>
          <strong>Integration Testing</strong> - Test tương tác giữa các module. Phát hiện
          lỗi interface và contract giữa các thành phần.
        </li>
        <li>
          <strong>System Testing</strong> - Test toàn bộ hệ thống end-to-end như người dùng
          thực. Chậm hơn nhưng bao quát nhất.
        </li>
        <li>
          <strong>Regression Testing</strong> - Chạy lại test sau thay đổi để đảm bảo không
          phá vỡ tính năng cũ. Nền tảng của CI/CD.
        </li>
        <li>
          <strong>Smoke Testing</strong> - Kiểm tra nhanh các tính năng cốt lõi sau build mới.
          Pass = an toàn để test sâu hơn.
        </li>
        <li>
          <strong>Performance Testing</strong> - Kiểm tra tốc độ, độ ổn định dưới tải.
          Load → Stress → Spike → Endurance.
        </li>
        <li>
          <strong>Security Testing</strong> - Tìm lỗ hổng bảo mật trước kẻ tấn công.
          OWASP Top 10, Pentest, SAST/DAST.
        </li>
        <li>
          <strong>Usability Testing</strong> - Người dùng thực sự có dùng được không?
          UX, A/B testing, accessibility.
        </li>
      </ul>

      <h4>Giải thích bằng ngôn ngữ của mình</h4>
      <p>
        <strong>Testing pyramid là gì và tại sao quan trọng?</strong>
      </p>
      <p>
        Testing pyramid là chiến lược phân bổ test: nhiều unit test ở đáy (nhanh, rẻ, dễ
        viết), ít integration test ở giữa, rất ít E2E test ở đỉnh (chậm, đắt). Lý do: nếu
        đảo ngược (nhiều E2E, ít unit), feedback loop sẽ rất chậm - mỗi lần thay đổi nhỏ
        phải chờ hàng phút mới biết có lỗi không. Unit test chạy trong milliseconds, giúp
        developer nhận phản hồi ngay lập tức.
      </p>
      <p>
        <strong>Sự khác biệt giữa Verification và Validation?</strong>
      </p>
      <p>
        Verification: &quot;Mình xây dựng đúng không?&quot; - Kiểm tra sản phẩm có đúng
        với specification không. Validation: &quot;Mình xây dựng đúng thứ không?&quot; -
        Kiểm tra sản phẩm có đáp ứng nhu cầu thực của người dùng không. Có thể pass
        verification (đúng spec) nhưng fail validation (người dùng không cần thứ đó).
      </p>
      <p>
        <strong>Tại sao không thể test 100% mọi thứ?</strong>
      </p>
      <p>
        Vì số lượng trường hợp có thể xảy ra là vô hạn. Một input field với chuỗi ký tự
        có thể nhận vô số giá trị khác nhau. Vì vậy cần kỹ thuật như Equivalence Partitioning
        (nhóm các input tương đương) và Boundary Value Analysis (test ở biên giới các nhóm)
        để chọn test case đại diện, tối ưu coverage với effort tối thiểu.
      </p>

      <h4>Mind Map ôn tập tuần 1</h4>
      <pre>
        <code>{`Tuần 1 - Software Testing
├── Ngày 1: Nền tảng Testing
│   ├── Testing là gì, tại sao cần
│   ├── Bug vs Error vs Failure
│   ├── Testing pyramid
│   └── Verification vs Validation
│
├── Ngày 2: Unit & Integration Testing
│   ├── Unit test: isolated, fast, FIRST
│   ├── Test doubles: mock, stub, spy, fake
│   ├── Integration test: real dependencies
│   └── Contract testing
│
├── Ngày 3: System & Acceptance Testing
│   ├── System testing: end-to-end
│   ├── UAT: người dùng xác nhận
│   ├── Alpha/Beta testing
│   └── Equivalence Partitioning & BVA
│
├── Ngày 4: Regression, Smoke & Sanity
│   ├── Regression: sau mỗi thay đổi
│   ├── Smoke: kiểm tra nhanh build mới
│   └── Sanity: kiểm tra fix cụ thể
│
├── Ngày 5: Non-functional Testing
│   ├── Performance: Load/Stress/Spike/Endurance
│   ├── Security: OWASP, Pentest, SAST/DAST
│   └── Usability: UX, A/B, Accessibility
│
└── Ngày 6: Ôn tập & Tổng hợp (hôm nay)`}</code>
      </pre>

      <h4>CSS - Ngày 1: Selectors, Specificity, Cascade và Box Model</h4>
      <p>
        Mục tiêu: Hiểu cách các quy tắc CSS được áp dụng và box model kiểm soát
        layout và spacing như thế nào.
      </p>

      <h4>Selectors: Type, Class và ID</h4>
      <ul>
        <li>
          <strong>Type selector</strong> - Chọn theo tên tag HTML.{' '}
          <code>p {'{'} color: red; {'}'}</code> áp dụng cho mọi thẻ <code>&lt;p&gt;</code>.
          Specificity thấp nhất trong ba loại (0, 0, 1).
        </li>
        <li>
          <strong>Class selector</strong> - Chọn theo attribute <code>class</code>.{' '}
          <code>.card {'{'} padding: 16px; {'}'}</code> áp dụng cho mọi element có{' '}
          <code>class=&quot;card&quot;</code>. Có thể dùng nhiều class trên một element.
          Specificity trung bình (0, 1, 0).
        </li>
        <li>
          <strong>ID selector</strong> - Chọn theo attribute <code>id</code>.{' '}
          <code>#header {'{'} height: 60px; {'}'}</code> chỉ áp dụng cho một element duy nhất.
          Specificity cao nhất (1, 0, 0). Ít dùng trong CSS hiện đại vì khó override.
        </li>
      </ul>

      <h4>Pseudo-classes & Pseudo-elements</h4>
      <ul>
        <li>
          <strong>Pseudo-class</strong> - Chọn element ở trạng thái cụ thể. Dùng dấu{' '}
          <code>:</code> đơn.
          <ul>
            <li><code>:hover</code> - Khi di chuột qua</li>
            <li><code>:focus</code> - Khi element được focus (keyboard/click)</li>
            <li><code>:active</code> - Khi đang click</li>
            <li><code>:visited</code> - Link đã truy cập</li>
            <li><code>:first-child</code>, <code>:last-child</code>, <code>:nth-child(n)</code> - Theo vị trí trong DOM</li>
            <li><code>:not(.class)</code> - Loại trừ selector</li>
            <li><code>:disabled</code>, <code>:checked</code>, <code>:valid</code> - Trạng thái form</li>
          </ul>
        </li>
        <li>
          <strong>Pseudo-element</strong> - Tạo hoặc chọn phần nội dung ảo của element.
          Dùng dấu <code>::</code> kép.
          <ul>
            <li><code>::before</code> - Chèn content trước nội dung element</li>
            <li><code>::after</code> - Chèn content sau nội dung element</li>
            <li><code>::first-line</code> - Dòng đầu tiên của text</li>
            <li><code>::first-letter</code> - Ký tự đầu tiên</li>
            <li><code>::placeholder</code> - Placeholder text của input</li>
            <li><code>::selection</code> - Phần text đang được bôi đen</li>
          </ul>
        </li>
      </ul>

      <h4>Specificity & Cascade</h4>
      <p>
        Khi nhiều quy tắc CSS áp dụng cho cùng một element, trình duyệt dùng{' '}
        <strong>specificity</strong> để quyết định quy tắc nào thắng.
      </p>
      <ul>
        <li>
          <strong>Tính specificity</strong> - Biểu diễn bằng 3 số (a, b, c):
          <ul>
            <li><code>a</code> - Số ID selectors</li>
            <li><code>b</code> - Số class, pseudo-class, attribute selectors</li>
            <li><code>c</code> - Số type selectors và pseudo-elements</li>
          </ul>
          Ví dụ: <code>#nav .link:hover</code> = (1, 2, 0). So sánh từ trái sang phải,
          số nào lớn hơn thắng.
        </li>
        <li>
          <strong>Cascade</strong> - Khi specificity bằng nhau, quy tắc xuất hiện{' '}
          <em>sau</em> trong CSS sẽ thắng (last rule wins).
        </li>
        <li>
          <strong>!important</strong> - Override mọi specificity. Dùng hạn chế - chỉ
          khi thực sự cần thiết (ví dụ: utility class cần luôn thắng). Lạm dụng sẽ
          làm CSS khó maintain.
        </li>
        <li>
          <strong>Thứ tự ưu tiên tổng quát:</strong> Inline style {'>'} ID {'>'} Class/Pseudo-class/Attribute {'>'} Type {'>'} Universal (<code>*</code>)
        </li>
      </ul>

      <h4>Box Model: Margin, Padding, Border</h4>
      <p>
        Mọi element HTML đều là một hộp chữ nhật. Box model định nghĩa cách tính
        kích thước và khoảng cách của hộp đó.
      </p>
      <pre>
        <code>{`┌─────────────────────────────────┐
│           MARGIN                │  ← Khoảng cách bên ngoài (transparent)
│  ┌───────────────────────────┐  │
│  │         BORDER            │  │  ← Đường viền
│  │  ┌─────────────────────┐  │  │
│  │  │      PADDING        │  │  │  ← Khoảng cách bên trong (background hiển thị)
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │    CONTENT    │  │  │  │  ← Nội dung thực (text, image, v.v.)
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘`}</code>
      </pre>
      <ul>
        <li>
          <strong>Content</strong> - Khu vực chứa nội dung thực (text, ảnh). Kích thước
          xác định bởi <code>width</code> và <code>height</code>.
        </li>
        <li>
          <strong>Padding</strong> - Khoảng cách từ content đến border. Background color
          hiển thị trong padding. Giá trị shorthand:{' '}
          <code>padding: top right bottom left</code>.
        </li>
        <li>
          <strong>Border</strong> - Đường viền bao quanh padding. Cần xác định 3 giá trị:{' '}
          <code>border: 1px solid #000</code> (width, style, color).
        </li>
        <li>
          <strong>Margin</strong> - Khoảng cách từ border đến element bên ngoài.
          Transparent, không có background. Margin có thể là giá trị âm.{' '}
          <strong>Margin collapse:</strong> margin dọc giữa 2 block element liền kề
          sẽ collapse thành giá trị lớn hơn (không cộng lại).
        </li>
      </ul>

      <h4>box-sizing: border-box</h4>
      <p>
        Đây là một trong những CSS quan trọng nhất cần biết. Mặc định,{' '}
        <code>box-sizing: content-box</code> tính <code>width</code> chỉ cho phần
        content - padding và border cộng thêm vào, làm element rộng hơn dự kiến.
      </p>
      <pre>
        <code>{`/* content-box (default) - dễ nhầm lẫn */
.box {
  width: 200px;
  padding: 20px;
  border: 2px solid;
  /* Actual width = 200 + 20*2 + 2*2 = 244px */
}

/* border-box - trực quan hơn, được dùng phổ biến */
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 2px solid;
  /* Actual width = 200px (padding & border nằm trong 200px) */
}

/* Best practice: áp dụng toàn cục */
*, *::before, *::after {
  box-sizing: border-box;
}`}</code>
      </pre>
      <p>
        Với <code>border-box</code>, <code>width: 200px</code> có nghĩa là element
        thực sự rộng 200px - padding và border được tính vào trong đó. Điều này giúp
        tính toán layout dễ dàng và dự đoán hơn rất nhiều.
      </p>

      <h4>Ví dụ thực tế - Áp dụng tất cả khái niệm:</h4>
      <pre>
        <code>{`/* Global reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Type selector + box model */
p {
  margin-bottom: 16px;
  line-height: 1.5;
}

/* Class selector */
.card {
  width: 320px;
  padding: 24px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  /* width = 320px bao gồm padding và border */
}

/* ID selector (hạn chế dùng) */
#app-header {
  height: 64px;
  background: #1a202c;
}

/* Pseudo-class */
.btn:hover {
  background: #2d3748;
  transform: translateY(-1px);
}

.btn:focus {
  outline: 2px solid #4299e1;
  outline-offset: 2px;
}

.btn:active {
  transform: translateY(0);
}

/* Pseudo-element */
.card::before {
  content: '';
  display: block;
  width: 4px;
  height: 100%;
  background: #4299e1;
  position: absolute;
  left: 0;
  top: 0;
}

/* Specificity demo */
/* (0,0,1) */ p { color: black; }
/* (0,1,0) */ .text { color: blue; }   /* thắng p */
/* (1,0,0) */ #title { color: red; }   /* thắng .text */
/* Inline  */ style="color: green"     /* thắng #title */`}</code>
      </pre>

      <p>
        <strong>Nhận xét:</strong> Sau một tuần học Testing, việc ôn tập flashcard giúp
        mình nhận ra các khái niệm kết nối với nhau: regression testing bảo vệ chức năng
        cũ khi thêm tính năng mới, smoke testing là &quot;kiểm tra sống còn&quot; nhanh
        trước khi đi sâu hơn. Về CSS, <code>box-sizing: border-box</code> là một trong
        những điều đầu tiên nên áp dụng trong mọi project - nó giải quyết rất nhiều
        confusion khi tính toán layout. Specificity là nguồn gốc của nhiều bug CSS khó hiểu,
        hiểu rõ nó giúp debug nhanh hơn thay vì dùng <code>!important</code> bừa bãi.
      </p>
    </>
  ),
};

export const en: DiaryEntry = {
  date: '2026-03-21',
  title: 'Testing Week 1 Review & CSS: Selectors, Specificity and Box Model',
  content: (
    <>
      <p>
        Today is the review day — looking back at all Testing knowledge from the week,
        creating summary flashcards, and practicing explaining concepts in my own words.
        For CSS, I started learning how CSS rules are applied: selectors, specificity,
        cascade, and the box model — the foundation for controlling layout and spacing.
      </p>

      <h4>Software Testing - Day 6: Week 1 Review</h4>

      <h4>Summary Flashcards - Testing Types</h4>
      <ul>
        <li>
          <strong>Unit Testing</strong> - Tests a single function/module in isolation,
          no external dependencies. Fast, isolated, deterministic. Written most
          frequently in the pyramid.
        </li>
        <li>
          <strong>Integration Testing</strong> - Tests interactions between modules.
          Catches interface and contract errors between components.
        </li>
        <li>
          <strong>System Testing</strong> - Tests the entire system end-to-end as a
          real user would. Slower but most comprehensive.
        </li>
        <li>
          <strong>Regression Testing</strong> - Re-runs tests after changes to ensure
          existing features are not broken. The backbone of CI/CD.
        </li>
        <li>
          <strong>Smoke Testing</strong> - Quick check of core features after a new
          build. Pass = safe to test more deeply.
        </li>
        <li>
          <strong>Performance Testing</strong> - Tests speed and stability under load.
          Load → Stress → Spike → Endurance.
        </li>
        <li>
          <strong>Security Testing</strong> - Finds vulnerabilities before attackers
          do. OWASP Top 10, Pentest, SAST/DAST.
        </li>
        <li>
          <strong>Usability Testing</strong> - Can real users actually use the product?
          UX, A/B testing, accessibility.
        </li>
      </ul>

      <h4>Explaining in My Own Words</h4>
      <p>
        <strong>What is the testing pyramid and why does it matter?</strong>
      </p>
      <p>
        The testing pyramid is a strategy for distributing tests: many unit tests at the
        base (fast, cheap, easy to write), fewer integration tests in the middle, and very
        few E2E tests at the top (slow, expensive). The reason: if inverted (many E2E, few
        unit tests), the feedback loop becomes very slow — every small change requires waiting
        minutes to know if something broke. Unit tests run in milliseconds, giving developers
        immediate feedback.
      </p>
      <p>
        <strong>What is the difference between Verification and Validation?</strong>
      </p>
      <p>
        Verification: &quot;Are we building it right?&quot; — checks if the product matches
        the specification. Validation: &quot;Are we building the right thing?&quot; — checks
        if the product meets real user needs. A product can pass verification (matches spec)
        but fail validation (users do not need that thing).
      </p>
      <p>
        <strong>Why can&apos;t we test 100% of everything?</strong>
      </p>
      <p>
        Because the number of possible cases is infinite. A single input field with a string
        can accept infinitely many values. That is why techniques like Equivalence Partitioning
        (grouping equivalent inputs) and Boundary Value Analysis (testing at group boundaries)
        are needed to select representative test cases, maximizing coverage with minimal effort.
      </p>

      <h4>Week 1 Review Mind Map</h4>
      <pre>
        <code>{`Week 1 - Software Testing
├── Day 1: Testing Fundamentals
│   ├── What is testing and why it matters
│   ├── Bug vs Error vs Failure
│   ├── Testing pyramid
│   └── Verification vs Validation
│
├── Day 2: Unit & Integration Testing
│   ├── Unit test: isolated, fast, FIRST
│   ├── Test doubles: mock, stub, spy, fake
│   ├── Integration test: real dependencies
│   └── Contract testing
│
├── Day 3: System & Acceptance Testing
│   ├── System testing: end-to-end
│   ├── UAT: user acceptance
│   ├── Alpha/Beta testing
│   └── Equivalence Partitioning & BVA
│
├── Day 4: Regression, Smoke & Sanity
│   ├── Regression: after every change
│   ├── Smoke: quick check on new build
│   └── Sanity: verify specific fix
│
├── Day 5: Non-functional Testing
│   ├── Performance: Load/Stress/Spike/Endurance
│   ├── Security: OWASP, Pentest, SAST/DAST
│   └── Usability: UX, A/B, Accessibility
│
└── Day 6: Review & Summary (today)`}</code>
      </pre>

      <h4>CSS - Day 1: Selectors, Specificity, Cascade and Box Model</h4>
      <p>
        Goal: Understand how CSS rules are applied and how the box model controls
        layout and spacing.
      </p>

      <h4>Selectors: Type, Class and ID</h4>
      <ul>
        <li>
          <strong>Type selector</strong> - Selects by HTML tag name.{' '}
          <code>p {'{'} color: red; {'}'}</code> applies to every <code>&lt;p&gt;</code> tag.
          Lowest specificity of the three (0, 0, 1).
        </li>
        <li>
          <strong>Class selector</strong> - Selects by the <code>class</code> attribute.{' '}
          <code>.card {'{'} padding: 16px; {'}'}</code> applies to every element with{' '}
          <code>class=&quot;card&quot;</code>. Multiple classes can be applied to one element.
          Medium specificity (0, 1, 0).
        </li>
        <li>
          <strong>ID selector</strong> - Selects by the <code>id</code> attribute.{' '}
          <code>#header {'{'} height: 60px; {'}'}</code> applies to only one unique element.
          Highest specificity (1, 0, 0). Less used in modern CSS because it is hard to override.
        </li>
      </ul>

      <h4>Pseudo-classes & Pseudo-elements</h4>
      <ul>
        <li>
          <strong>Pseudo-class</strong> - Selects an element in a specific state. Uses a
          single colon <code>:</code>.
          <ul>
            <li><code>:hover</code> - When the mouse is over the element</li>
            <li><code>:focus</code> - When the element is focused (keyboard/click)</li>
            <li><code>:active</code> - While being clicked</li>
            <li><code>:visited</code> - Visited link</li>
            <li><code>:first-child</code>, <code>:last-child</code>, <code>:nth-child(n)</code> - By position in DOM</li>
            <li><code>:not(.class)</code> - Exclusion selector</li>
            <li><code>:disabled</code>, <code>:checked</code>, <code>:valid</code> - Form states</li>
          </ul>
        </li>
        <li>
          <strong>Pseudo-element</strong> - Creates or selects a virtual part of an element&apos;s
          content. Uses double colon <code>::</code>.
          <ul>
            <li><code>::before</code> - Inserts content before the element&apos;s content</li>
            <li><code>::after</code> - Inserts content after the element&apos;s content</li>
            <li><code>::first-line</code> - The first line of text</li>
            <li><code>::first-letter</code> - The first character</li>
            <li><code>::placeholder</code> - Placeholder text of an input</li>
            <li><code>::selection</code> - Currently highlighted text</li>
          </ul>
        </li>
      </ul>

      <h4>Specificity & Cascade</h4>
      <p>
        When multiple CSS rules apply to the same element, the browser uses{' '}
        <strong>specificity</strong> to decide which rule wins.
      </p>
      <ul>
        <li>
          <strong>Calculating specificity</strong> - Represented as 3 numbers (a, b, c):
          <ul>
            <li><code>a</code> - Number of ID selectors</li>
            <li><code>b</code> - Number of class, pseudo-class, and attribute selectors</li>
            <li><code>c</code> - Number of type selectors and pseudo-elements</li>
          </ul>
          Example: <code>#nav .link:hover</code> = (1, 2, 0). Compare left to right;
          the higher number wins.
        </li>
        <li>
          <strong>Cascade</strong> - When specificity is equal, the rule that appears{' '}
          <em>later</em> in the CSS wins (last rule wins).
        </li>
        <li>
          <strong>!important</strong> - Overrides all specificity. Use sparingly — only
          when truly necessary (e.g., a utility class that must always win). Overuse makes
          CSS hard to maintain.
        </li>
        <li>
          <strong>General priority order:</strong> Inline style {'>'} ID {'>'} Class/Pseudo-class/Attribute {'>'} Type {'>'} Universal (<code>*</code>)
        </li>
      </ul>

      <h4>Box Model: Margin, Padding, Border</h4>
      <p>
        Every HTML element is a rectangular box. The box model defines how the size
        and spacing of that box are calculated.
      </p>
      <pre>
        <code>{`┌─────────────────────────────────┐
│           MARGIN                │  ← Space outside (transparent)
│  ┌───────────────────────────┐  │
│  │         BORDER            │  │  ← Border line
│  │  ┌─────────────────────┐  │  │
│  │  │      PADDING        │  │  │  ← Space inside (background shows here)
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │    CONTENT    │  │  │  │  ← Actual content (text, image, etc.)
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘`}</code>
      </pre>
      <ul>
        <li>
          <strong>Content</strong> - The area holding actual content (text, images). Size
          is set by <code>width</code> and <code>height</code>.
        </li>
        <li>
          <strong>Padding</strong> - Space between content and border. Background color
          shows in padding. Shorthand: <code>padding: top right bottom left</code>.
        </li>
        <li>
          <strong>Border</strong> - The line surrounding the padding. Requires 3 values:{' '}
          <code>border: 1px solid #000</code> (width, style, color).
        </li>
        <li>
          <strong>Margin</strong> - Space between border and surrounding elements.
          Transparent, no background. Margin can be negative.{' '}
          <strong>Margin collapse:</strong> vertical margins between two adjacent block
          elements collapse into the larger value (they do not add up).
        </li>
      </ul>

      <h4>box-sizing: border-box</h4>
      <p>
        This is one of the most important CSS properties to know. By default,{' '}
        <code>box-sizing: content-box</code> calculates <code>width</code> for the content
        area only — padding and border are added on top, making the element wider than expected.
      </p>
      <pre>
        <code>{`/* content-box (default) - confusing */
.box {
  width: 200px;
  padding: 20px;
  border: 2px solid;
  /* Actual width = 200 + 20*2 + 2*2 = 244px */
}

/* border-box - intuitive, widely used */
.box {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 2px solid;
  /* Actual width = 200px (padding & border fit inside 200px) */
}

/* Best practice: apply globally */
*, *::before, *::after {
  box-sizing: border-box;
}`}</code>
      </pre>
      <p>
        With <code>border-box</code>, <code>width: 200px</code> means the element is
        actually 200px wide — padding and border are included within that width. This
        makes layout calculations much easier and more predictable.
      </p>

      <h4>Practical Example - Applying All Concepts:</h4>
      <pre>
        <code>{`/* Global reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Type selector + box model */
p {
  margin-bottom: 16px;
  line-height: 1.5;
}

/* Class selector */
.card {
  width: 320px;
  padding: 24px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  /* width = 320px includes padding and border */
}

/* ID selector (use sparingly) */
#app-header {
  height: 64px;
  background: #1a202c;
}

/* Pseudo-class */
.btn:hover {
  background: #2d3748;
  transform: translateY(-1px);
}

.btn:focus {
  outline: 2px solid #4299e1;
  outline-offset: 2px;
}

.btn:active {
  transform: translateY(0);
}

/* Pseudo-element */
.card::before {
  content: '';
  display: block;
  width: 4px;
  height: 100%;
  background: #4299e1;
  position: absolute;
  left: 0;
  top: 0;
}

/* Specificity demo */
/* (0,0,1) */ p { color: black; }
/* (0,1,0) */ .text { color: blue; }   /* wins over p */
/* (1,0,0) */ #title { color: red; }   /* wins over .text */
/* Inline  */ style="color: green"     /* wins over #title */`}</code>
      </pre>

      <p>
        <strong>Reflection:</strong> After a week of Testing, reviewing with flashcards
        helped me see how the concepts connect: regression testing protects existing features
        when adding new ones, smoke testing is the &quot;survival check&quot; done quickly
        before going deeper. For CSS, <code>box-sizing: border-box</code> is one of the
        first things to apply in any project — it eliminates a lot of confusion when
        calculating layout. Specificity is the root cause of many hard-to-understand CSS
        bugs; understanding it clearly helps debug faster instead of reaching for{' '}
        <code>!important</code> as a crutch.
      </p>
    </>
  ),
};
