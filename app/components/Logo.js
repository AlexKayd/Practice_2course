import Image from 'next/image';
import myImage from './images/logo.png';

const Logo = () => {
  return (
    <div className="logo-container">
        <Image src={myImage} width={90} height={55}/>
    </div>
  );
};

export default Logo;
