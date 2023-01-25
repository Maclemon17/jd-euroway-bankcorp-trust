import axios from 'axios';
import { useState, useEffect } from 'react';


const Faq = () => {
    const [faqs, setFaqs] = useState([]);

    const url = '%PUBLIC_URL%/faq.json'

    useEffect(() => {
        getFaq();
    }, [])


    const getFaq = () => {
        axios.get(url).then((res) => {
            setFaqs(res.data)
            console.log(res.data)
        }).catch(err => console.log(err)) 
    }

    return (
        <section id="faq">
            <div className="container mx-auto">
                <h1 className="faq_heading fw-bold">faq</h1>

                <div className="question m-aut">
                    <div className="row row-cols-1 row-cols-md-2">
                        {
                            faqs.map((faq) => (
                                <div key={faq.id} className="col my-3">
                                    <div className="faq_card shadow">
                                        <div className="card-body">
                                            <h5 className="card-title">{faq.name}</h5>
                                            <p className="card-text">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    {/* <div className="d-flex ">
                        <div className="col-6">
                            <div className="faq_card card">
                                <h6>Question</h6>
                                <p>Lorem, ipsum dolor sit amet  consectetur, adipisicingLorem,
                                    ipsum dolor sit amet  consectetur, adipisicingLorem,
                                    ipsum dolor sit amet  consectetur, adipisicing</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="faq_card">
                                <h6>Question</h6>
                                <p>Lorem, ipsum dolor sit amet  consectetur, adipisicingLorem,
                                    ipsum dolor sit amet  consectetur, adipisicingLorem,
                                    ipsum dolor sit amet  consectetur, adipisicing</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="faq_card">
                                <h6>Question</h6>
                                <p>Lorem, ipsum dolor sit amet  consectetur, adipisicingLorem,
                                    ipsum dolor sit amet  consectetur, adipisicingLorem,
                                    ipsum dolor sit amet  consectetur, adipisicing</p>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="faq_card">
                                <h6>Question</h6>
                                <p>Lorem, ipsum dolor sit amet  consectetur, adipisicingLorem,
                                    ipsum dolor sit amet  consectetur, adipisicingLorem,
                                    ipsum dolor sit amet  consectetur, adipisicing</p>
                            </div>
                        </div>
                    </div> */}
                </div>

            </div>
        </section>
    )
}

export default Faq