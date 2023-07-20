import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const layout = ({ children }) => {
  return (
    <html data-theme="light">
      <body>
        <Navbar></Navbar>
        <main>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
};

export default layout;
