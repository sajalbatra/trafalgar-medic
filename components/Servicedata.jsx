import Alldata from "@/public/Alldata";
import ServiceStruct from "./ServiceStruct";
import Link from "next/link";

const Servicedata = () => {
  return (
    <div className="flex flex-row flex-wrap gap-10 m-16 justify-evenly">
      {
      Alldata.map((value) => (
        
        
        <ServiceStruct
          picture={value.image}
          name={value.name}
          about={value.about}
        />
        
      ))
      }
    </div>
  );
};

export default Servicedata;
