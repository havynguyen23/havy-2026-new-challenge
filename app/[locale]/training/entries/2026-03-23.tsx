import { DiaryEntry } from './types';

export const vi: DiaryEntry = {
  date: '2026-03-23',
  title: '7 Nguyên tắc Kiểm thử Phần mềm (ISTQB) & CSS: Grid Layout',
  content: (
    <>
      <p>
        Hôm nay mình học 7 nguyên tắc kiểm thử phần mềm theo chuẩn ISTQB - những
        nguyên tắc nền tảng mà mọi tester đều cần nắm vững. Về CSS, mình chuyển
        sang CSS Grid - công cụ layout hai chiều mạnh mẽ để xây dựng giao diện
        phức tạp và responsive.
      </p>

      <h4>Software Testing - Ngày 8: 7 Nguyên tắc Kiểm thử (ISTQB)</h4>

      <h4>
        Nguyên tắc 1: Testing shows presence of defects, not their absence
      </h4>
      <p>
        Kiểm thử chứng minh rằng lỗi <em>tồn tại</em>, không thể chứng minh rằng
        phần mềm <em>hoàn toàn không có lỗi</em>. Dù test nhiều đến đâu, vẫn
        luôn có thể còn lỗi ẩn.
      </p>
      <ul>
        <li>
          <strong>Ví dụ:</strong> Bạn test chức năng đăng nhập với 100 test case
          và tất cả đều pass. Điều này không có nghĩa là đăng nhập hoàn toàn
          không có lỗi - có thể vẫn còn lỗi với một tổ hợp ký tự đặc biệt mà bạn
          chưa thử.
        </li>
        <li>
          <strong>Ứng dụng:</strong> Không bao giờ tuyên bố &quot;đã test xong,
          không còn lỗi&quot; - chỉ có thể nói &quot;chưa tìm thấy lỗi nào thêm
          trong phạm vi đã test&quot;.
        </li>
      </ul>

      <h4>Nguyên tắc 2: Exhaustive testing is impossible</h4>
      <p>
        Không thể test tất cả mọi tổ hợp đầu vào, trạng thái và điều kiện. Do đó
        cần ưu tiên dựa trên rủi ro và tầm quan trọng.
      </p>
      <ul>
        <li>
          <strong>Ví dụ:</strong> Ô nhập mật khẩu có thể nhận hàng tỷ tỷ tổ hợp
          ký tự. Không thể test hết - thay vào đó dùng{' '}
          <em>equivalence partitioning</em> và <em>boundary value analysis</em>{' '}
          để chọn test case đại diện.
        </li>
        <li>
          <strong>Ứng dụng:</strong> Dùng kỹ thuật test design (EP, BVA,
          decision table) để cover tối đa với ít test case nhất.
        </li>
      </ul>

      <h4>Nguyên tắc 3: Early testing saves time and money</h4>
      <p>
        Kiểm thử sớm giúp phát hiện lỗi ngay từ đầu - chi phí sửa lỗi tăng theo
        cấp số nhân khi phát hiện muộn hơn.
      </p>
      <pre>
        <code>{`Chi phí sửa lỗi theo giai đoạn:
Requirements:  $1
Design:        $10
Development:   $100
Testing:       $1,000
Production:    $10,000+`}</code>
      </pre>
      <ul>
        <li>
          <strong>Ví dụ:</strong> Lỗi trong requirement spec (ví dụ: logic tính
          tiền sai) nếu phát hiện khi review requirements chỉ mất vài phút sửa.
          Nếu phát hiện sau khi đã release, phải sửa code, re-test, re-deploy và
          có thể xử lý khiếu nại khách hàng.
        </li>
        <li>
          <strong>Ứng dụng:</strong> Tham gia review requirement và design từ
          sớm, không đợi đến khi có code mới bắt đầu test.
        </li>
      </ul>

      <h4>Nguyên tắc 4: Defects cluster together</h4>
      <p>
        Lỗi thường tập trung ở một số module hoặc chức năng nhất định. 80% lỗi
        thường nằm trong 20% code (quy tắc Pareto).
      </p>
      <ul>
        <li>
          <strong>Ví dụ:</strong> Trong một ứng dụng e-commerce, module thanh
          toán và giỏ hàng thường chứa nhiều lỗi nhất vì logic phức tạp và nhiều
          edge case. Module hiển thị danh sách sản phẩm ít lỗi hơn nhiều.
        </li>
        <li>
          <strong>Ứng dụng:</strong> Tập trung effort testing vào các module
          phức tạp, mới thay đổi, hoặc có lịch sử nhiều lỗi. Dùng risk-based
          testing.
        </li>
      </ul>

      <h4>Nguyên tắc 5: Beware of the Pesticide Paradox</h4>
      <p>
        Nếu cứ lặp đi lặp lại cùng một bộ test case, sau một thời gian chúng sẽ
        không tìm được lỗi mới nữa - giống như thuốc trừ sâu dùng mãi thì sâu
        sinh ra kháng thuốc.
      </p>
      <ul>
        <li>
          <strong>Ví dụ:</strong> Regression test suite được viết 2 năm trước và
          không cập nhật. Các test này luôn pass không phải vì code tốt mà vì
          chúng không cover các tính năng mới và thay đổi gần đây.
        </li>
        <li>
          <strong>Ứng dụng:</strong> Thường xuyên review và cập nhật test cases,
          thêm test mới cho các tính năng mới, thử dùng exploratory testing để
          tìm lỗi ngoài script.
        </li>
      </ul>

      <h4>Nguyên tắc 6: Testing is context dependent</h4>
      <p>
        Cách tiếp cận kiểm thử phụ thuộc vào ngữ cảnh - không có phương pháp nào
        phù hợp cho tất cả mọi dự án.
      </p>
      <ul>
        <li>
          <strong>Ví dụ so sánh:</strong>
          <ul>
            <li>
              <strong>Phần mềm y tế (máy thở):</strong> Cần test cực kỳ kỹ
              lưỡng, có certification, formal verification - lỗi có thể gây nguy
              hiểm tính mạng
            </li>
            <li>
              <strong>App game mobile:</strong> Test tập trung vào UX và
              performance, có thể ship nhanh và fix qua update - lỗi nhỏ không
              quá nghiêm trọng
            </li>
            <li>
              <strong>Startup MVP:</strong> Test minimal để ship nhanh, thu
              feedback thực tế
            </li>
          </ul>
        </li>
        <li>
          <strong>Ứng dụng:</strong> Điều chỉnh test strategy dựa trên: độ rủi
          ro, ngân sách, deadline, loại phần mềm, yêu cầu compliance.
        </li>
      </ul>

      <h4>Nguyên tắc 7: Absence of errors fallacy</h4>
      <p>
        Phần mềm không có lỗi nhưng không đáp ứng nhu cầu người dùng vẫn là phần
        mềm thất bại. &quot;Đúng&quot; về mặt kỹ thuật không đồng nghĩa với
        &quot;hữu ích&quot;.
      </p>
      <ul>
        <li>
          <strong>Ví dụ:</strong> Một app quản lý chi tiêu được test kỹ lưỡng,
          không có bug, nhưng UI quá phức tạp khiến người dùng không thể dùng
          được. Hoặc: tính năng được xây dựng đúng theo spec, nhưng spec lại
          không phản ánh đúng nhu cầu thực của người dùng.
        </li>
        <li>
          <strong>Ứng dụng:</strong> Testing phải bao gồm cả verification (xây
          đúng theo spec) và validation (xây đúng thứ người dùng cần). User
          acceptance testing (UAT) rất quan trọng.
        </li>
      </ul>

      <h4>Tổng hợp 7 nguyên tắc</h4>
      <pre>
        <code>{`┌────┬─────────────────────────────────────────┬───────────────────────────┐
│ #  │ Nguyên tắc                              │ Từ khóa                   │
├────┼─────────────────────────────────────────┼───────────────────────────┤
│ 1  │ Testing shows presence of defects       │ Không thể 100% clean      │
│ 2  │ Exhaustive testing is impossible        │ Ưu tiên theo rủi ro       │
│ 3  │ Early testing saves time & money        │ Shift-left testing        │
│ 4  │ Defects cluster together                │ Quy tắc Pareto 80/20      │
│ 5  │ Beware of pesticide paradox             │ Cập nhật test cases       │
│ 6  │ Testing is context dependent            │ Không có silver bullet    │
│ 7  │ Absence of errors fallacy               │ Verification + Validation │
└────┴─────────────────────────────────────────┴───────────────────────────┘`}</code>
      </pre>

      <h4>CSS - Ngày 3: CSS Grid Layout</h4>
      <p>
        Mục tiêu: Tạo layout hai chiều với CSS Grid và làm trang web thích nghi
        với kích thước màn hình khác nhau.
      </p>

      <h4>display: grid - Kích hoạt CSS Grid</h4>
      <p>
        Grid tạo ra một lưới hai chiều (hàng và cột) cho phép đặt phần tử vào
        bất kỳ ô nào trong lưới. Khác với Flexbox (một chiều), Grid quản lý cả
        hai chiều cùng lúc.
      </p>
      <pre>
        <code>{`.container {
  display: grid;
  /* Mặc định: tất cả items xếp thành 1 cột */
}`}</code>
      </pre>

      <h4>grid-template-columns & grid-template-rows</h4>
      <p>
        Định nghĩa số cột/hàng và kích thước của chúng. Đơn vị <code>fr</code>{' '}
        (fractional unit) chia đều không gian còn lại.
      </p>
      <pre>
        <code>{`.container {
  display: grid;

  /* 3 cột bằng nhau */
  grid-template-columns: 1fr 1fr 1fr;

  /* Viết tắt với repeat() */
  grid-template-columns: repeat(3, 1fr);

  /* Cột hỗn hợp: sidebar 200px + nội dung linh hoạt */
  grid-template-columns: 200px 1fr;

  /* 2 cột + 2 hàng */
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 100px auto;
}`}</code>
      </pre>

      <h4>gap - Khoảng cách giữa các ô</h4>
      <pre>
        <code>{`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 16px;              /* Cả hàng và cột */
  column-gap: 24px;       /* Chỉ giữa cột */
  row-gap: 16px;          /* Chỉ giữa hàng */

  /* Viết tắt: row-gap column-gap */
  gap: 16px 24px;
}`}</code>
      </pre>

      <h4>span & placement - Đặt vị trí và kéo dài phần tử</h4>
      <p>
        Có thể chỉ định vị trí chính xác của từng item trong grid, hoặc cho item
        chiếm nhiều cột/hàng.
      </p>
      <pre>
        <code>{`/* Kéo dài phần tử qua nhiều cột/hàng */
.header {
  grid-column: span 3;   /* Chiếm 3 cột */
  grid-row: span 2;      /* Chiếm 2 hàng */
}

/* Đặt vị trí chính xác (dùng line numbers) */
.sidebar {
  grid-column: 1 / 2;    /* Từ line 1 đến line 2 */
  grid-row: 1 / 3;       /* Từ line 1 đến line 3 */
}

.main {
  grid-column: 2 / 4;    /* Từ line 2 đến line 4 (chiếm 2 cột) */
  grid-row: 1 / 2;
}

/* Viết tắt với -1 (đến hết) */
.full-width {
  grid-column: 1 / -1;   /* Từ đầu đến cuối hàng */
}`}</code>
      </pre>

      <h4>Ví dụ: Layout trang web điển hình</h4>
      <pre>
        <code>{`/* HTML:
<div class="layout">
  <header class="header">Header</header>
  <aside class="sidebar">Sidebar</aside>
  <main class="main">Main Content</main>
  <footer class="footer">Footer</footer>
</div>
*/

.layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr 50px;
  min-height: 100vh;
  gap: 0;
}

.header {
  grid-column: 1 / -1; /* Chiếm toàn bộ hàng đầu */
}

.sidebar {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.main {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.footer {
  grid-column: 1 / -1; /* Chiếm toàn bộ hàng cuối */
}`}</code>
      </pre>

      <h4>Media Queries - Responsive Design</h4>
      <p>
        Media queries cho phép áp dụng CSS khác nhau dựa trên đặc điểm thiết bị
        (chủ yếu là chiều rộng màn hình).
      </p>
      <pre>
        <code>{`/* Cú pháp cơ bản */
@media (max-width: 768px) {
  /* CSS cho màn hình nhỏ hơn 768px */
}

@media (min-width: 1024px) {
  /* CSS cho màn hình lớn hơn 1024px */
}

/* Kết hợp điều kiện */
@media (min-width: 768px) and (max-width: 1024px) {
  /* CSS cho tablet */
}

/* Ví dụ: Grid responsive */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Desktop: 3 cột */
  gap: 24px;
}

@media (max-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 cột */
  }
}

@media (max-width: 640px) {
  .card-grid {
    grid-template-columns: 1fr; /* Mobile: 1 cột */
    gap: 16px;
  }
}`}</code>
      </pre>

      <h4>Mobile-first approach</h4>
      <p>
        Thay vì viết CSS cho desktop rồi override cho mobile (desktop-first),
        mobile-first bắt đầu từ mobile và mở rộng dần lên. Đây là best practice
        vì mobile chiếm phần lớn traffic web hiện nay.
      </p>
      <pre>
        <code>{`/* ❌ Desktop-first (không khuyến khích) */
.grid {
  grid-template-columns: repeat(3, 1fr); /* Desktop */
}
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr; /* Override cho mobile */
  }
}

/* ✅ Mobile-first (khuyến khích) */
.grid {
  grid-template-columns: 1fr; /* Mobile: 1 cột - base style */
}
@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 cột */
  }
}
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 cột */
  }
}`}</code>
      </pre>

      <h4>Breakpoints phổ biến</h4>
      <pre>
        <code>{`/* Tailwind CSS breakpoints (tham khảo) */
/* sm  */ @media (min-width: 640px)  { ... }
/* md  */ @media (min-width: 768px)  { ... }
/* lg  */ @media (min-width: 1024px) { ... }
/* xl  */ @media (min-width: 1280px) { ... }
/* 2xl */ @media (min-width: 1536px) { ... }`}</code>
      </pre>

      <h4>So sánh Flexbox vs Grid</h4>
      <pre>
        <code>{`┌──────────────────┬────────────────────────┬────────────────────────┐
│                  │      Flexbox           │      CSS Grid          │
├──────────────────┼────────────────────────┼────────────────────────┤
│ Chiều            │ Một chiều              │ Hai chiều              │
│ Tốt cho          │ Components, navigation │ Page layout, galleries │
│ Ví dụ            │ Navbar, button group   │ Dashboard, card grid   │
│ Alignment        │ Dọc HOẶC ngang         │ Dọc VÀ ngang cùng lúc  │
│ Gap control      │ gap                    │ gap (row + column)     │
│ Khi nào dùng     │ Items trong 1 hàng/cột │ Layout nhiều vùng      │
└──────────────────┴────────────────────────┴────────────────────────┘`}</code>
      </pre>

      <p>
        <strong>Nhận xét:</strong> 7 nguyên tắc ISTQB không chỉ là lý thuyết -
        chúng phản ánh thực tế của nghề tester. Nguyên tắc quan trọng nhất mình
        thấy là &quot;Testing is context dependent&quot; - không có cách tiếp
        cận duy nhất cho mọi dự án. Về CSS Grid, đây là bước tiến lớn so với
        Flexbox khi cần layout phức tạp hai chiều. Kết hợp Grid cho page layout
        tổng thể và Flexbox cho components bên trong là pattern phổ biến nhất
        trong thực tế.
      </p>
    </>
  ),
};

export const en: DiaryEntry = {
  date: '2026-03-23',
  title: '7 ISTQB Testing Principles & CSS: Grid Layout',
  content: (
    <>
      <p>
        Today I studied the 7 fundamental software testing principles from the
        ISTQB standard — the core foundation every tester needs to understand.
        For CSS, I moved on to CSS Grid — the powerful two-dimensional layout
        tool for building complex, responsive interfaces.
      </p>

      <h4>Software Testing - Day 8: 7 Testing Principles (ISTQB)</h4>

      <h4>Principle 1: Testing shows presence of defects, not their absence</h4>
      <p>
        Testing proves that defects <em>exist</em>, but cannot prove that
        software is <em>completely defect-free</em>. No matter how much you
        test, there may still be hidden defects.
      </p>
      <ul>
        <li>
          <strong>Example:</strong> You test the login feature with 100 test
          cases and they all pass. This does not mean login is bug-free — there
          may still be a bug triggered by a special character combination you
          have not tried.
        </li>
        <li>
          <strong>Application:</strong> Never claim &quot;testing is done, no
          more bugs&quot; — only say &quot;no additional defects found within
          the tested scope.&quot;
        </li>
      </ul>

      <h4>Principle 2: Exhaustive testing is impossible</h4>
      <p>
        Testing every possible combination of inputs, states, and conditions is
        not feasible. Testing effort must be prioritized based on risk and
        importance.
      </p>
      <ul>
        <li>
          <strong>Example:</strong> A password field can accept trillions of
          character combinations. Instead of testing them all, use{' '}
          <em>equivalence partitioning</em> and <em>boundary value analysis</em>{' '}
          to select representative test cases.
        </li>
        <li>
          <strong>Application:</strong> Use test design techniques (EP, BVA,
          decision tables) to maximize coverage with the fewest test cases.
        </li>
      </ul>

      <h4>Principle 3: Early testing saves time and money</h4>
      <p>
        Testing early helps find defects sooner — the cost to fix a defect grows
        exponentially the later it is discovered.
      </p>
      <pre>
        <code>{`Cost to fix a defect by phase:
Requirements:  $1
Design:        $10
Development:   $100
Testing:       $1,000
Production:    $10,000+`}</code>
      </pre>
      <ul>
        <li>
          <strong>Example:</strong> A logic error in a requirements spec (e.g.,
          wrong billing calculation) takes minutes to fix during a requirements
          review. Found after release, it requires code changes, re-testing,
          re-deployment, and potentially handling customer complaints.
        </li>
        <li>
          <strong>Application:</strong> Get involved in requirements and design
          reviews early — do not wait for code to start testing.
        </li>
      </ul>

      <h4>Principle 4: Defects cluster together</h4>
      <p>
        Defects tend to concentrate in a small number of modules or features.
        Roughly 80% of defects are found in 20% of the code (Pareto principle).
      </p>
      <ul>
        <li>
          <strong>Example:</strong> In an e-commerce app, the payment and cart
          modules tend to have the most defects due to complex logic and many
          edge cases. The product listing module is far less defect-prone.
        </li>
        <li>
          <strong>Application:</strong> Focus testing effort on complex modules,
          recently changed code, and areas with a history of defects. Use
          risk-based testing.
        </li>
      </ul>

      <h4>Principle 5: Beware of the Pesticide Paradox</h4>
      <p>
        If the same set of test cases is run repeatedly, they will eventually
        stop finding new defects — similar to how pests develop resistance to
        the same pesticide over time.
      </p>
      <ul>
        <li>
          <strong>Example:</strong> A regression test suite written two years
          ago that has never been updated. These tests always pass not because
          the code is great, but because they do not cover recent changes and
          new features.
        </li>
        <li>
          <strong>Application:</strong> Regularly review and update test cases,
          add new tests for new features, and use exploratory testing to find
          defects outside scripted scenarios.
        </li>
      </ul>

      <h4>Principle 6: Testing is context dependent</h4>
      <p>
        The testing approach depends on context — there is no single method that
        fits every project.
      </p>
      <ul>
        <li>
          <strong>Comparison examples:</strong>
          <ul>
            <li>
              <strong>Medical software (ventilator):</strong> Requires extremely
              thorough testing, certification, formal verification — defects can
              be life-threatening
            </li>
            <li>
              <strong>Mobile game app:</strong> Testing focuses on UX and
              performance, can ship fast and fix via updates — minor bugs are
              less critical
            </li>
            <li>
              <strong>Startup MVP:</strong> Minimal testing to ship quickly and
              gather real user feedback
            </li>
          </ul>
        </li>
        <li>
          <strong>Application:</strong> Adjust the test strategy based on risk
          level, budget, deadline, software type, and compliance requirements.
        </li>
      </ul>

      <h4>Principle 7: Absence of errors fallacy</h4>
      <p>
        Software that has no defects but does not meet user needs is still a
        failure. Being technically &quot;correct&quot; does not mean being
        &quot;useful.&quot;
      </p>
      <ul>
        <li>
          <strong>Example:</strong> An expense tracking app that is thoroughly
          tested with zero bugs, but the UI is so complex users cannot figure it
          out. Or: a feature built exactly to spec, but the spec did not
          accurately reflect actual user needs.
        </li>
        <li>
          <strong>Application:</strong> Testing must include both verification
          (built correctly per spec) and validation (built the right thing for
          users). User Acceptance Testing (UAT) is essential.
        </li>
      </ul>

      <h4>Summary of the 7 Principles</h4>
      <pre>
        <code>{`┌────┬──────────────────────────────────────────┬─────────────────────┐
│ #  │ Principle                                │ Key Idea            │
├────┼──────────────────────────────────────────┼─────────────────────┤
│ 1  │ Testing shows presence of defects        │ Never 100% clean    │
│ 2  │ Exhaustive testing is impossible         │ Prioritize by risk  │
│ 3  │ Early testing saves time & money         │ Shift-left testing  │
│ 4  │ Defects cluster together                 │ Pareto 80/20 rule   │
│ 5  │ Beware of pesticide paradox              │ Update test cases   │
│ 6  │ Testing is context dependent             │ No silver bullet    │
│ 7  │ Absence of errors fallacy                │ Verify + Validate   │
└────┴──────────────────────────────────────────┴─────────────────────┘`}</code>
      </pre>

      <h4>CSS - Day 3: CSS Grid Layout</h4>
      <p>
        Goal: Create two-dimensional layouts with CSS Grid and make pages adapt
        to different screen sizes.
      </p>

      <h4>display: grid - Enabling CSS Grid</h4>
      <p>
        Grid creates a two-dimensional lattice (rows and columns) that lets you
        place elements in any cell. Unlike Flexbox (one-dimensional), Grid
        manages both dimensions simultaneously.
      </p>
      <pre>
        <code>{`.container {
  display: grid;
  /* Default: all items stack in a single column */
}`}</code>
      </pre>

      <h4>grid-template-columns & grid-template-rows</h4>
      <p>
        Define the number of columns/rows and their sizes. The <code>fr</code>{' '}
        (fractional) unit divides remaining space proportionally.
      </p>
      <pre>
        <code>{`.container {
  display: grid;

  /* 3 equal columns */
  grid-template-columns: 1fr 1fr 1fr;

  /* Shorthand with repeat() */
  grid-template-columns: repeat(3, 1fr);

  /* Mixed columns: fixed sidebar + flexible content */
  grid-template-columns: 200px 1fr;

  /* 2 columns + 2 rows */
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 100px auto;
}`}</code>
      </pre>

      <h4>gap - Spacing between cells</h4>
      <pre>
        <code>{`.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 16px;              /* Both row and column */
  column-gap: 24px;       /* Column gaps only */
  row-gap: 16px;          /* Row gaps only */

  /* Shorthand: row-gap column-gap */
  gap: 16px 24px;
}`}</code>
      </pre>

      <h4>span & placement - Positioning and spanning elements</h4>
      <p>
        You can specify the exact position of each item in the grid, or have an
        item span multiple columns or rows.
      </p>
      <pre>
        <code>{`/* Span an element across multiple columns/rows */
.header {
  grid-column: span 3;   /* Occupies 3 columns */
  grid-row: span 2;      /* Occupies 2 rows */
}

/* Precise placement using line numbers */
.sidebar {
  grid-column: 1 / 2;    /* From line 1 to line 2 */
  grid-row: 1 / 3;       /* From line 1 to line 3 */
}

.main {
  grid-column: 2 / 4;    /* From line 2 to line 4 (spans 2 columns) */
  grid-row: 1 / 2;
}

/* Use -1 to mean "end of the track" */
.full-width {
  grid-column: 1 / -1;   /* Stretch from start to end */
}`}</code>
      </pre>

      <h4>Example: Typical page layout</h4>
      <pre>
        <code>{`/* HTML:
<div class="layout">
  <header class="header">Header</header>
  <aside class="sidebar">Sidebar</aside>
  <main class="main">Main Content</main>
  <footer class="footer">Footer</footer>
</div>
*/

.layout {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: 60px 1fr 50px;
  min-height: 100vh;
  gap: 0;
}

.header {
  grid-column: 1 / -1; /* Full-width header */
}

.sidebar {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.main {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.footer {
  grid-column: 1 / -1; /* Full-width footer */
}`}</code>
      </pre>

      <h4>Media Queries - Responsive Design</h4>
      <p>
        Media queries apply different CSS rules based on device characteristics
        — primarily screen width.
      </p>
      <pre>
        <code>{`/* Basic syntax */
@media (max-width: 768px) {
  /* CSS for screens narrower than 768px */
}

@media (min-width: 1024px) {
  /* CSS for screens wider than 1024px */
}

/* Combined conditions */
@media (min-width: 768px) and (max-width: 1024px) {
  /* CSS for tablets */
}

/* Example: responsive grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columns */
  gap: 24px;
}

@media (max-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
  }
}

@media (max-width: 640px) {
  .card-grid {
    grid-template-columns: 1fr; /* Mobile: 1 column */
    gap: 16px;
  }
}`}</code>
      </pre>

      <h4>Mobile-first approach</h4>
      <p>
        Instead of writing CSS for desktop and then overriding for mobile
        (desktop-first), mobile-first starts from the smallest screen and
        progressively enhances upward. This is best practice because mobile
        accounts for the majority of web traffic today.
      </p>
      <pre>
        <code>{`/* ❌ Desktop-first (not recommended) */
.grid {
  grid-template-columns: repeat(3, 1fr); /* Desktop */
}
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr; /* Override for mobile */
  }
}

/* ✅ Mobile-first (recommended) */
.grid {
  grid-template-columns: 1fr; /* Mobile: 1 column — base style */
}
@media (min-width: 640px) {
  .grid {
    grid-template-columns: repeat(2, 1fr); /* Tablet: 2 columns */
  }
}
@media (min-width: 1024px) {
  .grid {
    grid-template-columns: repeat(3, 1fr); /* Desktop: 3 columns */
  }
}`}</code>
      </pre>

      <h4>Common breakpoints</h4>
      <pre>
        <code>{`/* Tailwind CSS breakpoints (reference) */
/* sm  */ @media (min-width: 640px)  { ... }
/* md  */ @media (min-width: 768px)  { ... }
/* lg  */ @media (min-width: 1024px) { ... }
/* xl  */ @media (min-width: 1280px) { ... }
/* 2xl */ @media (min-width: 1536px) { ... }`}</code>
      </pre>

      <h4>Flexbox vs Grid comparison</h4>
      <pre>
        <code>{`┌──────────────────┬────────────────────────┬────────────────────────┐
│                  │      Flexbox           │      CSS Grid          │
├──────────────────┼────────────────────────┼────────────────────────┤
│ Dimensions       │ One-dimensional        │ Two-dimensional        │
│ Best for         │ Components, navigation │ Page layout, galleries │
│ Example          │ Navbar, button group   │ Dashboard, card grid   │
│ Alignment        │ One axis at a time     │ Both axes at once      │
│ Gap control      │ gap                    │ gap (row + column)     │
│ When to use      │ Items in a row/column  │ Multi-region layouts   │
└──────────────────┴────────────────────────┴────────────────────────┘`}</code>
      </pre>

      <p>
        <strong>Takeaway:</strong> The 7 ISTQB principles are not just theory —
        they reflect the everyday reality of being a tester. The principle I
        find most important is &quot;Testing is context dependent&quot; — there
        is no one-size-fits-all approach. For CSS Grid, it is a major step up
        from Flexbox when complex two-dimensional layouts are needed. Using Grid
        for the overall page layout and Flexbox for components within is the
        most common pattern in practice.
      </p>
    </>
  ),
};
