import { MoonFilled } from "./icons/MoonFilled";
import { SunFilled } from "./icons/SunFilled";
import { Typescript } from "./icons/Typescript";

export const Header = () => {
  const onChangeTheme = (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.currentTarget.checked ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
  }
  return (
    <header class="flex flex-col py-5">
      <label class="self-end pr-6 pb-5 z-10 cursor-pointer">
        <input type="checkbox" name="theme" class="sr-only" onChange={onChangeTheme} defaultChecked={true} />
        <MoonFilled class="size-6 text-[#041727]/70 hover:text-[#041727] transition-colors block dark:hidden" />
        <SunFilled class="size-6 text-[#f8fcff]/70 hover:text-[#f8fcff] transition-colors hidden dark:block" />
      </label>
      <div class="flex  justify-center items-center">
        <h1 class="text-[#0099ff] dark:text-white  max-sm:text-5xl text-6xl font-semibold mr-4">Todo List</h1>
        <Typescript className="size-14 max-sm:size-8" />
      </div>

    </header>
  )
}