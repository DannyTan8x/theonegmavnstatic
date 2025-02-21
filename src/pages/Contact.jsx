const Contact = () => {
  return (
    <section id="contactus">
      <div className="container contactus">
        <div className="row flex-column flex-md-row pt-5">
          <div className="col">
            <h2 className="responsive-font fs-1">Contact Us</h2>
            <ul className="fontGold">
              <li>
                <i className="material-icons">location_on</i> :
                <p>
                  V3-37 Vinhomes Grand Park, 512 Nguyễn Xiển, Phường Long Bình,
                  Thành Phố Thủ Đức
                </p>
              </li>
              <li>
                <i className="material-icons">phone</i> :<p>0369-614-293</p>
              </li>
              <li>
                <i className="material-icons">email</i> :
                <p>sofia.trang@theone-gma.vn / service@theone-gma.vn</p>
              </li>
              <li>
                <span>Zalo:</span> :
                <img src="assets/Zalo.png" alt="Zalo" />
              </li>
              <li>
                <span>Line:</span> :
                <img src="assets/Line.jpg" alt="Line" />
              </li>
              <li>
                <span>Wechat:</span> :
                <img src="assets/Wechat.png" alt="Wechat" />
              </li>
            </ul>

            {/* <h2 className="responsive-font ">
          Follow us online
        </h2>
        <p>www.theone-gma.vn</p> */}
          </div>
          <div className="col atio ratio-4x3 ">
            <a
              href="https://maps.app.goo.gl/KdrM4bfd48fNoKPL7"
              className="map"
              target="_blank"
            >
              <img src="assets/map.png" alt="map" />
            </a>
            {/* <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d244.91599516871543!2d106.84432601678863!3d10.837621610068728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317521b70140f657%3A0xec5bf58f0a4b507e!2sMinh%20An%20Homes!5e0!3m2!1szh-TW!2stw!4v1737343810309!5m2!1szh-TW!2stw"
          allowfullscreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
