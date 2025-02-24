export default function Footer() {
  return (
    <footer className="footer py-5">
      <div className="container text-white">
        <div className="d-flex justify-content-between">
          <h4>CÔNG TY TNHH THE ONE TESTING TECHNOLOGY VIỆT NAM</h4>
          <div className="socialmedia fs-1 d-flex justify-content-around">
            <i
              className="bi bi-facebook fs-1 mx-2 text-white"
              aria-hidden="true"
            ></i>
            <i
              className="bi bi-linkedin fs-1 mx-2 text-white"
              aria-hidden="true"
            ></i>
          </div>
        </div>
        <ul>
          <li>
            <strong>MSDN :</strong> 0318449051
          </li>
          <li>
            <strong>Email :</strong> service@@theone-gma.vn
          </li>
          <li>
            <strong>Head Office :</strong>V3-37 Vinhomes Grand Park, 512 Nguyễn
            Xiển, Phường Long Bình, Thành Phố Thủ Đức{" "}
          </li>
          <li>
            <strong>Hotline :</strong>0369-614-293{" "}
          </li>
        </ul>
      </div>
    </footer>
  );
}
