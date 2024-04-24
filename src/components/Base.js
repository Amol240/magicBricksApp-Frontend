import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";

const Base = ({ children }) => {
  return (
    <div>
      <CustomNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default Base;
