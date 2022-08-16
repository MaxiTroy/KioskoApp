import Image from "next/image";
import useKiosco from "../hooks/useKiosco";
import Category from "./Category";

const Sidebar = () => {
  const { categories } = useKiosco();
  return (
    <>
      <Image width={300} height={100} src="/assets/img/logo.svg" alt="Image" />
      <nav className="mt-10">
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
