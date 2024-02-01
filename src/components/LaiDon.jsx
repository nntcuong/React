import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import '../css/style.css';

const LaiDon = (props) => {
  return (
    <div>

      <div className="recentCustomers2">
        <div >
         <p className="cardHeaderText"> Thông tin khách hàng</p>
        </div>
        <div className="rowFlex">
        <div className="marginLeft">
          <p className="margin">Họ và tên</p>
          <input className="input" />
        </div>
        <div className="marginLeft">
          <p className="margin">Giới tính</p>
          <select className="inputSelect" id="genderSelect">
            <option value="nam">Nam</option>
            <option value="nu">Nữ</option>
          </select>
        </div>
        </div>
      </div>

      {/* ================ Order Details List ================= */}
      <div className="details">
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>I. Tính kỳ hạn</h2>
            <a href="#" className="btn">
              Clear
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
        <div className="recentOrders">
          <div className="cardHeader">
            <h2>II. Tính tổng</h2>
            <a href="#" className="btn">
              Clear
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

        <div className="recentOrders">
          <div className="cardHeader">
            <h2>III. Tổng tiền từng kỳ hạn</h2>
            <a href="#" className="btn">
              Clear
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

        <div className="recentOrders">
          <div className="cardHeader">
            <h2>IV. Tính gốc</h2>
            <a href="#" className="btn">
              Clear
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
      </div>
    </div>
  );
};

export default LaiDon;
