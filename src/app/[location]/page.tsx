import HomeButton from "@/components/HomeButton/HomeButton";
import { getForecast } from "@/utils/getForecast";

type Props = {
  params: {
    location: string;
  };
  searchParams: {
    name: string;
  };
};

export const generateMetadata = ({ searchParams }: Props) => {
  return {
    title: `${searchParams.name}의 3일 예보`,
    description: `${searchParams.name}의 3일 예보를 확인하세요`,
  };
};

export default async function Detail({ params, searchParams }: Props) {
  const name = searchParams.name;
  const { forecast } = await getForecast(params.location);

  return (
    <>
      <h1>{name}의 3일 예보</h1>
      <ul>
        {forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date} / {day.day.avgtemp_c}
          </li>
        ))}
      </ul>
      <HomeButton />
    </>
  );
}
