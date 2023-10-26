import Image from "next/image";
import Link from "next/link";

const ServiceStruct = (props) => {
  return (
    <>
      <Link href={`/${props.name}`}>
        <div className="p-10 transition-transform duration-150 ease-in-out bg-white shadow-xl w-80 h-80 rounded-2xl shadow-black hover:scale-105">
          <div className="flex items-center m-2">
            <Image
              src={props.picture}
              width={80}
              height={80}
              alt="picture"
            />
          </div>
          <p className="m-3 text-2xl font-Mulish">{props.name}</p>
          <p className="m-2">{props.about}</p>
        </div>
      </Link>
    </>
  );
};

export default ServiceStruct;
