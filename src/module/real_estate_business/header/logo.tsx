export const Logo = () => {
  return (
    <div className="flex gap-x-[6px] items-center mobile:w-[93px] mobile:h-[28px] w-[160px] h-[48px] justify-between">
      <img
        src="/images/logo-symbol.png"
        className="mobile:w-[28px] mobile:h-[28px] 
        laptop:w-[34px] laptop:h-[34px] 
        desktop:w-[48px] desktop:h-[48px]"
      />
      <img
        src="/images/logo-text.png"
        className="mobile:w-[59px] mobile:h-[11px] 
        laptop:w-[72px] laptop:h-[14px] 
        desktop:w-[101px] desktop:h-[20px]"
      />
    </div>
  )
}