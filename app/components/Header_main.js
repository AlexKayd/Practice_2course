import './Header.css';

const Header = ({text}) => {
    return (
        <div className="main_header">
          <h1 className="heading" data-text={text}>{text.substring(0, text.length / 2)}<br/>
          {text.substring(text.length / 2)}</h1>
        </div>
      );
    
};

export default Header;