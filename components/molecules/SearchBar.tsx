"use client";

import React from "react";
import { Input, Button } from "../atoms";

interface SearchBarProps {
  placeholder?: string;
  buttonLabel?: string;
  onSearch?: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search...",
  buttonLabel = "Search",
  onSearch,
}) => {
  const [value, setValue] = React.useState("");

  return (
    <div className="flex items-center gap-2">
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1"
      />
      <Button onClick={() => onSearch?.(value)}>{buttonLabel}</Button>
    </div>
  );
};

export default SearchBar;
