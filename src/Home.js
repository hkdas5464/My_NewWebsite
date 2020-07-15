import React, {Component} from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./Home.css"


class DemoCarousel extends Component {
    render() {
        return (
            <div>
            
            <Carousel>

                <div>
                    <img src="https://wallpapershome.com/images/pages/pic_h/14875.jpg" alt="image1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://wallpapershome.com/images/pages/pic_h/17115.jpg" alt="image2" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://wallpapershome.com/images/pages/pic_h/16178.jpg" alt="image3" />
                    <p className="legend">Legend 3</p>
                    
                </div>
                
                            </Carousel>
                            
            </div>
        );
    }
}
 export default DemoCarousel