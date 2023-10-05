import React from "react";
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import Typography from "../../atoms/Typography";
import Box from "../../atoms/Box";
import Button from "../../atoms/Button";

type SearchDataType = {
  name: string;
  time: string;
};

type SearchHistoryItemProps = {
  data: SearchDataType;
  index: number;
};

const SearchHistoryItem = ({ data, index }: SearchHistoryItemProps) => {
  return (
    <Box justifyContent="space-between">
      <Typography>
        {index} {data.name}
      </Typography>

      <Box gap="small" alignItems="center">
        <Typography>{data.time}</Typography>
        <Button style="circle" size="medium">
          <AiOutlineSearch />
        </Button>
        <Button style="circle" size="medium" variant="secondary">
          <BsFillTrash3Fill />
        </Button>
      </Box>
    </Box>
  );
};

export default SearchHistoryItem;
