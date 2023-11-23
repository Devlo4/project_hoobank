import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Trouvez une meilleure offre de carte  <br className="sm:block hidden" /> en quelques étapes simples.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Accédez facilement aux meilleures offres du marché qui correspondent à votre profil. En répondant à quelques questions,
       nous sélectionnons pour vous les cartes de crédit les plus avantageuses.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
