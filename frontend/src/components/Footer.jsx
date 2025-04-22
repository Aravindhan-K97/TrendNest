import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="">
      <div className="fle flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
          "Discover a seamless and enjoyable shopping experience with TrendNest, your one-stop destination for the latest fashion, electronics, home goods, and more. TrendNest offers a diverse selection of high-quality products, all easily accessible through a user-friendly interface. Enjoy secure payment options, fast delivery, personalized recommendations, exclusive deals, and hassle-free returns. Whether you're at home or on the go, TrendNest makes online shopping convenient, stylish, and fun. Shop today and find your next favorite item with just a few taps!"
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-86678-50510</li>
            <li>aravindhan2825@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ TrendNest.com- All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
