import Image from "next/image";
import useKiosco from "../hooks/useKiosco";

const Category = ({ category }) => {
  const { currentCategory, handleClickCategory } = useKiosco();
  return (
    <div
      className={`${
        currentCategory?.id === category.id ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-400`}
    >
      <Image
        alt="Icon Image"
        width={70}
        height={70}
        src={`/assets/img/icono_${category.icon}.svg`}
      />
      <button
        type="button"
        className="text-2xl font-bold hover:cursor-pointer"
        onClick={() => handleClickCategory(category.id)}
      >
        {category.name}
      </button>
    </div>
  );
};

export default Category;
