const TienGuiHangThang =(props)=>{
    return(
        <div>
        <div className="cardBox">
          <div className="card">
            <div>
              <div className="numbers">I</div>
              <div className="cardName">Tính kỳ hạn </div>
            </div>
          </div>
  
          <div className="card">
            <div>
              <div className="numbers">II</div>
              <div className="cardName">Tính tổng </div>
            </div>
          </div>
  
          <div className="card">
            <div>
              <div className="numbers">III</div>
              <div className="cardName">Tổng tiền từng kỳ hạn </div>
            </div>
          </div>
  
          <div className="card">
            <div>
              <div className="numbers">IV</div>
              <div className="cardName">Tính gốc </div>
            </div>
          </div>
        </div>
  
        {/* ================ Order Details List ================= */}
        <div className="details">
          <div className="recentOrders">
            <div className="cardHeader">
              <h2>Thông tin khách hàng</h2>
              <a href="#" className="btn">
                View All
              </a>
            </div>
  
            <div>
              <div className="rowInput">
                <p>Nhập số vốn ban đầu</p>
                <input type="number" />
              </div>
              <div className="rowInput">
                <p>Nhập số % lãi suất</p>
                <input type="number" />
              </div>
              <div className="rowInput">
                <p>Nhập tổng vốn và lãi</p>
                <input type="number" />
              </div>
            </div>
            <div className="result">
              <p>Số kỳ hạn là</p>
              <button>Tính</button>
            </div>
          </div>
  
          {/* ================= New Customers ================ */}
          <div className="recentCustomers2">
            <div className="cardHeader">
              <h2>Thông tin khách hàng</h2>
            </div>
            <p className="margin">Họ và tên</p>
            <input className="input" />
            <p className="margin">Giới tính</p>
            <select className="input" id="genderSelect">
              <option value="nam">Nam</option>
              <option value="nu">Nữ</option>
            </select>
          </div>
        </div>
      </div>
    )
}
export default TienGuiHangThang