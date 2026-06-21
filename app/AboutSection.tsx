import Image from "next/image";
import Reveal from "./Reveal";
import BookButton from "./BookButton";

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <Reveal>
          <p className="section-eyebrow">About</p>
          <h2 className="section-title">Meet the Team</h2>
        </Reveal>

        <Reveal className="about-grid">
          <div className="about-photo">
            <Image
              src="/dr-jindal.png"
              alt="Dr. Sumeet Jindal, MD, MBA"
              width={1100}
              height={1568}
              className="about-img"
            />
          </div>
          <div className="about-bio">
            <h3 className="doctor-name">Dr. Sumeet Jindal</h3>
            <p>
              <strong>Sumeet Jindal, MD, MBA</strong> is a board-certified
              ophthalmologist with advanced fellowship training in oculofacial
              cosmetic surgery. His expertise in eye microsurgery and cosmetic and
              reconstructive eyelid and facial procedures allows him to perform
              some of the most advanced and refined techniques in modern eyelid
              and facial plastic surgery.
            </p>
            <p>
              Dr. Jindal specializes in endoscopic facial and brow lifting using
              tiny, well-hidden incisions, enabling natural rejuvenation of the
              upper and midface with minimal scarring and downtime. He is also
              highly sought after for complex revision cases, including eyelid
              retraction and correction of prior unsuccessful or &ldquo;botched&rdquo;
              surgeries.
            </p>
            <p>
              Dr. Jindal was accepted into medical school directly out of high
              school through the Early Assurance Program at East Carolina
              University. He completed his ophthalmology residency in Richmond,
              Virginia, where he performed a record number of surgical cases,
              gaining extensive operative experience early in his career. He then
              further refined his skills through advanced fellowship training at a
              large, multi-location private practice in Florida before returning
              to Raleigh, North Carolina, where he now practices.
            </p>
            <div className="about-actions">
              <BookButton className="btn btn-primary">
                Book a Consultation
              </BookButton>
              <a className="btn btn-secondary" href="#contact">
                Contact Us
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="members">
          <p className="members-title">Member of</p>
          <ul className="members-list">
            <li>American Board of Facial Cosmetic Surgery</li>
            <li>The American Board of Laser Surgery</li>
            <li>American Academy of Cosmetic Surgery</li>
            <li>American Board of Ophthalmology</li>
            <li>Koniver Wellness</li>
          </ul>
        </Reveal>

        <Reveal className="about-grid reverse">
          <div className="about-photo">
            <Image
              src="/dr-prabakaran.png"
              alt="Dr. Samantha Prabakaran, MD"
              width={415}
              height={493}
              className="about-img"
            />
          </div>
          <div className="about-bio">
            <h3 className="doctor-name">Dr. Samantha Prabakaran</h3>
            <p>
              <strong>Samantha Prabakaran, MD</strong> is a board-certified
              ophthalmologist with specialized training in oculofacial cosmetic
              surgery. Her practice focuses on advanced surgical techniques for
              upper blepharoplasty, ptosis repair, cosmetic lower blepharoplasty,
              eye bag removal, brow lifting, and reconstructive eyelid surgery.
            </p>
            <p>
              Dr. Prabakaran completed her ophthalmology residency at Virginia
              Commonwealth University, where she trained in a high-volume surgical
              program and developed a strong foundation in complex eyelid and
              ophthalmic procedures. She then completed advanced fellowship
              training at New Century Ophthalmology and JIYA Facial Cosmetic
              Surgery, where she further refined her expertise in both cosmetic
              and functional oculofacial surgery.
            </p>
            <div className="about-actions">
              <BookButton className="btn btn-primary">
                Book a Consultation
              </BookButton>
              <a className="btn btn-secondary" href="#contact">
                Contact Us
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal className="members">
          <p className="members-title">Member of</p>
          <ul className="members-list">
            <li>American Board of Ophthalmology</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
