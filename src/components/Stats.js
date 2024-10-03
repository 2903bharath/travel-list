export default function Stats({ items }) {
  const numItems = items.length;
  if (!numItems) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  }

  const packedItems = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentagePacked === 100
          ? "You got everything! Ready to go ✈"
          : `💼 You have ${numItems} items on your list and you already packed ${packedItems} (${percentagePacked})%`}
      </em>
    </footer>
  );
}
