import { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { useMountStatus } from "../../hooks/useMountStatus";
import { Item } from "../Item";
import { getColor } from "../../utilities/getColor";

interface SortableItemProps {
  containerId: UniqueIdentifier;
  id: UniqueIdentifier;
  index: number;
  disabled?: boolean;
  style(args: unknown): React.CSSProperties;
  getIndex(id: UniqueIdentifier): number;
  wrapperStyle({index}: {index: number}): React.CSSProperties;
}

export function SortableItem({
  disabled,
  id,
  index,
  style,
  containerId,
  getIndex,
  wrapperStyle,
}: SortableItemProps) {
  const {
    setNodeRef,
    listeners,
    isDragging,
    isSorting,
    over,
    overIndex,
    transform,
    transition,
  } = useSortable({
    id,
  });
  const mounted = useMountStatus();
  const mountedWhileDragging = isDragging && !mounted;

  return (
    <Item
      ref={disabled ? undefined : setNodeRef}
      value={id}
      dragging={isDragging}
      sorting={isSorting}
      index={index}
      wrapperStyle={wrapperStyle({index})}
      style={style({
        index,
        value: id,
        isDragging,
        isSorting,
        overIndex: over ? getIndex(over.id) : overIndex,
        containerId,
      })}
      color={getColor(id)}
      transition={transition}
      transform={transform}
      fadeIn={mountedWhileDragging}
      listeners={listeners}
    />
  );
}

