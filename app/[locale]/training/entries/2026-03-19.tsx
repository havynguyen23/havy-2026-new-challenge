import { DiaryEntry } from './types';

export const vi: DiaryEntry = {
  date: '2026-03-19',
  title: 'System Testing, Regression/Smoke/Sanity Testing và HTML Tables & Media',
  content: (
    <>
      <p>
        Hôm nay mình tiếp tục học Testing với các cấp độ kiểm thử cao hơn:
        System testing, Acceptance testing, và các loại kiểm thử quan trọng
        khác. Về HTML, mình học cách hiển thị dữ liệu bằng bảng và nhúng các
        loại media.
      </p>

      <h4>Software Testing - Ngày 4: System &amp; Acceptance Testing</h4>

      <h4>System Testing (Kiểm thử hệ thống)</h4>
      <p>
        Kiểm tra toàn bộ hệ thống đã tích hợp hoàn chỉnh để đảm bảo phần mềm
        hoạt động đúng theo yêu cầu đặc tả (SRS - Software Requirements
        Specification).
      </p>
      <ul>
        <li>Kiểm tra end-to-end, từ đầu vào đến đầu ra cuối cùng.</li>
        <li>Thực hiện trên môi trường giống production nhất có thể.</li>
        <li>Bao gồm cả functional và non-functional testing.</li>
        <li>Thường do QA team/Tester thực hiện, không phải developer.</li>
        <li>
          Ví dụ: Test toàn bộ flow mua hàng online từ đăng nhập → chọn sản
          phẩm → thanh toán → nhận xác nhận đơn hàng.
        </li>
      </ul>

      <h4>Acceptance Testing (Kiểm thử chấp nhận)</h4>
      <p>
        Kiểm tra xem hệ thống có đáp ứng yêu cầu kinh doanh và sẵn sàng để
        bàn giao cho người dùng không. Đây là giai đoạn testing cuối cùng trước
        khi release.
      </p>
      <ul>
        <li>
          <strong>UAT (User Acceptance Testing)</strong> - Do người dùng cuối
          hoặc đại diện khách hàng thực hiện. Kiểm tra phần mềm có giải quyết
          được vấn đề thực tế của họ không.
        </li>
        <li>
          <strong>BAT (Business Acceptance Testing)</strong> - Do stakeholder
          kiểm tra phần mềm có đáp ứng mục tiêu kinh doanh không.
        </li>
        <li>
          <strong>Alpha Testing</strong> - Test nội bộ trong tổ chức phát triển.
        </li>
        <li>
          <strong>Beta Testing</strong> - Phát hành cho một nhóm người dùng thật
          để thu thập feedback trước khi release chính thức.
        </li>
      </ul>

      <h4>Regression, Smoke &amp; Sanity Testing</h4>
      <ul>
        <li>
          <strong>Regression Testing (Kiểm thử hồi quy)</strong> - Chạy lại các
          test case đã pass trước đó sau khi có thay đổi code (fix bug, thêm
          tính năng mới) để đảm bảo không có gì bị hỏng. Rất quan trọng trong
          Agile vì code thay đổi liên tục. Thường được tự động hóa
          (automation).
        </li>
        <li>
          <strong>Smoke Testing (Kiểm thử khói)</strong> - Kiểm tra nhanh các
          chức năng chính của phần mềm sau mỗi bản build mới. Mục đích: xác
          nhận build có đủ ổn định để tiếp tục test chi tiết không. Còn gọi là
          &quot;Build Verification Testing&quot;. Ví dụ: app có khởi động được
          không? Đăng nhập có hoạt động không? Trang chủ có load được không?
        </li>
        <li>
          <strong>Sanity Testing (Kiểm thử hợp lý)</strong> - Kiểm tra nhanh
          một phần cụ thể sau khi fix bug hoặc thay đổi nhỏ. Khác với Smoke
          Testing ở chỗ Sanity tập trung vào phần bị thay đổi, còn Smoke kiểm
          tra tổng thể. Ví dụ: fix bug thanh toán → chỉ test lại flow thanh
          toán.
        </li>
      </ul>

      <h4>So sánh Smoke vs Sanity vs Regression</h4>
      <pre>
        <code>{`| Tiêu chí     | Smoke Testing     | Sanity Testing     | Regression Testing  |
|--------------|-------------------|--------------------|---------------------|
| Phạm vi      | Tổng thể (rộng)  | Cụ thể (hẹp)      | Toàn diện           |
| Khi nào      | Sau mỗi build mới | Sau fix bug/change | Sau mọi thay đổi   |
| Mục đích     | Build ổn định?    | Fix đúng chưa?    | Không hỏng gì?     |
| Thời gian    | Rất nhanh         | Nhanh              | Tốn thời gian      |
| Tự động hóa  | Có thể            | Thường manual      | Nên tự động hóa    |`}</code>
      </pre>

      <p>
        <strong>Nhận xét:</strong> Mỗi loại testing có vai trò riêng trong quy
        trình đảm bảo chất lượng phần mềm. Smoke testing như &quot;kiểm tra sức
        khỏe&quot; nhanh, Sanity testing kiểm tra phần vừa thay đổi, và
        Regression testing đảm bảo mọi thứ vẫn hoạt động sau thay đổi.
      </p>

      <h4>HTML - Tables &amp; Media</h4>
      <p>
        Mục tiêu hôm nay là hiển thị dữ liệu có cấu trúc bằng bảng và nhúng
        các loại media như hình ảnh, video, và audio.
      </p>
      <ul>
        <li>
          <strong>table, thead, tbody, tr, td</strong> -{' '}
          <code>&lt;table&gt;</code> tạo bảng, <code>&lt;thead&gt;</code> chứa
          hàng tiêu đề, <code>&lt;tbody&gt;</code> chứa dữ liệu,{' '}
          <code>&lt;tr&gt;</code> là mỗi hàng, <code>&lt;th&gt;</code> cho ô
          tiêu đề, <code>&lt;td&gt;</code> cho ô dữ liệu. Thuộc tính{' '}
          <code>colspan</code> và <code>rowspan</code> để gộp ô.
        </li>
        <li>
          <strong>img với alt text</strong> - <code>&lt;img&gt;</code> nhúng
          hình ảnh, thuộc tính <code>alt</code> mô tả hình (bắt buộc cho
          accessibility). Nếu hình là decorative, dùng{' '}
          <code>alt=&quot;&quot;</code>. Nên thêm <code>width</code> và{' '}
          <code>height</code> để tránh layout shift.
        </li>
        <li>
          <strong>video &amp; audio</strong> - <code>&lt;video&gt;</code> nhúng
          video với <code>controls</code> để hiện nút play/pause,{' '}
          <code>&lt;audio&gt;</code> cho âm thanh. Cả hai đều hỗ trợ nhiều
          source qua <code>&lt;source&gt;</code> tag và fallback text cho trình
          duyệt không hỗ trợ.
        </li>
        <li>
          <strong>iframe</strong> - <code>&lt;iframe&gt;</code> nhúng nội dung
          từ trang web khác (YouTube, Google Maps). Cần chú ý bảo mật: dùng{' '}
          <code>sandbox</code> attribute để giới hạn quyền,{' '}
          <code>loading=&quot;lazy&quot;</code> để tối ưu performance.
        </li>
        <li>
          <strong>Responsive images với srcset</strong> -{' '}
          <code>srcset</code> cho phép trình duyệt chọn hình ảnh phù hợp với
          kích thước màn hình. Kết hợp với <code>sizes</code> để chỉ định kích
          thước hiển thị. Giúp tiết kiệm bandwidth trên thiết bị nhỏ và hiển
          thị hình sắc nét trên màn hình Retina.
        </li>
      </ul>

      <h4>Ví dụ - Bảng dữ liệu và Media:</h4>
      <pre>
        <code>{`<!-- Table -->
<table>
  <thead>
    <tr>
      <th>Loại Testing</th>
      <th>Phạm vi</th>
      <th>Ai thực hiện</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Unit</td>
      <td>Function/Method</td>
      <td>Developer</td>
    </tr>
    <tr>
      <td>System</td>
      <td>Toàn hệ thống</td>
      <td>QA Team</td>
    </tr>
  </tbody>
</table>

<!-- Image with srcset -->
<img
  src="photo-800.jpg"
  srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px, 800px"
  alt="Mô tả hình ảnh"
  width="800" height="600"
/>

<!-- Video -->
<video controls width="640">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  Trình duyệt không hỗ trợ video.
</video>

<!-- Audio -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  Trình duyệt không hỗ trợ audio.
</audio>

<!-- iframe -->
<iframe
  src="https://www.youtube.com/embed/video-id"
  width="560" height="315"
  sandbox="allow-scripts allow-same-origin"
  loading="lazy"
  title="Video title"
></iframe>`}</code>
      </pre>

      <p>
        <strong>Nhận xét:</strong> Tables và media là các thành phần thiết yếu
        của web. Từ góc nhìn testing, bảng cần kiểm tra hiển thị đúng trên các
        kích thước màn hình khác nhau, hình ảnh cần có alt text, và media cần
        có fallback phù hợp. Đây cũng là những điểm thường gặp trong
        accessibility testing.
      </p>
    </>
  ),
};

export const en: DiaryEntry = {
  date: '2026-03-19',
  title: 'System Testing, Regression/Smoke/Sanity Testing and HTML Tables & Media',
  content: (
    <>
      <p>
        Today I continued learning Testing with higher-level testing types:
        System testing, Acceptance testing, and other important testing
        categories. For HTML, I learned how to display data with tables and
        embed media elements.
      </p>

      <h4>Software Testing - Day 4: System &amp; Acceptance Testing</h4>

      <h4>System Testing</h4>
      <p>
        Tests the entire integrated system to ensure the software works
        correctly according to the Software Requirements Specification (SRS).
      </p>
      <ul>
        <li>End-to-end testing, from input to final output.</li>
        <li>Performed in an environment as close to production as possible.</li>
        <li>Includes both functional and non-functional testing.</li>
        <li>Usually performed by QA team/Testers, not developers.</li>
        <li>
          Example: Test the entire online shopping flow from login → product
          selection → payment → order confirmation.
        </li>
      </ul>

      <h4>Acceptance Testing</h4>
      <p>
        Verifies whether the system meets business requirements and is ready to
        be delivered to users. This is the final testing phase before release.
      </p>
      <ul>
        <li>
          <strong>UAT (User Acceptance Testing)</strong> - Performed by end
          users or customer representatives. Checks if the software solves
          their actual problems.
        </li>
        <li>
          <strong>BAT (Business Acceptance Testing)</strong> - Stakeholders
          verify the software meets business objectives.
        </li>
        <li>
          <strong>Alpha Testing</strong> - Internal testing within the
          development organization.
        </li>
        <li>
          <strong>Beta Testing</strong> - Released to a group of real users to
          collect feedback before official release.
        </li>
      </ul>

      <h4>Regression, Smoke &amp; Sanity Testing</h4>
      <ul>
        <li>
          <strong>Regression Testing</strong> - Re-runs previously passed test
          cases after code changes (bug fixes, new features) to ensure nothing
          is broken. Very important in Agile since code changes continuously.
          Usually automated.
        </li>
        <li>
          <strong>Smoke Testing</strong> - Quick check of the main
          functionalities after each new build. Purpose: confirm the build is
          stable enough for detailed testing. Also called &quot;Build
          Verification Testing&quot;. Example: Does the app start? Does login
          work? Does the homepage load?
        </li>
        <li>
          <strong>Sanity Testing</strong> - Quick check of a specific part after
          a bug fix or minor change. Unlike Smoke Testing, Sanity focuses on the
          changed area while Smoke checks overall. Example: fixed a payment bug
          → only retest the payment flow.
        </li>
      </ul>

      <h4>Smoke vs Sanity vs Regression Comparison</h4>
      <pre>
        <code>{`| Criteria      | Smoke Testing     | Sanity Testing     | Regression Testing  |
|---------------|-------------------|--------------------|---------------------|
| Scope         | Broad (overall)   | Narrow (specific)  | Comprehensive       |
| When          | After new build   | After fix/change   | After any change    |
| Purpose       | Build stable?     | Fix correct?       | Nothing broken?     |
| Duration      | Very quick        | Quick              | Time-consuming      |
| Automation    | Possible          | Usually manual     | Should automate     |`}</code>
      </pre>

      <p>
        <strong>Reflection:</strong> Each testing type has its own role in the
        software quality assurance process. Smoke testing is like a quick
        &quot;health check&quot;, Sanity testing checks the recently changed
        part, and Regression testing ensures everything still works after
        changes.
      </p>

      <h4>HTML - Tables &amp; Media</h4>
      <p>
        Today&apos;s goal was to display structured data with tables and embed
        media such as images, video, and audio.
      </p>
      <ul>
        <li>
          <strong>table, thead, tbody, tr, td</strong> -{' '}
          <code>&lt;table&gt;</code> creates a table, <code>&lt;thead&gt;</code>{' '}
          contains header rows, <code>&lt;tbody&gt;</code> contains data,{' '}
          <code>&lt;tr&gt;</code> is each row, <code>&lt;th&gt;</code> for
          header cells, <code>&lt;td&gt;</code> for data cells. Use{' '}
          <code>colspan</code> and <code>rowspan</code> to merge cells.
        </li>
        <li>
          <strong>img with alt text</strong> - <code>&lt;img&gt;</code> embeds
          images, <code>alt</code> attribute describes the image (required for
          accessibility). If the image is decorative, use{' '}
          <code>alt=&quot;&quot;</code>. Add <code>width</code> and{' '}
          <code>height</code> to prevent layout shift.
        </li>
        <li>
          <strong>video &amp; audio</strong> - <code>&lt;video&gt;</code> embeds
          video with <code>controls</code> for play/pause buttons,{' '}
          <code>&lt;audio&gt;</code> for sound. Both support multiple sources
          via <code>&lt;source&gt;</code> tag and fallback text for unsupported
          browsers.
        </li>
        <li>
          <strong>iframe basics</strong> - <code>&lt;iframe&gt;</code> embeds
          content from other websites (YouTube, Google Maps). Security note: use{' '}
          <code>sandbox</code> attribute to limit permissions,{' '}
          <code>loading=&quot;lazy&quot;</code> to optimize performance.
        </li>
        <li>
          <strong>Responsive images with srcset</strong> -{' '}
          <code>srcset</code> lets the browser choose the appropriate image for
          the screen size. Combined with <code>sizes</code> to specify display
          size. Saves bandwidth on small devices and displays sharp images on
          Retina screens.
        </li>
      </ul>

      <h4>Example - Data Table and Media:</h4>
      <pre>
        <code>{`<!-- Table -->
<table>
  <thead>
    <tr>
      <th>Testing Type</th>
      <th>Scope</th>
      <th>Performed By</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Unit</td>
      <td>Function/Method</td>
      <td>Developer</td>
    </tr>
    <tr>
      <td>System</td>
      <td>Entire System</td>
      <td>QA Team</td>
    </tr>
  </tbody>
</table>

<!-- Image with srcset -->
<img
  src="photo-800.jpg"
  srcset="photo-400.jpg 400w, photo-800.jpg 800w, photo-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px, 800px"
  alt="Image description"
  width="800" height="600"
/>

<!-- Video -->
<video controls width="640">
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  Your browser does not support video.
</video>

<!-- Audio -->
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  Your browser does not support audio.
</audio>

<!-- iframe -->
<iframe
  src="https://www.youtube.com/embed/video-id"
  width="560" height="315"
  sandbox="allow-scripts allow-same-origin"
  loading="lazy"
  title="Video title"
></iframe>`}</code>
      </pre>

      <p>
        <strong>Reflection:</strong> Tables and media are essential web
        components. From a testing perspective, tables need to display correctly
        across different screen sizes, images need alt text, and media needs
        proper fallbacks. These are also common points in accessibility testing.
      </p>
    </>
  ),
};
