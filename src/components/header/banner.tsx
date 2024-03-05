import { CloseButton } from "./close"

export const Banner = () => {
  return (
    <div className="flex relative mobile:pt-[40px] mobile:pb-[20px] mobile:px-[16px] items-center justify-between
     mobile:h-[78px] laptop:h-[49px] h-[63px] w-full border border-[#262626] px-[160px] bg-no-repeat py-[18px]">
      <div className="absolute top-0 left-0 right-0 w-full h-[1282px] bg-no-repeat bg-contain" style={{ backgroundImage: `url("/images/bg3.png")`}}/>
      <div className="flex items-center laptop:gap-x-[6px] gap-x-[10px] justify-center w-full z-10">
        <p className="text-center mobile:text-[12px] mobile:leading-[18px] leading-[27px] laptop:text-[14px] laptop:leading-[21px] text-[18px] font-medium text-white">
          ✨Discover Your Dream Property with Estatein
        </p>
        <button className="mobile:hidden mobile:text-[12px] mobile:leading-[18px] leading-[27px] laptop:text-[14px] laptop:leading-[21px] text-[18px] font-medium text-white">
          Learn More
        </button>
      </div>
      <div className="mobile:hidden absolute right-[32px]">
        <CloseButton />
      </div>
    </div>
  )
}