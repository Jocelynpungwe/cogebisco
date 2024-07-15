import React from 'react'
import styled from 'styled-components'
import aboutUsImage from '../assets/gegobisco/gavel-free.jpg'
import aboutUsImageTwo from '../assets/gegobisco/SITE/3.png'
import aboutUsImageThree from '../assets/gegobisco/SITE/2.png'
import pdfOne from '../assets/gegobisco/ORDONNANCE-86-112.pdf?#zoom=100&scrollbar=1&toolbar=1&navpanes=1'
import pdfTwo from '../assets/gegobisco/ORDONNANCE-loi-de-1986-modifiant-celui-de-1979.pdf?#view=FitH'
import pdfThree from '../assets/gegobisco/ORDONNANC-LOI-N°79-026.pdf?#view=FitH'
import pdfFour from '../assets/gegobisco/organigramme-de-la-COGEBISCO.pdf?#view=FitH'

const AboutUs = () => {
  return (
    <Wrapper id="aboutUs" className="section-center">
      <section>
        <h2>Qui sommes-nous ?</h2>

        <div className="grid-temp">
          <img src={aboutUsImage} alt="judge one and table" />
          <div>
            <article className="service">
              <h4>Création</h4>
              <p>
                La Commission de Gestion des Biens Saisis et Confisqués,
                COGEBISCO en sigle, est un service public de l'Etat congolais
                créé par l'ordonnance-loi n° 79-026 du 26 Septembre 1979
                modifiée par l'ordonnance-loi n° 86-031 du 5 avril 1986.
              </p>
              <p>
                Elle est sous la tutelle du Ministre de la Justice et Garde des
                sceaux.
              </p>
            </article>
            <article className="service">
              <h4>Mission</h4>
              <p className="subtitle">Elle a pour mission:</p>
              <ul>
                <li>
                  Recueillir, garder et gérer tous les biens mobiliers ou
                  immobiliers placés sous la main de la justice : Biens saisis
                  par un officier de la police judiciaire ou un officier du
                  Ministère Public ou dont une juridiction aura ordonné la
                  confiscation.
                </li>
                <li>
                  Déterminer, conformément aux dispositions de l'ordonnance-loi
                  susdite, la destination à donner à ceux de ces biens qui
                  auront été frappés de confiscation ou dont il aura été fait
                  abandon à l'Etat congolais.
                </li>
              </ul>
            </article>
          </div>
        </div>

        <div className="grid-temp">
          <img src={aboutUsImageThree} alt="judge three" />
          <div className="change-order">
            <article className="service">
              <h4>Composition</h4>
              <p>
                La Commission est composée d'un représentant du ministère de la
                Justice qui en est le Secrétaire Général, des représentants des
                ministères de la Défense Nationale, des Finances, de
                l'Environnement ainsi que de la Banque Centrale du Congo.
              </p>
              <p>
                Le Secrétaire Général est un Magistrat du Ministère Public
                revêtu du grade de Premier Avocat Général près la Cour de
                cassation.
              </p>
              <p>
                Elle est représentée en province par les Procureurs de la
                République près les Tribunaux de grande instance.
              </p>
            </article>

            <article className="service">
              <h4>Organisation administrative</h4>
              <p>
                L'organisation administrative de la Commission est prévue par
                l'ordonnance n° 86-112 du 8 avril 1986 relative à l'organisation
                administrative de la COGEBISCO.
              </p>
              <p>
                Un directeur coordonne les activités des services du Secrétariat
                Général de la Commission.
              </p>
              <p>
                Sauf en ce qui concerne la ville de Kinshasa, il est institué au
                sein du secrétariat des Parquets de grande instance une division
                de la COGEBISCO. Le Secrétaire divisionnaire de ces Parquets en
                est de droit Chef de division.
              </p>
            </article>
          </div>
        </div>

        <div className="grid-temp">
          <img src={aboutUsImageTwo} alt="judge two" className="lastImage" />
          <div>
            <article className="service">
              <h4>Textes légaux</h4>
              <ul>
                <li>
                  L'Ordonnance-loi n° 79-026 du 26 septembre 1979 portant
                  création de la Commission de Gestion des Biens Saisis et
                  Confisqués, COGEBISCO en sigle.
                </li>
                <li>
                  Ordonnance-loi n° 86-031 du 5 avril 1986 portant modification
                  de l'Ordonnance-loi n° 79-026 du 26 septembre 1979.
                </li>
                <li>
                  Ordonnance n° 86-112 du 8 avril 1986 relative à l'organisation
                  administrative de la Commission de Gestion des Biens Saisis et
                  Confisqués.
                </li>
              </ul>
            </article>
          </div>
        </div>

        <div className="grid-temp">
          <div className="pdf-docs">
            {/* <div> */}
            <h4 className="grid-h4">
              ORDONNANCE 86-112 DU 8 AVRIL 1986 RELATIVE À L'ORGANISATION
              ADMINISTRATIVE DE LA COMMISSION DE GESTION DES BIENS SAISIS ET
              CONFISQUES
            </h4>
            <embed
              src={pdfOne}
              type="application/pdf"
              width="100%"
              height="400px"
            />
            <a href={pdfOne} className="btn primary-btn">
              télécharger
            </a>
          </div>

          <div className="pdf-docs">
            <h4 className="grid-h4">
              ORDONNANCE-LOI N° 79-026 DU 26 SEPTEMBRE 1979 PORTANT CREATION DE
              LA COMMISSION DE GESTION DES BIENS SAISIS ET CONFISQUES TELLE QUE
              MODIFIEE PAR L'ORDONNANCE-LOI Nº 86-031 DU 5 AVRIL 1986
            </h4>
            <embed
              src={pdfTwo}
              type="application/pdf"
              width="100%"
              height="400px"
            />
            <a href={pdfTwo} className="btn primary-btn">
              télécharger
            </a>

            {/* <object
              data={pdfTwo}
              type="application/pdf"
              width="100%"
              height="500px"
            >
              <p>
                Unable to display PDF file.{' '}
                <a href="/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf">
                  Download
                </a>{' '}
                instead.
              </p>
            </object> */}
          </div>

          <div className="pdf-docs">
            <h4 className="grid-h4">
              ORDONNANCE-LOI 79-026 DU 26 SEPTEMBRE 1979 PORTANT CREATION D'UNE
              COMMISSION DE GESTION DES BIENS SAISIS ET CONFISQUES.
            </h4>
            <embed
              src={pdfThree}
              type="application/pdf"
              width="100%"
              height="400px"
            />
            <a href={pdfThree} className="btn primary-btn">
              télécharger
            </a>

            {/* <object
              data={pdfTwo}
              type="application/pdf"
              width="100%"
              height="500px"
            >
              <p>
                Unable to display PDF file.{' '}
                <a href="/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf">
                  Download
                </a>{' '}
                instead.
              </p>
            </object> */}
          </div>

          <div className="object-one pdf-docs">
            <h4 className="grid-h4">
              ORGANIGRAMME DE LA COMMISSION DE GESTION DES BIENS SAISIS ET
              CONFISQUES.
            </h4>
            <embed
              src={pdfFour}
              type="application/pdf"
              width="100%"
              height="400px"
            />
            <a href={pdfFour} className="btn primary-btn">
              télécharger
            </a>

            {/* <object
              data={pdfTwo}
              type="application/pdf"
              width="100%"
              height="500px"
            >
              <p>
                Unable to display PDF file.{' '}
                <a href="/uploads/media/default/0001/01/540cb75550adf33f281f29132dddd14fded85bfc.pdf">
                  Download
                </a>{' '}
                instead.
              </p>
            </object> */}
          </div>
        </div>
      </section>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 3rem 0;
  text-align: left;
  img {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  }

  .btn {
    display: block;
    width: 150px;
    margin: 20px auto;
  }
  .subtitle {
    font-weight: 700;
    color: var(--clr-grey-2);
  }

  h2 {
    font-size: 20px;
    color: var(--cogebisco-one);
    font-family: 'Khand', sans-serif;
    margin-bottom: 3rem;
  }

  h4 {
    color: black;
    margin-top: 25px;
  }

  p,
  li {
    font-family: 'Khand', sans-serif;
    font-size: 18px;
    color: var(--clr-grey-2);

    text-align: left;
  }

  li {
    margin-left: 1.5rem;
  }

  .service {
    margin-bottom: 3rem;
  }

  embed {
    border: 1px solid var(--cogebisco-one);
  }

  .grid-temp {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-column-gap: 25px;
    margin-top: 25px;
    .object-one {
      margin-top: 20px;
    }
    .grid-h4 {
      height: 145px;
    }
  }

  @media (min-width: 805px) {
    .change-order {
      order: -1;
    }
  }

  @media (min-width: 1020px) {
    .lastImage {
      height: 250px;
    }
  }
`

export default AboutUs
