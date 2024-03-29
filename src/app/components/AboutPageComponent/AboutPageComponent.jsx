import Image from "next/image";
import styles from "./AboutPageComponent.module.css";
import HeroPage from "../Nav/Nav";
import Button from "../Button/Button";
import Highlight from "../Highlight/Highlight";
import { Container } from "../Container/Container";
import Footer from "../Footer/Footer";
export default function AboutPage() {
  return (
    <main>
      {" "}
      <div className={styles.AboutPageSection}>
        {" "}
        <HeroPage /> {/* /////////////ABOUT SECTION///////////// */}{" "}
        <div className={styles.aboutSection}>
          {" "}
          <div className={styles.aboutSectionHeader}>
            {" "}
            <div className={styles.aboutSectionContainer}>
              {" "}
              <div className={styles.aboutSectionHeaderTitle}>
                {" "}
                <h2>About Us</h2>{" "}
              </div>{" "}
              <div className={styles.aboutSectionHeaderText}>
                {" "}
                <p>
                  {" "}
                  Eniye Omozusi Foundation emerged from a shared vision among a
                  group of passionate individuals who sought to make a tangible
                  impact on the lives of those facing adversity. In [Year], a
                  simple idea evolved into a committed endeavor to create
                  positive change. Fueled by a desire to address the root causes
                  of poverty and inequality, our founders embarked on a journey
                  to establish an organization that would be a beacon of hope.{" "}
                </p>{" "}
                <p>
                  {" "}
                  What began as a small initiative quickly gained momentum as
                  like-minded individuals joined forces, sharing a common belief
                  in the transformative power of compassion and collective
                  action. Inspired by the resilience of those overcoming
                  challenges, EOF was born, founded on the principle that even
                  modest efforts can spark profound change. Today, we continue
                  to grow, adapt, and innovate, guided by the enduring spirit
                  that started it all—a determination to build a better, more
                  equitable world for all.{" "}
                </p>{" "}
              </div>{" "}
              <Button>Learn more</Button>{" "}
            </div>{" "}
          </div>{" "}
          {/* //////////VALUE///////// */}{" "}
          <div className={styles.valueSection}>
            {" "}
            <div className={styles.valueTitleSection}>
              {" "}
              <h4>Our Values</h4>{" "}
            </div>{" "}
            <div className={styles.valueDetailsSection}>
              {" "}
              <div className={styles.valueDetailSection}>
                {" "}
                <div className={styles.valueDetailHeaderSection}>
                  {" "}
                  <h4>Empathy</h4>{" "}
                </div>{" "}
                <div className={styles.valueDetailTextSection}>
                  {" "}
                  <p>
                    {" "}
                    We approach every individual with genuine understanding,
                    recognizing the inherent dignity and potential in every
                    human being.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className={styles.valueDetailSection}>
                {" "}
                <div className={styles.valueDetailHeaderSection}>
                  {" "}
                  <h4>Inclusivity</h4>{" "}
                </div>{" "}
                <div className={styles.valueDetailTextSection}>
                  {" "}
                  <p>
                    {" "}
                    We champion equal opportunities for all, irrespective of
                    socio-economic background, gender, or circumstances.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
              <div className={styles.valueDetailSection}>
                {" "}
                <div className={styles.valueDetailHeaderSection}>
                  {" "}
                  <h4>Sustainability</h4>{" "}
                </div>{" "}
                <div className={styles.valueDetailTextSection}>
                  {" "}
                  <p>
                    {" "}
                    Our initiatives are designed to create long-lasting,
                    sustainable impact, ensuring that positive change endures
                    for generations.{" "}
                  </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className={styles.missionSection}>
            {" "}
            <div className={styles.missionHeaderSection}>
              {" "}
              <h2>Our Mission</h2>{" "}
            </div>{" "}
            <div className={styles.missionDetailsSection}>
              {" "}
              <p>
                {" "}
                At Eniye Omozusi Foundation, our mission is deeply rooted in a
                profound commitment to fostering positive transformation in the
                lives of those facing adversity. Established in [Year], our
                journey is guided by the unwavering belief that every
                individual, regardless of their circumstances, deserves the
                opportunity to lead a fulfilling life.{" "}
              </p>{" "}
              <p>
                {" "}
                At EOF, we are driven by the unwavering belief that every
                individual, regardless of their circumstances, deserves the
                opportunity to lead a fulfilling life. Through a comprehensive
                approach, we provide financial assistance, scholarships,
                mentorship, and skill development, aiming not just for immediate
                relief but to build a foundation for sustained success. At the
                heart of our mission is the commitment to instill hope, inspire
                change, and empower lives for generations to come.{" "}
              </p>{" "}
            </div>{" "}
          </div>{" "}
          {/* ///////////ABOUT CEO////////// */}{" "}
          <div className={styles.aboutCeoSection}>
            {" "}
            <div className={styles.aboutCeoSectionText}>
              {" "}
              <div className={styles.aboutCeoHeaderSection}>
                {" "}
                <h2>About Our CEO</h2>{" "}
              </div>{" "}
              <div className={styles.aboutCeoDetailSection}>
                {" "}
                <p>
                  {" "}
                  Meet Mary Eniye Omozusi, the visionary leader at the helm of
                  Eniye Omozusi Foundation. With a passion for social impact and
                  a wealth of experience in [relevant field or industry],
                  Omozusi brings a dynamic and forward-thinking approach to our
                  foundation.{" "}
                </p>{" "}
                <p>
                  {" "}
                  Omozusi&apos;s journey with EOF began [mention the starting
                  year] when they joined as [position]. Over the years, their
                  steadfast dedication and innovative strategies played a
                  pivotal role in steering the organization toward its mission
                  of empowering lives and creating lasting change.{" "}
                </p>{" "}
                Guided by a deep sense of empathy and a commitment to
                transparency, Omozusi&apos;s ensures that EOF operates with the
                highest standards of integrity. Their leadership philosophy
                revolves around inclusivity, collaboration, and the belief that
                collective efforts can lead to profound societal transformation.{" "}
                <p>
                  {" "}
                  Under Omozusi&apos;s guidance, EOF has expanded its reach and
                  impact, implementing strategic initiatives that address the
                  complex challenges faced by the less fortunate. Omozusi&apos;s
                  envisions a future where EOF continues to be a beacon of hope,
                  inspiring others to join the journey toward a more equitable
                  world.{" "}
                </p>{" "}
                <p>
                  {" "}
                  With a dedication to the core values of EOF, Omozusi&apos;s
                  leads by example, embodying the principles of compassion,
                  resilience, and a steadfast commitment to making a positive
                  impact. As we forge ahead, guided by Omozusi&apos;s visionary
                  leadership, EOF remains committed to empowering lives and
                  creating hope under their capable guidance.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className={styles.aboutCeoSectionImg}>
              {" "}
              <img src="images/Ceo.png" alt="" />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        {/* ///////ABOUTPAGE END/////// */}{" "}
      </div>{" "}
      <Highlight />
      <Footer />
    </main>
  );
}
