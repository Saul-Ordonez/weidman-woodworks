import React from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';

const ShareNav = () => {

  const container = {
    width: '100%',
    height: 55,
    backgroundColor: 'black',
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 30,
    paddingRight: 30,
    display: 'flex',
    justifyContent: 'center',
    position: 'sticky',
    bottom: 0,
  }

  return (
    <React.Fragment>
      <div style={container} >
        <SocialMediaIconsReact 
          icon='facebook' 
          url='https://www.facebook.com/Weidman-Woodworks-237355887470641/' 
        />
        <SocialMediaIconsReact 
          icon='instagram' 
          url='https://www.instagram.com/weidman_woodworks/?hl=en' 
        />
      </div>
    </React.Fragment>
  );
}

export default ShareNav;