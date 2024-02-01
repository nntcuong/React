import React from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import '../css/style.css';
import  { useState } from 'react';
const LaiDon = (props) => {
  const [initialCapital, setInitialCapital] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [totalCapitalAndInterest, setTotalCapitalAndInterest] = useState('');
  const [numberOfPeriods, setNumberOfPeriods] = useState(null);

  const calculateNumberOfPeriods = () => {
    const initialCapitalValue = parseFloat(initialCapital);
    const interestRateValue = parseFloat(interestRate);
    const totalCapitalAndInterestValue = parseFloat(totalCapitalAndInterest);

    if (!isNaN(initialCapitalValue) && !isNaN(interestRateValue) && !isNaN(totalCapitalAndInterestValue)) {
      const periods = (totalCapitalAndInterestValue - initialCapitalValue) / (initialCapitalValue * (interestRateValue / 100));
      setNumberOfPeriods(periods);
    } else {
      setNumberOfPeriods(null);
    }
  };
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
              <input type="number" value={initialCapital} onChange={(e) => setInitialCapital(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập số % lãi suất</p>
              <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} />
            </div>
            <div className="rowInput">
              <p>Nhập tổng vốn và lãi</p>
              <input type="number" value={totalCapitalAndInterest} onChange={(e) => setTotalCapitalAndInterest(e.target.value)} />
            </div>

          </div>
          <div className="result">
          <div className="resultRow">
          <p>Số kỳ hạn là : </p>
            {numberOfPeriods !== null && (
              <p className="resultNumber">  {numberOfPeriods.toFixed(2)}</p>
            )}
            </div>
           <button onClick={calculateNumberOfPeriods}>Tính</button>
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
