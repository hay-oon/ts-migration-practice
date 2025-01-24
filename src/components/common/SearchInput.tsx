import { useEffect, useState, ChangeEvent } from "react";
import vectorIcon from "../../assets/icons/Vector.png";

// props의 타입
interface SearchInputProps {
  keyword: string;
  setKeyword: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ keyword, setKeyword }) => {
  const [inputValue, setInputValue] = useState<string>(keyword);

  // onChange 이벤트 핸들러
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  // 디바운싱 처리
  useEffect(() => {
    const handler = setTimeout(() => {
      setKeyword(inputValue);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [inputValue, setKeyword]);

  return (
    <div className="searchInput">
      <img src={vectorIcon} alt="검색" className="searchIcon" />
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="검색어를 입력하세요"
        className="search-input"
      />
    </div>
  );
};

export default SearchInput;
