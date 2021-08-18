export const generateRandomColors = (n = 500) => {
	return Array.from(Array(n)).map(
		() =>
			`rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(
				255
			)})`
	);
};

export const randomNumber = (max: number) =>
	Math.floor(Math.random() * (max + 1));
