import React from "react";
import ImgPro from "../assets/images/banner.jpg"

export default function Contact() {
    return (
        <div>
            <section id="contact">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={ImgPro} alt='About'
                            style={{ width: 520  }} />
                        </div>
                        <div className="col-md-6 bg-dark text-white">
                            <h3 className='fs-5 mb-0'>Our Product</h3>
                            <p className="">Terima kasih telah mengunjungi website BPR Maha Bhoga Marga. Jika Anda memiliki pertanyaan tentang produk dan layanan kami, silakan gunakan informasi kontak di bawah ini.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}