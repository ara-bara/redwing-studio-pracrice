import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import styles from "./Header.module.scss";

export default function Header() {
  const { items } = useCart();

  const uniqueCount = items.length;
  const totalQty = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand}>
          <div className={styles.brandMain}>
            REDWING<span className={styles.dot}>.</span>
          </div>
          <div className={styles.brandSub}>STUDIO</div>
        </Link>

        <Link
          to="/cart"
          className={styles.cartLink}
          data-tip={`${uniqueCount} products • ${totalQty} pcs`}
        >
          CART
          {uniqueCount > 0 && (
            <span className={styles.badge}>{uniqueCount}</span>
          )}
        </Link>
      </div>
    </header>
  );
}
