export const getTime = async (timeZone: string) => {
  const response = await fetch(
    `https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`,
    {
      next: {
        tags: ["time"],
      },
    }
  );

  if (!response.ok) {
    throw new Error("시간 정보를 가져오지 못했습니다.");
  }

  return response.json();
};
