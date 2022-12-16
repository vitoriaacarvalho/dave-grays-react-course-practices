const Header=({title})=> {
    Header.defaultProps={
      title: "Groceries"
    };
    return (
      <>
        <h1>{title}</h1>
      </>
    );
    
  }
  

  export default Header;
  