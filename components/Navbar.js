import Link from "next/link";
import logoImage from "../images/unsplash.png";
import magnifier from "../images/magnifier.png";
import heart from "../images/heart.png";
import history from "../images/history.png";

const Navbar = () => (
  <div className='navContainer'>
    <Link href='/'>
      <div className='iconContainer'>
        <img className='logoImage' src={logoImage} alt='logo' id='logoImage' />
        <a>ImageStock</a>
      </div>
    </Link>
    <ul>
      <li>
        <Link href='/search'>
          <div className='navbarItems'>
            <img
              className='magnifier'
              src={magnifier}
              alt='magnifier'
              id='magnifier'
            />
            <a>Поиск</a>
          </div>
        </Link>
      </li>
      <li>
        <Link href='/favorites'>
          <div className='navbarItems'>
            <img className='magnifier' src={heart} alt='heart' id='heart' />
            <a>Избранное</a>
          </div>
        </Link>
      </li>
      <li>
        <Link href='/history'>
          <div className='navbarItems'>
            <img className='history' src={history} alt='history' id='history' />
            <a>История Поиска</a>
          </div>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      .navContainer {
        background: #000000;
        display: flex;
        justify-content: space-between;
        padding: 0% 15% 0% 15%;
        font-family: SF UI Display;
      }
      ul {
        display: flex;
      }
      .iconContainer {
        display: flex;
        color: white;
        align-items: center;
      }
      ul li {
        list-style: none;
        display: flex;
        margin: 0px 10px;
        align-items: center;
      }
      a {
        text-decoration: none;
        color: white;
      }
      .navbarItems {
        display: flex;
        align-items: center;
      }
      .logoImage {
        height: 28px;
      }
      .magnifier {
        height: 13px;
        margin: 5px;
      }
      .history {
        height: 17px;
        margin: 5px;
      }
      body {
        margin: 0px;
        padding: 0px;
      }
      @media only screen and (max-width: 600px) {
        .navContainer {
          padding: 0% 5% 0% 5%;
        }
        input {
        }
        a {
          display: none;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
      }
    `}</style>
  </div>
);

export default Navbar;
