import { Header } from "../../header"
import { Logo } from "../../header/logo"
import { SvgBackground } from "../../other/main-svg-background"
import "./index.css"

export const RealEstateModule = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col w-full bg-[#141414]">
        <div className="flex overflow-hidden gap-[80px] items-center w-full h-full bg-[#141414]">
          <div className="flex flex-col justify-center gap-[60px] items-center w-1/2 laptop:pl-[80px] pl-[162px] h-[814px]">
            <div className="flex items-center">
              <div className="flex flex-col gap-[24px]">
                <p className="font-semibold mobile:text-[28px] laptop:text-[46px] laptop:leading-[55px] text-[60px] leading-[72px] text-white">
                  Discover Your Dream Property with Estatein
                </p>
                <p className="font-medium laptop:text-[16px] laptop:leading-[24px] text-[#999999] text-[18px] leading-[27px]">
                  Your journey to finding the perfect property begins here. Explore our listings to find the home that matches your dreams.
                </p>
              </div>
              <div className="flex relative -top-10 z-10 left-40 items-center justify-center w-[175px] h-[175px] rounded-[160px] border-[1.6px] p-[47px] bg-[#141414] border-[#262626]">
                <img
                  src="/images/rounded-text.png"
                  width="143"
                  height="143"
                  className="absolute top-[13px] right-0 bottom-0 left-[13px]"
                />
                <div className="flex items-center justify-center rounded-[160px] relative">
                  <div className="flex items-center justify-center w-[80px] h-[80px] rounded-[80px] bg-main border-[1.6px] border-[#262626]">
                    <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.875 27.625L28.125 6.375M28.125 6.375L12.1875 6.375M28.125 6.375V22.3125" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center laptop:gap-[16px] gap-[20px] justify-start w-full">
              <div className="laptop:w-[121px] laptop:h-[49px] w-[142px] h-[63px] rounded-[10px] laptop:py-[14px] laptop:px-[20px] py-[18px] px-[24px] border border-[#262626]">
                <p className="font-medium laptop:text-[14px] laptop:leading-[21px] text-[18px] text-white leading-[27px]">
                  Learn More
                </p>
              </div>
              <div className="laptop:w-[151px] laptop:h-[49px] bg-[#703BF7] w-[191px] rounded-[10px] h-[63px] laptop:py-[14px] laptop:px-[20px] py-[18px] px-[24px]">
                <p className="font-medium laptop:text-[14px] laptop:leading-[21px text-[18px] text-white leading-[27px]">
                  Browse Properties
                </p>
              </div>
            </div>
            <div className="flex items-center laptop:gap-[16px] gap-[20px] justify-start w-full">
              <div className="flex flex-col justify-center bg-[#1A1A1A] laptop:w-[192px] laptop:h-[99px] w-[240px] h-[121px] rounded-[12px] 
              laptop:py-[14px] laptop:px-[20px] py-[18px] px-[24px] gap-y-[2px] border border-[#262626]">
                <p className="font-bold laptop:text-[30px] laptop:leading-[45px] text-[40px] text-white leading-[60px]">
                  200+
                </p>
                <p className="font-medium laptop:text-[16px] laptop:leading-[24px] text-[18px] text-[#999999] leading-[27px]">
                  Happy Customers
                </p>
              </div>
              <div className="flex flex-col justify-center bg-[#1A1A1A] laptop:w-[192px] laptop:h-[99px] w-[240px] h-[121px] rounded-[12px] 
              laptop:py-[14px] laptop:px-[20px] py-[18px] px-[24px] gap-y-[2px] border border-[#262626]">
                <p className="font-bold laptop:text-[30px] laptop:leading-[45px] text-[40px] text-white leading-[60px]">
                  10k+
                </p>
                <p className="font-medium laptop:text-[16px] laptop:leading-[24px] text-[18px] text-[#999999] leading-[27px]">
                  Properties For Clients
                </p>
              </div>
              <div className="flex flex-col justify-center bg-[#1A1A1A] laptop:w-[192px] laptop:h-[99px] w-[240px] h-[121px] rounded-[12px] 
              laptop:py-[14px] laptop:px-[20px] py-[18px] px-[24px] gap-y-[2px] border border-[#262626]">
                <p className="font-bold laptop:text-[30px] laptop:leading-[45px] text-[40px] text-white leading-[60px]">
                  16+
                </p>
                <p className="font-medium laptop:text-[16px] laptop:leading-[24px] text-[18px] text-[#999999] leading-[27px]">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
          <div className="flex relative w-1/2 h-[814px] bg-[#1A1A1A]">
            <div className="absolute top-0 right-0 left-0">
              <SvgBackground />
            </div>
            <img
              src="/images/main.png"
              className="object-cover desktop:w-[920px] overflow-hidden desktop:h-[814px] laptop:w-[690px] laptop:h-[622px] mobile:w-[358px] mobile:h-[302px]"
            />
          </div>
        </div>
        <div className="flex items-center p-[20px] w-full h-[252px] gap-[20px] bg-[#141414]">
          <div className="flex flex-col relative gap-y-[20px] items-center justify-center w-[455px] h-[212px] rounded-[12px] bg-[#1A1A1A] border border-[#262626] px-[40px] py-20px]">
            <a href="/" className="self-end absolute top-4 right-4">
              <img
                src="/images/link-icon.png"
                width="34"
                height="34"
              />
            </a>
            <img
              src="/images/icon1.png"
              width="82"
              height="82"
            />
            <p className="font-semibold text-[20px] leading-[30px] text-white">
              Find Your Dream Home
            </p>
          </div>
          <div className="flex flex-col relative gap-y-[20px] items-center justify-center w-[455px] h-[212px] rounded-[12px] bg-[#1A1A1A] border border-[#262626] px-[40px] py-20px]">
            <a href="/" className="self-end absolute top-4 right-4">
              <img
                src="/images/link-icon.png"
                width="34"
                height="34"
              />
            </a>
            <img
              src="/images/icon2.png"
              width="82"
              height="82"
            />
            <p className="font-semibold text-[20px] leading-[30px] text-white">
              Unlock Property Value
            </p>
          </div>
          <div className="flex flex-col relative gap-y-[20px] items-center justify-center w-[455px] h-[212px] rounded-[12px] bg-[#1A1A1A] border border-[#262626] px-[40px] py-20px]">
            <a href="/" className="self-end absolute top-4 right-4">
              <img
                src="/images/link-icon.png"
                width="34"
                height="34"
              />
            </a>
            <img
              src="/images/icon3.png"
              width="82"
              height="82"
            />
            <p className="font-semibold text-[20px] leading-[30px] text-white">
              Effortless Property Management
            </p>
          </div>
          <div className="flex flex-col relative gap-y-[20px] items-center justify-center w-[455px] h-[212px] rounded-[12px] bg-[#1A1A1A] border border-[#262626] px-[40px] py-20px]">
            <a href="/" className="self-end absolute top-4 right-4">
              <img
                src="/images/link-icon.png"
                width="34"
                height="34"
              />
            </a>
            <img
              src="/images/icon4.png"
              width="82"
              height="82"
            />
            <p className="font-semibold text-[20px] leading-[30px] text-white">
              Smart Investments, Informed Decisions
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full gap-[80px] h-full bg-[#141414] py-[45px] laptop:px-[80px] px-[152px]">
          <div className="flex flex-col w-full h-[140px]">
            <img
              src="/images/stars.png"
              className="relative -top-2 right-4 h-[30px] w-[68px]"
            />
            <div className="flex justify-between gap-[200px] w-full">
              <div className="flex flex-col w-full">
                <p className="font-semibold text-white text-[48px] leading-[72px]">
                  Featured Properties
                </p>
                <p className="text-[18px] leading-[27px] text-[#999999] font-medium">
                  Explore our handpicked selection of featured properties.
                  Each listing offers a glimpse into exceptional homes and investments available through Estatein.
                  Click "View Details" for more information.
                </p>
              </div>
              <div className="flex items-center justify-center w-[266px] h-[63px] rounded-[10px] self-end py-[18px] px-[24px] bg-[#1A1A1A] border border-[#262626]">
                <p className="font-medium text-[18px] leading-[27px] text-white">
                  View All Properties
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full laptop:gap-[40px] gap-[50px]">
            <div className="flex items-center laptop:gap-[20px] gap-[30px] w-full">
              <div className="flex flex-col laptop:w-[414px] laptop:h-[549px] w-[512px] 
              laptop:gap-[20px] gap-[30px] h-[692px] rounded-[12px] border border-[#262626] laptop:p-[30px] p-[40px]">
                <img
                  src="/images/house1.png"
                  className="laptop:w-[353px] laptop:h-[255px] w-[432px] h-[318px] rounded-[10px]"
                />
                <div className="flex flex-col laptop:gap-[24px] gap-[30px]">
                  <div className="flex flex-col laptop:gap-[4px] gap-[6px]">
                    <p className="font-semibold laptop:text-[20px] laptop:leading-[30px] text-white text-[24px] leading-[36px]">
                      Seaside Serenity Villa
                    </p>
                    <p className="font-medium laptop:text-[16px] laptop:leading-[24px] text-[18px] leading-[27px] text-[#999999]">
                      A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More
                    </p>
                  </div>
                </div>
                <div className="flex items-center laptop:gap-[6px] gap-[10px]">
                  <div className="flex items-center justify-center py-[14px] px-[8px] gap-[4px] w-[147px] h-[43px] bg-[#1A1A1A] rounded-[28px] border border-[#262626]">
                    <img
                      src="/images/bedroom-icon.png"
                      className="laptop:w-[20px] laptop:h-[20px] w-[24px] h-[24px]"
                    />
                    <p className="font-medium laptop:text-[14px] laptop:leading-[21px] text-white text-[18px] leading-[27px]">
                      4-Bedroom
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-[14px] px-[8px] gap-[4px] w-[152px] h-[43px] bg-[#1A1A1A] rounded-[28px] border border-[#262626]">
                    <img
                      src="/images/bathroom-icon.png"
                      className="laptop:w-[20px] laptop:h-[20px] w-[24px] h-[24px]"
                    />
                    <p className="font-medium laptop:text-[14px] laptop:leading-[21px] text-white text-[18px] leading-[27px]">
                      3-Bathroom
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-[14px] px-[8px] gap-[4px] w-[89px] h-[43px] bg-[#1A1A1A] rounded-[28px] border border-[#262626]">
                    <img
                      src="/images/villa-icon.png"
                      className="laptop:w-[20px] laptop:h-[20px] w-[24px] h-[24px]"
                    />
                    <p className="font-medium laptop:text-[14px] laptop:leading-[21px] text-white text-[18px] leading-[27px]">
                      Villa
                    </p>
                  </div>
                </div>
                <div className="flex items-center laptop:gap-[40px] gap-[50px] h-[65px]">
                  <div className="flex flex-col laptop:w-[86px] laptop:h-[51px] w-[103px] gap-[2px]">
                    <p className="text-[#999999] laptop:text-[14px] laptop:leading-[21px] text-[18px] leading-[27px] font-medium">
                      Price
                    </p>
                    <p className="font-semibold laptop:text-[20px] laptop:leading-[30px] text-[24px] leading-[36px] text-white">
                      $550,000
                    </p>
                  </div>
                  <div className="flex items-center justify-center bg-[#703BF7] laptop:w-[227px] laptop:h-[49px] w-[279px] h-[63px] rounded-[10px] py-[18px] px-[24px]">
                    <p className="text-white laptop:text-[14px] laptop:leading-[21px] text-[18px] leading-[27px] font-medium">
                      View Property Details
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col laptop:w-[414px] laptop:h-[549px] w-[512px] h-[692px] rounded-[12px] border border-[#262626] laptop:p-[30px] p-[40px] laptop:gap-[20px] gap-[30px]">
                <img
                  src="/images/house2.png"
                  className="laptop:w-[353px] laptop:h-[255px] w-[432px] h-[318px] rounded-[10px]"
                />
                <div className="flex flex-col laptop:gap-[24px] gap-[30px]">
                  <div className="flex flex-col laptop:gap-[4px] gap-[6px]">
                    <p className="font-semibold laptop:text-[20px] laptop:leading-[30px] text-white text-[24px] leading-[36px]">
                      Metropolitan Haven
                    </p>
                    <p className="font-medium laptop:text-[16px] laptop:leading-[24px] text-[18px] leading-[27px] text-[#999999]">
                      A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More
                    </p>
                  </div>
                </div>
                <div className="flex items-center laptop:gap-[6px] gap-[10px]">
                  <div className="flex items-center justify-center py-[14px] px-[8px] gap-[4px] w-[147px] h-[43px] bg-[#1A1A1A] rounded-[28px] border border-[#262626]">
                    <img
                      src="/images/bedroom-icon.png"
                      className="laptop:w-[20px] laptop:h-[20px] w-[24px] h-[24px]"
                    />
                    <p className="font-medium laptop:text-[14px] laptop:leading-[21px] text-white text-[18px] leading-[27px]">
                      2-Bedroom
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-[14px] px-[8px] gap-[4px] w-[152px] h-[43px] bg-[#1A1A1A] rounded-[28px] border border-[#262626]">
                    <img
                      src="/images/bathroom-icon.png"
                      className="laptop:w-[20px] laptop:h-[20px] w-[24px] h-[24px]"
                    />
                    <p className="font-medium laptop:text-[14px] laptop:leading-[21px] text-white text-[18px] leading-[27px]">
                      2-Bathroom
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-[14px] px-[8px] gap-[4px] w-[89px] h-[43px] bg-[#1A1A1A] rounded-[28px] border border-[#262626]">
                    <img
                      src="/images/villa-icon.png"
                      className="laptop:w-[20px] laptop:h-[20px] w-[24px] h-[24px]"
                    />
                    <p className="font-medium laptop:text-[14px] laptop:leading-[21px] text-white text-[18px] leading-[27px]">
                      Villa
                    </p>
                  </div>
                </div>
                <div className="flex items-center laptop:gap-[40px] gap-[50px] h-[65px]">
                  <div className="flex flex-col laptop:w-[86px] laptop:h-[51px] w-[103px] gap-[2px]">
                    <p className="text-[#999999] laptop:text-[14px] laptop:leading-[21px] text-[18px] leading-[27px] font-medium">
                      Price
                    </p>
                    <p className="font-semibold laptop:text-[20px] laptop:leading-[30px] text-[24px] leading-[36px] text-white">
                      $550,000
                    </p>
                  </div>
                  <div className="flex items-center justify-center bg-[#703BF7] laptop:w-[227px] laptop:h-[49px] w-[279px] h-[63px] rounded-[10px] py-[18px] px-[24px]">
                    <p className="text-white laptop:text-[14px] laptop:leading-[21px] text-[18px] leading-[27px] font-medium">
                      View Property Details
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col laptop:w-[414px] laptop:h-[549px] w-[512px] h-[692px] rounded-[12px] border border-[#262626] laptop:p-[30px] p-[40px] laptop:gap-[20px] gap-[30px]">
                <img
                  src="/images/house3.png"
                  className="laptop:w-[353px] laptop:h-[255px] w-[432px] h-[318px] rounded-[10px]"
                />
                <div className="flex flex-col laptop:gap-[24px] gap-[30px]">
                  <div className="flex flex-col laptop:gap-[4px] gap-[6px]">
                    <p className="font-semibold laptop:text-[20px] laptop:leading-[30px] text-white text-[24px] leading-[36px]">
                      Rustic Retreat Cottage
                    </p>
                    <p className="font-medium laptop:text-[16px] laptop:leading-[24px] text-[18px] leading-[27px] text-[#999999]">
                      An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... Read More
                    </p>
                  </div>
                </div>
                <div className="flex items-center laptop:gap-[6px] gap-[10px]">
                  <div className="flex items-center justify-center py-[14px] px-[8px] gap-[4px] w-[147px] h-[43px] bg-[#1A1A1A] rounded-[28px] border border-[#262626]">
                    <img
                      src="/images/bedroom-icon.png"
                      className="laptop:w-[20px] laptop:h-[20px] w-[24px] h-[24px]"
                    />
                    <p className="font-medium laptop:text-[14px] laptop:leading-[21px] text-white text-[18px] leading-[27px]">
                      3-Bedroom
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-[14px] px-[8px] gap-[4px] w-[152px] h-[43px] bg-[#1A1A1A] rounded-[28px] border border-[#262626]">
                    <img
                      src="/images/bathroom-icon.png"
                      className="laptop:w-[20px] laptop:h-[20px] w-[24px] h-[24px]"
                    />
                    <p className="font-medium laptop:text-[14px] laptop:leading-[21px] text-white text-[18px] leading-[27px]">
                      3-Bathroom
                    </p>
                  </div>
                  <div className="flex items-center justify-center py-[14px] px-[8px] gap-[4px] w-[89px] h-[43px] bg-[#1A1A1A] rounded-[28px] border border-[#262626]">
                    <img
                      src="/images/villa-icon.png"
                      className="laptop:w-[20px] laptop:h-[20px] w-[24px] h-[24px]"
                    />
                    <p className="font-medium laptop:text-[14px] laptop:leading-[21px] text-white text-[18px] leading-[27px]">
                      Villa
                    </p>
                  </div>
                </div>
                <div className="flex items-center laptop:gap-[40px] gap-[50px] h-[65px]">
                  <div className="flex flex-col laptop:w-[86px] laptop:h-[51px] w-[103px] gap-[2px]">
                    <p className="text-[#999999] laptop:text-[14px] laptop:leading-[21px] text-[18px] leading-[27px] font-medium">
                      Price
                    </p>
                    <p className="font-semibold laptop:text-[20px] laptop:leading-[30px] text-[24px] leading-[36px] text-white">
                      $550,000
                    </p>
                  </div>
                  <div className="flex items-center justify-center bg-[#703BF7] laptop:w-[227px] laptop:h-[49px] w-[279px] h-[63px] rounded-[10px] py-[18px] px-[24px]">
                    <p className="text-white laptop:text-[14px] laptop:leading-[21px] text-[18px] leading-[27px] font-medium">
                      View Property Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-[#262626] pt-[20px] w-full laptop:h-[60px] h-[78px]">
              <p className="laptop:text-[16px] laptop:leading-[24px] text-[20px] font-medium text-white leading-[30px]">
                01 <span className="text-[#999999]">
                  of 60
                </span>
              </p>
              <div className="flex items-center laptop:w-[98px] laptop:h-[44px] w-[126px] h-[58px] gap-[10px]">
                <div className="flex items-center justify-center laptop:w-[44px] laptop:h-[44px] w-[58px] h-[58px] rounded-[69px] p-[14px] border border-[#262626]">
                  <img src="/images/prev-icon.png" />
                </div>
                <div className="flex items-center justify-center laptop:w-[44px] laptop:h-[44px] w-[58px] h-[58px] rounded-[69px] p-[14px] border border-[#262626]">
                  <img src="/images/next-icon.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full gap-[80px] h-full bg-[#141414] py-[45px] laptop:px-[80px] px-[152px]">
          <div className="flex flex-col w-full h-[140px]">
            <img
              src="/images/stars.png"
              className="relative -top-2 right-4 h-[30px] w-[68px]"
            />
            <div className="flex justify-between gap-[200px] w-full">
              <div className="flex flex-col w-full">
                <p className="font-semibold text-white text-[48px] leading-[72px]">
                  What Our Clients Say
                </p>
                <p className="text-[18px] leading-[27px] text-[#999999] font-medium">
                  Read the success stories and heartfelt testimonials from our valued clients.
                  Discover why they chose Estatein for their real estate needs.
                </p>
              </div>
              <div className="flex items-center justify-center w-[275px] h-[63px] rounded-[10px] self-end py-[18px] px-[24px] bg-[#1A1A1A] border border-[#262626]">
                <p className="font-medium text-[18px] leading-[27px] text-white">
                  View All Testimonials
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full gap-[50px]">
            <div className="flex items-center gap-[30px] w-full">
              <div className="flex flex-col w-[512px] h-[442px] border border-[#262626] rounded-[12px] p-[50px] gap-[40px]">
                <div className="flex items-center w-[260px] h-[44px] gap-[10px]">
                  <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[100px] border border-[#262626] bg-[#1A1A1A] p-[10px]">
                    <img src="/images/star.png" width="24" height="24" />
                  </div>
                  <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[100px] border border-[#262626] bg-[#1A1A1A] p-[10px]">
                    <img src="/images/star.png" width="24" height="24" />
                  </div>
                  <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[100px] border border-[#262626] bg-[#1A1A1A] p-[10px]">
                    <img src="/images/star.png" width="24" height="24" />
                  </div>
                  <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[100px] border border-[#262626] bg-[#1A1A1A] p-[10px]">
                    <img src="/images/star.png" width="24" height="24" />
                  </div>
                  <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[100px] border border-[#262626] bg-[#1A1A1A] p-[10px]">
                    <img src="/images/star.png" width="24" height="24" />
                  </div>
                </div>
                <div className="flex flex-col gap-[14px] h-full">
                  <p className="font-semibold text-[24px] leading-[36px] text-white">
                    Exceptional Service!
                  </p>
                  <p className="font-medium text-[18px] leading-[27px] text-white">
                    Our experience with Estatein was outstanding.
                    Their team's dedication and professionalism made finding our dream home a breeze.
                    Highly recommended!
                  </p>
                </div>
                <div className="flex items-center gap-[12px] h-full">
                  <img src="/images/profile1.png" width="60" height="60" />
                  <div className="flex flex-col gap-[2px">
                    <p className="text-[20px] leading-[30px] font-medium text-white">
                      Wade Warren
                    </p>
                    <p className="font-medium text-[18px] leading-[27px] text-[#999999]">
                      USA, California
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[512px] h-[442px] border border-[#262626] rounded-[12px] p-[50px] gap-[40px]">
                <div className="flex items-center w-[260px] h-[44px] gap-[10px]">
                  <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[100px] border border-[#262626] bg-[#1A1A1A] p-[10px]">
                    <img src="/images/star.png" width="24" height="24" />
                  </div>
                  <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[100px] border border-[#262626] bg-[#1A1A1A] p-[10px]">
                    <img src="/images/star.png" width="24" height="24" />
                  </div>
                  <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[100px] border border-[#262626] bg-[#1A1A1A] p-[10px]">
                    <img src="/images/star.png" width="24" height="24" />
                  </div>
                  <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[100px] border border-[#262626] bg-[#1A1A1A] p-[10px]">
                    <img src="/images/star.png" width="24" height="24" />
                  </div>
                  <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[100px] border border-[#262626] bg-[#1A1A1A] p-[10px]">
                    <img src="/images/star.png" width="24" height="24" />
                  </div>
                </div>
                <div className="flex flex-col gap-[14px] h-full">
                  <p className="font-semibold text-[24px] leading-[36px] text-white">
                    Efficient and Reliable
                  </p>
                  <p className="font-medium text-[18px] leading-[27px] text-white">
                    Estatein provided us with top-notch service.
                    They helped us sell our property quickly and at a great price. We couldn't be happier with the results.
                  </p>
                </div>
                <div className="flex justify-self-end items-center gap-[12px]">
                  <img src="/images/profile2.png" width="60" height="60" />
                  <div className="flex flex-col gap-[2px">
                    <p className="text-[20px] leading-[30px] font-medium text-white">
                      Emelie Thomson
                    </p>
                    <p className="font-medium text-[18px] leading-[27px] text-[#999999]">
                      USA, Florida
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[512px] h-[442px] border border-[#262626] rounded-[12px] p-[50px] gap-[40px]">
                <div className="flex items-center w-[260px] h-[44px] gap-[10px]">
                  <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[100px] border border-[#262626] bg-[#1A1A1A] p-[10px]">
                    <img src="/images/star.png" width="24" height="24" />
                  </div>
                  <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[100px] border border-[#262626] bg-[#1A1A1A] p-[10px]">
                    <img src="/images/star.png" width="24" height="24" />
                  </div>
                  <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[100px] border border-[#262626] bg-[#1A1A1A] p-[10px]">
                    <img src="/images/star.png" width="24" height="24" />
                  </div>
                  <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[100px] border border-[#262626] bg-[#1A1A1A] p-[10px]">
                    <img src="/images/star.png" width="24" height="24" />
                  </div>
                  <div className="flex items-center justify-center w-[44px] h-[44px] rounded-[100px] border border-[#262626] bg-[#1A1A1A] p-[10px]">
                    <img src="/images/star.png" width="24" height="24" />
                  </div>
                </div>
                <div className="flex flex-col gap-[14px] h-full">
                  <p className="font-semibold text-[24px] leading-[36px] text-white">
                    Trusted Advisors
                  </p>
                  <p className="font-medium text-[18px] leading-[27px] text-white">
                    The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!
                  </p>
                </div>
                <div className="flex justify-self-end items-center gap-[12px]">
                  <img src="/images/profile3.png" width="60" height="60" />
                  <div className="flex flex-col gap-[2px">
                    <p className="text-[20px] leading-[30px] font-medium text-white">
                      John Mans
                    </p>
                    <p className="font-medium text-[18px] leading-[27px] text-[#999999]">
                      USA, Nevada
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between border-t border-[#262626] laptop:h-[60px] pt-[20px] w-full h-[78px]">
              <p className="laptop:text-[16px] laptop:leading-[24px] text-[20px] font-medium text-white leading-[30px]">
                01 <span className="text-[#999999]">
                  of 60
                </span>
              </p>
              <div className="flex items-center laptop:w-[98px] laptop:h-[44px] w-[126px] h-[58px] gap-[10px]">
                <div className="flex items-center justify-center laptop:w-[44px] laptop:h-[44px] w-[58px] h-[58px] rounded-[69px] p-[14px] border border-[#262626]">
                  <img src="/images/prev-icon.png" />
                </div>
                <div className="flex items-center justify-center laptop:w-[44px] laptop:h-[44px] w-[58px] h-[58px] rounded-[69px] p-[14px] border border-[#262626]">
                  <img src="/images/next-icon.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative flex-col w-full h-[925px]">
          <div className="flex items-center h-[367px] w-full laptop:px-[80px] px-[162px] gap-[250px]">
            <div className="absolute left-0 top-16 w-[566px] h-[308px] bg-no-repeat" style={{ backgroundImage: `url("/images/bg2.png")` }} />
            <div className="flex flex-col z-10">
              <p className="font-semibold laptop:text-[38px] laptop:leading-[57px] text-[48px] leading-[72px] text-white">
                Start Your Real Estate Journey Today
              </p>
              <p className="laptop:text-[16px] laptop:leading-[24px] text-[18px] leading-[27px] text-[#999999] font-medium">
                Your dream property is just a click away.
                Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way.
                Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.
              </p>
            </div>
            <div className="absolute right-0 bg-cover bg-no-repeat top-0 w-[725px] h-[394px]" style={{ backgroundImage: `url("/images/bg1.png")` }} />
            <div className="flex relative justify-center items-center flex-col">
              <div className="flex items-center justify-center laptop:w-[152px] laptop:h-[49px] w-[192px] h-[63px] laptop:py-[14px] laptop:px-[20px] py-[18px] px-[24px] rounded-[10px] gap-2 bg-[#703BF7]/60">
                <p className="laptop:text-[14px] laptop:leading-[21px] text-[18px] leading-[27px] text-white font-medium">
                  Explore Properties
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-start h-[454px] w-full py-[100px] laptop:px-[80px] px-[162px] gap-[80px] bg-[#141414]">
            <div className="flex flex-col laptop:w-[326px] laptop:h-[110px] w-[538px] h-[144px] gap-[30px]">
              <Logo />
              <div className="flex items-center laptop:w-[305px] laptop:h-[52px] w-[423px] laptop:rounded-[8px] 
              justify-between h-[66px] rounded-[12px] laptop:py-[14px] px-[20px] border border-[#262626] laptop:gap-[6px] gap-[10px]">
                <div className="flex items-center gap-[9px]">
                  <img
                    src="/images/email.png"
                    className="w-[24px] h-[24px] laptop:w-[20px] laptop:h-[20px]"
                  />
                  <p className="laptop:text-[14px] laptop:leading-[24px] h-[24px] font-medium text-[#999999] text-[18px] leading-[24px]">
                    Enter Your Email
                  </p>
                </div>
                <img
                  src="/images/telegram.png"
                  className="w-[24px] h-[24px] laptop:w-[20px] laptop:h-[20px]"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-[978px] h-[254px]">
              <div className="flex flex-col laptop:w-[99px] w-[110px] h-full gap-[30px]">
                <p className="laptop:text-[18px] text-[20px] leading-[24px] text-[#999999] font-medium">
                  Home
                </p>
                <div className="flex flex-col *:w-full gap-[20px]">
                  <p className="text-[18px] leading-[24px] text-white font-medium">
                    Hero Section
                  </p>
                  <p className="text-[18px] leading-[24px] text-white font-medium">
                    Features
                  </p>
                  <p className="text-[18px] leading-[24px] text-white font-medium">
                    Properties
                  </p>
                  <p className="text-[18px] leading-[24px] text-white font-medium">
                    Testimonials
                  </p>
                  <p className="text-[18px] leading-[24px] text-white font-medium">
                    FAQ’s
                  </p>
                </div>
              </div>
              <div className="flex flex-col laptop:w-[90px] w-[112px] h-[254px] gap-[30px]">
                <p className="laptop:text-[18px] text-[20px] leading-[24px] text-[#999999] font-medium">
                  About Us
                </p>
                <div className="flex flex-col *:w-full gap-[20px]">
                  <p className="text-[18px] leading-[24px] text-white font-medium">
                    Our Story
                  </p>
                  <p className="text-[18px] leading-[24px] text-white font-medium">
                    Our Works
                  </p>
                  <p className="text-[18px] leading-[24px] text-white font-medium">
                    How It Works
                  </p>
                  <p className="text-[18px] leading-[24px] text-white font-medium">
                    Our Team
                  </p>
                  <p className="text-[18px] leading-[24px] text-white font-medium">
                    Our Clients
                  </p>
                </div>
              </div>
              <div className="flex flex-col laptop:w-[79px] w-[88px] h-full gap-[30px]">
                <p className="laptop:text-[18px] text-[20px] leading-[24px] text-[#999999] font-medium">
                  Properties
                </p>
                <div className="flex flex-col *:w-full gap-[20px]">
                  <p className="text-[18px] leading-[24px] text-white font-medium">
                    Portfolio
                  </p>
                  <p className="text-[18px] leading-[24px] text-white font-medium">
                    Categories
                  </p>
                </div>
              </div>
              <div className="flex flex-col laptop:w-[159px] w-[189px] h-[254px] gap-[30px]">
                <p className="laptop:text-[18px] text-[20px] leading-[24px] text-[#999999] font-medium">
                  Services
                </p>
                <div className="flex flex-col *:w-full gap-[20px]">
                  <p className="text-[18px] leading-[24px] text-white font-medium">
                    Valuation Mastery
                  </p>
                  <p className="text-[18px] leading-[24px] text-white font-medium">
                    Strategic Marketing
                  </p>
                  <p className="text-[18px] leading-[24px] text-white font-medium">
                    Negotiation Wizardry
                  </p>
                  <p className="text-[18px] leading-[24px] text-white font-medium">
                    Closing Success
                  </p>
                  <p className="text-[18px] leading-[24px] text-white font-medium">
                    Property Management
                  </p>
                </div>
              </div>
              <div className="flex flex-col laptop:w-[96px] w-[108px] h-full gap-[30px]">
                <p className="text-[20px] leading-[24px] text-[#999999] font-medium">
                  Contact Us
                </p>
                <div className="flex flex-col *:w-full gap-[20px]">
                  <p className="text-[18px] leading-[24px] text-white font-medium">
                    Contact Form
                  </p>
                  <p className="text-[18px] leading-[24px] text-white font-medium">
                    Our Offices
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between py-[16px] laptop:px-[80px] laptop:h-[68px] px-[162px] w-full h-[104px] bg-[#1A1A1A]">
            <div className="flex items-center w-[612px] h-[44px] py-[10px] laptop:gap-[20px] gap-[38px]">
              <a href="/" className="text-white laptop:text-[14px] text-[18px] leading-[24px] font-medium">
                @2023 Estatein. All Rights Reserved.
              </a>
              <a href="/" className="text-white laptop:text-[14px] text-[18px] leading-[24px] font-medium">
                Terms & Conditions
              </a>
            </div>
            <div className="flex items-center laptop:w-[184px] laptop:h-[40px] w-[238px] h-[72px] py-[10px] gap-[10px]">
              <a href="/">
                <div className="flex items-center justify-center laptop:w-[40px] laptop:h-[40px] w-[52px] h-[52px] bg-[#141414] rounded-[58px] gap-[10px]">
                  <img src="/images/facebook.png" className="w-[24px] h-[24px] laptop:w-[20px] laptop:h-[20px]" />
                </div>
              </a>
              <a href="/">
                <div className="flex items-center justify-center laptop:w-[40px] laptop:h-[40px] w-[52px] h-[52px] bg-[#141414] rounded-[58px] gap-[10px]">
                  <img src="/images/linkedin.png" className="w-[24px] h-[24px] laptop:w-[20px] laptop:h-[20px]" />
                </div>
              </a>
              <a href="/">
                <div className="flex items-center justify-center laptop:w-[40px] laptop:h-[40px] w-[52px] h-[52px] bg-[#141414] rounded-[58px] gap-[10px]">
                  <img src="/images/twitter.png" className="w-[24px] h-[24px] laptop:w-[20px] laptop:h-[20px]" />
                </div>
              </a>
              <a href="/">
                <div className="flex items-center justify-center laptop:w-[40px] laptop:h-[40px] w-[52px] h-[52px] bg-[#141414] rounded-[58px] gap-[10px]">
                  <img src="/images/youtube.png" className="w-[24px] h-[24px] laptop:w-[20px] laptop:h-[20px]" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}