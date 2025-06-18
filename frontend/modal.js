const modalHTML = `<section class="modal">
        <div class="modal_overlay"></div>
        <div class="modal_content">
          <div class="modal_header">
            <div class="modal_header-title">Chi tiết</div>
            <div class="modal_header-close">
              <img src="./icons8-close.svg" alt="close icon" width="36px">
            </div>
          </div>
          <div class="modal_body">
            <table id="detailTable">
              <thead>
                <tr>
                  <th>Loại</th>
                  <th>Tên LHP</th>
                  <th>Lớp sinh hoạt</th>
                  <th>Giới hạn</th>
                  <th>SLĐK</th>
                  <th>Lịch học</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Loại 1</td>
                  <td>Tên LHP 1</td>
                  <td>Lớp sinh hoạt 1</td>
                  <td>Giới hạn 1</td>
                  <td>SLĐK 1</td>
                  <td>Lịch học 1</td>
                </tr>
                <tr>
                  <td>Loại 2</td>
                  <td>Tên LHP 2</td>
                  <td>Lớp sinh hoạt 2</td>
                  <td>Giới hạn 2</td>
                  <td>SLĐK 2</td>
                  <td>Lịch học 2</td>
                </tr>
                <tr>
                  <td>Loại 2</td>
                  <td>Tên LHP 2</td>
                  <td>Lớp sinh hoạt 2</td>
                  <td>Giới hạn 2</td>
                  <td>SLĐK 2</td>
                  <td>Lịch học 2</td>
                </tr>
                <tr>
                  <td>Loại 2</td>
                  <td>Tên LHP 2</td>
                  <td>Lớp sinh hoạt 2</td>
                  <td>Giới hạn 2</td>
                  <td>SLĐK 2</td>
                  <td>Lịch học 2</td>
                </tr>
                <tr>
                  <td>Loại 2</td>
                  <td>Tên LHP 2</td>
                  <td>Lớp sinh hoạt 2</td>
                  <td>Giới hạn 2</td>
                  <td>SLĐK 2</td>
                  <td>Lịch học 2</td>
                </tr>
                <tr>
                  <td>Loại 2</td>
                  <td>Tên LHP 2</td>
                  <td>Lớp sinh hoạt 2</td>
                  <td>Giới hạn 2</td>
                  <td>SLĐK 2</td>
                  <td>Lịch học 2</td>
                </tr>
                <tr>
                  <td>Loại 2</td>
                  <td>Tên LHP 2</td>
                  <td>Lớp sinh hoạt 2</td>
                  <td>Giới hạn 2</td>
                  <td>SLĐK 2</td>
                  <td>Lịch học 2</td>
                </tr>
                <tr>
                  <td>Loại 2</td>
                  <td>Tên LHP 2</td>
                  <td>Lớp sinh hoạt 2</td>
                  <td>Giới hạn 2</td>
                  <td>SLĐK 2</td>
                  <td>Lịch học 2</td>
                </tr>
                <tr>
                  <td>Loại 2</td>
                  <td>Tên LHP 2</td>
                  <td>Lớp sinh hoạt 2</td>
                  <td>Giới hạn 2</td>
                  <td>SLĐK 2</td>
                  <td>Lịch học 2</td>
                </tr>
                <tr>
                  <td>Loại 2</td>
                  <td>Tên LHP 2</td>
                  <td>Lớp sinh hoạt 2</td>
                  <td>Giới hạn 2</td>
                  <td>SLĐK 2</td>
                  <td>Lịch học 2</td>
                </tr>
                <tr>
                  <td>Loại 2</td>
                  <td>Tên LHP 2</td>
                  <td>Lớp sinh hoạt 2</td>
                  <td>Giới hạn 2</td>
                  <td>SLĐK 2</td>
                  <td>Lịch học 2</td>
                </tr>
                <tr>
                  <td>Loại 2</td>
                  <td>Tên LHP 2</td>
                  <td>Lớp sinh hoạt 2</td>
                  <td>Giới hạn 2</td>
                  <td>SLĐK 2</td>
                  <td>Lịch học 2</td>
                </tr>
                <tr>
                  <td>Loại 2</td>
                  <td>Tên LHP 2</td>
                  <td>Lớp sinh hoạt 2</td>
                  <td>Giới hạn 2</td>
                  <td>SLĐK 2</td>
                  <td>Lịch học 2</td>
                </tr>
                <tr>
                  <td>Loại 2</td>
                  <td>Tên LHP 2</td>
                  <td>Lớp sinh hoạt 2</td>
                  <td>Giới hạn 2</td>
                  <td>SLĐK 2</td>
                  <td>Lịch học 2</td>
                </tr>
                <tr>
                  <td>Loại 2</td>
                  <td>Tên LHP 2</td>
                  <td>Lớp sinh hoạt 2</td>
                  <td>Giới hạn 2</td>
                  <td>SLĐK 2</td>
                  <td>Lịch học 2</td>
                </tr>
                <tr>
                  <td>Loại 2</td>
                  <td>Tên LHP 2</td>
                  <td>Lớp sinh hoạt 2</td>
                  <td>Giới hạn 2</td>
                  <td>SLĐK 2</td>
                  <td>Lịch học 2</td>
                </tr>
              </tbody>
            </table>

            <script>
              document.querySelectorAll("#detailTable tbody tr").forEach(row => {
                row.addEventListener("click", function() {
                  const cells = this.querySelectorAll("td");
                  const data = {
                    loai: cells[0].textContent,
                    tenLHP: cells[1].textContent,
                    lopSinhHoat: cells[2].textContent,
                    gioiHan: cells[3].textContent,
                    sldk: cells[4].textContent,
                    lichHoc: cells[5].textContent
                  };

                  if (confirm('Bạn có chắc chắn muốn chọn:\n' + JSON.stringify(data, null, 2))) {
                    // Save the data (this is just a placeholder, replace with actual save logic)
                    console.log("Data saved:", data);
                  }
                });
              });
            </script>
          </div>
        </div>
    </section>
`;

const courseTable = document.querySelectorAll("#courseTable tbody tr");

courseTable.forEach((row) =>
  row.addEventListener("click", functionShowModal)
);

function functionShowModal() {
  document.body.insertAdjacentHTML("afterbegin", modalHTML);
}


