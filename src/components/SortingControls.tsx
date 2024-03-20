import { useJobItemsContext } from "../lib/hooks";

export default function Sorting() {
  const {sortBy, handleSortByChange} = useJobItemsContext()
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>
      <SortingButton
        onClick={() => handleSortByChange("relevant")}
        isActive={sortBy === "relevant"}
      >
        Relevant
      </SortingButton>
      <SortingButton
        onClick={() => handleSortByChange("recent")}
        isActive={sortBy === "recent"}
      >
        Recent
      </SortingButton>
    </section>
  );
}
type SortingButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
};

function SortingButton({ children, onClick, isActive }: SortingButtonProps) {
  return (
    <button
      className={`sorting__button sorting__button--recent ${
        isActive ? "sorting__button--active" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
