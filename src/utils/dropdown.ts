export const openDropdown = ({
  selector,
  idx,
}: {
  selector: string;
  idx?: number;
}) => {
  const dropdown = document.querySelector(`${selector}`);

  setTimeout(() => {
    if (!dropdown!.classList.contains("open")) {
      dropdown!.classList.add("open");
    } else {
      dropdown!.classList.remove("open");
    }
  }, 50);
};
