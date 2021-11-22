import React from 'react';
import '../css/Glimpse.css'

const Glimpse = () => {
	return (  <div class="container Glimpse">
    <div class="gap"></div>
    <div class="col-md-12 ">
          <div class="col-md-12">
                <div class="center gap ">
                    <h3 class="main-title">A GLIMPSE OF E-CELL</h3>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="center gap ">
                <div className= "video">
                <iframe width="100%" height="500px" src="https://www.youtube.com/embed/tujbOd8JBm0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                </div>
            </div>
</div>);
};
export default Glimpse;