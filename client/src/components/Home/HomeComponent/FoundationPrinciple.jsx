import React from "react";
import "../HomeComponent/Foundation.css"
import kitchen from "../../Photos/InteriorKitchen.png";
import conference from "../../Photos/conference.png";



function FoundationPrinciple() {
  return (
    <div className="wholeDiv" id="scrollDiv">
      <div className="firstDiv">
        <div className="foundationDiv">
          <h2>Foundation Principles</h2>
          <p>
            Foundation principles Our foundation rests on embracing innovation,
            prioritizing clients, upholding integrity, and fostering
            collaboration.
          </p>
          <p>
            We stand on innovation, client focus, integrity, and collaboration
            as our guiding principles.
          </p>
          <p>
            Our cornerstone lies in innovation, client centricity, integrity,
            and collaborative teamwork.
          </p>
          <p>
            Maintaining the highest standards of integrity in every aspect of
            our business transactions.
          </p>
        </div>
        <img src={kitchen} className="kitchenImg" alt=""></img>
      </div>
      <div className="secondDiv">

        <div className="imgAdjust">
          <img id="imageCss" src={conference} alt=""></img>
        </div>

        <div className="infoAdjust">

          <div className="overView">
            <h2>Overview</h2>
            <p>
              Tailoring robust and scalable software solutions and Designing
              visually
            </p>
            <p>impressive and functionally efficient websites</p>
            <p>Ensuring a safe and positive online environment </p>
            <p>Streamlining HR processes</p>
            <p>Developing user-friendly and innovative mobile applications</p>
          </div>

        </div>


      </div>
      <div className="thirdDiv">
        <div className="thirdFirstDiv">
          <h3>Speed and Security</h3>
          <p>The company positions itself as at the forefront of technology, indicating a commitment to utilizing the latest advancements. A commitment to delivering exceptional services implies a dedication to high-quality and efficient solutions.</p>
        </div>
        <div>
          <h3>Enhanced Collabration</h3>
          <p>Fostering a collaborative work environment where team members complement each other's skills and work together seamlessly to achieve common goals.</p>
        </div>
        <div className="third3">
          <h3>Flexibility and Scalability</h3>
          <p>Implementing flexible work arrangements, such as remote work options, flexible hours, or compressed workweeks, to accommodate diverse work preferences and promote work-life balance.</p>
        </div>
      </div>
      <div className="fourthDiv">
        <h4 className="fourthDivHeading1">An interconnected world leads to interconnected experiences.</h4>
        <div className="numberContainer">
          <div>
            <h4>1 M +</h4>
            <h6>MillionTotal</h6>
            <h6 id="revenue">Revenue</h6>
          </div>
          <div>
            <h4>13 K +</h4>
            <h6>Professonals</h6>
            <h6 id="connected">are connected</h6>
          </div>
          <div>
            <h4>50 +</h4>
            <h6 id="global">Global Customers</h6>
          </div>
          <div>
            <h4>6 +</h4>
            <h6 id="total">Total countries</h6>
          </div>
        </div>
        <h4 className="fourthDivHeading2">IT Monks Solutions Pvt Ltd actively engages in the Information Technology Development and Services sector, demonstrating dynamism while dedicating itself to fostering innovation and delivering state-of-the-art solutions.</h4>
      </div>
      <div id="dummy2"></div>
    </div>
  );
}

export default FoundationPrinciple;
