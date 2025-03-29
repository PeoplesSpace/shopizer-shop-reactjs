import PropTypes from "prop-types";
import React from "react";
import largeImage from '../../assets/images/home-fireplace-2025.webp';
import smallImage from '../../assets/images/home-fireplace-2025-b.webp';
import MediaQuery from 'react-responsive';



const HeroSliderStatic = ({ string, pitch1, pitch2, pitch3, sliderText, sliderImage }) => {



  return (
<span>
<MediaQuery minDeviceWidth={1224}>
<div id="coverImage" className="row" 
      style={{
        backgroundImage: `url(${largeImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginLeft : '0px',
        marginRight : '0px',
      }}
>

<div className="col-md-4 ml-auto order-md-2 align-self-start"
      style={{
        paddingLeft: '0px !important',
        paddingRight: '0px  !important'
      }}
>
    <div className="site-block-cover-content">
        <h2 className="sub-title">{pitch1}</h2>
        <h1>{pitch2}</h1>
        <h2 className="sub-title">{pitch3}</h2>
    </div>
</div>

</div>
</MediaQuery>
<MediaQuery maxDeviceWidth={1224}>
<div id="coverImage" className="row" 
      style={{
        backgroundImage: `url(${smallImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        marginLeft : '0px',
        marginRight : '0px',
      }}
>

<div className="col-md-4 ml-auto order-md-2 align-self-start"
      style={{
        paddingLeft: '0px !important',
        paddingRight: '0px  !important'
      }}
>
    <div className="site-block-cover-content">
        <h2 className="sub-title">{pitch1}</h2>
        <h1>{pitch2}</h1>
        <h2 className="sub-title">{pitch3}</h2>
    </div>
</div>

</div>
</MediaQuery>
</span>
  );
};

HeroSliderStatic.propTypes = {
  pitch1: PropTypes.string,
  pitch2: PropTypes.string,
  pitch3: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string
};

export default HeroSliderStatic;
