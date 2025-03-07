import { add } from "date-fns";

export const targetCountries = [
	"Nigeria",
	"Ghana",
	"Mali",
	"Liberia",
	"Cameroon",
	"Gambia",
];

export const MAX_FILE_SIZE = 5 * 1024 * 1024;

export const MAX_FILE_QUANTITY = 5;

export const allowedFileTypes = ["image/jpeg", "image/png", "image/jpg"];

export const acceptedFilesString = allowedFileTypes.join(", ");

export const DATE_TODAY = new Date();

export const DATE_NEXT_TOMORROW = add(DATE_TODAY, { days: 2 });
