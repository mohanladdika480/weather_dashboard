import dayjs from "dayjs";

export const formatTime = (datetime) => {
  const date = new Date(datetime);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strMinutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + (strMinutes === "00" ? "" : ":" + strMinutes) + " " + ampm;
};

export const getDayName = (date) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[new Date(date)?.getDay()];
};

export const isMoreThan14DaysFromToday = (date) => {
  const today = dayjs().startOf("day");
  const inputDate = dayjs(date).startOf("day");
  const diffInDays = inputDate.diff(today, "day");
  return diffInDays > 13;
};

export const formatDateToYYYYMMDD = (date) => {
  const parsedDate = dayjs(date);
  const formattedDate = parsedDate.format("YYYY-MM-DD");
  return formattedDate;
};
