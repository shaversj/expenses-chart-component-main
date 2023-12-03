const Header = () => {
  return (
    <>
      <header className={"bg-soft-red w-full px-[1.2rem] py-[1.1rem] rounded-lg flex mt-[68px] lg:max-w-[542px] lg:px-[32px] lg:py-[28px] lg:rounded-3xl"}>
        <div>
          <span className={"text-very-pale-orange font-extralight lg:text-[18px]"}>My balance</span>
          <h2 className={"text-[24px] text-very-pale-orange font-bold lg:text-[32px]"}>$921.48</h2>
        </div>
        <img className={"w-[60px] lg:w-[72px] ml-auto sm:mr-1"} src={"./src/assets/images/logo.svg"} alt={""} />
      </header>
    </>
  );
};

export default Header;
