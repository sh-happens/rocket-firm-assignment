import Link from "next/link";

const Navbar = () => (
  <div>
    <ul>
      <li>
        <Link href='/search'>
          <a>Поиск</a>
        </Link>
      </li>
      <li>
        <Link href='/'>
          <a>Избранное</a>
        </Link>
      </li>
      <li>
        <Link href='/history'>
          <a>История Поиска</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
