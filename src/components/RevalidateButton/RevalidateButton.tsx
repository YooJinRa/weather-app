"use client";
type Props = {
  tag: string;
};

export default function RevalidateButton({ tag }: Props) {
  const handleClick = async () => {
    const response = await fetch(`/api/revalidate?tag=${tag}`, {
      method: "POST",
    });

    console.log(response.json());
  };

  return <button onClick={handleClick}>캐시 비우기</button>;
}
