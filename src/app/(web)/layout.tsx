import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import {ReactNode} from "react";


const layout = ({children}: {children: ReactNode}) => {
  return (
    <>
      <Navbar />
        {children}
      <Footer />
    </>
  );
};

export default layout;