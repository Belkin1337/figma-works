import { Banner } from "./banner"
import { NavigationBar } from "./navigation-bar"

export const Header = () => {
  return (
    <div className="w-full mobile:h-[146px] laptop:h-[126px] h-[163px] bg-main">
      <Banner />
      <NavigationBar />
    </div>
  )
}