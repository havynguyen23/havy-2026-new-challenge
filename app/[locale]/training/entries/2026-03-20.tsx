import { DiaryEntry } from './types';

export const vi: DiaryEntry = {
  date: '2026-03-20',
  title: 'Performance, Security & Usability Testing và HTML Accessibility',
  content: (
    <>
      <p>
        Hôm nay mình học về các loại Non-functional testing quan trọng: Performance,
        Security và Usability Testing. Đồng thời tổng hợp toàn bộ các loại testing đã
        học qua mind map. Về HTML, mình tập trung vào Accessibility - viết HTML chuẩn
        cho mọi người dùng và công nghệ hỗ trợ.
      </p>

      <h4>Software Testing - Ngày 5: Performance, Security &amp; Usability Testing</h4>

      <h4>Performance Testing (Kiểm thử hiệu suất)</h4>
      <p>
        Kiểm tra hệ thống hoạt động nhanh và ổn định như thế nào dưới các điều kiện
        tải khác nhau. Không kiểm tra tính đúng đắn của chức năng mà kiểm tra
        <em>tốc độ, độ ổn định, và khả năng mở rộng</em>.
      </p>
      <ul>
        <li>
          <strong>Load Testing</strong> - Kiểm tra hệ thống dưới tải dự kiến bình
          thường. Ví dụ: 1000 user cùng truy cập. Mục đích xác nhận hệ thống đáp ứng
          được yêu cầu hiệu suất đã đặt ra.
        </li>
        <li>
          <strong>Stress Testing</strong> - Đẩy hệ thống vượt quá giới hạn để tìm
          điểm gãy. Ví dụ: tăng dần user đến khi hệ thống crash. Mục đích tìm ra giới
          hạn thực sự và cách hệ thống fail (gracefully hay catastrophically).
        </li>
        <li>
          <strong>Spike Testing</strong> - Kiểm tra hệ thống khi có đột biến tải đột
          ngột. Ví dụ: flash sale, sự kiện lớn → lượng truy cập tăng gấp 10x trong
          vài giây.
        </li>
        <li>
          <strong>Endurance/Soak Testing</strong> - Chạy hệ thống dưới tải bình
          thường trong thời gian dài (nhiều giờ/ngày) để phát hiện memory leak, hiệu
          suất suy giảm dần theo thời gian.
        </li>
        <li>
          <strong>Scalability Testing</strong> - Kiểm tra hệ thống có scale tốt không
          khi thêm tài nguyên (CPU, RAM, server).
        </li>
        <li>
          <strong>Tools phổ biến:</strong> Apache JMeter, k6, Gatling, Locust, Artillery.
        </li>
      </ul>
      <p>
        <strong>Metrics quan trọng:</strong> Response time (thời gian phản hồi),
        Throughput (số request/giây), Error rate (tỉ lệ lỗi), CPU/Memory usage,
        Concurrent users (số user đồng thời).
      </p>

      <h4>Security Testing (Kiểm thử bảo mật)</h4>
      <p>
        Kiểm tra xem hệ thống có bảo vệ được dữ liệu và tài nguyên khỏi các mối
        đe dọa không. Mục tiêu: tìm ra lỗ hổng bảo mật trước kẻ tấn công.
      </p>
      <ul>
        <li>
          <strong>Vulnerability Scanning</strong> - Dùng tool tự động quét lỗ hổng
          đã biết (CVE). Tools: OWASP ZAP, Nessus, Snyk.
        </li>
        <li>
          <strong>Penetration Testing (Pentest)</strong> - Chuyên gia bảo mật cố
          tình tấn công hệ thống để tìm điểm yếu. Có 3 dạng: Black box (không biết
          gì về hệ thống), White box (biết toàn bộ), Grey box (biết một phần).
        </li>
        <li>
          <strong>OWASP Top 10</strong> - 10 lỗ hổng bảo mật web phổ biến nhất:
          SQL Injection, XSS (Cross-Site Scripting), Broken Authentication,
          Insecure Direct Object References, Security Misconfiguration, và nhiều hơn.
        </li>
        <li>
          <strong>Authentication &amp; Authorization Testing</strong> - Kiểm tra
          đăng nhập có an toàn không, phân quyền có đúng không (user A không xem
          được dữ liệu user B).
        </li>
        <li>
          <strong>SAST vs DAST</strong> - Static Application Security Testing (phân
          tích code tĩnh) vs Dynamic Application Security Testing (kiểm tra khi app
          đang chạy).
        </li>
      </ul>

      <h4>Usability Testing (Kiểm thử khả năng sử dụng)</h4>
      <p>
        Kiểm tra xem người dùng thực sự có thể sử dụng phần mềm dễ dàng và hiệu
        quả không. Tập trung vào trải nghiệm người dùng (UX), không phải tính năng.
      </p>
      <ul>
        <li>
          <strong>Moderated Testing</strong> - Người dùng thực hiện tasks trong khi
          researcher quan sát trực tiếp, đặt câu hỏi để hiểu suy nghĩ của họ
          (Think-aloud protocol).
        </li>
        <li>
          <strong>Unmoderated Testing</strong> - Người dùng tự làm tasks ở nhà,
          được ghi lại tự động qua tool. Rẻ hơn và scale tốt hơn.
        </li>
        <li>
          <strong>A/B Testing</strong> - So sánh 2 phiên bản UI để xem cái nào
          hiệu quả hơn dựa trên hành vi thực tế của người dùng.
        </li>
        <li>
          <strong>Accessibility Testing</strong> - Đảm bảo người dùng khuyết tật
          (thị giác, thính giác, vận động) có thể sử dụng. Dùng screen reader,
          keyboard-only navigation, kiểm tra contrast màu sắc.
        </li>
        <li>
          <strong>Metrics:</strong> Task completion rate (tỉ lệ hoàn thành task),
          Time on task, Error rate, User satisfaction score (SUS - System Usability
          Scale).
        </li>
      </ul>

      <h4>Mind Map: Tổng hợp các loại Testing</h4>
      <pre>
        <code>{`Software Testing
├── Functional Testing (Kiểm thử chức năng)
│   ├── Unit Testing          → Test từng function/module
│   ├── Integration Testing   → Test kết hợp các module
│   ├── System Testing        → Test toàn bộ hệ thống
│   └── Acceptance Testing    → UAT, BAT, Alpha, Beta
│
├── Non-Functional Testing (Kiểm thử phi chức năng)
│   ├── Performance Testing
│   │   ├── Load Testing      → Tải bình thường
│   │   ├── Stress Testing    → Vượt giới hạn
│   │   ├── Spike Testing     → Đột biến tải
│   │   └── Endurance Testing → Chạy dài hạn
│   ├── Security Testing
│   │   ├── Vulnerability Scan
│   │   ├── Penetration Testing
│   │   └── OWASP Top 10
│   └── Usability Testing
│       ├── UX Testing
│       ├── A/B Testing
│       └── Accessibility Testing
│
├── Maintenance Testing
│   ├── Regression Testing    → Sau thay đổi
│   ├── Smoke Testing         → Sau build mới
│   └── Sanity Testing        → Sau fix cụ thể
│
└── Testing Approach
    ├── Manual Testing        → Con người thực hiện
    ├── Automation Testing    → Script tự động
    ├── Black Box Testing     → Không biết code
    ├── White Box Testing     → Biết code
    └── Grey Box Testing      → Biết một phần`}</code>
      </pre>

      <p>
        <strong>Nhận xét:</strong> Nhìn lại toàn bộ, testing không chỉ là &quot;tìm
        bug&quot; mà là một hệ thống đảm bảo chất lượng toàn diện. Performance testing
        đảm bảo hệ thống nhanh và ổn định, Security testing bảo vệ dữ liệu người dùng,
        Usability testing đảm bảo trải nghiệm tốt. Mỗi loại testing giải quyết một
        khía cạnh khác nhau của chất lượng phần mềm.
      </p>

      <h4>HTML - Accessibility (Khả năng tiếp cận)</h4>
      <p>
        Mục tiêu: Viết HTML clean, accessible cho mọi người dùng kể cả người sử dụng
        công nghệ hỗ trợ (screen reader, keyboard navigation).
      </p>

      <h4>ARIA Roles &amp; Attributes</h4>
      <p>
        ARIA (Accessible Rich Internet Applications) cung cấp thông tin bổ sung cho
        screen reader khi HTML thuần không đủ mô tả.
      </p>
      <ul>
        <li>
          <strong>role</strong> - Xác định mục đích của element:{' '}
          <code>role=&quot;button&quot;</code>, <code>role=&quot;navigation&quot;</code>,{' '}
          <code>role=&quot;dialog&quot;</code>, <code>role=&quot;alert&quot;</code>.
          Ưu tiên dùng HTML semantic thay vì ARIA role khi có thể.
        </li>
        <li>
          <strong>aria-label</strong> - Gán tên mô tả cho element khi không có text
          hiển thị. Ví dụ: nút icon không có chữ.{' '}
          <code>{`<button aria-label="Close dialog">✕</button>`}</code>
        </li>
        <li>
          <strong>aria-labelledby</strong> - Trỏ đến ID của element khác làm label.
          Dùng khi label đã hiển thị trên màn hình.
        </li>
        <li>
          <strong>aria-describedby</strong> - Trỏ đến element chứa mô tả chi tiết
          hơn. Ví dụ: input form trỏ đến thông báo lỗi.
        </li>
        <li>
          <strong>aria-hidden=&quot;true&quot;</strong> - Ẩn element khỏi screen
          reader (dùng cho icon decorative, duplicate content).
        </li>
        <li>
          <strong>aria-expanded, aria-selected, aria-checked</strong> - Trạng thái
          của component tương tác (dropdown, tab, checkbox).
        </li>
        <li>
          <strong>aria-live</strong> - Thông báo cho screen reader khi nội dung thay
          đổi động. <code>aria-live=&quot;polite&quot;</code> đọc sau khi user xong
          việc, <code>aria-live=&quot;assertive&quot;</code> đọc ngay lập tức.
        </li>
      </ul>

      <h4>Alt Text cho hình ảnh</h4>
      <ul>
        <li>
          <strong>Informative image</strong> - Alt text mô tả nội dung/mục đích của
          hình. Ngắn gọn, súc tích (dưới 125 ký tự).
        </li>
        <li>
          <strong>Decorative image</strong> - Dùng <code>alt=&quot;&quot;</code> (empty
          alt) để screen reader bỏ qua, không dùng <code>role=&quot;presentation&quot;</code>{' '}
          cho img.
        </li>
        <li>
          <strong>Functional image</strong> (link/button) - Alt text mô tả chức năng,
          không phải hình. Ví dụ: logo link về trang chủ → <code>alt=&quot;Trang chủ Havy&quot;</code>.
        </li>
        <li>
          <strong>Complex image</strong> (chart, diagram) - Cần mô tả dài hơn, dùng{' '}
          <code>aria-describedby</code> trỏ đến đoạn văn bản mô tả chi tiết.
        </li>
      </ul>

      <h4>Keyboard Navigation</h4>
      <ul>
        <li>
          Mọi interactive element phải có thể focus bằng <kbd>Tab</kbd>:{' '}
          <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>, <code>&lt;input&gt;</code>,{' '}
          <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code>.
        </li>
        <li>
          Dùng <code>tabindex=&quot;0&quot;</code> để thêm element vào tab order,{' '}
          <code>tabindex=&quot;-1&quot;</code> để focus bằng JavaScript nhưng không
          trong tab order. Tránh dùng <code>tabindex</code> dương.
        </li>
        <li>
          Focus indicator phải luôn visible. Không được dùng{' '}
          <code>outline: none</code> mà không có replacement style.
        </li>
        <li>
          Skip links: Thêm &quot;Skip to main content&quot; link ẩn đầu trang cho
          keyboard user bỏ qua navigation.
        </li>
        <li>
          Modal/Dialog: Khi mở, focus phải chuyển vào modal. Khi đóng, focus quay
          lại element đã trigger. <kbd>Escape</kbd> nên đóng modal.
        </li>
      </ul>

      <h4>Logical Heading Hierarchy</h4>
      <ul>
        <li>
          Chỉ có <strong>một</strong> <code>&lt;h1&gt;</code> trên mỗi trang - tiêu
          đề chính của trang.
        </li>
        <li>
          Không bỏ cấp: <code>h1 → h2 → h3</code>, không nhảy từ{' '}
          <code>h1</code> sang <code>h3</code>.
        </li>
        <li>
          Dùng heading theo <em>cấu trúc nội dung</em>, không phải theo kiểu dáng
          muốn (dùng CSS để style, không dùng h1 chỉ vì muốn chữ to).
        </li>
        <li>
          Screen reader dùng heading để điều hướng trang - heading phải mô tả đúng
          nội dung của phần đó.
        </li>
      </ul>

      <h4>HTML Validation</h4>
      <ul>
        <li>
          Dùng <strong>W3C Validator</strong> (validator.w3.org) để kiểm tra HTML
          hợp lệ - phát hiện lỗi syntax, attribute sai, element lồng sai.
        </li>
        <li>
          Dùng <strong>axe DevTools</strong> hoặc <strong>Lighthouse</strong> trong
          Chrome DevTools để audit accessibility tự động.
        </li>
        <li>
          Test với screen reader thực: NVDA (Windows, miễn phí), VoiceOver (Mac/iOS
          built-in), TalkBack (Android built-in).
        </li>
        <li>
          Kiểm tra color contrast: tỉ lệ contrast tối thiểu 4.5:1 cho text thường,
          3:1 cho text lớn (WCAG AA). Tool: WebAIM Contrast Checker.
        </li>
      </ul>

      <h4>Ví dụ - Accessible HTML:</h4>
      <pre>
        <code>{`<!-- Logical heading hierarchy -->
<main>
  <h1>Hướng dẫn Software Testing</h1>

  <section aria-labelledby="perf-heading">
    <h2 id="perf-heading">Performance Testing</h2>
    <h3>Load Testing</h3>
    <p>Kiểm tra hệ thống dưới tải bình thường...</p>
  </section>
</main>

<!-- Navigation with skip link -->
<a href="#main-content" class="skip-link">Bỏ qua điều hướng</a>
<nav aria-label="Menu chính">
  <ul>
    <li><a href="/">Trang chủ</a></li>
    <li><a href="/testing">Testing</a></li>
  </ul>
</nav>
<main id="main-content">...</main>

<!-- Accessible button with icon -->
<button
  type="button"
  aria-label="Đóng hộp thoại"
  aria-expanded="true"
>
  <svg aria-hidden="true" focusable="false">...</svg>
</button>

<!-- Form với accessible labels -->
<form>
  <div>
    <label for="email">Email <span aria-hidden="true">*</span></label>
    <input
      type="email"
      id="email"
      name="email"
      required
      aria-required="true"
      aria-describedby="email-error"
    />
    <span id="email-error" role="alert" aria-live="polite">
      Email không hợp lệ
    </span>
  </div>
</form>

<!-- Accessible data table -->
<table>
  <caption>So sánh các loại Performance Testing</caption>
  <thead>
    <tr>
      <th scope="col">Loại</th>
      <th scope="col">Mục đích</th>
      <th scope="col">Tải</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Load</th>
      <td>Kiểm tra tải bình thường</td>
      <td>Dự kiến</td>
    </tr>
    <tr>
      <th scope="row">Stress</th>
      <td>Tìm điểm gãy</td>
      <td>Vượt giới hạn</td>
    </tr>
  </tbody>
</table>

<!-- Accessible image examples -->
<!-- Informative -->
<img src="chart.png" alt="Biểu đồ response time tăng khi load vượt 1000 user" />

<!-- Decorative -->
<img src="divider.png" alt="" />

<!-- Complex image -->
<img
  src="architecture.png"
  alt="Sơ đồ kiến trúc hệ thống"
  aria-describedby="arch-desc"
/>
<p id="arch-desc">
  Hệ thống gồm 3 tầng: Client gửi request đến API Gateway,
  Gateway điều phối đến các microservice, mỗi service có database riêng.
</p>`}</code>
      </pre>

      <p>
        <strong>Nhận xét:</strong> Accessibility không phải là tính năng thêm vào
        sau - nó phải được xây dựng từ đầu trong cấu trúc HTML. ARIA là công cụ
        mạnh nhưng nguyên tắc là &quot;No ARIA is better than bad ARIA&quot; - sử
        dụng sai ARIA còn tệ hơn không dùng. Ưu tiên HTML semantic, dùng ARIA chỉ
        khi thực sự cần thiết. Accessibility tốt thường song hành với SEO tốt và
        UX tốt cho mọi người dùng.
      </p>
    </>
  ),
};

export const en: DiaryEntry = {
  date: '2026-03-20',
  title: 'Performance, Security & Usability Testing and HTML Accessibility',
  content: (
    <>
      <p>
        Today I learned about important Non-functional testing types: Performance,
        Security, and Usability Testing. I also synthesized all testing types learned
        so far into a mind map. For HTML, I focused on Accessibility - writing clean
        HTML for all users and assistive technologies.
      </p>

      <h4>Software Testing - Day 5: Performance, Security &amp; Usability Testing</h4>

      <h4>Performance Testing</h4>
      <p>
        Tests how fast and stable a system performs under various load conditions.
        It does not test functional correctness but rather{' '}
        <em>speed, stability, and scalability</em>.
      </p>
      <ul>
        <li>
          <strong>Load Testing</strong> - Tests the system under expected normal
          load. Example: 1000 users accessing simultaneously. Confirms the system
          meets defined performance requirements.
        </li>
        <li>
          <strong>Stress Testing</strong> - Pushes the system beyond its limits to
          find the breaking point. Example: gradually increasing users until the
          system crashes. Finds the actual limit and how the system fails (gracefully
          or catastrophically).
        </li>
        <li>
          <strong>Spike Testing</strong> - Tests the system under sudden load surges.
          Example: flash sale or major event → traffic spikes 10x in seconds.
        </li>
        <li>
          <strong>Endurance/Soak Testing</strong> - Runs the system under normal
          load for a long time (hours/days) to detect memory leaks and gradual
          performance degradation.
        </li>
        <li>
          <strong>Scalability Testing</strong> - Tests whether the system scales
          well when adding resources (CPU, RAM, servers).
        </li>
        <li>
          <strong>Common tools:</strong> Apache JMeter, k6, Gatling, Locust, Artillery.
        </li>
      </ul>
      <p>
        <strong>Key metrics:</strong> Response time, Throughput (requests/second),
        Error rate, CPU/Memory usage, Concurrent users.
      </p>

      <h4>Security Testing</h4>
      <p>
        Tests whether the system protects data and resources from threats. Goal:
        find security vulnerabilities before attackers do.
      </p>
      <ul>
        <li>
          <strong>Vulnerability Scanning</strong> - Automated tools scan for known
          vulnerabilities (CVEs). Tools: OWASP ZAP, Nessus, Snyk.
        </li>
        <li>
          <strong>Penetration Testing (Pentest)</strong> - Security experts
          intentionally attack the system to find weaknesses. Three types: Black
          box (no system knowledge), White box (full knowledge), Grey box (partial
          knowledge).
        </li>
        <li>
          <strong>OWASP Top 10</strong> - The 10 most common web security
          vulnerabilities: SQL Injection, XSS (Cross-Site Scripting), Broken
          Authentication, Insecure Direct Object References, Security
          Misconfiguration, and more.
        </li>
        <li>
          <strong>Authentication &amp; Authorization Testing</strong> - Checks if
          login is secure and permissions are correct (user A cannot see user B&apos;s
          data).
        </li>
        <li>
          <strong>SAST vs DAST</strong> - Static Application Security Testing
          (static code analysis) vs Dynamic Application Security Testing (testing
          while the app is running).
        </li>
      </ul>

      <h4>Usability Testing</h4>
      <p>
        Tests whether real users can actually use the software easily and effectively.
        Focuses on user experience (UX), not functionality.
      </p>
      <ul>
        <li>
          <strong>Moderated Testing</strong> - Users perform tasks while a researcher
          observes directly, asking questions to understand their thinking
          (Think-aloud protocol).
        </li>
        <li>
          <strong>Unmoderated Testing</strong> - Users complete tasks at home,
          automatically recorded via tools. Cheaper and better scaling.
        </li>
        <li>
          <strong>A/B Testing</strong> - Compares 2 UI versions to see which performs
          better based on real user behavior.
        </li>
        <li>
          <strong>Accessibility Testing</strong> - Ensures users with disabilities
          (visual, hearing, motor) can use the software. Uses screen readers,
          keyboard-only navigation, color contrast checks.
        </li>
        <li>
          <strong>Metrics:</strong> Task completion rate, Time on task, Error rate,
          User satisfaction score (SUS - System Usability Scale).
        </li>
      </ul>

      <h4>Mind Map: All Testing Types</h4>
      <pre>
        <code>{`Software Testing
├── Functional Testing
│   ├── Unit Testing          → Test individual function/module
│   ├── Integration Testing   → Test module combinations
│   ├── System Testing        → Test the entire system
│   └── Acceptance Testing    → UAT, BAT, Alpha, Beta
│
├── Non-Functional Testing
│   ├── Performance Testing
│   │   ├── Load Testing      → Normal load
│   │   ├── Stress Testing    → Beyond limits
│   │   ├── Spike Testing     → Sudden load surges
│   │   └── Endurance Testing → Long-duration runs
│   ├── Security Testing
│   │   ├── Vulnerability Scan
│   │   ├── Penetration Testing
│   │   └── OWASP Top 10
│   └── Usability Testing
│       ├── UX Testing
│       ├── A/B Testing
│       └── Accessibility Testing
│
├── Maintenance Testing
│   ├── Regression Testing    → After changes
│   ├── Smoke Testing         → After new build
│   └── Sanity Testing        → After specific fix
│
└── Testing Approach
    ├── Manual Testing        → Human-executed
    ├── Automation Testing    → Automated scripts
    ├── Black Box Testing     → No code knowledge
    ├── White Box Testing     → Full code knowledge
    └── Grey Box Testing      → Partial knowledge`}</code>
      </pre>

      <p>
        <strong>Reflection:</strong> Looking at the big picture, testing is not just
        about &quot;finding bugs&quot; — it is a comprehensive quality assurance
        system. Performance testing ensures the system is fast and stable, Security
        testing protects user data, and Usability testing ensures a great experience.
        Each testing type addresses a different dimension of software quality.
      </p>

      <h4>HTML - Accessibility</h4>
      <p>
        Goal: Write clean, accessible HTML for all users including those using
        assistive technologies (screen readers, keyboard navigation).
      </p>

      <h4>ARIA Roles &amp; Attributes</h4>
      <p>
        ARIA (Accessible Rich Internet Applications) provides additional information
        to screen readers when plain HTML is insufficient.
      </p>
      <ul>
        <li>
          <strong>role</strong> - Defines the purpose of an element:{' '}
          <code>role=&quot;button&quot;</code>, <code>role=&quot;navigation&quot;</code>,{' '}
          <code>role=&quot;dialog&quot;</code>, <code>role=&quot;alert&quot;</code>.
          Prefer semantic HTML over ARIA roles when possible.
        </li>
        <li>
          <strong>aria-label</strong> - Assigns a descriptive name to an element
          when there is no visible text. Example: icon button with no label.{' '}
          <code>{`<button aria-label="Close dialog">✕</button>`}</code>
        </li>
        <li>
          <strong>aria-labelledby</strong> - Points to the ID of another element
          to use as a label. Used when the label is already visible on screen.
        </li>
        <li>
          <strong>aria-describedby</strong> - Points to an element containing a
          more detailed description. Example: form input pointing to its error
          message.
        </li>
        <li>
          <strong>aria-hidden=&quot;true&quot;</strong> - Hides an element from
          screen readers (use for decorative icons, duplicate content).
        </li>
        <li>
          <strong>aria-expanded, aria-selected, aria-checked</strong> - State of
          interactive components (dropdown, tab, checkbox).
        </li>
        <li>
          <strong>aria-live</strong> - Notifies screen readers when content changes
          dynamically. <code>aria-live=&quot;polite&quot;</code> reads after user
          finishes, <code>aria-live=&quot;assertive&quot;</code> reads immediately.
        </li>
      </ul>

      <h4>Alt Text for Images</h4>
      <ul>
        <li>
          <strong>Informative image</strong> - Alt text describes the content/purpose
          of the image. Keep it concise (under 125 characters).
        </li>
        <li>
          <strong>Decorative image</strong> - Use <code>alt=&quot;&quot;</code>{' '}
          (empty alt) so screen readers skip it.
        </li>
        <li>
          <strong>Functional image</strong> (link/button) - Alt text describes the
          function, not the image. Example: logo linking home →{' '}
          <code>alt=&quot;Havy homepage&quot;</code>.
        </li>
        <li>
          <strong>Complex image</strong> (chart, diagram) - Needs longer description;
          use <code>aria-describedby</code> pointing to a paragraph with detailed
          description.
        </li>
      </ul>

      <h4>Keyboard Navigation</h4>
      <ul>
        <li>
          Every interactive element must be focusable with <kbd>Tab</kbd>:{' '}
          <code>&lt;a&gt;</code>, <code>&lt;button&gt;</code>,{' '}
          <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>,{' '}
          <code>&lt;textarea&gt;</code>.
        </li>
        <li>
          Use <code>tabindex=&quot;0&quot;</code> to add an element to the tab
          order, <code>tabindex=&quot;-1&quot;</code> to allow JavaScript focus
          without tab order inclusion. Avoid positive <code>tabindex</code> values.
        </li>
        <li>
          Focus indicators must always be visible. Never use{' '}
          <code>outline: none</code> without a replacement style.
        </li>
        <li>
          Skip links: Add a hidden &quot;Skip to main content&quot; link at the
          top for keyboard users to bypass navigation.
        </li>
        <li>
          Modal/Dialog: When opened, focus must move into the modal. When closed,
          focus returns to the triggering element. <kbd>Escape</kbd> should close
          the modal.
        </li>
      </ul>

      <h4>Logical Heading Hierarchy</h4>
      <ul>
        <li>
          Only <strong>one</strong> <code>&lt;h1&gt;</code> per page — the main
          page title.
        </li>
        <li>
          Do not skip levels: <code>h1 → h2 → h3</code>, never jump from{' '}
          <code>h1</code> to <code>h3</code>.
        </li>
        <li>
          Use headings based on <em>content structure</em>, not visual style (use
          CSS for styling, not h1 just because you want large text).
        </li>
        <li>
          Screen readers use headings to navigate the page — headings must accurately
          describe their section&apos;s content.
        </li>
      </ul>

      <h4>HTML Validation</h4>
      <ul>
        <li>
          Use the <strong>W3C Validator</strong> (validator.w3.org) to check for
          valid HTML — detects syntax errors, wrong attributes, and incorrect
          nesting.
        </li>
        <li>
          Use <strong>axe DevTools</strong> or <strong>Lighthouse</strong> in
          Chrome DevTools for automated accessibility audits.
        </li>
        <li>
          Test with real screen readers: NVDA (Windows, free), VoiceOver (Mac/iOS
          built-in), TalkBack (Android built-in).
        </li>
        <li>
          Check color contrast: minimum 4.5:1 ratio for normal text, 3:1 for large
          text (WCAG AA). Tool: WebAIM Contrast Checker.
        </li>
      </ul>

      <h4>Example - Accessible HTML:</h4>
      <pre>
        <code>{`<!-- Logical heading hierarchy -->
<main>
  <h1>Software Testing Guide</h1>

  <section aria-labelledby="perf-heading">
    <h2 id="perf-heading">Performance Testing</h2>
    <h3>Load Testing</h3>
    <p>Tests the system under normal load...</p>
  </section>
</main>

<!-- Navigation with skip link -->
<a href="#main-content" class="skip-link">Skip to main content</a>
<nav aria-label="Main navigation">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/testing">Testing</a></li>
  </ul>
</nav>
<main id="main-content">...</main>

<!-- Accessible icon button -->
<button
  type="button"
  aria-label="Close dialog"
  aria-expanded="true"
>
  <svg aria-hidden="true" focusable="false">...</svg>
</button>

<!-- Form with accessible labels -->
<form>
  <div>
    <label for="email">Email <span aria-hidden="true">*</span></label>
    <input
      type="email"
      id="email"
      name="email"
      required
      aria-required="true"
      aria-describedby="email-error"
    />
    <span id="email-error" role="alert" aria-live="polite">
      Invalid email address
    </span>
  </div>
</form>

<!-- Accessible data table -->
<table>
  <caption>Performance Testing Types Comparison</caption>
  <thead>
    <tr>
      <th scope="col">Type</th>
      <th scope="col">Purpose</th>
      <th scope="col">Load</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Load</th>
      <td>Test normal load</td>
      <td>Expected</td>
    </tr>
    <tr>
      <th scope="row">Stress</th>
      <td>Find breaking point</td>
      <td>Beyond limit</td>
    </tr>
  </tbody>
</table>

<!-- Accessible image examples -->
<!-- Informative -->
<img src="chart.png" alt="Response time chart showing increase beyond 1000 concurrent users" />

<!-- Decorative -->
<img src="divider.png" alt="" />

<!-- Complex image -->
<img
  src="architecture.png"
  alt="System architecture diagram"
  aria-describedby="arch-desc"
/>
<p id="arch-desc">
  The system has 3 layers: the Client sends requests to the API Gateway,
  the Gateway routes to microservices, each service has its own database.
</p>`}</code>
      </pre>

      <p>
        <strong>Reflection:</strong> Accessibility is not a feature added later —
        it must be built into the HTML structure from the start. ARIA is a powerful
        tool but the principle is &quot;No ARIA is better than bad ARIA&quot; —
        using ARIA incorrectly is worse than not using it at all. Prioritize semantic
        HTML, and use ARIA only when truly necessary. Good accessibility typically
        goes hand-in-hand with good SEO and good UX for all users.
      </p>
    </>
  ),
};
