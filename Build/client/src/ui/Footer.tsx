import { payment } from "../assets"
import Container from "./Container"
import FooterTop from "./FooterTop"

const Footer = () => {
  return (
    <div className="mt-10">
      <FooterTop/>
      <Container className="flex flex-col md:flex-row items-center gap-4 justify-between mt-6">
        <p>@2024 Chanthoudev.All right reserved.</p>
        <img src={payment} alt="payment-img" className="object-cover"/>
      </Container>
    </div>
  )
}

export default Footer
