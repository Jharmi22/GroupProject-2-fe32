import React from 'react'
import Jharmi from '../../assets/images/Jharmi.png';
import hana from '../../assets/images/hana.png';
import irwan from '../../assets/images/irwan.png';
import "./AboutStyle.css"


const About = () => {
    return (
        <section className="blog">
            <h1 className="headings"></h1>
            <main>
                <article>
                    <div className='about' >
                    <div>
                        <br />
                        <h2>Tentang Kami</h2>
                        <br />
                        <h3 class="my-3" align>Terdapat fitur CoD</h3>
                        <p class="text-muted">Kami mempunyai fitur Cash on Delivery, sehingga pesanan dapat dibayar di tempat</p>
                        <h3 class="my-3">Kemudahan Mendapatkan Obat</h3>
                        <p class="text-muted">Kemudahan dalam mendapatkan obat yang diinginkan dan praktis dapat diakses dimanapun</p>
                        <h3 class="my-3">Pembayaran Mudah</h3>
                        <p class="text-muted">Tidak perlu pusing untuk melakukan pembayaran, kami telah menyediakan berbagai macam metode pembayaran yang tidak akan membuat anda kesulitan</p>
                    </div>
                    </div>
                </article>
            </main>
            <div class="container">
                <div class="text-center">
                <h2 id="tagline" class="section-heading">Pemilik ApoSkill</h2>
                </div>
                <div class="row d-flex justify-content-between">
                <div class="col-lg-2 col-sm-6 mb-4">
                    <div class="team-member">
                    <img src={Jharmi} alt="semantic versioning" width={50} />
                    <h4>Jharmi</h4>
                    <a class="btn btn-dark btn-social mx-2 rounded-circle" href="https://instagram.com/jhrrr22_?igshid=YmMyMTA2M2Y=" target="_blank"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-6 mb-4">
                    <div class="team-member">
                    <img src={hana} alt="semantic versioning" width={50} />
                    <h4>Hana</h4>
                    <a class="btn btn-dark btn-social mx-2 rounded-circle" href="https://instagram.com/hana_fauziahh?igshid=YmMyMTA2M2Y=" target="_blank"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-6 mb-4">
                    <div class="team-member">
                    <img src={irwan} alt="semantic versioning" width={50} />
                    <h4>Irwan</h4>
                    <a class="btn btn-dark btn-social mx-2 rounded-circle" href="https://instagram.com/irwn.syh__?igshid=YmMyMTA2M2Y=" target="_blank"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>

        </div>
      </div>
        </section>
    )
}

export default About
