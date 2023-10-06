import React from "react";
import "./style.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillTrash3Fill } from "react-icons/bs";
import Typography from "../../atoms/Typography";
import Box from "../../atoms/Box";
import Button from "../../atoms/Button";
import { Moment } from "moment";

type SearchDataType = {
  city: string;
  country: string;
  timestamp: Moment;
  icon: string;
};

type SearchHistoryItemProps = {
  data: SearchDataType;
  index: number;
  onClick?: () => void;
  onDelete?: () => void;
};

const SearchHistoryItem = ({
  data,
  index,
  onClick,
  onDelete,
}: SearchHistoryItemProps) => {
  return (
    <Box flexDirection="column" className="search-history-item">
      <Box justifyContent="space-between" paddingY="medium" alignItems="center">
        <Box alignItems="center">
          <Typography>{index + 1}.</Typography>

          <img
            src={`https://openweathermap.org/img/wn/${data.icon}@2x.png`}
            alt={data.country}
            width="40px"
          />

          <Typography>
            {data.city}, {data.country}
          </Typography>
        </Box>

        <Box gap="small" alignItems="center">
          <Typography>{data.timestamp.format("hh:MM:ss A")}</Typography>

          <Box gap="small" justifyContent="flex-end">
            <Button variant="circle" size="medium" onClick={onClick}>
              <AiOutlineSearch />
            </Button>
            <Button
              variant="circle"
              size="medium"
              color="secondary"
              onClick={onDelete}
            >
              <BsFillTrash3Fill />
            </Button>
          </Box>
        </Box>
      </Box>
      <hr />
    </Box>
  );
};

export default SearchHistoryItem;
