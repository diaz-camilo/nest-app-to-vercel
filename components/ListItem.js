import React from 'react';

/**
 *
 * list item with buttons to cross the item and remove it
 */
export default function ListItem({
  listItem,
  index,
  handleFinish,
  handleRemove,
}) {
  return (
    <div>
      <span
        style={
          listItem.isFinished
            ? {
                textDecorationLine: 'line-through',
                color: 'gray',
              }
            : {}
        }
      >
        {listItem.description}
      </span>
      <span>
        <button onClick={() => handleFinish(index)}>✅</button>
        <button onClick={() => handleRemove(index)}>❌</button>
      </span>
    </div>
  );
}
