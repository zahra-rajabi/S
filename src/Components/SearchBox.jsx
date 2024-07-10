import { TbSearch } from "react-icons/tb";

function SearchBox({ search, setSearch, searchHandler }) {
  function changeHandler(e) {
    let target = e.target.value.toLowerCase();
    setSearch(target);
  }

  return (
    <section className="flex items-center gap-2 mb-8">
      <div className="px-2 py-1 border-2 border-dashed rounded-lg bg-WHITE border-ORANGE selection:bg-ORANGE selection:text-WHITE">
        <input
          type="text"
          className="focus:outline-none "
          value={search}
          onChange={changeHandler}
        />
      </div>
      <button
        className="p-2 rounded-lg bg-ORANGE text-WHITE"
        onClick={searchHandler}
      >
        <TbSearch className="size-5" />
      </button>
    </section>
  );
}

export default SearchBox;
