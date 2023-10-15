import RevalidateButton from "@/components/RevalidateButton/RevalidateButton";
import { getCurrentWeather } from "@/utils/getCurrentWeather";
import { getTime } from "@/utils/getTime";
import Link from "next/link";

export default async function Home() {
  const currentWeather = await getCurrentWeather("seoul");
  const time = await getTime(currentWeather.location.tz_id);

  return (
    <>
      <h1>날씨 앱</h1>
      <h3>{time.dateTime}</h3>
      <ul>
        <li>
          <Link href="/seoul?name=서울">서울</Link>
          <span> {currentWeather.current.condition.text}</span>
        </li>
        <li>
          <Link href="/NYC?name=뉴욕">뉴욕</Link>
        </li>
        <li>
          <Link href="/london?name=런던">런던</Link>
        </li>
      </ul>
      <RevalidateButton tag="time" />
    </>
  );
}
