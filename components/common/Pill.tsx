

const Pill = ({ label }: { label: string }) => {
    return (
      <button className="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300">
        {label}
      </button>
    );
  };
  
  export default Pill;