import React from 'react'
import banner from  "./../asset/banner.jpg"
import "./../component/style.css"

function Home() {
    return (
        <div>

            <div div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                <div class="carousel-item active">
                <img src={banner} 
                class="d-block w-100" alt="banner" />
                <div class="carousel-caption d-none d-md-block ">
                    <h1 className="display-1">Welcome to My Site</h1>
                    <p>Some random banner i got from somewhere.</p>
                </div>
                </div>
                </div>
            </div>

            <div className="container">
                <div className="mt-5 pt-5 text-center">
                    <div className="row ">
                        <div className="col-12">
                            <h1 className="display-3 text-secondary">Home Pages</h1>
                         </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
