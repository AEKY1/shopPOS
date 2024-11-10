import React from "react";
import Logo from "../../../public/images/logo.jpeg";

export const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-[400px] min-h-[600px] ">
        <div className="w-full flex justify-center">
          <div className="w-[80px] min-h-[100px] bg-gray-100 ">
            <div className="w-[80px] h-[80px] bg-gray-400 ">
              <img src={Logo} alt="logo" className="w-full h-full" />
              <h1 className="text-center text-[14px] font-semibold ">
                ຂາໄກ່ເຈ້ຕຸ້ຍ
              </h1>
            </div>
          </div>
        </div>
        <div className="w-full  bg-white border-[2px] border-gray-200 rounded-md mt-[20px] p-[12px] ">
          <h2 className="text-center text-[24px] font-bold mt-[8px] ">
            ລ໋ອກອິນ
          </h2>
          <p className="mt-[32px] ">ຊື່ຜູ້ໃຊ້</p>
          <input
            type="text"
            className="w-full border-[2px] border-gray-200 rounded-[6px] py-[8px] px-[8px] focus:outline-none "
          />
          <p className="mt-[20px] ">ລະຫັດຜ່ານ</p>
          <input
            type="password"
            className="w-full border-[2px] border-gray-200 rounded-[6px] py-[8px] px-[8px] focus:outline-none "
          />
          <div className="w-full flex mt-[8px] items-center gap-2 ">
            <input
              id="remember"
              type="checkbox"
              name="remember"
              className="w-[16px] h-[16px] "
            />
            <label className="text-gray-400" for="remember">
              ຈື່ຂ້ອຍ
            </label>
          </div>
          <button className="w-full bg-green-500 py-[8px] rounded-md mt-[20px] text-white mb-[32px] ">
            ລ໋ອກອິນ
          </button>
        </div>
      </div>
    </div>
  );
};
