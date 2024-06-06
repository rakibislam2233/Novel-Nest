const SectionTitle = ({
  title,
  btnName,
}: {
  title: string;
  btnName: string;
}) => {
  return (
    <div className="flex justify-between items-center py-5">
      <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
      <button className="px-5 py-2 rounded-md bg-pink-500 text-white opacity-95 hover:opacity-100 transition-all duration-300">
        {btnName}
      </button>
    </div>
  );
};

export default SectionTitle;
