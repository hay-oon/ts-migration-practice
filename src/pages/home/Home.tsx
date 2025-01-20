import { Link } from "react-router-dom";
import Header from "../../components/layout/header/Header";
import Footer from "../../components/layout/footer/Footer";
import "./home.css";
import feature1Image from "../../assets/images/home/feature1-image.png";
import feature2Image from "../../assets/images/home/feature2-image.png";
import feature3Image from "../../assets/images/home/feature3-image.png";
import heroImage from "../../assets/images/home/hero-image.png";
import bottomBannerImage from "../../assets/images/home/bottom-banner-image.png";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <section className="landing">
        <div className="content">
          <div className="intro">
            <h1>
              일상의 모든 물건을
              <br />
              거래해 보세요
            </h1>
            <Link to="/items" className="button">
              구경하러가기
            </Link>
          </div>
          <img id="img-landing" src={heroImage} alt="heroImage" />
        </div>
      </section>

      <section className="info hot-item">
        <div className="card">
          <img src={feature1Image} alt="feature1Image" />
          <div className="card-content">
            <div className="badge">Hot item</div>
            <h1>
              인기 상품을
              <br />
              확인해 보세요
            </h1>
            <p>
              가장 HOT한 중고거래 물품을
              <br />
              판다 마켓에서 확인해 보세요
            </p>
          </div>
        </div>
      </section>

      <section className="info search">
        <div className="card">
          <img src={feature2Image} alt="feature2Image" />
          <div className="card-content">
            <div className="badge">Search</div>
            <h1>
              구매를 원하는
              <br />
              상품을 검색하세요
            </h1>
            <p>
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>
        </div>
      </section>

      <section className="info register">
        <div className="card">
          <img src={feature3Image} alt="feature3Image" />
          <div className="card-content">
            <div className="badge">Register</div>
            <h1>
              판매를 원하는
              <br />
              상품을 등록하세요
            </h1>
            <p>
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </section>

      <section className="banner">
        <div className="content">
          <h1>
            믿을 수 있는
            <br />
            판다마켓 중고 거래
          </h1>
          <img
            id="img-banner"
            src={bottomBannerImage}
            alt="bottomBannerImage"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
