export const CloseButton = () => {
  return (
    <div className="flex items-center justify-center cursor-pointer rounded-[75px] mobile:h-[26px] mobile:w-[26px] h-[32px] w-[32px] text-center p-1 bg-white/10">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 13L13 1M1 1L13 13" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  )
}