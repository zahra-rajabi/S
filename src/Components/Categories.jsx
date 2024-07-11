import { TbList } from "react-icons/tb";

function Categories({ categoryHandler, query }) {
  const categoryItem = [
    { id: 1, type: "All" },
    { id: 2, type: "Electronics" },
    { id: 3, type: "Jewelery" },
    { id: 4, type: "Men's Clothing" },
    { id: 5, type: "Women's Clothing" },
  ];

  return (
    <section className="p-3 overflow-hidden border-2 border-black border-dashed rounded-lg ">
      <h2 className="flex items-center gap-2 mb-4 text-xl font-bold text-ORANGE">
        <TbList className="size-6" />
        <span>Categories</span>
      </h2>
      <ul className="space-y-1 " onClick={categoryHandler}>
        {categoryItem.map((item) => (
          <li
            className={`${
              query.category === item.type.toLowerCase() &&
              "bg-ORANGE hover:!bg-ORANGE"
            } cursor-pointer py-1.5 px-2 transition-all duration-200 font-semibold rounded-lg hover:text-BLUE hover:bg-WHITE`}
            key={item.id}
          >
            {item.type}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Categories;
