import { DiaryEntry } from './types';

export const vi: DiaryEntry = {
  date: '2026-03-18',
  title: 'Functional vs Non-functional Testing và HTML Forms',
  content: (
    <>
      <p>
        Hôm nay mình học về phân loại testing: Functional vs Non-functional
        testing, đồng thời tìm hiểu Unit testing và Integration testing. Về
        HTML, mình học cách xây dựng form tương tác với các loại input khác
        nhau.
      </p>

      <h4>Software Testing - Ngày 3: Functional vs Non-functional Testing</h4>

      <h4>Functional Testing (Kiểm thử chức năng)</h4>
      <p>
        Kiểm tra xem phần mềm có hoạt động đúng theo yêu cầu không. Tập trung
        vào <strong>what</strong> - hệ thống làm gì.
      </p>
      <ul>
        <li>
          <strong>Unit Testing (Kiểm thử đơn vị)</strong> - Kiểm tra từng đơn vị
          nhỏ nhất của code (function, method) một cách độc lập. Ví dụ: kiểm tra
          hàm tính tổng có trả về kết quả đúng không. Thường do developer viết,
          chạy nhanh và phát hiện lỗi sớm nhất.
        </li>
        <li>
          <strong>Integration Testing (Kiểm thử tích hợp)</strong> - Kiểm tra sự
          tương tác giữa các module/component khi kết hợp với nhau. Ví dụ: kiểm
          tra API gọi đến database và trả về dữ liệu đúng. Phát hiện lỗi ở giao
          tiếp giữa các thành phần.
        </li>
        <li>
          <strong>System Testing</strong> - Kiểm tra toàn bộ hệ thống hoàn
          chỉnh.
        </li>
        <li>
          <strong>Acceptance Testing</strong> - Kiểm tra hệ thống có đáp ứng yêu
          cầu của người dùng không.
        </li>
      </ul>

      <h4>Non-functional Testing (Kiểm thử phi chức năng)</h4>
      <p>
        Kiểm tra các thuộc tính không liên quan đến chức năng. Tập trung vào{' '}
        <strong>how</strong> - hệ thống hoạt động như thế nào.
      </p>
      <ul>
        <li>
          <strong>Performance Testing</strong> - Kiểm tra tốc độ, thời gian phản
          hồi, throughput của hệ thống.
        </li>
        <li>
          <strong>Security Testing</strong> - Kiểm tra khả năng bảo mật, phát
          hiện lỗ hổng.
        </li>
        <li>
          <strong>Usability Testing</strong> - Kiểm tra trải nghiệm người dùng,
          giao diện có dễ sử dụng không.
        </li>
        <li>
          <strong>Compatibility Testing</strong> - Kiểm tra phần mềm hoạt động
          trên các trình duyệt, thiết bị, hệ điều hành khác nhau.
        </li>
      </ul>

      <h4>So sánh Unit Testing vs Integration Testing</h4>
      <pre>
        <code>{`| Tiêu chí         | Unit Testing          | Integration Testing       |
|------------------|-----------------------|---------------------------|
| Phạm vi          | Một function/method   | Nhiều module kết hợp      |
| Tốc độ           | Rất nhanh             | Chậm hơn                  |
| Độ phức tạp      | Đơn giản              | Phức tạp hơn              |
| Ai thực hiện     | Developer             | Developer / Tester        |
| Mục đích         | Đảm bảo logic đúng    | Đảm bảo giao tiếp đúng    |`}</code>
      </pre>

      <p>
        <strong>Nhận xét:</strong> Hiểu rõ sự khác biệt giữa Functional và
        Non-functional testing giúp mình biết cần kiểm tra những gì khi test một
        phần mềm. Unit testing và Integration testing là hai cấp độ quan trọng
        nhất mà mình cần nắm vững.
      </p>

      <h4>HTML - Forms (Biểu mẫu)</h4>
      <p>
        Mục tiêu hôm nay là xây dựng form tương tác với các loại input khác nhau
        và hiểu cơ bản về form submission.
      </p>
      <ul>
        <li>
          <strong>form, label, input</strong> - <code>&lt;form&gt;</code> bao
          bọc toàn bộ biểu mẫu, <code>&lt;label&gt;</code> mô tả cho input (quan
          trọng cho accessibility), <code>&lt;input&gt;</code> là phần tử nhập
          liệu chính. Thuộc tính <code>for</code> của label phải khớp với{' '}
          <code>id</code> của input.
        </li>
        <li>
          <strong>Text, email, password, number</strong> - Các type cơ bản của{' '}
          <code>&lt;input&gt;</code>. <code>type=&quot;email&quot;</code> tự
          động validate định dạng email, <code>type=&quot;password&quot;</code>{' '}
          ẩn ký tự nhập, <code>type=&quot;number&quot;</code> chỉ cho phép nhập
          số.
        </li>
        <li>
          <strong>Radio, checkbox, select</strong> -{' '}
          <code>type=&quot;radio&quot;</code> cho chọn một trong nhiều tùy chọn
          (cùng name), <code>type=&quot;checkbox&quot;</code> cho chọn nhiều,{' '}
          <code>&lt;select&gt;</code> tạo dropdown menu với các{' '}
          <code>&lt;option&gt;</code>.
        </li>
        <li>
          <strong>Textarea &amp; button</strong> - <code>&lt;textarea&gt;</code>{' '}
          cho nhập văn bản dài nhiều dòng, <code>&lt;button&gt;</code> có thể là{' '}
          <code>type=&quot;submit&quot;</code>,{' '}
          <code>type=&quot;reset&quot;</code>, hoặc{' '}
          <code>type=&quot;button&quot;</code>.
        </li>
        <li>
          <strong>Form validation attributes</strong> - <code>required</code>{' '}
          bắt buộc nhập, <code>minlength</code> / <code>maxlength</code> giới
          hạn độ dài, <code>min</code> / <code>max</code> giới hạn giá trị số,{' '}
          <code>pattern</code> kiểm tra theo regex. Đây là validation phía
          client, giúp UX tốt hơn nhưng không thay thế server-side validation.
        </li>
      </ul>

      <h4>Ví dụ - Form đăng ký:</h4>
      <pre>
        <code>{`<form action="/register" method="POST">
  <label for="name">Họ tên:</label>
  <input type="text" id="name" name="name" required minlength="2" />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="password">Mật khẩu:</label>
  <input type="password" id="password" name="password"
         required minlength="8" />

  <label>Giới tính:</label>
  <input type="radio" name="gender" value="male" id="male" />
  <label for="male">Nam</label>
  <input type="radio" name="gender" value="female" id="female" />
  <label for="female">Nữ</label>

  <label for="role">Vai trò:</label>
  <select id="role" name="role">
    <option value="tester">Tester</option>
    <option value="developer">Developer</option>
    <option value="designer">Designer</option>
  </select>

  <label for="bio">Giới thiệu:</label>
  <textarea id="bio" name="bio" rows="4"></textarea>

  <button type="submit">Đăng ký</button>
</form>`}</code>
      </pre>

      <p>
        <strong>Nhận xét:</strong> HTML forms là nền tảng của mọi ứng dụng web.
        Từ góc nhìn testing, form là nơi cần kiểm tra kỹ nhất vì đây là nơi
        người dùng tương tác trực tiếp — cần test các trường hợp nhập đúng, nhập
        sai, bỏ trống, và các edge case.
      </p>
    </>
  ),
};

export const en: DiaryEntry = {
  date: '2026-03-18',
  title: 'Functional vs Non-functional Testing and HTML Forms',
  content: (
    <>
      <p>
        Today I learned about testing classification: Functional vs
        Non-functional testing, along with Unit testing and Integration testing.
        For HTML, I learned how to build interactive forms with various input
        types.
      </p>

      <h4>Software Testing - Day 3: Functional vs Non-functional Testing</h4>

      <h4>Functional Testing</h4>
      <p>
        Verifies whether the software works correctly according to requirements.
        Focuses on <strong>what</strong> the system does.
      </p>
      <ul>
        <li>
          <strong>Unit Testing</strong> - Tests the smallest units of code
          (functions, methods) in isolation. For example: checking if an add
          function returns the correct result. Usually written by developers,
          runs fast, and catches bugs earliest.
        </li>
        <li>
          <strong>Integration Testing</strong> - Tests interactions between
          modules/components when combined. For example: checking if an API
          calls the database and returns correct data. Catches bugs in
          communication between components.
        </li>
        <li>
          <strong>System Testing</strong> - Tests the complete system as a
          whole.
        </li>
        <li>
          <strong>Acceptance Testing</strong> - Verifies whether the system
          meets user requirements.
        </li>
      </ul>

      <h4>Non-functional Testing</h4>
      <p>
        Tests attributes not related to functionality. Focuses on{' '}
        <strong>how</strong> the system performs.
      </p>
      <ul>
        <li>
          <strong>Performance Testing</strong> - Tests speed, response time, and
          throughput of the system.
        </li>
        <li>
          <strong>Security Testing</strong> - Tests security capabilities and
          detects vulnerabilities.
        </li>
        <li>
          <strong>Usability Testing</strong> - Tests user experience and whether
          the interface is easy to use.
        </li>
        <li>
          <strong>Compatibility Testing</strong> - Tests software on different
          browsers, devices, and operating systems.
        </li>
      </ul>

      <h4>Unit Testing vs Integration Testing Comparison</h4>
      <pre>
        <code>{`| Criteria       | Unit Testing          | Integration Testing       |
|----------------|-----------------------|---------------------------|
| Scope          | Single function/method| Multiple modules combined |
| Speed          | Very fast             | Slower                    |
| Complexity     | Simple                | More complex              |
| Who performs   | Developer             | Developer / Tester        |
| Purpose        | Ensure correct logic  | Ensure correct integration|`}</code>
      </pre>

      <p>
        <strong>Reflection:</strong> Understanding the difference between
        Functional and Non-functional testing helps me know what to check when
        testing software. Unit testing and Integration testing are the two most
        important levels that I need to master.
      </p>

      <h4>HTML - Forms</h4>
      <p>
        Today&apos;s goal was to build interactive forms using various input
        types and understand form submission basics.
      </p>
      <ul>
        <li>
          <strong>form, label, input</strong> - <code>&lt;form&gt;</code> wraps
          the entire form, <code>&lt;label&gt;</code> describes the input
          (important for accessibility), <code>&lt;input&gt;</code> is the main
          input element. The <code>for</code> attribute of label must match the{' '}
          <code>id</code> of the input.
        </li>
        <li>
          <strong>Text, email, password, number</strong> - Basic{' '}
          <code>&lt;input&gt;</code> types. <code>type=&quot;email&quot;</code>{' '}
          automatically validates email format,{' '}
          <code>type=&quot;password&quot;</code> hides typed characters,{' '}
          <code>type=&quot;number&quot;</code> only allows numeric input.
        </li>
        <li>
          <strong>Radio, checkbox, select</strong> -{' '}
          <code>type=&quot;radio&quot;</code> for selecting one of many options
          (same name), <code>type=&quot;checkbox&quot;</code> for multiple
          selections, <code>&lt;select&gt;</code> creates a dropdown menu with{' '}
          <code>&lt;option&gt;</code> elements.
        </li>
        <li>
          <strong>Textarea &amp; button</strong> - <code>&lt;textarea&gt;</code>{' '}
          for multi-line text input, <code>&lt;button&gt;</code> can be{' '}
          <code>type=&quot;submit&quot;</code>,{' '}
          <code>type=&quot;reset&quot;</code>, or{' '}
          <code>type=&quot;button&quot;</code>.
        </li>
        <li>
          <strong>Form validation attributes</strong> - <code>required</code>{' '}
          makes input mandatory, <code>minlength</code> / <code>maxlength</code>{' '}
          limits length, <code>min</code> / <code>max</code> limits numeric
          values, <code>pattern</code> validates against regex. This is
          client-side validation that improves UX but does not replace
          server-side validation.
        </li>
      </ul>

      <h4>Example - Registration Form:</h4>
      <pre>
        <code>{`<form action="/register" method="POST">
  <label for="name">Full name:</label>
  <input type="text" id="name" name="name" required minlength="2" />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="password">Password:</label>
  <input type="password" id="password" name="password"
         required minlength="8" />

  <label>Gender:</label>
  <input type="radio" name="gender" value="male" id="male" />
  <label for="male">Male</label>
  <input type="radio" name="gender" value="female" id="female" />
  <label for="female">Female</label>

  <label for="role">Role:</label>
  <select id="role" name="role">
    <option value="tester">Tester</option>
    <option value="developer">Developer</option>
    <option value="designer">Designer</option>
  </select>

  <label for="bio">Bio:</label>
  <textarea id="bio" name="bio" rows="4"></textarea>

  <button type="submit">Register</button>
</form>`}</code>
      </pre>

      <p>
        <strong>Reflection:</strong> HTML forms are the foundation of every web
        application. From a testing perspective, forms need the most thorough
        testing because this is where users interact directly — we need to test
        valid input, invalid input, empty fields, and edge cases.
      </p>
    </>
  ),
};
