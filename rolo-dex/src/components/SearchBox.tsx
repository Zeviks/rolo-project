interface onSearchProp {
    onSearchChange:  (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

const SearchBox = ({ onSearchChange, placeholder }: onSearchProp, ) => {
  return (
    <input 
        className="bg-gray-50 border rounded-2xl border-gray-300 text-gray-900 text-sm block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-400 dark:focus:border-emerald-400 transiton-all" 
        type="search" 
        placeholder={placeholder} 
        onChange={(e) => onSearchChange(e)}
    />
  )
}

export default SearchBox