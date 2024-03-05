import { Logo } from "./logo"

export const NavigationBar = () => {
  return (
    <div className="flex mobile:h-[68px] mobile:px-[16px] justify-between items-center bg-main w-full laptop:h-[77px] h-[99px] laptop:px-[80px] px-[162px] py-[20px]">
      <Logo />
      <div className="flex items-center justify-between laptop:w-[322px] laptop:h-[45px] w-[407px] h-[55px]">
        <div className="flex items-center justify-center laptop:w-[77px] laptop:h-[45px] w-[96px] h-[55px] rounded-[10px] bg-[#141414] border border-[#262626] py-[14px] px-[24px]">
          <p className="font-medium laptop:text-[14px] laptop:leading-[21px] text-[18px] leading-[27px] text-white">
            Home
          </p>
        </div>
        <p className="font-medium laptop:text-[14px] laptop:leading-[21px] text-[18px] leading-[27px] text-white">
          About Us
        </p>
        <p className="font-medium laptop:text-[14px] laptop:leading-[21px] text-[18px] leading-[27px] text-white">
          Properties
        </p>
        <p className="font-medium laptop:text-[14px] laptop:leading-[21px]text-[18px] leading-[27px] text-white">
          Services
        </p>
      </div>
      <div className="flex items-center justify-center laptop:w-[119px] laptop:h-[49px] w-[138px] h-[59px] rounded-[10px] py-[16px] px-[24px] bg-[#141414] border border-[#262626]">
        <p className="font-medium laptop:text-[14px] truncate laptop:leading-[21px] text-white text-[18px] leading-[27px]">
          Contact Us
        </p>
      </div>
    </div>
  )
}