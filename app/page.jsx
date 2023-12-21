import Image from "next/image";
import Nav from "./components/Nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <h1 className="text-center font-bold text-4xl p-8 m-8">
        Good Evening, Biplob
      </h1>
    </div>
  );
}
