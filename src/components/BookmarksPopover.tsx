import JobList from "./JobList";
import { useBookmarksContext } from "../lib/hooks";
import { forwardRef } from "react";
import { createPortal } from "react-dom";

export const BookmarksPopover = forwardRef<HTMLDivElement>(function (_, ref) {
  const { bookmarkedJobItems, isLoading } = useBookmarksContext();

  return createPortal(
    <div ref={ref} className="bookmarks-popover">
      <JobList jobItems={bookmarkedJobItems} isLoading={isLoading} />
    </div>,
    document.body
  );
});
