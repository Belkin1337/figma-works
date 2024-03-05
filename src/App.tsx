import { modules } from "./module/modules"

export const App = () => {
  return (
    <div className="flex flex-col gap-y-6 bg-neutral-900 h-screen w-full justify-center items-center">
      <p className="text-white text-5xl">
        Привет!
      </p>
      <p className="text-white text-2xl">
        Доступные модули:
      </p>
      <div className="flex flex-col w-1/2 gap-y-2">
        {modules.map((item) => (
          <div className="flex flex-col gap-[8px] bg-neutral-950 border border-neutral-800 p-2 rounded-lg">
            <h1 className="text-cyan-300 text-2xl">
              {item.name}
            </h1>
            <a href={item.route} className="hover:underline text-xl text-lime-300">
              Перейти
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}