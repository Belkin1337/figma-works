import "./index.css"

export const CoworkingModule = () => {
  return (
    <>
      <div className="flex flex-col items-center w-full bg-no-repeat bg-cover min-h-screen" style={{ backgroundImage: `url("/images/coworking-bg.png")` }}>
        <div className="h-screen absolute top-0 left-0 right-0 bottom-0 w-full bg-slate-950/80" />
        <div className="flex justify-between w-[1110px] h-[29px] relative top-[25px]">
          <p className="text-[24px] leading-[28px] font-bold text-white">
            Brainwave.io
          </p>
          <div className="flex gap-x-[16px] gilroy *:text-white *:font-bold *:text-[15px] *:leading-[26px] items-center w-[333px] h-[26px]">
            <p>
              Demos
            </p>
            <p>
              Pages
            </p>
            <p>
              Support
            </p>
            <p>
              Contact
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between w-[770px] h-[387px] relative top-[291px] right-50">
          <p className="gilroy_regular uppercase text-[13px] leading-[16px] text-center text-[#68D585]">
            Shared space in your town
          </p>
          <p className="gilroy text-[60px] leading-[65px] text-center text-white">
            Rent desk space in a
            shared office environment
          </p>
          <div className="flex items-center gap-[11px] w-[770px] h-[95px] rounded-lg bg-white">
            <div className="flex items-center p-[14px] justify-between w-[250px] border bg-white rounded-lg border-[#E7E9ED] h-[50px]">
              <div className="flex items-center gap-x-1">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 6C12.3051 6 9 8.41112 9 12.4458C9 16.7247 14.975 22.6993 15.2297 22.9514C15.3012 23.0227 15.3987 23.0625 15.5 23.0625C15.6013 23.0625 15.6988 23.0227 15.7703 22.9514C16.025 22.6993 22 16.7247 22 12.4458C22 8.41112 18.6949 6 15.5 6ZM15.5 14.7208C14.2348 14.7208 13.2059 13.7005 13.2059 12.4458C13.2059 11.1912 14.2348 10.1708 15.5 10.1708C16.7652 10.1708 17.7941 11.1912 17.7941 12.4458C17.7941 13.7005 16.7652 14.7208 15.5 14.7208Z" fill="#161C2D" />
                </svg>
                <p className="gilroy_regular text-[15px] text-[#161C2D] leading-[26px]">
                  Select Location
                </p>
              </div>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4 7L9 12L14 7H4Z" fill="#161C2D" />
              </svg>
            </div>
            <div className="h-[94px] w-[1px] bg-[#E7E9ED]" />
            <div className="flex items-center p-[14px] justify-between w-[250px] border bg-white rounded-lg border-[#E7E9ED] h-[50px]">
              <div className="flex items-center gap-x-3">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 7.64705H17" stroke="#2D2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <rect x="1" y="2.88235" width="16" height="14.1176" rx="2" stroke="#2D2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M5.23621 4.76471V1" stroke="#2D2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12.7655 4.76471V1" stroke="#2D2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className="gilroy_regular text-[15px] text-[#161C2D] leading-[26px]">
                  Select Date
                </p>
              </div>
              <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L5 5L10 0H0Z" fill="#161C2D" />
              </svg>
            </div>
            <button className="w-[199px] h-[51px] bg-[#473BF0] rounded-lg">
              <p className="gilroy_semibold text-[17px] leading-[32px] text-center text-white">
                Search Place
              </p>
            </button>
          </div>
          <div className="flex items-center justify-between w-[259px] h-[29px]">
            <div className="flex items-center justify-center border border-white rounded-full w-[18px] h-[18px]">
              <svg width="6" height="8" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.607509 0.754658C0.560872 0.723211 0.499048 0.718373 0.447349 0.742563C0.395804 0.766753 0.363281 0.815844 0.363281 0.869489V7.13042C0.363281 7.18407 0.395804 7.23316 0.447349 7.25735C0.469134 7.2676 0.493065 7.27272 0.51669 7.27272C0.548753 7.27272 0.580662 7.26347 0.607509 7.24526L5.20978 4.11479C5.24921 4.08789 5.27237 4.04521 5.27237 3.99996C5.27237 3.95471 5.24921 3.91202 5.20978 3.88513L0.607509 0.754658Z" fill="white" />
              </svg>
            </div>
            <p className="text-white gilroy_regular text-[17px] leading-[29px]">
              Take virtual tour of our spaces
            </p>
          </div>
        </div>
        <div className="flex justify-center border rounded-full items-center w-[40px] h-[40px] relative top-[461px]">
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 1L7 7L1 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col gap-y-[294px] pt-12">
        <div className="flex items-center justify-center bg-white w-full space-x-40 h-[214px]">
          <div className="flex flex-col w-[214px] h-[140px]">
            <p className="gilroy_semibold text-[#161C2D] text-[48px] leading-[58px] text-center">
              06
            </p>
            <p className="text-[19px] leading-[32px] text-[#161C2D] text-center gilroy_regular">
              Offices are available on different countries
            </p>
          </div>
          <div className="flex flex-col w-[214px] h-[140px]">
            <p className="gilroy_semibold text-[#161C2D] text-[48px] leading-[58px] text-center">
              238
            </p>
            <p className="text-[19px] leading-[32px] text-[#161C2D] text-center gilroy_regular">
              Seats are available right now with dedicated support
            </p>
          </div>
          <div className="flex flex-col w-[214px] h-[140px]">
            <p className="gilroy_semibold text-[#161C2D] text-[48px] leading-[58px] text-center">
              1,395
            </p>
            <p className="text-[19px] leading-[32px] text-[#161C2D] text-center gilroy_regular">
              People are using our co-work spaces right now
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-y-[90px]">
          <div className="flex flex-col">
            <p className="gilroy_semibold text-[48px] leading-[58px] text-center">
              Popular locations
            </p>
            <p className="gilroy_regular text-[19px] leading-[32px] text-[#161C2D] text-center">
              With lots of unique blocks, you can easily build a page easily without any coding.
            </p>
          </div>
          <div className="flex justify-center items-end gap-x-12">
            <div className="flex flex-col gap-y-8 justify-between h-[556px]">
              <div className="rounded-xl overflow-hidden w-[330px] h-[456px]">
                <img
                  src="/images/beauview.png"
                  width="330"
                  height="441"
                  className="rounded-xl"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="gilroy_semibold text-[24px] leading-[34px] text-[#161C2D]">
                  Beauview
                </p>
                <p className="gilroy_regular text-[17px] leading-[29px] text-[#161C2D]">
                  37 seats
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-8 justify-between h-[570px]">
              <img
                src="/images/haleyborough.png"
                width="350"
                height="469"
                className="rounded-xl object-cover"
              />
              <div className="flex flex-col items-center">
                <p className="gilroy_semibold text-[24px] leading-[34px] text-[#161C2D]">
                  Haleyborough
                </p>
                <p className="gilroy_regular text-[17px] leading-[29px] text-[#161C2D]">
                  12 seats
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-8 justify-between h-[570px]">
              <img
                src="/images/jeromyshire.png"
                width="330"
                height="441"
                className="rounded-xl object-cover w-[330px] h-[471px]"
              />
              <div className="flex flex-col items-center">
                <p className="gilroy_semibold text-[24px] leading-[34px] text-[#161C2D]">
                  Jeromyshire
                </p>
                <p className="gilroy_regular text-[17px] leading-[29px] text-[#161C2D]">
                  28 seats
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[127px] w-full px-[395px]">
          <div className="flex justify-center w-full bg-[#F4F7FA]">
            <div className="flex flex-col gap-y-[106px] w-1/2">
              <div className="flex flex-col w-[534px] h-[200px] justify-between">
                <p className="text-[48px] leading-[58px] text-[#161C2D] gilroy_semibold">
                  Work around very
                  talented people.
                </p>
                <p className="text-[19px] leading-[32px] text-[#161C2D] gilroy_regular">
                  With lots of unique blocks, you can easily build a page easily without any coding.
                </p>
              </div>
              <div className="overflow-hidden w-[520px] h-[600px] rounded-lg">
                <img src="/images/men_with_coffee.png" />
              </div>
            </div>
            <div className="flex flex-col w-1/2">
              <div className="overflow-hidden w-[520px] h-[670px] rounded-lg">
                <img src="/images/work_girls.png" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-start justify-between w-[349px] h-[136px]">
              <img
                src="/images/desk-drawer.png"
                width="45"
                height="36"
                className="mr-[26px] relative top-2"
              />
              <div className="flex flex-col">
                <p className="gilroy_semibold text-[21px] leading-[32px]">
                  Dedicated Desk
                </p>
                <p className="gilroy_regular text-[17px] leading-[29px]">
                  With lots of unique blocks, you can easily build a page without coding.
                  Build your next landing page.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-between w-[349px] h-[136px]">
              <img
                src="/images/wifi.png"
                width="40"
                height="32"
                className="mr-[26px] relative top-2"
              />
              <div className="flex flex-col">
                <p className="gilroy_semibold text-[21px] leading-[32px]">
                  High Speed Internet
                </p>
                <p className="gilroy_regular text-[17px] leading-[29px]">
                  With lots of unique blocks, you can easily build a page without coding.
                  Build your next landing page.
                </p>
              </div>
            </div>
            <div className="flex items-start justify-between w-[349px] h-[136px]">
              <img
                src="/images/mug.png"
                width="35"
                height="40"
                className="mr-[26px] relative top-2"
              />
              <div className="flex flex-col">
                <p className="gilroy_semibold text-[21px] leading-[32px]">
                  Unlimited Coffee
                </p>
                <p className="gilroy_regular text-[17px] leading-[29px]">
                  With lots of unique blocks, you can easily build a page without coding.
                  Build your next landing page.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-x-[100px] bg-[#161C2D] w-full h-[795px]">
          <div className="flex flex-col justify-between w-[469px] h-[497px]">
            <div className="flex flex-col gap-y-[15px]">
              <p className="gilroy_semibold text-[48px] leading-[58px] text-white">
                We are always here for your backup.
              </p>
              <p className="gilroy_regular text-[19px] leading-[32px] text-white">
                We share common trends and strategies for creating & improving your rental income.
              </p>
            </div>
            <div className="flex flex-col gap-y-[40px]">
              <div className="flex items-start gap-x-[12px] w-[391px] h-[101px]">
                <img
                  src="/images/yes.png"
                  width="30"
                  height="30"
                  className="relative top-2"
                />
                <div className="flex flex-col">
                  <p className="text-[21px] leading-[32px] text-white gilroy_semibold">
                    Noise Free Locations
                  </p>
                  <p className="text-[17px] leading-[29px] text-white gilroy_regular">
                    With lots of unique blocks, you can easily build a page without coding.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-x-[12px] w-[391px] h-[101px]">
                <img
                  src="/images/yes.png"
                  width="30"
                  height="30"
                  className="relative top-2"
                />
                <div className="flex flex-col">
                  <p className="text-[21px] leading-[32px] text-white gilroy_semibold">
                    24/7 Hour Support
                  </p>
                  <p className="text-[17px] leading-[29px] text-white gilroy_regular">
                    With lots of unique blocks, you can easily build a page without coding.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-[27px] p-[33px] border-t-4 border-[#68D585] bg-white rounded-lg w-[542px] h-[447px]">
            <div className="flex flex-col gap-y-[18px] h-[161px] justify-start">
              <div className="flex items-center justify-between">
                <p className="text-[#161C2D] text-[21px] leading-[32px] gilroy_semibold">
                  How to setup Shade Pro?
                </p>
                <img
                  src="/images/small-right.png"
                  width="12"
                  height="6"
                />
              </div>
              <p className="text-[17px] leading-[29px] text-[#161C2D] gilroy_regular">
                With lots of unique blocks, you can easily build a page with coding.
                Build your next landing page. Integer ut obe ryn. Sed feugiat vitae turpis a porta.
              </p>
            </div>
            <div className="flex flex-col gap-y-[18px] h-[61px] justify-start">
              <div className="flex items-center justify-between">
                <p className="text-[#161C2D] text-[21px] leading-[32px] gilroy_semibold">
                  Can I use Shade Pro for my clients?
                </p>
                <img
                  src="/images/small-right.png"
                  width="12"
                  height="6"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-[18px] h-[61px] justify-start">
              <div className="flex items-center justify-between">
                <p className="text-[#161C2D] text-[21px] leading-[32px] gilroy_semibold">
                  How often do you release update?
                </p>
                <img
                  src="/images/small-right.png"
                  width="12"
                  height="6"
                />
              </div>
            </div>
            <div className="flex flex-col gap-y-[18px] h-[61px] justify-start">
              <div className="flex items-center justify-between">
                <p className="text-[#161C2D] text-[21px] leading-[32px] gilroy_semibold">
                  How can I access to old version?
                </p>
                <img
                  src="/images/small-right.png"
                  width="12"
                  height="6"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
          <div className="flex flex-col gap-y-[58px] items-center w-[527px] h-[406]">
            <div className="flex flex-col gap-y-[16px]">
              <p className="h-[58px] text-[48px] leading-[58px] text-[#161C2D] text-center gilroy_semibold">
                Get latest updates
              </p>
              <p className="text-[19px] leading-[32px] text-[#161C2D] text-center gilroy_regular">
                With lots of unique blocks, you can easily build a page without coding.
                Build your next landing page.
              </p>
            </div>
            <div className="flex flex-col gap-y-[16px]">
              <div className="flex items-center p-[15px] w-[369px] h-[59px] border border-[#E7E9ED] rounded-lg">
                <p className="text-[17px] leading-[29px] text-[#161C2D] gilroy_regular">
                  Enter your email
                </p>
              </div>
              <div className="flex items-center justify-center w-[368px] h-[59px] rounded-lg p-[13px] bg-[#473BF0]">
                <p className="text-[17px] leading-[32px] gilroy_semibold text-center text-white">
                  Subscribe
                </p>
              </div>
              <p className="w-[365px] h-[52px] px-[8px] text-[15px] leading-[26px] text-[#161C2D] text-center gilroy_regular">
                We’ll never share your details with third parties.
                View our Privacy Policy for more info.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-[533px] border border-[#E7E9ED] px-[245px]">
          <div className="flex items-start justify-between py-[120px]">
            <div className="flex flex-col gap-y-[20px] justify-between w-[144px] h-[206px]">
              <p className="text-[15px] leading-[26px] text-[#161C2D] gilroy_regular">
                Company
              </p>
              <div className="flex flex-col *:text-[17px] *:leading-[40px] *:text-[#161C2D] *:gilroy_regular">
                <p>
                  About us
                </p>
                <p>
                  Contact us
                </p>
                <p>
                  Careers
                </p>
                <p>
                  Press
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-[20px] justify-between w-[125px] h-[246px]">
              <p className="text-[15px] leading-[26px] text-[#161C2D] gilroy_regular">
                Product
              </p>
              <div className="flex flex-col *:text-[17px] *:leading-[40px] *:text-[#161C2D] *:gilroy_regular">
                <p>
                  Features
                </p>
                <p>
                  Pricing
                </p>
                <p>
                  News
                </p>
                <p>
                  Help desk
                </p>
                <p>
                  Support
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-[20px] justify-between w-[156px] h-[206px]">
              <p className="text-[15px] leading-[26px] text-[#161C2D] gilroy_regular">
                Services
              </p>
              <div className="flex flex-col *:text-[17px] *:leading-[40px] *:text-[#161C2D] *:gilroy_regular">
                <p>
                  Digital Marketing
                </p>
                <p>
                  Content Writing
                </p>
                <p>
                  SEO for Business
                </p>
                <p>
                  UI Design
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-[20px] justify-between w-[161px] h-[166px]">
              <p className="text-[15px] leading-[26px] text-[#161C2D] gilroy_regular">
                Legal
              </p>
              <div className="flex flex-col *:text-[17px] *:leading-[40px] *:text-[#161C2D] *:gilroy_regular">
                <p>
                  Privacy Policy
                </p>
                <p>
                  Terms & Conditions
                </p>
                <p>
                  Return Policy
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-y-[20px] w-[250px] h-[126px]">
              <p className="text-[15px] leading-[26px] text-[#161C2D] gilroy_regular">
                Contact us
              </p>
              <div className="flex flex-col *:text-[17px] *:leading-[40px] *:text-[#473BF0] *:gilroy_semibold">
                <p>
                  support@brainwave.io
                </p>
                <p>
                  +133-394-3439-1435
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center h-[58px] border-t border-[#E7E9ED] justify-between">
            <p className="text-[15px] leading-[26px] text-[#161C2D] gilroy_regular">
              © 2024 Copyright, All Right Reserved, Made by Seju_ui_ux
            </p>
            <div className="flex items-center gap-x-[30px]">
              <img
                src="/images/logo-twitter.png"
                width="18"
                height="15"
              />
              <img
                src="/images/logo-facebook.png"
                width="19"
                height="19"
                className="fill-[#473BF0]"
              />
              <img
                src="/images/logo-instagram.png"
                width="19"
                height="19"
              />
              <img
                src="/images/logo-linkedin.png"
                width="19"
                height="19"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}